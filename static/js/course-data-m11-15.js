'use strict';
const MODULES_11_15 = [
  {
    id: 11, title: "Iterators & Generators", icon: "🔄", color: "#00d4ff",
    difficulty: "intermediate", duration: "3-4 hours",
    description: "One of the most interview-relevant topics: iterators, generators, yield, send(), and memory-efficient data pipelines.",
    lessons: [
      {
        id: "lesson-11-1", title: "The Iterator Protocol", duration: "30 min",
        content: `
<h2>Iterables vs Iterators</h2>
<p>These two terms are often confused but they're distinct:</p>
<ul>
  <li><strong>Iterable</strong>: any object that implements <code>__iter__()</code> -- returns an iterator. Examples: list, str, dict, range.</li>
  <li><strong>Iterator</strong>: an object with both <code>__iter__()</code> and <code>__next__()</code>. It maintains state and produces the next value on each <code>next()</code> call. When exhausted, raises <code>StopIteration</code>.</li>
</ul>

<h3>Under the Hood of a for Loop</h3>
<pre><code>for x in [1, 2, 3]:
    print(x)

# Python actually does this:
_iter = iter([1, 2, 3])      # calls __iter__()
while True:
    try:
        x = next(_iter)      # calls __next__()
        print(x)
    except StopIteration:    # signals exhaustion
        break</code></pre>

<h3>Building a Custom Iterator</h3>
<pre><code>class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self      # the iterator is itself

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val

for n in Countdown(5):
    print(n)   # 5 4 3 2 1</code></pre>

<h3>iter() and next() Builtins</h3>
<pre><code>lst = [10, 20, 30]
it = iter(lst)          # get iterator
print(next(it))         # 10
print(next(it))         # 20
print(next(it, "end"))  # 30  -- default avoids StopIteration
print(next(it, "end"))  # "end"</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Iterators are single-use</strong><p>Once exhausted, an iterator cannot be reset. An iterable (like a list) can produce a fresh iterator each time <code>iter()</code> is called. This is why you can loop over a list twice but not a file object.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-11-1-1", title: "Custom Range Iterator",
            code: `class MyRange:
    """Reimplements range() to show the iterator protocol."""
    def __init__(self, start, stop=None, step=1):
        if stop is None:
            start, stop = 0, start
        self.start = start
        self.stop  = stop
        self.step  = step

    def __iter__(self):
        current = self.start
        while (self.step > 0 and current < self.stop) or \
              (self.step < 0 and current > self.stop):
            yield current
            current += self.step

    def __len__(self):
        return max(0, (self.stop - self.start + self.step - 1) // self.step)

    def __repr__(self):
        return f"MyRange({self.start}, {self.stop}, {self.step})"

r = MyRange(1, 10, 2)
print(list(r))       # [1, 3, 5, 7, 9]
print(len(r))        # 5
print(sum(r))        # 25

# Can iterate multiple times (it's an iterable, not an iterator)
for n in r:
    print(n, end=" ")`
          },
          {
            id: "ce-11-1-2", title: "Iterator vs Iterable -- The Key Distinction",
            code: `# An iterable returns a FRESH iterator each time
lst = [1, 2, 3]
it1 = iter(lst)
it2 = iter(lst)   # independent fresh iterator
print(next(it1))  # 1
print(next(it1))  # 2
print(next(it2))  # 1 -- it2 is independent!

# An iterator returns itself
it3 = iter(it1)
print(it3 is it1)  # True -- same object!
print(next(it3))   # 3 -- continues from where it1 left off

# Practical: iterating a file object is destructive
import io
f = io.StringIO("a\\nb\\nc")
lines_1st_pass = list(f)   # ["a\\n","b\\n","c"]
lines_2nd_pass = list(f)   # [] -- exhausted!
print("First:", lines_1st_pass)
print("Second:", lines_2nd_pass)`
          }
        ],
        playground: {
          title: "Iterator Protocol Playground",
          description: "Build a Fibonacci iterator class.",
          starterCode: `class FibIterator:
    """Produces Fibonacci numbers up to n terms."""
    def __init__(self, n):
        self.n = n
        self.count = 0
        self.a, self.b = 0, 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.count >= self.n:
            raise StopIteration
        val = self.a
        self.a, self.b = self.b, self.a + self.b
        self.count += 1
        return val

fib10 = FibIterator(10)
print("First 10 Fibonacci:", list(fib10))

# After exhaustion
print("After exhaustion:", list(fib10))  # []

# Need a fresh instance
print("Fresh instance:", list(FibIterator(7)))`
        },
        exercises: [
          {
            id: "exe-11-1-1", title: "Cycle Iterator", difficulty: "easy",
            description: "Implement a Cycle class that repeatedly cycles through the given iterable forever (like itertools.cycle).",
            starterCode: `class Cycle:
    def __init__(self, iterable):
        pass

    def __iter__(self): return self
    def __next__(self): pass

c = Cycle([1, 2, 3])
result = [next(c) for _ in range(8)]
print(result)  # [1, 2, 3, 1, 2, 3, 1, 2]`,
            solution: `class Cycle:
    def __init__(self, iterable):
        self.data = list(iterable)
        self.index = 0

    def __iter__(self): return self

    def __next__(self):
        if not self.data:
            raise StopIteration
        val = self.data[self.index % len(self.data)]
        self.index += 1
        return val`,
            solutionExplanation: "We store the data as a list and use modulo arithmetic on the index to wrap around. The index grows forever; the modulo keeps the lookup within bounds."
          },
          {
            id: "exe-11-1-2", title: "Chained Iterator", difficulty: "medium",
            description: "Implement Chain(it1, it2, ...) that iterates through all given iterables in sequence (like itertools.chain).",
            starterCode: `class Chain:
    def __init__(self, *iterables):
        pass

    def __iter__(self): return self
    def __next__(self): pass

c = Chain([1, 2], [3, 4], [5])
print(list(c))  # [1, 2, 3, 4, 5]`,
            solution: `class Chain:
    def __init__(self, *iterables):
        self._iters = iter([iter(it) for it in iterables])
        self._current = next(self._iters, None)

    def __iter__(self): return self

    def __next__(self):
        while self._current is not None:
            try:
                return next(self._current)
            except StopIteration:
                self._current = next(self._iters, None)
        raise StopIteration`,
            solutionExplanation: "We keep an iterator over the list of sub-iterators. When the current sub-iterator is exhausted, we advance to the next one. When all are exhausted, we raise StopIteration."
          }
        ],
        interviewQuestions: [
          { q: "What is the difference between an iterable and an iterator?", a: "An iterable has __iter__() that returns an iterator. An iterator has both __iter__() and __next__(). Lists, dicts, strings are iterables but not iterators -- they return fresh iterators via iter(). Generators are iterators. Key difference: iterables can be iterated multiple times; iterators are single-use (once exhausted, they stay exhausted)." },
          { q: "What is StopIteration and when is it raised?", a: "StopIteration is raised by __next__() when the iterator has no more items. Python's for loop automatically catches StopIteration to end the loop -- you never see it unless you call next() manually. In generators, a return statement (or falling off the end) implicitly raises StopIteration with the return value stored in the exception's value attribute." }
        ]
      },

      {
        id: "lesson-11-2", title: "Generators & yield", duration: "35 min",
        content: `
<h2>Generators -- Lazy Evaluation</h2>
<p>A <strong>generator function</strong> contains one or more <code>yield</code> statements. When called, it returns a generator object without executing the body. The body runs lazily -- only when <code>next()</code> is called.</p>

<h3>Generator Function Mechanics</h3>
<pre><code>def countdown(n):
    print(f"Starting from {n}")
    while n > 0:
        yield n        # suspend here, return n to caller
        n -= 1         # resume here when next() is called again
    print("Done!")     # runs after last yield

gen = countdown(3)    # body NOT executed yet
print(next(gen))      # "Starting from 3", returns 3
print(next(gen))      # returns 2
print(next(gen))      # returns 1
# print(next(gen))    # "Done!" then StopIteration</code></pre>

<h3>Memory Efficiency</h3>
<pre><code>import sys

# List: allocates all N elements immediately
squares_list = [x**2 for x in range(1_000_000)]
print(sys.getsizeof(squares_list))  # ~8 MB

# Generator: stores only the current frame (~200 bytes)
squares_gen = (x**2 for x in range(1_000_000))
print(sys.getsizeof(squares_gen))   # ~112 bytes</code></pre>

<h3>Infinite Generators</h3>
<pre><code>def integers(start=0):
    n = start
    while True:
        yield n
        n += 1

gen = integers()
print([next(gen) for _ in range(5)])  # [0, 1, 2, 3, 4]

# Combine with itertools.islice to take N items
from itertools import islice
first_100 = list(islice(integers(), 100))</code></pre>

<h3>yield from -- Delegate to Sub-Generator</h3>
<pre><code>def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)  # delegate recursively
        else:
            yield item

data = [1, [2, 3], [4, [5, 6]]]
print(list(flatten(data)))  # [1, 2, 3, 4, 5, 6]</code></pre>
`,
        codeExamples: [
          {
            id: "ce-11-2-1", title: "Generator Pipeline -- Memory-Efficient ETL",
            code: `import sys

def read_numbers(n):
    """Simulate reading n records from a source."""
    for i in range(1, n+1):
        yield i

def filter_even(nums):
    for n in nums:
        if n % 2 == 0:
            yield n

def square(nums):
    for n in nums:
        yield n ** 2

def take(n, iterable):
    for i, item in enumerate(iterable):
        if i >= n: break
        yield item

# Build pipeline -- nothing runs yet!
source   = read_numbers(1_000_000)
evens    = filter_even(source)
squared  = square(evens)
result   = take(5, squared)

# Now run it -- processes one element at a time
print("First 5 even squares:", list(result))

# Compare memory: list vs generator
big_list = [x**2 for x in range(0, 1_000_000, 2)][:5]
big_gen  = take(5, square(filter_even(read_numbers(1_000_000))))
print("Same result:", big_list == list(big_gen))`
          },
          {
            id: "ce-11-2-2", title: "yield from -- Recursive Flattening",
            code: `def flatten(items):
    for item in items:
        if hasattr(item, '__iter__') and not isinstance(item, (str, bytes)):
            yield from flatten(item)
        else:
            yield item

nested = [1, [2, [3, 4]], [5, [6, [7, 8]]], "hello", 9]
print(list(flatten(nested)))

# yield from also works with return values
def subgen():
    yield 1
    yield 2
    return "sub done"   # this value is StopIteration.value

def gen():
    result = yield from subgen()   # captures the return value!
    print("Subgen returned:", result)
    yield 3

print(list(gen()))  # [1, 2, 3]  -- and prints "Subgen returned: sub done"`
          }
        ],
        playground: {
          title: "Generator Playground",
          description: "Build a lazy prime number generator.",
          starterCode: `def is_prime(n):
    if n < 2: return False
    if n == 2: return True
    if n % 2 == 0: return False
    return all(n % i != 0 for i in range(3, int(n**0.5)+1, 2))

def primes():
    """Infinite generator of prime numbers."""
    n = 2
    while True:
        if is_prime(n):
            yield n
        n += 1

def take(n, gen):
    """Take first n items from generator."""
    return [next(gen) for _ in range(n)]

# First 20 primes
gen = primes()
print("First 20 primes:", take(20, gen))

# Primes between 100 and 150
from itertools import takewhile, dropwhile
gen2 = primes()
in_range = list(takewhile(lambda x: x <= 150,
                dropwhile(lambda x: x < 100, gen2)))
print("Primes 100-150:", in_range)`
        },
        exercises: [
          {
            id: "exe-11-2-1", title: "Implement range() as a Generator", difficulty: "easy",
            description: "Write gen_range(start, stop, step=1) as a generator function that behaves like range().",
            starterCode: `def gen_range(start, stop=None, step=1):
    pass

print(list(gen_range(5)))          # [0,1,2,3,4]
print(list(gen_range(2, 10, 2)))   # [2,4,6,8]
print(list(gen_range(10, 0, -2)))  # [10,8,6,4,2]`,
            solution: `def gen_range(start, stop=None, step=1):
    if stop is None:
        start, stop = 0, start
    current = start
    while (step > 0 and current < stop) or (step < 0 and current > stop):
        yield current
        current += step`,
            solutionExplanation: "We handle the two-argument form (stop only) via the None default. The while condition handles both forward and backward steps correctly."
          },
          {
            id: "exe-11-2-2", title: "Running Average Generator", difficulty: "medium",
            description: "Write a generator that yields the running average of an incoming stream of numbers.",
            starterCode: `def running_average(numbers):
    """Yield the running average after each new number."""
    pass

data = [10, 20, 30, 40, 50]
avgs = list(running_average(data))
print(avgs)  # [10.0, 15.0, 20.0, 25.0, 30.0]`,
            solution: `def running_average(numbers):
    total = 0
    count = 0
    for n in numbers:
        total += n
        count += 1
        yield total / count`,
            solutionExplanation: "We accumulate the sum and count as we iterate. After each new number, we yield the current average. This computes the running average in a single pass with O(1) extra space."
          }
        ],
        interviewQuestions: [
          { q: "What does the yield keyword do?", a: "yield suspends the generator function and returns a value to the caller. The function's local state (local variables, instruction pointer) is preserved. The next call to next() resumes execution from right after the yield statement. Unlike return, yield can be called multiple times -- once per item in the sequence." },
          { q: "How are generators more memory-efficient than lists?", a: "A list materialises all values in memory at once. A generator produces values one at a time on demand, storing only the current execution frame (~100-200 bytes). For 1 million items, a list uses ~8 MB while a generator uses ~112 bytes. This is critical for processing large files, database cursors, or infinite sequences." },
          { q: "What is yield from and when would you use it?", a: "yield from iterable is shorthand for 'for item in iterable: yield item', but it also passes send() and throw() calls to the sub-generator, and captures the sub-generator's return value. Use it for: recursive generators (tree traversal, flatten), composing generators without boilerplate for-loops, and coroutine delegation." }
        ]
      },

      {
        id: "lesson-11-3", title: "Generator Pipelines & Advanced Features", duration: "25 min",
        content: `
<h2>Generator Pipelines</h2>
<p>Because generators are lazy, you can chain them into Unix-pipe-style data processing pipelines with no intermediate memory allocation.</p>

<pre><code>import csv, io

def read_rows(text):
    for row in csv.DictReader(io.StringIO(text)):
        yield row

def filter_active(rows):
    for row in rows:
        if row["active"] == "True":
            yield row

def extract_name(rows):
    for row in rows:
        yield row["name"].upper()

csv_data = "name,active\\nAlice,True\\nBob,False\\nCarol,True"
pipeline = extract_name(filter_active(read_rows(csv_data)))
print(list(pipeline))  # ['ALICE', 'CAROL']</code></pre>

<h3>Generator .send() -- Two-Way Communication</h3>
<pre><code>def accumulator():
    total = 0
    while True:
        value = yield total    # yield current total, receive new value
        if value is None:
            break
        total += value

gen = accumulator()
next(gen)          # prime the generator (advance to first yield)
gen.send(10)       # total = 10
gen.send(20)       # total = 30
result = gen.send(5)   # total = 35
print(result)      # 35</code></pre>

<h3>Generator .throw() and .close()</h3>
<pre><code>def gen():
    try:
        yield 1
        yield 2
    except ValueError as e:
        print(f"Got error: {e}")
        yield -1
    finally:
        print("Cleanup!")   # always runs, even on .close()

g = gen()
print(next(g))          # 1
print(g.throw(ValueError, "oops"))  # "Got error: oops", returns -1
g.close()               # "Cleanup!" -- triggers GeneratorExit inside</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Interview favourite</strong><p>The classic interview question is "implement a data pipeline". Generators are the perfect answer: lazy, memory-efficient, composable. Know how to chain <code>filter -> transform -> aggregate</code> with generators.</p></div>
</div>
`,
        codeExamples: [
          {
            id: "ce-11-3-1", title: "Log File Pipeline",
            code: `import re
import io

# Simulate a large log file
log_data = """
2024-01-15 09:00:01 INFO  Server started
2024-01-15 09:01:15 ERROR Database timeout: users table
2024-01-15 09:02:00 INFO  Connection retry succeeded
2024-01-15 09:05:22 ERROR Disk space below 10%: /dev/sda1
2024-01-15 09:10:00 WARNING CPU spike: 95%
2024-01-15 09:15:00 ERROR Memory exhausted: heap dump
"""

def parse_log_lines(text):
    pattern = re.compile(
        r'(?P<date>\\S+) (?P<time>\\S+) (?P<level>\\S+)\\s+(?P<msg>.*)'
    )
    for line in io.StringIO(text):
        m = pattern.match(line.strip())
        if m:
            yield m.groupdict()

def filter_level(records, level):
    for r in records:
        if r["level"] == level:
            yield r

def extract_messages(records):
    for r in records:
        yield f"[{r['time']}] {r['msg']}"

# Pipeline: parse -> filter errors -> extract messages
errors = extract_messages(
    filter_level(
        parse_log_lines(log_data),
        "ERROR"
    )
)

print("=== ERROR Messages ===")
for msg in errors:
    print(" ", msg)`
          }
        ],
        playground: {
          title: "Pipeline Playground",
          description: "Build a complete data processing pipeline using generators.",
          starterCode: `# Data processing pipeline: parse -> clean -> transform -> aggregate

def generate_records(n):
    """Source: generates n student records."""
    import random
    names = ["Alice","Bob","Carol","Dave","Eve","Frank","Grace"]
    for i in range(n):
        yield {
            "id": i+1,
            "name": random.choice(names),
            "score": random.randint(40, 100),
            "passed": random.choice([True, False, True, True])
        }

def filter_passed(records):
    for r in records:
        if r["passed"]:
            yield r

def add_grade(records):
    def grade(score):
        if score >= 90: return "A"
        if score >= 80: return "B"
        if score >= 70: return "C"
        return "D"
    for r in records:
        yield {**r, "grade": grade(r["score"])}

def top_scorers(records, n=3):
    sorted_records = sorted(records, key=lambda r: r["score"], reverse=True)
    yield from sorted_records[:n]

# Run pipeline
import random; random.seed(42)

pipeline = top_scorers(
    add_grade(
        filter_passed(
            generate_records(20)
        )
    )
)

print("=== Top 3 Passing Students ===")
for s in pipeline:
    print(f"  #{s['id']} {s['name']:6} score={s['score']} grade={s['grade']}")`
        },
        exercises: [
          {
            id: "exe-11-3-1", title: "Batch Generator", difficulty: "medium",
            description: "Write a batched(iterable, size) generator that yields items in fixed-size batches.",
            starterCode: `from itertools import islice

def batched(iterable, size):
    """Yield successive size-length tuples from iterable."""
    pass

data = range(1, 11)
for batch in batched(data, 3):
    print(batch)
# (1, 2, 3)
# (4, 5, 6)
# (7, 8, 9)
# (10,)`,
            solution: `from itertools import islice

def batched(iterable, size):
    it = iter(iterable)
    while True:
        batch = tuple(islice(it, size))
        if not batch:
            break
        yield batch`,
            solutionExplanation: "We get an iterator from the input once, then repeatedly take 'size' items using islice. When islice returns an empty tuple, the iterator is exhausted and we break. Note: Python 3.12+ has itertools.batched() built-in."
          }
        ],
        interviewQuestions: [
          { q: "How would you process a multi-gigabyte log file efficiently in Python?", a: "Use a generator pipeline: def read_lines(path): with open(path) as f: for line in f: yield line. Then chain filter/transform generators. Each stage processes one line at a time -- memory usage stays constant regardless of file size. This is the standard answer for 'large file processing' interview questions." },
          { q: "What happens when you call next() on an exhausted generator?", a: "It raises StopIteration. This is normal -- it's how Python's for loop knows to stop. If you want a default value instead of an exception, use next(gen, default). Once a generator is exhausted it stays exhausted -- there's no rewind. Create a new generator object if you need to iterate again." }
        ]
      }
    ]
  },

  {
    id: 12, title: "Decorators & Advanced Context Managers", icon: "🎨", color: "#9d8fff",
    difficulty: "advanced", duration: "3-4 hours",
    description: "Write, stack, and parameterize decorators. Build context managers. Understand @property deeply.",
    lessons: [
      {
        id: "lesson-12-1", title: "Function Decorators from Scratch", duration: "35 min",
        content: `
<h2>What is a Decorator?</h2>
<p>A decorator is a function that takes a function as input, wraps it with additional behaviour, and returns the wrapped function. The <code>@syntax</code> is just syntactic sugar:</p>

<pre><code>@my_decorator
def greet(name):
    return f"Hello, {name}"

# Exactly equivalent to:
def greet(name):
    return f"Hello, {name}"
greet = my_decorator(greet)</code></pre>

<h3>Writing a Basic Decorator</h3>
<pre><code>import functools

def my_decorator(func):
    @functools.wraps(func)     # preserve __name__, __doc__, etc.
    def wrapper(*args, **kwargs):
        print(f"Before {func.__name__}")
        result = func(*args, **kwargs)
        print(f"After {func.__name__}")
        return result
    return wrapper

@my_decorator
def add(a, b):
    return a + b

print(add(3, 4))   # "Before add", 7, "After add"
print(add.__name__)  # "add" -- preserved by @wraps</code></pre>

<div class="callout warn">
  <span class="callout-icon">âš </span>
  <div class="callout-body"><strong>Always use @functools.wraps</strong><p>Without <code>@wraps(func)</code>, the wrapper function steals the wrapped function's identity. <code>add.__name__</code> would return <code>"wrapper"</code>, breaking debugging, documentation, and tools like pytest.</p></div>
</div>

<h3>Common Decorator Patterns</h3>
<pre><code>import time, functools

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        t0 = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - t0
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

def validate_positive(*arg_names):
    """Decorator factory -- validate that named args are positive."""
    def decorator(func):
        import inspect
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            sig = inspect.signature(func)
            bound = sig.bind(*args, **kwargs)
            for name in arg_names:
                if name in bound.arguments and bound.arguments[name] <= 0:
                    raise ValueError(f"'{name}' must be positive")
            return func(*args, **kwargs)
        return wrapper
    return decorator</code></pre>
`,
        codeExamples: [
          {
            id: "ce-12-1-1", title: "Timer, Logger & Cache Decorators",
            code: `import functools, time

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        ms = (time.perf_counter() - start) * 1000
        print(f"  {func.__name__}() -> {ms:.2f}ms")
        return result
    return wrapper

def log_calls(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ", ".join(repr(a) for a in args)
        kwargs_str = ", ".join(f"{k}={v!r}" for k,v in kwargs.items())
        all_args = ", ".join(filter(None, [args_str, kwargs_str]))
        print(f"  CALL {func.__name__}({all_args})")
        result = func(*args, **kwargs)
        print(f"  RETURN {result!r}")
        return result
    return wrapper

# Stacking decorators -- applied bottom-up
@timer
@log_calls
def power(base, exp):
    return base ** exp

print("=== power(2, 10) ===")
power(2, 10)

print("\\n=== Function metadata preserved ===")
print("Name:", power.__name__)
print("Wrapped:", power.__wrapped__.__name__)`
          },
          {
            id: "ce-12-1-2", title: "Stacking Decorators",
            code: `import functools

def bold(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<b>{func(*args, **kwargs)}</b>"
    return wrapper

def italic(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return f"<i>{func(*args, **kwargs)}</i>"
    return wrapper

def uppercase(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs).upper()
    return wrapper

# Applied bottom-up: uppercase first, then italic, then bold
@bold
@italic
@uppercase
def greet(name):
    return f"hello, {name}"

print(greet("Alice"))   # <b><i>HELLO, ALICE</i></b>

# Equivalent to:
# bold(italic(uppercase(greet)))("Alice")`
          }
        ],
        playground: {
          title: "Decorator Playground",
          description: "Build a rate-limiter decorator.",
          starterCode: `import functools
import time
from collections import deque

def rate_limit(calls_per_second):
    """Allow at most calls_per_second calls. Block if exceeded."""
    def decorator(func):
        call_times = deque()

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            # Remove calls older than 1 second
            while call_times and now - call_times[0] >= 1.0:
                call_times.popleft()
            if len(call_times) >= calls_per_second:
                sleep_for = 1.0 - (now - call_times[0])
                print(f"  Rate limit hit. Waiting {sleep_for:.2f}s...")
                time.sleep(sleep_for)
                call_times.popleft()
            call_times.append(time.time())
            return func(*args, **kwargs)
        return wrapper
    return decorator

@rate_limit(calls_per_second=2)
def api_call(n):
    print(f"  API call #{n} at {time.time():.2f}")
    return f"result-{n}"

import time
start = time.time()
for i in range(1, 6):
    api_call(i)
print(f"Total time: {time.time()-start:.2f}s")`
        },
        exercises: [
          {
            id: "exe-12-1-1", title: "Memoize Decorator", difficulty: "medium",
            description: "Write a @memoize decorator that caches results. It should support max_size to evict the oldest entry when full.",
            starterCode: `import functools

def memoize(max_size=None):
    def decorator(func):
        cache = {}
        order = []  # track insertion order for eviction
        @functools.wraps(func)
        def wrapper(*args):
            if args in cache:
                return cache[args]
            result = func(*args)
            # evict oldest if at capacity
            if max_size and len(cache) >= max_size:
                oldest = order.pop(0)
                del cache[oldest]
            cache[args] = result
            order.append(args)
            return result
        wrapper.cache_info = lambda: {"size": len(cache), "max": max_size}
        return wrapper
    return decorator

@memoize(max_size=3)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

for i in range(10):
    print(f"fib({i}) = {fib(i)}")
print("Cache:", fib.cache_info())`,
            solution: `import functools

def memoize(max_size=None):
    def decorator(func):
        cache = {}
        order = []
        @functools.wraps(func)
        def wrapper(*args):
            if args in cache:
                return cache[args]
            result = func(*args)
            if max_size and len(cache) >= max_size:
                oldest = order.pop(0)
                del cache[oldest]
            cache[args] = result
            order.append(args)
            return result
        wrapper.cache_info = lambda: {"size": len(cache), "max": max_size}
        return wrapper
    return decorator`,
            solutionExplanation: "The decorator factory creates a closure that captures the cache dict and order list. On cache hit, we return immediately. On miss, we compute, optionally evict the oldest entry (FIFO), store the result, and return it."
          }
        ],
        interviewQuestions: [
          { q: "How do decorators work under the hood?", a: "@my_decorator above def f() is exactly f = my_decorator(f). The decorator receives the original function, wraps it in a closure (the wrapper), and returns the wrapper. The wrapper has access to the original function via the closure, calls it, and can add behaviour before/after." },
          { q: "Why is @functools.wraps important?", a: "Without @wraps(func), the wrapper function has __name__='wrapper', __doc__=None, etc. This breaks: debugging (tracebacks show 'wrapper' not the real name), documentation tools, pytest's test discovery, and inspect.signature(). @wraps copies the original function's metadata onto the wrapper and sets __wrapped__ to the original." },
          { q: "What is the order of decorator application?", a: "Decorators are applied bottom-up. @a @b @c def f() is equivalent to a(b(c(f))). When f() is called, the order is: a's wrapper -> b's wrapper -> c's wrapper -> original f -> back up. Remember: the decorator nearest to the function definition is applied first (innermost)." }
        ]
      },

      {
        id: "lesson-12-2", title: "Parameterized & Class-Based Decorators", duration: "30 min",
        content: `
<h2>Parameterized Decorators (Decorator Factories)</h2>
<p>When you need to pass arguments to a decorator (<code>@retry(max_attempts=3)</code>), you need an extra level of nesting:</p>

<pre><code>def repeat(times):          # outer: accepts decorator args
    def decorator(func):    # middle: accepts the function
        @functools.wraps(func)
        def wrapper(*args, **kwargs):  # inner: the actual wrapper
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)     # repeat(3) is called first -> returns decorator
def greet(name):     # decorator(greet) -> returns wrapper
    print(f"Hi {name}!")

greet("Alice")   # "Hi Alice!" x 3</code></pre>

<h3>Class-Based Decorators</h3>
<p>Using a class with <code>__call__</code> makes stateful decorators cleaner:</p>
<pre><code>class Counter:
    """Counts how many times a function is called."""
    def __init__(self, func):
        functools.update_wrapper(self, func)
        self.func = func
        self.calls = 0

    def __call__(self, *args, **kwargs):
        self.calls += 1
        return self.func(*args, **kwargs)

    def reset(self):
        self.calls = 0

@Counter
def add(a, b):
    return a + b

add(1, 2); add(3, 4); add(5, 6)
print(f"add called {add.calls} times")  # 3
add.reset()
print(f"After reset: {add.calls}")      # 0</code></pre>

<h3>Optional-Argument Decorator Pattern</h3>
<pre><code>def retry(_func=None, *, max_attempts=3):
    """Works both as @retry and @retry(max_attempts=5)."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for i in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception:
                    if i == max_attempts - 1:
                        raise
        return wrapper
    if _func is not None:
        return decorator(_func)  # called as @retry
    return decorator             # called as @retry(max_attempts=5)</code></pre>
`,
        codeExamples: [
          {
            id: "ce-12-2-1", title: "Type-Checking Decorator Factory",
            code: `import functools

def typecheck(**type_hints):
    """Validate function argument types at runtime."""
    def decorator(func):
        import inspect
        sig = inspect.signature(func)

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            bound = sig.bind(*args, **kwargs)
            bound.apply_defaults()
            for param_name, value in bound.arguments.items():
                if param_name in type_hints:
                    expected = type_hints[param_name]
                    if not isinstance(value, expected):
                        raise TypeError(
                            f"'{param_name}' expected {expected.__name__}, "
                            f"got {type(value).__name__}: {value!r}"
                        )
            return func(*args, **kwargs)
        return wrapper
    return decorator

@typecheck(name=str, age=int, score=float)
def create_profile(name, age, score=0.0):
    return {"name": name, "age": age, "score": score}

print(create_profile("Alice", 30, 9.5))

try:
    create_profile("Bob", "thirty", 8.0)
except TypeError as e:
    print(f"Error: {e}")`
          }
        ],
        playground: {
          title: "Decorator Factory Playground",
          description: "Build a @cache_with_ttl decorator that expires entries after N seconds.",
          starterCode: `import functools
import time

def cache_with_ttl(seconds):
    """Cache results but expire them after 'seconds'."""
    def decorator(func):
        cache = {}  # key -> (value, expiry_time)

        @functools.wraps(func)
        def wrapper(*args):
            now = time.time()
            if args in cache:
                value, expiry = cache[args]
                if now < expiry:
                    print(f"  Cache HIT for {args}")
                    return value
                else:
                    print(f"  Cache EXPIRED for {args}")

            result = func(*args)
            cache[args] = (result, now + seconds)
            print(f"  Cache SET for {args} (expires in {seconds}s)")
            return result

        wrapper.cache_clear = lambda: cache.clear()
        return wrapper
    return decorator

@cache_with_ttl(seconds=2)
def slow_square(n):
    time.sleep(0.1)  # simulate slow computation
    return n * n

print(slow_square(4))    # computed
print(slow_square(4))    # cached
print(slow_square(9))    # computed
time.sleep(2.1)          # wait for TTL to expire
print(slow_square(4))    # expired -> recomputed`
        },
        exercises: [
          {
            id: "exe-12-2-1", title: "Debug Mode Decorator", difficulty: "easy",
            description: "Write a @debug(enabled=True) decorator factory that prints call info and return value when enabled, and is a no-op when disabled.",
            starterCode: `import functools

def debug(enabled=True):
    def decorator(func):
        if not enabled:
            return func  # no-op: return original unchanged
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # print call info and return value
            pass
        return wrapper
    return decorator

@debug(enabled=True)
def multiply(x, y):
    return x * y

@debug(enabled=False)
def add(x, y):
    return x + y

multiply(3, 4)
add(1, 2)  # no output`,
            solution: `import functools

def debug(enabled=True):
    def decorator(func):
        if not enabled:
            return func
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            args_repr = [repr(a) for a in args]
            kwargs_repr = [f"{k}={v!r}" for k,v in kwargs.items()]
            signature = ", ".join(args_repr + kwargs_repr)
            print(f"Calling {func.__name__}({signature})")
            result = func(*args, **kwargs)
            print(f"{func.__name__} returned {result!r}")
            return result
        return wrapper
    return decorator`,
            solutionExplanation: "When disabled, we return the original function unchanged -- zero overhead. When enabled, the wrapper prints the call signature and return value. Returning the original function (not a wrapper) when disabled means there's truly no performance cost."
          }
        ],
        interviewQuestions: [
          { q: "Why does a parameterized decorator need three levels of nesting?", a: "Level 1 (outermost): takes the decorator arguments and returns a decorator. Level 2: takes the function and returns a wrapper. Level 3: the actual wrapper that runs on each call. So @retry(times=3) calls retry(3) which returns a decorator, which is then applied to the function." },
          { q: "What is the advantage of a class-based decorator over a function-based one?", a: "Class-based decorators are better when you need state that persists across calls (call counter, cache, rate limiter). The state lives cleanly in instance attributes rather than mutable closure variables. They also support additional methods (like reset() or cache_clear()). Function-based decorators are simpler for stateless behaviour." }
        ]
      },

      {
        id: "lesson-12-3", title: "Advanced Context Managers", duration: "25 min",
        content: `
<h2>Advanced Context Manager Patterns</h2>

<h3>contextlib.suppress -- Silence Expected Errors</h3>
<pre><code>from contextlib import suppress
import os

# Instead of:
try:
    os.remove("maybe_exists.txt")
except FileNotFoundError:
    pass

# Write:
with suppress(FileNotFoundError):
    os.remove("maybe_exists.txt")</code></pre>

<h3>contextlib.ExitStack -- Dynamic Context Managers</h3>
<pre><code>from contextlib import ExitStack

file_paths = ["a.txt", "b.txt", "c.txt"]

# Open variable number of files
with ExitStack() as stack:
    files = [stack.enter_context(open(p)) for p in file_paths]
    for f in files:
        print(f.read())
# All files closed on exit, even if one raises</code></pre>

<h3>contextlib.redirect_stdout</h3>
<pre><code>from contextlib import redirect_stdout
import io

output = io.StringIO()
with redirect_stdout(output):
    print("This goes to the buffer, not the console")

text = output.getvalue()
print(f"Captured: {text!r}")</code></pre>

<h3>Reentrant Context Managers</h3>
<pre><code>from contextlib import contextmanager

@contextmanager
def indent(level=1):
    """Increase indentation for nested blocks."""
    import sys
    prefix = "  " * level
    original_write = sys.stdout.write
    sys.stdout.write = lambda s: original_write(
        prefix + s if s.strip() else s
    )
    try:
        yield
    finally:
        sys.stdout.write = original_write</code></pre>
`,
        codeExamples: [
          {
            id: "ce-12-3-1", title: "Practical Context Manager Patterns",
            code: `from contextlib import contextmanager, suppress, redirect_stdout
import io, time

# 1. Capture print output for testing
@contextmanager
def capture_output():
    buf = io.StringIO()
    with redirect_stdout(buf):
        yield buf
    # buf still available after exit

with capture_output() as out:
    print("Hello from inside!")
    print(42, [1, 2, 3])

print("Captured:", out.getvalue().strip())

# 2. Temporary attribute override (useful in tests)
@contextmanager
def override_attr(obj, name, value):
    original = getattr(obj, name, None)
    setattr(obj, name, value)
    try:
        yield
    finally:
        if original is None:
            delattr(obj, name)
        else:
            setattr(obj, name, original)

class Config:
    DEBUG = False

with override_attr(Config, "DEBUG", True):
    print("DEBUG mode:", Config.DEBUG)   # True
print("After:", Config.DEBUG)           # False (restored)`
          }
        ],
        playground: {
          title: "Context Manager Playground",
          description: "Build a transaction context manager that rolls back on error.",
          starterCode: `from contextlib import contextmanager

class InMemoryDB:
    def __init__(self):
        self._data = {}
        self._snapshot = None

    def begin(self):
        self._snapshot = dict(self._data)

    def commit(self):
        self._snapshot = None

    def rollback(self):
        if self._snapshot is not None:
            self._data = self._snapshot
            self._snapshot = None

    def set(self, key, value):
        self._data[key] = value

    def get(self, key, default=None):
        return self._data.get(key, default)

    def __repr__(self):
        return f"DB({self._data})"

@contextmanager
def transaction(db):
    db.begin()
    try:
        yield db
        db.commit()
        print("  Transaction committed.")
    except Exception as e:
        db.rollback()
        print(f"  Rolled back due to: {e}")
        raise

db = InMemoryDB()

# Successful transaction
with transaction(db) as conn:
    conn.set("user:1", "Alice")
    conn.set("user:2", "Bob")
print("After commit:", db)

# Failed transaction
try:
    with transaction(db) as conn:
        conn.set("user:3", "Carol")
        raise RuntimeError("Simulated failure!")
except RuntimeError:
    pass
print("After rollback:", db)  # user:3 should NOT be present`
        },
        exercises: [
          {
            id: "exe-12-3-1", title: "Assert Context Manager", difficulty: "easy",
            description: "Write an assert_raises(exception_type) context manager that passes if the block raises the expected exception, and fails if it doesn't.",
            starterCode: `from contextlib import contextmanager

@contextmanager
def assert_raises(exc_type):
    """Passes if the body raises exc_type, fails otherwise."""
    pass

# Should pass -- ValueError is raised
with assert_raises(ValueError):
    int("not a number")
print("Test 1 passed!")

# Should pass -- ZeroDivisionError is raised
with assert_raises(ZeroDivisionError):
    1 / 0
print("Test 2 passed!")

# Should fail -- no exception is raised
try:
    with assert_raises(ValueError):
        x = 1 + 1
    print("ERROR: should have failed")
except AssertionError as e:
    print(f"Test 3 correctly failed: {e}")`,
            solution: `from contextlib import contextmanager

@contextmanager
def assert_raises(exc_type):
    try:
        yield
    except exc_type:
        pass  # expected -- test passes
    except Exception as e:
        raise AssertionError(
            f"Expected {exc_type.__name__}, got {type(e).__name__}: {e}"
        ) from e
    else:
        raise AssertionError(f"Expected {exc_type.__name__} but no exception was raised")`,
            solutionExplanation: "Three outcomes: (1) the expected exception is raised -- we catch and suppress it (test passes). (2) A different exception is raised -- we convert it to AssertionError. (3) No exception -- the else clause raises AssertionError. This is essentially how pytest.raises() works."
          }
        ],
        interviewQuestions: [
          { q: "What are three useful contextlib utilities and what do they do?", a: "suppress(exc) -- silently ignore specified exceptions. redirect_stdout(buf) -- capture print output. ExitStack -- manage a dynamic number of context managers safely. Also: nullcontext (placeholder), asynccontextmanager (async version of contextmanager), closing (calls .close() on exit)." },
          { q: "Can you nest context managers? What's the cleanest syntax?", a: "Yes. Python 3.10+ supports parenthesised form: 'with (open(a) as f, open(b) as g): ...'. Earlier Python: 'with open(a) as f, open(b) as g:'. For a dynamic number, use ExitStack. All managers are exited in reverse order on exit, and each is always exited even if earlier ones fail." }
        ]
      }
    ]
  },

  {
    id: 13,
    title: "Python Internals",
    description: "Understand how Python works under the hood -- memory model, GIL, bytecode, and performance profiling.",
    lessons: [
      {
        id: "lesson-13-1",
        title: "Memory Model & Reference Counting",
        content: `
<h2>Memory Model & Reference Counting</h2>
<p>CPython manages memory through <strong>reference counting</strong>. Every object carries a count of how many references point to it; when that count hits zero the object is freed immediately.</p>

<h3>id() and is</h3>
<p><code>id(obj)</code> returns the object's memory address. The <code>is</code> operator checks identity (same object), not equality.</p>

<h3>Small integer & string interning</h3>
<p>CPython pre-allocates integers <code>-5</code> to <code>256</code> and interns many short strings, so <code>a is b</code> may be <code>True</code> even when you didn't expect it.</p>

<h3>sys.getrefcount()</h3>
<p><code>sys.getrefcount(obj)</code> returns the reference count -- always at least 1 because the call itself holds a reference.</p>

<h3>Cyclic garbage collection</h3>
<p>Reference counting can't free cycles (<code>a.ref = b; b.ref = a</code>). CPython's <em>cyclic garbage collector</em> periodically finds and collects these.</p>

<h3>weakref</h3>
<p>A weak reference doesn't increment the refcount, letting the referent be collected. Useful for caches.</p>
        `,
        codeExamples: [
          {
            title: "Reference counting in action",
            code: `import sys

x = []
print("Fresh list refcount:", sys.getrefcount(x))   # 2 (x + getrefcount arg)

y = x
print("After y = x:", sys.getrefcount(x))           # 3

del y
print("After del y:", sys.getrefcount(x))           # 2

# Small integer interning
a = 256; b = 256
print("256 is 256:", a is b)   # True  (cached)

a = 257; b = 257
print("257 is 257:", a is b)   # may be False in some contexts

# id demo
nums = [1, 2, 3]
print("id:", id(nums))
nums.append(4)
print("same id after append:", id(nums))  # same -- list mutated in place
`
          },
          {
            title: "Weak references",
            code: `import weakref

class Node:
    def __init__(self, val):
        self.val = val
    def __del__(self):
        print(f"Node({self.val}) collected")

n = Node(42)
weak = weakref.ref(n)

print("alive?", weak() is not None)   # True
del n
print("alive?", weak() is not None)   # False -- collected

# WeakValueDictionary for caches
cache = weakref.WeakValueDictionary()

def get_node(val):
    if val not in cache:
        cache[val] = Node(val)
    return cache[val]

obj = get_node(10)
print("cached:", cache[10].val)
del obj
# entry auto-removed from cache after deletion
print("cache len after del:", len(cache))
`
          }
        ],
        playground: {
          title: "Reference counting experiment",
          initialCode: `import sys, weakref

# Experiment 1: track refcount through aliasing
data = {"key": "value"}
print("Initial refcount:", sys.getrefcount(data))

refs = [data, data, data]
print("In a list (3 refs):", sys.getrefcount(data))

refs.clear()
print("After clear:", sys.getrefcount(data))

# Experiment 2: detect cycle before collection
class Cycle:
    pass

a = Cycle(); b = Cycle()
a.other = b; b.other = a
print("Cycle created -- refcounts both >= 2")

# Experiment 3: weak ref cache
import weakref
live_objects = weakref.WeakValueDictionary()

class Resource:
    def __init__(self, name):
        self.name = name

r1 = Resource("db_conn")
live_objects["db"] = r1
print("Cache before del:", list(live_objects.keys()))
del r1
print("Cache after del:", list(live_objects.keys()))
`
        },
        exercises: [
          {
            title: "Refcount trace",
            description: "Write a function `trace_refs(obj)` that prints the refcount before and after appending `obj` to a list, then removing it.",
            starterCode: `import sys

def trace_refs(obj):
    # TODO: print refcount, append to list, print again, remove, print again
    pass

trace_refs("hello")`,
            solution: `import sys

def trace_refs(obj):
    print("Before:", sys.getrefcount(obj))
    lst = [obj]
    print("In list:", sys.getrefcount(obj))
    lst.pop()
    print("After remove:", sys.getrefcount(obj))

trace_refs("hello")`
          },
          {
            title: "Interning quiz",
            description: "Create a function `interning_report()` that checks `is` identity for: integer 100, integer 300, and a short string 'abc'. Print results.",
            starterCode: `def interning_report():
    # TODO: compare a=100,b=100 / a=300,b=300 / a='abc',b='abc' with 'is'
    pass

interning_report()`,
            solution: `def interning_report():
    a, b = 100, 100
    print(f"100 is 100: {a is b}")   # True -- cached

    a, b = 300, 300
    print(f"300 is 300: {a is b}")   # True in same expression (CPython optimization)

    a = "abc"; b = "abc"
    print(f"'abc' is 'abc': {a is b}")  # usually True -- interned

interning_report()`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the difference between == and is in Python?",
            answer: "== tests value equality (calls __eq__); is tests identity (same memory address / id()). Two distinct objects can be == without being is."
          },
          {
            question: "Why can't reference counting alone handle all garbage?",
            answer: "Reference cycles keep both objects' counts > 0 forever. CPython uses a cyclic GC (gc module) that periodically traces object graphs to find unreachable cycles."
          },
          {
            question: "What is object interning and when does Python do it?",
            answer: "Interning reuses the same object for equal values. CPython interns integers -5 to 256, and most compile-time string literals that look like identifiers. You can force string interning with sys.intern()."
          }
        ]
      },
      {
        id: "lesson-13-2",
        title: "GIL, Threading & Multiprocessing",
        content: `
<h2>The Global Interpreter Lock (GIL)</h2>
<p>CPython's <strong>GIL</strong> is a mutex that allows only one thread to execute Python bytecode at a time. It simplifies memory management but limits CPU-bound parallelism.</p>

<h3>When threads help vs. hurt</h3>
<ul>
  <li><strong>I/O-bound tasks</strong>: threads shine -- the GIL is released during blocking I/O (file reads, network calls).</li>
  <li><strong>CPU-bound tasks</strong>: threads compete for the GIL and may actually slow down due to context-switch overhead. Use <code>multiprocessing</code> instead.</li>
</ul>

<h3>threading module</h3>
<p><code>Thread(target=fn, args=(...))</code>, <code>Lock</code>, <code>RLock</code>, <code>Semaphore</code>, <code>Event</code>, <code>Queue</code> from <code>queue</code>.</p>

<h3>multiprocessing module</h3>
<p>Each process has its own Python interpreter and GIL. <code>Process</code>, <code>Pool</code>, <code>Queue</code>, <code>Pipe</code>, <code>shared_memory</code>.</p>

<h3>concurrent.futures</h3>
<p>High-level API: <code>ThreadPoolExecutor</code> and <code>ProcessPoolExecutor</code> both expose <code>submit()</code> / <code>map()</code> returning <code>Future</code> objects.</p>

<h3>asyncio</h3>
<p>Single-threaded cooperative concurrency. Perfect for I/O-bound work without thread overhead.</p>
        `,
        codeExamples: [
          {
            title: "ThreadPoolExecutor for I/O-bound work",
            code: `from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def simulate_io(task_id, delay=0.1):
    time.sleep(delay)          # GIL released during sleep
    return f"task-{task_id} done"

start = time.perf_counter()

with ThreadPoolExecutor(max_workers=5) as pool:
    futures = [pool.submit(simulate_io, i) for i in range(10)]
    for fut in as_completed(futures):
        print(fut.result())

elapsed = time.perf_counter() - start
print(f"10 tasks in {elapsed:.2f}s  (serial would be ~1.0s)")
`
          },
          {
            title: "ProcessPoolExecutor for CPU-bound work",
            code: `from concurrent.futures import ProcessPoolExecutor
import time

def cpu_task(n):
    """Sum squares -- CPU bound."""
    return sum(i * i for i in range(n))

numbers = [500_000] * 8

# Serial baseline
t0 = time.perf_counter()
results_serial = [cpu_task(n) for n in numbers]
serial_time = time.perf_counter() - t0

# Parallel
t0 = time.perf_counter()
with ProcessPoolExecutor() as pool:
    results_parallel = list(pool.map(cpu_task, numbers))
parallel_time = time.perf_counter() - t0

print(f"Serial:   {serial_time:.3f}s")
print(f"Parallel: {parallel_time:.3f}s")
print("Results match:", results_serial == results_parallel)
`
          }
        ],
        playground: {
          title: "Thread safety with Lock",
          initialCode: `import threading

# Unsafe counter
counter_unsafe = 0

def increment_unsafe():
    global counter_unsafe
    for _ in range(10000):
        counter_unsafe += 1  # read-modify-write, NOT atomic

threads = [threading.Thread(target=increment_unsafe) for _ in range(5)]
for t in threads: t.start()
for t in threads: t.join()
print("Unsafe  (expected 50000):", counter_unsafe)

# Safe counter using Lock
counter_safe = 0
lock = threading.Lock()

def increment_safe():
    global counter_safe
    for _ in range(10000):
        with lock:
            counter_safe += 1

threads = [threading.Thread(target=increment_safe) for _ in range(5)]
for t in threads: t.start()
for t in threads: t.join()
print("Safe    (expected 50000):", counter_safe)
`
        },
        exercises: [
          {
            title: "Producer-Consumer with Queue",
            description: "Implement a producer that puts 5 items into a `queue.Queue` and a consumer that processes them. Use threading.",
            starterCode: `import threading, queue, time

def producer(q):
    # TODO: put items 0-4 into q with small sleep
    pass

def consumer(q):
    # TODO: get items and print until None sentinel received
    pass

q = queue.Queue()
# TODO: start threads, join them`,
            solution: `import threading, queue, time

def producer(q):
    for i in range(5):
        time.sleep(0.05)
        q.put(i)
        print(f"produced {i}")
    q.put(None)  # sentinel

def consumer(q):
    while True:
        item = q.get()
        if item is None:
            break
        print(f"consumed {item}")

q = queue.Queue()
p = threading.Thread(target=producer, args=(q,))
c = threading.Thread(target=consumer, args=(q,))
p.start(); c.start()
p.join(); c.join()
print("done")`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the GIL and what problem does it solve?",
            answer: "The Global Interpreter Lock is a mutex in CPython that ensures only one thread executes Python bytecode at a time. It prevents race conditions in CPython's memory management (especially reference counting) without requiring per-object locking."
          },
          {
            question: "When would you choose multiprocessing over threading?",
            answer: "For CPU-bound tasks that need true parallelism across cores. Threads compete for the GIL on CPU work; separate processes each have their own GIL and run truly in parallel. For I/O-bound tasks threading (or asyncio) is usually better due to lower overhead."
          },
          {
            question: "What is a race condition and how do you prevent it?",
            answer: "A race condition occurs when multiple threads access shared state concurrently and the result depends on execution order. Prevent it with locking primitives (Lock, RLock, Semaphore) or by using thread-safe data structures like queue.Queue."
          }
        ]
      },
      {
        id: "lesson-13-3",
        title: "Bytecode & Performance Profiling",
        content: `
<h2>Python Bytecode & the dis Module</h2>
<p>CPython compiles source to <strong>bytecode</strong> -- a stack-based instruction set executed by the CPython virtual machine. You can inspect it with <code>dis.dis()</code>.</p>

<h3>dis module</h3>
<ul>
  <li><code>dis.dis(fn)</code> -- prints bytecode instructions</li>
  <li><code>dis.code_info(fn)</code> -- prints code object summary</li>
  <li><code>fn.__code__.co_varnames</code> -- local variable names</li>
</ul>

<h3>timeit</h3>
<p>Micro-benchmarking: <code>timeit.timeit(stmt, number=N)</code> or the <code>%timeit</code> magic in Jupyter.</p>

<h3>cProfile</h3>
<p>Function-level profiling: <code>python -m cProfile -s cumtime script.py</code> or <code>cProfile.run('fn()')</code>. Shows call counts, total time, per-call time.</p>

<h3>line_profiler (third-party)</h3>
<p>Line-level profiling with <code>@profile</code> decorator and <code>kernprof -l -v script.py</code>.</p>

<h3>Common performance tips</h3>
<ul>
  <li>List comprehensions &gt; equivalent for-loops</li>
  <li>Local variables accessed faster than globals (fewer LOAD opcodes)</li>
  <li>Join strings with <code>''.join()</code> not <code>+=</code> in a loop</li>
  <li>Use sets/dicts for O(1) lookup instead of lists</li>
  <li>Avoid repeated attribute lookups -- cache <code>method = obj.method</code></li>
</ul>
        `,
        codeExamples: [
          {
            title: "Inspecting bytecode with dis",
            code: `import dis

def add(a, b):
    return a + b

print("=== add bytecode ===")
dis.dis(add)

def loop_sum(n):
    total = 0
    for i in range(n):
        total += i
    return total

print("\\n=== loop_sum bytecode ===")
dis.dis(loop_sum)

# Code object attributes
print("\\nco_varnames:", loop_sum.__code__.co_varnames)
print("co_consts:  ", loop_sum.__code__.co_consts)
`
          },
          {
            title: "Profiling with cProfile and timeit",
            code: `import cProfile, timeit

def slow_join(items):
    result = ""
    for item in items:
        result += str(item)  # O(n^2)
    return result

def fast_join(items):
    return "".join(str(item) for item in items)   # O(n)

data = list(range(1000))

t_slow = timeit.timeit(lambda: slow_join(data), number=200)
t_fast = timeit.timeit(lambda: fast_join(data), number=200)

print(f"slow_join: {t_slow:.4f}s")
print(f"fast_join: {t_fast:.4f}s")
print(f"speedup: {t_slow/t_fast:.1f}x")

print("\\n--- cProfile for slow_join ---")
cProfile.run("slow_join(list(range(500)))", sort="cumulative")
`
          }
        ],
        playground: {
          title: "Benchmark list lookup vs set lookup",
          initialCode: `import timeit, random

haystack_list = list(range(10_000))
haystack_set  = set(range(10_000))
needles = [random.randint(0, 20_000) for _ in range(1000)]

t_list = timeit.timeit(
    lambda: [n in haystack_list for n in needles],
    number=50
)
t_set = timeit.timeit(
    lambda: [n in haystack_set for n in needles],
    number=50
)

print(f"List lookup: {t_list:.4f}s")
print(f"Set lookup:  {t_set:.4f}s")
print(f"Set is {t_list/t_set:.0f}x faster")
`
        },
        exercises: [
          {
            title: "Optimise string builder",
            description: "The function below uses string concatenation in a loop. Rewrite it using `''.join()` and verify it gives the same result.",
            starterCode: `import timeit

def build_slow(n):
    s = ""
    for i in range(n):
        s += str(i) + ","
    return s.rstrip(",")

def build_fast(n):
    # TODO: rewrite with join
    pass

print(build_slow(5))
# print(build_fast(5))  # should match`,
            solution: `import timeit

def build_slow(n):
    s = ""
    for i in range(n):
        s += str(i) + ","
    return s.rstrip(",")

def build_fast(n):
    return ",".join(str(i) for i in range(n))

print("slow:", build_slow(5))
print("fast:", build_fast(5))
assert build_slow(100) == build_fast(100), "mismatch!"

t1 = timeit.timeit(lambda: build_slow(500), number=500)
t2 = timeit.timeit(lambda: build_fast(500), number=500)
print(f"speedup: {t1/t2:.1f}x")`
          }
        ],
        interviewQuestions: [
          {
            question: "How would you profile a slow Python function?",
            answer: "Start with cProfile (python -m cProfile -s cumtime script.py) to find which functions take the most time. Then use timeit for micro-benchmarking a specific snippet. For line-level detail use line_profiler. Flame graphs from py-spy are great for long-running services."
          },
          {
            question: "Why is string concatenation in a loop slow?",
            answer: "Strings are immutable; each += creates a new string object and copies both parts. That's O(n^2) total work for n concatenations. ''.join(parts) builds the final string in one pass -- O(n)."
          },
          {
            question: "What information does dis.dis() give you?",
            answer: "It shows the CPython bytecode instructions for a function: opcode names, argument indices, and source line numbers. Useful for understanding why two seemingly equivalent expressions differ in speed, or debugging unexpected behavior."
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Useful Standard Library",
    description: "Master Python's batteries-included modules: collections, datetime, re, json, pathlib, and more.",
    lessons: [
      {
        id: "lesson-14-1",
        title: "collections Deep Dive",
        content: `
<h2>The collections Module</h2>
<p>Python's <code>collections</code> module provides specialised container data types that solve common programming patterns elegantly.</p>

<h3>Counter</h3>
<p>A dict subclass for counting hashable objects. Supports arithmetic (<code>c1 + c2</code>, <code>c1 - c2</code>) and <code>most_common(n)</code>.</p>

<h3>defaultdict</h3>
<p>A dict that calls a factory function to supply missing values instead of raising <code>KeyError</code>.</p>

<h3>OrderedDict</h3>
<p>Preserves insertion order (regular dicts do too since Python 3.7, but <code>OrderedDict</code> still offers <code>move_to_end()</code> and remembers order in equality checks).</p>

<h3>namedtuple</h3>
<p>A tuple subclass with named fields. Immutable, memory-efficient, and great for readability.</p>

<h3>deque</h3>
<p>Double-ended queue with O(1) appends/pops on both ends. Ideal for queues and sliding windows.</p>

<h3>ChainMap</h3>
<p>Combines multiple dicts into a single view. Lookups search maps in order -- perfect for layered configs.</p>
        `,
        codeExamples: [
          {
            title: "Counter in practice",
            code: `from collections import Counter

text = "the quick brown fox jumps over the lazy dog"
word_counts = Counter(text.split())
print("Top 3:", word_counts.most_common(3))

# Arithmetic
votes_a = Counter({"yes": 3, "no": 2})
votes_b = Counter({"yes": 1, "no": 4, "abstain": 1})
print("Combined:", votes_a + votes_b)
print("A surplus:", votes_a - votes_b)   # keeps only positive

# Character frequency
char_freq = Counter("abracadabra")
print("char freq:", char_freq)
`
          },
          {
            title: "defaultdict, namedtuple, deque",
            code: `from collections import defaultdict, namedtuple, deque

# defaultdict -- grouping
words = ["apple", "ant", "banana", "bear", "cherry"]
by_letter = defaultdict(list)
for w in words:
    by_letter[w[0]].append(w)
print(dict(by_letter))

# namedtuple -- lightweight record
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(f"Point: x={p.x}, y={p.y}, dist={p.x**2+p.y**2:.1f}")
print("as dict:", p._asdict())

# deque -- sliding window max
def sliding_window_max(nums, k):
    dq = deque()   # stores indices
    result = []
    for i, n in enumerate(nums):
        while dq and nums[dq[-1]] <= n:
            dq.pop()
        dq.append(i)
        if dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result

print(sliding_window_max([1,3,-1,-3,5,3,6,7], 3))
`
          }
        ],
        playground: {
          title: "ChainMap for layered config",
          initialCode: `from collections import ChainMap

defaults   = {"theme": "dark", "lang": "en", "timeout": 30}
user_prefs = {"theme": "light", "timeout": 60}
env_vars   = {"lang": "fr"}

# ChainMap searches left-to-right
config = ChainMap(env_vars, user_prefs, defaults)

print("theme  :", config["theme"])    # from user_prefs
print("lang   :", config["lang"])     # from env_vars
print("timeout:", config["timeout"])  # from user_prefs

# Write goes to first map
config["debug"] = True
print("env_vars after write:", dict(env_vars))

# New child scope
child = config.new_child({"timeout": 5})
print("child timeout:", child["timeout"])
print("parent timeout:", config["timeout"])
`
        },
        exercises: [
          {
            title: "Word frequency analyser",
            description: "Write `top_words(text, n)` using Counter to return the n most common words (lowercased, punctuation stripped).",
            starterCode: `from collections import Counter
import re

def top_words(text, n=5):
    # TODO: lowercase, strip punctuation, count, return top n
    pass

sample = "To be or not to be, that is the question. To be is to live."
print(top_words(sample, 5))`,
            solution: `from collections import Counter
import re

def top_words(text, n=5):
    words = re.findall(r"[a-z]+", text.lower())
    return Counter(words).most_common(n)

sample = "To be or not to be, that is the question. To be is to live."
print(top_words(sample, 5))`
          },
          {
            title: "LRU cache with OrderedDict",
            description: "Implement a simple LRU cache using `OrderedDict`. Capacity is set at init; on access move key to end; on overflow remove oldest (first) item.",
            starterCode: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key):
        # TODO: return value or -1, move to end on hit
        pass

    def put(self, key, value):
        # TODO: insert/update, evict oldest if over capacity
        pass

lru = LRUCache(2)
lru.put(1, "a")
lru.put(2, "b")
print(lru.get(1))   # "a"
lru.put(3, "c")     # evicts key 2
print(lru.get(2))   # -1`,
            solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)

lru = LRUCache(2)
lru.put(1, "a")
lru.put(2, "b")
print(lru.get(1))
lru.put(3, "c")
print(lru.get(2))`
          }
        ],
        interviewQuestions: [
          {
            question: "When would you use a defaultdict over a regular dict?",
            answer: "When building grouped structures (e.g., grouping items by category) where you'd otherwise write setdefault() or try/except KeyError. defaultdict(list) is the canonical pattern for grouping; defaultdict(int) for counting."
          },
          {
            question: "What advantages does deque have over list for queue operations?",
            answer: "deque.appendleft() and deque.popleft() are O(1). list.insert(0, x) and list.pop(0) are O(n) because every element must shift. For FIFO queues or sliding-window algorithms, deque is strictly better."
          },
          {
            question: "How does Counter arithmetic work?",
            answer: "c1 + c2 sums counts; c1 - c2 subtracts (dropping zero/negative); c1 & c2 takes minimums (intersection); c1 | c2 takes maximums (union). Results only include positive counts."
          }
        ]
      },
      {
        id: "lesson-14-2",
        title: "datetime, re & json",
        content: `
<h2>datetime, Regular Expressions & JSON</h2>

<h3>datetime module</h3>
<ul>
  <li><code>datetime.date</code>, <code>datetime.time</code>, <code>datetime.datetime</code>, <code>datetime.timedelta</code></li>
  <li><code>datetime.now()</code> vs <code>datetime.utcnow()</code> vs <code>datetime.now(timezone.utc)</code> (prefer timezone-aware)</li>
  <li><code>strptime(s, fmt)</code> -- parse; <code>strftime(fmt)</code> -- format</li>
  <li><code>timedelta</code> arithmetic: add/subtract days, hours, seconds</li>
</ul>

<h3>re -- regular expressions</h3>
<ul>
  <li><code>re.match</code> -- matches at start; <code>re.search</code> -- anywhere; <code>re.findall</code> -- all matches</li>
  <li><code>re.compile(pattern)</code> -- precompile for performance</li>
  <li>Groups: <code>(pattern)</code>; named groups <code>(?P&lt;name&gt;pattern)</code></li>
  <li>Flags: <code>re.IGNORECASE</code>, <code>re.MULTILINE</code>, <code>re.DOTALL</code></li>
  <li><code>re.sub(pattern, repl, string)</code> -- replacement; repl can be a function</li>
</ul>

<h3>json module</h3>
<ul>
  <li><code>json.dumps(obj, indent=2, default=fn)</code> -- serialize</li>
  <li><code>json.loads(s)</code> -- deserialize</li>
  <li><code>json.dump/load</code> -- file variants</li>
  <li>Custom types: implement <code>default(obj)</code> in a <code>JSONEncoder</code> subclass</li>
</ul>
        `,
        codeExamples: [
          {
            title: "datetime operations",
            code: `from datetime import datetime, timedelta, timezone

# Parse and format
dt = datetime.strptime("2024-03-15 14:30:00", "%Y-%m-%d %H:%M:%S")
print("Parsed:", dt)
print("Formatted:", dt.strftime("%B %d, %Y at %I:%M %p"))

# Timezone-aware now
now_utc = datetime.now(timezone.utc)
print("UTC now:", now_utc.isoformat())

# Arithmetic
one_week = timedelta(weeks=1)
next_week = dt + one_week
print("Next week:", next_week.date())

deadline = datetime(2024, 12, 31)
days_left = (deadline - dt).days
print(f"Days until year end: {days_left}")

# Date components
print(f"Year={dt.year}, Month={dt.month}, Day={dt.day}")
print(f"Weekday (Mon=0): {dt.weekday()}")
`
          },
          {
            title: "Regular expressions",
            code: `import re

# Named groups for parsing
log_pattern = re.compile(
    r'(?P<date>\\d{4}-\\d{2}-\\d{2}) (?P<level>\\w+) (?P<msg>.*)'
)
log_line = "2024-03-15 ERROR database connection failed"
m = log_pattern.match(log_line)
if m:
    print(m.groupdict())

# findall with groups
emails = "contact us at alice@example.com or bob@corp.org"
found = re.findall(r'[\\w.+-]+@[\\w-]+\\.[\\w.]+', emails)
print("Emails:", found)

# sub with function
def mask_card(m):
    digits = m.group()
    return "*" * (len(digits) - 4) + digits[-4:]

text = "Card: 4532015112830366 or 5425233430109903"
masked = re.sub(r'\\b\\d{16}\\b', mask_card, text)
print(masked)
`
          }
        ],
        playground: {
          title: "JSON with custom encoder",
          initialCode: `import json
from datetime import datetime, date

class SmartEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (datetime, date)):
            return obj.isoformat()
        if isinstance(obj, set):
            return sorted(obj)
        return super().default(obj)

data = {
    "user": "alice",
    "joined": date(2023, 6, 1),
    "last_login": datetime(2024, 3, 15, 9, 30),
    "tags": {"python", "backend", "api"},
    "score": 98.5
}

serialized = json.dumps(data, cls=SmartEncoder, indent=2)
print(serialized)

# Round-trip
parsed = json.loads(serialized)
print("\\nRound-trip date:", parsed["joined"])  # string now
print("Tags:", parsed["tags"])
`
        },
        exercises: [
          {
            title: "Age calculator",
            description: "Write `calculate_age(dob_string)` where `dob_string` is 'YYYY-MM-DD'. Return age in years as an integer.",
            starterCode: `from datetime import datetime

def calculate_age(dob_string):
    # TODO: parse dob, compute years from today
    pass

print(calculate_age("1990-05-15"))`,
            solution: `from datetime import datetime

def calculate_age(dob_string):
    dob = datetime.strptime(dob_string, "%Y-%m-%d")
    today = datetime.today()
    age = today.year - dob.year
    if (today.month, today.day) < (dob.month, dob.day):
        age -= 1
    return age

print(calculate_age("1990-05-15"))`
          },
          {
            title: "Log parser",
            description: "Parse a multi-line log string and return a list of dicts with keys: date, level, message. Use re.findall with named groups.",
            starterCode: `import re

LOGS = """
2024-01-10 INFO  Server started on port 8080
2024-01-10 ERROR Failed to connect to DB: timeout
2024-01-11 WARN  Memory usage at 85%
2024-01-11 INFO  Backup completed
"""

def parse_logs(text):
    # TODO: return list of {date, level, message} dicts
    pass

for entry in parse_logs(LOGS):
    print(entry)`,
            solution: `import re

LOGS = """
2024-01-10 INFO  Server started on port 8080
2024-01-10 ERROR Failed to connect to DB: timeout
2024-01-11 WARN  Memory usage at 85%
2024-01-11 INFO  Backup completed
"""

def parse_logs(text):
    pattern = re.compile(
        r'(?P<date>\\d{4}-\\d{2}-\\d{2})\\s+(?P<level>\\w+)\\s+(?P<message>.+)'
    )
    return [m.groupdict() for m in pattern.finditer(text)]

for entry in parse_logs(LOGS):
    print(entry)`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the difference between re.match and re.search?",
            answer: "re.match only matches at the beginning of the string; re.search scans through the entire string looking for any location where the pattern matches. Use search for finding patterns anywhere in text, match when the pattern must appear at the start."
          },
          {
            question: "How do you handle non-serializable types with json.dumps?",
            answer: "Either pass a default= callable that converts unknown types, or subclass json.JSONEncoder and override the default() method. Common cases: datetime -> isoformat(), Decimal -> float/str, set -> list."
          },
          {
            question: "What is the best practice for working with timezones in Python?",
            answer: "Always use timezone-aware datetimes. Use datetime.now(timezone.utc) for current UTC time. Use the third-party zoneinfo module (Python 3.9+) or pytz for named timezones. Never mix naive and aware datetimes."
          }
        ]
      },
      {
        id: "lesson-14-3",
        title: "os, pathlib, sys & argparse",
        content: `
<h2>os, pathlib, sys & argparse</h2>

<h3>pathlib -- modern path handling</h3>
<p><code>Path</code> objects are the modern way to work with filesystem paths. Operator <code>/</code> joins paths. Methods: <code>.read_text()</code>, <code>.write_text()</code>, <code>.glob()</code>, <code>.rglob()</code>, <code>.stat()</code>, <code>.exists()</code>, <code>.mkdir(parents=True, exist_ok=True)</code>.</p>

<h3>os module</h3>
<ul>
  <li><code>os.environ</code> -- environment variables dict</li>
  <li><code>os.getcwd()</code>, <code>os.listdir()</code>, <code>os.walk()</code></li>
  <li><code>os.path.join/exists/isfile/isdir/getsize</code> (prefer pathlib)</li>
  <li><code>os.makedirs(path, exist_ok=True)</code></li>
</ul>

<h3>sys module</h3>
<ul>
  <li><code>sys.argv</code> -- command-line arguments list</li>
  <li><code>sys.exit(code)</code> -- exit with status code</li>
  <li><code>sys.path</code> -- module search path</li>
  <li><code>sys.stdin/stdout/stderr</code> -- standard streams</li>
  <li><code>sys.version</code>, <code>sys.platform</code></li>
</ul>

<h3>argparse</h3>
<p>The standard way to write command-line tools. <code>ArgumentParser</code> handles positional args, optional flags, types, defaults, help text, subcommands.</p>
        `,
        codeExamples: [
          {
            title: "pathlib essentials",
            code: `from pathlib import Path
import tempfile, os

# Work with a temp directory
with tempfile.TemporaryDirectory() as tmp:
    base = Path(tmp)

    # Create structure
    (base / "src").mkdir()
    (base / "src" / "main.py").write_text("print('hello')")
    (base / "src" / "utils.py").write_text("def add(a,b): return a+b")
    (base / "data").mkdir()
    (base / "data" / "input.txt").write_text("line1\\nline2\\nline3")

    # Navigate and inspect
    src = base / "src"
    print("Python files:", [p.name for p in src.glob("*.py")])
    print("All files:", [p.relative_to(base) for p in base.rglob("*") if p.is_file()])

    # Read / write
    content = (base / "data" / "input.txt").read_text()
    lines = content.splitlines()
    print("Lines:", lines)

    # Stat
    stat = (base / "src" / "main.py").stat()
    print(f"Size: {stat.st_size} bytes")
`
          },
          {
            title: "argparse CLI tool",
            code: `import argparse, sys

def build_parser():
    parser = argparse.ArgumentParser(
        description="File word counter",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument("file", help="File to analyse")
    parser.add_argument("-n", "--top", type=int, default=10,
                        metavar="N", help="Show top N words (default: 10)")
    parser.add_argument("-v", "--verbose", action="store_true",
                        help="Print extra info")
    parser.add_argument("--exclude", nargs="*", default=[],
                        help="Words to exclude")
    return parser

# Simulate: python wordcount.py myfile.txt -n 5 --verbose
args = build_parser().parse_args(["myfile.txt", "-n", "5", "--verbose"])
print("File:", args.file)
print("Top:", args.top)
print("Verbose:", args.verbose)
print("Exclude:", args.exclude)

# --help simulation
build_parser().print_help()
`
          }
        ],
        playground: {
          title: "Walk a directory tree",
          initialCode: `import os, tempfile
from pathlib import Path

# Build a small tree
with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp)
    (root / "a").mkdir()
    (root / "a" / "x.txt").write_text("hello")
    (root / "a" / "y.txt").write_text("world")
    (root / "b").mkdir()
    (root / "b" / "z.py").write_text("print(1)")
    (root / "readme.md").write_text("# Docs")

    # Using os.walk
    print("=== os.walk ===")
    for dirpath, dirnames, filenames in os.walk(tmp):
        level = dirpath.replace(tmp, "").count(os.sep)
        indent = "  " * level
        print(f"{indent}{os.path.basename(dirpath)}/")
        for f in filenames:
            print(f"{indent}  {f}")

    # Using pathlib rglob
    print("\\n=== pathlib rglob ===")
    for p in sorted(root.rglob("*")):
        print(p.relative_to(root), "DIR" if p.is_dir() else f"({p.stat().st_size}b)")
`
        },
        exercises: [
          {
            title: "Environment config loader",
            description: "Write `load_config()` that reads DATABASE_URL, PORT (int, default 8080), and DEBUG (bool, default False) from os.environ and returns a dict.",
            starterCode: `import os

def load_config():
    # TODO: read DATABASE_URL, PORT (int, default 8080), DEBUG (bool)
    pass

# Simulate env vars
os.environ["DATABASE_URL"] = "postgresql://localhost/mydb"
os.environ["DEBUG"] = "true"

config = load_config()
print(config)`,
            solution: `import os

def load_config():
    return {
        "DATABASE_URL": os.environ.get("DATABASE_URL", "sqlite:///app.db"),
        "PORT": int(os.environ.get("PORT", 8080)),
        "DEBUG": os.environ.get("DEBUG", "false").lower() == "true",
    }

os.environ["DATABASE_URL"] = "postgresql://localhost/mydb"
os.environ["DEBUG"] = "true"

config = load_config()
print(config)`
          }
        ],
        interviewQuestions: [
          {
            question: "Why prefer pathlib over os.path?",
            answer: "pathlib.Path is object-oriented, composable with / operator, and exposes methods directly on the object (path.read_text(), path.exists(), path.glob()). os.path requires string manipulation and verbose function calls. pathlib is also cross-platform by default."
          },
          {
            question: "What is sys.path and how can you modify it?",
            answer: "sys.path is a list of directories Python searches when importing modules. You can append directories at runtime (sys.path.append('/my/lib')), set PYTHONPATH env var, or use .pth files in site-packages. In production prefer proper package installation."
          },
          {
            question: "How do you make a Python script both importable and runnable?",
            answer: "Use the `if __name__ == '__main__':` guard. When run directly, __name__ is '__main__' and the block executes. When imported, __name__ is the module name and the block is skipped. Put argparse and main() call inside this block."
          }
        ]
      }
    ]
  },

  {
    id: 15,
    title: "Testing with pytest",
    description: "Write reliable Python with pytest: unit tests, fixtures, parametrize, mocking, and coverage.",
    lessons: [
      {
        id: "lesson-15-1",
        title: "pytest Fundamentals",
        content: `
<h2>pytest Fundamentals</h2>
<p><strong>pytest</strong> is the industry-standard Python testing framework. Tests are discovered automatically from files named <code>test_*.py</code> or <code>*_test.py</code> and functions starting with <code>test_</code>.</p>

<h3>Writing tests</h3>
<p>Use plain <code>assert</code> statements -- pytest rewrites them to show rich failure messages.</p>

<h3>Test organisation</h3>
<ul>
  <li>Test functions: <code>def test_something():</code></li>
  <li>Test classes: <code>class TestFoo:</code> (no <code>__init__</code>)</li>
  <li>Setup / teardown: <code>setup_method</code> / <code>teardown_method</code> in classes</li>
</ul>

<h3>Running pytest</h3>
<ul>
  <li><code>pytest</code> -- run all tests</li>
  <li><code>pytest -v</code> -- verbose</li>
  <li><code>pytest -k "name"</code> -- filter by name</li>
  <li><code>pytest -x</code> -- stop on first failure</li>
  <li><code>pytest --tb=short</code> -- concise tracebacks</li>
</ul>

<h3>pytest.raises</h3>
<p>Assert that code raises a specific exception:</p>
<pre><code>with pytest.raises(ValueError, match="must be positive"):
    validate(-1)</code></pre>

<h3>Common assertions</h3>
<p><code>assert x == y</code>, <code>assert x in collection</code>, <code>assert isinstance(x, T)</code>, <code>assert not x</code>.</p>
        `,
        codeExamples: [
          {
            title: "First pytest tests",
            code: `# Imagine this is test_math.py

def add(a, b):      return a + b
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

# Basic assertions
def test_add_integers():
    assert add(2, 3) == 5

def test_add_floats():
    result = add(0.1, 0.2)
    assert abs(result - 0.3) < 1e-9   # float tolerance

def test_add_strings():
    assert add("hello", " world") == "hello world"

def test_divide_normal():
    assert divide(10, 2) == 5.0

def test_divide_by_zero():
    import pytest
    with pytest.raises(ZeroDivisionError, match="Cannot divide"):
        divide(5, 0)

# Run with: pytest -v test_math.py
# (Simulated inline run)
import pytest
print("Running tests...")
test_add_integers()
test_add_floats()
test_add_strings()
test_divide_normal()
print("All assertions passed!")
try:
    test_divide_by_zero()
    print("pytest.raises test needs pytest -- would pass with pytest")
except Exception:
    print("Expected: needs pytest runner for raises context")
`
          },
          {
            title: "Test classes and structure",
            code: `class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance
        self.history = []

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.balance += amount
        self.history.append(("deposit", amount))

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        self.history.append(("withdraw", amount))


# Test class (no __init__ needed)
class TestBankAccount:
    def setup_method(self):
        """Fresh account for each test."""
        self.account = BankAccount(100)

    def test_initial_balance(self):
        acc = BankAccount()
        assert acc.balance == 0

    def test_deposit_increases_balance(self):
        self.account.deposit(50)
        assert self.account.balance == 150

    def test_deposit_negative_raises(self):
        import pytest
        with pytest.raises(ValueError):
            self.account.deposit(-10)

    def test_withdraw_reduces_balance(self):
        self.account.withdraw(30)
        assert self.account.balance == 70

    def test_history_tracked(self):
        self.account.deposit(20)
        self.account.withdraw(10)
        assert len(self.account.history) == 2

# Inline simulation
t = TestBankAccount()
t.setup_method(); t.test_initial_balance()
t.setup_method(); t.test_deposit_increases_balance()
t.setup_method(); t.test_withdraw_reduces_balance()
t.setup_method(); t.test_history_tracked()
print("All BankAccount tests passed!")
`
          }
        ],
        playground: {
          title: "Write tests for a Stack class",
          initialCode: `import pytest

class Stack:
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

    def size(self):
        return len(self._data)


# Write your tests below
def test_new_stack_is_empty():
    s = Stack()
    assert s.is_empty()

def test_push_increases_size():
    s = Stack()
    s.push(1)
    assert s.size() == 1

def test_pop_returns_last_pushed():
    s = Stack()
    s.push("a")
    s.push("b")
    assert s.pop() == "b"

def test_pop_empty_raises():
    s = Stack()
    try:
        s.pop()
        assert False, "Should have raised"
    except IndexError:
        pass

# Run all
test_new_stack_is_empty()
test_push_increases_size()
test_pop_returns_last_pushed()
test_pop_empty_raises()
print("All Stack tests passed!")
`
        },
        exercises: [
          {
            title: "Test a FizzBuzz function",
            description: "Implement `fizzbuzz(n)` and write at least 4 tests covering: multiples of 3, multiples of 5, multiples of both, and regular numbers.",
            starterCode: `def fizzbuzz(n):
    # TODO: implement
    pass

# Write 4+ test functions
def test_multiple_of_three():
    pass

def test_multiple_of_five():
    pass

def test_multiple_of_both():
    pass

def test_regular_number():
    pass`,
            solution: `def fizzbuzz(n):
    if n % 15 == 0: return "FizzBuzz"
    if n % 3 == 0:  return "Fizz"
    if n % 5 == 0:  return "Buzz"
    return str(n)

def test_multiple_of_three():
    assert fizzbuzz(9) == "Fizz"
    assert fizzbuzz(3) == "Fizz"

def test_multiple_of_five():
    assert fizzbuzz(10) == "Buzz"
    assert fizzbuzz(5) == "Buzz"

def test_multiple_of_both():
    assert fizzbuzz(15) == "FizzBuzz"
    assert fizzbuzz(30) == "FizzBuzz"

def test_regular_number():
    assert fizzbuzz(7) == "7"
    assert fizzbuzz(1) == "1"

test_multiple_of_three()
test_multiple_of_five()
test_multiple_of_both()
test_regular_number()
print("All fizzbuzz tests passed!")`
          }
        ],
        interviewQuestions: [
          {
            question: "What makes a good unit test?",
            answer: "A good unit test is: Fast (milliseconds), Isolated (no real DB/network/filesystem), Repeatable (same result every run), Self-documenting (name describes what it tests), and checks one behaviour. The acronym FIRST captures this."
          },
          {
            question: "How does pytest discover tests?",
            answer: "pytest recursively collects test_*.py and *_test.py files, then inside them collects functions starting with test_ and classes starting with Test (with methods starting with test_). You can configure collection with pytest.ini or pyproject.toml."
          }
        ]
      },
      {
        id: "lesson-15-2",
        title: "Fixtures & parametrize",
        content: `
<h2>Fixtures & parametrize</h2>

<h3>Fixtures</h3>
<p>Fixtures provide test setup/teardown through dependency injection. Declare with <code>@pytest.fixture</code>; request them as function parameters.</p>

<pre><code>@pytest.fixture
def db():
    conn = create_connection()
    yield conn        # test runs here
    conn.close()      # teardown after yield</code></pre>

<h3>Fixture scopes</h3>
<ul>
  <li><code>scope="function"</code> (default) -- fresh per test</li>
  <li><code>scope="class"</code> -- shared within a test class</li>
  <li><code>scope="module"</code> -- shared within a module</li>
  <li><code>scope="session"</code> -- shared for the entire test run</li>
</ul>

<h3>conftest.py</h3>
<p>Place shared fixtures in <code>conftest.py</code> -- pytest discovers them automatically without importing.</p>

<h3>@pytest.mark.parametrize</h3>
<p>Run the same test with multiple input/output pairs:</p>
<pre><code>@pytest.mark.parametrize("x,y,expected", [
    (1, 2, 3),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add(x, y, expected):
    assert add(x, y) == expected</code></pre>
        `,
        codeExamples: [
          {
            title: "Fixtures with yield for setup/teardown",
            code: `import pytest, tempfile, os
from pathlib import Path

# --- Fixture definitions (normally in conftest.py) ---

def create_temp_dir():
    """Context manager fixture."""
    tmpdir = tempfile.mkdtemp()
    yield Path(tmpdir)
    # cleanup
    import shutil
    shutil.rmtree(tmpdir, ignore_errors=True)

# Simulate using the fixture
def test_create_file():
    for tmp_path in create_temp_dir():
        f = tmp_path / "hello.txt"
        f.write_text("hello")
        assert f.exists()
        assert f.read_text() == "hello"
        break  # only one iteration

def test_directory_starts_empty():
    for tmp_path in create_temp_dir():
        files = list(tmp_path.iterdir())
        assert files == []
        break

test_create_file()
test_directory_starts_empty()
print("Fixture tests passed!")
`
          },
          {
            title: "parametrize -- data-driven tests",
            code: `import pytest

def is_palindrome(s):
    cleaned = s.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

def is_valid_email(email):
    import re
    return bool(re.match(r'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$', email))

# Parametrize simulation (normally uses @pytest.mark.parametrize)
palindrome_cases = [
    ("racecar", True),
    ("hello",   False),
    ("A man a plan a canal Panama", True),
    ("No lemon no melon", True),
    ("python",  False),
]

email_cases = [
    ("user@example.com", True),
    ("bad-email",        False),
    ("a@b.c",            True),
    ("@missing.com",     False),
]

for s, expected in palindrome_cases:
    result = is_palindrome(s)
    assert result == expected, f"palindrome({s!r}) = {result}, expected {expected}"
    print(f"  is_palindrome({s!r}) = {result} [ok]")

for email, expected in email_cases:
    result = is_valid_email(email)
    assert result == expected, f"email({email!r}) = {result}, expected {expected}"
    print(f"  is_valid_email({email!r}) = {result} [ok]")
`
          }
        ],
        playground: {
          title: "Parametrize edge cases",
          initialCode: `# Implement and parametrize test for clamp(value, min_val, max_val)
# which returns value clamped to [min_val, max_val]

def clamp(value, min_val, max_val):
    return max(min_val, min(max_val, value))

# Parametrized test cases
cases = [
    # (value, min_val, max_val, expected)
    (5,  0, 10, 5),    # in range
    (-3, 0, 10, 0),    # below min
    (15, 0, 10, 10),   # above max
    (0,  0, 10, 0),    # at min boundary
    (10, 0, 10, 10),   # at max boundary
]

print("Testing clamp()...")
for value, mn, mx, expected in cases:
    result = clamp(value, mn, mx)
    status = "PASS" if result == expected else "FAIL"
    print(f"  [{status}] clamp({value}, {mn}, {mx}) = {result} (expected {expected})")
`
        },
        exercises: [
          {
            title: "Parametrised password validator",
            description: "Write `is_strong_password(pwd)` (min 8 chars, has uppercase, has digit) and test it with at least 5 parametrized cases.",
            starterCode: `def is_strong_password(pwd):
    # TODO: min 8 chars, has uppercase letter, has digit
    pass

cases = [
    # (password, expected_result)
    ("Secure1!", True),
    ("short1A",  False),   # < 8 chars
    ("alllower1", False),  # no uppercase
    ("NoDigitHere", False),
    ("ValidPass9", True),
]

for pwd, expected in cases:
    result = is_strong_password(pwd)
    print(f"  {'PASS' if result==expected else 'FAIL'} {pwd!r} -> {result}")`,
            solution: `def is_strong_password(pwd):
    if len(pwd) < 8:
        return False
    if not any(c.isupper() for c in pwd):
        return False
    if not any(c.isdigit() for c in pwd):
        return False
    return True

cases = [
    ("Secure1!", True),
    ("short1A",  False),
    ("alllower1", False),
    ("NoDigitHere", False),
    ("ValidPass9", True),
]

for pwd, expected in cases:
    result = is_strong_password(pwd)
    print(f"  {'PASS' if result==expected else 'FAIL'} {pwd!r} -> {result}")`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the purpose of conftest.py in pytest?",
            answer: "conftest.py is a special pytest file where you define shared fixtures, plugins, and hooks. pytest discovers it automatically; fixtures defined there are available to all tests in the same directory and subdirectories without explicit imports."
          },
          {
            question: "When would you use scope='session' for a fixture?",
            answer: "For expensive setup that only needs to happen once per test run: starting a database, spinning up a server, loading a large dataset. Shared across all tests, so the fixture must be safe to share (read-only or carefully managed)."
          }
        ]
      },
      {
        id: "lesson-15-3",
        title: "Mocking & Coverage",
        content: `
<h2>Mocking with unittest.mock & Coverage</h2>

<h3>Why mock?</h3>
<p>Unit tests should be isolated -- no real network calls, database writes, or slow external services. Mocking replaces dependencies with controlled fakes.</p>

<h3>unittest.mock</h3>
<ul>
  <li><code>Mock()</code> -- a generic mock object; any attribute access returns another Mock</li>
  <li><code>MagicMock()</code> -- like Mock but with magic method support</li>
  <li><code>patch(target)</code> -- temporarily replaces an object in a module</li>
  <li><code>patch.object(obj, attr)</code> -- patches an attribute on an existing object</li>
</ul>

<h3>Key attributes</h3>
<ul>
  <li><code>mock.called</code>, <code>mock.call_count</code></li>
  <li><code>mock.assert_called_once_with(*args)</code></li>
  <li><code>mock.return_value = x</code> -- what calling the mock returns</li>
  <li><code>mock.side_effect = exc</code> -- raise exception when called</li>
</ul>

<h3>Coverage</h3>
<p>Run <code>pytest --cov=mypackage --cov-report=html</code> (requires pytest-cov). Aim for >80% meaningful coverage -- 100% coverage doesn't mean bug-free.</p>
        `,
        codeExamples: [
          {
            title: "Mock and patch basics",
            code: `from unittest.mock import Mock, MagicMock, patch

# Basic Mock usage
mock_fn = Mock(return_value=42)
result = mock_fn("hello", key="val")
print("Result:", result)
print("Called:", mock_fn.called)
print("Call args:", mock_fn.call_args)

mock_fn.assert_called_once_with("hello", key="val")
print("Assertion passed!")

# Side effects -- simulate exceptions
error_mock = Mock(side_effect=ConnectionError("timeout"))
try:
    error_mock()
except ConnectionError as e:
    print("Got expected error:", e)

# Multiple return values
multi = Mock(side_effect=[1, 2, 3])
print("Calls:", multi(), multi(), multi())

# MagicMock supports dunder methods
m = MagicMock()
m.__len__.return_value = 10
print("len(mock):", len(m))
`
          },
          {
            title: "Patching external dependencies",
            code: `from unittest.mock import patch, Mock

# Function that calls an "external" service
def get_user_data(user_id):
    import urllib.request, json
    url = f"https://api.example.com/users/{user_id}"
    with urllib.request.urlopen(url) as r:
        return json.loads(r.read())

def process_user(user_id):
    data = get_user_data(user_id)
    return f"User: {data['name']} ({data['email']})"

# Test without real network call
with patch("urllib.request.urlopen") as mock_urlopen:
    import json, io
    fake_response = Mock()
    fake_response.__enter__ = Mock(return_value=fake_response)
    fake_response.__exit__ = Mock(return_value=False)
    fake_response.read = Mock(
        return_value=json.dumps({"name": "Alice", "email": "alice@example.com"}).encode()
    )
    mock_urlopen.return_value = fake_response

    result = process_user(1)
    print("Result:", result)
    print("urlopen called with:", mock_urlopen.call_args)
`
          }
        ],
        playground: {
          title: "Mock a database layer",
          initialCode: `from unittest.mock import Mock, patch

class UserRepository:
    def find_by_id(self, user_id):
        # In reality, hits a database
        raise NotImplementedError("Real DB not available in tests")

    def save(self, user):
        raise NotImplementedError("Real DB not available in tests")

class UserService:
    def __init__(self, repo):
        self.repo = repo

    def get_greeting(self, user_id):
        user = self.repo.find_by_id(user_id)
        return f"Hello, {user['name']}!"

    def update_email(self, user_id, email):
        user = self.repo.find_by_id(user_id)
        user['email'] = email
        self.repo.save(user)
        return True

# Tests using mocks
mock_repo = Mock(spec=UserRepository)
mock_repo.find_by_id.return_value = {"id": 1, "name": "Bob", "email": "bob@old.com"}

service = UserService(mock_repo)

# Test 1: greeting
greeting = service.get_greeting(1)
print("Greeting:", greeting)
assert greeting == "Hello, Bob!"

# Test 2: update email
result = service.update_email(1, "bob@new.com")
print("Update result:", result)
mock_repo.save.assert_called_once()
print("save was called:", mock_repo.save.called)

print("All mock tests passed!")
`
        },
        exercises: [
          {
            title: "Test an email-sending function",
            description: "Write `send_welcome(email, name)` which calls `send_email(to, subject, body)` (imported from a module). Mock `send_email` and verify it was called with the correct arguments.",
            starterCode: `from unittest.mock import patch, Mock

def send_email(to, subject, body):
    """Simulates external email service."""
    raise RuntimeError("Real SMTP not available in test")

def send_welcome(email, name):
    # TODO: call send_email with appropriate subject and body
    pass

# TODO: use patch or Mock to test send_welcome without real send_email
# Verify: to=email, subject contains "Welcome", body contains name`,
            solution: `from unittest.mock import patch, Mock

def send_email(to, subject, body):
    raise RuntimeError("Real SMTP not available in test")

def send_welcome(email, name):
    send_email(
        to=email,
        subject=f"Welcome to our platform, {name}!",
        body=f"Hi {name}, your account is ready."
    )

# Test with mock
mock_send = Mock()
import builtins

# Monkeypatch send_email in the current scope
import sys
original = send_email
try:
    # patch by replacing in local namespace
    globals()['send_email'] = mock_send
    send_welcome("alice@test.com", "Alice")
    mock_send.assert_called_once()
    call_kwargs = mock_send.call_args[1]
    assert call_kwargs['to'] == "alice@test.com"
    assert "Welcome" in call_kwargs['subject']
    assert "Alice" in call_kwargs['body']
    print("All assertions passed!")
finally:
    globals()['send_email'] = original`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the difference between Mock and MagicMock?",
            answer: "MagicMock is a subclass of Mock that comes with pre-configured magic (dunder) methods like __len__, __iter__, __str__, __enter__, __exit__. Use MagicMock when the code under test uses context managers, iteration, or length checks on the mock."
          },
          {
            question: "What does patch() do and why is the target string important?",
            answer: "patch() temporarily replaces a name in a module's namespace during the test. The target string must be 'where the name is looked up', not where it's defined. If module A imports fn from module B, patch 'A.fn' not 'B.fn' to intercept A's usage."
          },
          {
            question: "Is 100% test coverage sufficient to guarantee correctness?",
            answer: "No. Coverage measures which lines were executed, not whether they were tested with the right inputs. A test can cover a line without asserting anything about its output. Coverage is a useful floor (uncovered code is definitely untested) but not a ceiling."
          }
        ]
      }
    ]
  },
];
