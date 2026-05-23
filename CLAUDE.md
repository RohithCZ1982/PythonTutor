# PythonTutor — CLAUDE.md

Interactive Python learning platform with auth, admin approvals, and a sandboxed code runner.

---

## Stack

| Layer | Tech |
|-------|------|
| Backend | Flask 3, psycopg2-binary (Neon PostgreSQL), flask-cors, Gunicorn |
| Auth | Custom stdlib JWT (hmac + hashlib + base64) — **do NOT use PyJWT**, `_cffi_backend` is broken in this environment |
| Passwords | werkzeug.security (generate_password_hash / check_password_hash) |
| Frontend | Vanilla JS SPA (no framework), CodeMirror 5 editor, marked.js for Markdown |
| Styles | Plain CSS with custom properties, no Tailwind/Bootstrap |
| Env vars | python-dotenv loads `.env` at startup |

---

## Project Layout

```
app.py                        Flask app + all API routes (~597 lines)
requirements.txt
restart.ps1                   Windows PowerShell helper to kill and restart app.py
templates/
  index.html                  Main course SPA (auth-gated, ~198 lines)
  login.html                  Login / register page (~241 lines)
  admin.html                  Admin dashboard (~430 lines)
static/
  css/
    main.css                  App styles (sidebar, topbar, upgrade wall, ~1262 lines)
    auth.css                  Login + admin page styles (~580 lines)
  js/
    app.js                    SPA logic (auth, navigation, code runner, trial gates, ~974 lines)
    course-data.js            Aggregator: spreads all four module arrays into COURSE_DATA
    course-data-m1-5.js       Modules  1-5  (Fundamentals → OOP Basics, ~3712 lines)
    course-data-m6-10.js      Modules  6-10 (Adv. OOP → Debugging, ~3564 lines)
    course-data-m11-15.js     Modules 11-15 (Iterators → Testing, ~2995 lines)
    course-data-m16-17.js     Modules 16-17 (Algorithms → Real-World Python, ~1781 lines)
.claude/
  commands/
    restart.md                Custom /restart slash command for Claude Code
.env                          NOT committed — contains DATABASE_URL, SECRET_KEY
.gitignore                    Excludes .env, __pycache__, *.pyc
```

---

## Environment Variables (`.env`)

```
DATABASE_URL=postgresql://...   # Neon PostgreSQL connection string
SECRET_KEY=...                  # JWT signing secret (change in production)
ADMIN_SETUP_KEY=                # One-time key for POST /api/admin/setup
```

`.env` is in `.gitignore` and must never be committed.

---

## Running Locally

```bash
pip install -r requirements.txt
python app.py          # starts on http://localhost:5000
```

Production (Render.com uses this automatically):
```bash
gunicorn app:app
```

Windows local dev (kills existing process first):
```powershell
.\restart.ps1
```

Within Claude Code sessions, use the `/restart` custom command (defined in `.claude/commands/restart.md`) to stop any running Flask/Gunicorn process and start a fresh one.

---

## Database Schema

Two tables, auto-created by `init_db()` on first boot:

**`users`**
- `id` SERIAL PK
- `email` VARCHAR(255) UNIQUE NOT NULL
- `password_hash` VARCHAR(255) NOT NULL
- `role` VARCHAR(10) CHECK (role IN ('admin','student')), DEFAULT 'student'
- `name` VARCHAR(255) NOT NULL
- `created_at` TIMESTAMPTZ DEFAULT NOW()
- `last_seen` TIMESTAMPTZ — added via `ALTER TABLE ... ADD COLUMN IF NOT EXISTS` in `init_db()`

**`approvals`**
- `id` SERIAL PK
- `user_id` INTEGER UNIQUE FK → users(id) ON DELETE CASCADE
- `approval_type` VARCHAR(10) CHECK (approval_type IN ('trial','full'))
- `trial_days` INTEGER DEFAULT 30
- `approved_at` TIMESTAMPTZ NOT NULL
- `expires_at` TIMESTAMPTZ NOT NULL
- `approved_by` INTEGER FK → users(id)
- `updated_at` TIMESTAMPTZ DEFAULT NOW()

Upsert pattern used for approve/update: `INSERT ... ON CONFLICT (user_id) DO UPDATE SET ...`

---

## Auth Flow

1. Register → POST `/api/auth/register` → stores hashed password, awaits admin approval
2. Login → POST `/api/auth/login` → validates credentials + active approval, returns JWT (7-day expiry)
3. Token stored in `localStorage('pytm_auth')`, user JSON in `localStorage('pytm_user')`
4. Every protected API call sends `Authorization: Bearer <token>`
5. Admin role → redirect to `/admin`; Student role → `/`
6. Each call to `/api/auth/me` updates `users.last_seen = NOW()` for activity tracking

**No-DB fallback:** If `DATABASE_URL` is empty, `/api/auth/me` returns 503 and the frontend runs in open mode (all modules unlocked, no login required).

**Decorators in `app.py`:**
- `@require_auth` — injects decoded JWT payload as first arg; returns 401 if missing/invalid
- `@require_admin` — same but also enforces `role == 'admin'`; returns 403 otherwise

---

## Access Tiers

| Tier | Modules accessible | Duration |
|------|--------------------|----------|
| Trial | 1–3 only | `trial_days` set by admin |
| Full | 1–17 | 365 days from approval date |

`TRIAL_LIMIT = 3` constant in `app.js`. Admin can upgrade trial → full at any time; expiry resets to today + 365d.

---

