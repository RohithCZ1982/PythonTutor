'use strict';
const MODULES_1_5 = [
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MODULE 1 â€” Python Fundamentals & Setup
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 1,
    title: "Python Fundamentals & Setup",
    icon: "ðŸ",
    color: "#7c6af7",
    difficulty: "beginner",
    duration: "2â€“3 hours",
    description: "Start your Python journey: understand what Python is, set up your tools, and write your first real programs.",
    objectives: [
      "Understand what Python is and why it dominates the job market",
      "Explain the difference between compiled and interpreted languages",
      "Set up a professional Python development environment",
      "Write, run, and debug basic Python programs",
      "Use variables, print output, accept input, and apply arithmetic"
    ],
    lessons: [
      // â”€â”€ Lesson 1.1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "1.1",
        title: "What is Python & Why Learn It?",
        duration: "20 min",
        content: `
<p>Imagine explaining a recipe to someone. In Python you write it almost exactly like you'd speak English. In C++ you first need to declare every variable's type, allocate memory, manage pointers, and write 50 boilerplate lines before the oven is even warm.</p>

<p><strong>Python trades raw execution speed for developer speed</strong> â€” and for 90% of real-world engineering jobs, that trade is absolutely worth it. Google, Netflix, NASA, Instagram, Spotify, and thousands of startups rely on Python every day.</p>

<h2>A Quick History</h2>
<p>Python was created by <strong>Guido van Rossum</strong> starting in 1989. The name comes from the British comedy show <em>Monty Python's Flying Circus</em> â€” not the snake. Guido wanted it to feel fun and approachable.</p>
<p>We use <strong>Python 3 exclusively</strong> today. Python 2 reached end-of-life in January 2020. If you encounter Python 2 in legacy codebases, don't write new code in it.</p>

<h2>How Python Actually Works</h2>
<p>People say Python is "interpreted," but that's incomplete. Here is what really happens when you run <code>python script.py</code>:</p>
<ol>
  <li><strong>Compilation to bytecode:</strong> CPython compiles your source into platform-independent bytecode â€” stored in <code>__pycache__/*.pyc</code> files.</li>
  <li><strong>Interpretation:</strong> The Python Virtual Machine (PVM) reads and executes that bytecode instruction by instruction.</li>
</ol>
<p>Correct answer for interviews: <strong>"Python compiles to bytecode first, then the PVM interprets it â€” so it is both compiled and interpreted."</strong></p>

<div class="callout info">
  <span class="callout-icon">â„¹ï¸</span>
  <div class="callout-body">
    <strong>What is CPython?</strong>
    <p>CPython is the reference implementation, written in C. It is what you install from python.org. Alternatives: PyPy (JIT compiler, 5â€“10Ã— faster for loops), Jython (runs on the JVM), MicroPython (microcontrollers).</p>
  </div>
</div>

<h2>Python's Philosophy</h2>
<p>Run <code>import this</code> and you'll see 19 design principles called the Zen of Python. The ones that matter most for your career:</p>
<ul>
  <li><em>Readability counts</em> â€” code is read 10Ã— more than it is written.</li>
  <li><em>Explicit is better than implicit</em> â€” do not hide behavior in magic.</li>
  <li><em>Simple is better than complex</em> â€” resist the urge to over-engineer.</li>
  <li><em>There should be one obvious way to do it</em> â€” reduces decision fatigue on teams.</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">ðŸ’¡</span>
  <div class="callout-body">
    <strong>Career Tip</strong>
    <p>Senior engineers value readable code above almost everything else. Python's culture of clean, explicit code will make you a better engineer in any language you learn later.</p>
  </div>
</div>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Frequently Asked Â· Google, Amazon, Infosys, TCS, Wipro</div>
  <p>"Is Python interpreted or compiled?" â€” Most candidates say just "interpreted." Stand out by saying: <strong>"Python compiles source code to bytecode, then the Python Virtual Machine interprets that bytecode. So it is both."</strong></p>
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
            code: `# Count word frequencies â€” real-world NLP task in 3 lines
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
            description: "Always verify you are on Python 3. Python 2 is dead â€” never use it for new projects.",
            code: `import sys

print("Python version:", sys.version)
print("Version info:", sys.version_info)
print("Is Python 3?", sys.version_info.major == 3)

# Python 2 vs 3 key differences (for reference):
# Python 2: print "hello"       â†’ Python 3: print("hello")
# Python 2: 5 / 2 == 2         â†’ Python 3: 5 / 2 == 2.5
# Python 2: range() = list      â†’ Python 3: range() = lazy iterator
# Python 2: strings = bytes     â†’ Python 3: strings = unicode`
          }
        ],
        playground: {
          title: "ðŸŽ® Try It Yourself",
          description: "Modify this code and press Run. Explore Python's conciseness compared to other languages.",
          starterCode: `# Welcome to Python! Change values and press Run.

# Python reads almost like English
skills = ["Python", "Data Analysis", "Web Dev", "Automation", "ML"]

print("Python is used for:")
for skill in skills:
    print(f"  âœ“ {skill}")

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
            solutionExplanation: "print() outputs text to the console. Each call adds a new line by default. Strings can be wrapped in single or double quotes â€” both work in Python."
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
            solutionExplanation: "The string repetition operator `*` repeats a string. `'*' * 3` gives `'***'`. range(1, 6) generates 1, 2, 3, 4, 5 â€” exactly the number of stars per row."
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
            a: "Python is both. CPython (the standard implementation) first compiles source code to bytecode â€” a lower-level, platform-independent representation stored in .pyc files. Then the Python Virtual Machine (PVM) interprets that bytecode. So the accurate answer is: 'Python compiles to bytecode and interprets it at runtime.' This is also why subsequent runs are faster â€” the bytecode is cached."
          },
          {
            q: "What is CPython? How does it differ from Python?",
            a: "Python is the language specification. CPython is the standard implementation of that specification, written in C. When people say 'Python', they usually mean CPython. Other implementations include PyPy (uses JIT compilation and can be 5â€“10Ã— faster for CPU-bound loops), Jython (runs on the JVM, good for Java integration), IronPython (runs on .NET), and MicroPython (for microcontrollers). For most jobs you'll use CPython."
          },
          {
            q: "What are the key differences between Python 2 and Python 3?",
            a: "Key differences: (1) print is a statement in Python 2 but a function in Python 3. (2) Integer division: 5/2 = 2 in Python 2, 2.5 in Python 3. (3) All strings are Unicode in Python 3. (4) range() returns a list in Python 2, a lazy iterator in Python 3. (5) Python 2 reached end-of-life in January 2020 â€” never use it for new code."
          }
        ]
      },

      // â”€â”€ Lesson 1.2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "1.2",
        title: "Setting Up Your Python Environment",
        duration: "15 min",
        content: `
<h2>Installing Python</h2>
<p>Download Python 3 from <strong>python.org</strong> â€” always pick the latest stable 3.x release. During installation on Windows, check <strong>"Add Python to PATH"</strong> (critical â€” easy to miss).</p>
<p>Verify your installation by opening a terminal and running:</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">python --version   # or python3 --version on Mac/Linux</pre>

<h2>The Python REPL</h2>
<p>REPL stands for <strong>Read-Eval-Print Loop</strong>. It's an interactive shell where you type one Python expression and see the result instantly. Start it by typing <code>python</code> in your terminal. You'll see <code>>>></code> â€” that's your prompt.</p>
<p>The REPL is perfect for quick experiments, testing ideas, and exploring objects. Senior engineers use it constantly to prototype logic before writing it into files.</p>

<div class="callout tip">
  <span class="callout-icon">ðŸ’¡</span>
  <div class="callout-body">
    <strong>Pro Tip: IPython & Jupyter</strong>
    <p>Install <code>ipython</code> (pip install ipython) for a supercharged REPL with tab completion, history, and magic commands. For data science work, use Jupyter Notebook. But always know the standard REPL too â€” it's available everywhere.</p>
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

<h2>Virtual Environments â€” Always Use Them</h2>
<p>A virtual environment is an isolated Python installation for your project. This prevents package conflicts between projects. This is a professional practice â€” all real-world Python projects use them.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">python -m venv venv          # create
source venv/bin/activate      # activate (Mac/Linux)
venv\\Scripts\\activate         # activate (Windows)
pip install requests          # install packages INTO this env
deactivate                    # exit the environment</pre>

<div class="callout warn">
  <span class="callout-icon">âš ï¸</span>
  <div class="callout-body">
    <strong>Common Mistake</strong>
    <p>Many beginners install packages globally with <code>pip install</code> without activating a virtual environment first. This causes version conflicts across projects and makes your code hard to share. Always activate a venv first.</p>
  </div>
</div>

<h2>pip â€” Python's Package Manager</h2>
<p><code>pip</code> is how you install third-party libraries. The Python ecosystem has 500,000+ packages on PyPI (the Python Package Index).</p>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Asked in DevOps & Backend interviews</div>
  <p>Know the difference between <code>pip install</code>, virtual environments, and <code>requirements.txt</code>. Be able to explain why you'd use a venv. Companies check if you follow professional practices, not just if you can write code.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-1-2-1",
            title: "sys Module â€” Environment Info",
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
            title: "pip â€” Package Management Commands",
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
          title: "ðŸŽ® Explore Your Environment",
          description: "Run this to see details about your Python environment. Understanding your environment is the first step to debugging real-world issues.",
          starterCode: `import sys
import os

# â”€â”€ Environment Info â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
print("=" * 45)
print("  Python Environment Information")
print("=" * 45)
print(f"Version:    {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}")
print(f"Platform:   {sys.platform}")

# â”€â”€ Built-in modules (always available, no install needed) â”€â”€
import math, random, datetime, collections, itertools
builtins = ["math", "random", "datetime", "collections", "itertools"]
print(f"\\nBuilt-in modules available: {len(builtins)}")
for m in builtins:
    print(f"  âœ“ {m}")

# â”€â”€ Quick math demo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
print(f"\\nMath demo:")
print(f"  pi = {math.pi:.5f}")
print(f"  e  = {math.e:.5f}")
print(f"  Random number 1â€“100: {random.randint(1, 100)}")`
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
            a: "REPL stands for Read-Eval-Print Loop â€” an interactive Python shell started with the python command. It immediately executes each line you type and prints the result. Senior engineers use it to quickly test a function's behavior, explore an unfamiliar library's API, experiment with regular expressions, or prototype algorithm logic before writing it into source files. IPython and Jupyter Notebook are enhanced REPLs used in data science."
          }
        ]
      },

      // â”€â”€ Lesson 1.3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "1.3",
        title: "Your First Python Programs",
        duration: "30 min",
        content: `
<h2>Variables â€” Labels, Not Boxes</h2>
<p>In Python, a variable is a <strong>name that points to an object in memory</strong>. Think of it as a sticky label on a box, not the box itself. You can move the label to a different box at any time.</p>

<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">age = 25          # 'age' points to the integer object 25
name = "Alice"    # 'name' points to the string object "Alice"
age = 26          # 'age' now points to 26 â€” the old 25 object is unchanged</pre>

<p>Python is <strong>dynamically typed</strong> â€” you do not declare types. Python infers the type at runtime. The same variable name can hold different types at different times (though that's usually bad style).</p>

<h2>Python's Naming Rules</h2>
<ul>
  <li>Use <code>snake_case</code> for variables and functions: <code>user_name</code>, <code>total_price</code></li>
  <li>Use <code>UPPER_SNAKE_CASE</code> for constants: <code>MAX_RETRIES = 3</code></li>
  <li>Names can contain letters, digits, and underscores â€” but cannot start with a digit</li>
  <li>Avoid single-letter names (except loop counters <code>i</code>, <code>j</code>, or math variables)</li>
</ul>

<h2>print() â€” Your Most Used Function</h2>
<p><code>print()</code> outputs to stdout. It accepts multiple arguments separated by commas, with a space between them by default.</p>

<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">print("Hello", "World")         # Hello World
print("Score:", 95)             # Score: 95
print("a", "b", sep="-")       # a-b
print("Line 1", end=" | ")     # Line 1 | (no newline)
print("Line 2")                 # Line 2</pre>

<h2>f-Strings â€” The Modern Way to Format</h2>
<p>f-strings (formatted string literals) are the cleanest, fastest way to build strings with values embedded. Use them exclusively â€” avoid old-style <code>%</code> formatting.</p>

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
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>/</code></td><td style="padding:.4rem .6rem">True division</td><td style="padding:.4rem .6rem"><code>7 / 3</code></td><td style="padding:.4rem .6rem">2.333â€¦</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>//</code></td><td style="padding:.4rem .6rem">Floor division</td><td style="padding:.4rem .6rem"><code>7 // 3</code></td><td style="padding:.4rem .6rem">2</td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>%</code></td><td style="padding:.4rem .6rem">Modulo (remainder)</td><td style="padding:.4rem .6rem"><code>7 % 3</code></td><td style="padding:.4rem .6rem">1</td></tr>
  <tr><td style="padding:.4rem .6rem"><code>**</code></td><td style="padding:.4rem .6rem">Exponentiation</td><td style="padding:.4rem .6rem"><code>7 ** 3</code></td><td style="padding:.4rem .6rem">343</td></tr>
</table>

<div class="callout warn">
  <span class="callout-icon">âš ï¸</span>
  <div class="callout-body">
    <strong>Python 2 Trap (still asked in interviews)</strong>
    <p>In Python 2, <code>5 / 2</code> returned <code>2</code> (integer division). In Python 3, it returns <code>2.5</code>. Use <code>//</code> when you explicitly want integer division. This trips up engineers coming from Python 2 or other languages.</p>
  </div>
</div>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Common in coding screens</div>
  <p>The modulo operator <code>%</code> is used constantly in algorithms: checking even/odd (<code>n % 2 == 0</code>), cycling through values (<code>i % len(arr)</code>), and digit extraction (<code>n % 10</code> gives the last digit). Know it well.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-1-3-1",
            title: "Variables & Types",
            description: "Python infers types automatically. Use type() to check, and notice how natural the syntax is.",
            code: `# Variables â€” no type declaration needed
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
            description: "f-strings are the modern standard for string formatting in Python 3.6+. Master them â€” they appear everywhere.",
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
            description: "All arithmetic operators in action. Pay special attention to // and % â€” they are the most commonly used in algorithm problems.",
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
          title: "ðŸŽ® Build a Mini Calculator",
          description: "Modify this to compute any formula. Practice using variables, operators, and f-strings together.",
          starterCode: `# Mini Calculator â€” change the values and formulas

# â”€â”€ Circle calculations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
import math

radius = 7
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius

print("Circle Calculator")
print(f"  Radius:        {radius} cm")
print(f"  Area:          {area:.2f} cmÂ²")
print(f"  Circumference: {circumference:.2f} cm")

# â”€â”€ Simple interest â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
principal = 10000   # rupees
rate = 8.5          # % per year
time = 3            # years

interest = (principal * rate * time) / 100
total = principal + interest

print(f"\\nSimple Interest Calculator")
print(f"  Principal: â‚¹{principal:,}")
print(f"  Rate:      {rate}% per year")
print(f"  Time:      {time} years")
print(f"  Interest:  â‚¹{interest:,.2f}")
print(f"  Total:     â‚¹{total:,.2f}")`
        },
        exercises: [
          {
            id: "exe-1-3-1",
            title: "BMI Calculator",
            difficulty: "easy",
            description: "Calculate the Body Mass Index (BMI). Formula: <code>BMI = weight_kg / (height_m ** 2)</code>. Print the result to 2 decimal places and print the category: Underweight (< 18.5), Normal (18.5â€“24.9), Overweight (25â€“29.9), Obese (â‰¥ 30).",
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
            solutionExplanation: "BMI = weight / heightÂ². Using ** 2 for squaring is idiomatic Python. elif chains let you test multiple conditions in order â€” Python stops at the first True condition."
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
            description: "Given marks in 5 subjects, compute: total, average, percentage, and grade (A+ â‰¥ 90, A â‰¥ 80, B â‰¥ 70, C â‰¥ 60, F < 60). Print a formatted report.",
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
            a: "/ is true division â€” it always returns a float (e.g., 7/2 = 3.5, even 4/2 = 2.0). // is floor division â€” it returns the largest integer less than or equal to the result (e.g., 7//2 = 3, -7//2 = -4 not -3 because floor rounds toward negative infinity). This is important: in Python 2, / performed integer division for integers, which caused many bugs. Python 3 fixed this."
          },
          {
            q: "What is dynamic typing in Python?",
            a: "Dynamic typing means types are checked at runtime, not at compile time. You don't declare variable types â€” Python infers them from the assigned value. The same variable name can hold different types at different times (though this is usually bad practice). This contrasts with statically-typed languages like Java or C++ where you must declare int x = 5. Python 3.5+ added optional type hints (def greet(name: str) -> str:) which are checked by tools like mypy but ignored at runtime."
          },
          {
            q: "What are f-strings and why are they preferred over other formatting methods?",
            a: "f-strings (formatted string literals, introduced in Python 3.6) let you embed expressions directly in strings: f'Hello {name}'. They are preferred because: (1) most readable â€” expressions right where they appear; (2) fastest â€” benchmarks show they're faster than .format() and % formatting; (3) support arbitrary expressions including function calls and arithmetic. Avoid old-style % formatting (printf-style from Python 2) and .format() in new code."
          }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MODULE 2 â€” Data Types & Variables
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 2,
    title: "Data Types & Variables",
    icon: "ðŸ§¬",
    color: "#00c48c",
    difficulty: "beginner",
    duration: "3â€“4 hours",
    description: "Deep-dive into Python's type system, memory model, strings, numbers, and the subtle internals that trip up engineers in interviews.",
    objectives: [
      "Identify and use all of Python's built-in types",
      "Understand how Python stores variables in memory (id, references)",
      "Explain the difference between is and == with confidence",
      "Master string manipulation, slicing, and formatting",
      "Understand integer caching, string interning, and mutability"
    ],
    lessons: [
      // â”€â”€ Lesson 2.1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "2.1",
        title: "Python's Type System â€” Everything is an Object",
        duration: "20 min",
        content: `
<h2>Everything in Python is an Object</h2>
<p>In Python, <strong>every value is an object</strong> â€” integers, strings, functions, classes, modules, even <code>None</code>. Every object has three things: an <strong>identity</strong> (memory address), a <strong>type</strong>, and a <strong>value</strong>.</p>
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
  <span class="callout-icon">ðŸš¨</span>
  <div class="callout-body">
    <strong>Classic Bug: Mutable Default Argument</strong>
    <p>Never use a mutable object (list, dict) as a default argument in a function. It is shared across all calls! We'll cover this deeply in the Functions module.</p>
  </div>
</div>

<h2>type() vs isinstance()</h2>
<p><code>type(x)</code> returns the exact type. <code>isinstance(x, T)</code> returns True if x is T or a subclass of T. Prefer <code>isinstance()</code> in production code â€” it works correctly with inheritance.</p>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Asked at Microsoft, Flipkart, Paytm</div>
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

# bool is a subclass of int â€” surprising fact!
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
            description: "See the real difference between mutable and immutable types â€” critical for understanding Python bugs.",
            code: `# IMMUTABLE: str â€” cannot change in place
s = "hello"
print(f"id(s) before: {id(s)}")
s = s + " world"   # creates a NEW string object
print(f"id(s) after:  {id(s)}")   # different id!
print(f"s = {s}")

# MUTABLE: list â€” changes in place
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

# type() vs isinstance() â€” always prefer isinstance
print(f"\\ntype(True) == int: {type(True) == int}")         # False
print(f"isinstance(True, int): {isinstance(True, int)}")   # True`
          }
        ],
        playground: {
          title: "ðŸŽ® Explore Python's Type System",
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
    type_name = # your code â€” just the name, not <class 'x'>
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

print(f"team_a: {team_a}")   # ["Alice", "Bob", "Charlie"] â€” unchanged
print(f"team_b: {team_b}")   # ["Alex", "Bob", "Charlie", "Dave"]`,
            solutionExplanation: "When you write b = a for a list, both names point to the same object. Modifying through b changes what a sees. Fix: team_a.copy() creates a new list with the same elements. For nested lists, you need copy.deepcopy() to avoid aliasing nested mutable objects."
          }
        ],
        interviewQuestions: [
          {
            q: "What does 'everything in Python is an object' mean?",
            a: "Every value in Python â€” including integers, strings, functions, classes, and None â€” is an instance of some class and has an identity (id()), type (type()), and value. This means even basic types like int have methods (e.g., int.bit_length()), you can pass any value to a function, store anything in a list, and assign anything to a variable. This contrasts with C/Java where primitive types like int are not objects and have no methods."
          },
          {
            q: "Why can't you use a list as a dictionary key?",
            a: "Dictionary keys must be hashable. An object is hashable if it has a __hash__ method that returns a consistent integer throughout its lifetime. Lists are mutable â€” their contents can change after creation. If a list were used as a dict key and then modified, the hash would change, making the key unfindable. Immutable types (int, str, tuple, frozenset) are hashable. Mutable types (list, dict, set) are not. TypeError: unhashable type: 'list'."
          },
          {
            q: "What is the difference between type() and isinstance()?",
            a: "type(x) returns the exact class of x â€” it does not consider inheritance. isinstance(x, T) returns True if x is an instance of T or any subclass of T. Example: isinstance(True, int) is True because bool is a subclass of int, but type(True) == int is False because type(True) is bool. Always prefer isinstance() in production code because it correctly handles inheritance hierarchies."
          }
        ]
      },

      // â”€â”€ Lesson 2.2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "2.2",
        title: "Variables & Python's Memory Model",
        duration: "25 min",
        content: `
<h2>Variables are Labels, Not Boxes</h2>
<p>The most important mental model shift when learning Python: <strong>a variable is a name that refers to an object â€” it is not a container that holds a value.</strong></p>
<p>Think of it like this: the object (e.g., the integer 42) lives in memory. A variable is just a sticky label attached to it. Multiple labels can point to the same object. Removing a label does not destroy the object â€” it just loses one reference.</p>

<h2>id() â€” Memory Address</h2>
<p><code>id(obj)</code> returns the memory address of an object (in CPython). Two variables with the same id point to the exact same object in memory.</p>

<h2>is vs == â€” The Critical Distinction</h2>
<p>This is one of the most commonly asked Python interview questions:</p>
<ul>
  <li><code>==</code> compares <strong>values</strong> (calls <code>__eq__</code>)</li>
  <li><code>is</code> compares <strong>identities</strong> â€” are these the exact same object? (compares id())</li>
</ul>
<p>Always use <code>is</code> for: <code>None</code>, <code>True</code>, <code>False</code>. Always use <code>==</code> for value comparison.</p>

<div class="callout error">
  <span class="callout-icon">ðŸš¨</span>
  <div class="callout-body">
    <strong>Common Bug</strong>
    <p>Never write <code>if x == None:</code>. The correct idiom is <code>if x is None:</code>. A custom class could override <code>__eq__</code> to return True when compared to None, which is dangerous. <code>is None</code> cannot be fooled.</p>
  </div>
</div>

<h2>Integer Caching (-5 to 256)</h2>
<p>CPython caches small integers from <strong>-5 to 256</strong>. For these values, Python reuses the same object â€” so <code>a is b</code> will be True even if assigned independently. This is a CPython implementation detail, not a language guarantee.</p>
<p>For integers outside this range (like 1000), two separately assigned variables will have different ids, so <code>a is b</code> returns False even if they hold the same value.</p>

<div class="callout warn">
  <span class="callout-icon">âš ï¸</span>
  <div class="callout-body">
    <strong>Don't rely on integer caching in production code</strong>
    <p>The cache range is a CPython implementation detail. Other Python implementations may cache different ranges. Always use <code>==</code> for value comparison, never <code>is</code> for integers.</p>
  </div>
</div>

<h2>Reference Counting & Garbage Collection</h2>
<p>CPython uses <strong>reference counting</strong> to manage memory. Every object tracks how many names (references) point to it. When the count reaches zero, the memory is reclaimed immediately. Python also has a cyclic garbage collector to handle circular references (A â†’ B â†’ A).</p>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Very commonly asked Â· Amazon, Google, FAANG interviews</div>
  <p>"What is the difference between <code>is</code> and <code>==</code>?" is asked in almost every Python interview. Give the complete answer: == compares values, is compares object identities. Mention the integer caching fact as a bonus â€” it shows you understand CPython internals.</p>
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

print(f"a == b:  {a == b}")   # True  â€” same values
print(f"a is b:  {a is b}")   # False â€” different objects
print(f"a is c:  {a is c}")   # True  â€” same object
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
print(f"s1 is s2: {s1 is s2}")    # True (string interning â€” see Lesson 2.3)`
          },
          {
            id: "ce-2-2-2",
            title: "Integer Caching â€” CPython's Surprising Behavior",
            description: "CPython caches integers from -5 to 256. Outside this range, separately assigned integers are different objects.",
            code: `# Small integers are cached (-5 to 256)
a = 100
b = 100
print(f"a = 100, b = 100")
print(f"a is b: {a is b}")   # True â€” same cached object
print(f"id(a): {id(a)}, id(b): {id(b)}")  # same id

# Large integers are NOT cached
x = 1000
y = 1000
print(f"\\nx = 1000, y = 1000")
print(f"x is y: {x is y}")   # False â€” different objects in most cases
print(f"x == y: {x == y}")   # True â€” same value
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
          title: "ðŸŽ® Explore Memory & References",
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
            starterCode: `# Predict what each print outputs â€” then run to check

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
m, n = n, m   # tuple packing/unpacking â€” no temp variable needed
print(f"4. m={m}, n={n}")  # m=20, n=10`,
            solutionExplanation: "Key insights: (1) Reassigning b to a new int doesn't affect a. (2) y = x creates an alias; mutation through y affects x. (3) p[:] creates an independent copy via slicing. (4) Python's tuple swap m, n = n, m is elegant and idiomatic â€” no temp variable needed."
          }
        ],
        interviewQuestions: [
          {
            q: "What is the difference between is and == in Python?",
            a: "== compares the values of two objects by calling __eq__(). is compares object identities â€” it checks whether both sides point to the same object in memory (same id()). Use == for value comparison. Use is only for singletons: None, True, False. Example: a = [1,2,3]; b = [1,2,3] â†’ a == b is True but a is b is False. a = b â†’ a is b is True because they reference the same list."
          },
          {
            q: "What is Python's integer caching and why does it exist?",
            a: "CPython caches small integer objects from -5 to 256. These values are frequently used, so pre-allocating them avoids repeatedly creating and destroying objects, which improves performance. Because of this, for small integers, independently created variables with the same value will pass an identity check (is). For larger integers (outside -5 to 256), new objects are created each time. Important: this is a CPython implementation detail â€” do not write code that depends on it. Always use == for integer comparison."
          },
          {
            q: "How does Python's memory management work?",
            a: "CPython uses reference counting as its primary memory management strategy. Each object maintains a count of how many references point to it. When an assignment is made, the count increases; when a variable goes out of scope or is reassigned, the count decreases. When the count hits zero, memory is freed immediately. For circular references (A references B which references A), reference counting alone cannot collect them. Python's cyclic garbage collector (gc module) handles this by periodically detecting and collecting cycles."
          }
        ]
      },

      // â”€â”€ Lesson 2.3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
