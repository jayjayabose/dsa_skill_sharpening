"""
https://leetcode.com/problems/jump-game/description/
Medium
Performance: good solved. easily  j/16/2024

problem
can you reach last index? 

i: nums, []integers
o: bool
rules
- start at index 0, nums is not empty, zero or positive values
- each element is max jump at that position
- return tue if you can reach last index, else false

examples
[2,3,1,1,4] // True
   x.    x

[3,2,1,0,4] // False
       x 
   

algo: _canJump(index)
 // base case
 i + [i] >= len -1
    true
 // recrusive case
  LOOP: jump options
    if _canJump(jump_option)
        return true

  return false
  

"""
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        def _canJump(index, memo = {}):
            if index in memo:
                return memo[index]

            # base case
            if index + nums[index] >= len(nums) - 1:
                return True

            # recrusive case
            for jump in range(1, nums[index] + 1):
                jump_index = index + jump
                if (_canJump(jump_index, memo)):
                    memo[index] = True
                    return memo[index]
            
            memo[index] = False
            return memo[index]

        return _canJump(0)

