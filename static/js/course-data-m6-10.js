'use strict';
const MODULES_6_10 = [
  {
    id: 6, title: "Object-Oriented Programming", icon: "🏛", color: "#9d8fff",
    difficulty: "intermediate", duration: "5-6 hours",
    description: "Deep understanding of classes, objects, inheritance, MRO, dunder methods, and dataclasses.",
    lessons: [
      // -- 6.1 Classes & Objects ----------------------------------------------
      {
        id: "lesson-6-1", title: "Classes & Objects", duration: "40 min",
        content: `
<h2>Classes and Objects</h2>
<p>A <strong>class</strong> is a blueprint; an <strong>object</strong> is a concrete instance of that blueprint. Everything in Python is an object -- including integers, functions, and modules.</p>

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

# Instance attribute -- belongs to one object
acc1.balance   # 1000
acc2.balance   # 500

# Class attribute -- shared
BankAccount.interest_rate  # 0.05
acc1.interest_rate         # 0.05 (looks up via class if not on instance)

# Changing a class attribute
BankAccount.interest_rate = 0.06   # affects ALL instances
acc1.interest_rate = 0.07          # shadows for acc1 only</code></pre>

<h3>__repr__ vs __str__</h3>
<ul>
  <li><code>__repr__</code> -- unambiguous, for developers; shown in the REPL and <code>repr()</code></li>
  <li><code>__str__</code> -- human-friendly; used by <code>print()</code> and <code>str()</code></li>
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
        print(f"Account #{self.id} -- {self.owner}")
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
          { q: "What is the difference between __init__ and __new__?", a: "__new__ creates the object (allocates memory); __init__ initialises it. __new__ returns the new instance; __init__ receives it as self and sets attributes. You rarely need to override __new__ -- it's mainly used for singleton patterns or immutable types like tuple subclasses." },
          { q: "What is self? Is it a keyword?", a: "self is NOT a keyword -- it's just a convention for the first parameter of instance methods. Python automatically passes the instance as the first argument when you call obj.method(). You could name it anything (e.g., 'this'), but self is the universal convention." },
          { q: "What is the difference between a class attribute and an instance attribute?", a: "Class attributes are shared across all instances and are defined at the class level. Instance attributes are specific to each object and set in __init__ via self.attr = value. When reading an attribute, Python checks instance first, then class. When writing, it always creates an instance attribute unless you explicitly write to the class." }
        ]
      },

      // -- 6.2 Inheritance & MRO ---------------------------------------------
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

<h3>super() -- The Right Way to Call Parent</h3>
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
  <span class="callout-icon">âš </span>
  <div class="callout-body"><strong>Always use super() -- never hardcode the parent name</strong><p>Writing <code>ParentClass.__init__(self, ...)</code> breaks with multiple inheritance and is fragile to refactoring. <code>super()</code> uses the MRO to find the right next class.</p></div>
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
<pre><code>isinstance(dog, Animal)   # True -- checks type or any parent
isinstance(dog, Cat)      # False
issubclass(Dog, Animal)   # True
issubclass(Dog, Cat)      # False</code></pre>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><strong>Prefer isinstance() over type()</strong><p><code>type(obj) == Dog</code> breaks with subclasses. <code>isinstance(obj, Dog)</code> returns True for any subclass of Dog -- correct polymorphic behaviour.</p></div>
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
            solutionExplanation: "Abstract base classes enforce a contract -- any subclass that doesn't implement all @abstractmethod methods will raise TypeError on instantiation. This is Python's way of doing interfaces."
          }
        ],
        interviewQuestions: [
          { q: "Explain Python's MRO and why it matters.", a: "MRO (Method Resolution Order) determines which class's method Python calls when there's inheritance. Python uses C3 linearization: it searches left-to-right in the inheritance chain while respecting the constraint that no class appears before its subclasses. It matters most with multiple inheritance (diamond problem). super() always follows the MRO." },
          { q: "What does super() actually do?", a: "super() returns a proxy object that delegates method calls to the next class in the MRO. In single inheritance, super() finds the parent class. In multiple inheritance, it follows the full MRO -- this is why super() works correctly even in diamond inheritance, as long as all classes use super()." },
          { q: "What's the difference between composition and inheritance?", a: "Inheritance models 'is-a' (a Dog IS an Animal). Composition models 'has-a' (a Car HAS an Engine). Composition is often preferred (Liskov Substitution violations are common with deep inheritance). Use inheritance when the relationship is truly hierarchical; use composition when building complex objects from simpler ones." }
        ]
      },

      // -- 6.3 Dunder Methods ------------------------------------------------
      {
        id: "lesson-6-3", title: "Dunder (Magic) Methods", duration: "35 min",
        content: `
<h2>Dunder Methods -- Making Objects Pythonic</h2>
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
print(v1.magnitude())  # sqrt(14) â‰ˆ 3.74`
          },
          {
            id: "ce-6-3-2", title: "__call__ -- Callable Objects",
            code: `class Multiplier:
    """A callable object that multiplies by a fixed factor."""
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, x):
        return x * self.factor

    def __repr__(self):
        return f"Multiplier(x{self.factor})"

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
print("\\nA x B:")
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
          { q: "Explain __enter__ and __exit__ for context managers.", a: "__enter__ is called at the start of the 'with' block and its return value is bound to the 'as' variable. __exit__(exc_type, exc_val, tb) is called on exit -- even if an exception occurred. If __exit__ returns True, the exception is suppressed. Common use: resource cleanup (files, DB connections, locks)." },
          { q: "What is __slots__ and when would you use it?", a: "__slots__ restricts instance attributes to a fixed set, replacing the per-instance __dict__ with a fixed-size array. This saves memory (up to 40-50%) and slightly speeds up attribute access. Use it for classes that create millions of instances (e.g., game entities, data records). Downside: can't add attributes dynamically; complicates pickling and multiple inheritance." }
        ]
      },

      // -- 6.4 Properties & Class Methods ------------------------------------
      {
        id: "lesson-6-4", title: "@property, @staticmethod & @classmethod", duration: "30 min",
        content: `
<h2>Descriptors and Method Types</h2>
<p>Python provides three method decorators that change how methods bind to instances and classes.</p>

<h3>@property -- Managed Attributes</h3>
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
print(t.celsius)     # 25  -- calls getter
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
  <div class="callout-body"><strong>Rule of thumb</strong><p>If a method uses <code>self</code> -> instance method. If it only uses <code>cls</code> -> classmethod. If it uses neither -> staticmethod. Prefer classmethod over staticmethod when there might be subclasses.</p></div>
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
            solutionExplanation: "Properties are set with self.name = value in __init__, which already invokes the setter -- this is the correct pattern. Private storage uses _name/_grade. The letter_grade property is computed and has no setter."
          }
        ],
        interviewQuestions: [
          { q: "What is the difference between @staticmethod and @classmethod?", a: "@staticmethod gets no implicit first argument -- it's just a regular function in the class namespace. @classmethod gets cls as the first argument, which is the class itself (not an instance). Use @classmethod for alternative constructors or factory methods that work correctly with subclasses via cls(). Use @staticmethod for utilities that don't need class or instance data." },
          { q: "Why use @property instead of just exposing the attribute directly?", a: "@property lets you start with a simple public attribute (e.g., self.radius) and later add validation, computed values, or caching without changing the API. Users of your class don't need to update their code. This follows the Uniform Access Principle." }
        ]
      },

      // -- 6.5 Dataclasses ---------------------------------------------------
      {
        id: "lesson-6-5", title: "Dataclasses -- Modern Python Records", duration: "30 min",
        content: `
<h2>dataclasses -- Reduce Boilerplate</h2>
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
  <span class="callout-icon">âš </span>
  <div class="callout-body"><strong>Never use mutable defaults directly</strong><p><code>grades: list = []</code> raises an error in dataclasses (for good reason -- it would be shared across instances). Always use <code>field(default_factory=list)</code>.</p></div>
</div>

<h3>Frozen Dataclasses</h3>
<pre><code>@dataclass(frozen=True)
class ImmutablePoint:
    x: float
    y: float

p = ImmutablePoint(1.0, 2.0)
# p.x = 5.0  -> FrozenInstanceError!
# Frozen dataclasses are hashable -> can be dict keys or set elements</code></pre>

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
        print(f"{a.name} -> {b.name}: {d:,.0f} km")`
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
          { q: "What does frozen=True do to a dataclass?", a: "It makes instances immutable -- attempts to set attributes raise FrozenInstanceError. It also makes the dataclass hashable (generates __hash__), so frozen instances can be used as dict keys or set elements. Under the hood, it replaces __setattr__ and __delattr__ with versions that raise the error." }
        ]
      }
    ]  // end lessons for module 6
  },

  {
    id: 7, title: "Functional Programming in Python", icon: "lambda", color: "#00c48c",
    difficulty: "intermediate", duration: "3-4 hours",
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

# map, filter, sorted -- built-in HOFs
nums = [1, -2, 3, -4, 5]
positives = list(filter(lambda x: x > 0, nums))
doubled   = list(map(lambda x: x * 2, nums))
print(positives)  # [1, 3, 5]
print(doubled)    # [2, -4, 6, -8, 10]</code></pre>

<h3>Lambda Functions</h3>
<p>A lambda is a small anonymous function. Use it for short, throwaway functions -- never for complex logic.</p>
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

# Pipeline: strip -> lowercase -> split
process = compose(str.split, str.lower, str.strip)
result  = process("  Hello World  ")
print(result)  # ['hello', 'world']</code></pre>
`,
        codeExamples: [
          {
            id: "ce-7-1-1", title: "map, filter, reduce",
            code: `from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map -- transform each element
squares = list(map(lambda x: x**2, nums))
print("Squares:", squares)

# filter -- keep elements that match predicate
evens = list(filter(lambda x: x % 2 == 0, nums))
print("Evens:", evens)

# reduce -- fold a sequence into a single value
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
            description: "Write a pipeline function that chains transformations on text. Apply: strip -> lowercase -> remove punctuation -> split into words -> remove stop words.",
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
          { q: "What is a pure function?", a: "A pure function always returns the same output for the same inputs (deterministic) and has no side effects (doesn't modify external state, I/O, globals). Pure functions are easy to test, parallelise, and reason about. Python doesn't enforce purity -- it's a programming discipline." },
          { q: "When should you use list comprehensions vs map/filter?", a: "List comprehensions are almost always preferred in Python for readability and performance. Use map/filter when: (1) applying an already-named function (map(str, nums) is clean), (2) working with very large iterables where laziness matters (map/filter are lazy, not list comprehensions), or (3) in a chain where you want to avoid materialising intermediate lists." }
        ]
      },

      {
        id: "lesson-7-2", title: "itertools -- The Secret Weapon", duration: "30 min",
        content: `
<h2>itertools -- Combinatorial Power</h2>
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

# chain -- flatten nested structures
nested = [[1,2,3],[4,5],[6,7,8,9]]
flat = list(itertools.chain.from_iterable(nested))
print("Flattened:", flat)

# groupby -- group sorted data
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
            id: "ce-7-2-2", title: "accumulate -- Running Totals & Extremes",
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
            solutionExplanation: "itertools.product computes the Cartesian product -- every combination of one item from each iterable. 3 browsers x 3 OS x 2 resolutions = 18 total test cases."
          }
        ],
        interviewQuestions: [
          { q: "What does itertools.groupby require about its input?", a: "The input MUST be sorted by the grouping key first. groupby only groups consecutive elements with the same key -- it doesn't collect all matching elements from the entire sequence. Forgetting to sort is the most common groupby bug." },
          { q: "How is itertools.chain.from_iterable different from itertools.chain?", a: "chain(*iterables) takes multiple iterables as separate arguments. chain.from_iterable(iterable_of_iterables) takes a single iterable that yields iterables. Use from_iterable when your iterable of iterables is itself computed lazily or when you have many sublists (avoids unpacking a huge list with *)." }
        ]
      },

      {
        id: "lesson-7-3", title: "functools -- Memoisation & Partial Application", duration: "25 min",
        content: `
<h2>functools -- Tools for Higher-Order Functions</h2>

<h3>lru_cache -- Memoisation in One Line</h3>
<pre><code>from functools import lru_cache

@lru_cache(maxsize=None)  # None = unlimited cache
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

print(fib(100))         # instant
print(fib.cache_info()) # CacheInfo(hits=98, misses=101, ...)</code></pre>

<p>Python 3.9+ added <code>@cache</code> as a shorthand for <code>@lru_cache(maxsize=None)</code>.</p>

<h3>partial -- Pre-fill Arguments</h3>
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

<h3>reduce -- Fold a Sequence</h3>
<pre><code>from functools import reduce

nums = [1, 2, 3, 4, 5]
total   = reduce(lambda a, b: a + b, nums)         # 15
product = reduce(lambda a, b: a * b, nums, 1)      # 120 (1 as initial value)
maximum = reduce(lambda a, b: a if a > b else b, nums)  # 5</code></pre>

<h3>total_ordering -- Complete Comparison Protocol</h3>
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
    print(f"Make {amount}Â¢: {result} coins")

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
    difficulty: "beginner", duration: "2-3 hours",
    description: "How Python's import system works, how to structure packages, and professional virtual environment management.",
    lessons: [
      {
        id: "lesson-8-1", title: "Python's Import System", duration: "30 min",
        content: `
<h2>How Python Finds Modules</h2>
<p>When you write <code>import foo</code>, Python searches for <code>foo</code> in this order:</p>
<ol>
  <li><strong>sys.modules</strong> -- already-imported modules (cached)</li>
  <li><strong>Built-in modules</strong> -- compiled into the interpreter (e.g., <code>sys</code>, <code>os</code>)</li>
  <li><strong>sys.path</strong> -- list of directories (script dir, PYTHONPATH, site-packages)</li>
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
+-- mypackage/
|   +-- __init__.py      # makes it a package; can be empty
|   +-- core.py          # mypackage.core
|   +-- utils.py         # mypackage.utils
|   +-- sub/
|       +-- __init__.py
|       +-- parser.py    # mypackage.sub.parser
+-- tests/
|   +-- test_core.py
+-- pyproject.toml</code></pre>

<h3>__init__.py -- Controlling Your Package's API</h3>
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
    print(f"{info['name']:6}: {info['public_attrs']} attrs -- {info['doc'][:60]}")`,
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

<h3>pathlib -- Modern File System Navigation</h3>
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

<h3>datetime -- Date and Time</h3>
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

<h3>re -- Regular Expressions</h3>
<pre><code>import re

# Find all email addresses
text = "Contact alice@example.com or bob@company.org"
emails = re.findall(r'[\\w.+-]+@[\\w-]+\\.[\\w.]+', text)

# Named groups
pattern = r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})'
m = re.search(pattern, "Date: 2024-03-15")
if m:
    print(m.group("year"), m.group("month"))</code></pre>

<h3>collections -- Data Structure Extras</h3>
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
            id: "ce-8-2-2", title: "re -- Practical Patterns",
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
    print(f"  {e:25} {'[ok] valid' if valid else '[x] invalid'}")`
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
    bar = "â–ˆ" * count
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

<h3>pyproject.toml -- Modern Packaging</h3>
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
  <span class="callout-icon">âš </span>
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

# Config pattern -- read with defaults
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
        pass  # "true"/"1"/"yes" -> True, else False

    def _int(self, key, default):
        pass  # parse int or return default

    def _list(self, key, default):
        pass  # comma-separated string -> list

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
          { q: "What is the difference between requirements.txt and pyproject.toml?", a: "requirements.txt is the traditional format -- a flat list of packages with version specifiers, often pip freeze output with exact pinned versions. pyproject.toml (PEP 518/621) is the modern standard -- specifies build system, dependencies with version ranges (for libraries), and dev dependencies separately. pyproject.toml is preferred for new projects; requirements.txt is still common for applications." }
        ]
      }
    ]  // end lessons for module 8
  },

  {
    id: 9, title: "File Handling & Context Managers", icon: "📁", color: "#7c6af7",
    difficulty: "intermediate", duration: "2-3 hours",
    description: "Reading and writing files, CSV and JSON, and implementing custom context managers with __enter__/__exit__.",
    lessons: [
      {
        id: "lesson-9-1", title: "File I/O -- Reading & Writing Files", duration: "30 min",
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
            id: "ce-9-1-1", title: "Word Count -- Memory-Efficient Processing",
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
          { q: "Why should you always use 'with open()' instead of open() + close()?", a: "The 'with' statement (context manager) guarantees the file is closed even if an exception occurs inside the block. Without it, if an exception is raised before f.close(), the file handle leaks -- potentially causing data corruption (write buffers not flushed) or hitting OS file descriptor limits. Always use 'with'." },
          { q: "What is the difference between read() and readline() and iterating the file?", a: "read() loads the ENTIRE file into memory -- dangerous for large files. readline() reads one line at a time. Iterating the file object (for line in f) is the most memory-efficient: it reads the file lazily in buffered chunks, processing one line at a time without loading the whole file into memory." }
        ]
      },

      {
        id: "lesson-9-2", title: "CSV & JSON -- Structured Data Formats", duration: "30 min",
        content: `
<h2>CSV -- Comma-Separated Values</h2>
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

# DictReader -- rows as dicts (much more convenient)
with open("data.csv", newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        print(row["name"], row["age"])</code></pre>

<h2>JSON -- JavaScript Object Notation</h2>
<pre><code>import json

# Python -> JSON string
data = {"name": "Alice", "scores": [90, 85], "active": True}
text = json.dumps(data)                  # compact
text = json.dumps(data, indent=2)        # pretty-printed

# JSON string -> Python
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
        id: "lesson-9-3", title: "Context Managers -- The 'with' Protocol", duration: "30 min",
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

<h3>@contextmanager -- The Easy Way</h3>
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

# ExitStack -- dynamic number of context managers
with ExitStack() as stack:
    files = [stack.enter_context(open(f)) for f in file_list]</code></pre>
`,
        codeExamples: [
          {
            id: "ce-9-3-1", title: "Custom Context Manager -- Database Transaction",
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
            break           # success -- exit loop
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
          { q: "How does the 'with' statement work internally?", a: "Python calls __enter__() at the start of the 'with' block and binds its return value to the 'as' variable. At the end -- or if an exception occurs -- Python calls __exit__(exc_type, exc_val, traceback). If __exit__ returns True, the exception is suppressed; if False (or None), it propagates. The @contextmanager decorator implements this protocol using a generator." },
          { q: "What does the __exit__ method's return value mean?", a: "Returning True from __exit__ suppresses the exception -- the code after the 'with' block continues as if nothing happened. Returning False (or None, or any falsy value) lets the exception propagate normally. Use True suppression only for specific, expected exceptions; never suppress all exceptions blindly." }
        ]
      }
    ]  // end lessons for module 9
  },

  {
    id: 10, title: "Exception Handling & Logging", icon: "🛡", color: "#ff5757",
    difficulty: "intermediate", duration: "2-3 hours",
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
    # ALWAYS runs -- cleanup here
    close_connection()</code></pre>

<h3>Exception Hierarchy</h3>
<pre><code>BaseException
+-- SystemExit           # sys.exit()
+-- KeyboardInterrupt    # Ctrl+C
+-- GeneratorExit
+-- Exception            # Base for "normal" exceptions
    +-- ValueError       # wrong value type/range
    +-- TypeError        # wrong type
    +-- KeyError         # missing dict key
    +-- IndexError       # list index out of range
    +-- AttributeError   # missing attribute
    +-- FileNotFoundError
    +-- ZeroDivisionError
    +-- StopIteration
    +-- ... (many more)</code></pre>

<h3>raise and raise from</h3>
<pre><code># Re-raise the current exception
try:
    do_something()
except Exception:
    log_error()
    raise                         # re-raises same exception

# Raise a different exception -- chaining
try:
    value = int(user_input)
except ValueError as e:
    raise ValueError(f"Invalid input: {user_input!r}") from e
    # "raise X from Y" sets __cause__ -- the original exception is preserved</code></pre>

<div class="callout warn">
  <span class="callout-icon">âš </span>
  <div class="callout-body"><strong>Never use bare except!</strong><p><code>except:</code> catches EVERYTHING including <code>SystemExit</code> and <code>KeyboardInterrupt</code>. Always name at least <code>except Exception</code>. Better: catch only the specific exceptions you can handle.</p></div>
</div>

<h3>else in try blocks</h3>
<p>The <code>else</code> clause runs only if the <code>try</code> block completed without raising an exception. It's cleaner than putting success-path code in the <code>try</code> block (which would catch unintended exceptions):</p>
<pre><code># Without else -- bad: success_path might raise unintended exceptions
try:
    data = fetch_data()
    process(data)          # if this raises, it's caught above!
except NetworkError:
    handle_error()

# With else -- good:
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
        # Runs ONLY on success -- not caught by above except
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
          { q: "When does the 'else' clause of a try block run?", a: "The else clause runs only if the try block completed without any exception. It's NOT the same as putting code at the end of the try block -- code in the try block would be caught by the except clauses, but code in the else block would not. Use else for code that should only run on success and shouldn't be considered part of the 'risky' section." }
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
<pre><code># Python 3.11+ -- collect multiple errors before raising
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
          { q: "How do you design a custom exception hierarchy?", a: "Start with a base exception class for your application (AppError). Create specific subclasses for different error categories (ValidationError, DatabaseError, NetworkError). Add relevant attributes to exceptions (field name for ValidationError, status code for HTTPError). This lets callers choose how specific their exception handling is -- catch AppError to catch everything, or NotFoundError for one specific case." },
          { q: "What information should a custom exception contain?", a: "A good exception should have: a clear message that explains what went wrong and where, relevant context attributes (the value that was invalid, the field name, the resource ID), a chain to the original exception if it was re-raised from another (use 'raise X from Y'). Avoid putting mutable state in exceptions -- they might be logged or re-raised later." }
        ]
      },

      {
        id: "lesson-10-3", title: "Logging -- Production-Grade Observability", duration: "30 min",
        content: `
<h2>Why Logging > print()</h2>
<p>Print statements are for scripts. Production applications need structured logging with levels, timestamps, handlers (file, console, cloud), and filtering -- all of which the <code>logging</code> module provides.</p>

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
# child -> parent -> root (messages propagate up)</code></pre>

<h3>Structured Logging with extra</h3>
<pre><code>logger.info("User logged in", extra={"user_id": 42, "ip": "1.2.3.4"})

# Or use JSON logging (with python-json-logger)
# Produces: {"timestamp": "...", "level": "INFO", "user_id": 42, ...}</code></pre>

<div class="callout warn">
  <span class="callout-icon">âš </span>
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
          { q: "Why use logging.getLogger(__name__) instead of a hardcoded name?", a: "Using __name__ gives each module its own logger named after the module (e.g., 'myapp.db', 'myapp.api'). This lets you configure logging granularly -- suppress DEBUG from 'myapp.db' while keeping it for 'myapp.api'. It also makes logs traceable to their source without extra effort." },
          { q: "What is the difference between logging.warning() and logger.warning()?", a: "logging.warning() uses the root logger. logger.warning() uses a specific named logger. The root logger is convenient for scripts; named loggers are better for libraries and production code because they're configurable by the calling application. Libraries should NEVER configure handlers -- that's the application's responsibility." },
          { q: "What are the logging levels and when should you use each?", a: "DEBUG: detailed diagnostic info, only in dev (step by step trace). INFO: normal events (server started, user logged in, job completed). WARNING: unexpected but the app can continue (disk space low, deprecated API used). ERROR: something failed but the app keeps running (request failed, DB timeout). CRITICAL: the app may crash or data may be corrupted (OOM, disk full)." }
        ]
      }
    ]  // end lessons for module 10
  },


];