s[1:4]  # 'yth' slice [start:stop) â€” stop is exclusive
s[:3]   # 'Pyt' from start
s[3:]   # 'hon' to end
s[::2]  # 'Pto' every 2nd character
s[::-1] # 'nohtyP' reversed string</pre>

<div class="callout info">
  <span class="callout-icon">ðŸ’¡</span>
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
<p>Python may <em>intern</em> strings â€” reuse the same object for strings that look like valid Python identifiers (letters, digits, underscores). This is an optimization, not a guarantee. Use <code>==</code> for string comparison, never <code>is</code>.</p>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Top string interview topics</div>
  <p>Most string algorithm problems test: reversal (<code>s[::-1]</code>), palindrome checking, anagram detection (Counter), string parsing with split/join, and character-level iteration. Master slicing and the join pattern: <code>"-".join(words)</code> is O(n) â€” much better than concatenating in a loop.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-3-1",
            title: "Indexing, Slicing, and Reversal",
            description: "The slice syntax [start:stop:step] is used everywhere in Python â€” strings, lists, numpy arrays. Master it.",
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

# Immutability â€” cannot change in place
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
            code: `# Data cleaning â€” very common in real jobs
raw = "  Hello, World!  "
print(f"strip:      '{raw.strip()}'")
print(f"lower:      '{raw.strip().lower()}'")
print(f"upper:      '{raw.strip().upper()}'")

# Split and join â€” used in parsing, CSV, NLP
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
            description: "Advanced f-string formatting â€” number precision, alignment, padding, and expressions.",
            code: `# Format specification: {value:format_spec}
