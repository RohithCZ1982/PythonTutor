'use strict';
const MODULES_16_17 = [
  {
    id: 16,
    title: "Interview Algorithms",
    description: "Master the algorithms and data structures that appear in technical interviews at top tech companies.",
    lessons: [
      {
        id: "lesson-16-1",
        title: "Arrays, Strings & Two Pointers",
        content: `
<h2>Arrays, Strings & Two Pointers</h2>
<p>Array and string problems are the most common interview category. Two-pointer technique reduces O(n^2) brute-force to O(n).</p>

<h3>Two-pointer patterns</h3>
<ul>
  <li><strong>Opposite ends</strong>: left starts at 0, right at n-1 -- used for sorted array pair problems, palindrome checks.</li>
  <li><strong>Slow/fast</strong>: detect cycles, find midpoint, remove duplicates.</li>
  <li><strong>Sliding window</strong>: maintain a window of elements that satisfies a condition -- O(n) for substring/subarray problems.</li>
</ul>

<h3>Key techniques</h3>
<ul>
  <li>Sort first when order doesn't matter (enables two-pointer)</li>
  <li>Hash maps for O(1) lookup of complements, frequencies, indices</li>
  <li>Prefix sums for range sum queries</li>
  <li>In-place modification with index pointer</li>
</ul>
        `,
        codeExamples: [
          {
            title: "Two-sum variants",
            code: `def two_sum_unsorted(nums, target):
    """O(n) with hash map."""
    seen = {}
    for i, n in enumerate(nums):
        complement = target - n
        if complement in seen:
            return [seen[complement], i]
        seen[n] = i
    return []

def two_sum_sorted(nums, target):
    """O(n) two-pointer on sorted array."""
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return []

def three_sum(nums):
    """All unique triplets summing to 0. O(n^2)."""
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue  # skip duplicates
        left, right = i + 1, len(nums) - 1
        while left < right:
            s = nums[i] + nums[left] + nums[right]
            if s == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]: left += 1
                while left < right and nums[right] == nums[right-1]: right -= 1
                left += 1; right -= 1
            elif s < 0: left += 1
            else: right -= 1
    return result

print(two_sum_unsorted([2,7,11,15], 9))   # [0,1]
print(two_sum_sorted([2,7,11,15], 9))     # [0,1]
print(three_sum([-1, 0, 1, 2, -1, -4]))  # [[-1,-1,2],[-1,0,1]]
`
          },
          {
            title: "Sliding window -- longest substring without repeats",
            code: `def length_of_longest_substring(s):
    """O(n) sliding window."""
    char_index = {}
    max_len = 0
    left = 0
    for right, ch in enumerate(s):
        if ch in char_index and char_index[ch] >= left:
            left = char_index[ch] + 1
        char_index[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len

def min_window_substring(s, t):
    """Minimum window in s containing all chars of t. O(n)."""
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    start = end = 0
    best = ""
    left = 0
    for right, ch in enumerate(s, 1):
        if need[ch] > 0:
            missing -= 1
        need[ch] -= 1
        if missing == 0:
            while need[s[left]] < 0:
                need[s[left]] += 1
                left += 1
            window = s[left:right]
            if not best or len(window) < len(best):
                best = window
            need[s[left]] += 1
            missing += 1
            left += 1
    return best

print(length_of_longest_substring("abcabcbb"))   # 3
print(length_of_longest_substring("pwwkew"))     # 3
print(min_window_substring("ADOBECODEBANC", "ABC"))  # "BANC"
`
          }
        ],
        playground: {
          title: "Prefix sums for range queries",
          initialCode: `def build_prefix(nums):
    prefix = [0] * (len(nums) + 1)
    for i, n in enumerate(nums):
        prefix[i+1] = prefix[i] + n
    return prefix

def range_sum(prefix, left, right):
    """Sum of nums[left..right] inclusive. O(1)."""
    return prefix[right+1] - prefix[left]

nums = [1, 2, 3, 4, 5, 6, 7, 8]
prefix = build_prefix(nums)
print("Prefix:", prefix)
print("Sum [2..5]:", range_sum(prefix, 2, 5))   # 3+4+5+6 = 18
print("Sum [0..3]:", range_sum(prefix, 0, 3))   # 1+2+3+4 = 10
print("Sum [5..7]:", range_sum(prefix, 5, 7))   # 6+7+8 = 21

# Subarray sum equals k
def subarray_sum_k(nums, k):
    """Count subarrays summing to k. O(n)."""
    count = 0
    prefix_sum = 0
    seen = {0: 1}
    for n in nums:
        prefix_sum += n
        count += seen.get(prefix_sum - k, 0)
        seen[prefix_sum] = seen.get(prefix_sum, 0) + 1
    return count

print("Subarrays summing to 3:", subarray_sum_k([1,1,1], 2))   # 2
print("Subarrays summing to 3:", subarray_sum_k([1,2,3], 3))   # 2
`
        },
        exercises: [
          {
            title: "Valid palindrome",
            description: "Implement `is_palindrome(s)` that returns True if `s` is a palindrome considering only alphanumeric characters (case-insensitive). Use two pointers.",
            starterCode: `def is_palindrome(s):
    # TODO: two-pointer, skip non-alphanumeric, case-insensitive
    pass

print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))                      # False
print(is_palindrome(" "))                               # True`,
            solution: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1; right -= 1
    return True

print(is_palindrome("A man, a plan, a canal: Panama"))
print(is_palindrome("race a car"))
print(is_palindrome(" "))`
          }
        ],
        interviewQuestions: [
          {
            question: "Explain the sliding window technique.",
            answer: "Maintain a window [left, right] that satisfies some condition. Expand right on each step; shrink from left when the condition is violated. Because left and right each move at most n steps total, the algorithm is O(n) instead of O(n^2) brute force."
          },
          {
            question: "When do you use a hash map in array problems?",
            answer: "When you need O(1) lookup of: whether a complement exists (two-sum), the last index of a character (longest substring), frequency counts (anagram detection), or whether you've seen a value before (duplicate detection)."
          }
        ]
      },
      {
        id: "lesson-16-2",
        title: "Trees, Graphs & BFS/DFS",
        content: `
<h2>Trees, Graphs & BFS/DFS</h2>

<h3>Binary tree traversals</h3>
<ul>
  <li><strong>Inorder</strong> (left-root-right): gives sorted order for BST</li>
  <li><strong>Preorder</strong> (root-left-right): serialize/copy tree</li>
  <li><strong>Postorder</strong> (left-right-root): delete tree, evaluate expressions</li>
  <li><strong>Level-order (BFS)</strong>: shortest path, level-by-level processing</li>
</ul>

<h3>Graph representations</h3>
<ul>
  <li>Adjacency list: <code>dict[node] = [neighbours]</code> -- sparse graphs</li>
  <li>Adjacency matrix: <code>grid[i][j] = weight</code> -- dense graphs, O(1) edge lookup</li>
</ul>

<h3>DFS patterns</h3>
<p>Recursive or iterative (stack). Useful for: path finding, cycle detection, topological sort, connected components.</p>

<h3>BFS patterns</h3>
<p>Queue-based. Useful for: shortest path (unweighted), level-order, nearest neighbour.</p>
        `,
        codeExamples: [
          {
            title: "Binary tree -- traversals and common problems",
            code: `from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build(vals):
    """Build tree from level-order list (None = missing)."""
    if not vals: return None
    root = TreeNode(vals[0])
    q = deque([root])
    i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i]); q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i]); q.append(node.right)
        i += 1
    return root

def max_depth(root):
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

def is_balanced(root):
    def height(node):
        if not node: return 0
        lh = height(node.left)
        if lh == -1: return -1
        rh = height(node.right)
        if rh == -1: return -1
        if abs(lh - rh) > 1: return -1
        return 1 + max(lh, rh)
    return height(root) != -1

def level_order(root):
    if not root: return []
    result, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result

tree = build([3,9,20,None,None,15,7])
print("Max depth:", max_depth(tree))   # 3
print("Balanced:", is_balanced(tree))  # True
print("Level order:", level_order(tree))
`
          },
          {
            title: "Graph BFS/DFS -- number of islands",
            code: `def num_islands(grid):
    """Count connected groups of '1's. DFS O(m*n)."""
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '#'   # mark visited
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            dfs(r+dr, c+dc)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0'],
]
print("Islands:", num_islands(grid1))  # 1

grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1'],
]
print("Islands:", num_islands(grid2))  # 3
`
          }
        ],
        playground: {
          title: "Shortest path BFS",
          initialCode: `from collections import deque

