"""
PROBLEM
I: nums, []int, sorted, rotated array of numbers
 - at least on number
 - all unique, sorted
 - rotated 1 or more times
O: int, minimum element

rules
- O(log n) time -- binary seary


EXAMPLES:
// original
0,1,2, 4 ,5,6,7

// rotations
7,0,1, 2 ,4,5,6
6,7,0, 1 ,2,4,5
5,6,7, 0 ,1,2,4
4,5,6, 7 ,0,1,2
2,4,5, 6 ,7,0,1
1,2,4, 5, 6,7,0,


rotate means element at index -1 is moved to index 0

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

3,4,5,1,2
    ^

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.       

4,5,6,7, 0,1,2
         ^

 Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

11,13,15,
^

notes
- segments slope up
- if not rotated, 
    one segment, 
    min is first element in segment
- if rotated
    two segments
    min is first element in second segment    


ALGO

result = [0]
init: left, right

while left <= right
    init mid
    reassing result of mid < result

    IF val at left , val at righ
        assign result to val at left

    if val at mid > val at left
        //go right
    else
        //go left

return result

NOTES to SELF
- I find this one difficult
- there is a twist on binary search pattern
    we are holding a result and update as we binary search
    the 'break' case is: is we are on a single segment, and we can get left element, not a simple: we-found-the-lowest-value
"""

class Solution:
    def findMin(self, nums: List[int]) -> int:
        result = nums[0]
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            midNum = nums[mid]
            leftNum = nums[left]
            rightNum = nums[right]

            result = min([result, midNum])
            print(f'leftNum: {leftNum}, midNum: {midNum}, rightNum: {rightNum}, result: {result}')

            if leftNum < rightNum:
                result = min([result, leftNum])
                break
            if leftNum <= midNum:
                # go right
                left = mid + 1
            else:
                # go left
                right = mid - 1
            
        return result