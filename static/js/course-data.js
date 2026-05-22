'use strict';

const COURSE_DATA = {
  title: "Python Mastery for Job-Ready Engineers",
  modules: [

  // ══════════════════════════════════════════════════════════════
  // MODULE 1 — Python Fundamentals & Setup
  // ══════════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Python Fundamentals & Setup",
    icon: "🐍",
    color: "#7c6af7",
    difficulty: "beginner",
    duration: "2–3 hours",
    description: "Start your Python journey: understand what Python is, set up your tools, and write your first real programs.",
    objectives: [
      "Understand what Python is and why it dominates the job market",
      "Explain the difference between compiled and interpreted languages",
      "Set up a professional Python development environment",
      "Write, run, and debug basic Python programs",
      "Use variables, print output, accept input, and apply arithmetic"
    ],
    lessons: [
      // ── Lesson 1.1 ──────────────────────────────────────────
      {
        id: "1.1",
        title: "What is Python & Why Learn It?",
        duration: "20 min",
        content: `
<p>Imagine explaining a recipe to someone. In Python you write it almost exactly like you'd speak English. In C++ you first need to declare every variable's type, allocate memory, manage pointers, and write 50 boilerplate lines before the oven is even warm.</p>

<p><strong>Python trades raw execution speed for developer speed</strong> — and for 90% of real-world engineering jobs, that trade is absolutely worth it. Google, Netflix, NASA, Instagram, Spotify, and thousands of startups rely on Python every day.</p>

<h2>A Quick History</h2>
<p>Python was created by <strong>Guido van Rossum</strong> starting in 1989. The name comes from the British comedy show <em>Monty Python's Flying Circus</em> — not the snake. Guido wanted it to feel fun and approachable.</p>
<p>We use <strong>Python 3 exclusively</strong> today. Python 2 reached end-of-life in January 2020. If you encounter Python 2 in legacy codebases, don't write new code in it.</p>

<h2>How Python Actually Works</h2>
<p>People say Python is "interpreted," but that's incomplete. Here is what really happens when you run <code>python script.py</code>:</p>
<ol>
  <li><strong>Compilation to bytecode:</strong> CPython compiles your source into platform-independent bytecode — stored in <code>__pycache__/*.pyc</code> files.</li>
  <li><strong>Interpretation:</strong> The Python Virtual Machine (PVM) reads and executes that bytecode instruction by instruction.</li>
</ol>
<p>Correct answer for interviews: <strong>"Python compiles to bytecode first, then the PVM interprets it — so it is both compiled and interpreted."</strong></p>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <strong>What is CPython?</strong>
    <p>CPython is the reference implementation, written in C. It is what you install from python.org. Alternatives: PyPy (JIT compiler, 5–10× faster for loops), Jython (runs on the JVM), MicroPython (microcontrollers).</p>
  </div>
</div>

<h2>Python's Philosophy</h2>
<p>Run <code>import this</code> and you'll see 19 design principles called the Zen of Python. The ones that matter most for your career:</p>
<ul>
  <li><em>Readability counts</em> — code is read 10× more than it is written.</li>
  <li><em>Explicit is better than implicit</em> — do not hide behavior in magic.</li>
  <li><em>Simple is better than complex</em> — resist the urge to over-engineer.</li>
  <li><em>There should be one obvious way to do it</em> — reduces decision fatigue on teams.</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Career Tip</strong>
    <p>Senior engineers value readable code above almost everything else. Python's culture of clean, explicit code will make you a better engineer in any language you learn later.</p>
  </div>
</div>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Frequently Asked · Google, Amazon, Infosys, TCS, Wipro</div>
  <p>"Is Python interpreted or compiled?" — Most candidates say just "interpreted." Stand out by saying: <strong>"Python compiles source code to bytecode, then the Python Virtual Machine interprets that bytecode. So it is both."</strong></p>
</div>`,
        codeExamples: [
          {
            id: "ce-1-1-1",
            title: "The Zen of Python",
            description: "Run this to see Python's 19 guiding principles. These ideals shape the entire ecosystem.",
            code: `import this

# The most important ones for daily engineering work:
# 1. Readability counts
# 2. Explicit is better than implicit
# 3. Simple is better than complex
# 4. Errors should never pass silently`
          },
          {
            id: "ce-1-1-2",
            title: "Python's Power in Few Lines",
            description: "What would take 30+ lines in Java takes 5 in Python. This is why companies love Python for prototyping and production alike.",
            code: `# Count word frequencies — real-world NLP task in 3 lines
from collections import Counter

text = "the quick brown fox jumps over the lazy dog the fox"
word_freq = Counter(text.split())

print("Word frequencies:", dict(word_freq))
print("Top 3 words:", word_freq.most_common(3))
print("Unique words:", len(word_freq))`
          },
          {
            id: "ce-1-1-3",
            title: "Python Version Check",
            description: "Always verify you are on Python 3. Python 2 is dead — never use it for new projects.",
            code: `import sys

print("Python version:", sys.version)
print("Version info:", sys.version_info)
print("Is Python 3?", sys.version_info.major == 3)

# Python 2 vs 3 key differences (for reference):
# Python 2: print "hello"       → Python 3: print("hello")
# Python 2: 5 / 2 == 2         → Python 3: 5 / 2 == 2.5
# Python 2: range() = list      → Python 3: range() = lazy iterator
# Python 2: strings = bytes     → Python 3: strings = unicode`
          }
        ],
        playground: {
          title: "🎮 Try It Yourself",
          description: "Modify this code and press Run. Explore Python's conciseness compared to other languages.",
          starterCode: `# Welcome to Python! Change values and press Run.

# Python reads almost like English
skills = ["Python", "Data Analysis", "Web Dev", "Automation", "ML"]

print("Python is used for:")
for skill in skills:
    print(f"  ✓ {skill}")

# Powerful one-liners
numbers = [15, 3, 9, 7, 21, 4, 18, 12]
print(f"\\nNumbers: {numbers}")
print(f"Sorted:   {sorted(numbers)}")
print(f"Average:  {sum(numbers) / len(numbers):.2f}")
print(f"Max: {max(numbers)}, Min: {min(numbers)}")`
        },
        exercises: [
          {
            id: "exe-1-1-1",
            title: "Your Python Introduction",
            difficulty: "easy",
            description: "Print a 4-line introduction about yourself using <code>print()</code>. Include: your name, your engineering field, one programming language you know, and your career goal.",
            starterCode: `# Print your introduction (4 lines)
# Line 1: Your name
# Line 2: Your engineering field
# Line 3: A language you know
# Line 4: Your career goal

# Your code here:
`,
            solution: `print("Name: Alex Kumar")
print("Field: Computer Science Engineering")
print("Language: Learning Python right now!")
print("Goal: Backend Software Engineer at a top tech company")`,
            solutionExplanation: "print() outputs text to the console. Each call adds a new line by default. Strings can be wrapped in single or double quotes — both work in Python."
          },
          {
            id: "exe-1-1-2",
            title: "Star Pattern",
            difficulty: "easy",
            description: "Print a right-angled triangle of stars with 5 rows. Row 1 has 1 star, row 2 has 2 stars, etc. Use a loop.",
            starterCode: `# Print this pattern:
# *
# **
# ***
# ****
# *****

for row in range(1, 6):
    # Hint: use the * operator on a string
    pass  # replace this line
`,
            solution: `for row in range(1, 6):
    print("*" * row)`,
            solutionExplanation: "The string repetition operator `*` repeats a string. `'*' * 3` gives `'***'`. range(1, 6) generates 1, 2, 3, 4, 5 — exactly the number of stars per row."
          },
          {
            id: "exe-1-1-3",
            title: "Python Facts Quiz",
            difficulty: "medium",
            description: "Store 3 Python facts in variables (strings), then print them numbered. Use f-strings for formatting. Bonus: also print the total character count of all facts combined.",
            starterCode: `# Store 3 Python facts and print them numbered
fact1 = "Python was created by Guido van Rossum in 1989"
fact2 = ""  # Add your second fact
fact3 = ""  # Add your third fact

facts = [fact1, fact2, fact3]

# Print numbered and find total characters
`,
            solution: `fact1 = "Python was created by Guido van Rossum in 1989"
fact2 = "Python is named after Monty Python, not the snake"
fact3 = "Python compiles to bytecode before interpretation"

facts = [fact1, fact2, fact3]

for i, fact in enumerate(facts, 1):
    print(f"{i}. {fact}")

total_chars = sum(len(f) for f in facts)
print(f"\\nTotal characters across all facts: {total_chars}")`,
            solutionExplanation: "enumerate(facts, 1) gives (index, value) pairs starting from 1. f-strings (f'...') let you embed expressions directly in strings using {}. sum() with a generator expression efficiently totals the lengths."
          }
        ],
        interviewQuestions: [
          {
            q: "Is Python an interpreted or compiled language?",
            a: "Python is both. CPython (the standard implementation) first compiles source code to bytecode — a lower-level, platform-independent representation stored in .pyc files. Then the Python Virtual Machine (PVM) interprets that bytecode. So the accurate answer is: 'Python compiles to bytecode and interprets it at runtime.' This is also why subsequent runs are faster — the bytecode is cached."
          },
          {
            q: "What is CPython? How does it differ from Python?",
            a: "Python is the language specification. CPython is the standard implementation of that specification, written in C. When people say 'Python', they usually mean CPython. Other implementations include PyPy (uses JIT compilation and can be 5–10× faster for CPU-bound loops), Jython (runs on the JVM, good for Java integration), IronPython (runs on .NET), and MicroPython (for microcontrollers). For most jobs you'll use CPython."
          },
          {
            q: "What are the key differences between Python 2 and Python 3?",
            a: "Key differences: (1) print is a statement in Python 2 but a function in Python 3. (2) Integer division: 5/2 = 2 in Python 2, 2.5 in Python 3. (3) All strings are Unicode in Python 3. (4) range() returns a list in Python 2, a lazy iterator in Python 3. (5) Python 2 reached end-of-life in January 2020 — never use it for new code."
          }
        ]
      },

      // ── Lesson 1.2 ──────────────────────────────────────────
      {
        id: "1.2",
        title: "Setting Up Your Python Environment",
        duration: "15 min",
        content: `
<h2>Installing Python</h2>
<p>Download Python 3 from <strong>python.org</strong> — always pick the latest stable 3.x release. During installation on Windows, check <strong>"Add Python to PATH"</strong> (critical — easy to miss).</p>
<p>Verify your installation by opening a terminal and running:</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">python --version   # or python3 --version on Mac/Linux</pre>

<h2>The Python REPL</h2>
<p>REPL stands for <strong>Read-Eval-Print Loop</strong>. It's an interactive shell where you type one Python expression and see the result instantly. Start it by typing <code>python</code> in your terminal. You'll see <code>>>></code> — that's your prompt.</p>
<p>The REPL is perfect for quick experiments, testing ideas, and exploring objects. Senior engineers use it constantly to prototype logic before writing it into files.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Pro Tip: IPython & Jupyter</strong>
    <p>Install <code>ipython</code> (pip install ipython) for a supercharged REPL with tab completion, history, and magic commands. For data science work, use Jupyter Notebook. But always know the standard REPL too — it's available everywhere.</p>
  </div>
</div>

<h2>Recommended IDE: VS Code</h2>
<p>VS Code is the industry standard for Python development. After installing it, add the <strong>Python extension by Microsoft</strong> (Ctrl+Shift+X, search "Python"). This gives you:</p>
<ul>
  <li>IntelliSense (smart autocomplete)</li>
  <li>Inline error checking</li>
  <li>Integrated debugger</li>
  <li>Jupyter notebook support</li>
  <li>Virtual environment management</li>
</ul>

<h2>Virtual Environments — Always Use Them</h2>
<p>A virtual environment is an isolated Python installation for your project. This prevents package conflicts between projects. This is a professional practice — all real-world Python projects use them.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">python -m venv venv          # create
source venv/bin/activate      # activate (Mac/Linux)
venv\\Scripts\\activate         # activate (Windows)
pip install requests          # install packages INTO this env
deactivate                    # exit the environment</pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Common Mistake</strong>
    <p>Many beginners install packages globally with <code>pip install</code> without activating a virtual environment first. This causes version conflicts across projects and makes your code hard to share. Always activate a venv first.</p>
  </div>
</div>

<h2>pip — Python's Package Manager</h2>
<p><code>pip</code> is how you install third-party libraries. The Python ecosystem has 500,000+ packages on PyPI (the Python Package Index).</p>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Asked in DevOps & Backend interviews</div>
  <p>Know the difference between <code>pip install</code>, virtual environments, and <code>requirements.txt</code>. Be able to explain why you'd use a venv. Companies check if you follow professional practices, not just if you can write code.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-1-2-1",
            title: "sys Module — Environment Info",
            description: "Check your Python setup programmatically. Useful for debugging environment issues.",
            code: `import sys
import os

print("Python version:", sys.version)
print("Python executable:", sys.executable)
print("Platform:", sys.platform)
print("Module search paths (first 3):")
for path in sys.path[:3]:
    print(f"  {path}")`
          },
          {
            id: "ce-1-2-2",
            title: "pip — Package Management Commands",
            description: "These commands run in your terminal, not in Python. Understanding pip is essential for professional development.",
            code: `# These are TERMINAL commands (not Python code).
# Run them in your shell after activating your virtual environment.

# Check pip version
# pip --version

# Install a package
# pip install requests

# Install specific version
# pip install requests==2.31.0

# Install from requirements file (standard in all projects)
# pip install -r requirements.txt

# Save current packages to requirements file
# pip freeze > requirements.txt

# List installed packages
# pip list

# Uninstall
# pip uninstall requests

# In Python, verify an install worked:
try:
    import json        # built-in, always available
    print("json module:", json.__version__ if hasattr(json, '__version__') else "built-in")
    print("Import successful!")
except ImportError as e:
    print(f"Import failed: {e}")`
          }
        ],
        playground: {
          title: "🎮 Explore Your Environment",
          description: "Run this to see details about your Python environment. Understanding your environment is the first step to debugging real-world issues.",
          starterCode: `import sys
import os

# ── Environment Info ──────────────────────────
print("=" * 45)
print("  Python Environment Information")
print("=" * 45)
print(f"Version:    {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}")
print(f"Platform:   {sys.platform}")

# ── Built-in modules (always available, no install needed) ──
import math, random, datetime, collections, itertools
builtins = ["math", "random", "datetime", "collections", "itertools"]
print(f"\\nBuilt-in modules available: {len(builtins)}")
for m in builtins:
    print(f"  ✓ {m}")

# ── Quick math demo ───────────────────────────
print(f"\\nMath demo:")
print(f"  pi = {math.pi:.5f}")
print(f"  e  = {math.e:.5f}")
print(f"  Random number 1–100: {random.randint(1, 100)}")`
        },
        exercises: [
          {
            id: "exe-1-2-1",
            title: "Module Explorer",
            difficulty: "easy",
            description: "Import the <code>math</code> module and print: (1) the value of pi to 10 decimal places, (2) the square root of 144, (3) 2 raised to the power 10 using <code>math.pow()</code>.",
            starterCode: `import math

# Print pi to 10 decimal places
# Hint: use f"{math.pi:.10f}"

# Print square root of 144

# Print 2^10 using math.pow()
`,
            solution: `import math

print(f"Pi to 10 decimal places: {math.pi:.10f}")
print(f"Square root of 144: {math.sqrt(144)}")
print(f"2 raised to power 10: {math.pow(2, 10)}")`,
            solutionExplanation: "The format spec :.10f means 'float with 10 decimal places'. math.sqrt() computes square roots. math.pow(x, y) raises x to the power y (returns a float; use ** operator for integers)."
          },
          {
            id: "exe-1-2-2",
            title: "Random Number Generator",
            difficulty: "easy",
            description: "Use the <code>random</code> module to simulate rolling two six-sided dice 5 times. Print each roll as 'Roll N: die1 + die2 = total'.",
            starterCode: `import random

# Roll two dice 5 times
for roll in range(1, 6):
    die1 = random.randint(1, 6)
    die2 = # your code here
    total = # your code here
    print(f"Roll {roll}: {die1} + {die2} = {total}")
`,
            solution: `import random

for roll in range(1, 6):
    die1 = random.randint(1, 6)
    die2 = random.randint(1, 6)
    total = die1 + die2
    print(f"Roll {roll}: {die1} + {die2} = {total}")`,
            solutionExplanation: "random.randint(a, b) returns a random integer N such that a <= N <= b (both endpoints inclusive). This is different from random.randrange(a, b) which excludes b."
          }
        ],
        interviewQuestions: [
          {
            q: "What is a Python virtual environment and why should you use one?",
            a: "A virtual environment is an isolated Python installation with its own packages. You use one so that packages installed for Project A don't conflict with packages for Project B. For example, Project A might need requests==2.28 while Project B needs requests==2.31. Without a venv, installing one overwrites the other. Commands: python -m venv venv to create, then activate it. Every professional Python project should have one."
          },
          {
            q: "What is the difference between pip install and pip install -r requirements.txt?",
            a: "pip install package installs a single package. pip install -r requirements.txt installs all packages listed in the requirements file at once. The requirements.txt file is generated with pip freeze > requirements.txt and lists all packages with exact versions. This is how you share your project's dependencies so others can reproduce your exact environment."
          },
          {
            q: "What is the REPL and when would you use it?",
            a: "REPL stands for Read-Eval-Print Loop — an interactive Python shell started with the python command. It immediately executes each line you type and prints the result. Senior engineers use it to quickly test a function's behavior, explore an unfamiliar library's API, experiment with regular expressions, or prototype algorithm logic before writing it into source files. IPython and Jupyter Notebook are enhanced REPLs used in data science."
          }
        ]
      },

      // ── Lesson 1.3 ──────────────────────────────────────────
      {
        id: "1.3",
        title: "Your First Python Programs",
        duration: "30 min",
        content: `
<h2>Variables — Labels, Not Boxes</h2>
<p>In Python, a variable is a <strong>name that points to an object in memory</strong>. Think of it as a sticky label on a box, not the box itself. You can move the label to a different box at any time.</p>

<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">age = 25          # 'age' points to the integer object 25
name = "Alice"    # 'name' points to the string object "Alice"
age = 26          # 'age' now points to 26 — the old 25 object is unchanged</pre>

<p>Python is <strong>dynamically typed</strong> — you do not declare types. Python infers the type at runtime. The same variable name can hold different types at different times (though that's usually bad style).</p>

<h2>Python's Naming Rules</h2>
<ul>
  <li>Use <code>snake_case</code> for variables and functions: <code>user_name</code>, <code>total_price</code></li>
  <li>Use <code>UPPER_SNAKE_CASE</code> for constants: <code>MAX_RETRIES = 3</code></li>
  <li>Names can contain letters, digits, and underscores — but cannot start with a digit</li>
  <li>Avoid single-letter names (except loop counters <code>i</code>, <code>j</code>, or math variables)</li>
</ul>

<h2>print() — Your Most Used Function</h2>
<p><code>print()</code> outputs to stdout. It accepts multiple arguments separated by commas, with a space between them by default.</p>

<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">print("Hello", "World")         # Hello World
print("Score:", 95)             # Score: 95
print("a", "b", sep="-")       # a-b
print("Line 1", end=" | ")     # Line 1 | (no newline)
print("Line 2")                 # Line 2</pre>

<h2>f-Strings — The Modern Way to Format</h2>
<p>f-strings (formatted string literals) are the cleanest, fastest way to build strings with values embedded. Use them exclusively — avoid old-style <code>%</code> formatting.</p>

<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">name = "Alice"
score = 98.5
print(f"Name: {name}, Score: {score:.1f}%")  # Name: Alice, Score: 98.5%
print(f"2 + 2 = {2 + 2}")                    # 2 + 2 = 4
print(f"Name upper: {name.upper()}")</pre>

<h2>Arithmetic Operators</h2>
<table style="width:100%;font-size:.85rem;border-collapse:collapse;margin:.75rem 0">
  <tr style="border-bottom:1px solid var(--border);color:var(--text-muted)"><th style="text-align:left;padding:.4rem .6rem">Operator</th><th style="text-align:left;padding:.4rem .6rem">Operation</th><th style="text-align:left;padding:.4rem .6rem">Example</th><th style="text-align:left;padding:.4rem .6rem">Result</th></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>+</code></td><td style="padding:.4rem .6rem">Addition</td><td style="padding:.4rem .6rem"><code>7 + 3</code></td><td style="padding:.4rem .6rem">10</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>-</code></td><td style="padding:.4rem .6rem">Subtraction</td><td style="padding:.4rem .6rem"><code>7 - 3</code></td><td style="padding:.4rem .6rem">4</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>*</code></td><td style="padding:.4rem .6rem">Multiplication</td><td style="padding:.4rem .6rem"><code>7 * 3</code></td><td style="padding:.4rem .6rem">21</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>/</code></td><td style="padding:.4rem .6rem">True division</td><td style="padding:.4rem .6rem"><code>7 / 3</code></td><td style="padding:.4rem .6rem">2.333…</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>//</code></td><td style="padding:.4rem .6rem">Floor division</td><td style="padding:.4rem .6rem"><code>7 // 3</code></td><td style="padding:.4rem .6rem">2</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>%</code></td><td style="padding:.4rem .6rem">Modulo (remainder)</td><td style="padding:.4rem .6rem"><code>7 % 3</code></td><td style="padding:.4rem .6rem">1</td></tr>
  <tr><td style="padding:.4rem .6rem"><code>**</code></td><td style="padding:.4rem .6rem">Exponentiation</td><td style="padding:.4rem .6rem"><code>7 ** 3</code></td><td style="padding:.4rem .6rem">343</td></tr>
</table>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Python 2 Trap (still asked in interviews)</strong>
    <p>In Python 2, <code>5 / 2</code> returned <code>2</code> (integer division). In Python 3, it returns <code>2.5</code>. Use <code>//</code> when you explicitly want integer division. This trips up engineers coming from Python 2 or other languages.</p>
  </div>
</div>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Common in coding screens</div>
  <p>The modulo operator <code>%</code> is used constantly in algorithms: checking even/odd (<code>n % 2 == 0</code>), cycling through values (<code>i % len(arr)</code>), and digit extraction (<code>n % 10</code> gives the last digit). Know it well.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-1-3-1",
            title: "Variables & Types",
            description: "Python infers types automatically. Use type() to check, and notice how natural the syntax is.",
            code: `# Variables — no type declaration needed
name = "Alice"         # str
age = 23               # int
gpa = 8.7              # float
is_placed = True       # bool
hometown = None        # NoneType (absence of value)

# Check types at runtime
print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(gpa))       # <class 'float'>
print(type(is_placed)) # <class 'bool'>
print(type(hometown))  # <class 'NoneType'>

# Everything in Python is an object
print(isinstance(age, int))   # True
print(isinstance(gpa, float)) # True

# Multiple assignment (very Pythonic)
x = y = z = 0
a, b, c = 10, 20, 30
print(f"a={a}, b={b}, c={c}")`
          },
          {
            id: "ce-1-3-2",
            title: "f-Strings & String Operations",
            description: "f-strings are the modern standard for string formatting in Python 3.6+. Master them — they appear everywhere.",
            code: `name = "Alice"
score = 92.5
rank = 3

# Basic f-string
print(f"Hello, {name}!")

# Expressions inside f-strings
print(f"Score: {score:.1f}%")        # 1 decimal place
print(f"Rank: #{rank}")
print(f"Pass: {score >= 60}")         # expression evaluated
print(f"Name length: {len(name)}")   # call functions
print(f"Upper: {name.upper()}")

# Padding / alignment
print(f"{'Name':<10} {'Score':>8}")  # left/right align
print(f"{'Alice':<10} {92.5:>8.1f}")
print(f"{'Bob':<10} {87.3:>8.1f}")

# Number formatting
big_num = 1_000_000   # underscores in numbers (readability)
print(f"Population: {big_num:,}")    # 1,000,000
print(f"Pi: {3.14159265:.4f}")`
          },
          {
            id: "ce-1-3-3",
            title: "Arithmetic & Operators",
            description: "All arithmetic operators in action. Pay special attention to // and % — they are the most commonly used in algorithm problems.",
            code: `# All arithmetic operators
a, b = 17, 5

print(f"{a} + {b} = {a + b}")   # 22  addition
print(f"{a} - {b} = {a - b}")   # 12  subtraction
print(f"{a} * {b} = {a * b}")   # 85  multiplication
print(f"{a} / {b} = {a / b}")   # 3.4 true division (always float)
print(f"{a} // {b} = {a // b}") # 3   floor division (integer result)
print(f"{a} % {b} = {a % b}")   # 2   modulo (remainder)
print(f"{a} ** {b} = {a ** b}") # 1419857 exponentiation

# Common patterns in interview problems
number = 12345
print(f"\\nLast digit of {number}: {number % 10}")     # 5
print(f"Is {number} even? {number % 2 == 0}")          # False
print(f"Integer part of 7/2: {7 // 2}")               # 3

# Augmented assignment
score = 100
score += 10   # same as: score = score + 10
score -= 5
score *= 2
print(f"\\nFinal score: {score}")  # 210`
          }
        ],
        playground: {
          title: "🎮 Build a Mini Calculator",
          description: "Modify this to compute any formula. Practice using variables, operators, and f-strings together.",
          starterCode: `# Mini Calculator — change the values and formulas

# ── Circle calculations ────────────────────────────
import math

radius = 7
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius

print("Circle Calculator")
print(f"  Radius:        {radius} cm")
print(f"  Area:          {area:.2f} cm²")
print(f"  Circumference: {circumference:.2f} cm")

# ── Simple interest ────────────────────────────────
principal = 10000   # rupees
rate = 8.5          # % per year
time = 3            # years

interest = (principal * rate * time) / 100
total = principal + interest

print(f"\\nSimple Interest Calculator")
print(f"  Principal: ₹{principal:,}")
print(f"  Rate:      {rate}% per year")
print(f"  Time:      {time} years")
print(f"  Interest:  ₹{interest:,.2f}")
print(f"  Total:     ₹{total:,.2f}")`
        },
        exercises: [
          {
            id: "exe-1-3-1",
            title: "BMI Calculator",
            difficulty: "easy",
            description: "Calculate the Body Mass Index (BMI). Formula: <code>BMI = weight_kg / (height_m ** 2)</code>. Print the result to 2 decimal places and print the category: Underweight (< 18.5), Normal (18.5–24.9), Overweight (25–29.9), Obese (≥ 30).",
            starterCode: `weight_kg = 70
height_m = 1.75

# Calculate BMI
bmi = # your formula here

print(f"BMI: {bmi:.2f}")

# Print category
if bmi < 18.5:
    print("Category: Underweight")
# Add elif/else for other categories
`,
            solution: `weight_kg = 70
height_m = 1.75

bmi = weight_kg / (height_m ** 2)
print(f"BMI: {bmi:.2f}")

if bmi < 18.5:
    print("Category: Underweight")
elif bmi < 25:
    print("Category: Normal weight")
elif bmi < 30:
    print("Category: Overweight")
else:
    print("Category: Obese")`,
            solutionExplanation: "BMI = weight / height². Using ** 2 for squaring is idiomatic Python. elif chains let you test multiple conditions in order — Python stops at the first True condition."
          },
          {
            id: "exe-1-3-2",
            title: "Time Converter",
            difficulty: "easy",
            description: "Given a total number of seconds (e.g., 3661), print it as hours, minutes, and seconds. Use floor division <code>//</code> and modulo <code>%</code>.",
            starterCode: `total_seconds = 3661

# Hint: 1 hour = 3600 seconds, 1 minute = 60 seconds
hours = total_seconds // 3600
remaining = # seconds after removing hours
minutes = # your code
seconds = # your code

print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")
`,
            solution: `total_seconds = 3661

hours = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60

print(f"{total_seconds} seconds = {hours}h {minutes}m {seconds}s")`,
            solutionExplanation: "This is a classic // and % pattern. total // 3600 gives whole hours. total % 3600 gives remaining seconds after removing hours. Apply the same pattern to get minutes and seconds from the remainder."
          },
          {
            id: "exe-1-3-3",
            title: "Grade Report Generator",
            difficulty: "medium",
            description: "Given marks in 5 subjects, compute: total, average, percentage, and grade (A+ ≥ 90, A ≥ 80, B ≥ 70, C ≥ 60, F < 60). Print a formatted report.",
            starterCode: `math_marks = 88
physics_marks = 76
chemistry_marks = 92
english_marks = 84
cs_marks = 95

# Calculate totals
total = # sum all 5 subjects
max_marks = 500
average = # total / 5
percentage = # (total / max_marks) * 100

# Determine grade
if percentage >= 90:
    grade = "A+"
# Add more elif for A, B, C, F

print("=" * 35)
print("        GRADE REPORT")
print("=" * 35)
# Print formatted report
`,
            solution: `math_marks = 88
physics_marks = 76
chemistry_marks = 92
english_marks = 84
cs_marks = 95

total = math_marks + physics_marks + chemistry_marks + english_marks + cs_marks
max_marks = 500
average = total / 5
percentage = (total / max_marks) * 100

if percentage >= 90:
    grade = "A+"
elif percentage >= 80:
    grade = "A"
elif percentage >= 70:
    grade = "B"
elif percentage >= 60:
    grade = "C"
else:
    grade = "F"

print("=" * 35)
print("        GRADE REPORT")
print("=" * 35)
print(f"Math:       {math_marks}/100")
print(f"Physics:    {physics_marks}/100")
print(f"Chemistry:  {chemistry_marks}/100")
print(f"English:    {english_marks}/100")
print(f"CS:         {cs_marks}/100")
print("-" * 35)
print(f"Total:      {total}/{max_marks}")
print(f"Average:    {average:.1f}")
print(f"Percentage: {percentage:.1f}%")
print(f"Grade:      {grade}")
print("=" * 35)`,
            solutionExplanation: "This exercise combines arithmetic, conditionals, and f-string formatting. The '*' operator on strings repeats them (useful for dividers). Percentage calculation and grade determination are common patterns in real applications."
          }
        ],
        interviewQuestions: [
          {
            q: "What is the difference between / and // in Python?",
            a: "/ is true division — it always returns a float (e.g., 7/2 = 3.5, even 4/2 = 2.0). // is floor division — it returns the largest integer less than or equal to the result (e.g., 7//2 = 3, -7//2 = -4 not -3 because floor rounds toward negative infinity). This is important: in Python 2, / performed integer division for integers, which caused many bugs. Python 3 fixed this."
          },
          {
            q: "What is dynamic typing in Python?",
            a: "Dynamic typing means types are checked at runtime, not at compile time. You don't declare variable types — Python infers them from the assigned value. The same variable name can hold different types at different times (though this is usually bad practice). This contrasts with statically-typed languages like Java or C++ where you must declare int x = 5. Python 3.5+ added optional type hints (def greet(name: str) -> str:) which are checked by tools like mypy but ignored at runtime."
          },
          {
            q: "What are f-strings and why are they preferred over other formatting methods?",
            a: "f-strings (formatted string literals, introduced in Python 3.6) let you embed expressions directly in strings: f'Hello {name}'. They are preferred because: (1) most readable — expressions right where they appear; (2) fastest — benchmarks show they're faster than .format() and % formatting; (3) support arbitrary expressions including function calls and arithmetic. Avoid old-style % formatting (printf-style from Python 2) and .format() in new code."
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // MODULE 2 — Data Types & Variables
  // ══════════════════════════════════════════════════════════════
  {
    id: 2,
    title: "Data Types & Variables",
    icon: "🧬",
    color: "#00c48c",
    difficulty: "beginner",
    duration: "3–4 hours",
    description: "Deep-dive into Python's type system, memory model, strings, numbers, and the subtle internals that trip up engineers in interviews.",
    objectives: [
      "Identify and use all of Python's built-in types",
      "Understand how Python stores variables in memory (id, references)",
      "Explain the difference between is and == with confidence",
      "Master string manipulation, slicing, and formatting",
      "Understand integer caching, string interning, and mutability"
    ],
    lessons: [
      // ── Lesson 2.1 ──────────────────────────────────────────
      {
        id: "2.1",
        title: "Python's Type System — Everything is an Object",
        duration: "20 min",
        content: `
<h2>Everything in Python is an Object</h2>
<p>In Python, <strong>every value is an object</strong> — integers, strings, functions, classes, modules, even <code>None</code>. Every object has three things: an <strong>identity</strong> (memory address), a <strong>type</strong>, and a <strong>value</strong>.</p>
<p>This is different from C/Java where primitive types like <code>int</code> and <code>char</code> are not objects. In Python, even the number <code>5</code> is an object with methods.</p>

<h2>Python's Built-in Types</h2>
<table style="width:100%;font-size:.85rem;border-collapse:collapse;margin:.75rem 0">
  <tr style="border-bottom:1px solid var(--border);color:var(--text-muted)"><th style="text-align:left;padding:.4rem .6rem">Type</th><th style="text-align:left;padding:.4rem .6rem">Example</th><th style="text-align:left;padding:.4rem .6rem">Mutable?</th><th style="text-align:left;padding:.4rem .6rem">Notes</th></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>int</code></td><td style="padding:.4rem .6rem"><code>42, -7, 0</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">Arbitrary precision</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>float</code></td><td style="padding:.4rem .6rem"><code>3.14, -0.5</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">IEEE 754 double</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>bool</code></td><td style="padding:.4rem .6rem"><code>True, False</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">Subclass of int</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>str</code></td><td style="padding:.4rem .6rem"><code>"hello"</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">Unicode by default</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>bytes</code></td><td style="padding:.4rem .6rem"><code>b"hello"</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">Raw byte sequences</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>list</code></td><td style="padding:.4rem .6rem"><code>[1, 2, 3]</code></td><td style="padding:.4rem .6rem"><strong>Yes</strong></td><td style="padding:.4rem .6rem">Ordered, flexible</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>tuple</code></td><td style="padding:.4rem .6rem"><code>(1, 2, 3)</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">Ordered, immutable</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>dict</code></td><td style="padding:.4rem .6rem"><code>{"a": 1}</code></td><td style="padding:.4rem .6rem"><strong>Yes</strong></td><td style="padding:.4rem .6rem">Key-value, ordered (3.7+)</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>set</code></td><td style="padding:.4rem .6rem"><code>{1, 2, 3}</code></td><td style="padding:.4rem .6rem"><strong>Yes</strong></td><td style="padding:.4rem .6rem">Unordered, unique</td></tr>
  <tr><td style="padding:.4rem .6rem"><code>NoneType</code></td><td style="padding:.4rem .6rem"><code>None</code></td><td style="padding:.4rem .6rem">No</td><td style="padding:.4rem .6rem">Absence of value</td></tr>
</table>

<h2>Mutable vs Immutable</h2>
<p>This is one of the most important concepts in Python and is asked in nearly every technical interview.</p>
<ul>
  <li><strong>Immutable</strong>: once created, the object's value cannot change. If you "change" it, Python creates a new object. Examples: int, float, str, tuple, bool, None.</li>
  <li><strong>Mutable</strong>: the object's contents can be changed in-place. Multiple variables can reference the same object and both see changes. Examples: list, dict, set.</li>
</ul>

<div class="callout error">
  <span class="callout-icon">🚨</span>
  <div class="callout-body">
    <strong>Classic Bug: Mutable Default Argument</strong>
    <p>Never use a mutable object (list, dict) as a default argument in a function. It is shared across all calls! We'll cover this deeply in the Functions module.</p>
  </div>
</div>

<h2>type() vs isinstance()</h2>
<p><code>type(x)</code> returns the exact type. <code>isinstance(x, T)</code> returns True if x is T or a subclass of T. Prefer <code>isinstance()</code> in production code — it works correctly with inheritance.</p>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Asked at Microsoft, Flipkart, Paytm</div>
  <p>"What is the difference between mutable and immutable types in Python?" This question tests whether you understand Python's memory model. Key answer: immutables can be used as dictionary keys and set members; mutables cannot (they aren't hashable). That's why <code>{[1,2]: "value"}</code> raises a TypeError.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-1-1",
            title: "Every Value is an Object",
            description: "In Python, even primitive-looking values like 5 and True are full objects with identities, types, and methods.",
            code: `# Every value is an object with identity, type, and value
x = 42
print(f"Value:    {x}")
print(f"Type:     {type(x)}")
print(f"Identity: {id(x)}")   # memory address

# Even integers have methods
print(f"Bit length of 42: {x.bit_length()}")  # 6
print(f"As bytes: {x.to_bytes(2, 'big')}")

# bool is a subclass of int — surprising fact!
print(f"\\nTrue + True = {True + True}")   # 2
print(f"True * 5 = {True * 5}")            # 5
print(f"False + 1 = {False + 1}")          # 1
print(f"isinstance(True, int) = {isinstance(True, int)}")  # True

# None is its own type
print(f"\\ntype(None) = {type(None)}")
print(f"None == False: {None == False}")   # False
print(f"None == 0: {None == 0}")           # False
print(f"None is None: {None is None}")     # True (always use 'is' for None)`
          },
          {
            id: "ce-2-1-2",
            title: "Mutable vs Immutable Demonstrated",
            description: "See the real difference between mutable and immutable types — critical for understanding Python bugs.",
            code: `# IMMUTABLE: str — cannot change in place
s = "hello"
print(f"id(s) before: {id(s)}")
s = s + " world"   # creates a NEW string object
print(f"id(s) after:  {id(s)}")   # different id!
print(f"s = {s}")

# MUTABLE: list — changes in place
a = [1, 2, 3]
b = a              # b points to the SAME list
print(f"\\nid(a): {id(a)}, id(b): {id(b)}")  # same!
b.append(4)        # modifying through b...
print(f"a = {a}")  # ...affects a too! [1, 2, 3, 4]

# To make an independent copy:
c = a.copy()       # shallow copy
c.append(5)
print(f"a = {a}")  # unchanged
print(f"c = {c}")  # [1, 2, 3, 4, 5]

# type() vs isinstance() — always prefer isinstance
print(f"\\ntype(True) == int: {type(True) == int}")         # False
print(f"isinstance(True, int): {isinstance(True, int)}")   # True`
          }
        ],
        playground: {
          title: "🎮 Explore Python's Type System",
          description: "Experiment with types, mutability, and the id() function.",
          starterCode: `# Explore types and mutability

# Check types of various values
values = [42, 3.14, "hello", True, None, [1,2,3], (1,2), {"a":1}, {1,2}]

print(f"{'Value':<15} {'Type':<20} {'Mutable'}")
print("-" * 50)
mutable_types = (list, dict, set)
for v in values:
    is_mutable = isinstance(v, mutable_types)
    print(f"{str(v):<15} {type(v).__name__:<20} {'Yes' if is_mutable else 'No'}")`
        },
        exercises: [
          {
            id: "exe-2-1-1",
            title: "Type Detective",
            difficulty: "easy",
            description: "Write a function <code>describe_value(v)</code> that prints the value, its type name, and whether it is mutable. Test it with: 42, 3.14, 'hello', True, [1,2], (1,2), {'a':1}, {1,2}, None.",
            starterCode: `def describe_value(v):
    mutable_types = (list, dict, set)
    is_mutable = # your code
    type_name = # your code — just the name, not <class 'x'>
    print(f"Value: {str(v):<12} Type: {type_name:<10} Mutable: {is_mutable}")

# Test it:
test_values = [42, 3.14, "hello", True, [1, 2], (1, 2), {"a": 1}, {1, 2}, None]
for v in test_values:
    describe_value(v)
`,
            solution: `def describe_value(v):
    mutable_types = (list, dict, set)
    is_mutable = isinstance(v, mutable_types)
    type_name = type(v).__name__
    print(f"Value: {str(v):<12} Type: {type_name:<10} Mutable: {is_mutable}")

test_values = [42, 3.14, "hello", True, [1, 2], (1, 2), {"a": 1}, {1, 2}, None]
for v in test_values:
    describe_value(v)`,
            solutionExplanation: "type(v).__name__ gives just the class name as a string. isinstance(v, (list, dict, set)) checks if v is any of those types. The :<12 and :<10 in f-strings are column widths for alignment."
          },
          {
            id: "exe-2-1-2",
            title: "Mutable Alias Bug",
            difficulty: "medium",
            description: "This code has a bug caused by mutable aliasing. Identify what the output will be and fix it so that modifying <code>team_b</code> does not affect <code>team_a</code>.",
            starterCode: `team_a = ["Alice", "Bob", "Charlie"]
team_b = team_a   # is this a copy or alias?

team_b.append("Dave")
team_b[0] = "Alex"

# What will these print? Try to predict, then run.
print(f"team_a: {team_a}")
print(f"team_b: {team_b}")

# Fix: make team_b a true independent copy
# team_b = ???
`,
            solution: `team_a = ["Alice", "Bob", "Charlie"]
# Bug: team_b = team_a creates an alias, not a copy
# Fix: use .copy() or list() or slicing [:]
team_b = team_a.copy()

team_b.append("Dave")
team_b[0] = "Alex"

print(f"team_a: {team_a}")   # ["Alice", "Bob", "Charlie"] — unchanged
print(f"team_b: {team_b}")   # ["Alex", "Bob", "Charlie", "Dave"]`,
            solutionExplanation: "When you write b = a for a list, both names point to the same object. Modifying through b changes what a sees. Fix: team_a.copy() creates a new list with the same elements. For nested lists, you need copy.deepcopy() to avoid aliasing nested mutable objects."
          }
        ],
        interviewQuestions: [
          {
            q: "What does 'everything in Python is an object' mean?",
            a: "Every value in Python — including integers, strings, functions, classes, and None — is an instance of some class and has an identity (id()), type (type()), and value. This means even basic types like int have methods (e.g., int.bit_length()), you can pass any value to a function, store anything in a list, and assign anything to a variable. This contrasts with C/Java where primitive types like int are not objects and have no methods."
          },
          {
            q: "Why can't you use a list as a dictionary key?",
            a: "Dictionary keys must be hashable. An object is hashable if it has a __hash__ method that returns a consistent integer throughout its lifetime. Lists are mutable — their contents can change after creation. If a list were used as a dict key and then modified, the hash would change, making the key unfindable. Immutable types (int, str, tuple, frozenset) are hashable. Mutable types (list, dict, set) are not. TypeError: unhashable type: 'list'."
          },
          {
            q: "What is the difference between type() and isinstance()?",
            a: "type(x) returns the exact class of x — it does not consider inheritance. isinstance(x, T) returns True if x is an instance of T or any subclass of T. Example: isinstance(True, int) is True because bool is a subclass of int, but type(True) == int is False because type(True) is bool. Always prefer isinstance() in production code because it correctly handles inheritance hierarchies."
          }
        ]
      },

      // ── Lesson 2.2 ──────────────────────────────────────────
      {
        id: "2.2",
        title: "Variables & Python's Memory Model",
        duration: "25 min",
        content: `
<h2>Variables are Labels, Not Boxes</h2>
<p>The most important mental model shift when learning Python: <strong>a variable is a name that refers to an object — it is not a container that holds a value.</strong></p>
<p>Think of it like this: the object (e.g., the integer 42) lives in memory. A variable is just a sticky label attached to it. Multiple labels can point to the same object. Removing a label does not destroy the object — it just loses one reference.</p>

<h2>id() — Memory Address</h2>
<p><code>id(obj)</code> returns the memory address of an object (in CPython). Two variables with the same id point to the exact same object in memory.</p>

<h2>is vs == — The Critical Distinction</h2>
<p>This is one of the most commonly asked Python interview questions:</p>
<ul>
  <li><code>==</code> compares <strong>values</strong> (calls <code>__eq__</code>)</li>
  <li><code>is</code> compares <strong>identities</strong> — are these the exact same object? (compares id())</li>
</ul>
<p>Always use <code>is</code> for: <code>None</code>, <code>True</code>, <code>False</code>. Always use <code>==</code> for value comparison.</p>

<div class="callout error">
  <span class="callout-icon">🚨</span>
  <div class="callout-body">
    <strong>Common Bug</strong>
    <p>Never write <code>if x == None:</code>. The correct idiom is <code>if x is None:</code>. A custom class could override <code>__eq__</code> to return True when compared to None, which is dangerous. <code>is None</code> cannot be fooled.</p>
  </div>
</div>

<h2>Integer Caching (-5 to 256)</h2>
<p>CPython caches small integers from <strong>-5 to 256</strong>. For these values, Python reuses the same object — so <code>a is b</code> will be True even if assigned independently. This is a CPython implementation detail, not a language guarantee.</p>
<p>For integers outside this range (like 1000), two separately assigned variables will have different ids, so <code>a is b</code> returns False even if they hold the same value.</p>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Don't rely on integer caching in production code</strong>
    <p>The cache range is a CPython implementation detail. Other Python implementations may cache different ranges. Always use <code>==</code> for value comparison, never <code>is</code> for integers.</p>
  </div>
</div>

<h2>Reference Counting & Garbage Collection</h2>
<p>CPython uses <strong>reference counting</strong> to manage memory. Every object tracks how many names (references) point to it. When the count reaches zero, the memory is reclaimed immediately. Python also has a cyclic garbage collector to handle circular references (A → B → A).</p>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Very commonly asked · Amazon, Google, FAANG interviews</div>
  <p>"What is the difference between <code>is</code> and <code>==</code>?" is asked in almost every Python interview. Give the complete answer: == compares values, is compares object identities. Mention the integer caching fact as a bonus — it shows you understand CPython internals.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-2-1",
            title: "is vs == and id()",
            description: "The most important Python memory concept. Study this example carefully.",
            code: `# == compares VALUES, 'is' compares IDENTITIES
a = [1, 2, 3]
b = [1, 2, 3]   # same values, different objects
c = a           # c points to the SAME object as a

print(f"a == b:  {a == b}")   # True  — same values
print(f"a is b:  {a is b}")   # False — different objects
print(f"a is c:  {a is c}")   # True  — same object
print(f"id(a): {id(a)}")
print(f"id(b): {id(b)}")   # different
print(f"id(c): {id(c)}")   # same as a

# Always use 'is' for None, True, False
x = None
print(f"\\nx is None: {x is None}")      # correct idiom
print(f"x == None: {x == None}")        # works but bad style

# Strings
s1 = "hello"
s2 = "hello"
print(f"\\ns1 == s2: {s1 == s2}")   # True
print(f"s1 is s2: {s1 is s2}")    # True (string interning — see Lesson 2.3)`
          },
          {
            id: "ce-2-2-2",
            title: "Integer Caching — CPython's Surprising Behavior",
            description: "CPython caches integers from -5 to 256. Outside this range, separately assigned integers are different objects.",
            code: `# Small integers are cached (-5 to 256)
a = 100
b = 100
print(f"a = 100, b = 100")
print(f"a is b: {a is b}")   # True — same cached object
print(f"id(a): {id(a)}, id(b): {id(b)}")  # same id

# Large integers are NOT cached
x = 1000
y = 1000
print(f"\\nx = 1000, y = 1000")
print(f"x is y: {x is y}")   # False — different objects in most cases
print(f"x == y: {x == y}")   # True — same value
print(f"id(x): {id(x)}, id(y): {id(y)}")  # different ids

# Edge of the cache
n256 = 256
m256 = 256
print(f"\\n256 is 256: {n256 is m256}")   # True (at the edge)

# Key takeaway: NEVER use 'is' to compare integers
# Always use == for value comparison`
          }
        ],
        playground: {
          title: "🎮 Explore Memory & References",
          description: "Use id() and is to explore Python's memory model. Try changing values and observe the behavior.",
          starterCode: `# Explore variable references and identity

# Multiple names, one object
original = [10, 20, 30]
alias = original
copy = original.copy()

print("Before modification:")
print(f"  original: {original}  id: {id(original)}")
print(f"  alias:    {alias}     id: {id(alias)}")
print(f"  copy:     {copy}      id: {id(copy)}")

alias.append(40)

print("\\nAfter alias.append(40):")
print(f"  original: {original}")  # also changed!
print(f"  alias:    {alias}")
print(f"  copy:     {copy}")      # unchanged

# Try: change 'alias = original' to 'alias = original.copy()'
# and see what happens`
        },
        exercises: [
          {
            id: "exe-2-2-1",
            title: "Predict the Output",
            difficulty: "medium",
            description: "Before running, predict the output of each print statement. Then run to verify. This tests your understanding of Python's reference model.",
            starterCode: `# Predict what each print outputs — then run to check

a = 5
b = a
b = 10
print(f"1. a = {a}")   # predict: ?

x = [1, 2, 3]
y = x
y.append(4)
print(f"2. x = {x}")   # predict: ?

p = [1, 2, 3]
q = p[:]       # slice copy
q.append(4)
print(f"3. p = {p}")   # predict: ?

# Swap values (Pythonic way)
m, n = 10, 20
m, n = n, m
print(f"4. m={m}, n={n}")  # predict: ?
`,
            solution: `a = 5
b = a
b = 10
print(f"1. a = {a}")   # a = 5  (ints are immutable; b = 10 creates new int object)

x = [1, 2, 3]
y = x
y.append(4)
print(f"2. x = {x}")   # x = [1, 2, 3, 4]  (y is alias for x, mutable)

p = [1, 2, 3]
q = p[:]       # slice creates a new list
q.append(4)
print(f"3. p = {p}")   # p = [1, 2, 3]  (q is a copy, p unchanged)

m, n = 10, 20
m, n = n, m   # tuple packing/unpacking — no temp variable needed
print(f"4. m={m}, n={n}")  # m=20, n=10`,
            solutionExplanation: "Key insights: (1) Reassigning b to a new int doesn't affect a. (2) y = x creates an alias; mutation through y affects x. (3) p[:] creates an independent copy via slicing. (4) Python's tuple swap m, n = n, m is elegant and idiomatic — no temp variable needed."
          }
        ],
        interviewQuestions: [
          {
            q: "What is the difference between is and == in Python?",
            a: "== compares the values of two objects by calling __eq__(). is compares object identities — it checks whether both sides point to the same object in memory (same id()). Use == for value comparison. Use is only for singletons: None, True, False. Example: a = [1,2,3]; b = [1,2,3] → a == b is True but a is b is False. a = b → a is b is True because they reference the same list."
          },
          {
            q: "What is Python's integer caching and why does it exist?",
            a: "CPython caches small integer objects from -5 to 256. These values are frequently used, so pre-allocating them avoids repeatedly creating and destroying objects, which improves performance. Because of this, for small integers, independently created variables with the same value will pass an identity check (is). For larger integers (outside -5 to 256), new objects are created each time. Important: this is a CPython implementation detail — do not write code that depends on it. Always use == for integer comparison."
          },
          {
            q: "How does Python's memory management work?",
            a: "CPython uses reference counting as its primary memory management strategy. Each object maintains a count of how many references point to it. When an assignment is made, the count increases; when a variable goes out of scope or is reassigned, the count decreases. When the count hits zero, memory is freed immediately. For circular references (A references B which references A), reference counting alone cannot collect them. Python's cyclic garbage collector (gc module) handles this by periodically detecting and collecting cycles."
          }
        ]
      },

      // ── Lesson 2.3 ──────────────────────────────────────────
      {
        id: "2.3",
        title: "Strings In-Depth",
        duration: "30 min",
        content: `
<h2>Strings are Immutable Sequences</h2>
<p>A Python string is an <strong>ordered, immutable sequence of Unicode characters</strong>. "Immutable" means once created, you cannot change individual characters. Any operation that looks like it modifies a string actually creates a new one.</p>

<h2>String Creation</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">s1 = 'single quotes'        # most common for short strings
s2 = "double quotes"        # also fine, required if string contains apostrophe
s3 = """triple quotes       # multi-line strings
span multiple lines"""
s4 = r"raw string \\n"      # raw: backslashes not interpreted
s5 = b"bytes literal"       # bytes, not str</pre>

<h2>Indexing & Slicing</h2>
<p>Python strings support zero-based indexing and negative indexing (from the end):</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">s = "Python"
#    0 1 2 3 4 5   (positive indices)
#   -6-5-4-3-2-1   (negative indices)

s[0]    # 'P'   first character
s[-1]   # 'n'   last character
s[1:4]  # 'yth' slice [start:stop) — stop is exclusive
s[:3]   # 'Pyt' from start
s[3:]   # 'hon' to end
s[::2]  # 'Pto' every 2nd character
s[::-1] # 'nohtyP' reversed string</pre>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Slice Notation: [start:stop:step]</strong>
    <p>All three are optional. start defaults to 0, stop to len(s), step to 1. Negative step reverses direction. s[::-1] is the Pythonic way to reverse a string or list.</p>
  </div>
</div>

<h2>Essential String Methods</h2>
<p>These 15 methods cover 90% of string operations in real code:</p>

<table style="width:100%;font-size:.83rem;border-collapse:collapse;margin:.75rem 0">
  <tr style="border-bottom:1px solid var(--border);color:var(--text-muted)"><th style="text-align:left;padding:.4rem .6rem">Method</th><th style="text-align:left;padding:.4rem .6rem">Result</th></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.upper() / .lower()</code></td><td style="padding:.4rem .6rem">Case conversion</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.strip() / .lstrip() / .rstrip()</code></td><td style="padding:.4rem .6rem">Remove whitespace (or chars)</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.split(sep)</code></td><td style="padding:.4rem .6rem">Split into list</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>sep.join(iterable)</code></td><td style="padding:.4rem .6rem">Join list into string</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.replace(old, new)</code></td><td style="padding:.4rem .6rem">Replace substrings</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.find(sub) / .index(sub)</code></td><td style="padding:.4rem .6rem">Find position (-1 vs error)</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.startswith() / .endswith()</code></td><td style="padding:.4rem .6rem">Prefix/suffix check</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.count(sub)</code></td><td style="padding:.4rem .6rem">Count non-overlapping occurrences</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>.isdigit() / .isalpha() / .isalnum()</code></td><td style="padding:.4rem .6rem">Character class checks</td></tr>
  <tr><td style="padding:.4rem .6rem"><code>.zfill(width)</code></td><td style="padding:.4rem .6rem">Zero-pad (useful for IDs)</td></tr>
</table>

<h2>String Interning</h2>
<p>Python may <em>intern</em> strings — reuse the same object for strings that look like valid Python identifiers (letters, digits, underscores). This is an optimization, not a guarantee. Use <code>==</code> for string comparison, never <code>is</code>.</p>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Top string interview topics</div>
  <p>Most string algorithm problems test: reversal (<code>s[::-1]</code>), palindrome checking, anagram detection (Counter), string parsing with split/join, and character-level iteration. Master slicing and the join pattern: <code>"-".join(words)</code> is O(n) — much better than concatenating in a loop.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-3-1",
            title: "Indexing, Slicing, and Reversal",
            description: "The slice syntax [start:stop:step] is used everywhere in Python — strings, lists, numpy arrays. Master it.",
            code: `s = "Hello, Python!"
#    0123456789...

print(f"Original:    {s}")
print(f"Length:      {len(s)}")
print(f"First char:  {s[0]}")        # 'H'
print(f"Last char:   {s[-1]}")       # '!'
print(f"s[0:5]:      {s[0:5]}")      # 'Hello'
print(f"s[7:]:       {s[7:]}")       # 'Python!'
print(f"s[:5]:       {s[:5]}")       # 'Hello'
print(f"s[::2]:      {s[::2]}")      # every 2nd char
print(f"Reversed:    {s[::-1]}")     # reverse the string

# Immutability — cannot change in place
try:
    s[0] = "h"           # TypeError!
except TypeError as e:
    print(f"\\nCannot modify string: {e}")

# To 'modify', create a new string
modified = "h" + s[1:]
print(f"New string:  {modified}")`
          },
          {
            id: "ce-2-3-2",
            title: "Essential String Methods",
            description: "The most frequently used string methods in production code and interview problems.",
            code: `# Data cleaning — very common in real jobs
raw = "  Hello, World!  "
print(f"strip:      '{raw.strip()}'")
print(f"lower:      '{raw.strip().lower()}'")
print(f"upper:      '{raw.strip().upper()}'")

# Split and join — used in parsing, CSV, NLP
csv_line = "Alice,25,Engineer,Mumbai"
parts = csv_line.split(",")
print(f"\\nsplit: {parts}")
print(f"join:  {' | '.join(parts)}")

# Find, replace, check
sentence = "Python is great and Python is fun"
print(f"\\nCount 'Python': {sentence.count('Python')}")
print(f"Find 'great':   {sentence.find('great')}")
print(f"Find 'xyz':     {sentence.find('xyz')}")  # -1 if not found
print(f"Replace:        {sentence.replace('Python', 'Coding')}")

# Checking type of content
print(f"\\n'123'.isdigit(): {'123'.isdigit()}")
print(f"'abc'.isalpha(): {'abc'.isalpha()}")
print(f"'abc123'.isalnum(): {'abc123'.isalnum()}")
print(f"'007'.zfill(6): {'007'.zfill(6)}")`
          },
          {
            id: "ce-2-3-3",
            title: "f-Strings Advanced & String Formatting",
            description: "Advanced f-string formatting — number precision, alignment, padding, and expressions.",
            code: `# Format specification: {value:format_spec}
pi = 3.14159265
salary = 125000.75
name = "Bob"
score = 94.5

# Number formatting
print(f"Pi (2 dec):     {pi:.2f}")
print(f"Pi (sci):       {pi:.2e}")
print(f"Salary:         {salary:,.2f}")   # comma separators
print(f"Salary (₹):    ₹{salary:>12,.0f}")  # right-aligned

# String alignment
print(f"\\n{'Name':<15} {'Score':>8} {'Grade':^10}")
print("-" * 35)
for student, sc in [("Alice", 92.5), ("Bob", 87.3), ("Charlie", 95.0)]:
    grade = "A+" if sc >= 90 else "A" if sc >= 80 else "B"
    print(f"{student:<15} {sc:>8.1f} {grade:^10}")

# Expressions and method calls in f-strings
items = ["apple", "banana", "cherry"]
print(f"\\nItems: {', '.join(items)}")
print(f"Count: {len(items)}")`
          }
        ],
        playground: {
          title: "🎮 String Manipulation Lab",
          description: "Practice string slicing, methods, and f-strings. Modify the code to experiment.",
          starterCode: `# String Manipulation Lab

text = "  The Quick Brown Fox Jumps Over The Lazy Dog  "

# Clean and analyze
cleaned = text.strip()
words = cleaned.split()
word_count = len(words)
char_count = len(cleaned.replace(" ", ""))

print("Analysis:")
print(f"  Original (with spaces): '{text}'")
print(f"  Cleaned:                '{cleaned}'")
print(f"  Word count:             {word_count}")
print(f"  Char count (no spaces): {char_count}")
print(f"  Reversed:               '{cleaned[::-1]}'")
print(f"  Lower:                  '{cleaned.lower()}'")
print(f"  Words sorted:           {sorted(words)}")`
        },
        exercises: [
          {
            id: "exe-2-3-1",
            title: "Palindrome Checker",
            difficulty: "easy",
            description: "Write a function that checks if a string is a palindrome (reads the same forwards and backwards). Ignore case and spaces. Examples: 'racecar' → True, 'A man a plan a canal Panama' → True, 'hello' → False.",
            starterCode: `def is_palindrome(s):
    # Step 1: clean the string (lower, remove spaces)
    cleaned = s.lower().replace(" ", "")
    # Step 2: compare with its reverse
    return # your code here

# Test cases
print(is_palindrome("racecar"))                         # True
print(is_palindrome("hello"))                           # False
print(is_palindrome("A man a plan a canal Panama"))     # True
print(is_palindrome("Was it a car or a cat I saw"))     # True
`,
            solution: `def is_palindrome(s):
    cleaned = s.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

print(is_palindrome("racecar"))                         # True
print(is_palindrome("hello"))                           # False
print(is_palindrome("A man a plan a canal Panama"))     # True
print(is_palindrome("Was it a car or a cat I saw"))     # True`,
            solutionExplanation: "Clean the string first (lowercase, no spaces), then compare it to its reverse using slicing [::-1]. This is the most Pythonic approach. Alternative: cleaned == ''.join(reversed(cleaned))."
          },
          {
            id: "exe-2-3-2",
            title: "Word Frequency Counter",
            difficulty: "medium",
            description: "Given a paragraph, find the top 5 most frequent words (case-insensitive, ignore punctuation). Print them in descending frequency order.",
            starterCode: `text = """Python is great Python is fun
Python makes programming easy and fun programming
Python developers are in high demand for Python jobs"""

# Hint: use split(), lower(), and sort with key=
# Remove punctuation by replacing common chars

words = text.lower().split()
# Count frequencies using a dict

freq = {}
for word in words:
    # your code here
    pass

# Sort and print top 5
`,
            solution: `text = """Python is great Python is fun
Python makes programming easy and fun programming
Python developers are in high demand for Python jobs"""

words = text.lower().split()

freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

# Sort by frequency descending
sorted_words = sorted(freq.items(), key=lambda x: x[1], reverse=True)

print("Top 5 words:")
for word, count in sorted_words[:5]:
    print(f"  {word:<15} {count} times")`,
            solutionExplanation: "dict.get(key, default) returns the value or a default if key doesn't exist — cleaner than checking 'if key in dict'. sorted() with key=lambda and reverse=True sorts by frequency descending. In production code, use collections.Counter — it does this in one line!"
          },
          {
            id: "exe-2-3-3",
            title: "Caesar Cipher",
            difficulty: "hard",
            description: "Implement a Caesar cipher that shifts each letter by a given amount. Non-letters remain unchanged. Example: encrypt('Hello!', 3) → 'Khoor!'. The cipher should wrap around (z shifted by 1 = a).",
            starterCode: `def caesar_cipher(text, shift):
    result = []
    for char in text:
        if char.isalpha():
            # Determine base: 'a' for lowercase, 'A' for uppercase
            base = ord('a') if char.islower() else ord('A')
            # Shift the character and wrap with modulo
            shifted = # your code here
            result.append(shifted)
        else:
            result.append(char)
    return ''.join(result)

print(caesar_cipher("Hello, World!", 3))    # Khoor, Zruog!
print(caesar_cipher("Khoor, Zruog!", -3))   # Hello, World!
print(caesar_cipher("xyz", 3))              # abc
`,
            solution: `def caesar_cipher(text, shift):
    result = []
    for char in text:
        if char.isalpha():
            base = ord('a') if char.islower() else ord('A')
            shifted = chr((ord(char) - base + shift) % 26 + base)
            result.append(shifted)
        else:
            result.append(char)
    return ''.join(result)

print(caesar_cipher("Hello, World!", 3))    # Khoor, Zruog!
print(caesar_cipher("Khoor, Zruog!", -3))   # Hello, World!
print(caesar_cipher("xyz", 3))              # abc`,
            solutionExplanation: "ord() converts a character to its ASCII code. chr() converts back. Subtracting the base normalizes to 0-25, adding shift moves it, % 26 wraps around, then adding base back converts to the correct letter. Using ''.join(list) to build strings is more efficient than concatenation in a loop (O(n) vs O(n²))."
          }
        ],
        interviewQuestions: [
          {
            q: "Why are strings immutable in Python and what are the implications?",
            a: "Strings are immutable for several reasons: (1) Safety — shared strings can't be accidentally modified. (2) Hashability — immutable objects can be used as dict keys and set members. (3) Performance — Python can intern (reuse) identical string objects. The implication is that operations like concatenation (s += 'x') create new objects each time. Building a string in a loop with += is O(n²). The Pythonic fix is to collect parts in a list and join: ''.join(parts) — which is O(n)."
          },
          {
            q: "What is string interning in Python?",
            a: "String interning is an optimization where Python stores only one copy of a string value and reuses it for multiple variables. CPython automatically interns strings that look like identifiers (contain only letters, digits, underscores). Interned strings compare with 'is' instead of '==', which is faster. You can explicitly intern a string with sys.intern(s). Important: never rely on interning for correctness — always use == for string comparison."
          },
          {
            q: "What is the most efficient way to concatenate many strings?",
            a: "Use ''.join(list_of_strings). String concatenation with + or += in a loop creates a new string object each iteration because strings are immutable, giving O(n²) time complexity. ''.join() collects all parts first then creates one string in O(n). Example: instead of result = '' followed by result += word for each word, use result = ' '.join(words). This is a common interview follow-up: 'How would you optimize your string building?'"
          },
          {
            q: "What is the difference between find() and index() for strings?",
            a: "Both search for a substring. find() returns -1 if not found. index() raises a ValueError if not found. Use find() when absence is a valid case (check against -1). Use index() when absence would be a programming error you want to catch immediately. Similarly, list has both .index() (raises ValueError) and the 'in' operator (returns bool)."
          }
        ]
      },

      // ── Lesson 2.4 ──────────────────────────────────────────
      {
        id: "2.4",
        title: "Numbers & Booleans",
        duration: "20 min",
        content: `
<h2>Integers — Arbitrary Precision</h2>
<p>Python integers have <strong>no size limit</strong>. Unlike C/Java where an <code>int</code> is 32 or 64 bits, Python integers can be as large as your RAM allows. This makes Python perfect for cryptography, big-data calculations, and competitive programming.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">big = 2 ** 1000   # Python handles this; C/Java would overflow</pre>

<h2>Floats — IEEE 754 Double Precision</h2>
<p>Floats use 64-bit IEEE 754 representation. This means they <strong>cannot represent all decimal numbers exactly</strong>. This is a hardware limitation, not a Python bug.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">0.1 + 0.2 == 0.3   # False — 0.30000000000000004
# Fix: round(0.1 + 0.2, 2) == 0.3  or use decimal.Decimal</pre>
<p>For financial calculations, use the <code>decimal</code> module. For approximate comparisons, use <code>math.isclose(a, b)</code>.</p>

<h2>bool — A Subclass of int</h2>
<p>Python's <code>bool</code> type is a subclass of <code>int</code>. <code>True == 1</code> and <code>False == 0</code>. This means you can use booleans in arithmetic — a fact exploited in many interview problems.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">sum([True, True, False, True])  # 3 — count of True values</pre>

<h2>Truthiness & Falsy Values</h2>
<p>Every Python object has a truth value. The following are <strong>falsy</strong> (evaluate to False in boolean context):</p>
<ul>
  <li><code>None</code></li>
  <li><code>False</code></li>
  <li><code>0</code>, <code>0.0</code>, <code>0j</code></li>
  <li><code>""</code> (empty string)</li>
  <li><code>[]</code> (empty list), <code>()</code> (empty tuple), <code>{}</code> (empty dict), <code>set()</code></li>
</ul>
<p>Everything else is <strong>truthy</strong>. This lets you write <code>if items:</code> instead of <code>if len(items) > 0:</code>.</p>

<h2>Boolean Operators & Short-Circuit Evaluation</h2>
<p><code>and</code> and <code>or</code> return one of their operands, not necessarily True/False. This enables the "or default" pattern:</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">name = user_input or "Anonymous"  # if user_input is empty/None, use "Anonymous"
result = cache.get(key) or compute_expensive(key)</pre>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Asked at data science & backend interviews</div>
  <p>"Why is 0.1 + 0.2 != 0.3 in Python?" This is a famous question. Answer: floating-point numbers use binary IEEE 754 representation, which cannot represent 0.1 or 0.2 exactly. The fix is <code>round()</code>, <code>math.isclose()</code>, or <code>decimal.Decimal</code> for financial applications.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-4-1",
            title: "Integers, Floats, and Precision",
            description: "Python's arbitrary-precision integers and the famous floating-point gotcha.",
            code: `import math

# Integers — no overflow!
big = 2 ** 100
print(f"2^100 = {big}")
print(f"Factorial of 30 = {math.factorial(30)}")  # huge number, no overflow

# Floats — IEEE 754 precision issue
print(f"\\n0.1 + 0.2 = {0.1 + 0.2}")         # 0.30000000000000004
print(f"0.1 + 0.2 == 0.3: {0.1 + 0.2 == 0.3}")   # False!

# Fix 1: round
print(f"round fix: {round(0.1 + 0.2, 2) == 0.3}")   # True

# Fix 2: math.isclose (preferred for comparisons)
print(f"isclose fix: {math.isclose(0.1 + 0.2, 0.3)}")   # True

# Fix 3: decimal module (for financial calculations)
from decimal import Decimal
result = Decimal("0.1") + Decimal("0.2")
print(f"Decimal: {result}")           # 0.3 (exact)
print(f"Decimal == 0.3: {result == Decimal('0.3')}")  # True

# Numeric operations
print(f"\\nabs(-42): {abs(-42)}")
print(f"round(3.7): {round(3.7)}")    # 4
print(f"round(2.5): {round(2.5)}")    # 2 (banker's rounding!)`
          },
          {
            id: "ce-2-4-2",
            title: "Boolean Logic & Truthiness",
            description: "Understanding truthiness and short-circuit evaluation unlocks elegant, Pythonic code.",
            code: `# Falsy values
falsy_values = [None, False, 0, 0.0, "", [], (), {}, set()]
print("Falsy values:")
for v in falsy_values:
    print(f"  bool({repr(v):<8}) = {bool(v)}")

# Truthiness in conditions (Pythonic)
items = []
if not items:           # same as: if len(items) == 0
    print("\\nList is empty")

name = ""
greeting = f"Hello, {name}" if name else "Hello, stranger"
print(greeting)

# Short-circuit evaluation
# 'and' returns first falsy value, or last value
print(f"\\n1 and 2:     {1 and 2}")      # 2 (both truthy, returns last)
print(f"0 and 2:     {0 and 2}")        # 0 (short-circuits at 0)
print(f"1 or 2:      {1 or 2}")         # 1 (first truthy)
print(f"0 or 2:      {0 or 2}")         # 2

# Or-default pattern (very common in Python code)
config_value = None
timeout = config_value or 30    # use 30 if config_value is falsy
print(f"timeout = {timeout}")

# Bool is int — count True values
results = [True, False, True, True, False]
print(f"\\nPassed: {sum(results)} out of {len(results)}")`
          }
        ],
        playground: {
          title: "🎮 Number & Boolean Lab",
          description: "Experiment with numbers and boolean logic in Python.",
          starterCode: `import math

# ── Integer precision demo ──────────────────────────
print("Python integers have no overflow:")
for n in [10, 20, 50, 100]:
    print(f"  2^{n:<4} = {2**n}")

# ── Float precision ─────────────────────────────────
print("\\nFloat precision (IEEE 754):")
expressions = [
    ("0.1 + 0.2", 0.1 + 0.2),
    ("0.1 + 0.1 + 0.1", 0.1 + 0.1 + 0.1),
    ("1.0 - 0.9", 1.0 - 0.9),
]
for expr, val in expressions:
    print(f"  {expr:<25} = {val}")

# ── Truthiness ──────────────────────────────────────
print("\\nTruthiness:")
test = [0, 1, -1, "", "0", [], [0], None, False, True]
for v in test:
    print(f"  bool({repr(v):<8}) = {bool(v)}")`
        },
        exercises: [
          {
            id: "exe-2-4-1",
            title: "Safe Division Function",
            difficulty: "easy",
            description: "Write a function <code>safe_divide(a, b)</code> that divides a by b, but returns 0 if b is 0 (instead of raising ZeroDivisionError). Use a truthiness check, not an explicit <code>== 0</code> check.",
            starterCode: `def safe_divide(a, b):
    # Use 'if b:' (truthiness) instead of 'if b != 0:'
    # Return a/b if b is truthy, else return 0
    pass

print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # 0
print(safe_divide(7, 3))     # 2.333...
`,
            solution: `def safe_divide(a, b):
    if b:
        return a / b
    return 0

print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # 0
print(safe_divide(7, 3))     # 2.3333333333333335`,
            solutionExplanation: "if b: checks truthiness — 0 is falsy, so it catches division by zero without explicitly comparing to 0. This is more Pythonic than if b != 0. Note: this also catches b=None, b='' etc., which may or may not be desired."
          },
          {
            id: "exe-2-4-2",
            title: "Statistics Calculator",
            difficulty: "medium",
            description: "Given a list of numbers, compute: mean, median, and mode. Use only built-in Python (no statistics module). Handle the case where the list is empty gracefully.",
            starterCode: `def statistics_report(numbers):
    if not numbers:   # truthiness check for empty list
        print("No data provided")
        return

    n = len(numbers)
    mean = sum(numbers) / n

    # Median: sort and pick middle
    sorted_nums = sorted(numbers)
    mid = n // 2
    if n % 2 == 0:
        median = (sorted_nums[mid - 1] + sorted_nums[mid]) / 2
    else:
        median = sorted_nums[mid]

    # Mode: most frequent value
    freq = {}
    for num in numbers:
        freq[num] = freq.get(num, 0) + 1
    mode = max(freq, key=freq.get)

    print(f"Count:  {n}")
    print(f"Mean:   {mean:.2f}")
    print(f"Median: {median}")
    print(f"Mode:   {mode}")

statistics_report([4, 7, 2, 7, 3, 9, 7, 1])
print()
statistics_report([])
`,
            solution: `def statistics_report(numbers):
    if not numbers:
        print("No data provided")
        return

    n = len(numbers)
    mean = sum(numbers) / n
    sorted_nums = sorted(numbers)
    mid = n // 2
    if n % 2 == 0:
        median = (sorted_nums[mid - 1] + sorted_nums[mid]) / 2
    else:
        median = sorted_nums[mid]
    freq = {}
    for num in numbers:
        freq[num] = freq.get(num, 0) + 1
    mode = max(freq, key=freq.get)

    print(f"Count:  {n}")
    print(f"Mean:   {mean:.2f}")
    print(f"Median: {median}")
    print(f"Mode:   {mode}")

statistics_report([4, 7, 2, 7, 3, 9, 7, 1])
print()
statistics_report([])`,
            solutionExplanation: "max(freq, key=freq.get) finds the key in freq with the maximum value — elegant use of the key parameter. Sorting and indexing to find the median is a common algorithm question. Note: the statistics module (Python 3.4+) provides all these functions, but knowing how to implement them is essential for interviews."
          }
        ],
        interviewQuestions: [
          {
            q: "Why does 0.1 + 0.2 not equal 0.3 in Python?",
            a: "This is a floating-point representation issue, not a Python bug. Computers store numbers in binary (base-2). Numbers like 0.1 and 0.2 cannot be represented exactly in binary (similar to how 1/3 cannot be represented exactly in decimal). The result of 0.1 + 0.2 is 0.30000000000000004 due to accumulated rounding errors. Fix: use round(result, n) for display, math.isclose(a, b) for comparisons (tolerates small errors), or decimal.Decimal for exact decimal arithmetic in financial applications."
          },
          {
            q: "How does Python handle integer overflow differently from C/Java?",
            a: "Python integers are arbitrary precision — they can grow as large as available memory. C and Java use fixed-width integers (32 or 64 bits) that overflow and wrap around. For example, in C, INT_MAX + 1 wraps to INT_MIN. In Python, there is no overflow — 2**1000 works perfectly. This is implemented in CPython by using arrays of C digits internally, dynamically resizing as needed. The downside is that Python integers take more memory and are slower than C fixed-width integers."
          },
          {
            q: "What are falsy values in Python?",
            a: "Falsy values are: None, False, 0 (int), 0.0 (float), 0j (complex zero), '' (empty string), [] (empty list), () (empty tuple), {} (empty dict), set() (empty set), and any object whose __bool__ returns False or __len__ returns 0. Everything else is truthy. This allows writing if items: instead of if len(items) > 0: — which is more Pythonic. Note: '0', [0], (False,) are all truthy."
          }
        ]
      },

      // ── Lesson 2.5 ──────────────────────────────────────────
      {
        id: "2.5",
        title: "Type Conversion & Common Pitfalls",
        duration: "20 min",
        content: `
<h2>Explicit Type Conversion</h2>
<p>Python does not implicitly convert between unrelated types. You must be explicit. These built-in functions convert between types:</p>

<table style="width:100%;font-size:.85rem;border-collapse:collapse;margin:.75rem 0">
  <tr style="border-bottom:1px solid var(--border);color:var(--text-muted)"><th style="padding:.4rem .6rem">Function</th><th style="padding:.4rem .6rem">Converts to</th><th style="padding:.4rem .6rem">Example</th></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>int(x)</code></td><td style="padding:.4rem .6rem">Integer</td><td style="padding:.4rem .6rem"><code>int("42") → 42</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>float(x)</code></td><td style="padding:.4rem .6rem">Float</td><td style="padding:.4rem .6rem"><code>float("3.14") → 3.14</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>str(x)</code></td><td style="padding:.4rem .6rem">String</td><td style="padding:.4rem .6rem"><code>str(42) → "42"</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>bool(x)</code></td><td style="padding:.4rem .6rem">Boolean</td><td style="padding:.4rem .6rem"><code>bool(0) → False</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>list(x)</code></td><td style="padding:.4rem .6rem">List</td><td style="padding:.4rem .6rem"><code>list("abc") → ['a','b','c']</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>tuple(x)</code></td><td style="padding:.4rem .6rem">Tuple</td><td style="padding:.4rem .6rem"><code>tuple([1,2,3]) → (1,2,3)</code></td></tr>
  <tr><td style="padding:.4rem .6rem"><code>set(x)</code></td><td style="padding:.4rem .6rem">Set</td><td style="padding:.4rem .6rem"><code>set([1,1,2]) → {1,2}</code></td></tr>
</table>

<h2>Implicit Conversion (Coercion)</h2>
<p>Python does coerce in specific, well-defined cases:</p>
<ul>
  <li><code>int + float → float</code> (e.g., <code>3 + 1.5 == 4.5</code>)</li>
  <li><code>bool + int → int</code> (e.g., <code>True + 2 == 3</code>)</li>
</ul>
<p>It does NOT auto-convert between str and numbers — <code>"5" + 3</code> raises a TypeError.</p>

<h2>Common Conversion Errors to Know</h2>
<ul>
  <li><code>int("3.14")</code> → ValueError (use <code>int(float("3.14"))</code>)</li>
  <li><code>int("hello")</code> → ValueError</li>
  <li><code>"5" + 3</code> → TypeError (use <code>int("5") + 3</code>)</li>
  <li><code>int(None)</code> → TypeError</li>
</ul>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Type Annotations (Python 3.5+)</strong>
    <p>Python supports optional type hints: <code>def add(a: int, b: int) -> int:</code>. These are not enforced at runtime but are checked by tools like mypy and are shown in IDE autocomplete. Modern Python codebases use them heavily. They make code self-documenting and catch bugs early.</p>
  </div>
</div>

<div class="interview-tip">
  <div class="interview-tip-label">🎯 Live coding sessions</div>
  <p>When processing user input from the console, remember that <code>input()</code> always returns a string. Forgetting to convert to int/float is one of the most common bugs in live coding interviews. Always do: <code>n = int(input("Enter a number: "))</code>.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-5-1",
            title: "Type Conversion in Practice",
            description: "All common conversion scenarios, including error cases and edge cases.",
            code: `# Basic conversions
print(int("42"))        # 42
print(float("3.14"))    # 3.14
print(str(100))         # "100"
print(bool(0))          # False
print(bool(""))         # False
print(bool("False"))    # True! Non-empty strings are truthy

# Number base conversion
print(f"\\nBinary 1010 as int: {int('1010', 2)}")   # 10
print(f"Hex 'ff' as int:    {int('ff', 16)}")        # 255
print(f"42 in binary:       {bin(42)}")               # 0b101010
print(f"255 in hex:         {hex(255)}")              # 0xff

# Edge cases
print("\\n--- Error cases (caught) ---")
try:
    int("3.14")          # can't go directly string-float to int
except ValueError as e:
    print(f"int('3.14'): {e}")

try:
    "5" + 3             # no implicit str-to-int conversion
except TypeError as e:
    print(f"'5' + 3: {e}")

# Correct way to convert "3.14" to int
result = int(float("3.14"))   # step 1: to float, step 2: to int
print(f"int(float('3.14')) = {result}")  # 3`
          },
          {
            id: "ce-2-5-2",
            title: "Type Hints — Modern Python Practice",
            description: "Type hints make code self-documenting and enable IDE support and static analysis. Used in all modern Python codebases.",
            code: `# Type hints — not enforced at runtime but essential in production code
def calculate_grade(score: float, max_score: float = 100.0) -> str:
    """Returns letter grade for a given score."""
    percentage = (score / max_score) * 100
    if percentage >= 90:
        return "A+"
    elif percentage >= 80:
        return "A"
    elif percentage >= 70:
        return "B"
    elif percentage >= 60:
        return "C"
    return "F"

# Python does NOT enforce types — this still runs (but mypy would warn)
print(calculate_grade(88))      # A
print(calculate_grade(92, 100)) # A+
print(calculate_grade(45, 100)) # F

# List, dict, tuple type hints (Python 3.9+ syntax)
def process_names(names: list[str]) -> dict[str, int]:
    """Returns name → length mapping."""
    return {name: len(name) for name in names}

result = process_names(["Alice", "Bob", "Charlie"])
print(result)   # {'Alice': 5, 'Bob': 3, 'Charlie': 7}`
          }
        ],
        playground: {
          title: "🎮 Conversion & Types Sandbox",
          description: "Practice type conversions and see how Python handles different types.",
          starterCode: `# Safe type conversion with error handling

def safe_int(value, default=0):
    """Convert to int safely, return default on failure."""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

def safe_float(value, default=0.0):
    """Convert to float safely."""
    try:
        return float(value)
    except (ValueError, TypeError):
        return default

# Test with various inputs
test_inputs = ["42", "3.14", "hello", None, True, False, "", "  17  "]
print(f"{'Input':<12} {'safe_int':>10} {'safe_float':>12}")
print("-" * 38)
for val in test_inputs:
    print(f"{repr(val):<12} {safe_int(val):>10} {safe_float(val):>12}")`
        },
        exercises: [
          {
            id: "exe-2-5-1",
            title: "Input Validator",
            difficulty: "medium",
            description: "Write a function <code>parse_student_record(record)</code> that takes a comma-separated string like <code>'Alice,23,8.9'</code> and returns a dict with keys name (str), age (int), gpa (float). Handle conversion errors gracefully with default values.",
            starterCode: `def parse_student_record(record: str) -> dict:
    """Parse 'name,age,gpa' string into a structured dict."""
    parts = record.split(",")

    name = parts[0].strip() if len(parts) > 0 else "Unknown"

    try:
        age = int(parts[1].strip()) if len(parts) > 1 else 0
    except ValueError:
        age = 0

    # Your code: parse gpa (float), handle errors
    gpa = # your code here

    return {"name": name, "age": age, "gpa": gpa}

# Test
records = ["Alice,23,8.9", "Bob,twenty,7.5", "Charlie,22,abc", "Dave"]
for r in records:
    print(parse_student_record(r))
`,
            solution: `def parse_student_record(record: str) -> dict:
    parts = record.split(",")
    name = parts[0].strip() if len(parts) > 0 else "Unknown"
    try:
        age = int(parts[1].strip()) if len(parts) > 1 else 0
    except (ValueError, IndexError):
        age = 0
    try:
        gpa = float(parts[2].strip()) if len(parts) > 2 else 0.0
    except (ValueError, IndexError):
        gpa = 0.0
    return {"name": name, "age": age, "gpa": gpa}

records = ["Alice,23,8.9", "Bob,twenty,7.5", "Charlie,22,abc", "Dave"]
for r in records:
    print(parse_student_record(r))`,
            solutionExplanation: "Real-world data is messy. Using try/except around each conversion handles invalid values gracefully without crashing. Catching (ValueError, IndexError) in one tuple is cleaner than separate blocks. This pattern — parse input, validate, provide defaults — is fundamental in data engineering."
          }
        ],
        interviewQuestions: [
          {
            q: "What is the difference between implicit and explicit type conversion in Python?",
            a: "Explicit conversion uses constructor functions: int(), float(), str(), list() etc. — you explicitly request the conversion. Implicit conversion (coercion) happens automatically in limited cases: Python promotes int to float when mixing them (3 + 1.5 = 4.5), and bool to int (True + 2 = 3). Python does NOT implicitly convert between str and numbers — '5' + 3 raises TypeError, unlike JavaScript which gives '53'. This explicit design prevents hidden type-coercion bugs."
          },
          {
            q: "What are Python type hints and why are they useful?",
            a: "Type hints (PEP 484, Python 3.5+) allow annotating function signatures and variables with types: def greet(name: str) -> str. They are not enforced at runtime — Python still runs the code even if types are wrong. Their value: (1) documentation — code is self-explanatory; (2) IDE support — autocomplete and refactoring work better; (3) static analysis tools like mypy catch type errors before runtime; (4) required in many professional Python codebases. Python 3.10+ simplified syntax: list[int] instead of List[int] from typing."
          }
        ]
      }
    ]
  },


  // ══════════════════════════════════════════════════════════════
  // MODULE 3 — Control Flow & Loops
  // ══════════════════════════════════════════════════════════════
  {
    id: 3,
    title: "Control Flow & Loops",
    icon: "🔀",
    color: "#ffb300",
    difficulty: "beginner",
    duration: "3–4 hours",
    description: "Master Python's decision-making and iteration tools — including the unique for-else construct and powerful comprehensions.",
    objectives: [
      "Write clean conditional logic using if/elif/else",
      "Understand and use truthiness in boolean contexts",
      "Iterate with for loops using range, enumerate, and zip",
      "Use the unique for-else and while-else constructs",
      "Write concise list, dict, and set comprehensions"
    ],
    lessons: [
      {
        id: "3.1",
        title: "Conditional Statements & Truthiness",
        duration: "25 min",
        content: `
<h2>if / elif / else</h2>
<p>Python uses <strong>indentation</strong> (not braces) to define code blocks — 4 spaces per level (PEP 8). The elif and else clauses are optional.</p>
<h2>Truthiness in Conditions</h2>
<p>Any object can be used in a boolean context. Falsy values: <code>None, False, 0, 0.0, "", [], (), {}, set()</code>. Everything else is truthy. Write <code>if items:</code> not <code>if len(items) > 0:</code>.</p>
<h2>Chained Comparisons</h2>
<p>Python supports mathematical chaining: <code>0 &lt; x &lt; 10</code> is equivalent to <code>x &gt; 0 and x &lt; 10</code>. Cleaner and more readable.</p>
<h2>Ternary Expression</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">result = value_if_true if condition else value_if_false</pre>
<div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><strong>Always use is None</strong><p>Write <code>if x is None:</code> not <code>if x == None:</code> — PEP 8 and safe against custom __eq__.</p></div></div>
<div class="interview-tip"><div class="interview-tip-label">🎯 Coding interviews — Amazon, startups</div><p>Using <code>if items:</code> and chained comparisons signals Python fluency. Interviewers notice the difference between idiomatic Python and Java-style code.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-1-1",
            title: "Conditions, Chaining, Truthiness",
            description: "Core conditional patterns used in every Python codebase.",
            code: `score = 85
grade = "A+" if score >= 90 else "A" if score >= 80 else "B" if score >= 70 else "C" if score >= 60 else "F"
print(f"Score {score} → {grade}")

# Chained comparisons
age = 25
if 18 <= age < 65:
    print("Working adult")

# Truthiness
items = []
if not items:
    print("Cart is empty")

# in / not in
valid_roles = {"admin", "editor", "viewer"}
role = "editor"
print(f"Access: {role in valid_roles}")`
          },
          {
            id: "ce-3-1-2",
            title: "Ternary & or-default patterns",
            description: "Idiomatic Python patterns for concise conditional logic.",
            code: `# Ternary
nums = [5, -3, 0, 8, -1]
for n in nums:
    print(f"{n:>4}: {'pos' if n > 0 else ('neg' if n < 0 else 'zero')}")

# or-default pattern
def greet(name=None):
    display = name or "stranger"
    return f"Hello, {display}!"

print(greet())           # Hello, stranger!
print(greet("Alice"))    # Hello, Alice!

# Truthiness-based guard
def safe_first(lst):
    return lst[0] if lst else None

print(safe_first([10, 20]))  # 10
print(safe_first([]))        # None`
          }
        ],
        playground: {
          title: "🎮 Conditional Logic Lab",
          description: "Build a real-world validator with chained conditions.",
          starterCode: `def check_loan(age, income, credit_score):
    issues = []
    if not (21 <= age <= 65):
        issues.append(f"Age {age} must be 21-65")
    if income < 300000:
        issues.append(f"Income {income} below minimum 300000")
    if credit_score < 700:
        issues.append(f"Credit score {credit_score} below 700")
    status = "APPROVED ✓" if not issues else "REJECTED ✗"
    return status, issues

for applicant in [(30, 500000, 750), (19, 400000, 800), (35, 250000, 680)]:
    age, inc, cs = applicant
    status, reasons = check_loan(age, inc, cs)
    print(f"Age={age}, Inc={inc}, CS={cs}: {status}")
    for r in reasons:
        print(f"  - {r}")`
        },
        exercises: [
          {
            id: "exe-3-1-1", title: "FizzBuzz", difficulty: "easy",
            description: "Print 1–30. For multiples of 3: 'Fizz'. Multiples of 5: 'Buzz'. Both: 'FizzBuzz'.",
            starterCode: `for n in range(1, 31):
    pass  # your logic here`,
            solution: `for n in range(1, 31):
    if n % 15 == 0: print("FizzBuzz")
    elif n % 3 == 0: print("Fizz")
    elif n % 5 == 0: print("Buzz")
    else: print(n)`,
            solutionExplanation: "Check 15 first — it must come before 3 and 5 checks, otherwise multiples of 15 would only print 'Fizz'. Modulo % gives remainder; divisibility means remainder is 0."
          },
          {
            id: "exe-3-1-2", title: "Triangle Classifier", difficulty: "medium",
            description: "Given 3 sides, return 'Equilateral', 'Isosceles', 'Scalene', or 'Invalid' (fails triangle inequality).",
            starterCode: `def classify_triangle(a, b, c):
    if not (a + b > c and b + c > a and a + c > b):
        return "Invalid"
    # your classification here
    pass

for sides in [(3,3,3),(3,3,5),(3,4,5),(1,2,10)]:
    print(f"{sides} → {classify_triangle(*sides)}")`,
            solution: `def classify_triangle(a, b, c):
    if not (a + b > c and b + c > a and a + c > b):
        return "Invalid"
    if a == b == c: return "Equilateral"
    if a == b or b == c or a == c: return "Isosceles"
    return "Scalene"

for sides in [(3,3,3),(3,3,5),(3,4,5),(1,2,10)]:
    print(f"{sides} → {classify_triangle(*sides)}")`,
            solutionExplanation: "a == b == c chains two equality checks. The triangle inequality must be verified before classification. Spreading tuple with * unpacks it into positional args."
          }
        ],
        interviewQuestions: [
          { q: "What are truthy and falsy values in Python?", a: "Falsy: None, False, 0, 0.0, 0j, '', [], (), {}, set(), and any object whose __bool__ returns False or __len__ returns 0. Everything else is truthy. This enables idiomatic patterns like 'if items:' instead of 'if len(items) > 0:'. Note: '0', [0], and (False,) are all truthy — non-empty containers are always truthy." },
          { q: "How do chained comparisons work?", a: "Python evaluates 0 < x < 10 as (0 < x) and (x < 10) with short-circuit evaluation and without evaluating x twice. Unlike C where 0 < x < 10 would be (0 < x) < 10 (always True). You can chain any number of comparisons: 1 <= a <= b <= 100." },
          { q: "When should you use the ternary expression?", a: "Use for simple one-liners where both branches are single expressions: grade = 'Pass' if score >= 60 else 'Fail'. Avoid nesting ternaries — use if/elif/else for multi-branch logic. Never use it for side effects like printing." }
        ]
      },
      {
        id: "3.2",
        title: "For Loops & Iterables",
        duration: "30 min",
        content: `
<h2>for Loops over Any Iterable</h2>
<p>Python's <code>for</code> iterates over any iterable — lists, strings, tuples, dicts, sets, files, generators. No index needed.</p>
<h2>range()</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">range(stop)             # 0..stop-1
range(start, stop, step) # with step (negative for reverse)</pre>
<p><code>range()</code> is lazy — generates values on demand. <code>range(1_000_000)</code> uses negligible memory.</p>
<h2>enumerate() and zip()</h2>
<p>Never use <code>for i in range(len(items)): item = items[i]</code>. Use <code>enumerate()</code> for index+value, <code>zip()</code> for parallel iteration.</p>
<h2>for-else — Python's Secret Weapon</h2>
<p>The <code>else</code> runs only if the loop finished <em>without</em> hitting a <code>break</code>. Use it to detect "not found" without a flag variable.</p>
<div class="interview-tip"><div class="interview-tip-label">🎯 Amazon, Microsoft — distinguishes Python experts</div><p>"Explain for-else." Most candidates have never heard of it. Knowing it — with a prime-number or search example — sets you apart from the crowd.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-2-1",
            title: "range, enumerate, zip",
            description: "The three core loop helpers — essential for idiomatic Python.",
            code: `fruits = ["apple", "banana", "cherry"]
prices = [1.20, 0.50, 2.00]

# enumerate — index + value
for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit}")