def shortest_path(graph, start, end):
    """BFS shortest path in unweighted graph."""
    if start == end:
        return [start]
    visited = {start}
    queue = deque([[start]])
    while queue:
        path = queue.popleft()
        node = path[-1]
        for neighbor in graph.get(node, []):
            if neighbor == end:
                return path + [neighbor]
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])
    return []   # no path

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
}

print("A -> F:", shortest_path(graph, 'A', 'F'))  # A -> C -> F
print("A -> D:", shortest_path(graph, 'A', 'D'))  # A -> B -> D
print("A -> A:", shortest_path(graph, 'A', 'A'))  # [A]
`
        },
        exercises: [
          {
            title: "Validate a BST",
            description: "Implement `is_valid_bst(root)` returning True if the tree is a valid Binary Search Tree. Use the min/max bounds approach.",
            starterCode: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    # TODO: check root.val bounds, recurse with updated bounds
    pass

# Build test trees
def n(v, l=None, r=None): return TreeNode(v, l, r)
valid   = n(5, n(3, n(1), n(4)), n(8, n(7), n(9)))
invalid = n(5, n(3, n(1), n(6)), n(8))  # 6 violates BST

print("Valid BST:", is_valid_bst(valid))     # True
print("Invalid BST:", is_valid_bst(invalid)) # False`,
            solution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    if not root:
        return True
    if not (min_val < root.val < max_val):
        return False
    return (is_valid_bst(root.left, min_val, root.val) and
            is_valid_bst(root.right, root.val, max_val))

def n(v, l=None, r=None): return TreeNode(v, l, r)
valid   = n(5, n(3, n(1), n(4)), n(8, n(7), n(9)))
invalid = n(5, n(3, n(1), n(6)), n(8))

print("Valid BST:", is_valid_bst(valid))
print("Invalid BST:", is_valid_bst(invalid))`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the time complexity of DFS and BFS on a graph?",
            answer: "O(V + E) for both, where V is vertices and E is edges. Each vertex is visited once; each edge is considered once. Space complexity is O(V) for the visited set plus O(V) for the recursion stack (DFS) or queue (BFS)."
          },
          {
            question: "When would you choose BFS over DFS for graph traversal?",
            answer: "BFS guarantees the shortest path in an unweighted graph. Choose BFS when you need shortest path, when the solution is likely near the root/start, or for level-by-level processing. Choose DFS for detecting cycles, topological sort, or when the solution is likely deep."
          }
        ]
      },
      {
        id: "lesson-16-3",
        title: "Dynamic Programming",
        content: `
<h2>Dynamic Programming</h2>
<p>DP solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation.</p>

<h3>Two DP approaches</h3>
<ul>
  <li><strong>Top-down (memoization)</strong>: recursive with caching. Write naturally, add <code>@functools.lru_cache</code>.</li>
  <li><strong>Bottom-up (tabulation)</strong>: iterative, fills a table from base cases up. Usually faster (no recursion overhead).</li>
</ul>

<h3>DP problem recognition</h3>
<ul>
  <li>"Count the number of ways..."</li>
  <li>"Find the minimum/maximum..."</li>
  <li>"Can you achieve X?" (boolean DP)</li>
  <li>Optimal substructure: solution to problem contains solutions to subproblems</li>
  <li>Overlapping subproblems: same subproblems computed repeatedly in brute force</li>
</ul>

<h3>Classic patterns</h3>
<p>1D DP: Fibonacci, climb stairs, house robber. 2D DP: coin change, longest common subsequence, knapsack.</p>
        `,
        codeExamples: [
          {
            title: "Classic 1D DP problems",
            code: `import functools

# 1. Climb stairs -- ways to reach step n using 1 or 2 steps
def climb_stairs(n):
    if n <= 2: return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 2. House robber -- max loot without adjacent houses
def rob(nums):
    if not nums: return 0
    prev2 = prev1 = 0
    for n in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + n)
    return prev1