pi = 3.14159265
salary = 125000.75
name = "Bob"
score = 94.5

# Number formatting
print(f"Pi (2 dec):     {pi:.2f}")
print(f"Pi (sci):       {pi:.2e}")
print(f"Salary:         {salary:,.2f}")   # comma separators
print(f"Salary (â‚¹):    â‚¹{salary:>12,.0f}")  # right-aligned

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
          title: "ðŸŽ® String Manipulation Lab",
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
            description: "Write a function that checks if a string is a palindrome (reads the same forwards and backwards). Ignore case and spaces. Examples: 'racecar' â†’ True, 'A man a plan a canal Panama' â†’ True, 'hello' â†’ False.",
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
            solutionExplanation: "dict.get(key, default) returns the value or a default if key doesn't exist â€” cleaner than checking 'if key in dict'. sorted() with key=lambda and reverse=True sorts by frequency descending. In production code, use collections.Counter â€” it does this in one line!"
          },
          {
            id: "exe-2-3-3",
            title: "Caesar Cipher",
            difficulty: "hard",
            description: "Implement a Caesar cipher that shifts each letter by a given amount. Non-letters remain unchanged. Example: encrypt('Hello!', 3) â†’ 'Khoor!'. The cipher should wrap around (z shifted by 1 = a).",
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
            solutionExplanation: "ord() converts a character to its ASCII code. chr() converts back. Subtracting the base normalizes to 0-25, adding shift moves it, % 26 wraps around, then adding base back converts to the correct letter. Using ''.join(list) to build strings is more efficient than concatenation in a loop (O(n) vs O(nÂ²))."
          }
        ],
        interviewQuestions: [
          {
            q: "Why are strings immutable in Python and what are the implications?",
            a: "Strings are immutable for several reasons: (1) Safety â€” shared strings can't be accidentally modified. (2) Hashability â€” immutable objects can be used as dict keys and set members. (3) Performance â€” Python can intern (reuse) identical string objects. The implication is that operations like concatenation (s += 'x') create new objects each time. Building a string in a loop with += is O(nÂ²). The Pythonic fix is to collect parts in a list and join: ''.join(parts) â€” which is O(n)."
          },
          {
            q: "What is string interning in Python?",
            a: "String interning is an optimization where Python stores only one copy of a string value and reuses it for multiple variables. CPython automatically interns strings that look like identifiers (contain only letters, digits, underscores). Interned strings compare with 'is' instead of '==', which is faster. You can explicitly intern a string with sys.intern(s). Important: never rely on interning for correctness â€” always use == for string comparison."
          },
          {
            q: "What is the most efficient way to concatenate many strings?",
            a: "Use ''.join(list_of_strings). String concatenation with + or += in a loop creates a new string object each iteration because strings are immutable, giving O(nÂ²) time complexity. ''.join() collects all parts first then creates one string in O(n). Example: instead of result = '' followed by result += word for each word, use result = ' '.join(words). This is a common interview follow-up: 'How would you optimize your string building?'"
          },
          {
            q: "What is the difference between find() and index() for strings?",
            a: "Both search for a substring. find() returns -1 if not found. index() raises a ValueError if not found. Use find() when absence is a valid case (check against -1). Use index() when absence would be a programming error you want to catch immediately. Similarly, list has both .index() (raises ValueError) and the 'in' operator (returns bool)."
          }
        ]
      },

      // â”€â”€ Lesson 2.4 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "2.4",
        title: "Numbers & Booleans",
        duration: "20 min",
        content: `
<h2>Integers â€” Arbitrary Precision</h2>
<p>Python integers have <strong>no size limit</strong>. Unlike C/Java where an <code>int</code> is 32 or 64 bits, Python integers can be as large as your RAM allows. This makes Python perfect for cryptography, big-data calculations, and competitive programming.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">big = 2 ** 1000   # Python handles this; C/Java would overflow</pre>

<h2>Floats â€” IEEE 754 Double Precision</h2>
<p>Floats use 64-bit IEEE 754 representation. This means they <strong>cannot represent all decimal numbers exactly</strong>. This is a hardware limitation, not a Python bug.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">0.1 + 0.2 == 0.3   # False â€” 0.30000000000000004
# Fix: round(0.1 + 0.2, 2) == 0.3  or use decimal.Decimal</pre>
<p>For financial calculations, use the <code>decimal</code> module. For approximate comparisons, use <code>math.isclose(a, b)</code>.</p>

<h2>bool â€” A Subclass of int</h2>
<p>Python's <code>bool</code> type is a subclass of <code>int</code>. <code>True == 1</code> and <code>False == 0</code>. This means you can use booleans in arithmetic â€” a fact exploited in many interview problems.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">sum([True, True, False, True])  # 3 â€” count of True values</pre>

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
  <div class="interview-tip-label">ðŸŽ¯ Asked at data science & backend interviews</div>
  <p>"Why is 0.1 + 0.2 != 0.3 in Python?" This is a famous question. Answer: floating-point numbers use binary IEEE 754 representation, which cannot represent 0.1 or 0.2 exactly. The fix is <code>round()</code>, <code>math.isclose()</code>, or <code>decimal.Decimal</code> for financial applications.</p>
</div>`,
        codeExamples: [
          {
            id: "ce-2-4-1",
            title: "Integers, Floats, and Precision",
            description: "Python's arbitrary-precision integers and the famous floating-point gotcha.",
            code: `import math

# Integers â€” no overflow!
big = 2 ** 100
print(f"2^100 = {big}")
print(f"Factorial of 30 = {math.factorial(30)}")  # huge number, no overflow

# Floats â€” IEEE 754 precision issue
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

# Bool is int â€” count True values
results = [True, False, True, True, False]
print(f"\\nPassed: {sum(results)} out of {len(results)}")`
          }
        ],
        playground: {
          title: "ðŸŽ® Number & Boolean Lab",
          description: "Experiment with numbers and boolean logic in Python.",
          starterCode: `import math

# â”€â”€ Integer precision demo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
print("Python integers have no overflow:")
for n in [10, 20, 50, 100]:
    print(f"  2^{n:<4} = {2**n}")

# â”€â”€ Float precision â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
print("\\nFloat precision (IEEE 754):")
expressions = [
    ("0.1 + 0.2", 0.1 + 0.2),
    ("0.1 + 0.1 + 0.1", 0.1 + 0.1 + 0.1),
    ("1.0 - 0.9", 1.0 - 0.9),
]
for expr, val in expressions:
    print(f"  {expr:<25} = {val}")

# â”€â”€ Truthiness â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
            solutionExplanation: "if b: checks truthiness â€” 0 is falsy, so it catches division by zero without explicitly comparing to 0. This is more Pythonic than if b != 0. Note: this also catches b=None, b='' etc., which may or may not be desired."
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
            solutionExplanation: "max(freq, key=freq.get) finds the key in freq with the maximum value â€” elegant use of the key parameter. Sorting and indexing to find the median is a common algorithm question. Note: the statistics module (Python 3.4+) provides all these functions, but knowing how to implement them is essential for interviews."
          }
        ],
        interviewQuestions: [
          {
            q: "Why does 0.1 + 0.2 not equal 0.3 in Python?",
            a: "This is a floating-point representation issue, not a Python bug. Computers store numbers in binary (base-2). Numbers like 0.1 and 0.2 cannot be represented exactly in binary (similar to how 1/3 cannot be represented exactly in decimal). The result of 0.1 + 0.2 is 0.30000000000000004 due to accumulated rounding errors. Fix: use round(result, n) for display, math.isclose(a, b) for comparisons (tolerates small errors), or decimal.Decimal for exact decimal arithmetic in financial applications."
          },
          {
            q: "How does Python handle integer overflow differently from C/Java?",
            a: "Python integers are arbitrary precision â€” they can grow as large as available memory. C and Java use fixed-width integers (32 or 64 bits) that overflow and wrap around. For example, in C, INT_MAX + 1 wraps to INT_MIN. In Python, there is no overflow â€” 2**1000 works perfectly. This is implemented in CPython by using arrays of C digits internally, dynamically resizing as needed. The downside is that Python integers take more memory and are slower than C fixed-width integers."
          },
          {
            q: "What are falsy values in Python?",
            a: "Falsy values are: None, False, 0 (int), 0.0 (float), 0j (complex zero), '' (empty string), [] (empty list), () (empty tuple), {} (empty dict), set() (empty set), and any object whose __bool__ returns False or __len__ returns 0. Everything else is truthy. This allows writing if items: instead of if len(items) > 0: â€” which is more Pythonic. Note: '0', [0], (False,) are all truthy."
          }
        ]
      },

      // â”€â”€ Lesson 2.5 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "2.5",
        title: "Type Conversion & Common Pitfalls",
        duration: "20 min",
        content: `
<h2>Explicit Type Conversion</h2>
<p>Python does not implicitly convert between unrelated types. You must be explicit. These built-in functions convert between types:</p>

<table style="width:100%;font-size:.85rem;border-collapse:collapse;margin:.75rem 0">
  <tr style="border-bottom:1px solid var(--border);color:var(--text-muted)"><th style="padding:.4rem .6rem">Function</th><th style="padding:.4rem .6rem">Converts to</th><th style="padding:.4rem .6rem">Example</th></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>int(x)</code></td><td style="padding:.4rem .6rem">Integer</td><td style="padding:.4rem .6rem"><code>int("42") â†’ 42</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>float(x)</code></td><td style="padding:.4rem .6rem">Float</td><td style="padding:.4rem .6rem"><code>float("3.14") â†’ 3.14</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>str(x)</code></td><td style="padding:.4rem .6rem">String</td><td style="padding:.4rem .6rem"><code>str(42) â†’ "42"</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>bool(x)</code></td><td style="padding:.4rem .6rem">Boolean</td><td style="padding:.4rem .6rem"><code>bool(0) â†’ False</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>list(x)</code></td><td style="padding:.4rem .6rem">List</td><td style="padding:.4rem .6rem"><code>list("abc") â†’ ['a','b','c']</code></td></tr>
  <tr style="border-bottom:1px solid var(--border)"><td style="padding:.4rem .6rem"><code>tuple(x)</code></td><td style="padding:.4rem .6rem">Tuple</td><td style="padding:.4rem .6rem"><code>tuple([1,2,3]) â†’ (1,2,3)</code></td></tr>
  <tr><td style="padding:.4rem .6rem"><code>set(x)</code></td><td style="padding:.4rem .6rem">Set</td><td style="padding:.4rem .6rem"><code>set([1,1,2]) â†’ {1,2}</code></td></tr>
</table>

<h2>Implicit Conversion (Coercion)</h2>
<p>Python does coerce in specific, well-defined cases:</p>
<ul>
  <li><code>int + float â†’ float</code> (e.g., <code>3 + 1.5 == 4.5</code>)</li>
  <li><code>bool + int â†’ int</code> (e.g., <code>True + 2 == 3</code>)</li>
</ul>
<p>It does NOT auto-convert between str and numbers â€” <code>"5" + 3</code> raises a TypeError.</p>

<h2>Common Conversion Errors to Know</h2>
<ul>
  <li><code>int("3.14")</code> â†’ ValueError (use <code>int(float("3.14"))</code>)</li>
  <li><code>int("hello")</code> â†’ ValueError</li>
  <li><code>"5" + 3</code> â†’ TypeError (use <code>int("5") + 3</code>)</li>
  <li><code>int(None)</code> â†’ TypeError</li>
</ul>

<div class="callout info">
  <span class="callout-icon">ðŸ’¡</span>
  <div class="callout-body">
    <strong>Type Annotations (Python 3.5+)</strong>
    <p>Python supports optional type hints: <code>def add(a: int, b: int) -> int:</code>. These are not enforced at runtime but are checked by tools like mypy and are shown in IDE autocomplete. Modern Python codebases use them heavily. They make code self-documenting and catch bugs early.</p>
  </div>
</div>

<div class="interview-tip">
  <div class="interview-tip-label">ðŸŽ¯ Live coding sessions</div>
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
            title: "Type Hints â€” Modern Python Practice",
            description: "Type hints make code self-documenting and enable IDE support and static analysis. Used in all modern Python codebases.",
            code: `# Type hints â€” not enforced at runtime but essential in production code
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

# Python does NOT enforce types â€” this still runs (but mypy would warn)
print(calculate_grade(88))      # A
print(calculate_grade(92, 100)) # A+
print(calculate_grade(45, 100)) # F

# List, dict, tuple type hints (Python 3.9+ syntax)
def process_names(names: list[str]) -> dict[str, int]:
    """Returns name â†’ length mapping."""
    return {name: len(name) for name in names}

result = process_names(["Alice", "Bob", "Charlie"])
print(result)   # {'Alice': 5, 'Bob': 3, 'Charlie': 7}`
          }
        ],
        playground: {
          title: "ðŸŽ® Conversion & Types Sandbox",
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
            solutionExplanation: "Real-world data is messy. Using try/except around each conversion handles invalid values gracefully without crashing. Catching (ValueError, IndexError) in one tuple is cleaner than separate blocks. This pattern â€” parse input, validate, provide defaults â€” is fundamental in data engineering."
          }
        ],
        interviewQuestions: [
          {
            q: "What is the difference between implicit and explicit type conversion in Python?",
            a: "Explicit conversion uses constructor functions: int(), float(), str(), list() etc. â€” you explicitly request the conversion. Implicit conversion (coercion) happens automatically in limited cases: Python promotes int to float when mixing them (3 + 1.5 = 4.5), and bool to int (True + 2 = 3). Python does NOT implicitly convert between str and numbers â€” '5' + 3 raises TypeError, unlike JavaScript which gives '53'. This explicit design prevents hidden type-coercion bugs."
          },
          {
            q: "What are Python type hints and why are they useful?",
            a: "Type hints (PEP 484, Python 3.5+) allow annotating function signatures and variables with types: def greet(name: str) -> str. They are not enforced at runtime â€” Python still runs the code even if types are wrong. Their value: (1) documentation â€” code is self-explanatory; (2) IDE support â€” autocomplete and refactoring work better; (3) static analysis tools like mypy catch type errors before runtime; (4) required in many professional Python codebases. Python 3.10+ simplified syntax: list[int] instead of List[int] from typing."
          }
        ]
      }
    ]
  },


  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MODULE 3 â€” Control Flow & Loops
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 3,
    title: "Control Flow & Loops",
    icon: "ðŸ”€",
    color: "#ffb300",
    difficulty: "beginner",
    duration: "3â€“4 hours",
    description: "Master Python's decision-making and iteration tools â€” including the unique for-else construct and powerful comprehensions.",
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
<p>Python uses <strong>indentation</strong> (not braces) to define code blocks â€” 4 spaces per level (PEP 8). The elif and else clauses are optional.</p>
<h2>Truthiness in Conditions</h2>
<p>Any object can be used in a boolean context. Falsy values: <code>None, False, 0, 0.0, "", [], (), {}, set()</code>. Everything else is truthy. Write <code>if items:</code> not <code>if len(items) > 0:</code>.</p>
<h2>Chained Comparisons</h2>
<p>Python supports mathematical chaining: <code>0 &lt; x &lt; 10</code> is equivalent to <code>x &gt; 0 and x &lt; 10</code>. Cleaner and more readable.</p>
<h2>Ternary Expression</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">result = value_if_true if condition else value_if_false</pre>
<div class="callout warn"><span class="callout-icon">âš ï¸</span><div class="callout-body"><strong>Always use is None</strong><p>Write <code>if x is None:</code> not <code>if x == None:</code> â€” PEP 8 and safe against custom __eq__.</p></div></div>
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Coding interviews â€” Amazon, startups</div><p>Using <code>if items:</code> and chained comparisons signals Python fluency. Interviewers notice the difference between idiomatic Python and Java-style code.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-1-1",
            title: "Conditions, Chaining, Truthiness",
            description: "Core conditional patterns used in every Python codebase.",
            code: `score = 85
grade = "A+" if score >= 90 else "A" if score >= 80 else "B" if score >= 70 else "C" if score >= 60 else "F"
print(f"Score {score} â†’ {grade}")

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
          title: "ðŸŽ® Conditional Logic Lab",
          description: "Build a real-world validator with chained conditions.",
          starterCode: `def check_loan(age, income, credit_score):
    issues = []
    if not (21 <= age <= 65):
        issues.append(f"Age {age} must be 21-65")
    if income < 300000:
        issues.append(f"Income {income} below minimum 300000")
    if credit_score < 700:
        issues.append(f"Credit score {credit_score} below 700")
    status = "APPROVED âœ“" if not issues else "REJECTED âœ—"
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
            description: "Print 1â€“30. For multiples of 3: 'Fizz'. Multiples of 5: 'Buzz'. Both: 'FizzBuzz'.",
            starterCode: `for n in range(1, 31):
    pass  # your logic here`,
            solution: `for n in range(1, 31):
    if n % 15 == 0: print("FizzBuzz")
    elif n % 3 == 0: print("Fizz")
    elif n % 5 == 0: print("Buzz")
    else: print(n)`,
            solutionExplanation: "Check 15 first â€” it must come before 3 and 5 checks, otherwise multiples of 15 would only print 'Fizz'. Modulo % gives remainder; divisibility means remainder is 0."
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
    print(f"{sides} â†’ {classify_triangle(*sides)}")`,
            solution: `def classify_triangle(a, b, c):
    if not (a + b > c and b + c > a and a + c > b):
        return "Invalid"
    if a == b == c: return "Equilateral"
    if a == b or b == c or a == c: return "Isosceles"
    return "Scalene"

