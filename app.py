import subprocess
import sys
import os
import json
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BLOCKED_MODULES = [
    'subprocess', 'socket', 'urllib', 'http', 'ftplib',
    'smtplib', 'telnetlib', 'xmlrpc', 'imaplib', 'poplib',
]

BLOCKED_BUILTINS = ['__import__']

MAX_OUTPUT_CHARS = 15000
EXECUTION_TIMEOUT = 10


def is_code_safe(code: str) -> tuple[bool, str]:
    lines = code.split('\n')
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if stripped.startswith('#'):
            continue
        for mod in BLOCKED_MODULES:
            if f'import {mod}' in line or f'from {mod}' in line:
                return False, f"Line {i}: Network/system module '{mod}' is not available in the sandbox."
    return True, ""


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/execute', methods=['POST'])
def execute():
    data = request.get_json(silent=True) or {}
    code = data.get('code', '').strip()

    if not code:
        return jsonify({'stdout': '', 'stderr': '', 'success': True})

    safe, reason = is_code_safe(code)
    if not safe:
        return jsonify({'stdout': '', 'stderr': f'Sandbox restriction: {reason}', 'success': False})

    # Prepend safe setup: limit recursion, no file writes outside /tmp
    preamble = (
        "import sys\n"
        "sys.setrecursionlimit(500)\n"
        "import builtins\n"
        "_real_open = builtins.open\n"
        "def _safe_open(f, mode='r', *a, **kw):\n"
        "    if any(c in str(mode) for c in ('w','a','x')):\n"
        "        raise PermissionError('File writes are disabled in the sandbox.')\n"
        "    return _real_open(f, mode, *a, **kw)\n"
        "builtins.open = _safe_open\n"
    )

    full_code = preamble + code

    try:
        result = subprocess.run(
            [sys.executable, '-c', full_code],
            capture_output=True,
            text=True,
            timeout=EXECUTION_TIMEOUT,
            env={**os.environ, 'PYTHONDONTWRITEBYTECODE': '1', 'PYTHONPATH': ''},
        )
        stdout = result.stdout
        stderr = result.stderr

        # Remove preamble lines from tracebacks (they add line offset)
        preamble_lines = preamble.count('\n')
        if stderr:
            import re
            def fix_lineno(m):
                try:
                    n = int(m.group(1)) - preamble_lines
                    return f'line {max(1, n)}'
                except Exception:
                    return m.group(0)
            stderr = re.sub(r'line (\d+)', fix_lineno, stderr)

        if len(stdout) > MAX_OUTPUT_CHARS:
            stdout = stdout[:MAX_OUTPUT_CHARS] + '\n[Output truncated — too long]'

        return jsonify({
            'stdout': stdout,
            'stderr': stderr,
            'success': result.returncode == 0,
        })

    except subprocess.TimeoutExpired:
        return jsonify({
            'stdout': '',
            'stderr': f'Execution timed out after {EXECUTION_TIMEOUT} seconds. Check for infinite loops.',
            'success': False,
        })
    except Exception as exc:
        return jsonify({'stdout': '', 'stderr': str(exc), 'success': False})


@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'python': sys.version})


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
