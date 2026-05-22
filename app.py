import subprocess
import sys
import os
import re
from datetime import datetime, timedelta, timezone
from functools import wraps

from dotenv import load_dotenv
load_dotenv()  # loads .env into os.environ

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
    import psycopg2.errors
    DB_AVAILABLE = True
except ImportError:
    DB_AVAILABLE = False

import hmac
import hashlib
import base64 as _b64

app = Flask(__name__)
CORS(app)

SECRET_KEY   = os.environ.get('SECRET_KEY', 'pytm-dev-secret-change-in-production')
DATABASE_URL = os.environ.get('DATABASE_URL', '')

# ─── Code-execution config ────────────────────────────────────────────────────
BLOCKED_MODULES  = ['subprocess', 'socket', 'urllib', 'http', 'ftplib',
                    'smtplib', 'telnetlib', 'xmlrpc', 'imaplib', 'poplib']
MAX_OUTPUT_CHARS = 15000
EXECUTION_TIMEOUT = 10

# ─── DB helpers ───────────────────────────────────────────────────────────────
def get_db():
    if not DB_AVAILABLE or not DATABASE_URL:
        raise RuntimeError('Database not configured. Set DATABASE_URL.')
    return psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)


def init_db():
    if not DB_AVAILABLE or not DATABASE_URL:
        return
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS users (
                    id            SERIAL PRIMARY KEY,
                    email         VARCHAR(255) UNIQUE NOT NULL,
                    password_hash VARCHAR(255) NOT NULL,
                    role          VARCHAR(10) NOT NULL DEFAULT 'student'
                                  CHECK (role IN ('admin','student')),
                    name          VARCHAR(255) NOT NULL,
                    created_at    TIMESTAMPTZ DEFAULT NOW()
                )
            """)
            cur.execute("""
                CREATE TABLE IF NOT EXISTS approvals (
                    id            SERIAL PRIMARY KEY,
                    user_id       INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
                    approval_type VARCHAR(10) NOT NULL
                                  CHECK (approval_type IN ('trial','full')),
                    trial_days    INTEGER DEFAULT 30,
                    approved_at   TIMESTAMPTZ NOT NULL,
                    expires_at    TIMESTAMPTZ NOT NULL,
                    approved_by   INTEGER REFERENCES users(id),
                    updated_at    TIMESTAMPTZ DEFAULT NOW()
                )
            """)
        conn.commit()
        conn.close()
    except Exception as exc:
        print(f'DB init error: {exc}', file=sys.stderr)


# ─── Minimal HS256 JWT (stdlib only) ─────────────────────────────────────────
def _b64url_enc(data: bytes) -> str:
    return _b64.urlsafe_b64encode(data).rstrip(b'=').decode()

def _b64url_dec(s: str) -> bytes:
    s += '=' * (-len(s) % 4)
    return _b64.urlsafe_b64decode(s)

def make_token(user_id, email, role, name):
    import json as _json
    header  = _b64url_enc(b'{"alg":"HS256","typ":"JWT"}')
    payload = _b64url_enc(_json.dumps({
        'user_id': user_id,
        'email':   email,
        'role':    role,
        'name':    name,
        'exp': int((datetime.now(timezone.utc) + timedelta(days=7)).timestamp()),
        'iat': int(datetime.now(timezone.utc).timestamp()),
    }).encode())
    msg = f'{header}.{payload}'.encode()
    sig = _b64url_enc(hmac.new(SECRET_KEY.encode(), msg, hashlib.sha256).digest())
    return f'{header}.{payload}.{sig}'

def _jwt_decode(token: str) -> dict:
    import json as _json
    try:
        h, p, s = token.split('.')
    except ValueError:
        raise ValueError('Malformed token')
    msg      = f'{h}.{p}'.encode()
    expected = _b64url_enc(hmac.new(SECRET_KEY.encode(), msg, hashlib.sha256).digest())
    if not hmac.compare_digest(s, expected):
        raise ValueError('Invalid signature')
    data = _json.loads(_b64url_dec(p))
    if data.get('exp', 0) < datetime.now(timezone.utc).timestamp():
        raise ValueError('Token expired')
    return data

def _decode_bearer():
    auth = request.headers.get('Authorization', '')
    if not auth.startswith('Bearer '):
        return None
    try:
        return _jwt_decode(auth[7:])
    except Exception:
        return None


def require_auth(f):
    @wraps(f)
    def wrapper(*a, **kw):
        user = _decode_bearer()
        if not user:
            return jsonify({'error': 'Authentication required'}), 401
        return f(user, *a, **kw)
    return wrapper


def require_admin(f):
    @wraps(f)
    def wrapper(*a, **kw):
        user = _decode_bearer()
        if not user:
            return jsonify({'error': 'Authentication required'}), 401
        if user.get('role') != 'admin':
            return jsonify({'error': 'Admin access required'}), 403
        return f(user, *a, **kw)
    return wrapper


# ─── Approval info helper ────────────────────────────────────────────────────
def build_approval_info(approval):
    if not approval:
        return None
    now = datetime.now(timezone.utc)
    exp = approval['expires_at']
    if exp.tzinfo is None:
        exp = exp.replace(tzinfo=timezone.utc)
    active = exp > now
    days_remaining = max(0, (exp - now).days)
    return {
        'type':          approval['approval_type'],
        'trial_days':    approval['trial_days'],
        'approved_at':   approval['approved_at'].isoformat(),
        'expires_at':    exp.isoformat(),
        'days_remaining': days_remaining,
        'active':        active,
    }


# ─── Page routes ─────────────────────────────────────────────────────────────
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login')
def login_page():
    return render_template('login.html')


@app.route('/admin')
def admin_page():
    return render_template('admin.html')


# ─── Auth API ─────────────────────────────────────────────────────────────────
@app.route('/api/auth/config')
def auth_config():
    return jsonify({'auth_enabled': bool(DB_AVAILABLE and DATABASE_URL)})


@app.route('/api/auth/register', methods=['POST'])
def register():
    if not DB_AVAILABLE or not DATABASE_URL:
        return jsonify({'error': 'Database not configured'}), 503
    data  = request.get_json(silent=True) or {}
    name  = data.get('name', '').strip()
    email = data.get('email', '').strip().lower()
    pw    = data.get('password', '')

    if not name or not email or not pw:
        return jsonify({'error': 'Name, email and password are required'}), 400
    if len(pw) < 6:
        return jsonify({'error': 'Password must be at least 6 characters'}), 400
    if '@' not in email or '.' not in email:
        return jsonify({'error': 'Invalid email address'}), 400

    try:
        pw_hash = generate_password_hash(pw)
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO users (name,email,password_hash,role) VALUES (%s,%s,%s,'student') RETURNING id",
                (name, email, pw_hash)
            )
            row = cur.fetchone()
        conn.commit(); conn.close()
        return jsonify({'message': 'Account created. Awaiting admin approval.', 'user_id': row['id']}), 201
    except Exception as exc:
        if 'unique' in str(exc).lower():
            return jsonify({'error': 'Email already registered'}), 409
        return jsonify({'error': str(exc)}), 500


@app.route('/api/auth/login', methods=['POST'])
def do_login():
    if not DB_AVAILABLE or not DATABASE_URL:
        return jsonify({'error': 'Database not configured'}), 503
    data  = request.get_json(silent=True) or {}
    email = data.get('email', '').strip().lower()
    pw    = data.get('password', '')

    if not email or not pw:
        return jsonify({'error': 'Email and password required'}), 400

    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM users WHERE email=%s", (email,))
            user = cur.fetchone()
        conn.close()

        if not user or not check_password_hash(user['password_hash'], pw):
            return jsonify({'error': 'Invalid email or password'}), 401

        approval_info = None
        if user['role'] == 'student':
            conn = get_db()
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM approvals WHERE user_id=%s", (user['id'],))
                approval = cur.fetchone()
            conn.close()

            if not approval:
                return jsonify({'error': 'Your account is pending admin approval.', 'code': 'PENDING'}), 403

            info = build_approval_info(approval)
            if not info['active']:
                return jsonify({'error': 'Your access has expired. Contact the administrator.', 'code': 'EXPIRED'}), 403

            approval_info = info

        token = make_token(user['id'], user['email'], user['role'], user['name'])
        return jsonify({
            'token': token,
            'user': {
                'id':       user['id'],
                'name':     user['name'],
                'email':    user['email'],
                'role':     user['role'],
                'approval': approval_info,
            }
        })
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/auth/me')
@require_auth
def me(current_user):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("SELECT id,name,email,role FROM users WHERE id=%s", (current_user['user_id'],))
            user = cur.fetchone()
        conn.close()

        if not user:
            return jsonify({'error': 'User not found'}), 404

        approval_info = None
        if user['role'] == 'student':
            conn = get_db()
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM approvals WHERE user_id=%s", (user['id'],))
                approval = cur.fetchone()
            conn.close()
            approval_info = build_approval_info(approval)

        return jsonify({
            'id':       user['id'],
            'name':     user['name'],
            'email':    user['email'],
            'role':     user['role'],
            'approval': approval_info,
        })
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


# ─── Admin setup (create first admin account) ────────────────────────────────
@app.route('/api/admin/setup', methods=['POST'])
def admin_setup():
    if not DB_AVAILABLE or not DATABASE_URL:
        return jsonify({'error': 'Database not configured'}), 503
    data      = request.get_json(silent=True) or {}
    name      = data.get('name', '').strip()
    email     = data.get('email', '').strip().lower()
    pw        = data.get('password', '')
    setup_key = data.get('setup_key', '')

    expected = os.environ.get('ADMIN_SETUP_KEY', '')
    if expected and setup_key != expected:
        return jsonify({'error': 'Invalid setup key'}), 403
    if not name or not email or not pw:
        return jsonify({'error': 'Name, email and password required'}), 400
    if len(pw) < 6:
        return jsonify({'error': 'Password must be at least 6 characters'}), 400

    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("SELECT id FROM users WHERE role='admin' LIMIT 1")
            if cur.fetchone():
                conn.close()
                return jsonify({'error': 'Admin already exists. Use login instead.'}), 409
            pw_hash = generate_password_hash(pw)
            cur.execute(
                "INSERT INTO users (name,email,password_hash,role) VALUES (%s,%s,%s,'admin') RETURNING id",
                (name, email, pw_hash)
            )
            row = cur.fetchone()
        conn.commit(); conn.close()
        return jsonify({'message': 'Admin account created successfully.', 'user_id': row['id']}), 201
    except Exception as exc:
        if 'unique' in str(exc).lower():
            return jsonify({'error': 'Email already registered'}), 409
        return jsonify({'error': str(exc)}), 500


# ─── Admin API ────────────────────────────────────────────────────────────────
@app.route('/api/admin/students')
@require_admin
def list_students(admin_user):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("""
                SELECT u.id, u.name, u.email, u.created_at,
                       a.approval_type, a.trial_days, a.approved_at, a.expires_at
                FROM users u
                LEFT JOIN approvals a ON a.user_id = u.id
                WHERE u.role = 'student'
                ORDER BY u.created_at DESC
            """)
            rows = cur.fetchall()
        conn.close()

        now = datetime.now(timezone.utc)
        students = []
        for r in rows:
            status = 'pending'
            days_remaining = 0
            if r['approval_type']:
                exp = r['expires_at']
                if exp.tzinfo is None:
                    exp = exp.replace(tzinfo=timezone.utc)
                if exp < now:
                    status = 'expired'
                else:
                    status = f"active-{r['approval_type']}"
                    days_remaining = max(0, (exp - now).days)

            students.append({
                'id':            r['id'],
                'name':          r['name'],
                'email':         r['email'],
                'created_at':    r['created_at'].isoformat(),
                'status':        status,
                'approval_type': r['approval_type'],
                'trial_days':    r['trial_days'],
                'approved_at':   r['approved_at'].isoformat() if r['approved_at'] else None,
                'expires_at':    r['expires_at'].isoformat() if r['expires_at'] else None,
                'days_remaining': days_remaining,
            })
        return jsonify(students)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/admin/approve', methods=['POST'])
@require_admin
def approve_student(admin_user):
    data          = request.get_json(silent=True) or {}
    user_id       = data.get('user_id')
    approval_type = data.get('approval_type', 'trial')
    trial_days    = int(data.get('trial_days', 30))

    if not user_id:
        return jsonify({'error': 'user_id required'}), 400
    if approval_type not in ('trial', 'full'):
        return jsonify({'error': 'approval_type must be trial or full'}), 400
    if trial_days < 1:
        return jsonify({'error': 'trial_days must be >= 1'}), 400

    days = trial_days if approval_type == 'trial' else 365
    now  = datetime.now(timezone.utc)
    exp  = now + timedelta(days=days)

    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("SELECT id FROM users WHERE id=%s AND role='student'", (user_id,))
            if not cur.fetchone():
                conn.close()
                return jsonify({'error': 'Student not found'}), 404
            cur.execute("""
                INSERT INTO approvals (user_id,approval_type,trial_days,approved_at,expires_at,approved_by,updated_at)
                VALUES (%s,%s,%s,%s,%s,%s,%s)
                ON CONFLICT (user_id) DO UPDATE SET
                    approval_type=%s, trial_days=%s, approved_at=%s,
                    expires_at=%s, approved_by=%s, updated_at=%s
            """, (user_id, approval_type, trial_days, now, exp, admin_user['user_id'], now,
                  approval_type, trial_days, now, exp, admin_user['user_id'], now))
        conn.commit(); conn.close()
        return jsonify({'message': f'Student approved ({approval_type}, {days} days)', 'expires_at': exp.isoformat()})
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/admin/approval/<int:user_id>', methods=['PATCH'])
@require_admin
def update_approval(admin_user, user_id):
    data          = request.get_json(silent=True) or {}
    approval_type = data.get('approval_type')
    trial_days    = data.get('trial_days', 30)

    if not approval_type or approval_type not in ('trial', 'full'):
        return jsonify({'error': 'approval_type must be trial or full'}), 400

    trial_days = int(trial_days)
    days = trial_days if approval_type == 'trial' else 365
    now  = datetime.now(timezone.utc)
    exp  = now + timedelta(days=days)

    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("""
                UPDATE approvals
                SET approval_type=%s, trial_days=%s, approved_at=%s,
                    expires_at=%s, approved_by=%s, updated_at=%s
                WHERE user_id=%s
            """, (approval_type, trial_days, now, exp, admin_user['user_id'], now, user_id))
            if cur.rowcount == 0:
                conn.close()
                return jsonify({'error': 'No approval found. Approve the student first.'}), 404
        conn.commit(); conn.close()
        return jsonify({'message': f'Approval updated to {approval_type} ({days} days)', 'expires_at': exp.isoformat()})
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/admin/stats')
@require_admin
def admin_stats(admin_user):
    try:
        now  = datetime.now(timezone.utc)
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute("SELECT COUNT(*) AS n FROM users WHERE role='student'")
            total = cur.fetchone()['n']
            cur.execute("""
                SELECT COUNT(*) AS n FROM users u
                LEFT JOIN approvals a ON a.user_id=u.id
                WHERE u.role='student' AND a.user_id IS NULL
            """)
            pending = cur.fetchone()['n']
            cur.execute("SELECT COUNT(*) AS n FROM approvals WHERE approval_type='trial' AND expires_at>%s", (now,))
            active_trial = cur.fetchone()['n']
            cur.execute("SELECT COUNT(*) AS n FROM approvals WHERE approval_type='full' AND expires_at>%s", (now,))
            active_full = cur.fetchone()['n']
            cur.execute("SELECT COUNT(*) AS n FROM approvals WHERE expires_at<=%s", (now,))
            expired = cur.fetchone()['n']
        conn.close()
        return jsonify({'total': total, 'pending': pending,
                        'active_trial': active_trial, 'active_full': active_full, 'expired': expired})
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


# ─── Code execution ───────────────────────────────────────────────────────────
def is_code_safe(code: str):
    for i, line in enumerate(code.split('\n'), 1):
        stripped = line.strip()
        if stripped.startswith('#'):
            continue
        for mod in BLOCKED_MODULES:
            if f'import {mod}' in line or f'from {mod}' in line:
                return False, f"Line {i}: module '{mod}' is not available in the sandbox."
    return True, ''


@app.route('/api/execute', methods=['POST'])
def execute():
    data = request.get_json(silent=True) or {}
    code = data.get('code', '').strip()
    if not code:
        return jsonify({'stdout': '', 'stderr': '', 'success': True})

    safe, reason = is_code_safe(code)
    if not safe:
        return jsonify({'stdout': '', 'stderr': f'Sandbox restriction: {reason}', 'success': False})

    preamble = (
        "import sys\nsys.setrecursionlimit(500)\n"
        "import builtins\n_real_open=builtins.open\n"
        "def _safe_open(f,mode='r',*a,**kw):\n"
        "    if any(c in str(mode) for c in ('w','a','x')):\n"
        "        raise PermissionError('File writes are disabled in the sandbox.')\n"
        "    return _real_open(f,mode,*a,**kw)\n"
        "builtins.open=_safe_open\n"
    )
    full_code = preamble + code

    try:
        result = subprocess.run(
            [sys.executable, '-c', full_code],
            capture_output=True, text=True, timeout=EXECUTION_TIMEOUT,
            env={**os.environ, 'PYTHONDONTWRITEBYTECODE': '1', 'PYTHONPATH': ''},
        )
        stdout, stderr = result.stdout, result.stderr
        preamble_lines = preamble.count('\n')
        if stderr:
            def fix_ln(m):
                try:
                    n = int(m.group(1)) - preamble_lines
                    return f'line {max(1, n)}'
                except Exception:
                    return m.group(0)
            stderr = re.sub(r'line (\d+)', fix_ln, stderr)
        if len(stdout) > MAX_OUTPUT_CHARS:
            stdout = stdout[:MAX_OUTPUT_CHARS] + '\n[Output truncated]'
        return jsonify({'stdout': stdout, 'stderr': stderr, 'success': result.returncode == 0})
    except subprocess.TimeoutExpired:
        return jsonify({'stdout': '', 'stderr': f'Timed out after {EXECUTION_TIMEOUT}s.', 'success': False})
    except Exception as exc:
        return jsonify({'stdout': '', 'stderr': str(exc), 'success': False})


@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'python': sys.version, 'db': bool(DB_AVAILABLE and DATABASE_URL)})


# ─── Boot ─────────────────────────────────────────────────────────────────────
with app.app_context():
    init_db()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
