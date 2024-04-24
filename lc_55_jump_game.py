"""
PROBLEM
I: array
O: bool
rules
    true if can reach last index, else false
    start at index 0
    each element represents max jump at that postion
        jump <= element
    target = len

EXAMPLES
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

2,3,1,1,4
  ^
    ^ ^ ^

    ^ ^
        ^

1 3 
2

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. 
Its maximum jump length is 0, which makes it impossible to reach the last index.

FUNC: jump(idx)
I: idx
O:  bool 

# base case
    if idx == target
        return true
    if idx > target
        return false
    if nums[idx] == 0 
        return false

    iterate i: 1 to nums[idx] (inclusive)
        if jump(idx + i)
            return true

    return false
    



"""

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        target = len(nums) -1
        memo = {}

        def jump(idx):
            if idx == target:
                return True
            elif idx > target:
                return False
            elif nums[idx] == 0:
                return False

            for i in range(1, nums[idx] + 1):
                try:
                    result = memo[idx + i]
                except KeyError:
                    memo[idx + i] = jump(idx + i)

                if memo[idx + i] == True:
                    return True
            return False

        return jump(0)

        