# zip — parallel iteration
print()
for fruit, price in zip(fruits, prices):
    print(f"  {fruit:<10} \${price:.2f}")

# range variants
print(list(range(5)))           # [0,1,2,3,4]
print(list(range(1, 10, 2)))    # [1,3,5,7,9]
print(list(range(10, 0, -2)))   # [10,8,6,4,2]`
          },
          {
            id: "ce-3-2-2",
            title: "for-else — Eliminating Flag Variables",
            description: "for-else elegantly handles 'did I find it?' without a boolean flag.",
            code: `def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            break           # found factor — not prime
    else:
        return True         # no factor found — prime!
    return False

print([n for n in range(2, 20) if is_prime(n)])

# Without for-else you'd need:
# found = False
# for i in ...:
#     if ...: found = True; break
# if not found: return True  ← for-else is cleaner`
          }
        ],
        playground: {
          title: "🎮 Loop Mastery",
          description: "Combine enumerate, zip, and for-else in a real scenario.",
          starterCode: `names  = ["Alice", "Bob", "Charlie", "Dave"]
scores = [92, 78, 85, 91]
grades = ["A+", "B", "A", "A+"]

print(f"{'Rank':<6}{'Name':<10}{'Score':>6}{'Grade':>7}")
print("-" * 30)
for rank, (name, score, grade) in enumerate(zip(names, scores, grades), 1):
    print(f"{rank:<6}{name:<10}{score:>6}{grade:>7}")

# Find first A+ using for-else
print()
for i, grade in enumerate(grades):
    if grade == "A+":
        print(f"First A+ at rank {i+1}: {names[i]}")
        break
else:
    print("No A+ found")`
        },
        exercises: [
          {
            id: "exe-3-2-1", title: "Flatten a Nested List", difficulty: "easy",
            description: "Flatten [[1,2],[3,4],[5]] → [1,2,3,4,5] using nested loops, then as a one-line comprehension.",
            starterCode: `data = [[1,2,3],[4,5],[6,7,8]]
flat = []
for sublist in data:
    for item in sublist:
        flat.append(item)
print(flat)
# One-liner:
flat2 = [item for sublist in data for item in sublist]
print(flat2)`,
            solution: `data = [[1,2,3],[4,5],[6,7,8]]
flat = []
for sublist in data:
    for item in sublist:
        flat.append(item)
print(flat)
flat2 = [item for sublist in data for item in sublist]
print(flat2)`,
            solutionExplanation: "The comprehension mirrors the nested loop: outer 'for sublist in data', inner 'for item in sublist'. Standard list.extend(sublist) inside the loop also works."
          },
          {
            id: "exe-3-2-2", title: "Find Primes with for-else", difficulty: "hard",
            description: "Print all prime numbers from 2 to 50 using a nested for-else.",
            starterCode: `for n in range(2, 51):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            break
    else:
        print(n, end=" ")
print()`,
            solution: `for n in range(2, 51):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            break
    else:
        print(n, end=" ")
print()`,
            solutionExplanation: "The inner for-else: if break fires, we found a factor (not prime), else clause is skipped. If the loop finishes naturally (no factor found), else runs and we print the prime. Checking up to sqrt(n) is the classic optimization: if n has a factor > sqrt(n), the corresponding factor < sqrt(n) would already have been found."
          }
        ],
        interviewQuestions: [
          { q: "Explain Python's for-else construct.", a: "The else clause on a for (or while) loop runs only when the loop completes without hitting break. If break executes, else is skipped. Classic use: search algorithms — loop through items, break when found, else means 'not found'. Eliminates flag variables. Works identically on while loops." },
          { q: "Why use enumerate() instead of range(len(items))?", a: "enumerate() is more Pythonic: cleaner syntax, works on any iterable (not just sequences), communicates intent clearly, avoids off-by-one errors, and supports custom start values. range(len(x)) is considered an anti-pattern in Python." },
          { q: "What happens when zip() receives sequences of different lengths?", a: "zip() stops at the shortest. Use itertools.zip_longest(a, b, fillvalue=None) to pad shorter sequences. Unzipping: keys, vals = zip(*list_of_pairs)." }
        ]
      },
      {
        id: "3.3",
        title: "While Loops & Loop Control",
        duration: "20 min",
        content: `
<h2>while Loops</h2>
<p>Use <code>while</code> when the number of iterations is unknown. The loop runs as long as its condition is True.</p>
<h2>break, continue, pass</h2>
<ul><li><strong>break</strong>: exit the loop immediately</li><li><strong>continue</strong>: skip rest of current iteration, next cycle</li><li><strong>pass</strong>: no-op placeholder</li></ul>
<h2>while-else</h2>
<p>Same as for-else: else runs only if the while condition becomes False naturally (not via break).</p>
<div class="callout error"><span class="callout-icon">🚨</span><div class="callout-body"><strong>Common Bug</strong><p>Forgetting to update the loop variable: <code>i = 0; while i &lt; 10: print(i)</code> — infinite loop. Always advance toward termination.</p></div></div>
<div class="interview-tip"><div class="interview-tip-label">🎯 Algorithm interviews</div><p>Binary search and two-pointer algorithms naturally use while loops — the termination depends on two indices converging.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-3-1",
            title: "while, break, continue",
            description: "All loop control statements in practical scenarios.",
            code: `# break — stop early
data = [3, 7, 2, 9, 1, 5]
for item in data:
    if item == 9:
        print(f"Found 9!")
        break
else:
    print("Not found")

# continue — skip evens
print("Odds:", end=" ")
for n in range(10):
    if n % 2 == 0:
        continue
    print(n, end=" ")
print()

# while True + break — event loop pattern
n = 27
steps = 0
while True:
    if n == 1: break
    n = n // 2 if n % 2 == 0 else 3 * n + 1
    steps += 1
print(f"Collatz: {steps} steps to reach 1")`
          },
          {
            id: "ce-3-3-2",
            title: "Binary Search (while loop)",
            description: "Classic O(log n) search — finds any element in a sorted million-item list in ≤20 steps.",
            code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:   return mid
        elif arr[mid] < target:  left = mid + 1
        else:                    right = mid - 1
    return -1

arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
for t in [23, 91, 100]:
    idx = binary_search(arr, t)
    print(f"  {t}: {'index ' + str(idx) if idx != -1 else 'not found'}")`
          }
        ],
        playground: {
          title: "🎮 Loop Control Lab",
          description: "Build a number guessing AI using binary search + while.",
          starterCode: `import random
secret = random.randint(1, 100)
low, high, guess = 1, 100, 50
attempts = []
print(f"Guessing secret ({secret}) using binary search:")
while True:
    attempts.append(guess)
    print(f"  Guess #{len(attempts)}: {guess}", end=" → ")
    if guess == secret:   print("Correct!"); break
    elif guess < secret:  print("Too low");  low = guess + 1
    else:                 print("Too high"); high = guess - 1
    guess = (low + high) // 2
print(f"Found in {len(attempts)} attempts")`
        },
        exercises: [
          {
            id: "exe-3-3-1", title: "GCD — Euclidean Algorithm", difficulty: "medium",
            description: "Implement GCD using a while loop: GCD(a,b) = GCD(b, a%b).",
            starterCode: `def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

for a, b in [(48,18),(100,75),(270,192)]:
    print(f"GCD({a},{b}) = {gcd(a,b)}")`,
            solution: `def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

for a, b in [(48,18),(100,75),(270,192)]:
    print(f"GCD({a},{b}) = {gcd(a,b)}")`,
            solutionExplanation: "The Euclidean algorithm: replace (a,b) with (b, a%b) until b=0. The tuple swap a,b = b, a%b is atomic in Python — no temp variable needed."
          }
        ],
        interviewQuestions: [
          { q: "When should you use while vs for?", a: "Use for when iterating over a known sequence or a fixed number of iterations. Use while when: the number of iterations is unknown (reading until a condition), two indices are converging (binary search, two-pointer), or implementing an event loop (while True: ... break). In practice, for loops are more common in Python." },
          { q: "What is the difference between break and continue?", a: "break exits the entire loop — no more iterations. continue skips the rest of the current iteration and proceeds to the next. Both work in for and while loops. break also prevents the else clause from running; continue does not." }
        ]
      },
      {
        id: "3.4",
        title: "Comprehensions",
        duration: "30 min",
        content: `
<h2>List Comprehensions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">[expression for item in iterable if condition]</pre>
<p>Replaces for+append with one readable line. CPython optimizes list comprehension construction — faster than the loop equivalent.</p>
<h2>Dict & Set Comprehensions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">{k: v for item in iterable}    # dict
{expr for item in iterable}     # set</pre>
<h2>Generator Expressions</h2>
<p>Use <code>()</code> instead of <code>[]</code> for a lazy iterator. Use with sum/max/any/all to avoid building a full list in memory.</p>
<div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><strong>When NOT to Use</strong><p>Never use comprehensions for side effects: <code>[print(x) for x in items]</code> is bad. Avoid more than 2 levels of nesting.</p></div></div>
<div class="interview-tip"><div class="interview-tip-label">🎯 Technical screens — frequent</div><p>Interviewers ask "rewrite this loop as a comprehension" or "what does this comprehension produce?" Both test Pythonic thinking. Comprehensions are faster than for+append due to C-level optimization.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-4-1",
            title: "List, Dict, Set Comprehensions",
            description: "All comprehension forms with practical examples.",
            code: `# List comprehension
squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print("Even squares:", squares)

# String processing
words = ["  hello  ", "WORLD", "  python  "]
clean = [w.strip().lower() for w in words]
print("Cleaned:", clean)

# Dict comprehension
students = ["Alice", "Bob", "Charlie"]
scores   = [92, 78, 85]
grade_book = {s: sc for s, sc in zip(students, scores)}
print("Grades:", grade_book)

# Inverted dict
inv = {v: k for k, v in grade_book.items()}
print("Inverted:", inv)

# Set comprehension (deduplicate)
words2 = ["Hello", "hello", "HELLO", "world", "World"]
unique = {w.lower() for w in words2}
print("Unique:", unique)

# Generator expression (no list built)
total = sum(x**2 for x in range(1, 101))
print("Sum of squares 1-100:", total)`
          }
        ],
        playground: {
          title: "🎮 Comprehension Workshop",
          description: "Data transformation with comprehensions.",
          starterCode: `employees = [
    {"name": "Alice",   "dept": "Eng", "salary": 95000},
    {"name": "Bob",     "dept": "Mkt", "salary": 72000},
    {"name": "Charlie", "dept": "Eng", "salary": 88000},
    {"name": "Dave",    "dept": "HR",  "salary": 65000},
]
# 1. Names of all engineers
engineers = [e["name"] for e in employees if e["dept"] == "Eng"]
print("Engineers:", engineers)

# 2. Salary dict
salaries = {e["name"]: e["salary"] for e in employees}
print("Salaries:", salaries)

# 3. Unique departments
depts = {e["dept"] for e in employees}
print("Departments:", depts)

# 4. Average salary (generator)
avg = sum(e["salary"] for e in employees) / len(employees)
print(f"Avg salary: \${avg:,.0f}")`
        },
        exercises: [
          {
            id: "exe-3-4-1", title: "Comprehension Rewrites", difficulty: "easy",
            description: "Rewrite as one-line comprehensions: (1) cubes of odd numbers 1-20; (2) C→F for [0,20,37,100]; (3) words longer than 4 chars, uppercased.",
            starterCode: `cubes = [n**3 for n in range(1,21) if n % 2 != 0]
print(cubes)

fahr = [(c*9/5)+32 for c in [0,20,37,100]]
print(fahr)

words = ["hi","python","is","amazing","fun","powerful"]
long_up = [w.upper() for w in words if len(w) > 4]
print(long_up)`,
            solution: `cubes = [n**3 for n in range(1,21) if n % 2 != 0]
print(cubes)

fahr = [(c*9/5)+32 for c in [0,20,37,100]]
print(fahr)

words = ["hi","python","is","amazing","fun","powerful"]
long_up = [w.upper() for w in words if len(w) > 4]
print(long_up)`,
            solutionExplanation: "Pattern: [expr for item in iterable if cond]. The if clause filters first; the expression transforms what passes. Reads left-to-right like English: 'for each n in range 1-20, if n is odd, cube it'."
          },
          {
            id: "exe-3-4-2", title: "Group Anagrams", difficulty: "hard",
            description: "Group words by anagram signature: sorted letters joined. ['eat','tea','tan','ate'] → {'aet':['eat','tea','ate'],'ant':['tan']}.",
            starterCode: `def group_anagrams(words):
    groups = {}
    for word in words:
        key = "".join(sorted(word))
        groups.setdefault(key, []).append(word)
    return groups

result = group_anagrams(["eat","tea","tan","ate","nat","bat"])
for key, group in result.items():
    print(f"{key}: {group}")`,
            solution: `def group_anagrams(words):
    groups = {}
    for word in words:
        key = "".join(sorted(word))
        groups.setdefault(key, []).append(word)
    return groups

result = group_anagrams(["eat","tea","tan","ate","nat","bat"])
for key, group in result.items():
    print(f"{key}: {group}")`,
            solutionExplanation: "sorted(word) gives a sorted list of characters; ''.join() makes it a string key. setdefault(key, []) gets or creates the list. This is a classic LeetCode problem (Group Anagrams #49)."
          }
        ],
        interviewQuestions: [
          { q: "What is a list comprehension and why is it faster than a for loop?", a: "A list comprehension [expr for x in it if cond] creates a list in one expression. It's faster because CPython optimizes list building at the C level — the list allocation is done once and appending is done directly, bypassing Python-level attribute lookups. Use loops for side effects, comprehensions for data transformation." },
          { q: "What is the difference between a list comprehension and a generator expression?", a: "List comprehension [x for x in ...] creates the entire list immediately — O(n) space. Generator expression (x for x in ...) is lazy — O(1) space, computes values on demand. Use generators with sum(), max(), any(), all() — they process one item at a time and never build a full list." },
          { q: "How do you write a dict comprehension?", a: "{key_expr: val_expr for item in iterable if cond}. Common uses: invert dict ({v:k for k,v in d.items()}), build lookup table ({x['id']:x for x in records}), filter dict ({k:v for k,v in d.items() if v>0})." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // MODULE 4 — Functions
  // ══════════════════════════════════════════════════════════════
  {
    id: 4,
    title: "Functions",
    icon: "⚙️",
    color: "#ff5757",
    difficulty: "intermediate",
    duration: "4–5 hours",
    description: "Functions are the building blocks of every Python program. Master parameters, scope, closures, and functional programming patterns.",
    objectives: [
      "Define functions with proper docstrings and return values",
      "Use all parameter types: positional, keyword, *args, **kwargs",
      "Avoid the mutable default argument trap",
      "Understand Python's LEGB scope rule and use global/nonlocal",
      "Write closures and understand when they form",
      "Use lambda, map, filter, and sorted() effectively"
    ],
    lessons: [
      {
        id: "4.1",
        title: "Defining & Using Functions",
        duration: "25 min",
        content: `
<h2>Defining Functions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">def function_name(param1, param2):
    """Docstring explaining the function."""
    return result</pre>
<p>Functions return <code>None</code> by default. Python functions are first-class objects — pass them to other functions, store in lists, assign to variables.</p>
<h2>Multiple Return Values</h2>
<p>Python "returns multiple values" by returning a tuple that is auto-unpacked: <code>min_val, max_val = min_max(data)</code>.</p>
<h2>Docstrings</h2>
<p>First statement in a function body — accessible via <code>func.__doc__</code> and <code>help(func)</code>. Required in professional code.</p>
<div class="interview-tip"><div class="interview-tip-label">🎯 Code quality discussions</div><p>Always write docstrings. Returning tuples and unpacking them is idiomatic Python. Functions as first-class objects is the foundation of decorators.</p></div>`,
        codeExamples: [
          {
            id: "ce-4-1-1",
            title: "Function Basics & Multiple Returns",
            description: "Core function patterns every Python engineer uses daily.",
            code: `def stats(numbers):
    """Return (min, max, mean) of a list."""
    if not numbers:
        return None, None, None
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

data = [4, 7, 2, 9, 1, 5, 8]
lo, hi, avg = stats(data)
print(f"Min: {lo}, Max: {hi}, Avg: {avg:.2f}")

# Functions as first-class objects
def double(x): return x * 2
def square(x): return x ** 2

transforms = [double, square]
for func in transforms:
    print(f"{func.__name__}(5) = {func(5)}")`
          }
        ],
        playground: {
          title: "🎮 Function Design Lab",
          description: "Build a mini statistics library.",
          starterCode: `def describe(data):
    """Return stats dict for a numeric list."""
    if not data: return None
    n = len(data)
    mean = sum(data) / n
    s = sorted(data)
    median = s[n//2] if n%2 else (s[n//2-1]+s[n//2])/2
    return {"n": n, "min": min(data), "max": max(data),
            "mean": round(mean,2), "median": median}

scores = [78, 92, 85, 67, 91, 88, 74, 95, 63, 82]
d = describe(scores)
for k, v in d.items():
    print(f"  {k}: {v}")`
        },
        exercises: [
          {
            id: "exe-4-1-1", title: "Dispatch Calculator", difficulty: "easy",
            description: "Write add, subtract, multiply, divide functions. Then calculate(a, op, b) dispatches using a dict.",
            starterCode: `def add(a,b): return a+b
def subtract(a,b): return a-b
def multiply(a,b): return a*b
def divide(a,b): return a/b if b else None

def calculate(a, op, b):
    ops = {"+":add, "-":subtract, "*":multiply, "/":divide}
    return ops.get(op, lambda a,b: f"Unknown: {op}")(a,b)

for a,op,b in [(10,"+",5),(10,"-",3),(4,"*",7),(15,"/",3),(5,"/",0)]:
    print(f"{a} {op} {b} = {calculate(a,op,b)}")`,
            solution: `def add(a,b): return a+b
def subtract(a,b): return a-b
def multiply(a,b): return a*b
def divide(a,b): return a/b if b else None

def calculate(a, op, b):
    ops = {"+":add, "-":subtract, "*":multiply, "/":divide}
    return ops.get(op, lambda a,b: f"Unknown: {op}")(a,b)

for a,op,b in [(10,"+",5),(10,"-",3),(4,"*",7),(15,"/",3),(5,"/",0)]:
    print(f"{a} {op} {b} = {calculate(a,op,b)}")`,
            solutionExplanation: "Storing functions in a dict is the Pythonic dispatch pattern — cleaner than if/elif chains. Functions are first-class objects and are perfectly valid as dict values."
          }
        ],
        interviewQuestions: [
          { q: "What are first-class functions?", a: "In Python, functions are objects. They can be assigned to variables, passed as arguments, returned from functions, and stored in data structures. This enables decorators, callbacks, and functional programming. Every function has __name__, __doc__, and __code__ attributes." },
          { q: "What does a function return without a return statement?", a: "It returns None implicitly. A bare 'return' also returns None. This causes bugs when callers expect a value. Always be explicit: either return a value or document that the function is used for side effects only." }
        ]
      },
      {
        id: "4.2",
        title: "Parameters & Arguments Deep Dive",
        duration: "35 min",
        content: `
<h2>Five Parameter Types</h2>
<ol><li>Positional — matched by position</li><li>Keyword — passed by name</li><li>Default — fallback value</li><li>*args — extra positionals → tuple</li><li>**kwargs — extra keywords → dict</li></ol>
<h2>The Mutable Default Argument Trap 🚨</h2>
<p>Default values are evaluated <strong>once at function definition time</strong>, not on each call. A mutable default (list, dict) is shared across all calls.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">def bad(items=[]):   # WRONG — shared list!
    items.append(1); return items

def good(items=None):   # CORRECT
    if items is None: items = []
    items.append(1); return items</pre>
<h2>Keyword-Only Arguments</h2>
<p>Parameters after <code>*</code> must be passed by name — prevents accidental positional misuse.</p>
<div class="callout error"><span class="callout-icon">🚨</span><div class="callout-body"><strong>Asked in Almost Every Python Interview</strong><p>Know the mutable default trap, explain it clearly, and demonstrate the None-based fix.</p></div></div>`,
        codeExamples: [
          {
            id: "ce-4-2-1",
            title: "Mutable Default Trap & Fix",
            description: "The most famous Python gotcha — understand it deeply.",
            code: `# WRONG: shared mutable default
def add_bad(item, cart=[]):
    cart.append(item)
    return cart

print(add_bad("apple"))   # ['apple']
print(add_bad("banana"))  # ['apple','banana'] — same list!

# CORRECT: None default, fresh list inside
def add_good(item, cart=None):
    if cart is None:
        cart = []
    cart.append(item)
    return cart

print(add_good("apple"))   # ['apple']
print(add_good("banana"))  # ['banana'] — independent`
          },
          {
            id: "ce-4-2-2",
            title: "*args and **kwargs",
            description: "Variable arguments — fundamental for flexible APIs and decorators.",
            code: `def log(message, *tags, level="INFO", **metadata):
    tag_str = " ".join(f"[{t}]" for t in tags)
    meta_str = " ".join(f"{k}={v}" for k,v in metadata.items())
    print(f"[{level}] {tag_str} {message} {meta_str}".strip())

log("Server started")
log("Login", "auth", level="INFO", user="alice", ip="127.0.0.1")
log("Disk full", "storage", level="WARNING")

# Unpacking with * and **
def add(a, b, c): return a+b+c
nums = [1, 2, 3]
print(add(*nums))                      # unpack list as positional
print(add(**{"a":1,"b":2,"c":3}))     # unpack dict as keywords`
          }
        ],
        playground: {
          title: "🎮 Parameters Lab",
          description: "Experiment with all five parameter types.",
          starterCode: `def generate_report(title, *items, sep="-", width=40, **meta):
    print(sep * width)
    print(title.center(width))
    print(sep * width)
    for i, item in enumerate(items, 1):
        print(f"  {i}. {item}")
    if meta:
        print(sep * width)
        for k, v in meta.items():
            print(f"  {k.replace('_',' ').title()}: {v}")
    print(sep * width)

generate_report(
    "Sales Report",
    "North: ₹4.5L", "South: ₹6.2L", "East: ₹3.8L",
    sep="=", width=45,
    generated_by="Analytics Team", date="2024-01"
)`
        },
        exercises: [
          {
            id: "exe-4-2-1", title: "Fix Mutable Defaults", difficulty: "medium",
            description: "Fix all three functions that have the mutable default bug.",
            starterCode: `def append_to(el, to=None):
    if to is None: to = []
    to.append(el); return to

def add_student(name, grade, students=None):
    if students is None: students = {}
    students[name] = grade; return students

def process(items, results=None):
    if results is None: results = []
    results.extend(x.upper() for x in items); return results

print(append_to("a"))
print(append_to("b"))
print(add_student("Alice","A"))
print(add_student("Bob","B"))`,
            solution: `def append_to(el, to=None):
    if to is None: to = []
    to.append(el); return to

def add_student(name, grade, students=None):
    if students is None: students = {}
    students[name] = grade; return students

def process(items, results=None):
    if results is None: results = []
    results.extend(x.upper() for x in items); return results

print(append_to("a"))
print(append_to("b"))
print(add_student("Alice","A"))
print(add_student("Bob","B"))`,
            solutionExplanation: "Always use None as the default for mutable parameters. Check 'if param is None: param = mutable_type()' at the start of the function body. This creates a fresh mutable on each call while still allowing callers to pass an existing container."
          }
        ],
        interviewQuestions: [
          { q: "Explain the mutable default argument trap.", a: "Default values are evaluated once when the function is defined, stored on the function object. A mutable default (list, dict) is shared across all calls. def f(lst=[]): lst.append(1); return lst — consecutive calls return [1], [1,1], [1,1,1]. Fix: use None as default, create the mutable inside the function body." },
          { q: "What is the difference between *args and **kwargs?", a: "*args captures extra positional arguments into a tuple. **kwargs captures extra keyword arguments into a dict. Order in signature: (positional, *args, keyword-only, **kwargs). At call site, *list unpacks as positional; **dict unpacks as keywords." },
          { q: "What are keyword-only arguments?", a: "Parameters after * (or *args) must be passed by name. Example: def process(data, *, verbose=False) — verbose can only be called as process(d, verbose=True), never as process(d, True). Prevents accidental positional misuse. Used heavily in Python stdlib (sorted, open, etc.)." }
        ]
      },
      {
        id: "4.3",
        title: "Scope & The LEGB Rule",
        duration: "25 min",
        content: `
<h2>LEGB — The Four Scopes</h2>
<p>Python resolves names by searching four scopes in order:</p>
<ul><li><strong>L</strong>: Local — current function</li><li><strong>E</strong>: Enclosing — outer functions (for nested functions)</li><li><strong>G</strong>: Global — module level</li><li><strong>B</strong>: Built-in — print, len, range, etc.</li></ul>
<h2>global and nonlocal</h2>
<p><code>global x</code>: tells Python to use the module-level x, not create a local one. <code>nonlocal x</code>: use a variable from the enclosing (not global) scope — key for closures with state.</p>
<div class="callout error"><span class="callout-icon">🚨</span><div class="callout-body"><strong>UnboundLocalError</strong><p>If Python sees an assignment to a name anywhere in a function, that name is treated as local throughout the entire function — even before the assignment. Causes UnboundLocalError if used before the assignment line.</p></div></div>`,
        codeExamples: [
          {
            id: "ce-4-3-1",
            title: "LEGB in Action",
            description: "Watch Python resolve names through Local → Enclosing → Global → Built-in.",
            code: `x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(f"inner: {x}")   # local
    inner()
    print(f"outer: {x}")       # enclosing

outer()
print(f"module: {x}")          # global

# global keyword
count = 0
def increment():
    global count
    count += 1

increment(); increment()
print(f"count: {count}")       # 2

# nonlocal keyword
def make_counter():
    n = 0
    def inc():
        nonlocal n
        n += 1
        return n
    return inc

c = make_counter()
print(c(), c(), c())           # 1 2 3`
          }
        ],
        playground: {
          title: "🎮 Scope Explorer",
          description: "Test LEGB resolution and the UnboundLocalError trap.",
          starterCode: `x = "global"
def level1():
    x = "enclosing"
    def level2():
        print(f"level2 sees: {x}")    # enclosing
    level2()
    print(f"level1 sees: {x}")        # enclosing

level1()
print(f"module sees: {x}")            # global

# UnboundLocalError demo
y = 10
def broken():
    try:
        print(y)   # UnboundLocalError: y is 'local' due to assignment below
        y = 20
    except UnboundLocalError as e:
        print(f"Error: {e}")
broken()`
        },
        exercises: [
          {
            id: "exe-4-3-1", title: "Scope Prediction", difficulty: "medium",
            description: "Predict the output of each print before running. Understand why UnboundLocalError occurs.",
            starterCode: `x = 1
def f():
    x = 2
    def g():
        x = 3
        print(f"g: {x}")
    g()
    print(f"f: {x}")
f()
print(f"module: {x}")

y = 10
def h():
    print(y)   # what happens here?
    y = 20
try: h()
except UnboundLocalError as e: print(f"Error: {type(e).__name__}")`,
            solution: `x = 1
def f():
    x = 2
    def g():
        x = 3
        print(f"g: {x}")
    g()
    print(f"f: {x}")
f()
print(f"module: {x}")

y = 10
def h():
    print(y)
    y = 20
try: h()
except UnboundLocalError as e: print(f"Error: {type(e).__name__}")`,
            solutionExplanation: "First block: g sees 3 (local), f sees 2 (local), module sees 1 (global unchanged). Second block: h() raises UnboundLocalError because Python sees y=20 and treats y as local throughout h — the print(y) before the assignment references an unbound local."
          }
        ],
        interviewQuestions: [
          { q: "Explain Python's LEGB scope rule.", a: "LEGB: Local (current function), Enclosing (outer functions), Global (module level), Built-in (builtins module). Python searches in this order. If the name isn't found anywhere, NameError is raised. Assignment inside a function always creates a local variable unless declared with global or nonlocal." },
          { q: "What is UnboundLocalError?", a: "Occurs when a variable is referenced before assignment in a function where Python knows (from seeing an assignment later in the function) that it should be local. Fix: use global/nonlocal if you mean the outer variable, or rename the local variable." }
        ]
      },
      {
        id: "4.4",
        title: "Closures — Functions That Remember",
        duration: "25 min",
        content: `
<h2>What Is a Closure?</h2>
<p>A <strong>closure</strong> is a nested function that captures variables from its enclosing scope and retains access to them even after the outer function has returned. Three requirements: (1) nested function, (2) references enclosing variable, (3) outer function returns the inner.</p>
<h2>Why Closures Matter</h2>
<p>Closures power: decorators, factory functions, stateful callbacks, partial application. Understanding closures is a prerequisite for understanding decorators.</p>
<h2>Late-Binding Gotcha in Loops</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">funcs = [lambda: i for i in range(3)]
funcs[0]()  # 2, not 0! All close over the same 'i'
# Fix: lambda i=i: i  (capture value as default)</pre>
<div class="interview-tip"><div class="interview-tip-label">🎯 Advanced Python interviews</div><p>"What is a closure?" → "How do decorators work?" These two are deeply connected. Master closures first.</p></div>`,
        codeExamples: [
          {
            id: "ce-4-4-1",
            title: "Closures & the Late-Binding Bug",
            description: "Closures capture variables by reference — not by value. This causes the loop bug.",
            code: `def make_multiplier(n):
    def multiply(x):
        return x * n    # n from enclosing scope
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5), triple(5))   # 10  15
print(double.__closure__[0].cell_contents)  # 2

# Late-binding bug in loops
bad = [lambda: i for i in range(5)]
print([f() for f in bad])   # [4,4,4,4,4] — all see final i

# Fix 1: default argument captures value
good = [lambda i=i: i for i in range(5)]
print([f() for f in good])  # [0,1,2,3,4]`
          }
        ],
        playground: {
          title: "🎮 Closure Factory",
          description: "Build validators using factory functions (closures).",
          starterCode: `def make_range_validator(lo, hi):
    def validate(v):
        ok = lo <= v <= hi
        return ok, f"{v} {'OK' if ok else f'out of [{lo},{hi}]'}"
    return validate

validate_age   = make_range_validator(0, 150)
validate_score = make_range_validator(0, 100)

for fn, val in [(validate_age, 25),(validate_age,-1),(validate_score,95),(validate_score,110)]:
    ok, msg = fn(val)
    print(f"  {'✓' if ok else '✗'} {msg}")`
        },
        exercises: [
          {
            id: "exe-4-4-1", title: "Memoize Decorator", difficulty: "hard",
            description: "Implement memoize(func) using a closure. Cache results in a dict keyed by *args.",
            starterCode: `def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    wrapper.cache = cache
    return wrapper

@memoize
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

print([fib(i) for i in range(10)])
print(f"Cache entries: {len(fib.cache)}")`,
            solution: `def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    wrapper.cache = cache
    return wrapper

@memoize
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

print([fib(i) for i in range(10)])
print(f"Cache entries: {len(fib.cache)}")`,
            solutionExplanation: "The cache dict is captured by the closure. *args as dict key works because tuples are hashable. Exposing cache as wrapper.cache enables inspection. This converts O(2^n) Fibonacci to O(n). functools.lru_cache is the production version."
          }
        ],
        interviewQuestions: [
          { q: "What is a closure in Python?", a: "A closure is a nested function that captures variables from its enclosing function's scope, retaining access even after the outer function returns. Three requirements: nested function, references enclosing variable, outer returns inner. Inspect with func.__closure__. Powers decorators, factories, and stateful callbacks." },
          { q: "Explain the late-binding closure bug.", a: "Closures capture variables by reference, not value. In a loop, all closures share the same loop variable — when called, they all see its final value. Fix: capture current value as a default argument (lambda i=i: i) or use a factory function (def make(n): return lambda: n)." }
        ]
      },
      {
        id: "4.5",
        title: "Lambda & Functional Basics",
        duration: "25 min",
        content: `
<h2>Lambda Functions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">lambda params: expression</pre>
<p>Use only as inline throwaway functions — never assign to variables (PEP 8). Lambdas shine as the <code>key=</code> argument for sorted().</p>
<h2>sorted() with key=</h2>
<p>The key function is called once per element — not on every comparison. This makes complex sort keys efficient. Tuple keys enable multi-column sorting.</p>
<h2>map() and filter()</h2>
<p>Both return lazy iterators in Python 3. List comprehensions are usually clearer, but map with a built-in function (no lambda) is often more efficient: <code>map(str.strip, items)</code>.</p>
<h2>functools.partial</h2>
<p>Pre-fill arguments to create specialized functions. Useful for adapting function signatures.</p>
<div class="interview-tip"><div class="interview-tip-label">🎯 Practical Python knowledge</div><p>sorted() is stable. key= is called once per element (Schwartzian transform). map/filter return iterators in Python 3 — wrap in list() to materialize.</p></div>`,
        codeExamples: [
          {
            id: "ce-4-5-1",
            title: "sorted() with Complex Keys",
            description: "Multi-column sorts using tuple keys — essential for data processing.",
            code: `students = [
    {"name": "Charlie", "gpa": 3.7, "age": 22},
    {"name": "Alice",   "gpa": 3.9, "age": 21},
    {"name": "Bob",     "gpa": 3.7, "age": 23},
]

by_gpa = sorted(students, key=lambda s: s["gpa"], reverse=True)
print("By GPA desc:", [s["name"] for s in by_gpa])

# Multi-key: GPA desc, then name asc
by_gpa_name = sorted(students, key=lambda s: (-s["gpa"], s["name"]))
print("By GPA↓ name↑:", [(s["name"],s["gpa"]) for s in by_gpa_name])

# No lambda needed for built-in key
words = ["banana","Apple","cherry","DATE"]
print("Case-insensitive:", sorted(words, key=str.lower))`
          },
          {
            id: "ce-4-5-2",
            title: "map, filter, functools.partial",
            description: "Functional tools — understand map/filter and the partial pattern.",
            code: `from functools import partial, reduce

nums = [1, 4, 9, 16, 25]
print("Roots:", list(map(lambda x: x**0.5, nums)))

strs = ["  hello  ", " world "]
print("Stripped:", list(map(str.strip, strs)))  # no lambda!

data = [0, 1, -2, 3, -4, 5]
print("Positives:", list(filter(lambda x: x > 0, data)))

product = reduce(lambda acc, x: acc*x, [1,2,3,4,5])
print(f"Product: {product}")   # 120

def power(base, exp): return base ** exp
square = partial(power, exp=2)
cube   = partial(power, exp=3)
print(f"square(5)={square(5)}, cube(3)={cube(3)}")`
          }
        ],
        playground: {
          title: "🎮 Functional Pipeline Lab",
          description: "Build a data processing pipeline using functional tools.",
          starterCode: `products = [
    {"name":"Laptop", "price":75000,"cat":"Electronics","rating":4.5},
    {"name":"Phone",  "price":45000,"cat":"Electronics","rating":4.2},
    {"name":"Pad",    "price":150,  "cat":"Stationery", "rating":4.8},
    {"name":"Tablet", "price":35000,"cat":"Electronics","rating":4.7},
]

electronics = sorted(
    filter(lambda p: p["cat"]=="Electronics", products),
    key=lambda p: p["rating"], reverse=True
)
print("Electronics by rating:")
for p in electronics:
    print(f"  {p['name']:<10} ₹{p['price']:>7,}  ⭐{p['rating']}")`
        },
        exercises: [
          {
            id: "exe-4-5-1", title: "Multi-Column Sort", difficulty: "medium",
            description: "Sort employees: dept asc, salary desc, name asc — in ONE sorted() call.",
            starterCode: `employees = [
    {"name":"Alice",  "dept":"Eng","salary":95000},
    {"name":"Bob",    "dept":"Mkt","salary":72000},
    {"name":"Charlie","dept":"Eng","salary":88000},
    {"name":"Dave",   "dept":"Mkt","salary":72000},
    {"name":"Eve",    "dept":"Eng","salary":95000},
]
sorted_emps = sorted(employees, key=lambda e: (e["dept"], -e["salary"], e["name"]))
for e in sorted_emps:
    print(f"  {e['dept']:<5} {e['name']:<10} ₹{e['salary']:,}")`,
            solution: `employees = [
    {"name":"Alice",  "dept":"Eng","salary":95000},
    {"name":"Bob",    "dept":"Mkt","salary":72000},
    {"name":"Charlie","dept":"Eng","salary":88000},
    {"name":"Dave",   "dept":"Mkt","salary":72000},
    {"name":"Eve",    "dept":"Eng","salary":95000},
]
sorted_emps = sorted(employees, key=lambda e: (e["dept"], -e["salary"], e["name"]))
for e in sorted_emps:
    print(f"  {e['dept']:<5} {e['name']:<10} ₹{e['salary']:,}")`,
            solutionExplanation: "Tuple comparison is lexicographic. Negating salary reverses sort order for that field while other fields stay ascending. This one-key-tuple approach is the canonical Python multi-column sort."
          }
        ],
        interviewQuestions: [
          { q: "When should you use lambda vs def?", a: "Lambda: only as an inline throwaway passed immediately to another function (sorted key, map, filter). Never assign lambda to a variable — use def instead (better tracebacks, docstrings, reuse). PEP 8: 'the use of lambda is... never necessary'." },
          { q: "List comprehensions vs map/filter?", a: "Comprehensions are usually preferred: more readable, no lambda needed, slightly faster for complex cases. map/filter preferred when: using a built-in function (map(str.strip, items) — no lambda), composing functional pipelines, or working with infinite iterators. Both return lazy iterators in Python 3 (map/filter) or immediate lists (comprehensions)." },
          { q: "What does functools.partial do?", a: "partial(func, *args, **kwargs) returns a new callable with some arguments pre-filled. Useful for: adapting function signatures to callbacks, creating specialized versions of general functions, reducing repetition. Alternative: lambda — partial is cleaner when pre-filling many arguments." }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // MODULES 5–17  (Detailed Outlines)
  // ══════════════════════════════════════════════════════════════

  {
    id: 5, title: "Data Structures", icon: "📚", color: "#00d4ff",
    difficulty: "intermediate", duration: "4–5 hours",
    description: "Deep-dive into Python's built-in data structures — lists, tuples, dicts, and sets — with time complexity, use cases, and interview patterns.",
    lessons: [
      // ── 5.1 Lists ─────────────────────────────────────────────────────────
      {
        id: "lesson-5-1", title: "Lists — Python's Workhorse", duration: "40 min",
        content: `
<h2>Lists in Depth</h2>
<p>A <strong>list</strong> is Python's most versatile built-in data structure — an ordered, mutable sequence that can hold any mix of types.</p>

<h3>Creating Lists</h3>
<pre><code>nums   = [1, 2, 3, 4, 5]
mixed  = [42, "hello", True, 3.14, [1, 2]]
empty  = []
repeat = [0] * 5    # [0, 0, 0, 0, 0]
built  = list(range(1, 6))  # [1, 2, 3, 4, 5]</code></pre>

<h3>Indexing & Slicing</h3>
<p>Python uses zero-based indexing and supports negative indices (counting from the end).</p>
<pre><code>a = [10, 20, 30, 40, 50]
a[0]    # 10  — first element
a[-1]   # 50  — last element
a[1:3]  # [20, 30]  — slice [start:stop)
a[::2]  # [10, 30, 50]  — every other
a[::-1] # [50, 40, 30, 20, 10]  — reversed</code></pre>

<h3>Essential List Methods</h3>
<table style="width:100%;border-collapse:collapse;font-size:.87rem;">
<tr style="background:var(--bg-surface)"><th style="padding:.4rem .6rem;text-align:left">Method</th><th style="padding:.4rem .6rem;text-align:left">Effect</th><th style="padding:.4rem .6rem;text-align:left">Complexity</th></tr>
<tr><td style="padding:.35rem .6rem"><code>append(x)</code></td><td style="padding:.35rem .6rem">Add x to end</td><td style="padding:.35rem .6rem">O(1) amortised</td></tr>
<tr style="background:var(--bg-surface)"><td style="padding:.35rem .6rem"><code>insert(i, x)</code></td><td style="padding:.35rem .6rem">Insert x at index i</td><td style="padding:.35rem .6rem">O(n)</td></tr>
<tr><td style="padding:.35rem .6rem"><code>pop()</code></td><td style="padding:.35rem .6rem">Remove and return last</td><td style="padding:.35rem .6rem">O(1)</td></tr>
<tr style="background:var(--bg-surface)"><td style="padding:.35rem .6rem"><code>pop(i)</code></td><td style="padding:.35rem .6rem">Remove at index i</td><td style="padding:.35rem .6rem">O(n)</td></tr>
<tr><td style="padding:.35rem .6rem"><code>remove(x)</code></td><td style="padding:.35rem .6rem">Remove first x</td><td style="padding:.35rem .6rem">O(n)</td></tr>
<tr style="background:var(--bg-surface)"><td style="padding:.35rem .6rem"><code>sort()</code></td><td style="padding:.35rem .6rem">Sort in-place (Timsort)</td><td style="padding:.35rem .6rem">O(n log n)</td></tr>
<tr><td style="padding:.35rem .6rem"><code>reverse()</code></td><td style="padding:.35rem .6rem">Reverse in-place</td><td style="padding:.35rem .6rem">O(n)</td></tr>
<tr style="background:var(--bg-surface)"><td style="padding:.35rem .6rem"><code>index(x)</code></td><td style="padding:.35rem .6rem">Find first index of x</td><td style="padding:.35rem .6rem">O(n)</td></tr>
</table>

<h3>List as a Stack</h3>
<p>A stack (LIFO) is perfectly modelled by a list using <code>append</code> and <code>pop</code>:</p>
<pre><code>stack = []
stack.append("a")
stack.append("b")
stack.append("c")
print(stack.pop())  # "c"
print(stack.pop())  # "b"</code></pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Don't use a list as a queue!</strong><p><code>list.pop(0)</code> is O(n) because every element shifts. Use <code>collections.deque</code> for queues — it has O(1) <code>popleft()</code>.</p></div>
</div>

<h3>Sorting Deep Dive</h3>
<p>Python's sort is <strong>stable</strong> (preserves original order for equal elements) and uses the <strong>Timsort</strong> algorithm.</p>
<pre><code>words = ["banana", "Apple", "cherry", "apricot"]
words.sort()                        # case-sensitive (uppercase first)
words.sort(key=str.lower)           # case-insensitive
words.sort(key=len)                 # by length
words.sort(key=len, reverse=True)   # longest first

# sorted() returns a new list; .sort() is in-place
nums = [3, 1, 4, 1, 5]
new = sorted(nums)   # nums unchanged
nums.sort()          # nums changed</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Interview tip</strong><p>Always prefer <code>key=</code> parameter over complex comparators. Avoid <code>cmp_to_key</code> unless absolutely necessary.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-1-1", title: "List Operations & Complexity Demo",
            description: "See how list operations work and time them.",
            code: `import time

# Stack usage (correct)
stack = []
for i in range(5):
    stack.append(i)
print("Stack:", stack)
print("Pop:", stack.pop())
print("Stack after pop:", stack)

# Sorting with key functions
students = [("Alice", 3.9), ("Bob", 3.5), ("Carol", 3.7)]
by_gpa = sorted(students, key=lambda s: s[1], reverse=True)
print("\\nBy GPA (desc):", by_gpa)

# Sort stability demo
data = [(1, "b"), (2, "a"), (1, "a")]
data.sort(key=lambda x: x[0])  # stable: keeps relative order of equal keys
print("Stable sort:", data)

# List comprehension vs map
squares_lc  = [x**2 for x in range(10)]
squares_map = list(map(lambda x: x**2, range(10)))
print("\\nBoth equal:", squares_lc == squares_map)`
          },
          {
            id: "ce-5-1-2", title: "List vs deque for Queue Operations",
            description: "Demonstrates why list.pop(0) is slow for queue use.",
            code: `from collections import deque
import time

N = 50000

# list as queue — O(n) per pop(0)
lst = list(range(N))
t0 = time.perf_counter()
while lst:
    lst.pop(0)
list_time = time.perf_counter() - t0

# deque as queue — O(1) per popleft()
dq = deque(range(N))
t0 = time.perf_counter()
while dq:
    dq.popleft()
deque_time = time.perf_counter() - t0

print(f"list.pop(0) × {N}: {list_time:.3f}s")
print(f"deque.popleft() × {N}: {deque_time:.3f}s")
print(f"deque is ~{list_time/deque_time:.0f}x faster")`
          }
        ],
        playground: {
          title: "List Playground",
          description: "Practice list operations. Try implementing a stack-based bracket checker!",
          starterCode: `# Bracket checker using a list as stack
def is_balanced(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        elif ch in ')]}':
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
    return len(stack) == 0

tests = ["([]{})", "([)]", "((())", ""]
for t in tests:
    print(f"{t!r:12} -> {is_balanced(t)}")`
        },
        exercises: [
          {
            id: "exe-5-1-1", title: "Two Sum", difficulty: "easy",
            description: "Given a list of integers and a target, return True if any two numbers sum to the target (each element used once).",
            starterCode: `def two_sum(nums, target):
    # Hint: use a set to track what you've seen
    pass

print(two_sum([2, 7, 11, 15], 9))   # True
print(two_sum([1, 3, 5], 8))        # False
print(two_sum([3, 3], 6))           # True`,
            solution: `def two_sum(nums, target):
    seen = set()
    for n in nums:
        if target - n in seen:
            return True
        seen.add(n)
    return False`,
            solutionExplanation: "We use a set to track numbers seen so far. For each number n, we check if target-n is already in the set (O(1) lookup). This gives O(n) time vs O(n²) for a nested loop approach."
          },
          {
            id: "exe-5-1-2", title: "Move Zeros", difficulty: "easy",
            description: "Move all zeros in a list to the end while maintaining the relative order of non-zero elements. Do it in-place.",
            starterCode: `def move_zeros(nums):
    # Modify nums in-place
    pass

a = [0, 1, 0, 3, 12]
move_zeros(a)
print(a)  # [1, 3, 12, 0, 0]

b = [0, 0, 1]
move_zeros(b)
print(b)  # [1, 0, 0]`,
            solution: `def move_zeros(nums):
    pos = 0  # next position for non-zero
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[pos], nums[i] = nums[i], nums[pos]
            pos += 1`,
            solutionExplanation: "Two-pointer technique: 'pos' tracks where the next non-zero should go. When we find a non-zero, we swap it to position 'pos' and advance both pointers. Zeros naturally bubble to the end."
          },
          {
            id: "exe-5-1-3", title: "Sliding Window Maximum", difficulty: "medium",
            description: "Given a list and window size k, return the maximum of each sliding window.",
            starterCode: `from collections import deque

def sliding_max(nums, k):
    # Use a monotonic deque for O(n) solution
    pass

print(sliding_max([1,3,-1,-3,5,3,6,7], 3))
# Expected: [3, 3, 5, 5, 6, 7]`,
            solution: `from collections import deque

def sliding_max(nums, k):
    result, dq = [], deque()
    for i, n in enumerate(nums):
        # Remove elements outside window
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        # Maintain decreasing monotone deque
        while dq and nums[dq[-1]] < n:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result`,
            solutionExplanation: "A monotonic deque keeps indices in decreasing order of their values. The front is always the index of the current window's max. We evict stale indices from the front and smaller values from the back. O(n) time."
          }
        ],
        interviewQuestions: [
          { q: "What is the time complexity of list.insert(0, x) and why?", a: "O(n) — inserting at the front requires shifting every existing element one position to the right. Python lists are backed by dynamic arrays, so random insertion is expensive. For O(1) front insertion, use collections.deque." },
          { q: "What's the difference between list.sort() and sorted()?", a: "list.sort() mutates the list in-place and returns None. sorted() leaves the original untouched and returns a new sorted list. Both use Timsort (O(n log n)) and accept key= and reverse= arguments. Prefer sorted() when you need to keep the original." },
          { q: "How does Python's list grow dynamically?", a: "Lists over-allocate memory using a growth factor of roughly 1.125x (plus 4). When you append and hit capacity, Python allocates a new, larger array and copies all elements. This makes append O(1) amortised even though individual resizes are O(n)." },
          { q: "When would you NOT use a list?", a: "Use a set for O(1) membership testing. Use collections.deque for O(1) front insertions/deletions. Use a heap (heapq) for priority queue. Use numpy arrays for numeric computation. Use a dict for key-value mapping." }
        ]
      },

      // ── 5.2 Tuples & Named Tuples ─────────────────────────────────────────
      {
        id: "lesson-5-2", title: "Tuples, Named Tuples & Unpacking", duration: "25 min",
        content: `
<h2>Tuples — Immutable Sequences</h2>
<p>A <strong>tuple</strong> is an immutable, ordered sequence. Once created, it cannot be changed. This makes it:</p>
<ul>
  <li><strong>Hashable</strong> — can be used as dict keys or in sets</li>
  <li><strong>Thread-safe</strong> — no synchronisation needed</li>
  <li><strong>Semantically clear</strong> — signals "this should not change"</li>
</ul>

<h3>Creating Tuples</h3>
<pre><code>point  = (3, 4)
triple = (1, 2, 3)
single = (42,)      # trailing comma required — (42) is just 42
empty  = ()
packed = 1, 2, 3    # parentheses optional (tuple packing)</code></pre>

<h3>Unpacking</h3>
<p>Python's tuple (and iterable) unpacking is one of its most elegant features:</p>
<pre><code>x, y = (3, 4)            # basic unpacking
a, b, *rest = [1,2,3,4,5]  # *rest captures the tail → [3,4,5]
*head, last = [1,2,3,4,5]  # head=[1,2,3,4], last=5

# Swap without temp variable (idiomatic Python!)
a, b = b, a

# In loops
pairs = [(1, 'one'), (2, 'two'), (3, 'three')]
for num, word in pairs:
    print(f"{num} = {word}")</code></pre>

<h3>Named Tuples</h3>
<p><code>collections.namedtuple</code> lets you access fields by name <em>and</em> index — great for records without the overhead of a full class:</p>
<pre><code>from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)    # 3 4
print(p[0], p[1])  # 3 4  (still indexable)
print(p)           # Point(x=3, y=4)</code></pre>

<h3>Tuple vs List — When to Use Which</h3>
<table style="width:100%;border-collapse:collapse;font-size:.87rem;">
<tr style="background:var(--bg-surface)"><th style="padding:.4rem .6rem;text-align:left">Use Tuple</th><th style="padding:.4rem .6rem;text-align:left">Use List</th></tr>
<tr><td style="padding:.35rem .6rem">Fixed number of heterogeneous items (a row of DB results)</td><td style="padding:.35rem .6rem">Variable number of homogeneous items</td></tr>
<tr style="background:var(--bg-surface)"><td style="padding:.35rem .6rem">Dict key or set element</td><td style="padding:.35rem .6rem">Needs append/remove/sort</td></tr>
<tr><td style="padding:.35rem .6rem">Return multiple values from a function</td><td style="padding:.35rem .6rem">Building a collection incrementally</td></tr>
</table>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Interview tip</strong><p>Interviewers love asking "why use a tuple instead of a list?" Answer: immutability, hashability, and communicating intent that the data is fixed.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-2-1", title: "Tuple as Dict Key — Coordinate Grid",
            code: `# Tuples are hashable → valid dict keys
grid = {}
grid[(0, 0)] = "start"
grid[(3, 4)] = "treasure"
grid[(1, 1)] = "trap"

# Check adjacency
def neighbors(point):
    x, y = point
    return [(x+dx, y+dy) for dx,dy in [(-1,0),(1,0),(0,-1),(0,1)]]

print("Neighbors of (0,0):", neighbors((0, 0)))
print("Is (1,0) in grid?", (1, 0) in grid)
print("Is (3,4) in grid?", (3, 4) in grid)`
          },
          {
            id: "ce-5-2-2", title: "Named Tuple vs Regular Class",
            code: `from collections import namedtuple
from dataclasses import dataclass

# namedtuple — lightweight, immutable
Employee = namedtuple('Employee', ['name', 'dept', 'salary'])
e1 = Employee("Alice", "Engineering", 95000)
print(e1)
print(f"{e1.name} earns {e1.salary:,}")

# namedtuple._asdict() → regular dict
print(e1._asdict())

# namedtuple._replace() → new tuple with some fields changed
senior = e1._replace(salary=120000)
print("After raise:", senior)

# Unpack like a normal tuple
name, dept, sal = e1
print(f"Unpacked: {name}, {dept}")`
          }
        ],
        playground: {
          title: "Tuple Playground",
          description: "Explore tuple unpacking and named tuples.",
          starterCode: `from collections import namedtuple

# Create a Point3D named tuple
Point3D = namedtuple('Point3D', ['x', 'y', 'z'])

def distance(p1, p2):
    return sum((a - b)**2 for a, b in zip(p1, p2)) ** 0.5

p1 = Point3D(0, 0, 0)
p2 = Point3D(3, 4, 0)
print(f"Distance: {distance(p1, p2)}")

# Try star unpacking
data = [1, 2, 3, 4, 5, 6]
first, *middle, last = data
print(f"First: {first}, Middle: {middle}, Last: {last}")`
        },
        exercises: [
          {
            id: "exe-5-2-1", title: "Unzip a List of Tuples", difficulty: "easy",
            description: "Given a list of (name, score) tuples, return two separate lists: one of names and one of scores.",
            starterCode: `def unzip(pairs):
    # Hint: zip(*pairs) is the Pythonic way
    pass

pairs = [("Alice", 90), ("Bob", 85), ("Carol", 92)]
names, scores = unzip(pairs)
print(names)   # ['Alice', 'Bob', 'Carol']
print(scores)  # [90, 85, 92]`,
            solution: `def unzip(pairs):
    names, scores = zip(*pairs)
    return list(names), list(scores)`,
            solutionExplanation: "zip(*pairs) is the transpose operation — it unpacks the list of pairs and re-zips them into groups by position. zip(*[(a,b),(c,d)]) gives (a,c) and (b,d)."
          },
          {
            id: "exe-5-2-2", title: "Top K Students", difficulty: "easy",
            description: "Use a named tuple to represent Student(name, gpa). Return the names of the top k students by GPA.",
            starterCode: `from collections import namedtuple

Student = namedtuple('Student', ['name', 'gpa'])

def top_k(students, k):
    pass

data = [Student("Alice",3.9), Student("Bob",3.5),
        Student("Carol",3.8), Student("Dave",3.2)]
print(top_k(data, 2))  # ['Alice', 'Carol']`,
            solution: `def top_k(students, k):
    ranked = sorted(students, key=lambda s: s.gpa, reverse=True)
    return [s.name for s in ranked[:k]]`,
            solutionExplanation: "Sort by the gpa field (descending) using lambda, take the first k, then extract just the name field with a list comprehension."
          }
        ],
        interviewQuestions: [
          { q: "Why can a tuple be used as a dict key but a list cannot?", a: "Dict keys must be hashable. Tuples are hashable because they're immutable — their contents (and thus hash value) can't change after creation. Lists are mutable, so their hash could change, which would corrupt the dict's internal hash table. Python raises TypeError if you try to hash a list." },
          { q: "What is the difference between (42) and (42,)?", a: "(42) is just the integer 42 in parentheses — the parentheses are for grouping, not tuple creation. (42,) is a single-element tuple. The trailing comma is what makes it a tuple. This is a common gotcha." },
          { q: "When is namedtuple preferred over a dataclass?", a: "namedtuple is preferred when you need immutability, hashability, tuple compatibility (unpacking, indexing), or minimal memory footprint. dataclass is better when you need mutability, methods, inheritance, or default values with complex logic. For Python 3.7+ projects, frozen dataclass is often preferred over namedtuple." }
        ]
      },

      // ── 5.3 Dictionaries ─────────────────────────────────────────────────
      {
        id: "lesson-5-3", title: "Dictionaries — Hash Maps in Depth", duration: "40 min",
        content: `
<h2>Dictionaries — Python's Most Powerful Built-in</h2>
<p>A <strong>dict</strong> is a hash table that maps keys to values. It is the backbone of Python itself — every object's attributes are stored in a <code>__dict__</code>.</p>

<h3>The O(1) Magic</h3>
<p>Dict lookup is O(1) average because Python computes <code>hash(key)</code> to find the bucket directly — no searching required. Compare to a list where you must scan O(n) elements.</p>

<h3>Creating Dicts</h3>
<pre><code>d1 = {"a": 1, "b": 2}
d2 = dict(a=1, b=2)
d3 = dict(zip(["a","b"], [1, 2]))
d4 = {k: k**2 for k in range(5)}   # dict comprehension</code></pre>

<h3>Essential Dict Methods</h3>
<pre><code>d = {"name": "Alice", "age": 30}

d["city"] = "NYC"         # insert/update
d.get("missing", "N/A")   # safe get (no KeyError)
d.setdefault("score", 0)  # insert if key absent
d.pop("age")              # remove and return
d.update({"x": 1})        # merge in-place

# Iteration
for k in d:              # keys (default)
    print(k)
for k, v in d.items():   # key-value pairs
    print(k, v)
for v in d.values():     # values only
    print(v)</code></pre>

<h3>Merging Dicts (Python 3.9+)</h3>
<pre><code>a = {"x": 1, "y": 2}
b = {"y": 99, "z": 3}

# Old way
merged = {**a, **b}       # b's values win on conflict

# Python 3.9+ merge operator
merged = a | b            # same result
a |= b                    # in-place merge</code></pre>

<h3>collections.defaultdict & Counter</h3>
<pre><code>from collections import defaultdict, Counter

# defaultdict — no KeyError for missing keys
graph = defaultdict(list)
graph["A"].append("B")  # works without pre-initializing

# Counter — frequency counter
words = "the quick brown fox the fox".split()
freq = Counter(words)
print(freq.most_common(2))   # [('the', 2), ('fox', 2)]
freq["the"] += 1             # increment
freq.update(["fox", "fox"])  # bulk update</code></pre>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><strong>Dict ordering</strong><p>Since Python 3.7, dicts maintain insertion order as a language guarantee (not just an implementation detail).</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-3-1", title: "Dict as Counter — Word Frequency",
            code: `from collections import Counter, defaultdict

text = """to be or not to be that is the question
whether tis nobler in the mind to suffer"""

words = text.split()

# Method 1: manual dict
freq = {}
for w in words:
    freq[w] = freq.get(w, 0) + 1

# Method 2: Counter (more Pythonic)
counter = Counter(words)

print("Top 5:", counter.most_common(5))
print("Count of 'to':", counter["to"])
print("Unique words:", len(counter))

# Counter arithmetic
c1 = Counter("aabbc")
c2 = Counter("abcd")
print("Union:", c1 | c2)        # max of each
print("Intersection:", c1 & c2) # min of each`
          },
          {
            id: "ce-5-3-2", title: "Group By using defaultdict",
            code: `from collections import defaultdict

employees = [
    {"name": "Alice", "dept": "Engineering"},
    {"name": "Bob",   "dept": "Marketing"},
    {"name": "Carol", "dept": "Engineering"},
    {"name": "Dave",  "dept": "HR"},
    {"name": "Eve",   "dept": "Marketing"},
]

# Group employees by department
by_dept = defaultdict(list)
for emp in employees:
    by_dept[emp["dept"]].append(emp["name"])

for dept, names in sorted(by_dept.items()):
    print(f"{dept}: {', '.join(names)}")`
          }
        ],
        playground: {
          title: "Dict Playground",
          description: "Build a simple inventory system using dictionaries.",
          starterCode: `# Inventory management system
inventory = {}

def add_item(name, qty, price):
    inventory[name] = {"qty": qty, "price": price}

def sell(name, qty):
    if name not in inventory:
        print(f"Error: {name} not found")
        return
    if inventory[name]["qty"] < qty:
        print(f"Error: only {inventory[name]['qty']} in stock")
        return
    inventory[name]["qty"] -= qty
    revenue = qty * inventory[name]["price"]
    print(f"Sold {qty}x {name} for \${revenue:.2f}")

def report():
    print("\\n--- Inventory Report ---")
    total = 0
    for name, info in sorted(inventory.items()):
        value = info["qty"] * info["price"]
        total += value
        print(f"  {name:12} qty={info['qty']:3}  \${info['price']:.2f} each  = \${value:.2f}")
    print(f"Total value: \${total:.2f}")

add_item("Laptop", 10, 999.99)
add_item("Mouse",  50,  29.99)
add_item("Keyboard", 30, 79.99)
sell("Laptop", 3)
sell("Mouse", 100)  # over-stock test
report()`
        },
        exercises: [
          {
            id: "exe-5-3-1", title: "Anagram Grouping", difficulty: "medium",
            description: "Given a list of strings, group anagrams together. Return a list of groups.",
            starterCode: `def group_anagrams(words):
    # Hint: sorted word is the key
    pass

words = ["eat","tea","tan","ate","nat","bat"]
result = group_anagrams(words)
for g in sorted(result, key=len, reverse=True):
    print(sorted(g))`,
            solution: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        key = "".join(sorted(w))
        groups[key].append(w)
    return list(groups.values())`,
            solutionExplanation: "The canonical key for an anagram group is its sorted letters. 'eat', 'tea', 'ate' all sort to 'aet'. We use a defaultdict(list) to collect words with the same key."
          },
          {
            id: "exe-5-3-2", title: "LRU Cache (Manual)", difficulty: "medium",
            description: "Implement a simple LRU cache using Python's OrderedDict (or just dict since 3.7). Supports get(key) and put(key, value) with a capacity limit.",
            starterCode: `class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = {}  # insertion-ordered dict

    def get(self, key):
        pass  # return -1 if not found, else value; move to end

    def put(self, key, value):
        pass  # evict LRU (oldest) when over capacity

cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))   # 1
cache.put(3, 3)       # evicts key 2
print(cache.get(2))   # -1
print(cache.get(3))   # 3`,
            solution: `class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = {}

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache[key] = self.cache.pop(key)  # move to end
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.pop(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.pop(next(iter(self.cache)))  # remove oldest`,
            solutionExplanation: "Python dicts preserve insertion order. 'Moving to end' is done by deleting and re-inserting. The oldest (LRU) entry is always first — next(iter(cache)) gives the first key."
          }
        ],
        interviewQuestions: [
          { q: "How does Python achieve O(1) average dict lookup?", a: "Python computes hash(key) to find the bucket index directly (no linear scan). Collisions are handled via open addressing (linear probing). In the worst case (all keys hash to the same bucket), it degrades to O(n), but this is extremely rare with Python's hash functions." },
          { q: "What happens when you use a mutable object as a dict key?", a: "Python raises TypeError: unhashable type. Only hashable objects (integers, strings, tuples of hashables, frozensets) can be keys. If mutable objects were allowed, their hash could change after insertion, making the key unfindable." },
          { q: "What is the difference between dict.get(key) and dict[key]?", a: "dict[key] raises KeyError if the key is absent. dict.get(key) returns None by default, or dict.get(key, default) returns the default value. Always prefer .get() when the key might not exist to avoid try/except overhead." },
          { q: "Explain dict.setdefault() and give a use case.", a: "dict.setdefault(key, default) inserts key with default if it doesn't exist, and returns the current value. Use case: grouping items — groups.setdefault(dept, []).append(name) initialises the list only on first encounter." }
        ]
      },

      // ── 5.4 Sets ──────────────────────────────────────────────────────────
      {
        id: "lesson-5-4", title: "Sets — Unique Collections & Set Algebra", duration: "25 min",
        content: `
<h2>Sets</h2>
<p>A <strong>set</strong> is an unordered collection of unique hashable elements backed by a hash table. Think of it as a dict with keys only.</p>

<h3>Creating Sets</h3>
<pre><code>s1 = {1, 2, 3}
s2 = set([1, 2, 2, 3])    # {1, 2, 3} — duplicates removed
s3 = set("hello")          # {'h', 'e', 'l', 'o'}
empty = set()              # NOT {} — that's an empty dict!</code></pre>

<h3>Set Operations</h3>
<pre><code>a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # union:        {1,2,3,4,5,6}
a & b   # intersection: {3,4}
a - b   # difference:   {1,2}    (in a but not b)
a ^ b   # symmetric diff: {1,2,5,6} (in either but not both)
a <= b  # subset check  (a ⊆ b)
a < b   # proper subset (a ⊊ b)</code></pre>

<h3>Mutating Sets</h3>
<pre><code>s = {1, 2, 3}
s.add(4)         # add one element
s.update([5,6])  # add multiple elements
s.discard(10)    # remove if present (no error if missing)
s.remove(1)      # remove (KeyError if missing)
s.pop()          # remove and return an arbitrary element</code></pre>

<h3>frozenset — Immutable Set</h3>
<pre><code>fs = frozenset([1, 2, 3])
# Can be used as a dict key or inside another set
cache = {frozenset([1,2]): "pair"}</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>O(1) Membership Test</strong><p>Always prefer <code>x in my_set</code> over <code>x in my_list</code> when the list is large. Set lookup is O(1); list lookup is O(n).</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-4-1", title: "Set Algebra — Finding Common Friends",
            code: `# Social network — who do Alice and Bob both follow?
alice_follows = {"Bob", "Carol", "Dave", "Eve"}
bob_follows   = {"Alice", "Carol", "Frank", "Eve"}

mutual      = alice_follows & bob_follows
only_alice  = alice_follows - bob_follows
either      = alice_follows | bob_follows

print("Mutual follows:", mutual)
print("Only Alice follows:", only_alice)
print("Either follows:", either)

# Remove duplicates while preserving order (Python 3.7+)
words = ["the", "fox", "the", "fox", "jumped"]
unique_ordered = list(dict.fromkeys(words))
print("\\nUnique ordered:", unique_ordered)

# Fast membership test
valid_commands = {"start", "stop", "restart", "status"}
cmd = "restart"
if cmd in valid_commands:
    print(f"\\n'{cmd}' is valid")`
          }
        ],
        playground: {
          title: "Set Playground",
          description: "Use sets to solve a real problem: find words that appear in all documents.",
          starterCode: `docs = [
    "python is fast and python is fun",
    "python and java are popular languages",
    "fun languages are hard to master",
]

# Find words that appear in ALL documents
def common_words(docs):
    word_sets = [set(doc.split()) for doc in docs]
    return word_sets[0].intersection(*word_sets[1:])

print("Common words:", common_words(docs))

# Find words unique to the first document
def unique_to_first(docs):
    first = set(docs[0].split())
    others = set().union(*[set(d.split()) for d in docs[1:]])
    return first - others

print("Unique to doc 1:", unique_to_first(docs))`
        },
        exercises: [
          {
            id: "exe-5-4-1", title: "Longest Consecutive Sequence", difficulty: "medium",
            description: "Given an unsorted list of integers, find the length of the longest consecutive sequence. Must run in O(n).",
            starterCode: `def longest_consecutive(nums):
    # Hint: convert to a set, then only start sequences at their beginning
    pass

print(longest_consecutive([100,4,200,1,3,2]))  # 4 → [1,2,3,4]
print(longest_consecutive([0,3,7,2,5,8,4,6,0,1]))  # 9`,
            solution: `def longest_consecutive(nums):
    num_set = set(nums)
    best = 0
    for n in num_set:
        if n - 1 not in num_set:  # only start a sequence at its beginning
            length = 1
            while n + length in num_set:
                length += 1
            best = max(best, length)
    return best`,
            solutionExplanation: "We only begin counting from a number n if n-1 is NOT in the set (meaning n is the start of a sequence). Then we extend as far as possible. Each number is visited at most twice total → O(n)."
          }
        ],
        interviewQuestions: [
          { q: "What is the time complexity of set membership testing and why?", a: "O(1) average. Sets use a hash table — Python computes hash(element) to find the bucket directly. This is why replacing a list with a set can turn an O(n²) solution into O(n) in many interview problems." },
          { q: "How would you remove duplicates from a list while preserving order?", a: "list(dict.fromkeys(items)) — dicts preserve insertion order and reject duplicate keys. This is O(n) and maintains order. Alternatively: seen = set(); [seen.add(x) or x for x in items if x not in seen] (less readable)." }
        ]
      }
    ]  // end lessons for module 5
  },

  {
    id: 6, title: "Object-Oriented Programming", icon: "🏛️", color: "#9d8fff",
    difficulty: "intermediate", duration: "5–6 hours",
    description: "Deep understanding of classes, objects, inheritance, MRO, dunder methods, and dataclasses.",
    lessons: [
      // ── 6.1 Classes & Objects ──────────────────────────────────────────────
      {
        id: "lesson-6-1", title: "Classes & Objects", duration: "40 min",
        content: `
<h2>Classes and Objects</h2>
<p>A <strong>class</strong> is a blueprint; an <strong>object</strong> is a concrete instance of that blueprint. Everything in Python is an object — including integers, functions, and modules.</p>

<h3>Anatomy of a Class</h3>
<pre><code>class BankAccount:
    interest_rate = 0.05  # class attribute (shared by all instances)

    def __init__(self, owner, balance=0):
        self.owner   = owner     # instance attributes
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount

    def __repr__(self):  # unambiguous developer representation
        return f"BankAccount(owner={self.owner!r}, balance={self.balance})"

    def __str__(self):   # human-readable string
        return f"{self.owner}'s account: \${self.balance:.2f}"</code></pre>

<h3>Instance vs Class Attributes</h3>
<pre><code>acc1 = BankAccount("Alice", 1000)
acc2 = BankAccount("Bob",   500)

# Instance attribute — belongs to one object
acc1.balance   # 1000
acc2.balance   # 500

# Class attribute — shared
BankAccount.interest_rate  # 0.05
acc1.interest_rate         # 0.05 (looks up via class if not on instance)

# Changing a class attribute
BankAccount.interest_rate = 0.06   # affects ALL instances
acc1.interest_rate = 0.07          # shadows for acc1 only</code></pre>

<h3>__repr__ vs __str__</h3>
<ul>
  <li><code>__repr__</code> — unambiguous, for developers; shown in the REPL and <code>repr()</code></li>
  <li><code>__str__</code> — human-friendly; used by <code>print()</code> and <code>str()</code></li>
  <li>If only <code>__repr__</code> is defined, Python uses it for both</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Always define __repr__</strong><p>A good <code>__repr__</code> should ideally be valid Python code that recreates the object: <code>ClassName(arg1, arg2)</code>. This makes debugging much easier.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-6-1-1", title: "BankAccount class with validation",
            code: `class BankAccount:
    _next_id = 1000  # class-level counter

    def __init__(self, owner, balance=0):
        if balance < 0:
            raise ValueError("Initial balance cannot be negative")
        self.owner   = owner
        self.balance = float(balance)
        self.id      = BankAccount._next_id
        BankAccount._next_id += 1
        self._history = []

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.balance += amount
        self._history.append(f"+{amount:.2f}")

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        self._history.append(f"-{amount:.2f}")

    def statement(self):
        print(f"Account #{self.id} — {self.owner}")
        for tx in self._history:
            print(f"  {tx}")
        print(f"  Balance: {self.balance:.2f}")

    def __repr__(self):
        return f"BankAccount({self.owner!r}, {self.balance})"

acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
acc.statement()
print(repr(acc))`
          }
        ],
        playground: {
          title: "Class Design Playground",
          description: "Design a Rectangle class with area, perimeter, and comparison support.",
          starterCode: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def is_square(self):
        return self.width == self.height

    def __repr__(self):
        return f"Rectangle({self.width}, {self.height})"

    def __eq__(self, other):
        return self.area() == other.area()

    def __lt__(self, other):
        return self.area() < other.area()

r1 = Rectangle(4, 6)
r2 = Rectangle(3, 8)
r3 = Rectangle(5, 5)

print(r1.area(), r1.perimeter())
print(r3.is_square())
print(r1 == r2)   # same area?
print(sorted([r1, r2, r3]))`
        },
        exercises: [
          {
            id: "exe-6-1-1", title: "Stack Class", difficulty: "easy",
            description: "Implement a Stack class with push, pop, peek, is_empty, and __len__ methods.",
            starterCode: `class Stack:
    def __init__(self):
        self._data = []

    def push(self, item): pass
    def pop(self): pass        # raise IndexError if empty
    def peek(self): pass       # return top without removing
    def is_empty(self): pass
    def __len__(self): pass
    def __repr__(self): pass

s = Stack()
s.push(1); s.push(2); s.push(3)
print(len(s))      # 3
print(s.peek())    # 3
print(s.pop())     # 3
print(s.is_empty())  # False`,
            solution: `class Stack:
    def __init__(self):
        self._data = []

    def push(self, item):
        self._data.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek at empty stack")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

    def __repr__(self):
        return f"Stack({self._data})"`,
            solutionExplanation: "The Stack wraps a list, delegating to append/pop. We use a leading underscore on _data to signal it's an implementation detail. __len__ makes len(stack) work. IndexError is the standard exception for empty sequences."
          }
        ],
        interviewQuestions: [
          { q: "What is the difference between __init__ and __new__?", a: "__new__ creates the object (allocates memory); __init__ initialises it. __new__ returns the new instance; __init__ receives it as self and sets attributes. You rarely need to override __new__ — it's mainly used for singleton patterns or immutable types like tuple subclasses." },
          { q: "What is self? Is it a keyword?", a: "self is NOT a keyword — it's just a convention for the first parameter of instance methods. Python automatically passes the instance as the first argument when you call obj.method(). You could name it anything (e.g., 'this'), but self is the universal convention." },
          { q: "What is the difference between a class attribute and an instance attribute?", a: "Class attributes are shared across all instances and are defined at the class level. Instance attributes are specific to each object and set in __init__ via self.attr = value. When reading an attribute, Python checks instance first, then class. When writing, it always creates an instance attribute unless you explicitly write to the class." }
        ]
      },

      // ── 6.2 Inheritance & MRO ─────────────────────────────────────────────
      {
        id: "lesson-6-2", title: "Inheritance, super() & MRO", duration: "40 min",
        content: `
<h2>Inheritance</h2>
<p>Inheritance lets a subclass <em>reuse</em> and <em>extend</em> a parent class. Python supports both single and multiple inheritance.</p>

<h3>Basic Inheritance</h3>
<pre><code>class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError

    def __str__(self):
        return f"{type(self).__name__}({self.name!r})"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

animals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for a in animals:
    print(a.speak())</code></pre>

<h3>super() — The Right Way to Call Parent</h3>
<pre><code>class SavingsAccount(BankAccount):
    BONUS_RATE = 0.01

    def __init__(self, owner, balance=0):
        super().__init__(owner, balance)   # call parent __init__
        self.interest_earned = 0.0

    def apply_interest(self):
        interest = self.balance * self.BONUS_RATE
        self.deposit(interest)
        self.interest_earned += interest</code></pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Always use super() — never hardcode the parent name</strong><p>Writing <code>ParentClass.__init__(self, ...)</code> breaks with multiple inheritance and is fragile to refactoring. <code>super()</code> uses the MRO to find the right next class.</p></div>
</div>

<h3>Method Resolution Order (MRO)</h3>
<p>Python uses the <strong>C3 linearisation</strong> algorithm to determine the order in which classes are searched for a method. Use <code>ClassName.__mro__</code> or <code>help(ClassName)</code> to inspect it.</p>
<pre><code>class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass  # multiple inheritance

print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)</code></pre>

<h3>isinstance() and issubclass()</h3>
<pre><code>isinstance(dog, Animal)   # True — checks type or any parent
isinstance(dog, Cat)      # False
issubclass(Dog, Animal)   # True
issubclass(Dog, Cat)      # False</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Prefer isinstance() over type()</strong><p><code>type(obj) == Dog</code> breaks with subclasses. <code>isinstance(obj, Dog)</code> returns True for any subclass of Dog — correct polymorphic behaviour.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-6-2-1", title: "Shape Hierarchy with Polymorphism",
            code: `import math

class Shape:
    def area(self):
        raise NotImplementedError
    def perimeter(self):
        raise NotImplementedError
    def describe(self):
        print(f"{type(self).__name__}: area={self.area():.2f}, "
              f"perimeter={self.perimeter():.2f}")

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return math.pi * self.radius ** 2
    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h
    def perimeter(self):
        return 2 * (self.w + self.h)

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

shapes = [Circle(5), Rectangle(4, 6), Square(3)]
for s in shapes:
    s.describe()

total_area = sum(s.area() for s in shapes)
print(f"\\nTotal area: {total_area:.2f}")`
          },
          {
            id: "ce-6-2-2", title: "MRO and Diamond Inheritance",
            code: `class Logger:
    def log(self, msg):
        print(f"[LOG] {msg}")

class JSONLogger(Logger):
    def log(self, msg):
        print(f'{{"msg": "{msg}"}}')
        super().log(msg)

class TimedLogger(Logger):
    def log(self, msg):
        print(f"[12:00] {msg}")
        super().log(msg)

class ProductionLogger(JSONLogger, TimedLogger):
    pass

print("MRO:", [c.__name__ for c in ProductionLogger.__mro__])
print()
logger = ProductionLogger()
logger.log("server started")`
          }
        ],
        playground: {
          title: "Inheritance Playground",
          description: "Build a vehicle hierarchy with shared and overridden methods.",
          starterCode: `class Vehicle:
    def __init__(self, make, model, year, fuel_capacity):
        self.make = make
        self.model = model
        self.year = year
        self.fuel_capacity = fuel_capacity
        self.fuel = fuel_capacity  # start full

    def refuel(self, amount):
        self.fuel = min(self.fuel + amount, self.fuel_capacity)
        print(f"Refuelled. Tank: {self.fuel}/{self.fuel_capacity}L")

    def drive(self, km):
        raise NotImplementedError

    def __repr__(self):
        return f"{self.year} {self.make} {self.model}"

class Car(Vehicle):
    MPL = 12  # km per litre

    def drive(self, km):
        needed = km / self.MPL
        if needed > self.fuel:
            print(f"Not enough fuel for {km}km! Only {self.fuel*self.MPL:.0f}km range.")
        else:
            self.fuel -= needed
            print(f"{self} drove {km}km. Fuel left: {self.fuel:.1f}L")

class ElectricCar(Vehicle):
    def __init__(self, make, model, year, battery_kwh):
        super().__init__(make, model, year, battery_kwh)

    def drive(self, km):
        kwh_needed = km * 0.2  # 200Wh per km
        if kwh_needed > self.fuel:
            print(f"Not enough charge!")
        else:
            self.fuel -= kwh_needed
            print(f"{self} (electric) drove {km}km. Battery: {self.fuel:.1f}kWh")

car = Car("Toyota", "Camry", 2023, 60)
ev  = ElectricCar("Tesla", "Model 3", 2024, 75)

car.drive(200)
ev.drive(150)
car.drive(800)  # should fail`
        },
        exercises: [
          {
            id: "exe-6-2-1", title: "Abstract Base Class", difficulty: "medium",
            description: "Use the abc module to create an abstract Serializable class with abstract methods serialize() and deserialize(). Implement JSONSerializer and CSVSerializer subclasses.",
            starterCode: `from abc import ABC, abstractmethod
import json

class Serializable(ABC):
    @abstractmethod
    def serialize(self, data): pass

    @abstractmethod
    def deserialize(self, text): pass

class JSONSerializer(Serializable):
    pass  # implement serialize() and deserialize()

class CSVSerializer(Serializable):
    pass  # comma-join list of values; split on deserialize

j = JSONSerializer()
c = CSVSerializer()
data = {"name": "Alice", "age": 30}
lst  = [1, 2, 3, 4]

print(j.serialize(data))
print(j.deserialize('{"x": 1}'))
print(c.serialize(lst))
print(c.deserialize("1,2,3,4"))`,
            solution: `from abc import ABC, abstractmethod
import json

class Serializable(ABC):
    @abstractmethod
    def serialize(self, data): pass

    @abstractmethod
    def deserialize(self, text): pass

class JSONSerializer(Serializable):
    def serialize(self, data):
        return json.dumps(data)
    def deserialize(self, text):
        return json.loads(text)

class CSVSerializer(Serializable):
    def serialize(self, data):
        return ",".join(str(x) for x in data)
    def deserialize(self, text):
        return [int(x) for x in text.split(",")]`,
            solutionExplanation: "Abstract base classes enforce a contract — any subclass that doesn't implement all @abstractmethod methods will raise TypeError on instantiation. This is Python's way of doing interfaces."
          }
        ],
        interviewQuestions: [
          { q: "Explain Python's MRO and why it matters.", a: "MRO (Method Resolution Order) determines which class's method Python calls when there's inheritance. Python uses C3 linearization: it searches left-to-right in the inheritance chain while respecting the constraint that no class appears before its subclasses. It matters most with multiple inheritance (diamond problem). super() always follows the MRO." },
          { q: "What does super() actually do?", a: "super() returns a proxy object that delegates method calls to the next class in the MRO. In single inheritance, super() finds the parent class. In multiple inheritance, it follows the full MRO — this is why super() works correctly even in diamond inheritance, as long as all classes use super()." },
          { q: "What's the difference between composition and inheritance?", a: "Inheritance models 'is-a' (a Dog IS an Animal). Composition models 'has-a' (a Car HAS an Engine). Composition is often preferred (Liskov Substitution violations are common with deep inheritance). Use inheritance when the relationship is truly hierarchical; use composition when building complex objects from simpler ones." }
        ]
      },

      // ── 6.3 Dunder Methods ────────────────────────────────────────────────
      {
        id: "lesson-6-3", title: "Dunder (Magic) Methods", duration: "35 min",
        content: `
<h2>Dunder Methods — Making Objects Pythonic</h2>
<p><strong>Dunder methods</strong> (double-underscore: <code>__name__</code>) let your classes integrate with Python's built-in syntax and functions. They're called implicitly by the interpreter.</p>

<h3>Essential Dunder Methods</h3>
<table style="width:100%;border-collapse:collapse;font-size:.87rem;">
<tr style="background:var(--bg-surface)"><th style="padding:.4rem .6rem;text-align:left">Method</th><th style="padding:.4rem .6rem;text-align:left">Triggered by</th><th style="padding:.4rem .6rem;text-align:left">Purpose</th></tr>
<tr><td><code>__repr__</code></td><td><code>repr(obj)</code>, REPL</td><td>Dev-readable string</td></tr>
<tr style="background:var(--bg-surface)"><td><code>__str__</code></td><td><code>str(obj)</code>, <code>print()</code></td><td>User-friendly string</td></tr>
<tr><td><code>__len__</code></td><td><code>len(obj)</code></td><td>Length / size</td></tr>
<tr style="background:var(--bg-surface)"><td><code>__getitem__</code></td><td><code>obj[key]</code></td><td>Index / slice access</td></tr>
<tr><td><code>__contains__</code></td><td><code>x in obj</code></td><td>Membership test</td></tr>
<tr style="background:var(--bg-surface)"><td><code>__iter__</code></td><td><code>for x in obj</code></td><td>Iteration protocol</td></tr>
<tr><td><code>__eq__, __lt__</code></td><td><code>==, <</code></td><td>Comparison</td></tr>
<tr style="background:var(--bg-surface)"><td><code>__add__, __mul__</code></td><td><code>+, *</code></td><td>Arithmetic operators</td></tr>
<tr><td><code>__call__</code></td><td><code>obj()</code></td><td>Make callable</td></tr>
<tr style="background:var(--bg-surface)"><td><code>__enter__, __exit__</code></td><td><code>with obj:</code></td><td>Context manager</td></tr>
</table>

<h3>Context Managers via Dunder</h3>
<pre><code>class ManagedFile:
    def __init__(self, path, mode='r'):
        self.path = path
        self.mode = mode

    def __enter__(self):
        self.file = open(self.path, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        return False  # don't suppress exceptions

with ManagedFile('/etc/hostname') as f:
    print(f.read())</code></pre>

<h3>Making Containers</h3>
<pre><code>class NumberList:
    def __init__(self, data):
        self._data = list(data)

    def __len__(self):      return len(self._data)
    def __getitem__(self, i): return self._data[i]
    def __contains__(self, x): return x in self._data
    def __iter__(self):     return iter(self._data)
    def __repr__(self):     return f"NumberList({self._data})"</code></pre>
`,
        codeExamples: [
          {
            id: "ce-6-3-1", title: "Vector Class with Full Operator Support",
            code: `class Vector:
    def __init__(self, *components):
        self.data = list(components)

    def __repr__(self):
        return f"Vector{tuple(self.data)}"

    def __len__(self):
        return len(self.data)

    def __getitem__(self, i):
        return self.data[i]

    def __add__(self, other):
        if len(self) != len(other):
            raise ValueError("Dimension mismatch")
        return Vector(*[a + b for a, b in zip(self.data, other.data)])

    def __mul__(self, scalar):
        return Vector(*[x * scalar for x in self.data])

    def __rmul__(self, scalar):   # scalar * vector
        return self.__mul__(scalar)

    def __eq__(self, other):
        return self.data == other.data

    def dot(self, other):
        return sum(a * b for a, b in zip(self.data, other.data))

    def magnitude(self):
        return sum(x**2 for x in self.data) ** 0.5

v1 = Vector(1, 2, 3)
v2 = Vector(4, 5, 6)
print(v1 + v2)         # Vector(5, 7, 9)
print(v1 * 3)          # Vector(3, 6, 9)
print(2 * v1)          # Vector(2, 4, 6)  uses __rmul__
print(v1.dot(v2))      # 32
print(v1.magnitude())  # sqrt(14) ≈ 3.74`
          },
          {
            id: "ce-6-3-2", title: "__call__ — Callable Objects",
            code: `class Multiplier:
    """A callable object that multiplies by a fixed factor."""
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, x):
        return x * self.factor

    def __repr__(self):
        return f"Multiplier(×{self.factor})"

double = Multiplier(2)
triple = Multiplier(3)

print(double(5))    # 10
print(triple(5))    # 15

# Works anywhere a function is expected
nums = [1, 2, 3, 4, 5]
print(list(map(double, nums)))  # [2, 4, 6, 8, 10]

# A memoizing callable
class Memoize:
    def __init__(self, func):
        self.func = func
        self.cache = {}
    def __call__(self, *args):
        if args not in self.cache:
            self.cache[args] = self.func(*args)
        return self.cache[args]

@Memoize
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

print([fib(i) for i in range(10)])`
          }
        ],
        playground: {
          title: "Dunder Playground",
          description: "Implement a Matrix class with operator support.",
          starterCode: `class Matrix:
    def __init__(self, rows):
        self.rows = rows
        self.m = len(rows)
        self.n = len(rows[0]) if rows else 0

    def __repr__(self):
        return "\\n".join(str(row) for row in self.rows)

    def __add__(self, other):
        if self.m != other.m or self.n != other.n:
            raise ValueError("Shape mismatch")
        return Matrix([
            [self.rows[i][j] + other.rows[i][j]
             for j in range(self.n)]
            for i in range(self.m)
        ])

    def __mul__(self, other):
        if self.n != other.m:
            raise ValueError("Incompatible dimensions")
        result = [[0]*other.n for _ in range(self.m)]
        for i in range(self.m):
            for j in range(other.n):
                for k in range(self.n):
                    result[i][j] += self.rows[i][k] * other.rows[k][j]
        return Matrix(result)

A = Matrix([[1,2],[3,4]])
B = Matrix([[5,6],[7,8]])

print("A + B:")
print(A + B)
print("\\nA × B:")
print(A * B)`
        },
        exercises: [
          {
            id: "exe-6-3-1", title: "Implement a Polynomial Class", difficulty: "medium",
            description: "Create a Polynomial class. Coefficients are stored as a list (index = degree). Support __repr__, __add__, __mul__, and evaluation via __call__.",
            starterCode: `class Polynomial:
    def __init__(self, coeffs):
        # coeffs[i] is the coefficient for x^i
        # Example: [1, 0, 3] means 1 + 0x + 3x^2
        self.coeffs = coeffs

    def __repr__(self): pass
    def __call__(self, x): pass   # evaluate at x
    def __add__(self, other): pass

p = Polynomial([1, 0, 3])    # 1 + 3x^2
print(p)                      # 3x^2 + 1  (or similar)
print(p(2))                   # 1 + 3*4 = 13
q = Polynomial([2, 1])        # 2 + x
print((p + q)(2))             # 13 + 4 = 17`,
            solution: `class Polynomial:
    def __init__(self, coeffs):
        self.coeffs = coeffs

    def __repr__(self):
        terms = []
        for i, c in enumerate(reversed(self.coeffs)):
            if c == 0: continue
            deg = len(self.coeffs) - 1 - i
            if deg == 0: terms.append(str(c))
            elif deg == 1: terms.append(f"{c}x")
            else: terms.append(f"{c}x^{deg}")
        return " + ".join(terms) or "0"

    def __call__(self, x):
        return sum(c * x**i for i, c in enumerate(self.coeffs))

    def __add__(self, other):
        a, b = self.coeffs, other.coeffs
        n = max(len(a), len(b))
        a = a + [0]*(n-len(a))
        b = b + [0]*(n-len(b))
        return Polynomial([x+y for x,y in zip(a,b)])`,
            solutionExplanation: "__call__ makes the polynomial directly callable as a function. __add__ pads the shorter coefficient list with zeros before element-wise addition. __repr__ builds the display string by skipping zero-coefficient terms."
          }
        ],
        interviewQuestions: [
          { q: "What are dunder methods and why are they useful?", a: "Dunder (double-underscore) methods integrate your objects with Python's syntax. __len__ makes len() work, __add__ makes + work, __iter__ makes for-loops work, etc. They allow custom objects to behave like built-ins, following the principle that 'explicit is better than implicit'." },
          { q: "Explain __enter__ and __exit__ for context managers.", a: "__enter__ is called at the start of the 'with' block and its return value is bound to the 'as' variable. __exit__(exc_type, exc_val, tb) is called on exit — even if an exception occurred. If __exit__ returns True, the exception is suppressed. Common use: resource cleanup (files, DB connections, locks)." },
          { q: "What is __slots__ and when would you use it?", a: "__slots__ restricts instance attributes to a fixed set, replacing the per-instance __dict__ with a fixed-size array. This saves memory (up to 40-50%) and slightly speeds up attribute access. Use it for classes that create millions of instances (e.g., game entities, data records). Downside: can't add attributes dynamically; complicates pickling and multiple inheritance." }
        ]
      },

      // ── 6.4 Properties & Class Methods ────────────────────────────────────
      {
        id: "lesson-6-4", title: "@property, @staticmethod & @classmethod", duration: "30 min",
        content: `
<h2>Descriptors and Method Types</h2>
<p>Python provides three method decorators that change how methods bind to instances and classes.</p>

<h3>@property — Managed Attributes</h3>
<p>Replace public attributes with getter/setter/deleter pairs without changing the calling syntax:</p>
<pre><code>class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius   # private by convention

    @property
    def celsius(self):            # getter
        return self._celsius

    @celsius.setter
    def celsius(self, value):     # setter
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value

    @property
    def fahrenheit(self):         # computed property (no setter)
        return self._celsius * 9/5 + 32

t = Temperature(25)
print(t.celsius)     # 25  — calls getter
t.celsius = 100      # calls setter
print(t.fahrenheit)  # 212.0</code></pre>

<h3>@staticmethod</h3>
<p>A function that lives in the class namespace but doesn't receive <code>self</code> or <code>cls</code>. Use when the logic is related to the class but doesn't need instance or class data:</p>
<pre><code>class MathUtils:
    @staticmethod
    def is_prime(n):
        if n < 2: return False
        return all(n % i != 0 for i in range(2, int(n**0.5) + 1))

print(MathUtils.is_prime(17))  # True</code></pre>

<h3>@classmethod</h3>
<p>Receives <code>cls</code> (the class itself) instead of an instance. Perfect for alternative constructors:</p>
<pre><code>class Date:
    def __init__(self, year, month, day):
        self.year, self.month, self.day = year, month, day

    @classmethod
    def from_string(cls, s):      # alternative constructor
        y, m, d = map(int, s.split("-"))
        return cls(y, m, d)       # cls() works for subclasses too!

    @classmethod
    def today(cls):
        import datetime
        d = datetime.date.today()
        return cls(d.year, d.month, d.day)

    def __repr__(self):
        return f"{self.year}-{self.month:02d}-{self.day:02d}"

d = Date.from_string("2024-03-15")
print(d)          # 2024-03-15</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Rule of thumb</strong><p>If a method uses <code>self</code> → instance method. If it only uses <code>cls</code> → classmethod. If it uses neither → staticmethod. Prefer classmethod over staticmethod when there might be subclasses.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-6-4-1", title: "All Three Decorators Together",
            code: `class Circle:
    PI = 3.14159265358979

    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @property
    def area(self):
        return Circle.PI * self._radius ** 2

    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter / 2)

    @classmethod
    def unit_circle(cls):
        return cls(1.0)

    @staticmethod
    def is_valid_radius(r):
        return r > 0

    def __repr__(self):
        return f"Circle(r={self._radius})"

