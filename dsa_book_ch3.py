def list_has_duplicates(nums: list[int]) -> bool:
    seen = set()
    for num in nums:
        if num in seen:
            return True
        else:
            seen.add(num)
    
    return False

# assert list_has_duplicates([1,1]) == True
# assert list_has_duplicates([1,2]) == False
# assert list_has_duplicates([1,2,3,4]) == False

class Stack:
    def __init__(self) -> None:
        self.data = []

    def push(self, item) -> None:
        self.data.append(item)

    def pop(self) -> any:
        # return self.data.pop(len(self.data) - 1)
        return self.data.pop()

    def read(self) -> any:
        return self.data[len(self.data) - 1]

# my_stack = Stack()
# my_stack.push('a')
# print(my_stack.data)
# print(my_stack.read())
# print(my_stack.read())
# print(my_stack.pop())
# print(my_stack.data)

class Queue:
    def __init__(self) -> None:
        self.data = []

    def enqueue(self, item) -> None:
        self.data.append(item)

    def dequeue(self) -> any:
        return self.data.pop(0)

# my_queue = Queue()
# my_queue.enqueue('a')
# my_queue.enqueue('b')
# print(my_queue.data)
# print(my_queue.dequeue())
# print(my_queue.dequeue())
# print(my_queue.data)

def factorial(num: int) -> int:
    # base case
    if num == 1:
        return 1
    else:
        return num * factorial(num - 1)
    
# print(factorial(5))    

def low_to_high(low, high):
    if low > high:
        return
    else:
        print(low)
        low_to_high(low + 2, high)

# low_to_high(2, 20)

def sum_low_to_high(low, high):
    if low > high:
        return 0
    return low + sum_low_to_high(low + 1, high )

# print(sum_low_to_high(2, 10))

array = [ 1,
2,
3,
[4, 5, 6],
7,
[8,
[9, 10, 11,
[12, 13, 14]
]
],
[15, 16, 17, 18, 19,
[20, 21, 22,
[23, 24, 25,
[26, 27, 29]
], 30, 31
], 32
], 33
]

def print_only_numbers(arr) -> None:
    for el in arr:
        if type(el) == int:
            print(el)
        else:
            print_only_numbers(el)


# print_only_numbers(array)

"""
I: list[int]
O: same list
Rules: double each number in the array

EXAMPLES
a = [1, 2, 3, 4, 5]
b = double_array(a)

a # [2, 4, 6, 8, 10]
b # [2, 4, 6, 8, 10]

ALGO

double_array(nums)
    double_element(nums, i)
        # base 
        i is out of range
            return

        nums[i] = nums[i] * 2
        double_element(nums, i + 1)

    double(nums, 0)    

"""

def double_array(nums: list[int], i = 0) -> None:
    if i == len(nums):
        return
    else:
        nums[i] *= 2
        double_array(nums, i + 1)


# a = [1, 2, 3, 4, 5]
# double_array(a)    
# assert a == [2, 4, 6, 8, 10], 'fail case 1'


def factorial_loop(num):
    result = 1
    for i in range(2, num + 1):
        result *= i
    
    return result

# assert factorial(5) == 120

def factorial_recurse_up(num, i = 1, product = 1):
    print('invoke', 'product', i, product)
    if i > num:
        return product
    else:
        return factorial_recurse_up(num, i + 1, i * product)

# assert factorial_recurse_up(5) == 120

def factorial_recurse_down(num):
    if num == 1:
        print('return', 1)
        return 1

    f_num_less_one = factorial_recurse_down(num -1)
    print('return', num * f_num_less_one)
    return num * f_num_less_one
    # return num * factorial_recurse_down(num -1)

# assert factorial_recurse_down(5) == 120

def array_sum(nums, i = 0):
    if i == len(nums) - 1:
        return nums[i]
    
    return nums[i] + array_sum(nums, i + 1)

# a = [1, 2, 3, 4, 5]
# assert array_sum(a) == 15, 'fail case 1'

def reverse_string(input_string):
    # base case
    if len(input_string) == 1:
        return input_string

    return reverse_string(input_string[1:]) + input_string[0]

# print(reverse_string('abcde'))