for sides in [(3,3,3),(3,3,5),(3,4,5),(1,2,10)]:
    print(f"{sides} â†’ {classify_triangle(*sides)}")`,
            solutionExplanation: "a == b == c chains two equality checks. The triangle inequality must be verified before classification. Spreading tuple with * unpacks it into positional args."
          }
        ],
        interviewQuestions: [
          { q: "What are truthy and falsy values in Python?", a: "Falsy: None, False, 0, 0.0, 0j, '', [], (), {}, set(), and any object whose __bool__ returns False or __len__ returns 0. Everything else is truthy. This enables idiomatic patterns like 'if items:' instead of 'if len(items) > 0:'. Note: '0', [0], and (False,) are all truthy â€” non-empty containers are always truthy." },
          { q: "How do chained comparisons work?", a: "Python evaluates 0 < x < 10 as (0 < x) and (x < 10) with short-circuit evaluation and without evaluating x twice. Unlike C where 0 < x < 10 would be (0 < x) < 10 (always True). You can chain any number of comparisons: 1 <= a <= b <= 100." },
          { q: "When should you use the ternary expression?", a: "Use for simple one-liners where both branches are single expressions: grade = 'Pass' if score >= 60 else 'Fail'. Avoid nesting ternaries â€” use if/elif/else for multi-branch logic. Never use it for side effects like printing." }
        ]
      },
      {
        id: "3.2",
        title: "For Loops & Iterables",
        duration: "30 min",
        content: `