# Using all three
c1 = Circle(5)
c2 = Circle.from_diameter(10)   # classmethod
c3 = Circle.unit_circle()       # classmethod

print(c1.area)         # property
print(c1.radius)       # property
c1.radius = 7          # setter
print(Circle.is_valid_radius(-1))  # staticmethod`
          }
        ],
        playground: {
          title: "Method Types Playground",
          description: "Build a Person class using all three method types.",
          starterCode: `class Person:
    _population = 0

    def __init__(self, name, birth_year):
        self.name = name
        self.birth_year = birth_year
        Person._population += 1

    @property
    def age(self):
        return 2024 - self.birth_year

    @age.setter
    def age(self, value):
        self.birth_year = 2024 - value

    @classmethod
    def from_age(cls, name, age):
        return cls(name, 2024 - age)

    @classmethod
    def population(cls):
        return cls._population

    @staticmethod
    def is_adult(age):
        return age >= 18

    def __repr__(self):
        return f"Person({self.name!r}, age={self.age})"

p1 = Person("Alice", 1990)
p2 = Person.from_age("Bob", 25)

print(p1)
print(p2)
print("Adult?", Person.is_adult(p1.age))
print("Population:", Person.population())

p1.age = 35  # use setter
print("After update:", p1)`
        },
        exercises: [
          {
            id: "exe-6-4-1", title: "Validated Attribute with @property", difficulty: "easy",
            description: "Create a Student class where grade (0-100) and name (non-empty string) are validated via @property setters.",
            starterCode: `class Student:
    def __init__(self, name, grade):
        self.name = name    # uses setter
        self.grade = grade  # uses setter

    # Add @property for name (must be non-empty string)
    # Add @property for grade (must be 0-100 integer)
    # Add @property for letter_grade (computed: A/B/C/D/F)

s = Student("Alice", 92)
print(s.letter_grade)   # A
s.grade = 78
print(s.letter_grade)   # C
try:
    s.grade = 105       # should raise ValueError
except ValueError as e:
    print(e)`,
            solution: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not isinstance(value, str) or not value.strip():
            raise ValueError("Name must be a non-empty string")
        self._name = value.strip()

    @property
    def grade(self):
        return self._grade

    @grade.setter
    def grade(self, value):
        if not isinstance(value, (int, float)) or not 0 <= value <= 100:
            raise ValueError("Grade must be 0-100")
        self._grade = value

    @property
    def letter_grade(self):
        if self._grade >= 90: return 'A'
        if self._grade >= 80: return 'B'
        if self._grade >= 70: return 'C'
        if self._grade >= 60: return 'D'
        return 'F'`,
            solutionExplanation: "Properties are set with self.name = value in __init__, which already invokes the setter — this is the correct pattern. Private storage uses _name/_grade. The letter_grade property is computed and has no setter."
          }
        ],
        interviewQuestions: [
          { q: "What is the difference between @staticmethod and @classmethod?", a: "@staticmethod gets no implicit first argument — it's just a regular function in the class namespace. @classmethod gets cls as the first argument, which is the class itself (not an instance). Use @classmethod for alternative constructors or factory methods that work correctly with subclasses via cls(). Use @staticmethod for utilities that don't need class or instance data." },
          { q: "Why use @property instead of just exposing the attribute directly?", a: "@property lets you start with a simple public attribute (e.g., self.radius) and later add validation, computed values, or caching without changing the API. Users of your class don't need to update their code. This follows the Uniform Access Principle." }
        ]
      },

      // ── 6.5 Dataclasses ───────────────────────────────────────────────────
      {
        id: "lesson-6-5", title: "Dataclasses — Modern Python Records", duration: "30 min",
        content: `
<h2>dataclasses — Reduce Boilerplate</h2>
<p>The <code>@dataclass</code> decorator (Python 3.7+) automatically generates <code>__init__</code>, <code>__repr__</code>, and <code>__eq__</code> from class-level field annotations.</p>

<h3>Basic Usage</h3>
<pre><code>from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float
    label: str = "point"   # default value

p = Point(3.0, 4.0)
print(p)          # Point(x=3.0, y=4.0, label='point')
print(p.x, p.y)  # 3.0 4.0</code></pre>

<h3>field() for Complex Defaults</h3>
<pre><code>@dataclass
class Student:
    name: str
    grades: list = field(default_factory=list)   # NEW list per instance
    _id: int = field(init=False, repr=False)      # not in __init__

    def __post_init__(self):
        import random
        self._id = random.randint(1000, 9999)</code></pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Never use mutable defaults directly</strong><p><code>grades: list = []</code> raises an error in dataclasses (for good reason — it would be shared across instances). Always use <code>field(default_factory=list)</code>.</p></div>
</div>

<h3>Frozen Dataclasses</h3>
<pre><code>@dataclass(frozen=True)
class ImmutablePoint:
    x: float
    y: float

p = ImmutablePoint(1.0, 2.0)
# p.x = 5.0  → FrozenInstanceError!
# Frozen dataclasses are hashable → can be dict keys or set elements</code></pre>

<h3>order=True for Comparison</h3>
<pre><code>@dataclass(order=True)
class Version:
    major: int
    minor: int
    patch: int

versions = [Version(2,0,0), Version(1,9,3), Version(2,1,0)]
print(sorted(versions))   # sorted by (major, minor, patch)</code></pre>
`,
        codeExamples: [
          {
            id: "ce-6-5-1", title: "Dataclass with __post_init__ and methods",
            code: `from dataclasses import dataclass, field
from typing import List

@dataclass(order=True)
class Employee:
    name: str
    department: str
    salary: float
    skills: List[str] = field(default_factory=list, compare=False)

    def give_raise(self, percent):
        self.salary *= (1 + percent / 100)

    def add_skill(self, skill):
        if skill not in self.skills:
            self.skills.append(skill)

    def __post_init__(self):
        self.name = self.name.title()  # capitalize

employees = [
    Employee("alice smith", "Engineering", 95000),
    Employee("bob jones",   "Marketing",   75000),
    Employee("carol white", "Engineering", 105000),
]

for e in employees:
    e.add_skill("Python")

employees[0].add_skill("Go")
employees[0].give_raise(10)

for e in sorted(employees, key=lambda e: e.salary, reverse=True):
    print(f"{e.name:15} {e.department:12} \${e.salary:>10,.0f} {e.skills}")`
          }
        ],
        playground: {
          title: "Dataclass Playground",
          description: "Create a frozen dataclass for a GPS coordinate and compute distances.",
          starterCode: `from dataclasses import dataclass
import math

@dataclass(frozen=True)
class Coordinate:
    lat: float
    lon: float
    name: str = ""

    def distance_to(self, other):
        # Haversine formula (approximate)
        R = 6371  # Earth radius in km
        lat1, lon1 = math.radians(self.lat), math.radians(self.lon)
        lat2, lon2 = math.radians(other.lat), math.radians(other.lon)
        dlat = lat2 - lat1
        dlon = lon2 - lon1
        a = math.sin(dlat/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2
        return R * 2 * math.asin(math.sqrt(a))

# Famous cities
london   = Coordinate(51.5074, -0.1278, "London")
newyork  = Coordinate(40.7128, -74.0060, "New York")
tokyo    = Coordinate(35.6762, 139.6503, "Tokyo")
sydney   = Coordinate(-33.8688, 151.2093, "Sydney")

cities = [london, newyork, tokyo, sydney]
for i, a in enumerate(cities):
    for b in cities[i+1:]:
        d = a.distance_to(b)
        print(f"{a.name} → {b.name}: {d:,.0f} km")`
        },
        exercises: [
          {
            id: "exe-6-5-1", title: "Inventory Item with Dataclass", difficulty: "easy",
            description: "Create an InventoryItem dataclass with name, quantity, price_per_unit. Add a total_value property and a restock method. Make it orderable by total_value.",
            starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class InventoryItem:
    name: str
    quantity: int
    price_per_unit: float
    # Add sort_index field for ordering by total value
    # Add total_value property
    # Add restock(amount) method

items = [
    InventoryItem("Laptop", 5, 999.99),
    InventoryItem("Mouse",  50, 29.99),
    InventoryItem("Monitor", 8, 349.99),
]

for item in sorted(items, reverse=True):
    print(item)`,
            solution: `from dataclasses import dataclass, field

@dataclass(order=True)
class InventoryItem:
    sort_index: float = field(init=False, repr=False)
    name: str
    quantity: int
    price_per_unit: float

    def __post_init__(self):
        self.sort_index = self.total_value

    @property
    def total_value(self):
        return self.quantity * self.price_per_unit

    def restock(self, amount):
        self.quantity += amount
        self.sort_index = self.total_value`,
            solutionExplanation: "For ordering by total_value, we add a sort_index field as the FIRST field (dataclass order=True compares fields in order). We set it in __post_init__ and update it in restock(). The field is hidden from init and repr with field(init=False, repr=False)."
          }
        ],
        interviewQuestions: [
          { q: "When would you use a dataclass vs a namedtuple vs a regular class?", a: "namedtuple: immutable record, needs tuple compatibility (indexing, unpacking), or memory is critical. dataclass: mutable record with type hints, needs __post_init__ logic or methods, or you want frozen= for immutability with hash. Regular class: complex behaviour, many methods, deep inheritance hierarchy, or fine-grained control over __init__." },
          { q: "What does frozen=True do to a dataclass?", a: "It makes instances immutable — attempts to set attributes raise FrozenInstanceError. It also makes the dataclass hashable (generates __hash__), so frozen instances can be used as dict keys or set elements. Under the hood, it replaces __setattr__ and __delattr__ with versions that raise the error." }
        ]
      }
    ]  // end lessons for module 6
  },

  {
    id: 7, title: "Functional Programming in Python", icon: "λ", color: "#00c48c",
    difficulty: "intermediate", duration: "3–4 hours",
    description: "Pure functions, immutability, higher-order functions, itertools, functools, and functional design patterns.",
    lessons: [
      {
        id: "lesson-7-1", title: "First-Class Functions & Higher-Order Functions", duration: "30 min",
        content: `
<h2>Functions as First-Class Citizens</h2>
<p>In Python, functions are <strong>first-class objects</strong>: they can be stored in variables, passed as arguments, returned from functions, and stored in data structures.</p>

<h3>Higher-Order Functions</h3>
<p>A function that takes a function as an argument, or returns one, is called a <strong>higher-order function</strong>.</p>
<pre><code># Function stored in a variable
greet = print
greet("Hello!")  # same as print("Hello!")

# Functions passed as arguments
def apply(func, value):
    return func(value)

print(apply(abs, -5))    # 5
print(apply(str, 42))    # '42'

# map, filter, sorted — built-in HOFs
nums = [1, -2, 3, -4, 5]
positives = list(filter(lambda x: x > 0, nums))
doubled   = list(map(lambda x: x * 2, nums))
print(positives)  # [1, 3, 5]
print(doubled)    # [2, -4, 6, -8, 10]</code></pre>

<h3>Lambda Functions</h3>
<p>A lambda is a small anonymous function. Use it for short, throwaway functions — never for complex logic.</p>
<pre><code>square = lambda x: x ** 2
add    = lambda x, y: x + y

# Good use of lambda: key function
words = ["banana", "apple", "fig", "cherry"]
words.sort(key=lambda w: len(w))

# Bad use of lambda: complex logic should be a def
# Instead of: f = lambda x: (x**2 + 3*x + 1) if x > 0 else abs(x)
# Write:
def f(x):
    if x > 0:
        return x**2 + 3*x + 1
    return abs(x)</code></pre>

<h3>Function Composition</h3>
<pre><code>from functools import reduce

def compose(*funcs):
    """Apply funcs right-to-left: compose(f, g)(x) == f(g(x))"""
    return reduce(lambda f, g: lambda x: f(g(x)), funcs)

# Pipeline: strip → lowercase → split
process = compose(str.split, str.lower, str.strip)
result  = process("  Hello World  ")
print(result)  # ['hello', 'world']</code></pre>
`,
        codeExamples: [
          {
            id: "ce-7-1-1", title: "map, filter, reduce",
            code: `from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map — transform each element
squares = list(map(lambda x: x**2, nums))
print("Squares:", squares)

# filter — keep elements that match predicate
evens = list(filter(lambda x: x % 2 == 0, nums))
print("Evens:", evens)

# reduce — fold a sequence into a single value
total   = reduce(lambda a, b: a + b, nums)
product = reduce(lambda a, b: a * b, nums)
print("Sum:", total)
print("Product:", product)

# Prefer list comprehensions over map/filter for readability
squares_lc = [x**2 for x in nums]
evens_lc   = [x for x in nums if x % 2 == 0]
print("\\nComprehension squares:", squares_lc[:5])`
          },
          {
            id: "ce-7-1-2", title: "Returning Functions (Closures as Factories)",
            code: `def make_multiplier(n):
    """Return a function that multiplies by n."""
    def multiplier(x):
        return x * n      # 'n' captured from enclosing scope
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
print(double(triple(4)))  # 24

# Power: build a pipeline of transformations
def pipeline(*funcs):
    def apply(value):
        for f in funcs:
            value = f(value)
        return value
    return apply

process = pipeline(
    str.strip,
    str.lower,
    lambda s: s.replace(" ", "_"),
)

print(process("  Hello World  "))  # hello_world`
          }
        ],
        playground: {
          title: "Functional Style Playground",
          description: "Rewrite imperative code in functional style using map, filter, and comprehensions.",
          starterCode: `# Data: list of product records
products = [
    {"name": "Laptop",   "price": 999.99, "category": "Electronics", "stock": 5},
    {"name": "T-Shirt",  "price": 29.99,  "category": "Clothing",    "stock": 100},
    {"name": "Phone",    "price": 699.99,  "category": "Electronics", "stock": 0},
    {"name": "Headphones","price":149.99, "category": "Electronics", "stock": 20},
    {"name": "Jeans",    "price": 59.99,  "category": "Clothing",    "stock": 50},
]

# Functional pipeline: in-stock electronics under $800, sorted by price
result = sorted(
    filter(
        lambda p: p["stock"] > 0 and p["price"] < 800,
        filter(lambda p: p["category"] == "Electronics", products)
    ),
    key=lambda p: p["price"]
)

# Equivalent with comprehensions (more readable!)
result2 = sorted(
    [p for p in products
     if p["category"] == "Electronics"
     and p["stock"] > 0
     and p["price"] < 800],
    key=lambda p: p["price"]
)

for p in result2:
    print(f"  {p['name']:12} \${p['price']:.2f}")

# Total value of all in-stock items
total = sum(p["price"] * p["stock"] for p in products)
print(f"\\nTotal inventory value: \${total:,.2f}")`
        },
        exercises: [
          {
            id: "exe-7-1-1", title: "Compose a Text Processing Pipeline", difficulty: "easy",
            description: "Write a pipeline function that chains transformations on text. Apply: strip → lowercase → remove punctuation → split into words → remove stop words.",
            starterCode: `import string

STOP_WORDS = {"the", "a", "an", "is", "it", "in", "on", "of", "and", "or"}

def make_pipeline(*funcs):
    """Chain functions: output of one is input of next."""
    pass

strip        = str.strip
lower        = str.lower
remove_punct = lambda s: s.translate(str.maketrans("", "", string.punctuation))
split_words  = str.split
remove_stops = lambda ws: [w for w in ws if w not in STOP_WORDS]

process = make_pipeline(strip, lower, remove_punct, split_words, remove_stops)
text = "  The Quick, Brown Fox! Jumps over the Lazy Dog.  "
print(process(text))`,
            solution: `from functools import reduce
import string

STOP_WORDS = {"the", "a", "an", "is", "it", "in", "on", "of", "and", "or"}

def make_pipeline(*funcs):
    def apply(value):
        for f in funcs:
            value = f(value)
        return value
    return apply

strip        = str.strip
lower        = str.lower
remove_punct = lambda s: s.translate(str.maketrans("", "", string.punctuation))
split_words  = str.split
remove_stops = lambda ws: [w for w in ws if w not in STOP_WORDS]

process = make_pipeline(strip, lower, remove_punct, split_words, remove_stops)
text = "  The Quick, Brown Fox! Jumps over the Lazy Dog.  "
print(process(text))`,
            solutionExplanation: "make_pipeline returns a closure that iterates through the given functions, passing the output of each as input to the next. This is the functional 'pipe' pattern."
          }
        ],
        interviewQuestions: [
          { q: "What is a pure function?", a: "A pure function always returns the same output for the same inputs (deterministic) and has no side effects (doesn't modify external state, I/O, globals). Pure functions are easy to test, parallelise, and reason about. Python doesn't enforce purity — it's a programming discipline." },
          { q: "When should you use list comprehensions vs map/filter?", a: "List comprehensions are almost always preferred in Python for readability and performance. Use map/filter when: (1) applying an already-named function (map(str, nums) is clean), (2) working with very large iterables where laziness matters (map/filter are lazy, not list comprehensions), or (3) in a chain where you want to avoid materialising intermediate lists." }
        ]
      },

      {
        id: "lesson-7-2", title: "itertools — The Secret Weapon", duration: "30 min",
        content: `
<h2>itertools — Combinatorial Power</h2>
<p>The <code>itertools</code> module provides fast, memory-efficient tools for working with iterators. Knowing these shortcuts can dramatically simplify your code.</p>

<h3>Infinite Iterators</h3>
<pre><code>import itertools

itertools.count(10, 2)    # 10, 12, 14, 16, ... (step=2)
itertools.cycle("ABC")    # A, B, C, A, B, C, ...
itertools.repeat(42, 3)   # 42, 42, 42 (3 times)</code></pre>

<h3>Combining Iterables</h3>
<pre><code>itertools.chain([1,2], [3,4], [5])       # 1,2,3,4,5
itertools.chain.from_iterable([[1,2],[3]])# same but takes one nested iterable
itertools.zip_longest([1,2,3],[10,20])   # (1,10),(2,20),(3,None)</code></pre>

<h3>Filtering & Slicing</h3>
<pre><code>itertools.islice(range(100), 5, 15, 2)  # start=5, stop=15, step=2
itertools.takewhile(lambda x: x<5, [1,2,3,4,5,6])  # [1,2,3,4]
itertools.dropwhile(lambda x: x<5, [1,2,3,4,5,6])  # [5,6]
itertools.compress("ABCDE", [1,0,1,0,1])  # A, C, E</code></pre>

<h3>Combinatorics</h3>
<pre><code>list(itertools.combinations("ABC", 2))    # [('A','B'),('A','C'),('B','C')]
list(itertools.permutations("ABC", 2))    # all ordered pairs
list(itertools.product([0,1], repeat=3))  # all 3-bit binary numbers</code></pre>

<h3>groupby</h3>
<pre><code>from itertools import groupby

# MUST be sorted by the key first!
data = sorted(["apple","avocado","banana","blueberry","cherry"], key=lambda x: x[0])
for letter, group in groupby(data, key=lambda x: x[0]):
    print(f"{letter}: {list(group)}")</code></pre>
`,
        codeExamples: [
          {
            id: "ce-7-2-1", title: "itertools Showcase",
            code: `import itertools

# chain — flatten nested structures
nested = [[1,2,3],[4,5],[6,7,8,9]]
flat = list(itertools.chain.from_iterable(nested))
print("Flattened:", flat)

# groupby — group sorted data
records = [
    ("Alice", "Engineering"), ("Bob", "Marketing"),
    ("Carol", "Engineering"), ("Dave", "HR"),
    ("Eve", "Marketing"),
]
records.sort(key=lambda x: x[1])  # sort by dept first!
for dept, group in itertools.groupby(records, key=lambda x: x[1]):
    names = [r[0] for r in group]
    print(f"{dept}: {names}")

# combinations for pair comparisons
items = ["Python", "Go", "Rust", "Java"]
print("\\nAll pairs:")
for a, b in itertools.combinations(items, 2):
    print(f"  {a} vs {b}")`
          },
          {
            id: "ce-7-2-2", title: "accumulate — Running Totals & Extremes",
            code: `import itertools
import operator

sales = [120, 300, 250, 80, 420, 150]

# Running total
running_sum = list(itertools.accumulate(sales))
print("Running total:", running_sum)

# Running maximum
running_max = list(itertools.accumulate(sales, max))
print("Running max:", running_max)

# Running product
factorials = list(itertools.accumulate(range(1, 8), operator.mul))
print("Factorials:", factorials)

# Pairwise differences (islice trick)
diffs = [b - a for a, b in zip(sales, sales[1:])]
print("Daily change:", diffs)`
          }
        ],
        playground: {
          title: "itertools Playground",
          description: "Use itertools to process a dataset of transactions.",
          starterCode: `import itertools

transactions = [
    ("2024-01-15", "Engineering", 5000),
    ("2024-01-20", "Marketing",   2000),
    ("2024-02-01", "Engineering", 8000),
    ("2024-02-10", "HR",          1500),
    ("2024-02-15", "Marketing",   3000),
    ("2024-03-01", "Engineering", 4500),
    ("2024-03-15", "HR",          2000),
]

# Group by month
def get_month(t): return t[0][:7]  # "YYYY-MM"

by_month = {}
for month, group in itertools.groupby(sorted(transactions, key=get_month), key=get_month):
    by_month[month] = list(group)

print("=== Monthly Summary ===")
for month, txns in by_month.items():
    total = sum(t[2] for t in txns)
    print(f"  {month}: \${total:,} across {len(txns)} transactions")

# All department pairs
depts = sorted(set(t[1] for t in transactions))
print("\\nDepartment pairs:")
for a, b in itertools.combinations(depts, 2):
    print(f"  {a} & {b}")`
        },
        exercises: [
          {
            id: "exe-7-2-1", title: "Cartesian Product for Test Cases", difficulty: "easy",
            description: "Use itertools.product to generate all test combinations for a function that takes browser, OS, and resolution parameters.",
            starterCode: `import itertools

browsers     = ["Chrome", "Firefox", "Safari"]
os_list      = ["Windows", "Mac", "Linux"]
resolutions  = ["1080p", "4K"]

# Generate all test combinations and count them
def generate_test_matrix(browsers, os_list, resolutions):
    pass

tests = generate_test_matrix(browsers, os_list, resolutions)
print(f"Total tests: {len(tests)}")
print("First 3 tests:")
for t in tests[:3]:
    print(" ", t)`,
            solution: `import itertools

browsers     = ["Chrome", "Firefox", "Safari"]
os_list      = ["Windows", "Mac", "Linux"]
resolutions  = ["1080p", "4K"]

def generate_test_matrix(browsers, os_list, resolutions):
    return list(itertools.product(browsers, os_list, resolutions))

tests = generate_test_matrix(browsers, os_list, resolutions)
print(f"Total tests: {len(tests)}")
print("First 3 tests:")
for t in tests[:3]:
    print(" ", t)`,
            solutionExplanation: "itertools.product computes the Cartesian product — every combination of one item from each iterable. 3 browsers × 3 OS × 2 resolutions = 18 total test cases."
          }
        ],
        interviewQuestions: [
          { q: "What does itertools.groupby require about its input?", a: "The input MUST be sorted by the grouping key first. groupby only groups consecutive elements with the same key — it doesn't collect all matching elements from the entire sequence. Forgetting to sort is the most common groupby bug." },
          { q: "How is itertools.chain.from_iterable different from itertools.chain?", a: "chain(*iterables) takes multiple iterables as separate arguments. chain.from_iterable(iterable_of_iterables) takes a single iterable that yields iterables. Use from_iterable when your iterable of iterables is itself computed lazily or when you have many sublists (avoids unpacking a huge list with *)." }
        ]
      },

      {
        id: "lesson-7-3", title: "functools — Memoisation & Partial Application", duration: "25 min",
        content: `
<h2>functools — Tools for Higher-Order Functions</h2>

<h3>lru_cache — Memoisation in One Line</h3>
<pre><code>from functools import lru_cache

@lru_cache(maxsize=None)  # None = unlimited cache
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

print(fib(100))         # instant
print(fib.cache_info()) # CacheInfo(hits=98, misses=101, ...)</code></pre>

<p>Python 3.9+ added <code>@cache</code> as a shorthand for <code>@lru_cache(maxsize=None)</code>.</p>

<h3>partial — Pre-fill Arguments</h3>
<pre><code>from functools import partial

def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
cube   = partial(power, exp=3)

print(square(5))  # 25
print(cube(3))    # 27

# Useful with map
results = list(map(partial(power, exp=2), range(1, 6)))
print(results)  # [1, 4, 9, 16, 25]</code></pre>

<h3>reduce — Fold a Sequence</h3>
<pre><code>from functools import reduce

nums = [1, 2, 3, 4, 5]
total   = reduce(lambda a, b: a + b, nums)         # 15
product = reduce(lambda a, b: a * b, nums, 1)      # 120 (1 as initial value)
maximum = reduce(lambda a, b: a if a > b else b, nums)  # 5</code></pre>

<h3>total_ordering — Complete Comparison Protocol</h3>
<pre><code>from functools import total_ordering

@total_ordering
class Card:
    VALUES = "23456789TJQKA"
    def __init__(self, value):
        self.value = value
    def __eq__(self, other):
        return self.value == other.value
    def __lt__(self, other):
        return self.VALUES.index(self.value) < self.VALUES.index(other.value)

# total_ordering generates __gt__, __ge__, __le__ for free</code></pre>
`,
        codeExamples: [
          {
            id: "ce-7-3-1", title: "lru_cache for Expensive Computations",
            code: `from functools import lru_cache, cache
import time

# Without cache: exponential time
def fib_slow(n):
    if n < 2: return n
    return fib_slow(n-1) + fib_slow(n-2)

# With cache: linear time
@cache
def fib_fast(n):
    if n < 2: return n
    return fib_fast(n-1) + fib_fast(n-2)

# Timing comparison for n=35
t0 = time.perf_counter()
fib_slow(35)
slow_time = time.perf_counter() - t0

t0 = time.perf_counter()
fib_fast(35)
fast_time = time.perf_counter() - t0

print(f"Without cache: {slow_time:.3f}s")
print(f"With cache:    {fast_time:.6f}s")
print(f"Speedup: {slow_time/fast_time:.0f}x")
print(f"Cache info: {fib_fast.cache_info()}")`
          },
          {
            id: "ce-7-3-2", title: "partial for Configurable Validators",
            code: `from functools import partial

def is_between(value, low, high):
    return low <= value <= high

# Create specialised validators
is_percentage   = partial(is_between, low=0,   high=100)
is_valid_age    = partial(is_between, low=0,   high=150)
is_valid_temp_c = partial(is_between, low=-273, high=600)

tests = [
    (is_percentage,   75,  "percentage"),
    (is_percentage,   150, "percentage"),
    (is_valid_age,    25,  "age"),
    (is_valid_temp_c, -300,"temperature"),
]

for validator, value, label in tests:
    result = validator(value)
    print(f"{label}({value}): {'valid' if result else 'INVALID'}")`
          }
        ],
        playground: {
          title: "functools Playground",
          description: "Apply memoisation to a recursive algorithm and see the speedup.",
          starterCode: `from functools import cache
import time

# Coin change: minimum coins to make amount
# Using @cache for memoisation
@cache
def min_coins(amount, coins=(1, 5, 10, 25)):
    if amount == 0: return 0
    if amount < 0:  return float('inf')
    return 1 + min(min_coins(amount - c, coins) for c in coins)

# Test
for amount in [11, 30, 41, 99, 100]:
    result = min_coins(amount)
    print(f"Make {amount}¢: {result} coins")

print("Cache info:", min_coins.cache_info())`
        },
        exercises: [
          {
            id: "exe-7-3-1", title: "Memoised Fibonacci with Cache Stats", difficulty: "easy",
            description: "Use @lru_cache to implement Fibonacci. Count cache hits vs misses. Clear the cache and re-run to observe the difference.",
            starterCode: `from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

# Call fib(20) and print cache info
# Then clear the cache with fib.cache_clear()
# Call fib(20) again and compare cache info`,
            solution: `from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

print("fib(20):", fib(20))
print("Cache after first call:", fib.cache_info())

# Second call: everything is cached
fib(20)
print("Cache after second call:", fib.cache_info())

# Clear and redo
fib.cache_clear()
fib(20)
print("Cache after clear + recall:", fib.cache_info())`,
            solutionExplanation: "After the first call to fib(20), the cache has 21 misses (fib(0) through fib(20)) and hits for repeated sub-calls. The second call to fib(20) is a single cache hit. After cache_clear(), the counts reset."
          }
        ],
        interviewQuestions: [
          { q: "What is memoisation and when should you use @lru_cache?", a: "Memoisation caches the result of expensive function calls and returns the cached result on repeated calls with the same arguments. Use @lru_cache (or @cache) for: recursive algorithms with overlapping subproblems (Fibonacci, dynamic programming), expensive pure functions called repeatedly with the same args. Avoid it for functions with side effects or very large argument spaces." },
          { q: "What is functools.partial and how does it differ from a lambda?", a: "partial(func, *args, **kwargs) creates a new callable with some arguments pre-filled. Unlike lambda, partial preserves the original function's metadata (__name__, __doc__), works with keyword arguments naturally, and integrates correctly with tools like inspect. Use partial when partially applying a named function; use lambda for short throwaway transformations." }
        ]
      }
    ]  // end lessons for module 7
  },

  {
    id: 8, title: "Modules, Packages & Virtual Environments", icon: "📦", color: "#ffb300",
    difficulty: "beginner", duration: "2–3 hours",
    description: "How Python's import system works, how to structure packages, and professional virtual environment management.",
    lessons: [
      {
        id: "lesson-8-1", title: "Python's Import System", duration: "30 min",
        content: `
<h2>How Python Finds Modules</h2>
<p>When you write <code>import foo</code>, Python searches for <code>foo</code> in this order:</p>
<ol>
  <li><strong>sys.modules</strong> — already-imported modules (cached)</li>
  <li><strong>Built-in modules</strong> — compiled into the interpreter (e.g., <code>sys</code>, <code>os</code>)</li>
  <li><strong>sys.path</strong> — list of directories (script dir, PYTHONPATH, site-packages)</li>
</ol>

<h3>Import Forms</h3>
<pre><code>import os                      # full module name
import os.path                 # submodule
from os import path            # specific name
from os.path import join, exists  # multiple names
import numpy as np             # alias (convention)
from . import sibling          # relative import (inside package)
from ..utils import helper     # up one level, then utils</code></pre>

<h3>Package Structure</h3>
<pre><code>myproject/
├── mypackage/
│   ├── __init__.py      # makes it a package; can be empty
│   ├── core.py          # mypackage.core
│   ├── utils.py         # mypackage.utils
│   └── sub/
│       ├── __init__.py
│       └── parser.py    # mypackage.sub.parser
├── tests/
│   └── test_core.py
└── pyproject.toml</code></pre>

<h3>__init__.py — Controlling Your Package's API</h3>
<pre><code># mypackage/__init__.py
from .core import MyClass        # expose at top level
from .utils import helper_func

__all__ = ["MyClass", "helper_func"]  # what 'from pkg import *' exports

# Now users can do:
from mypackage import MyClass    # clean API
# instead of:
from mypackage.core import MyClass</code></pre>

<h3>Inspecting the Import System</h3>
<pre><code>import sys
print(sys.path)        # where Python looks for modules
print(sys.modules)     # all currently imported modules</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>if __name__ == '__main__'</strong><p>This guard is True only when the file is run directly (not imported). Always wrap your top-level script code in this block to make modules importable without side effects.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-8-1-1", title: "Module Inspection with sys",
            code: `import sys
import os
import json

# Show first 5 paths Python searches for modules
print("Python searches in:")
for p in sys.path[:5]:
    print(f"  {p or '(current dir)'}")

# How many modules are cached?
print(f"\\nCached modules: {len(sys.modules)}")

# Inspect a module's attributes
print(f"\\nos module location: {os.__file__}")
print(f"json module location: {json.__file__}")

# Check what a module exposes
public_attrs = [x for x in dir(os) if not x.startswith('_')]
print(f"\\nos public API has {len(public_attrs)} names")
print("First 10:", public_attrs[:10])`
          },
          {
            id: "ce-8-1-2", title: "if __name__ == '__main__'",
            code: `# This is a common pattern for making a module
# both importable AND runnable as a script

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def _run_demo():
    print("Calculator Demo")
    print(f"5 + 3 = {add(5, 3)}")
    print(f"10 - 4 = {subtract(10, 4)}")

# This block only runs when file is executed directly
# NOT when it's imported
if __name__ == "__main__":
    _run_demo()

# Test it: both work
print(add(2, 3))         # works when imported
_run_demo()              # also runs here since we called it`
          }
        ],
        playground: {
          title: "Module Playground",
          description: "Explore Python's built-in modules.",
          starterCode: `import os
import sys
import json
from pathlib import Path

# Explore the environment
print("Python version:", sys.version.split()[0])
print("Platform:", sys.platform)
print("CWD:", Path.cwd())

# JSON serialization
data = {
    "name": "Alice",
    "skills": ["Python", "SQL", "Docker"],
    "experience": 5,
    "remote": True
}

json_str = json.dumps(data, indent=2)
print("\\nJSON:")
print(json_str)

# Round-trip
loaded = json.loads(json_str)
print("\\nLoaded back:", loaded["name"], loaded["skills"])`
        },
        exercises: [
          {
            id: "exe-8-1-1", title: "Module Inspector", difficulty: "easy",
            description: "Write a function that takes a module name (as a string), imports it dynamically, and returns a dict with: name, file location, number of public attributes, and docstring.",
            starterCode: `import importlib

def inspect_module(name):
    """Return a summary dict for the named module."""
    pass

print(inspect_module("os"))
print(inspect_module("json"))
print(inspect_module("math"))`,
            solution: `import importlib

def inspect_module(name):
    mod = importlib.import_module(name)
    public_attrs = [a for a in dir(mod) if not a.startswith('_')]
    return {
        "name": name,
        "file": getattr(mod, '__file__', 'built-in'),
        "public_attrs": len(public_attrs),
        "doc": (mod.__doc__ or "").strip().split("\\n")[0]
    }

for name in ["os", "json", "math"]:
    info = inspect_module(name)
    print(f"{info['name']:6}: {info['public_attrs']} attrs — {info['doc'][:60]}")`,
            solutionExplanation: "importlib.import_module(name) is the programmatic equivalent of 'import name'. We use getattr for __file__ because built-in modules don't have a file. The first line of __doc__ gives a quick summary."
          }
        ],
        interviewQuestions: [
          { q: "How does Python's import system work?", a: "When you import a module, Python first checks sys.modules (cache). If not cached, it searches sys.path directories in order: the script's directory, PYTHONPATH env var, and site-packages. It reads the .py file, compiles to .pyc (bytecode), executes it, and caches the module object in sys.modules. Subsequent imports of the same module return the cached version." },
          { q: "What is the purpose of __init__.py?", a: "__init__.py marks a directory as a Python package. It runs when the package is first imported. It's used to: (1) expose a clean public API with from .submodule import X, (2) set __all__ for wildcard imports, (3) run package initialization code. In Python 3.3+, 'namespace packages' don't need __init__.py, but regular packages still should have one." },
          { q: "What is the difference between absolute and relative imports?", a: "Absolute imports use the full path from the top-level package: 'from mypackage.utils import helper'. Relative imports use dots: 'from .utils import helper' (same package), 'from ..utils import helper' (parent package). Relative imports only work inside packages; they're shorter but can be confusing. PEP 8 recommends absolute imports for clarity." }
        ]
      },

      {
        id: "lesson-8-2", title: "The Standard Library Essentials", duration: "35 min",
        content: `
<h2>Standard Library Highlights</h2>
<p>Python's "batteries included" standard library means you rarely need third-party packages for common tasks. Here are the most interview-relevant modules.</p>

<h3>pathlib — Modern File System Navigation</h3>
<pre><code>from pathlib import Path

p = Path("/home/user/project")
src = p / "src" / "main.py"   # / operator joins paths

src.suffix       # ".py"
src.stem         # "main"
src.parent       # Path("/home/user/project/src")
src.name         # "main.py"
src.exists()     # bool
src.is_file()    # bool
src.stat().st_size  # file size in bytes

# List all Python files recursively
for f in p.rglob("*.py"):
    print(f.relative_to(p))</code></pre>

<h3>datetime — Date and Time</h3>
<pre><code>from datetime import datetime, timedelta, date

now   = datetime.now()
today = date.today()

# Formatting
now.strftime("%Y-%m-%d %H:%M:%S")   # "2024-03-15 14:30:00"

# Parsing
dt = datetime.strptime("2024-03-15", "%Y-%m-%d")

# Arithmetic
tomorrow = today + timedelta(days=1)
deadline = now + timedelta(hours=48)
diff = datetime(2025, 1, 1) - now     # timedelta object
print(f"{diff.days} days until 2025")</code></pre>

<h3>re — Regular Expressions</h3>
<pre><code>import re

# Find all email addresses
text = "Contact alice@example.com or bob@company.org"
emails = re.findall(r'[\\w.+-]+@[\\w-]+\\.[\\w.]+', text)

# Named groups
pattern = r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})'
m = re.search(pattern, "Date: 2024-03-15")
if m:
    print(m.group("year"), m.group("month"))</code></pre>

<h3>collections — Data Structure Extras</h3>
<pre><code>from collections import Counter, defaultdict, deque, OrderedDict, namedtuple

Counter("aabbbcc")           # Counter({'b':3,'a':2,'c':2})
defaultdict(int)             # dict that returns 0 for missing keys
deque(maxlen=5)              # circular buffer
namedtuple("Point", "x y")  # lightweight record</code></pre>

<h3>os & sys</h3>
<pre><code>import os, sys

os.getcwd()              # current directory
os.environ["HOME"]       # env variable
os.path.join("a","b")   # a/b  (use pathlib instead)
sys.argv                 # command-line arguments
sys.exit(0)              # exit with code</code></pre>
`,
        codeExamples: [
          {
            id: "ce-8-2-1", title: "pathlib + datetime Real World",
            code: `from pathlib import Path
from datetime import datetime, timedelta

# Simulate working with file metadata
def describe_path(p_str):
    p = Path(p_str)
    print(f"Path:     {p}")
    print(f"Name:     {p.name}")
    print(f"Stem:     {p.stem}")
    print(f"Suffix:   {p.suffix}")
    print(f"Parent:   {p.parent}")
    print(f"Parts:    {p.parts}")
    print(f"Absolute: {p.is_absolute()}")

describe_path("/home/user/projects/main.py")
describe_path("data/2024/report.csv")

# Date arithmetic
from datetime import date
today = date.today()
dates = [today + timedelta(days=i*7) for i in range(5)]
print("\\nNext 5 Mondays (ish):")
for d in dates:
    print(f"  {d.strftime('%A, %B %d %Y')}")`
          },
          {
            id: "ce-8-2-2", title: "re — Practical Patterns",
            code: `import re

# Extract structured data from log line
log = '2024-03-15 14:23:01 ERROR user_service.py:127 - Database timeout after 5000ms'

pattern = r'(?P<date>\\d{4}-\\d{2}-\\d{2}) (?P<time>[\\d:]+) (?P<level>\\w+) (?P<file>[\\w.]+):(?P<line>\\d+)'
m = re.match(pattern, log)
if m:
    print("Log components:")
    for k, v in m.groupdict().items():
        print(f"  {k:6}: {v}")

# Validate and extract emails
emails = [
    "alice@company.com", "not-an-email", "bob+filter@gmail.com",
    "bad@", "carol@uni.edu"
]
EMAIL_RE = re.compile(r'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$')
for e in emails:
    valid = bool(EMAIL_RE.match(e))
    print(f"  {e:25} {'✓ valid' if valid else '✗ invalid'}")`
          }
        ],
        playground: {
          title: "Standard Library Playground",
          description: "Use collections.Counter to analyse text.",
          starterCode: `from collections import Counter
import re

text = """
Python is a high-level programming language. Python is known for its
simplicity and readability. Python supports multiple programming paradigms
including procedural programming and object-oriented programming.
Python is widely used in web development, data science, and automation.
"""

# Word frequency analysis
words = re.findall(r'\\b[a-zA-Z]+\\b', text.lower())
freq = Counter(words)

print(f"Total words: {len(words)}")
print(f"Unique words: {len(freq)}")
print("\\nTop 10 words:")
for word, count in freq.most_common(10):
    bar = "█" * count
    print(f"  {word:15} {count:3} {bar}")

# Words that appear exactly once
hapax = [w for w, c in freq.items() if c == 1]
print(f"\\nWords appearing once: {len(hapax)}")
print("Examples:", sorted(hapax)[:5])`
        },
        exercises: [
          {
            id: "exe-8-2-1", title: "Log Parser", difficulty: "medium",
            description: "Parse log lines matching the format: 'YYYY-MM-DD HH:MM:SS LEVEL message'. Return a summary dict with counts per level and list of ERROR messages.",
            starterCode: `import re
from collections import Counter

def parse_logs(log_text):
    """Return {'counts': Counter, 'errors': [str]}"""
    pass

logs = """
2024-01-15 09:00:01 INFO  Server started on port 8080
2024-01-15 09:00:02 DEBUG Config loaded from /etc/app.conf
2024-01-15 09:01:15 ERROR Database connection failed: timeout
2024-01-15 09:01:30 WARNING Retrying connection (attempt 2)
2024-01-15 09:02:00 INFO  Connection established
2024-01-15 09:05:22 ERROR Disk space below 10%
"""

result = parse_logs(logs)
print("Level counts:", dict(result["counts"]))
print("Errors:", result["errors"])`,
            solution: `import re
from collections import Counter

def parse_logs(log_text):
    pattern = re.compile(
        r'(?P<date>\\d{4}-\\d{2}-\\d{2}) (?P<time>[\\d:]+) (?P<level>\\w+)\\s+(?P<msg>.*)'
    )
    counts = Counter()
    errors = []
    for line in log_text.strip().splitlines():
        m = pattern.match(line.strip())
        if m:
            level = m.group("level")
            msg   = m.group("msg")
            counts[level] += 1
            if level == "ERROR":
                errors.append(msg)
    return {"counts": counts, "errors": errors}`,
            solutionExplanation: "We compile the regex once outside the loop for efficiency. Named groups make extraction clear. We accumulate errors and counts separately, returning them as a dict."
          }
        ],
        interviewQuestions: [
          { q: "When should you use pathlib instead of os.path?", a: "Always prefer pathlib for new code. pathlib provides an object-oriented API that's more readable (p / 'subdir' / 'file.txt' vs os.path.join), provides useful attributes (stem, suffix, parent), and works consistently cross-platform. os.path is still valid but pathlib is the modern idiom since Python 3.4." },
          { q: "What's the difference between re.match() and re.search()?", a: "re.match() only matches at the BEGINNING of the string. re.search() scans the entire string for a match. To match anywhere with match(), use .* at the start. In practice, use re.search() when you don't know where the pattern is; use re.match() or re.fullmatch() for structured inputs like log lines or config values." }
        ]
      },

      {
        id: "lesson-8-3", title: "Virtual Environments & Dependencies", duration: "25 min",
        content: `
<h2>Virtual Environments</h2>
<p>A virtual environment is an isolated Python installation with its own packages. It prevents conflicts between projects that need different versions of the same library.</p>

<h3>Creating and Using venvs</h3>
<pre><code># Create
python -m venv .venv

# Activate
source .venv/bin/activate    # Linux/Mac
.venv\\Scripts\\activate.bat  # Windows

# Now 'pip install' goes into the venv
pip install flask==3.0.0
pip install requests pandas

# Deactivate
deactivate</code></pre>

<h3>Managing Dependencies</h3>
<pre><code># Freeze exact versions
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt

# requirements.txt format
flask>=3.0.0          # minimum version
requests==2.31.0      # exact version (pin)
pandas~=2.0           # compatible release (~= 2.0.x)</code></pre>

<h3>pyproject.toml — Modern Packaging</h3>
<pre><code>[tool.poetry.dependencies]
python = "^3.11"
flask = "^3.0"
sqlalchemy = "^2.0"

[tool.poetry.dev-dependencies]
pytest = "^7.0"
black = "^23.0"</code></pre>

<h3>Environment Variables with python-dotenv</h3>
<pre><code># .env file (never commit to git!)
DATABASE_URL=postgresql://localhost/mydb
SECRET_KEY=super-secret-key-here
DEBUG=true

# In Python:
from dotenv import load_dotenv
import os

load_dotenv()           # loads .env into os.environ
db = os.environ["DATABASE_URL"]
debug = os.getenv("DEBUG", "false").lower() == "true"</code></pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Never commit secrets</strong><p>Add <code>.env</code> to <code>.gitignore</code>. Use <code>.env.example</code> with placeholder values to document which variables are needed.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-8-3-1", title: "Working with os.environ",
            code: `import os

# Read environment variables
home    = os.environ.get("HOME", "/tmp")
path    = os.environ.get("PATH", "")
user    = os.environ.get("USER", "unknown")

print(f"Home: {home}")
print(f"User: {user}")
print(f"PATH entries: {len(path.split(':'))}")

# Set temporarily
os.environ["MY_VAR"] = "hello"
print("MY_VAR:", os.environ["MY_VAR"])

# Check if variable exists
if "MY_VAR" in os.environ:
    print("Variable is set")

# Config pattern — read with defaults
def get_config():
    return {
        "host": os.getenv("DB_HOST", "localhost"),
        "port": int(os.getenv("DB_PORT", "5432")),
        "debug": os.getenv("DEBUG", "false").lower() == "true",
        "workers": int(os.getenv("WORKERS", "4")),
    }

config = get_config()
for k, v in config.items():
    print(f"  {k}: {v!r}")`
          }
        ],
        playground: {
          title: "Dependency Parsing Playground",
          description: "Parse a requirements.txt and categorise dependencies.",
          starterCode: `import re

requirements_txt = """
flask>=3.0.0
requests==2.31.0
sqlalchemy~=2.0
pandas>=2.0,<3.0
numpy
# Dev dependencies
pytest>=7.0
black==23.7.0
mypy
"""

def parse_requirements(text):
    results = {"pinned": [], "flexible": [], "unpinned": [], "comments": []}
    for line in text.strip().splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith("#"):
            results["comments"].append(line)
        elif "==" in line:
            results["pinned"].append(line)
        elif any(op in line for op in [">=", "~=", "<", ">"]):
            results["flexible"].append(line)
        else:
            results["unpinned"].append(line)
    return results

result = parse_requirements(requirements_txt)
for category, items in result.items():
    if items:
        print(f"\\n{category.upper()}:")
        for item in items:
            print(f"  {item}")`
        },
        exercises: [
          {
            id: "exe-8-3-1", title: "Config Loader", difficulty: "easy",
            description: "Write a Config class that loads settings from environment variables with type coercion (int, bool, list) and fallback defaults.",
            starterCode: `import os

class Config:
    def __init__(self):
        # Load with proper types and defaults
        self.debug = self._bool("DEBUG", False)
        self.port  = self._int("PORT", 8080)
        self.workers = self._int("WORKERS", 4)
        self.allowed_hosts = self._list("ALLOWED_HOSTS", ["localhost"])
        self.secret_key = os.getenv("SECRET_KEY", "dev-secret")

    def _bool(self, key, default):
        pass  # "true"/"1"/"yes" → True, else False

    def _int(self, key, default):
        pass  # parse int or return default

    def _list(self, key, default):
        pass  # comma-separated string → list

cfg = Config()
print(f"debug={cfg.debug}, port={cfg.port}, workers={cfg.workers}")
print(f"hosts={cfg.allowed_hosts}")`,
            solution: `import os

class Config:
    def __init__(self):
        self.debug = self._bool("DEBUG", False)
        self.port  = self._int("PORT", 8080)
        self.workers = self._int("WORKERS", 4)
        self.allowed_hosts = self._list("ALLOWED_HOSTS", ["localhost"])
        self.secret_key = os.getenv("SECRET_KEY", "dev-secret")

    def _bool(self, key, default):
        val = os.getenv(key)
        if val is None: return default
        return val.lower() in ("true", "1", "yes")

    def _int(self, key, default):
        val = os.getenv(key)
        if val is None: return default
        try: return int(val)
        except ValueError: return default

    def _list(self, key, default):
        val = os.getenv(key)
        if val is None: return default
        return [x.strip() for x in val.split(",") if x.strip()]

cfg = Config()
print(f"debug={cfg.debug}, port={cfg.port}, workers={cfg.workers}")
print(f"hosts={cfg.allowed_hosts}")`,
            solutionExplanation: "Each type-coercion helper returns the default when the env var is absent, and parses it with appropriate logic when present. The bool helper checks common truthy string values. The list helper splits on commas and strips whitespace."
          }
        ],
        interviewQuestions: [
          { q: "Why should you never install packages globally?", a: "Global installations affect all Python projects on the machine. If project A needs django==3.2 and project B needs django==4.2, they conflict. Virtual environments give each project its own isolated site-packages, preventing version conflicts. They also make projects reproducible (pin exact versions in requirements.txt)." },
          { q: "What is the difference between requirements.txt and pyproject.toml?", a: "requirements.txt is the traditional format — a flat list of packages with version specifiers, often pip freeze output with exact pinned versions. pyproject.toml (PEP 518/621) is the modern standard — specifies build system, dependencies with version ranges (for libraries), and dev dependencies separately. pyproject.toml is preferred for new projects; requirements.txt is still common for applications." }
        ]
      }
    ]  // end lessons for module 8
  },

  {
    id: 9, title: "File Handling & Context Managers", icon: "📁", color: "#7c6af7",
    difficulty: "intermediate", duration: "2–3 hours",
    description: "Reading and writing files, CSV and JSON, and implementing custom context managers with __enter__/__exit__.",
    lessons: [
      {
        id: "lesson-9-1", title: "File I/O — Reading & Writing Files", duration: "30 min",
        content: `
<h2>File I/O in Python</h2>
<p>Always use the <code>with</code> statement for files. It guarantees the file is closed even if an exception occurs.</p>

<h3>Opening Files</h3>
<pre><code>with open("data.txt", "r") as f:      # read text (default)
    content = f.read()                 # entire file as string

with open("data.txt", "r") as f:
    lines = f.readlines()              # list of lines (with \\n)

with open("data.txt", "r") as f:
    for line in f:                     # memory-efficient line-by-line
        process(line.rstrip())

with open("output.txt", "w") as f:    # write (creates or overwrites)
    f.write("Hello\\n")
    f.writelines(["a\\n", "b\\n"])

with open("log.txt", "a") as f:       # append
    f.write("New entry\\n")</code></pre>

<h3>File Modes</h3>
<table style="width:100%;border-collapse:collapse;font-size:.87rem;">
<tr style="background:var(--bg-surface)"><th style="padding:.4rem .6rem;text-align:left">Mode</th><th style="padding:.4rem .6rem;text-align:left">Meaning</th></tr>
<tr><td><code>r</code></td><td>Read (default). FileNotFoundError if file missing.</td></tr>
<tr style="background:var(--bg-surface)"><td><code>w</code></td><td>Write. Creates or truncates.</td></tr>
<tr><td><code>a</code></td><td>Append. Creates or appends to end.</td></tr>
<tr style="background:var(--bg-surface)"><td><code>x</code></td><td>Exclusive create. FileExistsError if exists.</td></tr>
<tr><td><code>rb / wb</code></td><td>Binary read/write. No encoding/newline translation.</td></tr>
<tr style="background:var(--bg-surface)"><td><code>r+</code></td><td>Read and write (file must exist).</td></tr>
</table>

<h3>Encoding</h3>
<pre><code># Always specify encoding for portability
with open("data.txt", "r", encoding="utf-8") as f:
    text = f.read()

# For files with unknown encoding
with open("data.txt", "r", encoding="utf-8", errors="replace") as f:
    text = f.read()</code></pre>

<h3>pathlib for File Operations</h3>
<pre><code>from pathlib import Path

p = Path("data.txt")
text   = p.read_text(encoding="utf-8")    # one-liner read
p.write_text("content", encoding="utf-8") # one-liner write
exists = p.exists()</code></pre>
`,
        codeExamples: [
          {
            id: "ce-9-1-1", title: "Word Count — Memory-Efficient Processing",
            code: `from collections import Counter
import io

# Simulate a "large file" with StringIO
sample_text = """
Python is an interpreted high-level programming language.
Python's design philosophy emphasizes code readability.
Python features a dynamic type system and garbage collection.
It supports multiple programming paradigms including structured
programming and object-oriented programming.
"""

# Process line by line (works for files larger than RAM)
word_counts = Counter()
line_count = 0

with io.StringIO(sample_text) as f:
    for line in f:
        words = line.lower().split()
        word_counts.update(words)
        line_count += 1

print(f"Lines: {line_count}")
print(f"Unique words: {len(word_counts)}")
print("\\nTop 10 words:")
for word, count in word_counts.most_common(10):
    print(f"  {word:15} {count}")`
          }
        ],
        playground: {
          title: "File I/O Playground",
          description: "Practice reading and processing text data.",
          starterCode: `import io

# Simulate file content
csv_content = """name,score,grade
Alice,92,A
Bob,78,C
Carol,85,B
Dave,95,A
Eve,71,C
"""

# Parse CSV manually (without the csv module)
def parse_csv(text):
    lines = text.strip().splitlines()
    headers = lines[0].split(",")
    records = []
    for line in lines[1:]:
        values = line.split(",")
        records.append(dict(zip(headers, values)))
    return records

records = parse_csv(csv_content)

# Compute statistics
scores = [int(r["score"]) for r in records]
print(f"Students: {len(records)}")
print(f"Average score: {sum(scores)/len(scores):.1f}")
print(f"Highest: {max(scores)}, Lowest: {min(scores)}")
print("\\nGrade distribution:")
from collections import Counter
print(Counter(r["grade"] for r in records))`
        },
        exercises: [
          {
            id: "exe-9-1-1", title: "File Statistics", difficulty: "easy",
            description: "Write a function that reads text from a string (simulating a file) and returns a dict with: line_count, word_count, char_count, and avg_line_length.",
            starterCode: `import io

def file_stats(text):
    """Return statistics about the text content."""
    pass

sample = """Hello World
Python is great
This is line three
Short
A slightly longer fourth line"""

stats = file_stats(sample)
print(stats)
# Expected: {'line_count': 5, 'word_count': 15, ...}`,
            solution: `import io

def file_stats(text):
    lines = text.splitlines()
    words = text.split()
    return {
        "line_count": len(lines),
        "word_count": len(words),
        "char_count": len(text),
        "avg_line_length": round(sum(len(l) for l in lines) / len(lines), 1) if lines else 0
    }

sample = """Hello World
Python is great
This is line three
Short
A slightly longer fourth line"""

print(file_stats(sample))`,
            solutionExplanation: "splitlines() handles all line ending styles (\\n, \\r\\n, \\r). split() without arguments splits on any whitespace and ignores leading/trailing whitespace, making it a reliable word counter."
          }
        ],
        interviewQuestions: [
          { q: "Why should you always use 'with open()' instead of open() + close()?", a: "The 'with' statement (context manager) guarantees the file is closed even if an exception occurs inside the block. Without it, if an exception is raised before f.close(), the file handle leaks — potentially causing data corruption (write buffers not flushed) or hitting OS file descriptor limits. Always use 'with'." },
          { q: "What is the difference between read() and readline() and iterating the file?", a: "read() loads the ENTIRE file into memory — dangerous for large files. readline() reads one line at a time. Iterating the file object (for line in f) is the most memory-efficient: it reads the file lazily in buffered chunks, processing one line at a time without loading the whole file into memory." }
        ]
      },

      {
        id: "lesson-9-2", title: "CSV & JSON — Structured Data Formats", duration: "30 min",
        content: `
<h2>CSV — Comma-Separated Values</h2>
<pre><code>import csv

# Writing CSV
with open("data.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "age", "city"])     # header
    writer.writerows([
        ["Alice", 30, "NYC"],
        ["Bob", 25, "London"],
    ])

# Reading CSV
with open("data.csv", newline="", encoding="utf-8") as f:
    reader = csv.reader(f)
    header = next(reader)       # skip header
    for row in reader:
        print(row)              # list of strings

# DictReader — rows as dicts (much more convenient)
with open("data.csv", newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        print(row["name"], row["age"])</code></pre>

<h2>JSON — JavaScript Object Notation</h2>
<pre><code>import json

# Python → JSON string
data = {"name": "Alice", "scores": [90, 85], "active": True}
text = json.dumps(data)                  # compact
text = json.dumps(data, indent=2)        # pretty-printed

# JSON string → Python
obj = json.loads('{"x": 1, "y": 2}')

# File I/O
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)         # write to file

with open("data.json") as f:
    loaded = json.load(f)                # read from file</code></pre>

<h3>JSON Type Mapping</h3>
<table style="width:100%;border-collapse:collapse;font-size:.87rem;">
<tr style="background:var(--bg-surface)"><th style="padding:.4rem .6rem;text-align:left">Python</th><th style="padding:.4rem .6rem;text-align:left">JSON</th></tr>
<tr><td><code>dict</code></td><td><code>object {}</code></td></tr>
<tr style="background:var(--bg-surface)"><td><code>list, tuple</code></td><td><code>array []</code></td></tr>
<tr><td><code>str</code></td><td><code>string ""</code></td></tr>
<tr style="background:var(--bg-surface)"><td><code>int, float</code></td><td><code>number</code></td></tr>
<tr><td><code>True, False</code></td><td><code>true, false</code></td></tr>
<tr style="background:var(--bg-surface)"><td><code>None</code></td><td><code>null</code></td></tr>
</table>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Custom JSON serialization</strong><p>If your object isn't JSON-serializable (e.g., datetime), use <code>default=str</code> for a quick fix, or write a custom encoder by subclassing <code>json.JSONEncoder</code>.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-9-2-1", title: "CSV Processing with DictReader",
            code: `import csv
import io
from collections import defaultdict

# Simulated CSV data
csv_data = """employee,department,salary,years
Alice,Engineering,95000,5
Bob,Marketing,72000,3
Carol,Engineering,110000,8
Dave,HR,65000,2
Eve,Engineering,88000,4
Frank,Marketing,78000,6
"""

# Parse with DictReader
reader = csv.DictReader(io.StringIO(csv_data))
employees = list(reader)

# Analysis
by_dept = defaultdict(list)
for e in employees:
    by_dept[e["department"]].append(float(e["salary"]))

print("Department salary analysis:")
for dept, salaries in sorted(by_dept.items()):
    avg = sum(salaries) / len(salaries)
    print(f"  {dept:12}: avg=\${avg:,.0f}  n={len(salaries)}")`
          },
          {
            id: "ce-9-2-2", title: "JSON with Custom Types",
            code: `import json
from datetime import datetime, date

# Problem: datetime is not JSON-serializable
data = {
    "event": "Python Conference",
    "date": date(2024, 9, 15),       # not serializable!
    "registered": datetime.now(),     # not serializable!
}

# Solution 1: default=str (quick fix)
text = json.dumps(data, default=str, indent=2)
print(text)

# Solution 2: custom encoder (more control)
class SmartEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (date, datetime)):
            return obj.isoformat()
        return super().default(obj)