# 3. Coin change -- fewest coins to make amount
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for amt in range(1, amount + 1):
        for coin in coins:
            if coin <= amt:
                dp[amt] = min(dp[amt], dp[amt - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print("Climb  4:", climb_stairs(4))   # 5
print("Climb  5:", climb_stairs(5))   # 8
print("Rob [2,7,9,3,1]:", rob([2,7,9,3,1]))   # 12
print("Coins [1,5,11] -> 15:", coin_change([1,5,11], 15))  # 3
print("Coins [2] -> 3:", coin_change([2], 3))   # -1
`
          },
          {
            title: "2D DP -- Longest Common Subsequence",
            code: `def lcs(s1, s2):
    """Longest Common Subsequence -- O(m*n)."""
    m, n = len(s1), len(s2)
    dp = [[0] * (n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

def edit_distance(s1, s2):
    """Levenshtein distance -- min insert/delete/replace."""
    m, n = len(s1), len(s2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i
    for j in range(n+1): dp[0][j] = j
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]

print("LCS('ABCBDAB', 'BDCAB'):", lcs("ABCBDAB", "BDCAB"))   # 4
print("Edit('horse','ros'):", edit_distance("horse", "ros"))   # 3
print("Edit('kitten','sitting'):", edit_distance("kitten","sitting"))  # 3
`
          }
        ],
        playground: {
          title: "Memoization with lru_cache",
          initialCode: `import functools, time

# Without memoization
def fib_slow(n):
    if n <= 1: return n
    return fib_slow(n-1) + fib_slow(n-2)

# With memoization
@functools.lru_cache(maxsize=None)
def fib_fast(n):
    if n <= 1: return n
    return fib_fast(n-1) + fib_fast(n-2)

# Compare
n = 35
t0 = time.perf_counter()
r1 = fib_slow(n)
t1 = time.perf_counter()
r2 = fib_fast(n)
t2 = time.perf_counter()

print(f"fib({n}) = {r1}")
print(f"Slow: {(t1-t0)*1000:.1f}ms")
print(f"Fast: {(t2-t1)*1000:.3f}ms")
print(f"Speedup: {(t1-t0)/(t2-t1+1e-9):.0f}x")

# Cache info
info = fib_fast.cache_info()
print(f"Cache: {info.hits} hits, {info.misses} misses")
`
        },
        exercises: [
          {
            title: "Longest increasing subsequence",
            description: "Implement `lis(nums)` returning the length of the longest strictly increasing subsequence. O(n^2) DP is fine.",
            starterCode: `def lis(nums):
    # dp[i] = length of LIS ending at index i
    # TODO: fill dp, return max
    pass

print(lis([10, 9, 2, 5, 3, 7, 101, 18]))  # 4: [2,3,7,101]
print(lis([0, 1, 0, 3, 2, 3]))            # 4: [0,1,2,3]
print(lis([7, 7, 7]))                      # 1`,
            solution: `def lis(nums):
    if not nums: return 0
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)

print(lis([10, 9, 2, 5, 3, 7, 101, 18]))
print(lis([0, 1, 0, 3, 2, 3]))
print(lis([7, 7, 7]))`
          }
        ],
        interviewQuestions: [
          {
            question: "How do you recognise a DP problem?",
            answer: "Ask: Does the problem ask for a count, minimum, maximum, or boolean feasibility? Does a recursive solution solve the same subproblems multiple times? If yes to both, DP likely applies. The key insight is identifying the state (what parameters uniquely describe a subproblem) and the recurrence relation."
          },
          {
            question: "What is the difference between top-down and bottom-up DP?",
            answer: "Top-down (memoization) is recursive with a cache -- natural to write but has call-stack overhead. Bottom-up (tabulation) iterates from base cases -- often faster and avoids stack overflow. Both have the same asymptotic complexity."
          }
        ]
      },
      {
        id: "lesson-16-4",
        title: "Sorting, Heaps & System Design Patterns",
        content: `
<h2>Sorting, Heaps & Common Patterns</h2>

<h3>Python sorting</h3>
<ul>
  <li><code>list.sort(key=fn, reverse=True)</code> -- in-place, Timsort O(n log n)</li>
  <li><code>sorted(iterable, key=fn)</code> -- returns new list</li>
  <li>Custom key: <code>key=lambda x: (x[1], x[0])</code> for multi-field sort</li>
  <li>Stable: equal elements keep original order</li>
</ul>

<h3>heapq -- min-heap</h3>
<ul>
  <li><code>heapq.heappush(h, item)</code>, <code>heapq.heappop(h)</code> -- O(log n)</li>
  <li><code>heapq.nlargest(k, iterable)</code>, <code>heapq.nsmallest(k, iterable)</code></li>
  <li>Max-heap: negate values (<code>heappush(h, -val)</code>)</li>
  <li>K-th largest: maintain min-heap of size k</li>
</ul>

<h3>Binary search</h3>
<p><code>bisect.bisect_left/right</code> for O(log n) insertion-point finding. Template:</p>
<pre><code>lo, hi = 0, n - 1
while lo <= hi:
    mid = (lo + hi) // 2
    if check(mid): hi = mid - 1
    else:          lo = mid + 1</code></pre>
        `,
        codeExamples: [
          {
            title: "Heap patterns -- K largest elements",
            code: `import heapq

def k_largest(nums, k):
    """Min-heap of size k -- O(n log k)."""
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)
    return sorted(heap, reverse=True)

def k_closest_points(points, k):
    """K points closest to origin. Negate dist for max-heap trick."""
    heap = []
    for x, y in points:
        dist = x*x + y*y
        heapq.heappush(heap, (-dist, x, y))
        if len(heap) > k:
            heapq.heappop(heap)
    return [(x, y) for _, x, y in heap]

def merge_k_sorted(lists):
    """Merge k sorted lists. O(N log k)."""
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))
    result = []
    while heap:
        val, i, j = heapq.heappop(heap)
        result.append(val)
        if j + 1 < len(lists[i]):
            heapq.heappush(heap, (lists[i][j+1], i, j+1))
    return result

print("3 largest:", k_largest([3,1,5,12,2,11], 3))
print("2 closest:", k_closest_points([[1,3],[-2,2],[5,8],[0,1]], 2))
print("Merged:", merge_k_sorted([[1,4,7],[2,5,8],[3,6,9]]))
`
          },
          {
            title: "Binary search on sorted array and answer space",
            code: `import bisect

def search(nums, target):
    """Standard binary search -- O(log n)."""
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:   return mid
        elif nums[mid] < target:  lo = mid + 1
        else:                     hi = mid - 1
    return -1

def min_eating_speed(piles, h):
    """Koko eating bananas -- binary search on answer space."""
    import math
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        hours = sum(math.ceil(p / mid) for p in piles)
        if hours <= h:
            hi = mid
        else:
            lo = mid + 1
    return lo

nums = [1, 3, 5, 7, 9, 11, 13]
print("Search 7:", search(nums, 7))    # 3
print("Search 6:", search(nums, 6))    # -1

# bisect
print("bisect_left  7:", bisect.bisect_left(nums, 7))   # 3
print("bisect_right 7:", bisect.bisect_right(nums, 7))  # 4

piles = [3, 6, 7, 11]
print("Min speed (h=8):", min_eating_speed(piles, 8))   # 4
`
          }
        ],
        playground: {
          title: "Custom sorting challenges",
          initialCode: `# Sort by multiple criteria
students = [
    {"name": "Alice", "gpa": 3.8, "year": 3},
    {"name": "Bob",   "gpa": 3.8, "year": 2},
    {"name": "Carol", "gpa": 3.9, "year": 1},
    {"name": "Dave",  "gpa": 3.7, "year": 3},
]

# Sort by GPA desc, then name asc
sorted_students = sorted(students, key=lambda s: (-s["gpa"], s["name"]))
print("By GPA desc, name asc:")
for s in sorted_students:
    print(f"  {s['name']}: GPA={s['gpa']}, Year={s['year']}")

# Sort intervals by start time, merge overlapping
intervals = [[1,3],[2,6],[8,10],[15,18]]
intervals.sort(key=lambda x: x[0])

merged = [intervals[0]]
for start, end in intervals[1:]:
    if start <= merged[-1][1]:
        merged[-1][1] = max(merged[-1][1], end)
    else:
        merged.append([start, end])

print("\\nMerged intervals:", merged)
`
        },
        exercises: [
          {
            title: "Find median from data stream",
            description: "Implement `MedianFinder` with `add_num(n)` and `find_median()`. Use two heaps: max-heap for lower half, min-heap for upper half.",
            starterCode: `import heapq

class MedianFinder:
    def __init__(self):
        self.lower = []  # max-heap (negate values)
        self.upper = []  # min-heap

    def add_num(self, num):
        # TODO: push to lower, balance, keep sizes equal or lower+1
        pass

    def find_median(self):
        # TODO: if equal sizes, average tops; else top of lower
        pass

mf = MedianFinder()
for n in [1, 2, 3, 4, 5]:
    mf.add_num(n)
    print(f"After adding {n}: median = {mf.find_median()}")`,
            solution: `import heapq

class MedianFinder:
    def __init__(self):
        self.lower = []   # max-heap (negated)
        self.upper = []   # min-heap

    def add_num(self, num):
        heapq.heappush(self.lower, -num)
        # ensure all lower <= all upper
        if self.upper and -self.lower[0] > self.upper[0]:
            heapq.heappush(self.upper, -heapq.heappop(self.lower))
        # balance sizes: lower can have at most 1 extra
        if len(self.lower) > len(self.upper) + 1:
            heapq.heappush(self.upper, -heapq.heappop(self.lower))
        elif len(self.upper) > len(self.lower):
            heapq.heappush(self.lower, -heapq.heappop(self.upper))

    def find_median(self):
        if len(self.lower) > len(self.upper):
            return -self.lower[0]
        return (-self.lower[0] + self.upper[0]) / 2

mf = MedianFinder()
for n in [1, 2, 3, 4, 5]:
    mf.add_num(n)
    print(f"After adding {n}: median = {mf.find_median()}")`
          }
        ],
        interviewQuestions: [
          {
            question: "How do you implement a max-heap using Python's heapq?",
            answer: "Python's heapq is a min-heap. For a max-heap, negate values when pushing and negate again when popping: heappush(h, -val) and -heappop(h). For complex objects use a wrapper or push (-priority, item) tuples."
          },
          {
            question: "When do you use binary search on the 'answer space'?",
            answer: "When the answer has a monotonic property -- if speed X works, so does any speed > X. Binary search between lo (minimum possible answer) and hi (maximum possible answer), checking feasibility at mid each step. Classic examples: minimum eating speed, capacity to ship packages, split array largest sum."
          }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Real-World Python Skills",
    description: "Production-ready Python: project structure, virtual environments, packaging, logging, and best practices.",
    lessons: [
      {
        id: "lesson-17-1",
        title: "Project Structure & Virtual Environments",
        content: `
<h2>Project Structure & Virtual Environments</h2>

<h3>Recommended project layout</h3>
<pre>
my_project/
+-- src/
|   `-- my_package/
|       +-- __init__.py
|       +-- core.py
|       `-- utils.py
+-- tests/
|   +-- conftest.py
|   `-- test_core.py
+-- pyproject.toml   (or setup.cfg)
+-- requirements.txt
`-- README.md
</pre>

<h3>Virtual environments</h3>
<ul>
  <li><code>python -m venv .venv</code> -- create</li>
  <li><code>source .venv/bin/activate</code> (Unix) / <code>.venv\\Scripts\\activate</code> (Windows)</li>
  <li><code>pip install -r requirements.txt</code> -- install deps</li>
  <li><code>pip freeze > requirements.txt</code> -- capture deps</li>
  <li><strong>Never</strong> commit <code>.venv/</code> -- add to <code>.gitignore</code></li>
</ul>

<h3>pyproject.toml (modern packaging)</h3>
<p>Replaces <code>setup.py</code> + <code>setup.cfg</code>. Specifies build system, project metadata, dependencies, dev dependencies, and tool configs (pytest, black, mypy).</p>

<h3>dependency management tools</h3>
<ul>
  <li><strong>pip</strong>: standard, simple</li>
  <li><strong>pip-tools</strong>: pin transitive dependencies reliably</li>
  <li><strong>poetry</strong>: full dependency manager + packaging</li>
  <li><strong>uv</strong>: ultra-fast modern alternative</li>
</ul>
        `,
        codeExamples: [
          {
            title: "pyproject.toml example",
            code: `# This is what a modern pyproject.toml looks like
# (Shown as a Python string for display purposes)

pyproject_toml = """
[build-system]
requires = ["setuptools>=68", "wheel"]
build-backend = "setuptools.backends.legacy:build"

[project]
name = "my-package"
version = "0.1.0"
description = "A short description"
authors = [{ name = "Your Name", email = "you@example.com" }]
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "requests>=2.31",
    "pydantic>=2.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.4",
    "pytest-cov>=4.1",
    "black>=23.0",
    "mypy>=1.5",
    "ruff>=0.1",
]

[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v --cov=src --cov-report=term-missing"

[tool.black]
line-length = 88
target-version = ["py311"]

[tool.mypy]
strict = true
"""

print(pyproject_toml)
print("\\nInstall with: pip install -e '.[dev]'")
print("Run tests:    pytest")
print("Format code:  black .")
print("Lint:         ruff check .")
`
          },
          {
            title: "Package structure with __init__.py",
            code: `# Simulating a package structure
import types, sys

# --- src/calculator/__init__.py ---
calculator_init = """
from .core import add, subtract, multiply, divide
from .validators import validate_number

__version__ = "1.0.0"
__all__ = ["add", "subtract", "multiply", "divide", "validate_number"]
"""

# --- src/calculator/core.py ---
calculator_core = """
def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b
"""

# --- src/calculator/validators.py ---
calculator_validators = """
def validate_number(x):
    if not isinstance(x, (int, float)):
        raise TypeError(f"Expected number, got {type(x).__name__}")
    return x
"""

print("Package structure:")
print("src/")
print("  calculator/")
print("    __init__.py  -- exports public API")
print("    core.py      -- arithmetic operations")
print("    validators.py -- input validation")
print()
print("Users import as:")
print("  from calculator import add, divide")
print("  import calculator; calculator.add(1, 2)")
`
          }
        ],
        playground: {
          title: "Requirements and dependency pinning",
          initialCode: `# Understanding requirements.txt vs requirements-dev.txt

requirements = """
# requirements.txt -- production dependencies
requests==2.31.0
pydantic==2.5.0
python-dotenv==1.0.0
"""

requirements_dev = """
# requirements-dev.txt -- development dependencies
-r requirements.txt
pytest==7.4.3
pytest-cov==4.1.0
black==23.11.0
mypy==1.7.0
ruff==0.1.6
pre-commit==3.5.0
"""

dotenv_example = """
# .env file (never commit!)
DATABASE_URL=postgresql://localhost/mydb
SECRET_KEY=super-secret-change-in-production
DEBUG=true
PORT=8080
"""

gitignore = """
# .gitignore essentials for Python
.venv/
__pycache__/
*.pyc
*.pyo
.pytest_cache/
.coverage
htmlcov/
dist/
build/
*.egg-info/
.env
.env.local
"""

print("requirements.txt:")
print(requirements)
print("requirements-dev.txt:")
print(requirements_dev)
print(".gitignore (Python essentials):")
print(gitignore)
`
        },
        exercises: [
          {
            title: "Module with clean public API",
            description: "Create a `geometry` module (as a dict/namespace) that exports `circle_area`, `rect_area`, and `triangle_area`. Define `__all__` listing only the public functions.",
            starterCode: `import math

# Define these functions
def circle_area(r):
    pass

def rect_area(w, h):
    pass

def triangle_area(base, height):
    pass

def _internal_helper():
    """Private -- should NOT be in __all__."""
    pass

__all__ = []  # TODO: list public functions

# Test
print(circle_area(5))
print(rect_area(4, 6))
print(triangle_area(3, 8))`,
            solution: `import math

def circle_area(r):
    return math.pi * r * r

def rect_area(w, h):
    return w * h

def triangle_area(base, height):
    return 0.5 * base * height

def _internal_helper():
    pass

__all__ = ["circle_area", "rect_area", "triangle_area"]

print(f"{circle_area(5):.4f}")
print(rect_area(4, 6))
print(triangle_area(3, 8))`
          }
        ],
        interviewQuestions: [
          {
            question: "Why use virtual environments?",
            answer: "Virtual environments isolate project dependencies -- each project gets its own Python and packages. This prevents version conflicts between projects and keeps the system Python clean. It also makes requirements.txt reproducible: only project-specific packages are listed."
          },
          {
            question: "What is the difference between requirements.txt and pyproject.toml?",
            answer: "requirements.txt is a flat list of pinned versions for reproducible installs (deployment). pyproject.toml declares abstract dependencies with version ranges (for library publishing). For applications you want both: pyproject.toml with ranges, and a locked requirements.txt generated by pip-compile or poetry lock."
          }
        ]
      },
      {
        id: "lesson-17-2",
        title: "Logging & Error Handling in Production",
        content: `
<h2>Logging & Production Error Handling</h2>

<h3>The logging module</h3>
<p>Never use <code>print()</code> in production code. The logging module provides levels, handlers, formatters, and filters.</p>

<h3>Log levels</h3>
<ul>
  <li><code>DEBUG</code> (10): detailed diagnostic info</li>
  <li><code>INFO</code> (20): confirmation things work as expected</li>
  <li><code>WARNING</code> (30): unexpected but handled</li>
  <li><code>ERROR</code> (40): something failed</li>
  <li><code>CRITICAL</code> (50): severe -- may terminate</li>
</ul>

<h3>Structured logging</h3>
<p>Log JSON so log aggregators (Datadog, Splunk, ELK) can parse fields. Use <code>extra={}</code> to add context or the <code>structlog</code> library.</p>

<h3>Exception hierarchy for libraries</h3>
<p>Define a base exception class for your package, then specific subclasses. Callers can catch broadly or narrowly.</p>

<h3>contextlib.suppress & retry patterns</h3>
<p>Use <code>suppress()</code> to explicitly silence specific exceptions. Implement exponential backoff for transient failures.</p>
        `,
        codeExamples: [
          {
            title: "Logging configuration and usage",
            code: `import logging
import sys

# Configure root logger
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s %(name)s %(levelname)s %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    stream=sys.stdout
)

# Module-level logger (best practice)
logger = logging.getLogger(__name__)

def process_order(order_id, amount):
    logger.info("Processing order", extra={"order_id": order_id, "amount": amount})
    try:
        if amount <= 0:
            raise ValueError(f"Invalid amount: {amount}")
        # ... business logic ...
        logger.debug("Order validated successfully", extra={"order_id": order_id})
        return {"status": "ok", "order_id": order_id}
    except ValueError as e:
        logger.error("Order validation failed: %s", e, extra={"order_id": order_id})
        raise
    except Exception as e:
        logger.critical("Unexpected error processing order: %s", e, exc_info=True)
        raise

# Test logging
try:
    process_order("ORD-001", 99.99)
    process_order("ORD-002", -5)
except ValueError:
    pass
`
          },
          {
            title: "Custom exception hierarchy and retry",
            code: `import time, random, logging

logger = logging.getLogger(__name__)

# Custom exception hierarchy
class AppError(Exception):
    """Base exception for this application."""

class ValidationError(AppError):
    def __init__(self, field, message):
        self.field = field
        super().__init__(f"Validation failed on '{field}': {message}")

class ServiceUnavailableError(AppError):
    pass

# Retry with exponential backoff
def retry(max_attempts=3, backoff=1.0, exceptions=(Exception,)):
    def decorator(fn):
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return fn(*args, **kwargs)
                except exceptions as e:
                    if attempt == max_attempts:
                        raise
                    wait = backoff * (2 ** (attempt - 1))
                    logger.warning(f"Attempt {attempt} failed: {e}. Retrying in {wait}s")
                    time.sleep(wait)
        return wrapper
    return decorator

call_count = 0

@retry(max_attempts=3, backoff=0.01, exceptions=(ServiceUnavailableError,))
def flaky_service():
    global call_count
    call_count += 1
    if call_count < 3:
        raise ServiceUnavailableError("Service down")
    return "success"

logging.basicConfig(level=logging.WARNING, format="%(levelname)s %(message)s")
result = flaky_service()
print(f"Result after {call_count} attempts: {result}")
`
          }
        ],
        playground: {
          title: "Structured JSON logging",
          initialCode: `import logging, json, sys
from datetime import datetime

class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_data = {
            "timestamp": datetime.utcnow().isoformat() + "Z",
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if record.exc_info:
            log_data["exception"] = self.formatException(record.exc_info)
        # Include any extra fields
        for key, val in record.__dict__.items():
            if key not in {"name","msg","args","levelname","levelno","pathname",
                           "filename","module","exc_info","exc_text","stack_info",
                           "lineno","funcName","created","msecs","relativeCreated",
                           "thread","threadName","processName","process","message"}:
                log_data[key] = val
        return json.dumps(log_data)

handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(JSONFormatter())

logger = logging.getLogger("app")
logger.addHandler(handler)
logger.setLevel(logging.DEBUG)
logger.propagate = False

logger.info("User logged in", extra={"user_id": 42, "ip": "10.0.0.1"})
logger.warning("High memory usage", extra={"percent": 87.3, "host": "web-01"})
try:
    1 / 0
except ZeroDivisionError:
    logger.error("Division failed", exc_info=True)
`
        },
        exercises: [
          {
            title: "Context-aware logger",
            description: "Create a `RequestLogger` class that wraps a logger and always includes a `request_id` in every log message using the `extra` parameter.",
            starterCode: `import logging

class RequestLogger:
    def __init__(self, request_id):
        self.request_id = request_id
        self._logger = logging.getLogger("request")
        # TODO: store request_id, delegate info/warning/error to self._logger with extra

    def info(self, msg, **kwargs):
        pass  # TODO

    def warning(self, msg, **kwargs):
        pass  # TODO

    def error(self, msg, **kwargs):
        pass  # TODO

logging.basicConfig(level=logging.DEBUG,
    format="%(levelname)s [req=%(request_id)s] %(message)s")

log = RequestLogger("abc-123")
log.info("Processing started")
log.warning("Slow query detected")`,
            solution: `import logging

class RequestLogger:
    def __init__(self, request_id):
        self.request_id = request_id
        self._logger = logging.getLogger("request")

    def _extra(self): return {"request_id": self.request_id}

    def info(self, msg, **kwargs):
        self._logger.info(msg, extra=self._extra(), **kwargs)

    def warning(self, msg, **kwargs):
        self._logger.warning(msg, extra=self._extra(), **kwargs)

    def error(self, msg, **kwargs):
        self._logger.error(msg, extra=self._extra(), **kwargs)

logging.basicConfig(level=logging.DEBUG,
    format="%(levelname)s [req=%(request_id)s] %(message)s")

log = RequestLogger("abc-123")
log.info("Processing started")
log.warning("Slow query detected")`
          }
        ],
        interviewQuestions: [
          {
            question: "Why use logging instead of print() in production?",
            answer: "Logging provides: severity levels (filter noise vs errors), configurable output destinations (file, console, network), structured metadata, timestamps, and can be toggled without code changes. print() output is unstructured, goes to stdout only, and can't be selectively enabled/disabled."
          },
          {
            question: "What is exponential backoff and when do you use it?",
            answer: "Retry delays that double each attempt (1s, 2s, 4s, 8s...) with optional jitter. Used for transient failures in network calls, rate-limited APIs, and database connections. It avoids thundering herd (all clients retrying simultaneously) and gives the service time to recover."
          }
        ]
      },
      {
        id: "lesson-17-3",
        title: "Type Hints & Static Analysis",
        content: `
<h2>Type Hints & Static Analysis</h2>
<p>Type hints (PEP 484+) make code self-documenting, enable IDE autocomplete, and catch bugs before runtime with tools like <strong>mypy</strong> and <strong>pyright</strong>.</p>

<h3>Basic annotations</h3>
<pre><code>def greet(name: str) -> str:
    return f"Hello, {name}"

count: int = 0
prices: list[float] = []</code></pre>

<h3>typing module (Python 3.9 below)</h3>
<p><code>List, Dict, Tuple, Optional, Union, Any, Callable, TypeVar, Generic</code></p>

<h3>Modern type hints (Python 3.10+)</h3>
<ul>
  <li><code>int | None</code> instead of <code>Optional[int]</code></li>
  <li><code>list[str]</code> instead of <code>List[str]</code></li>
  <li><code>dict[str, int]</code> instead of <code>Dict[str, int]</code></li>
</ul>

<h3>TypedDict & dataclasses</h3>
<p><code>TypedDict</code> for typed dicts; <code>@dataclass</code> for typed data classes with auto-generated <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code>.</p>

<h3>Protocol</h3>
<p>Structural subtyping -- any class implementing the required methods satisfies the protocol without explicit inheritance (duck typing + type safety).</p>
        `,
        codeExamples: [
          {
            title: "Type hints in practice",
            code: `from typing import Optional, Union, Callable, TypeVar
from dataclasses import dataclass, field

# Basic function annotations
def parse_int(s: str) -> Optional[int]:
    try:
        return int(s)
    except ValueError:
        return None

# Union types (Python 3.10+ syntax)
def process(value: int | str | None) -> str:
    if value is None:
        return "null"
    return str(value).upper()

# Generic functions with TypeVar
T = TypeVar("T")

def first(items: list[T]) -> Optional[T]:
    return items[0] if items else None

# Dataclass with types
@dataclass
class User:
    name: str
    email: str
    age: int
    tags: list[str] = field(default_factory=list)
    active: bool = True

    def display_name(self) -> str:
        return f"{self.name} <{self.email}>"

u = User("Alice", "alice@example.com", 30, tags=["admin"])
print(u)
print(u.display_name())
print(first([1, 2, 3]))
print(process(None))
print(parse_int("42"), parse_int("bad"))
`
          },
          {
            title: "Protocol for structural typing",
            code: `from typing import Protocol, runtime_checkable

@runtime_checkable
class Drawable(Protocol):
    def draw(self) -> str: ...
    def area(self) -> float: ...

class Circle:
    def __init__(self, r: float):
        self.r = r
    def draw(self) -> str:
        return f"Circle(r={self.r})"
    def area(self) -> float:
        import math
        return math.pi * self.r ** 2

class Rectangle:
    def __init__(self, w: float, h: float):
        self.w, self.h = w, h
    def draw(self) -> str:
        return f"Rect({self.w}x{self.h})"
    def area(self) -> float:
        return self.w * self.h

def render_all(shapes: list[Drawable]) -> None:
    for shape in shapes:
        print(f"{shape.draw()} -- area={shape.area():.2f}")

shapes = [Circle(3), Rectangle(4, 5), Circle(1.5)]
render_all(shapes)

# runtime_checkable
print("Circle is Drawable:", isinstance(Circle(1), Drawable))
`
          }
        ],
        playground: {
          title: "TypedDict and dataclass comparison",
          initialCode: `from typing import TypedDict
from dataclasses import dataclass

# TypedDict -- typed dict (mutable, no methods)
class Config(TypedDict):
    host: str
    port: int
    debug: bool

cfg: Config = {"host": "localhost", "port": 8080, "debug": False}
print("Config:", cfg)

# Dataclass -- typed object (methods, validation possible)
@dataclass(frozen=True)  # immutable
class Point:
    x: float
    y: float

    def distance_to(self, other: "Point") -> float:
        return ((self.x - other.x)**2 + (self.y - other.y)**2) ** 0.5

p1 = Point(0, 0)
p2 = Point(3, 4)
print(f"Distance {p1} -> {p2}: {p1.distance_to(p2)}")

# frozen=True makes it hashable
points = {p1, p2}
print("Points set:", points)

# Comparison
@dataclass
class Vector:
    x: float; y: float

v1 = Vector(1, 2)
v2 = Vector(1, 2)
print("v1 == v2:", v1 == v2)  # True -- dataclass auto-generates __eq__
`
        },
        exercises: [
          {
            title: "Typed stack",
            description: "Rewrite the Stack class from Module 15 using generics (`Generic[T]`) so `Stack[int]` only holds ints and `Stack[str]` only holds strings.",
            starterCode: `from typing import TypeVar, Generic, Optional

T = TypeVar("T")

class Stack(Generic[T]):
    def __init__(self) -> None:
        self._data: list[T] = []

    def push(self, item: T) -> None:
        pass  # TODO

    def pop(self) -> T:
        pass  # TODO -- raise IndexError if empty

    def peek(self) -> T:
        pass  # TODO

    def is_empty(self) -> bool:
        pass  # TODO

int_stack: Stack[int] = Stack()
int_stack.push(1)
int_stack.push(2)
print(int_stack.pop())   # 2`,
            solution: `from typing import TypeVar, Generic

T = TypeVar("T")

class Stack(Generic[T]):
    def __init__(self) -> None:
        self._data: list[T] = []

    def push(self, item: T) -> None:
        self._data.append(item)

    def pop(self) -> T:
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self._data.pop()

    def peek(self) -> T:
        if self.is_empty():
            raise IndexError("peek at empty stack")
        return self._data[-1]

    def is_empty(self) -> bool:
        return len(self._data) == 0

int_stack: Stack[int] = Stack()
int_stack.push(1)
int_stack.push(2)
print(int_stack.pop())   # 2
print(int_stack.peek())  # 1`
          }
        ],
        interviewQuestions: [
          {
            question: "What is the difference between Optional[X] and X | None?",
            answer: "They are semantically identical -- both mean 'X or None'. Optional[X] is the older syntax from typing module (Python 3.5+); X | None uses the union operator (Python 3.10+). The newer syntax is more readable. mypy and pyright understand both."
          },
          {
            question: "What is structural subtyping (Protocol) vs nominal subtyping?",
            answer: "Nominal: class B is a subtype of A only if B explicitly inherits from A. Structural (Protocol): class B satisfies Protocol A if it implements the required methods/attributes, regardless of inheritance. Structural typing aligns with Python's duck typing while still providing type safety."
          }
        ]
      },
      {
        id: "lesson-17-4",
        title: "REST APIs with Flask & Best Practices",
        content: `
<h2>REST APIs with Flask & Production Best Practices</h2>

<h3>RESTful design principles</h3>
<ul>
  <li>Resources as nouns: <code>/users</code>, <code>/orders/{id}</code></li>
  <li>HTTP verbs: GET (read), POST (create), PUT/PATCH (update), DELETE</li>
  <li>Status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 422 Unprocessable, 500 Server Error</li>
  <li>Stateless: no server-side session state</li>
</ul>

<h3>Flask patterns</h3>
<ul>
  <li>Blueprints for modular routing</li>
  <li><code>app.errorhandler(404)</code> for global error handlers</li>
  <li>Request lifecycle hooks: <code>before_request</code>, <code>after_request</code></li>
  <li>flask-cors for cross-origin requests</li>
</ul>

<h3>Production checklist</h3>
<ul>
  <li>Use a production WSGI server: gunicorn, uvicorn</li>
  <li>Never set <code>debug=True</code> in production</li>
  <li>Load secrets from environment variables, not source code</li>
  <li>Set up health check endpoint: <code>GET /health</code></li>
  <li>Implement request ID middleware for tracing</li>
  <li>Rate limiting, input validation, output sanitization</li>
</ul>
        `,
        codeExamples: [
          {
            title: "Flask REST API blueprint",
            code: `from flask import Flask, Blueprint, jsonify, request, abort
from functools import wraps
import uuid

app = Flask(__name__)
app.config["SECRET_KEY"] = "dev-key-change-in-production"

# In-memory store (use a real DB in production)
users_db: dict[int, dict] = {
    1: {"id": 1, "name": "Alice", "email": "alice@example.com"},
    2: {"id": 2, "name": "Bob",   "email": "bob@example.com"},
}
next_id = 3

# Blueprint for /api/users
users_bp = Blueprint("users", __name__, url_prefix="/api/users")

@users_bp.route("", methods=["GET"])
def list_users():
    return jsonify(list(users_db.values()))

@users_bp.route("/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = users_db.get(user_id)
    if not user:
        abort(404, description=f"User {user_id} not found")
    return jsonify(user)

@users_bp.route("", methods=["POST"])
def create_user():
    global next_id
    data = request.get_json()
    if not data or "name" not in data or "email" not in data:
        abort(400, description="name and email are required")
    user = {"id": next_id, "name": data["name"], "email": data["email"]}
    users_db[next_id] = user
    next_id += 1
    return jsonify(user), 201

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": str(e)}), 404

@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": str(e)}), 400

app.register_blueprint(users_bp)

# Test
with app.test_client() as client:
    r = client.get("/api/users")
    print("GET /api/users:", r.status_code, r.get_json())

    r = client.post("/api/users", json={"name": "Carol", "email": "carol@example.com"})
    print("POST /api/users:", r.status_code, r.get_json())

    r = client.get("/api/users/99")
    print("GET /api/users/99:", r.status_code, r.get_json())
`
          },
          {
            title: "Request ID middleware and health check",
            code: `from flask import Flask, g, jsonify, request
import uuid, time, logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
logger = logging.getLogger(__name__)

app = Flask(__name__)

@app.before_request
def add_request_id():
    g.request_id = request.headers.get("X-Request-ID", str(uuid.uuid4()))
    g.start_time = time.perf_counter()

@app.after_request
def log_request(response):
    elapsed = (time.perf_counter() - g.start_time) * 1000
    logger.info(
        "%s %s %d %.1fms [%s]",
        request.method, request.path, response.status_code,
        elapsed, g.request_id
    )
    response.headers["X-Request-ID"] = g.request_id
    return response

@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "version": "1.0.0",
        "checks": {"database": "ok", "cache": "ok"}
    })

@app.route("/api/echo", methods=["POST"])
def echo():
    return jsonify({"echo": request.get_json(), "request_id": g.request_id})

with app.test_client() as client:
    r = client.get("/health")
    print("Health:", r.get_json())

    r = client.post("/api/echo", json={"msg": "hello"})
    print("Echo:", r.get_json())
`
          }
        ],
        playground: {
          title: "Flask API with validation",
          initialCode: `from flask import Flask, jsonify, request, abort

app = Flask(__name__)

def validate_product(data):
    """Return (product, None) or (None, error_message)."""
    if not data:
        return None, "Request body required"
    errors = []
    if "name" not in data or not data["name"].strip():
        errors.append("name is required")
    if "price" not in data:
        errors.append("price is required")
    elif not isinstance(data["price"], (int, float)) or data["price"] < 0:
        errors.append("price must be a non-negative number")
    if errors:
        return None, "; ".join(errors)
    return {
        "name": data["name"].strip(),
        "price": float(data["price"]),
        "in_stock": data.get("in_stock", True)
    }, None

products = {}
next_id = 1

@app.route("/products", methods=["POST"])
def create_product():
    global next_id
    product, err = validate_product(request.get_json())
    if err:
        return jsonify({"error": err}), 422
    products[next_id] = {**product, "id": next_id}
    result = products[next_id]
    next_id += 1
    return jsonify(result), 201

@app.route("/products/<int:pid>")
def get_product(pid):
    p = products.get(pid)
    return (jsonify(p), 200) if p else (jsonify({"error": "Not found"}), 404)

with app.test_client() as client:
    # Valid
    r = client.post("/products", json={"name": "Widget", "price": 9.99})
    print("Create:", r.status_code, r.get_json())

    # Invalid
    r = client.post("/products", json={"name": "", "price": -5})
    print("Invalid:", r.status_code, r.get_json())

    # Get
    r = client.get("/products/1")
    print("Get:", r.status_code, r.get_json())
`
        },
        exercises: [
          {
            title: "CRUD endpoints for a Todo API",
            description: "Implement GET /todos, POST /todos, PATCH /todos/<id> (toggle done), and DELETE /todos/<id> using Flask's test client.",
            starterCode: `from flask import Flask, jsonify, request

app = Flask(__name__)
todos = {}
nid = 1

@app.route("/todos", methods=["GET"])
def list_todos():
    return jsonify(list(todos.values()))

@app.route("/todos", methods=["POST"])
def create_todo():
    # TODO: create {id, text, done=False} from request JSON
    pass

@app.route("/todos/<int:tid>", methods=["PATCH"])
def toggle_todo(tid):
    # TODO: toggle done field, 404 if not found
    pass

@app.route("/todos/<int:tid>", methods=["DELETE"])
def delete_todo(tid):
    # TODO: delete, 404 if not found
    pass

with app.test_client() as c:
    c.post("/todos", json={"text": "Buy milk"})
    c.post("/todos", json={"text": "Learn Python"})
    print(c.get("/todos").get_json())`,
            solution: `from flask import Flask, jsonify, request

app = Flask(__name__)
todos = {}
nid = 1

@app.route("/todos", methods=["GET"])
def list_todos():
    return jsonify(list(todos.values()))

@app.route("/todos", methods=["POST"])
def create_todo():
    global nid
    data = request.get_json()
    if not data or not data.get("text"):
        return jsonify({"error": "text required"}), 422
    todo = {"id": nid, "text": data["text"], "done": False}
    todos[nid] = todo; nid += 1
    return jsonify(todo), 201

@app.route("/todos/<int:tid>", methods=["PATCH"])
def toggle_todo(tid):
    t = todos.get(tid)
    if not t: return jsonify({"error": "Not found"}), 404
    t["done"] = not t["done"]
    return jsonify(t)

@app.route("/todos/<int:tid>", methods=["DELETE"])
def delete_todo(tid):
    if tid not in todos: return jsonify({"error": "Not found"}), 404
    del todos[tid]
    return "", 204

with app.test_client() as c:
    c.post("/todos", json={"text": "Buy milk"})
    c.post("/todos", json={"text": "Learn Python"})
    print("All:", c.get("/todos").get_json())
    c.patch("/todos/1")
    print("After toggle:", c.get("/todos/1").get_json() if False else c.get("/todos").get_json())
    c.delete("/todos/1")
    print("After delete:", c.get("/todos").get_json())`
          }
        ],
        interviewQuestions: [
          {
            question: "What HTTP status code should a successful POST return?",
            answer: "201 Created, with the newly created resource in the response body and ideally a Location header pointing to the resource URL. Use 200 OK for idempotent operations that don't create new resources."
          },
          {
            question: "How do you handle secrets in a Python application?",
            answer: "Load secrets from environment variables (os.environ or python-dotenv for local dev). Never hardcode them or commit to version control. In production use secret management services (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager). The .env file is for local development only and must be in .gitignore."
          },
          {
            question: "What is a WSGI server and why not use Flask's built-in server in production?",
            answer: "WSGI (Web Server Gateway Interface) is the Python standard for web server â†” application communication. Flask's built-in server is single-threaded, not designed for concurrent requests, and lacks features like worker management and graceful restarts. Production: use gunicorn (sync) or uvicorn (async/ASGI) behind nginx."
          }
        ]
      }
    ]
  }
];