<h2>for Loops over Any Iterable</h2>
<p>Python's <code>for</code> iterates over any iterable â€” lists, strings, tuples, dicts, sets, files, generators. No index needed.</p>
<h2>range()</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">range(stop)             # 0..stop-1
range(start, stop, step) # with step (negative for reverse)</pre>
<p><code>range()</code> is lazy â€” generates values on demand. <code>range(1_000_000)</code> uses negligible memory.</p>
<h2>enumerate() and zip()</h2>
<p>Never use <code>for i in range(len(items)): item = items[i]</code>. Use <code>enumerate()</code> for index+value, <code>zip()</code> for parallel iteration.</p>
<h2>for-else â€” Python's Secret Weapon</h2>
<p>The <code>else</code> runs only if the loop finished <em>without</em> hitting a <code>break</code>. Use it to detect "not found" without a flag variable.</p>
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Amazon, Microsoft â€” distinguishes Python experts</div><p>"Explain for-else." Most candidates have never heard of it. Knowing it â€” with a prime-number or search example â€” sets you apart from the crowd.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-2-1",
            title: "range, enumerate, zip",
            description: "The three core loop helpers â€” essential for idiomatic Python.",
            code: `fruits = ["apple", "banana", "cherry"]
prices = [1.20, 0.50, 2.00]

# enumerate â€” index + value
for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit}")

# zip â€” parallel iteration
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
            title: "for-else â€” Eliminating Flag Variables",
            description: "for-else elegantly handles 'did I find it?' without a boolean flag.",
            code: `def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            break           # found factor â€” not prime
    else:
        return True         # no factor found â€” prime!
    return False

print([n for n in range(2, 20) if is_prime(n)])