text2 = json.dumps(data, cls=SmartEncoder, indent=2)
print(text2)

# Round-trip with parsing
loaded = json.loads(text2)
# Re-parse the date string
event_date = date.fromisoformat(loaded["date"])
print(f"\\nEvent: {loaded['event']} on {event_date}")`
          }
        ],
        playground: {
          title: "Data Formats Playground",
          description: "Process a JSON dataset to produce a CSV report.",
          starterCode: `import json
import csv
import io

# JSON dataset
json_data = """[
  {"name": "Alice", "dept": "Engineering", "salary": 95000, "skills": ["Python", "Go"]},
  {"name": "Bob",   "dept": "Marketing",   "salary": 72000, "skills": ["Excel", "SQL"]},
  {"name": "Carol", "dept": "Engineering", "salary": 110000,"skills": ["Python", "Rust", "C++"]},
  {"name": "Dave",  "dept": "HR",          "salary": 65000, "skills": ["Communication"]},
  {"name": "Eve",   "dept": "Engineering", "salary": 88000, "skills": ["Python", "JS"]}
]"""

employees = json.loads(json_data)

# Write as CSV (flatten skills to comma-joined string)
output = io.StringIO()
fieldnames = ["name", "dept", "salary", "skill_count", "skills"]
writer = csv.DictWriter(output, fieldnames=fieldnames)
writer.writeheader()
for emp in sorted(employees, key=lambda e: e["salary"], reverse=True):
    writer.writerow({
        "name": emp["name"],
        "dept": emp["dept"],
        "salary": emp["salary"],
        "skill_count": len(emp["skills"]),
        "skills": "|".join(emp["skills"])
    })