## API Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/auth/config` | — | Returns `{auth_enabled}` (bool) |
| POST | `/api/auth/register` | — | Create student account |
| POST | `/api/auth/login` | — | Returns JWT + user object |
| GET | `/api/auth/me` | Bearer | Validate token, update last_seen, return user + approval |
| POST | `/api/admin/setup` | ADMIN_SETUP_KEY header field | Create first admin account (rejected if admin exists) |
| GET | `/api/admin/students` | admin | List all students + approval status + online indicator |
| POST | `/api/admin/approve` | admin | Approve student (trial or full) — upsert |
| PATCH | `/api/admin/approval/<user_id>` | admin | Update existing approval |
| GET | `/api/admin/stats` | admin | Counts: total/pending/active_trial/active_full/expired/online_now |
| POST | `/api/execute` | — | Run Python code in sandbox |
| GET | `/health` | — | Returns `{status, python, db}` — used by Render health checks |

**Note:** `/api/auth/config` returns `auth_enabled`, not `db_enabled` — the frontend checks `auth_enabled`.

---

## Code Execution Sandbox (`/api/execute`)

- Blocked modules: `subprocess socket urllib http ftplib smtplib telnetlib xmlrpc imaplib poplib`
- Timeout: 10 seconds
- Max output: 15,000 characters (truncated with `[Output truncated]` notice)
- Recursion limit: 500 (set via `sys.setrecursionlimit` in preamble)
- File writes: disabled (builtins.open patched in preamble to reject 'w','a','x' modes)
- Error line numbers adjusted to hide sandbox preamble (preamble is 9 lines)
- Execution uses `subprocess.run([sys.executable, '-c', full_code], ...)` — sandbox preamble prepended

---

## Live Activity Tracking (Admin Dashboard)

- `users.last_seen` is updated to `NOW()` on every `/api/auth/me` call
- A student is considered **online** if `last_seen > NOW() - INTERVAL '10 minutes'`
- `/api/admin/stats` returns `online_now` count
- `/api/admin/students` returns `online: bool` and `last_seen: ISO string` per student
- Admin dashboard auto-refreshes stats to show live activity

---

## Course Data Format

`course-data.js` aggregates four arrays into `COURSE_DATA`:

```js
const COURSE_DATA = {
  title: "Python Mastery for Job-Ready Engineers",
  modules: [...MODULES_1_5, ...MODULES_6_10, ...MODULES_11_15, ...MODULES_16_17],
};
```

Each module:

```js
{
  id: 1, title: "...", icon: "🐍", description: "...",
  lessons: [
    {
      id: "lesson-1-1", title: "...", duration: "...",
      content: `<h2>...</h2><p>...</p>`,          // HTML string rendered into DOM
      codeExamples: [{ id: "ex-1-1-1", code: "..." }],  // array (not single string)
      playground: { starterCode: "...", initialCode: "..." },
      exercises: [
        {
          id: "exr-1-1-1",                        // used to bind editor instance
          title: "...", description: "...",
          starterCode: "...",
          solution: "...",
          solutionExplanation: "...",
        }
      ],
      interviewQuestions: [
        { question: "...", answer: "..." }   // modules 11-17
        // modules 1-10 use {q, a} — app.js handles both: iq.question || iq.q
      ]
    }
  ]
}
```

**Outline-only modules** have `outline: true` instead of a `lessons` array. The app renders a "Coming Soon" callout for these.

---

## Frontend SPA Architecture (`app.js`)

Key state object:
```js
const state = {
  currentModuleId, currentLessonId,
  completed: Set,   // lesson IDs, persisted to localStorage('pytm_completed')
  sidebarOpen,
  editors: {},      // CodeMirror instances keyed by editor ID
  user,             // { id, name, email, role, approval }
};
```

Key localStorage keys:
- `pytm_auth` — JWT token
- `pytm_user` — cached user JSON (used as offline fallback)
- `pytm_completed` — Set of completed lesson IDs
- `pytm_theme` — 'dark' | 'light'
- `pytm_last` — `{ moduleId, lessonId }` to resume position on reload

Navigation flow: `bootApp()` → `renderSidebar()` → `navigateToLesson(moduleId, lessonId)` or `navigateToOutline(moduleId)`

CodeMirror editors are keyed as `ex.id` (code examples), `pg-{lesson.id}` (playground), `ex.id` (exercises). Editors are registered in `state.editors` so the run button can retrieve them.

---

## Known Issues Fixed (do not re-introduce)

- **JWT library**: PyJWT fails with `_cffi_backend` panic. Use stdlib JWT in `app.py` (`make_token` / `_jwt_decode`).
- **Mojibake in course data**: Course data JS files previously had UTF-8 content double-encoded as Windows-1252. Fixed by replacing all box-drawing chars (├ └ │ ─), em/en dashes, smart quotes, and emojis with ASCII equivalents or restored emoji codepoints.
- **Backtick in template literals**: `└` was replaced with `` ` `` which broke JS template literal syntax. All `└` render as `+` in file trees.
- **iOS Safari encoding**: `@after_request` in `app.py` adds `; charset=utf-8` to JS/CSS Content-Type headers.
- **Interview questions "undefined"**: Modules 1-10 use `{q, a}`, modules 11-17 use `{question, answer}`. Always use `iq.question || iq.q` (and `iq.answer || iq.a`) in `app.js`.

---

## Git

- Active branch: `claude/claude-md-docs-U46dn`
- Remote: `rohithcz1982/pythontutor`
- Deployed to: Render.com (`pythontutor-2m0p.onrender.com`)
- Previous feature branch: `claude/python-mastery-course-OVHa4`