# Without for-else you'd need:
# found = False
# for i in ...:
#     if ...: found = True; break
# if not found: return True  â† for-else is cleaner`
          }
        ],
        playground: {
          title: "ðŸŽ® Loop Mastery",
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
            description: "Flatten [[1,2],[3,4],[5]] â†’ [1,2,3,4,5] using nested loops, then as a one-line comprehension.",
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
          { q: "Explain Python's for-else construct.", a: "The else clause on a for (or while) loop runs only when the loop completes without hitting break. If break executes, else is skipped. Classic use: search algorithms â€” loop through items, break when found, else means 'not found'. Eliminates flag variables. Works identically on while loops." },
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
<div class="callout error"><span class="callout-icon">ðŸš¨</span><div class="callout-body"><strong>Common Bug</strong><p>Forgetting to update the loop variable: <code>i = 0; while i &lt; 10: print(i)</code> â€” infinite loop. Always advance toward termination.</p></div></div>
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Algorithm interviews</div><p>Binary search and two-pointer algorithms naturally use while loops â€” the termination depends on two indices converging.</p></div>`,
        codeExamples: [
          {
            id: "ce-3-3-1",
            title: "while, break, continue",
            description: "All loop control statements in practical scenarios.",
            code: `# break â€” stop early
data = [3, 7, 2, 9, 1, 5]
for item in data:
    if item == 9:
        print(f"Found 9!")
        break
else:
    print("Not found")

# continue â€” skip evens
print("Odds:", end=" ")
for n in range(10):
    if n % 2 == 0:
        continue
    print(n, end=" ")
print()

# while True + break â€” event loop pattern
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
            description: "Classic O(log n) search â€” finds any element in a sorted million-item list in â‰¤20 steps.",
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
          title: "ðŸŽ® Loop Control Lab",
          description: "Build a number guessing AI using binary search + while.",
          starterCode: `import random
secret = random.randint(1, 100)
low, high, guess = 1, 100, 50
attempts = []
print(f"Guessing secret ({secret}) using binary search:")
while True:
    attempts.append(guess)
    print(f"  Guess #{len(attempts)}: {guess}", end=" â†’ ")
    if guess == secret:   print("Correct!"); break
    elif guess < secret:  print("Too low");  low = guess + 1
    else:                 print("Too high"); high = guess - 1
    guess = (low + high) // 2
print(f"Found in {len(attempts)} attempts")`
        },
        exercises: [
          {
            id: "exe-3-3-1", title: "GCD â€” Euclidean Algorithm", difficulty: "medium",
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
            solutionExplanation: "The Euclidean algorithm: replace (a,b) with (b, a%b) until b=0. The tuple swap a,b = b, a%b is atomic in Python â€” no temp variable needed."
          }
        ],
        interviewQuestions: [
          { q: "When should you use while vs for?", a: "Use for when iterating over a known sequence or a fixed number of iterations. Use while when: the number of iterations is unknown (reading until a condition), two indices are converging (binary search, two-pointer), or implementing an event loop (while True: ... break). In practice, for loops are more common in Python." },
          { q: "What is the difference between break and continue?", a: "break exits the entire loop â€” no more iterations. continue skips the rest of the current iteration and proceeds to the next. Both work in for and while loops. break also prevents the else clause from running; continue does not." }
        ]
      },
      {
        id: "3.4",
        title: "Comprehensions",
        duration: "30 min",
        content: `
<h2>List Comprehensions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">[expression for item in iterable if condition]</pre>
<p>Replaces for+append with one readable line. CPython optimizes list comprehension construction â€” faster than the loop equivalent.</p>
<h2>Dict & Set Comprehensions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">{k: v for item in iterable}    # dict
{expr for item in iterable}     # set</pre>
<h2>Generator Expressions</h2>
<p>Use <code>()</code> instead of <code>[]</code> for a lazy iterator. Use with sum/max/any/all to avoid building a full list in memory.</p>
<div class="callout warn"><span class="callout-icon">âš ï¸</span><div class="callout-body"><strong>When NOT to Use</strong><p>Never use comprehensions for side effects: <code>[print(x) for x in items]</code> is bad. Avoid more than 2 levels of nesting.</p></div></div>
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Technical screens â€” frequent</div><p>Interviewers ask "rewrite this loop as a comprehension" or "what does this comprehension produce?" Both test Pythonic thinking. Comprehensions are faster than for+append due to C-level optimization.</p></div>`,
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
          title: "ðŸŽ® Comprehension Workshop",
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
            description: "Rewrite as one-line comprehensions: (1) cubes of odd numbers 1-20; (2) Câ†’F for [0,20,37,100]; (3) words longer than 4 chars, uppercased.",
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
            description: "Group words by anagram signature: sorted letters joined. ['eat','tea','tan','ate'] â†’ {'aet':['eat','tea','ate'],'ant':['tan']}.",
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
          { q: "What is a list comprehension and why is it faster than a for loop?", a: "A list comprehension [expr for x in it if cond] creates a list in one expression. It's faster because CPython optimizes list building at the C level â€” the list allocation is done once and appending is done directly, bypassing Python-level attribute lookups. Use loops for side effects, comprehensions for data transformation." },
          { q: "What is the difference between a list comprehension and a generator expression?", a: "List comprehension [x for x in ...] creates the entire list immediately â€” O(n) space. Generator expression (x for x in ...) is lazy â€” O(1) space, computes values on demand. Use generators with sum(), max(), any(), all() â€” they process one item at a time and never build a full list." },
          { q: "How do you write a dict comprehension?", a: "{key_expr: val_expr for item in iterable if cond}. Common uses: invert dict ({v:k for k,v in d.items()}), build lookup table ({x['id']:x for x in records}), filter dict ({k:v for k,v in d.items() if v>0})." }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MODULE 4 â€” Functions
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 4,
    title: "Functions",
    icon: "âš™ï¸",
    color: "#ff5757",
    difficulty: "intermediate",
    duration: "4â€“5 hours",
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
<p>Functions return <code>None</code> by default. Python functions are first-class objects â€” pass them to other functions, store in lists, assign to variables.</p>
<h2>Multiple Return Values</h2>
<p>Python "returns multiple values" by returning a tuple that is auto-unpacked: <code>min_val, max_val = min_max(data)</code>.</p>
<h2>Docstrings</h2>
<p>First statement in a function body â€” accessible via <code>func.__doc__</code> and <code>help(func)</code>. Required in professional code.</p>
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Code quality discussions</div><p>Always write docstrings. Returning tuples and unpacking them is idiomatic Python. Functions as first-class objects is the foundation of decorators.</p></div>`,
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
          title: "ðŸŽ® Function Design Lab",
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
            solutionExplanation: "Storing functions in a dict is the Pythonic dispatch pattern â€” cleaner than if/elif chains. Functions are first-class objects and are perfectly valid as dict values."
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
<ol><li>Positional â€” matched by position</li><li>Keyword â€” passed by name</li><li>Default â€” fallback value</li><li>*args â€” extra positionals â†’ tuple</li><li>**kwargs â€” extra keywords â†’ dict</li></ol>
<h2>The Mutable Default Argument Trap ðŸš¨</h2>
<p>Default values are evaluated <strong>once at function definition time</strong>, not on each call. A mutable default (list, dict) is shared across all calls.</p>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">def bad(items=[]):   # WRONG â€” shared list!
    items.append(1); return items

def good(items=None):   # CORRECT
    if items is None: items = []
    items.append(1); return items</pre>
<h2>Keyword-Only Arguments</h2>
<p>Parameters after <code>*</code> must be passed by name â€” prevents accidental positional misuse.</p>
<div class="callout error"><span class="callout-icon">ðŸš¨</span><div class="callout-body"><strong>Asked in Almost Every Python Interview</strong><p>Know the mutable default trap, explain it clearly, and demonstrate the None-based fix.</p></div></div>`,
        codeExamples: [
          {
            id: "ce-4-2-1",
            title: "Mutable Default Trap & Fix",
            description: "The most famous Python gotcha â€” understand it deeply.",
            code: `# WRONG: shared mutable default
def add_bad(item, cart=[]):
    cart.append(item)
    return cart

print(add_bad("apple"))   # ['apple']
print(add_bad("banana"))  # ['apple','banana'] â€” same list!

# CORRECT: None default, fresh list inside
def add_good(item, cart=None):
    if cart is None:
        cart = []
    cart.append(item)
    return cart

print(add_good("apple"))   # ['apple']
print(add_good("banana"))  # ['banana'] â€” independent`
          },
          {
            id: "ce-4-2-2",
            title: "*args and **kwargs",
            description: "Variable arguments â€” fundamental for flexible APIs and decorators.",
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
          title: "ðŸŽ® Parameters Lab",
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
    "North: â‚¹4.5L", "South: â‚¹6.2L", "East: â‚¹3.8L",
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
          { q: "Explain the mutable default argument trap.", a: "Default values are evaluated once when the function is defined, stored on the function object. A mutable default (list, dict) is shared across all calls. def f(lst=[]): lst.append(1); return lst â€” consecutive calls return [1], [1,1], [1,1,1]. Fix: use None as default, create the mutable inside the function body." },
          { q: "What is the difference between *args and **kwargs?", a: "*args captures extra positional arguments into a tuple. **kwargs captures extra keyword arguments into a dict. Order in signature: (positional, *args, keyword-only, **kwargs). At call site, *list unpacks as positional; **dict unpacks as keywords." },
          { q: "What are keyword-only arguments?", a: "Parameters after * (or *args) must be passed by name. Example: def process(data, *, verbose=False) â€” verbose can only be called as process(d, verbose=True), never as process(d, True). Prevents accidental positional misuse. Used heavily in Python stdlib (sorted, open, etc.)." }
        ]
      },
      {
        id: "4.3",
        title: "Scope & The LEGB Rule",
        duration: "25 min",
        content: `
<h2>LEGB â€” The Four Scopes</h2>
<p>Python resolves names by searching four scopes in order:</p>
<ul><li><strong>L</strong>: Local â€” current function</li><li><strong>E</strong>: Enclosing â€” outer functions (for nested functions)</li><li><strong>G</strong>: Global â€” module level</li><li><strong>B</strong>: Built-in â€” print, len, range, etc.</li></ul>
<h2>global and nonlocal</h2>
<p><code>global x</code>: tells Python to use the module-level x, not create a local one. <code>nonlocal x</code>: use a variable from the enclosing (not global) scope â€” key for closures with state.</p>
<div class="callout error"><span class="callout-icon">ðŸš¨</span><div class="callout-body"><strong>UnboundLocalError</strong><p>If Python sees an assignment to a name anywhere in a function, that name is treated as local throughout the entire function â€” even before the assignment. Causes UnboundLocalError if used before the assignment line.</p></div></div>`,
        codeExamples: [
          {
            id: "ce-4-3-1",
            title: "LEGB in Action",
            description: "Watch Python resolve names through Local â†’ Enclosing â†’ Global â†’ Built-in.",
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
          title: "ðŸŽ® Scope Explorer",
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
            solutionExplanation: "First block: g sees 3 (local), f sees 2 (local), module sees 1 (global unchanged). Second block: h() raises UnboundLocalError because Python sees y=20 and treats y as local throughout h â€” the print(y) before the assignment references an unbound local."
          }
        ],
        interviewQuestions: [
          { q: "Explain Python's LEGB scope rule.", a: "LEGB: Local (current function), Enclosing (outer functions), Global (module level), Built-in (builtins module). Python searches in this order. If the name isn't found anywhere, NameError is raised. Assignment inside a function always creates a local variable unless declared with global or nonlocal." },
          { q: "What is UnboundLocalError?", a: "Occurs when a variable is referenced before assignment in a function where Python knows (from seeing an assignment later in the function) that it should be local. Fix: use global/nonlocal if you mean the outer variable, or rename the local variable." }
        ]
      },
      {
        id: "4.4",
        title: "Closures â€” Functions That Remember",
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
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Advanced Python interviews</div><p>"What is a closure?" â†’ "How do decorators work?" These two are deeply connected. Master closures first.</p></div>`,
        codeExamples: [
          {
            id: "ce-4-4-1",
            title: "Closures & the Late-Binding Bug",
            description: "Closures capture variables by reference â€” not by value. This causes the loop bug.",
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
print([f() for f in bad])   # [4,4,4,4,4] â€” all see final i

# Fix 1: default argument captures value
good = [lambda i=i: i for i in range(5)]
print([f() for f in good])  # [0,1,2,3,4]`
          }
        ],
        playground: {
          title: "ðŸŽ® Closure Factory",
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
    print(f"  {'âœ“' if ok else 'âœ—'} {msg}")`
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
          { q: "Explain the late-binding closure bug.", a: "Closures capture variables by reference, not value. In a loop, all closures share the same loop variable â€” when called, they all see its final value. Fix: capture current value as a default argument (lambda i=i: i) or use a factory function (def make(n): return lambda: n)." }
        ]
      },
      {
        id: "4.5",
        title: "Lambda & Functional Basics",
        duration: "25 min",
        content: `
<h2>Lambda Functions</h2>
<pre style="background:var(--bg-code);padding:.75rem 1rem;border-radius:8px;font-size:.85rem;color:var(--teal);font-family:var(--font-mono)">lambda params: expression</pre>
<p>Use only as inline throwaway functions â€” never assign to variables (PEP 8). Lambdas shine as the <code>key=</code> argument for sorted().</p>
<h2>sorted() with key=</h2>
<p>The key function is called once per element â€” not on every comparison. This makes complex sort keys efficient. Tuple keys enable multi-column sorting.</p>
<h2>map() and filter()</h2>
<p>Both return lazy iterators in Python 3. List comprehensions are usually clearer, but map with a built-in function (no lambda) is often more efficient: <code>map(str.strip, items)</code>.</p>
<h2>functools.partial</h2>
<p>Pre-fill arguments to create specialized functions. Useful for adapting function signatures.</p>
<div class="interview-tip"><div class="interview-tip-label">ðŸŽ¯ Practical Python knowledge</div><p>sorted() is stable. key= is called once per element (Schwartzian transform). map/filter return iterators in Python 3 â€” wrap in list() to materialize.</p></div>`,
        codeExamples: [
          {
            id: "ce-4-5-1",
            title: "sorted() with Complex Keys",
            description: "Multi-column sorts using tuple keys â€” essential for data processing.",
            code: `students = [
    {"name": "Charlie", "gpa": 3.7, "age": 22},
    {"name": "Alice",   "gpa": 3.9, "age": 21},
    {"name": "Bob",     "gpa": 3.7, "age": 23},
]

by_gpa = sorted(students, key=lambda s: s["gpa"], reverse=True)
print("By GPA desc:", [s["name"] for s in by_gpa])

# Multi-key: GPA desc, then name asc
by_gpa_name = sorted(students, key=lambda s: (-s["gpa"], s["name"]))
print("By GPAâ†“ nameâ†‘:", [(s["name"],s["gpa"]) for s in by_gpa_name])

# No lambda needed for built-in key
words = ["banana","Apple","cherry","DATE"]
print("Case-insensitive:", sorted(words, key=str.lower))`
          },
          {
            id: "ce-4-5-2",
            title: "map, filter, functools.partial",
            description: "Functional tools â€” understand map/filter and the partial pattern.",
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
          title: "ðŸŽ® Functional Pipeline Lab",
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
    print(f"  {p['name']:<10} â‚¹{p['price']:>7,}  â­{p['rating']}")`
        },
        exercises: [
          {
            id: "exe-4-5-1", title: "Multi-Column Sort", difficulty: "medium",
            description: "Sort employees: dept asc, salary desc, name asc â€” in ONE sorted() call.",
            starterCode: `employees = [
    {"name":"Alice",  "dept":"Eng","salary":95000},
    {"name":"Bob",    "dept":"Mkt","salary":72000},
    {"name":"Charlie","dept":"Eng","salary":88000},
    {"name":"Dave",   "dept":"Mkt","salary":72000},
    {"name":"Eve",    "dept":"Eng","salary":95000},
]
sorted_emps = sorted(employees, key=lambda e: (e["dept"], -e["salary"], e["name"]))
for e in sorted_emps:
    print(f"  {e['dept']:<5} {e['name']:<10} â‚¹{e['salary']:,}")`,
            solution: `employees = [
    {"name":"Alice",  "dept":"Eng","salary":95000},
    {"name":"Bob",    "dept":"Mkt","salary":72000},
    {"name":"Charlie","dept":"Eng","salary":88000},
    {"name":"Dave",   "dept":"Mkt","salary":72000},
    {"name":"Eve",    "dept":"Eng","salary":95000},
]
sorted_emps = sorted(employees, key=lambda e: (e["dept"], -e["salary"], e["name"]))
for e in sorted_emps:
    print(f"  {e['dept']:<5} {e['name']:<10} â‚¹{e['salary']:,}")`,
            solutionExplanation: "Tuple comparison is lexicographic. Negating salary reverses sort order for that field while other fields stay ascending. This one-key-tuple approach is the canonical Python multi-column sort."
          }
        ],
        interviewQuestions: [
          { q: "When should you use lambda vs def?", a: "Lambda: only as an inline throwaway passed immediately to another function (sorted key, map, filter). Never assign lambda to a variable â€” use def instead (better tracebacks, docstrings, reuse). PEP 8: 'the use of lambda is... never necessary'." },
          { q: "List comprehensions vs map/filter?", a: "Comprehensions are usually preferred: more readable, no lambda needed, slightly faster for complex cases. map/filter preferred when: using a built-in function (map(str.strip, items) â€” no lambda), composing functional pipelines, or working with infinite iterators. Both return lazy iterators in Python 3 (map/filter) or immediate lists (comprehensions)." },
          { q: "What does functools.partial do?", a: "partial(func, *args, **kwargs) returns a new callable with some arguments pre-filled. Useful for: adapting function signatures to callbacks, creating specialized versions of general functions, reducing repetition. Alternative: lambda â€” partial is cleaner when pre-filling many arguments." }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MODULES 5â€“17  (Detailed Outlines)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id: 5, title: "Data Structures", icon: "ðŸ“š", color: "#00d4ff",
    difficulty: "intermediate", duration: "4â€“5 hours",
    description: "Deep-dive into Python's built-in data structures â€” lists, tuples, dicts, and sets â€” with time complexity, use cases, and interview patterns.",
    lessons: [
      // â”€â”€ 5.1 Lists â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "lesson-5-1", title: "Lists â€” Python's Workhorse", duration: "40 min",
        content: `
<h2>Lists in Depth</h2>
<p>A <strong>list</strong> is Python's most versatile built-in data structure â€” an ordered, mutable sequence that can hold any mix of types.</p>

<h3>Creating Lists</h3>
<pre><code>nums   = [1, 2, 3, 4, 5]
mixed  = [42, "hello", True, 3.14, [1, 2]]
empty  = []
repeat = [0] * 5    # [0, 0, 0, 0, 0]
built  = list(range(1, 6))  # [1, 2, 3, 4, 5]</code></pre>

<h3>Indexing & Slicing</h3>
<p>Python uses zero-based indexing and supports negative indices (counting from the end).</p>
<pre><code>a = [10, 20, 30, 40, 50]
a[0]    # 10  â€” first element
a[-1]   # 50  â€” last element
a[1:3]  # [20, 30]  â€” slice [start:stop)
a[::2]  # [10, 30, 50]  â€” every other
a[::-1] # [50, 40, 30, 20, 10]  â€” reversed</code></pre>

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
  <span class="callout-icon">âš ï¸</span>
  <div class="callout-body"><strong>Don't use a list as a queue!</strong><p><code>list.pop(0)</code> is O(n) because every element shifts. Use <code>collections.deque</code> for queues â€” it has O(1) <code>popleft()</code>.</p></div>
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
  <span class="callout-icon">ðŸ’¡</span>
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

# list as queue â€” O(n) per pop(0)
lst = list(range(N))
t0 = time.perf_counter()
while lst:
    lst.pop(0)
list_time = time.perf_counter() - t0

# deque as queue â€” O(1) per popleft()
dq = deque(range(N))
t0 = time.perf_counter()
while dq:
    dq.popleft()
deque_time = time.perf_counter() - t0

print(f"list.pop(0) Ã— {N}: {list_time:.3f}s")
print(f"deque.popleft() Ã— {N}: {deque_time:.3f}s")
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
            solutionExplanation: "We use a set to track numbers seen so far. For each number n, we check if target-n is already in the set (O(1) lookup). This gives O(n) time vs O(nÂ²) for a nested loop approach."
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
          { q: "What is the time complexity of list.insert(0, x) and why?", a: "O(n) â€” inserting at the front requires shifting every existing element one position to the right. Python lists are backed by dynamic arrays, so random insertion is expensive. For O(1) front insertion, use collections.deque." },
          { q: "What's the difference between list.sort() and sorted()?", a: "list.sort() mutates the list in-place and returns None. sorted() leaves the original untouched and returns a new sorted list. Both use Timsort (O(n log n)) and accept key= and reverse= arguments. Prefer sorted() when you need to keep the original." },
          { q: "How does Python's list grow dynamically?", a: "Lists over-allocate memory using a growth factor of roughly 1.125x (plus 4). When you append and hit capacity, Python allocates a new, larger array and copies all elements. This makes append O(1) amortised even though individual resizes are O(n)." },
          { q: "When would you NOT use a list?", a: "Use a set for O(1) membership testing. Use collections.deque for O(1) front insertions/deletions. Use a heap (heapq) for priority queue. Use numpy arrays for numeric computation. Use a dict for key-value mapping." }
        ]
      },

      // â”€â”€ 5.2 Tuples & Named Tuples â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "lesson-5-2", title: "Tuples, Named Tuples & Unpacking", duration: "25 min",
        content: `
<h2>Tuples â€” Immutable Sequences</h2>
<p>A <strong>tuple</strong> is an immutable, ordered sequence. Once created, it cannot be changed. This makes it:</p>
<ul>
  <li><strong>Hashable</strong> â€” can be used as dict keys or in sets</li>
  <li><strong>Thread-safe</strong> â€” no synchronisation needed</li>
  <li><strong>Semantically clear</strong> â€” signals "this should not change"</li>
</ul>

<h3>Creating Tuples</h3>
<pre><code>point  = (3, 4)
triple = (1, 2, 3)
single = (42,)      # trailing comma required â€” (42) is just 42
empty  = ()
packed = 1, 2, 3    # parentheses optional (tuple packing)</code></pre>

<h3>Unpacking</h3>
<p>Python's tuple (and iterable) unpacking is one of its most elegant features:</p>
<pre><code>x, y = (3, 4)            # basic unpacking
a, b, *rest = [1,2,3,4,5]  # *rest captures the tail â†’ [3,4,5]
*head, last = [1,2,3,4,5]  # head=[1,2,3,4], last=5

# Swap without temp variable (idiomatic Python!)
a, b = b, a

# In loops
pairs = [(1, 'one'), (2, 'two'), (3, 'three')]
for num, word in pairs:
    print(f"{num} = {word}")</code></pre>

<h3>Named Tuples</h3>
<p><code>collections.namedtuple</code> lets you access fields by name <em>and</em> index â€” great for records without the overhead of a full class:</p>
<pre><code>from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)    # 3 4
print(p[0], p[1])  # 3 4  (still indexable)
print(p)           # Point(x=3, y=4)</code></pre>

<h3>Tuple vs List â€” When to Use Which</h3>
<table style="width:100%;border-collapse:collapse;font-size:.87rem;">
<tr style="background:var(--bg-surface)"><th style="padding:.4rem .6rem;text-align:left">Use Tuple</th><th style="padding:.4rem .6rem;text-align:left">Use List</th></tr>
<tr><td style="padding:.35rem .6rem">Fixed number of heterogeneous items (a row of DB results)</td><td style="padding:.35rem .6rem">Variable number of homogeneous items</td></tr>
<tr style="background:var(--bg-surface)"><td style="padding:.35rem .6rem">Dict key or set element</td><td style="padding:.35rem .6rem">Needs append/remove/sort</td></tr>
<tr><td style="padding:.35rem .6rem">Return multiple values from a function</td><td style="padding:.35rem .6rem">Building a collection incrementally</td></tr>
</table>

<div class="callout tip">
  <span class="callout-icon">ðŸ’¡</span>
  <div class="callout-body"><strong>Interview tip</strong><p>Interviewers love asking "why use a tuple instead of a list?" Answer: immutability, hashability, and communicating intent that the data is fixed.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-2-1", title: "Tuple as Dict Key â€” Coordinate Grid",
            code: `# Tuples are hashable â†’ valid dict keys
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

# namedtuple â€” lightweight, immutable
Employee = namedtuple('Employee', ['name', 'dept', 'salary'])
e1 = Employee("Alice", "Engineering", 95000)
print(e1)
print(f"{e1.name} earns {e1.salary:,}")

# namedtuple._asdict() â†’ regular dict
print(e1._asdict())

# namedtuple._replace() â†’ new tuple with some fields changed
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
            solutionExplanation: "zip(*pairs) is the transpose operation â€” it unpacks the list of pairs and re-zips them into groups by position. zip(*[(a,b),(c,d)]) gives (a,c) and (b,d)."
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
          { q: "Why can a tuple be used as a dict key but a list cannot?", a: "Dict keys must be hashable. Tuples are hashable because they're immutable â€” their contents (and thus hash value) can't change after creation. Lists are mutable, so their hash could change, which would corrupt the dict's internal hash table. Python raises TypeError if you try to hash a list." },
          { q: "What is the difference between (42) and (42,)?", a: "(42) is just the integer 42 in parentheses â€” the parentheses are for grouping, not tuple creation. (42,) is a single-element tuple. The trailing comma is what makes it a tuple. This is a common gotcha." },
          { q: "When is namedtuple preferred over a dataclass?", a: "namedtuple is preferred when you need immutability, hashability, tuple compatibility (unpacking, indexing), or minimal memory footprint. dataclass is better when you need mutability, methods, inheritance, or default values with complex logic. For Python 3.7+ projects, frozen dataclass is often preferred over namedtuple." }
        ]
      },

      // â”€â”€ 5.3 Dictionaries â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "lesson-5-3", title: "Dictionaries â€” Hash Maps in Depth", duration: "40 min",
        content: `
<h2>Dictionaries â€” Python's Most Powerful Built-in</h2>
<p>A <strong>dict</strong> is a hash table that maps keys to values. It is the backbone of Python itself â€” every object's attributes are stored in a <code>__dict__</code>.</p>

<h3>The O(1) Magic</h3>
<p>Dict lookup is O(1) average because Python computes <code>hash(key)</code> to find the bucket directly â€” no searching required. Compare to a list where you must scan O(n) elements.</p>

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

# defaultdict â€” no KeyError for missing keys
graph = defaultdict(list)
graph["A"].append("B")  # works without pre-initializing

# Counter â€” frequency counter
words = "the quick brown fox the fox".split()
freq = Counter(words)
print(freq.most_common(2))   # [('the', 2), ('fox', 2)]
freq["the"] += 1             # increment
freq.update(["fox", "fox"])  # bulk update</code></pre>

<div class="callout info">
  <span class="callout-icon">â„¹ï¸</span>
  <div class="callout-body"><strong>Dict ordering</strong><p>Since Python 3.7, dicts maintain insertion order as a language guarantee (not just an implementation detail).</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-3-1", title: "Dict as Counter â€” Word Frequency",
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
            solutionExplanation: "Python dicts preserve insertion order. 'Moving to end' is done by deleting and re-inserting. The oldest (LRU) entry is always first â€” next(iter(cache)) gives the first key."
          }
        ],
        interviewQuestions: [
          { q: "How does Python achieve O(1) average dict lookup?", a: "Python computes hash(key) to find the bucket index directly (no linear scan). Collisions are handled via open addressing (linear probing). In the worst case (all keys hash to the same bucket), it degrades to O(n), but this is extremely rare with Python's hash functions." },
          { q: "What happens when you use a mutable object as a dict key?", a: "Python raises TypeError: unhashable type. Only hashable objects (integers, strings, tuples of hashables, frozensets) can be keys. If mutable objects were allowed, their hash could change after insertion, making the key unfindable." },
          { q: "What is the difference between dict.get(key) and dict[key]?", a: "dict[key] raises KeyError if the key is absent. dict.get(key) returns None by default, or dict.get(key, default) returns the default value. Always prefer .get() when the key might not exist to avoid try/except overhead." },
          { q: "Explain dict.setdefault() and give a use case.", a: "dict.setdefault(key, default) inserts key with default if it doesn't exist, and returns the current value. Use case: grouping items â€” groups.setdefault(dept, []).append(name) initialises the list only on first encounter." }
        ]
      },

      // â”€â”€ 5.4 Sets â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "lesson-5-4", title: "Sets â€” Unique Collections & Set Algebra", duration: "25 min",
        content: `
<h2>Sets</h2>
<p>A <strong>set</strong> is an unordered collection of unique hashable elements backed by a hash table. Think of it as a dict with keys only.</p>

<h3>Creating Sets</h3>
<pre><code>s1 = {1, 2, 3}
s2 = set([1, 2, 2, 3])    # {1, 2, 3} â€” duplicates removed
s3 = set("hello")          # {'h', 'e', 'l', 'o'}
empty = set()              # NOT {} â€” that's an empty dict!</code></pre>

<h3>Set Operations</h3>
<pre><code>a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # union:        {1,2,3,4,5,6}
a & b   # intersection: {3,4}
a - b   # difference:   {1,2}    (in a but not b)
a ^ b   # symmetric diff: {1,2,5,6} (in either but not both)
a <= b  # subset check  (a âŠ† b)
a < b   # proper subset (a âŠŠ b)</code></pre>

<h3>Mutating Sets</h3>
<pre><code>s = {1, 2, 3}
s.add(4)         # add one element
s.update([5,6])  # add multiple elements
s.discard(10)    # remove if present (no error if missing)
s.remove(1)      # remove (KeyError if missing)
s.pop()          # remove and return an arbitrary element</code></pre>

<h3>frozenset â€” Immutable Set</h3>
<pre><code>fs = frozenset([1, 2, 3])
# Can be used as a dict key or inside another set
cache = {frozenset([1,2]): "pair"}</code></pre>

<div class="callout tip">
  <span class="callout-icon">ðŸ’¡</span>
  <div class="callout-body"><strong>O(1) Membership Test</strong><p>Always prefer <code>x in my_set</code> over <code>x in my_list</code> when the list is large. Set lookup is O(1); list lookup is O(n).</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-5-4-1", title: "Set Algebra â€” Finding Common Friends",
            code: `# Social network â€” who do Alice and Bob both follow?
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

print(longest_consecutive([100,4,200,1,3,2]))  # 4 â†’ [1,2,3,4]
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
            solutionExplanation: "We only begin counting from a number n if n-1 is NOT in the set (meaning n is the start of a sequence). Then we extend as far as possible. Each number is visited at most twice total â†’ O(n)."
          }
        ],
        interviewQuestions: [
          { q: "What is the time complexity of set membership testing and why?", a: "O(1) average. Sets use a hash table â€” Python computes hash(element) to find the bucket directly. This is why replacing a list with a set can turn an O(nÂ²) solution into O(n) in many interview problems." },
          { q: "How would you remove duplicates from a list while preserving order?", a: "list(dict.fromkeys(items)) â€” dicts preserve insertion order and reject duplicate keys. This is O(n) and maintains order. Alternatively: seen = set(); [seen.add(x) or x for x in items if x not in seen] (less readable)." }
        ]
      }
    ]  // end lessons for module 5
  },

];