print(output.getvalue())`
        },
        exercises: [
          {
            id: "exe-9-2-1", title: "JSON Config Merger", difficulty: "medium",
            description: "Write a function that merges two JSON configs. Nested dicts are merged recursively. Values in the second config override the first.",
            starterCode: `import json

def deep_merge(base, override):
    """Recursively merge override into base. Returns new dict."""
    pass

base = {"db": {"host": "localhost", "port": 5432}, "debug": False, "workers": 4}
override = {"db": {"port": 5433, "name": "prod"}, "debug": True}

result = deep_merge(base, override)
print(json.dumps(result, indent=2))
# Expected: db.host stays "localhost", port becomes 5433, name added`,
            solution: `import json

def deep_merge(base, override):
    result = dict(base)
    for key, val in override.items():
        if key in result and isinstance(result[key], dict) and isinstance(val, dict):
            result[key] = deep_merge(result[key], val)
        else:
            result[key] = val
    return result

base = {"db": {"host": "localhost", "port": 5432}, "debug": False, "workers": 4}
override = {"db": {"port": 5433, "name": "prod"}, "debug": True}
result = deep_merge(base, override)
print(json.dumps(result, indent=2))`,
            solutionExplanation: "We start with a copy of base (dict(base) is a shallow copy). For each key in override: if both sides have dict values, we recurse; otherwise override wins. This handles arbitrarily deep nesting."
          }
        ],
        interviewQuestions: [
          { q: "What is the difference between json.loads() and json.load()?", a: "json.loads() parses a JSON string in memory. json.load() reads from a file object. Similarly, json.dumps() serializes to a string, json.dump() writes to a file. The 's' stands for 'string'." },
          { q: "Why use csv.DictReader instead of csv.reader?", a: "DictReader gives each row as an OrderedDict (or regular dict in Python 3.8+) with column names as keys. This is far more readable (row['salary'] vs row[2]) and robust to column reordering. Use csv.reader only when you need the raw list or the CSV has no header row." }
        ]
      },

      {
        id: "lesson-9-3", title: "Context Managers — The 'with' Protocol", duration: "30 min",
        content: `
<h2>Context Managers</h2>
<p>A context manager wraps a block of code with setup and teardown logic. The <code>with</code> statement guarantees cleanup even if an exception occurs.</p>

<h3>The Protocol: __enter__ and __exit__</h3>
<pre><code>class ManagedResource:
    def __enter__(self):
        print("Acquiring resource")
        return self          # value bound to 'as' variable

    def __exit__(self, exc_type, exc_val, traceback):
        print("Releasing resource")
        # exc_type is None if no exception occurred
        if exc_type is not None:
            print(f"Exception: {exc_type.__name__}: {exc_val}")
        return False         # False: don't suppress exceptions
                             # True:  suppress exceptions

with ManagedResource() as r:
    print("Inside block")
    # even if error here, __exit__ always runs</code></pre>

<h3>@contextmanager — The Easy Way</h3>
<pre><code>from contextlib import contextmanager

@contextmanager
def timer(label=""):
    import time
    start = time.perf_counter()
    try:
        yield              # code inside 'with' runs here
    finally:               # guaranteed cleanup
        elapsed = time.perf_counter() - start
        print(f"{label}: {elapsed:.4f}s")

with timer("Sorting"):
    data = sorted(range(1_000_000, 0, -1))</code></pre>

<h3>contextlib Utilities</h3>
<pre><code>from contextlib import suppress, nullcontext, ExitStack

# Suppress specific exceptions
with suppress(FileNotFoundError):
    os.remove("maybe_exists.txt")   # no error if missing

# Conditional context manager
def process(debug=False):
    ctx = timer("Debug") if debug else nullcontext()
    with ctx:
        do_work()

# ExitStack — dynamic number of context managers
with ExitStack() as stack:
    files = [stack.enter_context(open(f)) for f in file_list]</code></pre>
`,
        codeExamples: [
          {
            id: "ce-9-3-1", title: "Custom Context Manager — Database Transaction",
            code: `from contextlib import contextmanager

# Simulated database connection
class FakeDB:
    def __init__(self):
        self.data = {}
        self._pending = {}

    def set(self, key, val):
        self._pending[key] = val

    def commit(self):
        self.data.update(self._pending)
        self._pending.clear()
        print("  Committed!")

    def rollback(self):
        self._pending.clear()
        print("  Rolled back!")

db = FakeDB()

@contextmanager
def transaction(db):
    print("BEGIN")
    try:
        yield db
        db.commit()
    except Exception as e:
        db.rollback()
        raise  # re-raise after rollback

# Successful transaction
with transaction(db) as conn:
    conn.set("user:1", "Alice")
    conn.set("user:2", "Bob")
print("After commit:", db.data)

# Failed transaction
try:
    with transaction(db) as conn:
        conn.set("user:3", "Carol")
        raise ValueError("Something went wrong!")
except ValueError:
    pass
print("After rollback:", db.data)`
          },
          {
            id: "ce-9-3-2", title: "Timer & Error Handling Context Managers",
            code: `from contextlib import contextmanager, suppress
import time

@contextmanager
def timer(label=""):
    start = time.perf_counter()
    try:
        yield
    finally:
        elapsed = time.perf_counter() - start
        print(f"{label}: {elapsed*1000:.2f}ms")

@contextmanager
def catch_and_log(exc_types=(Exception,)):
    try:
        yield
    except exc_types as e:
        print(f"[CAUGHT] {type(e).__name__}: {e}")

# Use them
with timer("Sort 100k items"):
    sorted(range(100000, 0, -1))

with catch_and_log((ValueError, TypeError)):
    int("not a number")

# suppress from contextlib
with suppress(ZeroDivisionError):
    x = 1 / 0   # silently ignored
print("Survived ZeroDivisionError")`
          }
        ],
        playground: {
          title: "Context Manager Playground",
          description: "Build a retry context manager that re-runs the block on failure.",
          starterCode: `from contextlib import contextmanager
import random
import time

@contextmanager
def retry(max_attempts=3, delay=0.1, exceptions=(Exception,)):
    """Retry the with-block on exception up to max_attempts times."""
    for attempt in range(1, max_attempts + 1):
        try:
            yield attempt   # expose attempt number
            break           # success — exit loop
        except exceptions as e:
            if attempt == max_attempts:
                print(f"All {max_attempts} attempts failed: {e}")
                raise
            print(f"Attempt {attempt} failed: {e}. Retrying in {delay}s...")
            time.sleep(delay)

# Simulate a flaky operation
def flaky_operation():
    if random.random() < 0.7:   # 70% chance of failure
        raise ConnectionError("Network timeout")
    return "Success!"

random.seed(42)
try:
    with retry(max_attempts=5, delay=0.01) as attempt:
        print(f"Attempt #{attempt}")
        result = flaky_operation()
        print(f"Result: {result}")
except ConnectionError:
    print("Operation failed after all retries")`
        },
        exercises: [
          {
            id: "exe-9-3-1", title: "Tempfile Context Manager", difficulty: "medium",
            description: "Write a context manager that creates a temporary file, yields its path, and deletes it when the block exits (even on error).",
            starterCode: `from contextlib import contextmanager
import os
import tempfile

@contextmanager
def temp_file(suffix=".tmp", content=None):
    """Create a temp file, yield its path, delete on exit."""
    pass

# Test: file exists inside block, deleted after
with temp_file(suffix=".txt", content="Hello") as path:
    print(f"File exists: {os.path.exists(path)}")
    print(f"Content: {open(path).read()}")
    print(f"Path: {path}")

print(f"File deleted: {not os.path.exists(path)}")`,
            solution: `from contextlib import contextmanager
import os
import tempfile

@contextmanager
def temp_file(suffix=".tmp", content=None):
    fd, path = tempfile.mkstemp(suffix=suffix)
    try:
        if content is not None:
            with os.fdopen(fd, "w") as f:
                f.write(content)
        else:
            os.close(fd)
        yield path
    finally:
        if os.path.exists(path):
            os.remove(path)`,
            solutionExplanation: "tempfile.mkstemp creates a file and returns (fd, path). We write content if given, then yield the path. The finally block runs on exit (even if an exception occurs) and removes the file."
          }
        ],
        interviewQuestions: [
          { q: "How does the 'with' statement work internally?", a: "Python calls __enter__() at the start of the 'with' block and binds its return value to the 'as' variable. At the end — or if an exception occurs — Python calls __exit__(exc_type, exc_val, traceback). If __exit__ returns True, the exception is suppressed; if False (or None), it propagates. The @contextmanager decorator implements this protocol using a generator." },
          { q: "What does the __exit__ method's return value mean?", a: "Returning True from __exit__ suppresses the exception — the code after the 'with' block continues as if nothing happened. Returning False (or None, or any falsy value) lets the exception propagate normally. Use True suppression only for specific, expected exceptions; never suppress all exceptions blindly." }
        ]
      }
    ]  // end lessons for module 9
  },

  {
    id: 10, title: "Exception Handling & Logging", icon: "🛡️", color: "#ff5757",
    difficulty: "intermediate", duration: "2–3 hours",
    description: "Production-grade error handling, custom exceptions, and structured logging.",
    lessons: [
      {
        id: "lesson-10-1", title: "Exception Handling Fundamentals", duration: "35 min",
        content: `
<h2>Exceptions in Python</h2>
<p>Exceptions are events that disrupt normal program flow. Python uses exceptions for both errors <em>and</em> control flow (e.g., <code>StopIteration</code>, <code>KeyboardInterrupt</code>).</p>

<h3>try / except / else / finally</h3>
<pre><code>try:
    result = risky_operation()
except ValueError as e:          # specific exception
    print(f"Bad value: {e}")
except (TypeError, KeyError):    # multiple exceptions
    print("Type or key error")
except Exception as e:           # catch-all (use sparingly)
    print(f"Unexpected: {e}")
else:
    # Runs ONLY if no exception occurred
    print(f"Success: {result}")
finally:
    # ALWAYS runs — cleanup here
    close_connection()</code></pre>

<h3>Exception Hierarchy</h3>
<pre><code>BaseException
├── SystemExit           # sys.exit()
├── KeyboardInterrupt    # Ctrl+C
├── GeneratorExit
└── Exception            # Base for "normal" exceptions
    ├── ValueError       # wrong value type/range
    ├── TypeError        # wrong type
    ├── KeyError         # missing dict key
    ├── IndexError       # list index out of range
    ├── AttributeError   # missing attribute
    ├── FileNotFoundError
    ├── ZeroDivisionError
    ├── StopIteration
    └── ... (many more)</code></pre>

<h3>raise and raise from</h3>
<pre><code># Re-raise the current exception
try:
    do_something()
except Exception:
    log_error()
    raise                         # re-raises same exception

# Raise a different exception — chaining
try:
    value = int(user_input)
except ValueError as e:
    raise ValueError(f"Invalid input: {user_input!r}") from e
    # "raise X from Y" sets __cause__ — the original exception is preserved</code></pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Never use bare except!</strong><p><code>except:</code> catches EVERYTHING including <code>SystemExit</code> and <code>KeyboardInterrupt</code>. Always name at least <code>except Exception</code>. Better: catch only the specific exceptions you can handle.</p></div>
</div>

<h3>else in try blocks</h3>
<p>The <code>else</code> clause runs only if the <code>try</code> block completed without raising an exception. It's cleaner than putting success-path code in the <code>try</code> block (which would catch unintended exceptions):</p>
<pre><code># Without else — bad: success_path might raise unintended exceptions
try:
    data = fetch_data()
    process(data)          # if this raises, it's caught above!
except NetworkError:
    handle_error()

# With else — good:
try:
    data = fetch_data()
except NetworkError:
    handle_error()
else:
    process(data)          # only runs on success, not caught above</code></pre>
`,
        codeExamples: [
          {
            id: "ce-10-1-1", title: "Proper Exception Handling Patterns",
            code: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

def parse_int(s):
    try:
        return int(s)
    except (ValueError, TypeError) as e:
        raise ValueError(f"Cannot parse {s!r} as int") from e

def read_user(data, user_id):
    try:
        return data[user_id]
    except KeyError:
        raise KeyError(f"User {user_id!r} not found") from None
        # 'from None' suppresses the original KeyError from the traceback

# Test each
print(safe_divide(10, 2))   # 5.0
print(safe_divide(10, 0))   # None

try:
    parse_int("abc")
except ValueError as e:
    print(f"Error: {e}")
    print(f"Caused by: {e.__cause__}")

users = {"alice": {"age": 30}}
try:
    read_user(users, "bob")
except KeyError as e:
    print(f"Not found: {e}")`
          },
          {
            id: "ce-10-1-2", title: "try / else / finally Patterns",
            code: `import random

def fetch_data(succeed=True):
    """Simulate a network call that might fail."""
    if not succeed:
        raise ConnectionError("Network timeout")
    return {"status": "ok", "data": [1, 2, 3]}

def process_safely(succeed=True):
    connection_opened = False
    try:
        print("Opening connection...")
        connection_opened = True
        data = fetch_data(succeed)
    except ConnectionError as e:
        print(f"  ERROR: {e}")
        return None
    else:
        # Runs ONLY on success — not caught by above except
        result = sum(data["data"])
        print(f"  Processed: sum = {result}")
        return result
    finally:
        # ALWAYS runs
        if connection_opened:
            print("  Closing connection.")

print("=== Success case ===")
process_safely(succeed=True)

print("\\n=== Failure case ===")
process_safely(succeed=False)`
          }
        ],
        playground: {
          title: "Exception Handling Playground",
          description: "Build a robust input validator with clear error messages.",
          starterCode: `class ValidationError(Exception):
    pass

def validate_user_input(data):
    """Validate a user dict. Raise ValidationError for bad input."""
    errors = []

    # Check required fields
    for field in ["name", "age", "email"]:
        if field not in data:
            errors.append(f"Missing field: {field}")

    if errors:
        raise ValidationError(f"Validation failed: {'; '.join(errors)}")

    # Validate types and ranges
    if not isinstance(data["name"], str) or not data["name"].strip():
        errors.append("name must be a non-empty string")

    try:
        age = int(data["age"])
        if not 0 <= age <= 150:
            errors.append(f"age {age} is out of range [0, 150]")
    except (ValueError, TypeError):
        errors.append(f"age must be an integer, got {data['age']!r}")

    if "@" not in str(data.get("email", "")):
        errors.append("email must contain @")

    if errors:
        raise ValidationError(f"Validation failed: {'; '.join(errors)}")

    return True

# Test cases
test_cases = [
    {"name": "Alice", "age": 30, "email": "alice@example.com"},  # valid
    {"name": "", "age": "abc", "email": "bad"},                  # multiple errors
    {"age": 25, "email": "bob@example.com"},                     # missing name
]

for i, data in enumerate(test_cases, 1):
    try:
        validate_user_input(data)
        print(f"Test {i}: VALID")
    except ValidationError as e:
        print(f"Test {i}: {e}")`
        },
        exercises: [
          {
            id: "exe-10-1-1", title: "Retry Decorator", difficulty: "medium",
            description: "Write a @retry(max_attempts, exceptions) decorator that re-calls the function on specified exceptions.",
            starterCode: `import time
import functools

def retry(max_attempts=3, exceptions=(Exception,), delay=0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            pass  # implement retry logic
        return wrapper
    return decorator

# Test
import random
random.seed(42)

@retry(max_attempts=4, exceptions=(ConnectionError,), delay=0)
def unreliable_api():
    if random.random() < 0.7:
        raise ConnectionError("timeout")
    return "data"

try:
    result = unreliable_api()
    print("Got:", result)
except ConnectionError:
    print("All attempts failed")`,
            solution: `import time
import functools

def retry(max_attempts=3, exceptions=(Exception,), delay=0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    if attempt == max_attempts:
                        raise
                    if delay:
                        time.sleep(delay)
            # unreachable but satisfies type checkers
        return wrapper
    return decorator

import random
random.seed(42)

@retry(max_attempts=4, exceptions=(ConnectionError,), delay=0)
def unreliable_api():
    if random.random() < 0.7:
        raise ConnectionError("timeout")
    return "data"

try:
    result = unreliable_api()
    print("Got:", result)
except ConnectionError:
    print("All attempts failed")`,
            solutionExplanation: "The decorator factory returns a decorator that returns a wrapper. The wrapper loops up to max_attempts times. On the last attempt, it re-raises instead of swallowing. functools.wraps preserves the original function's __name__ and __doc__."
          }
        ],
        interviewQuestions: [
          { q: "Why should you always catch specific exceptions?", a: "Catching broad exceptions (bare 'except' or 'except Exception') hides bugs. You might accidentally suppress a ValueError that indicates a logic error, or catch a MemoryError you can't recover from. Catch only the exceptions you know how to handle. If you must use a catch-all, log the exception and re-raise it." },
          { q: "What is the difference between 'raise X from Y' and 'raise X from None'?", a: "'raise X from Y' sets X.__cause__ = Y and displays a chained traceback ('The above exception was the direct cause...'). It's used when translating low-level errors to high-level ones while preserving the original cause. 'raise X from None' explicitly hides the original exception (__suppress_context__ = True), giving a clean traceback without the low-level noise." },
          { q: "When does the 'else' clause of a try block run?", a: "The else clause runs only if the try block completed without any exception. It's NOT the same as putting code at the end of the try block — code in the try block would be caught by the except clauses, but code in the else block would not. Use else for code that should only run on success and shouldn't be considered part of the 'risky' section." }
        ]
      },

      {
        id: "lesson-10-2", title: "Custom Exceptions", duration: "25 min",
        content: `
<h2>Custom Exception Hierarchy</h2>
<p>Define your own exceptions to create clear, specific error messages and enable fine-grained error handling by callers.</p>

<h3>Basic Custom Exception</h3>
<pre><code>class AppError(Exception):
    """Base class for all application exceptions."""
    pass

class ValidationError(AppError):
    """Input failed validation."""
    pass

class DatabaseError(AppError):
    """Database operation failed."""
    pass

class NotFoundError(DatabaseError):
    """Record not found."""
    pass

# Callers can catch at any level
try:
    user = get_user(id)
except NotFoundError:
    return 404          # specific case
except DatabaseError:
    return 503          # any DB error
except AppError:
    return 500          # any app error</code></pre>

<h3>Rich Exception Classes</h3>
<pre><code>class ValidationError(Exception):
    def __init__(self, field, message, value=None):
        self.field   = field
        self.message = message
        self.value   = value
        super().__init__(f"{field}: {message}" + (f" (got {value!r})" if value else ""))

    def __str__(self):
        return self.args[0]

try:
    raise ValidationError("age", "must be between 0 and 150", value=200)
except ValidationError as e:
    print(e)          # "age: must be between 0 and 150 (got 200)"
    print(e.field)    # "age"
    print(e.value)    # 200</code></pre>

<h3>Exception Groups (Python 3.11+)</h3>
<pre><code># Python 3.11+ — collect multiple errors before raising
errors = []
for item in items:
    try:
        validate(item)
    except ValidationError as e:
        errors.append(e)

if errors:
    raise ExceptionGroup("Validation failed", errors)</code></pre>
`,
        codeExamples: [
          {
            id: "ce-10-2-1", title: "Rich Exception Hierarchy",
            code: `class ShopError(Exception):
    """Base for all shop errors."""
    pass

class ProductError(ShopError):
    def __init__(self, product_id, msg):
        self.product_id = product_id
        super().__init__(f"Product {product_id}: {msg}")

class OutOfStockError(ProductError):
    def __init__(self, product_id, requested, available):
        self.requested = requested
        self.available = available
        super().__init__(product_id, f"requested {requested} but only {available} in stock")

class PriceError(ProductError):
    pass

# Simulated shop
inventory = {"A001": {"name": "Laptop", "stock": 3, "price": 999.99}}

def purchase(product_id, qty):
    if product_id not in inventory:
        raise ProductError(product_id, "not found")
    item = inventory[product_id]
    if qty > item["stock"]:
        raise OutOfStockError(product_id, qty, item["stock"])
    inventory[product_id]["stock"] -= qty
    return qty * item["price"]

# Test
for product_id, qty in [("A001", 2), ("A001", 5), ("Z999", 1)]:
    try:
        total = purchase(product_id, qty)
        print(f"Purchased {qty}x {product_id}: \${total:.2f}")
    except OutOfStockError as e:
        print(f"Stock error: {e}")
    except ProductError as e:
        print(f"Product error: {e}")`
          }
        ],
        playground: {
          title: "Custom Exception Playground",
          description: "Build a bank account with a rich exception hierarchy.",
          starterCode: `class BankError(Exception):
    pass

class InsufficientFundsError(BankError):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount  = amount
        super().__init__(
            f"Cannot withdraw \${amount:.2f}: balance is only \${balance:.2f}"
        )

class NegativeAmountError(BankError):
    def __init__(self, amount):
        super().__init__(f"Amount must be positive, got \${amount:.2f}")

class AccountFrozenError(BankError):
    pass

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner   = owner
        self._balance = float(balance)
        self._frozen  = False

    def freeze(self):
        self._frozen = True

    def deposit(self, amount):
        if self._frozen:
            raise AccountFrozenError(f"{self.owner}'s account is frozen")
        if amount <= 0:
            raise NegativeAmountError(amount)
        self._balance += amount

    def withdraw(self, amount):
        if self._frozen:
            raise AccountFrozenError(f"{self.owner}'s account is frozen")
        if amount <= 0:
            raise NegativeAmountError(amount)
        if amount > self._balance:
            raise InsufficientFundsError(self._balance, amount)
        self._balance -= amount

    @property
    def balance(self):
        return self._balance

acc = BankAccount("Alice", 500)
acc.deposit(200)
print(f"Balance: \${acc.balance:.2f}")

try:
    acc.withdraw(1000)
except InsufficientFundsError as e:
    print(f"Error: {e}")

acc.freeze()
try:
    acc.deposit(100)
except AccountFrozenError as e:
    print(f"Frozen: {e}")`
        },
        exercises: [
          {
            id: "exe-10-2-1", title: "Result Type", difficulty: "medium",
            description: "Instead of raising exceptions, implement a Result class that wraps either a success value or an error. Inspired by Rust's Result type.",
            starterCode: `class Result:
    """Represents either Ok(value) or Err(error)."""
    def __init__(self, value=None, error=None):
        self._value = value
        self._error = error

    @classmethod
    def ok(cls, value): pass

    @classmethod
    def err(cls, error): pass

    def is_ok(self): pass
    def unwrap(self): pass         # raise if error, else return value
    def unwrap_or(self, default): pass  # return default if error

# Test
def safe_divide(a, b):
    if b == 0:
        return Result.err(ZeroDivisionError("division by zero"))
    return Result.ok(a / b)

r1 = safe_divide(10, 2)
r2 = safe_divide(10, 0)

print(r1.is_ok(), r1.unwrap())
print(r2.is_ok(), r2.unwrap_or("undefined"))`,
            solution: `class Result:
    def __init__(self, value=None, error=None):
        self._value = value
        self._error = error

    @classmethod
    def ok(cls, value):
        return cls(value=value)

    @classmethod
    def err(cls, error):
        return cls(error=error)

    def is_ok(self):
        return self._error is None

    def unwrap(self):
        if not self.is_ok():
            raise self._error
        return self._value

    def unwrap_or(self, default):
        return self._value if self.is_ok() else default

def safe_divide(a, b):
    if b == 0:
        return Result.err(ZeroDivisionError("division by zero"))
    return Result.ok(a / b)

r1 = safe_divide(10, 2)
r2 = safe_divide(10, 0)
print(r1.is_ok(), r1.unwrap())
print(r2.is_ok(), r2.unwrap_or("undefined"))`,
            solutionExplanation: "The Result pattern avoids exceptions for expected failures. The caller checks is_ok() before calling unwrap(). unwrap_or() provides a default for the error case. This forces callers to handle errors explicitly rather than relying on try/except."
          }
        ],
        interviewQuestions: [
          { q: "How do you design a custom exception hierarchy?", a: "Start with a base exception class for your application (AppError). Create specific subclasses for different error categories (ValidationError, DatabaseError, NetworkError). Add relevant attributes to exceptions (field name for ValidationError, status code for HTTPError). This lets callers choose how specific their exception handling is — catch AppError to catch everything, or NotFoundError for one specific case." },
          { q: "What information should a custom exception contain?", a: "A good exception should have: a clear message that explains what went wrong and where, relevant context attributes (the value that was invalid, the field name, the resource ID), a chain to the original exception if it was re-raised from another (use 'raise X from Y'). Avoid putting mutable state in exceptions — they might be logged or re-raised later." }
        ]
      },

      {
        id: "lesson-10-3", title: "Logging — Production-Grade Observability", duration: "30 min",
        content: `
<h2>Why Logging > print()</h2>
<p>Print statements are for scripts. Production applications need structured logging with levels, timestamps, handlers (file, console, cloud), and filtering — all of which the <code>logging</code> module provides.</p>

<h3>Log Levels (in order of severity)</h3>
<pre><code>import logging

logging.debug("Detailed diagnostic info")   # DEBUG=10
logging.info("Normal operation event")       # INFO=20
logging.warning("Unexpected but recoverable") # WARNING=30
logging.error("Serious problem")             # ERROR=40
logging.critical("System may crash")         # CRITICAL=50</code></pre>

<h3>Basic Configuration</h3>
<pre><code>import logging

logging.basicConfig(
    level=logging.INFO,              # show INFO and above
    format="%(asctime)s %(name)s %(levelname)s %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    handlers=[
        logging.FileHandler("app.log"),   # to file
        logging.StreamHandler(),          # to console
    ]
)

logger = logging.getLogger(__name__)  # use module name as logger name
logger.info("Application started")</code></pre>

<h3>Logger Hierarchy</h3>
<pre><code># Loggers form a hierarchy using dots
root    = logging.getLogger()           # root logger
parent  = logging.getLogger("myapp")
child   = logging.getLogger("myapp.db")  # inherits from "myapp"
# child → parent → root (messages propagate up)</code></pre>

<h3>Structured Logging with extra</h3>
<pre><code>logger.info("User logged in", extra={"user_id": 42, "ip": "1.2.3.4"})

# Or use JSON logging (with python-json-logger)
# Produces: {"timestamp": "...", "level": "INFO", "user_id": 42, ...}</code></pre>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Never log sensitive data</strong><p>Do NOT log passwords, tokens, credit card numbers, SSNs, or PII. Log user IDs, not user data. Mask secrets in log messages: <code>"token: ***"</code> not the actual token value.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-10-3-1", title: "Proper Logging Setup",
            code: `import logging
import sys

# Create a module-level logger
logger = logging.getLogger("myapp.payment")

# Configure handlers
def setup_logging(level=logging.INFO):
    fmt = logging.Formatter(
        "%(asctime)s | %(name)s | %(levelname)s | %(message)s",
        datefmt="%H:%M:%S"
    )
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(fmt)

    root = logging.getLogger()
    root.addHandler(handler)
    root.setLevel(level)

setup_logging(logging.DEBUG)

# Use different levels appropriately
def process_payment(user_id, amount):
    logger.debug("process_payment called: user=%s amount=%.2f", user_id, amount)

    try:
        if amount <= 0:
            raise ValueError(f"Invalid amount: {amount}")

        logger.info("Processing payment: user=%s amount=%.2f", user_id, amount)

        # Simulate payment
        if amount > 10000:
            logger.warning("Large transaction flagged: user=%s amount=%.2f",
                          user_id, amount)

        logger.info("Payment successful: user=%s", user_id)
        return {"status": "ok", "amount": amount}

    except ValueError as e:
        logger.error("Payment validation failed: %s", e)
        raise
    except Exception as e:
        logger.critical("Unexpected payment error: %s", e, exc_info=True)
        raise

process_payment(101, 250.00)
process_payment(102, 15000.00)`
          }
        ],
        playground: {
          title: "Logging Playground",
          description: "Add structured logging to a web request handler simulation.",
          starterCode: `import logging
import time
import random
from contextlib import contextmanager

# Setup
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s %(levelname)-8s %(name)s: %(message)s",
    datefmt="%H:%M:%S"
)
logger = logging.getLogger("webserver")

@contextmanager
def log_request(method, path, request_id=None):
    """Context manager that logs request start, end, and duration."""
    rid = request_id or random.randint(1000, 9999)
    start = time.perf_counter()
    logger.info("[%s] %s %s - started", rid, method, path)
    try:
        yield rid
        duration_ms = (time.perf_counter() - start) * 1000
        logger.info("[%s] %s %s - completed in %.1fms", rid, method, path, duration_ms)
    except Exception as e:
        duration_ms = (time.perf_counter() - start) * 1000
        logger.error("[%s] %s %s - FAILED after %.1fms: %s",
                     rid, method, path, duration_ms, e)
        raise

# Simulate some requests
with log_request("GET", "/api/users"):
    time.sleep(0.01)  # simulate DB query

with log_request("POST", "/api/orders"):
    time.sleep(0.02)

try:
    with log_request("DELETE", "/api/admin"):
        raise PermissionError("Admin access required")
except PermissionError:
    pass  # already logged`
        },
        exercises: [
          {
            id: "exe-10-3-1", title: "Logging Decorator", difficulty: "medium",
            description: "Write a @log_calls decorator that logs function entry (args), exit (return value), and any exceptions, at DEBUG level.",
            starterCode: `import logging
import functools

logging.basicConfig(level=logging.DEBUG,
    format="%(levelname)s %(name)s: %(message)s")

def log_calls(logger=None):
    def decorator(func):
        log = logger or logging.getLogger(func.__module__)
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            pass  # log entry, call, log exit or exception
        return wrapper
    return decorator

@log_calls()
def add(a, b):
    return a + b

@log_calls()
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("can't divide by zero")
    return a / b

add(3, 4)
try:
    divide(10, 0)
except ZeroDivisionError:
    pass`,
            solution: `import logging
import functools

logging.basicConfig(level=logging.DEBUG,
    format="%(levelname)s %(name)s: %(message)s")

def log_calls(logger=None):
    def decorator(func):
        log = logger or logging.getLogger(func.__module__)
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            all_args = [repr(a) for a in args] + [f"{k}={v!r}" for k,v in kwargs.items()]
            log.debug("Calling %s(%s)", func.__name__, ", ".join(all_args))
            try:
                result = func(*args, **kwargs)
                log.debug("%s returned %r", func.__name__, result)
                return result
            except Exception as e:
                log.error("%s raised %s: %s", func.__name__, type(e).__name__, e)
                raise
        return wrapper
    return decorator

@log_calls()
def add(a, b):
    return a + b

@log_calls()
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("can't divide by zero")
    return a / b

add(3, 4)
try:
    divide(10, 0)
except ZeroDivisionError:
    pass`,
            solutionExplanation: "The decorator factory takes an optional logger. The inner decorator captures the function. The wrapper logs args at DEBUG, then calls the function. On success it logs the return value; on exception it logs the error and re-raises."
          }
        ],
        interviewQuestions: [
          { q: "Why use logging.getLogger(__name__) instead of a hardcoded name?", a: "Using __name__ gives each module its own logger named after the module (e.g., 'myapp.db', 'myapp.api'). This lets you configure logging granularly — suppress DEBUG from 'myapp.db' while keeping it for 'myapp.api'. It also makes logs traceable to their source without extra effort." },
          { q: "What is the difference between logging.warning() and logger.warning()?", a: "logging.warning() uses the root logger. logger.warning() uses a specific named logger. The root logger is convenient for scripts; named loggers are better for libraries and production code because they're configurable by the calling application. Libraries should NEVER configure handlers — that's the application's responsibility." },
          { q: "What are the logging levels and when should you use each?", a: "DEBUG: detailed diagnostic info, only in dev (step by step trace). INFO: normal events (server started, user logged in, job completed). WARNING: unexpected but the app can continue (disk space low, deprecated API used). ERROR: something failed but the app keeps running (request failed, DB timeout). CRITICAL: the app may crash or data may be corrupted (OOM, disk full)." }
        ]
      }
    ]  // end lessons for module 10
  },


  {
    id: 11, title: "Iterators & Generators", icon: "🔄", color: "#00d4ff",
    difficulty: "intermediate", duration: "3–4 hours",
    description: "One of the most interview-relevant topics: iterators, generators, yield, send(), and memory-efficient data pipelines.",
    outline: true,
    topics: [
      { title: "Iterators Protocol", subtopics: ["__iter__ and __next__", "StopIteration", "iter() and next() builtins", "Building a custom iterator class"] },
      { title: "Generators", subtopics: ["yield keyword — lazy evaluation", "Generator functions vs generator expressions", "Memory efficiency — process GB files line by line", "Infinite sequences with generators", "yield from — delegate to sub-generator"] },
      { title: "Advanced Generator Features", subtopics: ["send() — two-way communication", "Generator pipelines — Unix-pipe style", "Coroutines basics", "return value in generators"] }
    ],
    keyExamples: [
      { title: "Generator vs List — Memory", code: `import sys

# List — stores ALL values
squares_list = [x**2 for x in range(100000)]
print(f"List size: {sys.getsizeof(squares_list):,} bytes")

# Generator — stores only the current frame
squares_gen = (x**2 for x in range(100000))
print(f"Generator size: {sys.getsizeof(squares_gen)} bytes")

# Infinite generator
def count_up(start=0):
    n = start
    while True:
        yield n
        n += 1

counter = count_up(10)
print([next(counter) for _ in range(5)])  # [10,11,12,13,14]

# File processing — handles files larger than RAM
def read_large_file(path):
    with open(path) as f:
        for line in f:            # each line is yielded
            yield line.strip()
# for line in read_large_file("huge.log"): process(line)` }
    ],
    interviewFocus: [
      "What is the difference between an iterator and an iterable?",
      "What does yield do?",
      "How are generators more memory efficient?",
      "What is yield from?",
      "Implement range() as a generator"
    ]
  },

  {
    id: 12, title: "Decorators & Advanced Context Managers", icon: "🎨", color: "#9d8fff",
    difficulty: "advanced", duration: "3–4 hours",
    description: "Write, stack, and parameterize decorators. Build context managers. Understand @property deeply.",
    outline: true,
    topics: [
      { title: "Function Decorators", subtopics: ["What is a decorator — syntactic sugar for wrapping", "Writing a basic decorator using closures", "functools.wraps — preserving metadata", "Stacking decorators", "Parameterized decorators (decorator factories)"] },
      { title: "Class Decorators", subtopics: ["__call__ for callable class decorators", "Class-based vs function-based decorators", "Decorators with state"] },
      { title: "Common Built-in Decorators", subtopics: ["@property, @setter, @deleter", "@staticmethod, @classmethod", "@functools.lru_cache, @cache", "@dataclass"] }
    ],
    keyExamples: [
      { title: "Complete Decorator Patterns", code: `import functools, time

def retry(times=3, delay=0):
    """Retry decorator with configurable attempts."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, times+1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == times:
                        raise
                    print(f"Attempt {attempt} failed: {e}. Retrying...")
                    if delay: time.sleep(delay)
        return wrapper
    return decorator

@retry(times=3)
def unstable_request(url):
    import random
    if random.random() < 0.6:
        raise ConnectionError("Network error")
    return f"Success: {url}"

try:
    print(unstable_request("https://api.example.com"))
except ConnectionError as e:
    print(f"All attempts failed: {e}")` }
    ],
    interviewFocus: [
      "How do decorators work under the hood?",
      "Why is functools.wraps important?",
      "Write a timing decorator from scratch",
      "What is a parameterized decorator?",
      "What is @property and why use it?"
    ]
  },

  {
    id: 13, title: "Python Internals", icon: "🔬", color: "#00c48c",
    difficulty: "advanced", duration: "3–4 hours",
    description: "CPython internals: GIL, memory management, bytecode, reference counting, and Python performance.",
    outline: true,
    topics: [
      { title: "CPython Memory Management", subtopics: ["Reference counting — how objects are freed", "Cyclic garbage collector (gc module)", "Memory pools — pymalloc", "id() and object identity", "Memory profiling with tracemalloc"] },
      { title: "The GIL (Global Interpreter Lock)", subtopics: ["What the GIL is and why it exists", "How it affects threading (CPU-bound vs I/O-bound)", "GIL released during I/O and C extensions", "multiprocessing as GIL escape hatch", "GIL removal efforts (Python 3.13+)"] },
      { title: "Bytecode & dis Module", subtopics: ["How Python compiles to bytecode", "dis.dis() — inspect bytecode", "Code objects and their attributes", ".pyc files and __pycache__"] },
      { title: "Performance Patterns", subtopics: ["Profile first: cProfile, timeit", "Local variables are faster than globals", "Avoid attribute lookup in tight loops", "When to use PyPy, Cython, Numba"] }
    ],
    keyExamples: [
      { title: "GIL & Threading Implications", code: `import threading, time, multiprocessing

def cpu_task(n):
    """CPU-bound — GIL limits threading benefit."""
    count = 0
    for _ in range(n): count += 1
    return count

def io_task():
    """I/O-bound — threads work well (GIL released during I/O)."""
    time.sleep(0.1)

# Threading is good for I/O-bound
start = time.time()
threads = [threading.Thread(target=io_task) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
print(f"10 I/O tasks threaded: {time.time()-start:.2f}s")  # ~0.1s

# For CPU-bound, use multiprocessing (bypasses GIL)
# pool = multiprocessing.Pool()
# pool.map(cpu_task, [10**6]*4)` }
    ],
    interviewFocus: [
      "What is the GIL and why does Python have it?",
      "When does the GIL get released?",
      "What is reference counting?",
      "threading vs multiprocessing — when to use which?",
      "How does Python garbage collect circular references?"
    ]
  },

  {
    id: 14, title: "Useful Standard Library", icon: "🔧", color: "#ffb300",
    difficulty: "intermediate", duration: "4–5 hours",
    description: "The standard library modules you'll use in every real Python project.",
    outline: true,
    topics: [
      { title: "collections", subtopics: ["Counter, defaultdict, OrderedDict, deque, namedtuple, ChainMap"] },
      { title: "itertools & functools", subtopics: ["chain, islice, groupby, combinations, permutations, product, accumulate", "lru_cache, reduce, partial, wraps"] },
      { title: "datetime", subtopics: ["date, time, datetime objects", "timedelta arithmetic", "strftime/strptime formatting", "timezone-aware datetimes (pytz / zoneinfo)"] },
      { title: "json, csv, configparser", subtopics: ["Serialization and deserialization", "Handling custom types", "CSV reading/writing"] },
      { title: "os, pathlib, sys", subtopics: ["File system operations", "Environment variables", "Command-line arguments"] },
      { title: "re — Regular Expressions", subtopics: ["match, search, findall, sub, compile", "Groups and named groups", "Lookahead/lookbehind"] }
    ],
    keyExamples: [
      { title: "datetime & timedelta", code: `from datetime import datetime, timedelta, date

now = datetime.now()
print(f"Now: {now.strftime('%Y-%m-%d %H:%M:%S')}")

# Arithmetic
one_week  = now + timedelta(weeks=1)
last_year = now - timedelta(days=365)
print(f"One week later:  {one_week.date()}")
print(f"One year ago:    {last_year.date()}")

# Parse from string
dob = datetime.strptime("1999-08-15", "%Y-%m-%d")
age = (date.today() - dob.date()).days // 365
print(f"Age: {age} years")` }
    ],
    interviewFocus: ["Counter most_common()", "defaultdict vs regular dict", "datetime parsing and formatting", "pathlib vs os.path"]
  },

  {
    id: 15, title: "Testing with pytest", icon: "✅", color: "#00c48c",
    difficulty: "intermediate", duration: "3–4 hours",
    description: "Write, organize, and run tests using pytest. Mocking, fixtures, parametrize, and TDD basics.",
    outline: true,
    topics: [
      { title: "pytest Basics", subtopics: ["Writing test functions (test_ prefix)", "assert statements — pytest rewrites them", "Running tests: pytest, -v, -k, -x", "Test discovery rules"] },
      { title: "Fixtures", subtopics: ["@pytest.fixture — setup and teardown", "Fixture scope (function, class, module, session)", "conftest.py — shared fixtures", "yield fixtures for cleanup"] },
      { title: "Parametrize", subtopics: ["@pytest.mark.parametrize — data-driven tests", "Combining multiple parametrize decorators"] },
      { title: "Mocking", subtopics: ["unittest.mock — Mock, MagicMock, patch", "Mocking external APIs and DB calls", "Side effects and return values"] }
    ],
    keyExamples: [
      { title: "pytest with fixtures and parametrize", code: `import pytest

def add(a, b): return a + b
def divide(a, b):
    if b == 0: raise ZeroDivisionError("Cannot divide by zero")
    return a / b

@pytest.mark.parametrize("a,b,expected", [
    (1, 2, 3), (0, 5, 5), (-1, 1, 0), (100, -50, 50)
])
def test_add(a, b, expected):
    assert add(a, b) == expected

def test_divide_normal():
    assert divide(10, 2) == 5.0

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError, match="Cannot divide"):
        divide(5, 0)

# Run with: pytest -v test_file.py` }
    ],
    interviewFocus: ["What is a fixture?", "What is parametrize?", "How do you mock an external API call?", "TDD — write test first, then code"]
  },

  {
    id: 16, title: "Common Interview Algorithms in Python", icon: "🏆", color: "#7c6af7",
    difficulty: "advanced", duration: "6–8 hours",
    description: "Implement the most frequently tested algorithms using Pythonic patterns: sorting, searching, two-pointer, sliding window, and recursion.",
    outline: true,
    topics: [
      { title: "Sorting Algorithms", subtopics: ["Built-in sort (Timsort) — know it and use it", "Bubble, Selection, Insertion — know complexity", "Merge sort — recursion + divide-and-conquer", "Quick sort — pivot strategy", "Counting sort for bounded integers"] },
      { title: "Searching & Two Pointer", subtopics: ["Binary search (iterative and recursive)", "Two-pointer: two-sum, palindrome, container with most water", "Sliding window: max subarray, longest unique substring"] },
      { title: "Recursion & Dynamic Programming", subtopics: ["Recursion with memoization", "Fibonacci, factorial, Tower of Hanoi", "DP: coin change, knapsack, LCS"] },
      { title: "Graph & Tree Basics", subtopics: ["BFS and DFS in Python", "Representing graphs (adjacency list with defaultdict)", "Binary tree traversals", "Detecting cycles"] }
    ],
    keyExamples: [
      { title: "Two-Pointer & Sliding Window", code: `# Two Sum — O(n) with hash map
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]

# Maximum subarray (Kadane's algorithm)
def max_subarray(nums):
    max_sum = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        max_sum = max(max_sum, current)
    return max_sum

print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6` }
    ],
    interviewFocus: ["Two-sum with hash map O(n)", "Binary search template", "Sliding window pattern", "DFS/BFS implementations", "Merge sort complexity"]
  },

  {
    id: 17, title: "Bonus: Real-World Python Skills", icon: "🌐", color: "#ff5757",
    difficulty: "intermediate", duration: "4–5 hours",
    description: "APIs, web scraping, pandas basics, and automation scripts — the skills that make you immediately useful on day one of the job.",
    outline: true,
    topics: [
      { title: "Working with APIs (requests)", subtopics: ["HTTP methods: GET, POST, PUT, DELETE", "requests library — sessions, headers, auth", "Handling JSON responses", "Error handling: status codes, timeouts, retries", "Rate limiting and pagination"] },
      { title: "Web Scraping (BeautifulSoup)", subtopics: ["HTML structure basics", "BeautifulSoup selectors: find, find_all, CSS selectors", "Scraping ethically — robots.txt, rate limiting", "Selenium for JavaScript-heavy sites"] },
      { title: "Pandas Basics", subtopics: ["Series and DataFrame", "read_csv, read_json, read_excel", "Data cleaning: dropna, fillna, astype", "GroupBy aggregation", "Merging DataFrames"] },
      { title: "Automation Scripts", subtopics: ["File organization scripts", "Email sending (smtplib)", "Scheduling with schedule library", "CLI tools with argparse", "Shell automation with subprocess"] }
    ],
    keyExamples: [
      { title: "API Request with Error Handling", code: `import json

# Simulating an API response (requests not available in sandbox)
sample_response = {
    "users": [
        {"id": 1, "name": "Alice", "email": "alice@example.com", "active": True},
        {"id": 2, "name": "Bob",   "email": "bob@example.com",   "active": False},
        {"id": 3, "name": "Carol", "email": "carol@example.com", "active": True},
    ],
    "total": 3,
    "page": 1
}

def process_users(data):
    """Process API response and return active users."""
    users = data.get("users", [])
    active = [u for u in users if u.get("active")]
    return active

active_users = process_users(sample_response)
print(f"Active users ({len(active_users)}):")
for user in active_users:
    print(f"  [{user['id']}] {user['name']} — {user['email']}")` }
    ],
    interviewFocus: [
      "How do you handle HTTP errors in requests?",
      "What is the difference between GET and POST?",
      "How do you read a CSV with pandas?",
      "What is a GroupBy aggregation?",
      "How do you write a CLI tool in Python?"
    ]
  }

  ]  // end modules array
};   // end COURSE_DATA
