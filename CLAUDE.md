# PythonTutor — CLAUDE.md

Interactive Python learning platform with auth, admin approvals, and a sandboxed code runner.

---

## Stack

| Layer | Tech |
|-------|------|
| Backend | Flask 3, psycopg2-binary (Neon PostgreSQL), Gunicorn |
| Auth | Custom stdlib JWT (hmac + hashlib + base64) — **do NOT use PyJWT**, `_cffi_backend` is broken in this environment |
| Passwords | werkzeug.security (generate_password_hash / check_password_hash) |
| Frontend | Vanilla JS SPA (no framework), CodeMirror 5 editor, marked.js for Markdown |
| Styles | Plain CSS with custom properties, no Tailwind/Bootstrap |
| Env vars | python-dotenv loads `.env` at startup |

---

## Project Layout

```
app.py                        Flask app + all API routes
templates/
  index.html                  Main course SPA (auth-gated)
  login.html                  Login / register page
  admin.html                  Admin dashboard
static/
  css/
    main.css                  App styles (sidebar, topbar, upgrade wall, etc.)
    auth.css                  Login + admin page styles
  js/
    app.js                    SPA logic (auth, navigation, code runner, trial gates)
    course-data.js            Aggregator: spreads all four module arrays into COURSE_DATA
    course-data-m1-5.js       Modules  1-5  (Fundamentals → OOP Basics)
    course-data-m6-10.js      Modules  6-10 (Adv. OOP → Debugging)
    course-data-m11-15.js     Modules 11-15 (Iterators → Testing)
    course-data-m16-17.js     Modules 16-17 (Algorithms → Real-World Python)
.env                          NOT committed — contains DATABASE_URL, SECRET_KEY
.gitignore                    Excludes .env, __pycache__, *.pyc
requirements.txt
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

Production (Render.com uses this automatically via Gunicorn):
```bash
gunicorn app:app
```

---

## Database Schema

Two tables, auto-created by `init_db()` on first boot:

**`users`**
- `id` SERIAL PK, `email` UNIQUE, `password_hash`, `role` (admin|student), `name`, `created_at`

**`approvals`**
- `id` SERIAL PK, `user_id` UNIQUE FK → users, `approval_type` (trial|full), `trial_days`, `approved_at`, `expires_at`, `approved_by`, `updated_at`

Upsert pattern used for approve/update: `INSERT ... ON CONFLICT (user_id) DO UPDATE SET ...`

---

## Auth Flow

1. Register → POST `/api/auth/register` → stores hashed password
2. Login → POST `/api/auth/login` → returns JWT (7-day expiry)
3. Token stored in `localStorage('pytm_auth')`, user JSON in `localStorage('pytm_user')`
4. Every protected API call sends `Authorization: Bearer <token>`
5. Admin role → redirect to `/admin`; Student role → `/`

**No-DB fallback:** If `DATABASE_URL` is empty, `/api/auth/me` returns 503 and the frontend runs in open mode (all modules unlocked, no login required).

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
| GET | `/api/auth/config` | — | Returns `{db_enabled}` |
| POST | `/api/auth/register` | — | Create student account |
| POST | `/api/auth/login` | — | Returns JWT |
| GET | `/api/auth/me` | Bearer | Validate token, return user + approval |
| POST | `/api/admin/setup` | ADMIN_SETUP_KEY | Create first admin account |
| GET | `/api/admin/students` | admin | List all students + approval status |
| POST | `/api/admin/approve` | admin | Approve student (trial or full) |
| PATCH | `/api/admin/approval/<user_id>` | admin | Update existing approval |
| GET | `/api/admin/stats` | admin | Counts: total/pending/active/expired |
| POST | `/api/execute` | — | Run Python code in sandbox |

---

## Code Execution Sandbox (`/api/execute`)

- Blocked modules: `subprocess socket urllib http ftplib smtplib telnetlib xmlrpc imaplib poplib`
- Timeout: 10 seconds
- Max output: 15,000 characters
- Recursion limit: 500
- File writes: disabled
- Error line numbers adjusted to hide sandbox preamble

---

## Course Data Format

Each module file exports an array (e.g., `MODULES_1_5`). Each module has:

```js
{
  id: 1, title: "...", icon: "🐍", description: "...",
  lessons: [
    {
      id: "lesson-1-1", title: "...", duration: "...",
      content: `<h2>...</h2><p>...</p>`,   // HTML string
      codeExample: `print("hello")`,
      exercises: [
        {
          title: "...", description: "...",
          starterCode: "...",
          solution: "...",
          solutionExplanation: "...",
        }
      ],
      interviewQuestions: [
        { question: "...", answer: "..." }  // modules 11-17 use question/answer
        // modules 1-10 use q/a — app.js handles both: iq.question || iq.q
      ]
    }
  ]
}
```

---

## Known Issues Fixed (do not re-introduce)

- **JWT library**: PyJWT fails with `_cffi_backend` panic. Use stdlib JWT in `app.py`.
- **Mojibake in course data**: Course data JS files previously had UTF-8 content double-encoded as Windows-1252. Fixed by replacing all box-drawing chars (├ └ │ ─), em/en dashes, smart quotes, and emojis with ASCII equivalents or restored emoji codepoints.
- **Backtick in template literals**: `└` was replaced with `` ` `` which broke JS template literal syntax. All `└` now render as `+` in file trees.
- **iOS Safari encoding**: `@after_request` in `app.py` adds `; charset=utf-8` to JS/CSS Content-Type headers.
- **Interview questions "undefined"**: Modules 1-10 use `{q, a}`, modules 11-17 use `{question, answer}`. Always use `iq.question || iq.q` pattern in `app.js`.

---

## Git

- Active branch: `claude/python-mastery-course-OVHa4`
- Remote: `rohithcz1982/pythontutor`
- Deployed to: Render.com (`pythontutor-2m0p.onrender.com`)