def count_x_in_string(input):
    if len(input) == 0:
        return 0

    count = 1 if input[0] == 'x' else 0

    return count + count_x_in_string(input[1:])

# assert count_x_in_string('abcx') == 1
# assert count_x_in_string('abc0') == 0
# assert count_x_in_string('axbxc0') == 2


"""
PROBLEM: n - stairs
if you can take 1, 2 or 3 steps at a time how many unique paths are there to the top of a staircase with n steps?

subproblem
 - how many unique pathes are there to 
    n - 1: from here, we know there is 1 path: 1
    n - 2 from here we know there are 2 paths: 2; 1, 1
    n - 3: from here we know there are 4 paths : 1,1,1 ; 2,1 ; 1,2; 3
"""
def count_paths(n):
    if n < 0:
        return 0
    elif n == 1:
        return 1
    elif n == 2:
        return 2
    elif n == 3:
        return 4
    
    return  1 + count_paths(n - 1) + count_paths(n - 2) + count_paths(n -3)

# print(count_paths(5))

"""
PROBLEM: anagram
given a string of n letters, return all unique permutations of those letters

EXAMPLE

a bc

  bc
  cb

  abc
  bac
  bca

  acb
  cab
  cba

ALGO  
anagram(input: str) -> list[str]
    # base case
        str length is one
            return [char]

    all_anagrams = create_anagrams(char, [])            
    tail_anagrams = anagrams(input[1:])
    
    return all anagrams
        
"""

tail = ['bc', 'cb']
char = 'a'

"""

LOOP str in tail
    char + str
    str + char
    LOOP i = 0 to i = length - 2
        insert char at i + 1

"""
def create_anagrams(char, tail_anagrams):
    anagrams = []
    for tail_anagram in tail_anagrams:
        anagrams.append(char + tail_anagram)
        anagrams.append(tail_anagram + char)
        for i in range(0, len(tail_anagram) - 1):

            anagrams.append(f'{tail_anagram[0: i + 1]}{char}{tail_anagram[i + 1:]}')
            # anagrams.append(tail_anagram[0: i + 1] + char + tail_anagram[i + 1:])

    return anagrams

def find_all_anagrams(input):
    if len(input) == 1:
        return [input[0]]

    tail_anagrams = find_all_anagrams(input[1:])
    return create_anagrams(input[0], tail_anagrams)

# print(create_anagrams('a', ['bc', 'cd']))
# assert len(find_all_anagrams('abcd')) == 24

"""
PROBLEM:
I: num, int
O: num, int
Rules
return sum of integers from 0 to int (inclusive)
return 0 if non integer is supplied

EXAMPLE:


"""

def add_it_up(num):
    try:
        result = sum([num for num in range(num + 1)])
    except TypeError:
        result = 0

    return result

# assert add_it_up('a') == 0
# assert add_it_up(0) == 0
# assert add_it_up(2) == 3


"""
I: string, num
- string is all lowercase, space, puncuation
O: string
Rules
- non-letters remain
- letters are shifted

A:

get string lf ascii_lowercase
iteraate throuch chars in input

FUNC: transform
I: char, shift
O: char
A
 find index in ascii letters
 if not found return original
 if found transfrom
    add shirt to index
    % 25
    return char at transformed index from ascii letters

"""

import string

# assert transform('a', 1) == 'b'
# assert transform('a', 2) == 'c'
# assert transform('z', 1) == 'a'
# assert transform(' ', 1) == ' '

def caesar(input, shift):
    def transform(char, shift):
        letters = string.ascii_lowercase
        try: 
            idx = letters.index(char)
            idx = (idx + shift) % 26
            return letters[idx]
        except ValueError:
            return char    
    return ''.join([transform(char, shift) for char in input])

"""
I: input, shift
O: output
A
 make trans
    shift letters
    invoke make trans

invoke string transalte with strng and tranlste table

"""

def caesar_translate(input, shift):
    letters = string.ascii_lowercase
    translation = letters[shift: ] + letters[0: shift]
    table = str.maketrans(letters, translation)
    return str.translate(input, table)

assert caesar_translate('abcd xyz', 4) == 'efgh bcd'
# print(caesar_translate('abcd xyz', 4) )