/* app.js — Python Mastery SPA */
(function () {
'use strict';

// ─── State ───────────────────────────────────────────────────────────────────
const state = {
  currentModuleId: null,
  currentLessonId: null,
  completed: new Set(),
  sidebarOpen: true,
  editors: {},
};

const LS_COMPLETED = 'pytm_completed';
const LS_THEME     = 'pytm_theme';
const LS_LAST      = 'pytm_last';

// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  applyTheme(localStorage.getItem(LS_THEME) || 'dark');
  bindGlobal();
  renderSidebar();
  updateProgressBar();
});

function loadProgress() {
  try {
    const saved = localStorage.getItem(LS_COMPLETED);
    if (saved) JSON.parse(saved).forEach(id => state.completed.add(id));
  } catch (e) {}
}

function saveProgress() {
  localStorage.setItem(LS_COMPLETED, JSON.stringify([...state.completed]));
  updateProgressBar();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-toggle').textContent = theme === 'light' ? '🌙' : '☀️';
  localStorage.setItem(LS_THEME, theme);
  Object.values(state.editors).forEach(cm => {
    cm.setOption('theme', theme === 'dark' ? 'dracula' : 'default');
  });
}

// ─── Global bindings ─────────────────────────────────────────────────────────
function bindGlobal() {
  document.getElementById('start-btn').addEventListener('click', enterApp);

  document.getElementById('home-link').addEventListener('click', e => {
    e.preventDefault();
    showHome();
  });

  document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  document.getElementById('module-search').addEventListener('input', onSearch);

  // Solution modal close
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.close).classList.add('hidden');
    });
  });
  document.getElementById('solution-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden');
  });
}

// ─── Welcome → App ───────────────────────────────────────────────────────────
function enterApp() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  try {
    const last = localStorage.getItem(LS_LAST);
    if (last) {
      const { moduleId, lessonId } = JSON.parse(last);
      const mod = COURSE_DATA.modules.find(m => m.id === moduleId);
      if (mod) {
        if (mod.outline) { navigateToOutline(moduleId); return; }
        if (lessonId) { navigateToLesson(moduleId, lessonId); return; }
      }
    }
  } catch (e) {}

  showHome();
}

// ─── Sidebar toggle ───────────────────────────────────────────────────────────
function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open', state.sidebarOpen);
  } else {
    sidebar.classList.toggle('collapsed', !state.sidebarOpen);
  }
}

