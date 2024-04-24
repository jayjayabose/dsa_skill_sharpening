
input_a = ["ab", "c", "def", "ghij"]

def total_characters(arr):
    # basecase
    if len(arr) == 1:
        return len(arr[0])
    
    return len(arr[0]) + total_characters(arr[1:])

# assert total_characters(input_a) == 10

input_b = [2, 4, 5, 0, 7, 88] 
def filter_for_evens(arr):
    # base case
    if (len(arr) == 1):
        return arr if arr[0] % 2 == 0 else []
    
    left = arr[:1] if arr[0] % 2 == 0 else []
    return left + filter_for_evens(arr[1:])


print(filter_for_evens(input_b))

"""
i: n
o: val
Nth number = N-1 value + n
n starts at 1

# base 
    i == 
"""
def triangular(n):
    if n == 1:
        return 1
    else:
        return n + triangular(n -1)
    
assert triangular(7) == 28    

input_c = "abcdefghijklmnopqrstuvwxyz"

def firstX(input, i = 0):
    if input[0] == 'x':
        return i
    else:
        return firstX(input[1:], i + 1)
    
assert firstX(input_c) == 23


"""
I: rows, cols
O: int, number of shortest paths
Rules
 - 

 # base case
 row or col == 1
    return 1

reutrn paths (r -1, c) + (r, c-1)

"""



def minPathsSum(rows, cols):
    if rows == 1 or cols == 1:
        return 1
    
    return minPathsSum(rows - 1, cols) + minPathsSum(rows, cols - 1)

# print(minPathsSum(3,3))

def findMax(nums):
    print('recursion')
    if len(nums) == 1:
        return nums[0]
    
    return max(nums[0], findMax(nums[1:]))

assert findMax([1, 2, 3, 4]) == 4
    
def fib_recursive(n, memo={}):
    if n == 0 or n == 1:
        return n    
    if n not in memo:
        memo[n] = fib_recursive(n - 1) + fib_recursive(n-1)
    return memo[n]

print(fib_recursive(5))


def fib_bottom_up(n):
    if n == 0:
        return 0
    
    a = 0
    b = 1

    for i in range(1, n + 1):
        tmp = a + b
        a = b
        b = tmp
    
    return b

print(fib_bottom_up(5))