// ─── Progress bar ─────────────────────────────────────────────────────────────
function updateProgressBar() {
  let total = 0;
  COURSE_DATA.modules.forEach(m => { if (!m.outline && m.lessons) total += m.lessons.length; });
  const done = state.completed.size;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  document.getElementById('top-progress-fill').style.width = pct + '%';
  document.getElementById('top-progress-label').textContent = `${done} / ${total} lessons complete`;
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function renderSidebar() {
  const nav = document.getElementById('module-nav');
  nav.innerHTML = '';
  COURSE_DATA.modules.forEach(mod => nav.appendChild(buildSidebarModule(mod)));
}

function buildSidebarModule(mod) {
  const wrap = document.createElement('div');
  wrap.className = 'sidebar-module';
  wrap.dataset.moduleId = mod.id;

  const lessons = mod.lessons || [];
  const doneCount = lessons.filter(l => state.completed.has(l.id)).length;
  const total = lessons.length;

  const hdr = document.createElement('div');
  hdr.className = 'sidebar-module-header';

  const numEl = document.createElement('span');
  numEl.className = 'module-num';
  numEl.textContent = mod.id;

  const titleEl = document.createElement('span');
  titleEl.className = 'module-title-text';
  titleEl.textContent = mod.title;

  const badgeEl = document.createElement('span');
  if (mod.outline) {
    badgeEl.className = 'module-outline-badge';
    badgeEl.textContent = 'Outline';
  } else if (total > 0) {
    badgeEl.className = 'module-progress-badge';
    badgeEl.textContent = `${doneCount}/${total}`;
  }

  const chevron = document.createElement('span');
  chevron.className = 'module-chevron';
  chevron.textContent = '›';

  hdr.appendChild(numEl);
  hdr.appendChild(titleEl);
  hdr.appendChild(badgeEl);
  hdr.appendChild(chevron);
  wrap.appendChild(hdr);

  if (!mod.outline && lessons.length) {
    const list = document.createElement('ul');
    list.className = 'sidebar-lessons';
    lessons.forEach(lesson => {
      const li = document.createElement('li');
      li.className = 'sidebar-lesson-item' + (state.completed.has(lesson.id) ? ' done' : '');
      li.dataset.lessonId = lesson.id;
      li.innerHTML = `<span class="lesson-dot"></span><span class="sidebar-lesson-title">${lesson.title}</span><span class="sidebar-lesson-duration">${lesson.duration}</span>`;
      li.addEventListener('click', e => { e.stopPropagation(); navigateToLesson(mod.id, lesson.id); });
      list.appendChild(li);
    });
    wrap.appendChild(list);

    hdr.addEventListener('click', () => {
      const isOpen = wrap.classList.contains('open');
      wrap.classList.toggle('open', !isOpen);
    });
  } else {
    hdr.addEventListener('click', () => navigateToOutline(mod.id));
  }

  return wrap;
}

function onSearch(e) {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('.sidebar-module').forEach(item => {
    const modId = parseInt(item.dataset.moduleId);
    const mod = COURSE_DATA.modules.find(m => m.id === modId);
    if (!mod) return;
    const text = (mod.title + ' ' + (mod.lessons || []).map(l => l.title).join(' ')).toLowerCase();
    item.style.display = text.includes(q) ? '' : 'none';
  });
}

function highlightSidebarLesson(moduleId, lessonId) {
  document.querySelectorAll('.sidebar-lesson-item').forEach(li => li.classList.remove('active'));
  document.querySelectorAll('.sidebar-module-header').forEach(h => h.classList.remove('active'));

  if (moduleId) {
    const wrap = document.querySelector(`.sidebar-module[data-module-id="${moduleId}"]`);
    if (wrap) {
      wrap.querySelector('.sidebar-module-header')?.classList.add('active');
      if (lessonId) {
        wrap.classList.add('open');
        const li = wrap.querySelector(`.sidebar-lesson-item[data-lesson-id="${lessonId}"]`);
        if (li) li.classList.add('active');
      }
    }
  }
}

function refreshSidebarLesson(lessonId) {
  const li = document.querySelector(`.sidebar-lesson-item[data-lesson-id="${lessonId}"]`);
  if (!li) return;
  li.classList.toggle('done', state.completed.has(lessonId));

  const wrap = li.closest('.sidebar-module');
  if (!wrap) return;
  const modId = parseInt(wrap.dataset.moduleId);
  const mod = COURSE_DATA.modules.find(m => m.id === modId);
  if (!mod || !mod.lessons) return;

  const doneCount = mod.lessons.filter(l => state.completed.has(l.id)).length;
  const badge = wrap.querySelector('.module-progress-badge');
  if (badge) badge.textContent = `${doneCount}/${mod.lessons.length}`;

  // Update sidebar module header state
  const hdr = wrap.querySelector('.sidebar-module-header');
  if (hdr) {
    hdr.classList.toggle('completed', doneCount === mod.lessons.length);
    hdr.classList.toggle('in-progress', doneCount > 0 && doneCount < mod.lessons.length);
  }
}

// ─── Home Dashboard ───────────────────────────────────────────────────────────
function showHome() {
  state.currentModuleId = null;
  state.currentLessonId = null;
  document.getElementById('content-home').classList.remove('hidden');
  document.getElementById('content-lesson').classList.add('hidden');
  localStorage.removeItem(LS_LAST);

  const total = COURSE_DATA.modules.reduce((s, m) => s + (m.lessons ? m.lessons.length : 0), 0);
  const done = state.completed.size;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;

  document.getElementById('content-home').innerHTML = `
    <div class="home-dashboard">
      <div class="home-hero">
        <h1>${COURSE_DATA.title}</h1>
        <p class="home-subtitle">Your journey to becoming a job-ready Python engineer starts here.</p>
        <div class="home-progress-wrap">
          <div class="home-progress-bar">
            <div class="home-progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="home-progress-label">${done} of ${total} lessons complete (${pct}%)</span>
        </div>
      </div>
      <div class="modules-grid">
        ${COURSE_DATA.modules.map(buildModuleCard).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
      const modId = parseInt(card.dataset.modId);
      const mod = COURSE_DATA.modules.find(m => m.id === modId);
      if (!mod) return;
      if (mod.outline) {
        navigateToOutline(modId);
      } else if (mod.lessons && mod.lessons.length) {
        const firstIncomplete = mod.lessons.find(l => !state.completed.has(l.id)) || mod.lessons[0];
        navigateToLesson(modId, firstIncomplete.id);
      }
    });
  });
}

function buildModuleCard(mod) {
  const lessons = mod.lessons || [];
  const done = lessons.filter(l => state.completed.has(l.id)).length;
  const total = lessons.length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  const cls = mod.outline ? 'outline' : (done === total && total > 0 ? 'complete' : done > 0 ? 'in-progress' : '');

  return `
    <div class="module-card ${cls}" data-mod-id="${mod.id}">
      <div class="module-card-header">
        <span class="module-card-icon">${mod.icon || '📘'}</span>
        <span class="module-card-num">Module ${mod.id}</span>
      </div>
      <h3>${mod.title}</h3>
      <p>${mod.description || ''}</p>
      <div class="module-card-meta">
        <span class="meta-chip">${mod.outline ? 'Outline' : `${total} lesson${total !== 1 ? 's' : ''}`}</span>
        ${!mod.outline && total > 0 ? `<span class="meta-chip">${done}/${total} done</span>` : ''}
      </div>
      ${!mod.outline && total > 0 ? `
      <div class="module-progress-bar">
        <div class="module-progress-fill" style="width:${pct}%"></div>
      </div>` : ''}
    </div>
  `;
}

// ─── Lesson Navigation ────────────────────────────────────────────────────────
function navigateToLesson(moduleId, lessonId) {
  const mod = COURSE_DATA.modules.find(m => m.id === moduleId);
  if (!mod || !mod.lessons) return;
  const lesson = mod.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  state.currentModuleId = moduleId;
  state.currentLessonId = lessonId;
  localStorage.setItem(LS_LAST, JSON.stringify({ moduleId, lessonId }));

  document.getElementById('content-home').classList.add('hidden');
  document.getElementById('content-lesson').classList.remove('hidden');

  state.editors = {};
  renderLesson(mod, lesson);
  highlightSidebarLesson(moduleId, lessonId);
  document.getElementById('main').scrollTop = 0;
}

function navigateToOutline(moduleId) {
  const mod = COURSE_DATA.modules.find(m => m.id === moduleId);
  if (!mod) return;

  state.currentModuleId = moduleId;
  state.currentLessonId = null;
  localStorage.setItem(LS_LAST, JSON.stringify({ moduleId, lessonId: null }));

  document.getElementById('content-home').classList.add('hidden');
  document.getElementById('content-lesson').classList.remove('hidden');

  state.editors = {};
  renderOutline(mod);
  highlightSidebarLesson(moduleId, null);
  document.getElementById('main').scrollTop = 0;
}

// ─── Lesson Rendering ─────────────────────────────────────────────────────────
function renderLesson(mod, lesson) {
  const allLessons = mod.lessons;
  const idx = allLessons.findIndex(l => l.id === lesson.id);
  const prev = allLessons[idx - 1] || null;
  const next = allLessons[idx + 1] || null;
  const modIdx = COURSE_DATA.modules.findIndex(m => m.id === mod.id);
  const prevMod = COURSE_DATA.modules[modIdx - 1] || null;
  const nextMod = COURSE_DATA.modules[modIdx + 1] || null;
  const isDone = state.completed.has(lesson.id);

  const el = document.getElementById('content-lesson');
  el.innerHTML = `
    <div class="lesson-wrapper anim-fadein">

      <div class="lesson-header">
        <div class="breadcrumb">
          <span>${mod.icon} Module ${mod.id}: ${mod.title}</span>
          <span class="breadcrumb-sep">›</span>
          <span class="current">${lesson.title}</span>
        </div>
        <div class="lesson-header-actions">
          <span class="lesson-meta-chip">⏱ ${lesson.duration}</span>
          <button class="btn-complete-lesson ${isDone ? 'done' : ''}" id="mark-complete-btn">
            ${isDone ? '✓ Completed' : '○ Mark Complete'}
          </button>
        </div>
      </div>

      <div class="lesson-title">${lesson.title}</div>

      <div class="lesson-content">
        ${lesson.content}
      </div>

      ${lesson.codeExamples && lesson.codeExamples.length ? `
      <div class="code-examples-section">
        <h2 class="section-heading">📝 Code Examples</h2>
        ${lesson.codeExamples.map(ex => `
        <div class="code-example">
          <div class="code-example-header">
            <span class="code-example-title">${ex.title}</span>
            <button class="run-example-btn" data-editor="${ex.id}">▶ Run</button>
          </div>
          ${ex.description ? `<p class="code-example-desc">${ex.description}</p>` : ''}
          <div id="${ex.id}"></div>
          <div class="code-output" id="out-${ex.id}"></div>
        </div>
        `).join('')}
      </div>` : ''}

      ${lesson.playground ? `
      <div class="playground-section">
        <div class="playground-header">
          <span class="playground-title">🧪 ${lesson.playground.title}</span>
          <div class="playground-actions">
            <button class="btn-run" id="pg-run-${lesson.id}" data-editor="pg-${lesson.id}">▶ Run Code</button>
            <button class="btn-reset" id="pg-reset-${lesson.id}">↺ Reset</button>
          </div>
        </div>
        ${lesson.playground.description ? `<p class="playground-desc">${lesson.playground.description}</p>` : ''}
        <div id="pg-${lesson.id}"></div>
        <div class="playground-output" id="pg-out-${lesson.id}"></div>
      </div>` : ''}

      ${lesson.exercises && lesson.exercises.length ? `
      <div class="exercises-section">
        <h2 class="section-heading">💪 Exercises</h2>
        ${lesson.exercises.map((ex, i) => `
        <div class="exercise-card" id="exc-${ex.id}">
          <div class="exercise-header">
            <div class="exercise-title-row">
              <span class="exercise-num">${i + 1}</span>
              <span class="exercise-title">${ex.title}</span>
              <span class="diff-badge ${ex.difficulty}">${ex.difficulty}</span>
            </div>
            <span class="exercise-expand-icon">›</span>
          </div>
          <div class="exercise-body">
            <p class="exercise-desc">${ex.description}</p>
            <div id="${ex.id}"></div>
            <div class="exercise-actions">
              <button class="btn-run" data-editor="${ex.id}">▶ Run</button>
              <button class="btn-show-solution" data-ex-id="${ex.id}">💡 Solution</button>
            </div>
            <div class="code-output" id="out-${ex.id}"></div>
          </div>
        </div>
        `).join('')}
      </div>` : ''}

      ${lesson.interviewQuestions && lesson.interviewQuestions.length ? `
      <div class="interview-section">
        <h2 class="section-heading">🎯 Interview Questions</h2>
        <div class="iq-list">
          ${lesson.interviewQuestions.map(iq => `
          <div class="iq-item">
            <div class="iq-question">
              <span>${iq.q}</span>
              <span class="iq-chevron">›</span>
            </div>
            <div class="iq-answer">${iq.a}</div>
          </div>
          `).join('')}
        </div>
      </div>` : ''}

      <div class="lesson-nav-row">
        ${buildPrevNavBtn(prev, prevMod, mod)}
        ${buildNextNavBtn(next, nextMod, mod)}
      </div>
    </div>
  `;

  initLessonEditors(lesson);
  bindLessonEvents(mod, lesson);
}

function buildPrevNavBtn(prevLesson, prevMod, currentMod) {
  if (prevLesson) {
    return `<button class="lesson-nav-btn prev" data-mod="${currentMod.id}" data-lesson="${prevLesson.id}">
      <span>‹</span>
      <span class="lesson-nav-label">Previous<span class="lesson-nav-title">${prevLesson.title}</span></span>
    </button>`;
  }
  if (prevMod) {
    if (prevMod.outline) {
      return `<button class="lesson-nav-btn prev" data-outline="${prevMod.id}">
        <span>‹</span>
        <span class="lesson-nav-label">Previous<span class="lesson-nav-title">${prevMod.title}</span></span>
      </button>`;
    }
    const last = prevMod.lessons ? prevMod.lessons[prevMod.lessons.length - 1] : null;
    if (last) return `<button class="lesson-nav-btn prev" data-mod="${prevMod.id}" data-lesson="${last.id}">
      <span>‹</span>
      <span class="lesson-nav-label">Previous<span class="lesson-nav-title">${last.title}</span></span>
    </button>`;
  }
  return '<div></div>';
}

function buildNextNavBtn(nextLesson, nextMod, currentMod) {
  if (nextLesson) {
    return `<button class="lesson-nav-btn next" data-mod="${currentMod.id}" data-lesson="${nextLesson.id}">
      <span class="lesson-nav-label">Next<span class="lesson-nav-title">${nextLesson.title}</span></span>
      <span>›</span>
    </button>`;
  }
  if (nextMod) {
    if (nextMod.outline) {
      return `<button class="lesson-nav-btn next" data-outline="${nextMod.id}">
        <span class="lesson-nav-label">Next<span class="lesson-nav-title">${nextMod.title}</span></span>
        <span>›</span>
      </button>`;
    }
    const first = nextMod.lessons ? nextMod.lessons[0] : null;
    if (first) return `<button class="lesson-nav-btn next" data-mod="${nextMod.id}" data-lesson="${first.id}">
      <span class="lesson-nav-label">Next<span class="lesson-nav-title">${first.title}</span></span>
      <span>›</span>
    </button>`;
  }
  return '<div></div>';
}

function bindLessonEvents(mod, lesson) {
  // Mark complete
  document.getElementById('mark-complete-btn')?.addEventListener('click', function () {
    if (state.completed.has(lesson.id)) {
      state.completed.delete(lesson.id);
      this.textContent = '○ Mark Complete';
      this.classList.remove('done');
    } else {
      state.completed.add(lesson.id);
      this.textContent = '✓ Completed';
      this.classList.add('done');
    }
    saveProgress();
    refreshSidebarLesson(lesson.id);
  });

  // Run buttons (code examples + exercises)
  document.querySelectorAll('.run-example-btn, .btn-run').forEach(btn => {
    btn.addEventListener('click', () => runCode(btn.dataset.editor, getOutputEl(btn.dataset.editor)));
  });

  // Playground reset
  document.getElementById(`pg-reset-${lesson.id}`)?.addEventListener('click', () => {
    state.editors[`pg-${lesson.id}`]?.setValue(lesson.playground.starterCode || '');
  });

  // Exercise accordion
  document.querySelectorAll('.exercise-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      hdr.closest('.exercise-card').classList.toggle('open');
    });
  });

  // Solution buttons
  document.querySelectorAll('.btn-show-solution').forEach(btn => {
    btn.addEventListener('click', () => {
      const ex = lesson.exercises.find(e => e.id === btn.dataset.exId);
      if (ex) showSolution(ex);
    });
  });

  // Interview Q accordion
  document.querySelectorAll('.iq-question').forEach(qEl => {
    qEl.addEventListener('click', () => {
      const item = qEl.closest('.iq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.iq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Lesson nav
  document.querySelectorAll('.lesson-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.outline) { navigateToOutline(parseInt(btn.dataset.outline)); return; }
      if (btn.dataset.mod && btn.dataset.lesson) navigateToLesson(parseInt(btn.dataset.mod), btn.dataset.lesson);
    });
  });
}

function getOutputEl(editorId) {
  return document.getElementById('out-' + editorId) ||
         document.getElementById('pg-out-' + editorId.replace('pg-', ''));
}

// ─── Editor Initialization ────────────────────────────────────────────────────
function cmTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dracula';
}

function initEditor(id, code, readOnly) {
  const el = document.getElementById(id);
  if (!el) return null;
  const cm = CodeMirror(el, {
    value: code || '',
    mode: 'python',
    theme: cmTheme(),
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    autoCloseBrackets: true,
    matchBrackets: true,
    keyMap: 'sublime',
    readOnly: readOnly || false,
    extraKeys: {
      'Ctrl-Enter': () => runCode(id, getOutputEl(id)),
      'Cmd-Enter':  () => runCode(id, getOutputEl(id)),
    },
  });
  state.editors[id] = cm;
  return cm;
}

function initLessonEditors(lesson) {
  (lesson.codeExamples || []).forEach(ex => initEditor(ex.id, ex.code, false));

  if (lesson.playground) {
    initEditor(`pg-${lesson.id}`, lesson.playground.starterCode || '# Write your code here\n', false);
  }

  (lesson.exercises || []).forEach(ex => {
    initEditor(ex.id, ex.starterCode || '# Your code here\n', false);
  });
}

// ─── Code Execution ───────────────────────────────────────────────────────────
async function runCode(editorId, outEl) {
  const cm = state.editors[editorId];
  if (!cm) return;
  if (!outEl) outEl = getOutputEl(editorId);
  if (!outEl) return;

  const code = cm.getValue();
  outEl.classList.add('visible');
  outEl.innerHTML = '<span class="out-info">⟳ Running…</span>';

  try {
    const resp = await fetch('/api/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const data = await resp.json();
    renderOutput(outEl, data);
  } catch (e) {
    outEl.innerHTML = `<span class="out-stderr">Network error: ${esc(e.message)}</span>`;
  }
}

function renderOutput(el, data) {
  const parts = [];
  if (data.stdout) parts.push(`<span class="out-stdout">${esc(data.stdout)}</span>`);
  if (data.stderr) parts.push(`<span class="out-stderr">${esc(data.stderr)}</span>`);
  if (!data.stdout && !data.stderr) parts.push(`<span class="out-info">(no output)</span>`);
  el.innerHTML = parts.join('');
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ─── Solution Modal ───────────────────────────────────────────────────────────
function showSolution(ex) {
  const modal = document.getElementById('solution-modal');
  const codeArea = document.getElementById('solution-code-area');
  const explArea = document.getElementById('solution-explanation');

  codeArea.innerHTML = '';
  explArea.innerHTML = '';
  modal.classList.remove('hidden');

  setTimeout(() => {
    const cm = CodeMirror(codeArea, {
      value: ex.solution || '',
      mode: 'python',
      theme: cmTheme(),
      lineNumbers: true,
      readOnly: true,
      indentUnit: 4,
      tabSize: 4,
    });
    state.editors['__solution__'] = cm;
    cm.refresh();
  }, 40);

  if (ex.solutionExplanation) {
    explArea.innerHTML = `<strong>Explanation:</strong> ${ex.solutionExplanation}`;
  }
}

// ─── Outline Rendering ────────────────────────────────────────────────────────
function renderOutline(mod) {
  const modIdx = COURSE_DATA.modules.findIndex(m => m.id === mod.id);
  const prevMod = COURSE_DATA.modules[modIdx - 1] || null;
  const nextMod = COURSE_DATA.modules[modIdx + 1] || null;

  const el = document.getElementById('content-lesson');
  el.innerHTML = `
    <div class="lesson-wrapper anim-fadein">

      <div class="lesson-header">
        <div class="breadcrumb">
          <span>${mod.icon} Module ${mod.id}</span>
          <span class="breadcrumb-sep">›</span>
          <span class="current">Overview</span>
        </div>
        <div class="lesson-header-actions">
          <span class="lesson-meta-chip outline-pill">Outline</span>
        </div>
      </div>

      <div class="lesson-title">${mod.icon} ${mod.title}</div>
      <p class="outline-description">${mod.description || ''}</p>

      <div class="callout info">
        <span class="callout-icon">ℹ️</span>
        <div class="callout-body">
          <strong>Coming Soon</strong>
          <p>Full interactive lessons for this module are in development. The outline below covers all key topics.</p>
        </div>
      </div>

      ${mod.topics ? `
      <div class="outline-topics-section">
        <h2 class="section-heading">📋 Topics Covered</h2>
        ${mod.topics.map(topic => `
        <div class="outline-topic-card">
          <h3>${topic.title}</h3>
          <ul>
            ${(topic.subtopics || []).map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        `).join('')}
      </div>` : ''}

      ${mod.keyExamples && mod.keyExamples.length ? `
      <div class="outline-examples-section">
        <h2 class="section-heading">💡 Key Examples</h2>
        ${mod.keyExamples.map((ex, i) => `
        <div class="code-example">
          <div class="code-example-header">
            <span class="code-example-title">${ex.title}</span>
            <button class="run-example-btn" data-editor="oe-${mod.id}-${i}">▶ Run</button>
          </div>
          <div id="oe-${mod.id}-${i}"></div>
          <div class="code-output" id="out-oe-${mod.id}-${i}"></div>
        </div>
        `).join('')}
      </div>` : ''}

      ${mod.interviewFocus && mod.interviewFocus.length ? `
      <div class="interview-section">
        <h2 class="section-heading">🎯 Interview Focus</h2>
        <div class="interview-tip">
          <div class="interview-tip-label">Topics commonly asked in interviews</div>
          <ul>
            ${mod.interviewFocus.map(q => `<li>${q}</li>`).join('')}
          </ul>
        </div>
      </div>` : ''}

      <div class="lesson-nav-row">
        ${buildOutlinePrevBtn(prevMod)}
        ${buildOutlineNextBtn(nextMod)}
      </div>
    </div>
  `;

  // Init key example editors
  (mod.keyExamples || []).forEach((ex, i) => {
    initEditor(`oe-${mod.id}-${i}`, ex.code, false);
  });

  // Bind run buttons
  document.querySelectorAll('.run-example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const eid = btn.dataset.editor;
      runCode(eid, document.getElementById('out-' + eid));
    });
  });

  // Bind nav
  document.querySelectorAll('.lesson-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.outline) { navigateToOutline(parseInt(btn.dataset.outline)); return; }
      if (btn.dataset.mod && btn.dataset.lesson) navigateToLesson(parseInt(btn.dataset.mod), btn.dataset.lesson);
    });
  });
}

function buildOutlinePrevBtn(prevMod) {
  if (!prevMod) return '<div></div>';
  if (prevMod.outline) {
    return `<button class="lesson-nav-btn prev" data-outline="${prevMod.id}">
      <span>‹</span>
      <span class="lesson-nav-label">Previous<span class="lesson-nav-title">${prevMod.title}</span></span>
    </button>`;
  }
  const last = prevMod.lessons ? prevMod.lessons[prevMod.lessons.length - 1] : null;
  if (!last) return '<div></div>';
  return `<button class="lesson-nav-btn prev" data-mod="${prevMod.id}" data-lesson="${last.id}">
    <span>‹</span>
    <span class="lesson-nav-label">Previous<span class="lesson-nav-title">${last.title}</span></span>
  </button>`;
}

function buildOutlineNextBtn(nextMod) {
  if (!nextMod) return '<div></div>';
  if (nextMod.outline) {
    return `<button class="lesson-nav-btn next" data-outline="${nextMod.id}">
      <span class="lesson-nav-label">Next<span class="lesson-nav-title">${nextMod.title}</span></span>
      <span>›</span>
    </button>`;
  }
  const first = nextMod.lessons ? nextMod.lessons[0] : null;
  if (!first) return '<div></div>';
  return `<button class="lesson-nav-btn next" data-mod="${nextMod.id}" data-lesson="${first.id}">
    <span class="lesson-nav-label">Next<span class="lesson-nav-title">${first.title}</span></span>
    <span>›</span>
  </button>`;
}

})();
