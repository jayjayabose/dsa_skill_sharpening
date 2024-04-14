"""
PROBLEM
I: []int, nums
- 0-indexed array
- not empty
- neg, 0, positive numbers
- neighbor numbers are not equal

O: num, index of peak element

rules:
- peak element is strictly greater than neighbor elements
- if multiple peaks return any
- solve in O(log n) time
- assume value "off edges" to be -Infinity
    - if nums is one element, that is the peak

question
- can edges be peaks? 


EXAMPLES
Input: nums = [1,2,3,1]
Output: 2

Input: nums = [1,2,1,3,5,6,4]
Output: 5 (or 1) // value 2 is a peak, value 6 is a peak

1

ALGO:
If len is 1, return 0

left, 0
righ, len -1

while left < right
    midIdx
    midVal
    neighbor_left: value at index -1 || -Infiniti
    neighbor_right: value at index +1 || -Infiniti

    IF neighbor_left < midVal and midVal neighbor_right
        return midIdx
    elif neighbor_left > midVal
        // go left
    else
        // go right

NOTES to SELF
- drawing this out was very helpful
- wacth the details: e.g. < vs <= // if you make these detail error in an interview you may throw yourself off track

"""
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0

        left_i = 0
        right_i = len(nums) - 1

        while (left_i <= right_i):
            mid_i = (left_i + right_i) // 2
            mid_v = nums[mid_i]
            l_neighbor_v = float('-inf') if mid_i == 0 else nums[mid_i - 1]
            r_neighbor_v = float('-inf') if mid_i == len(nums) - 1 else nums[mid_i + 1]
            # print(f'l: {l_neighbor_v}, m: {mid_v}, r:{r_neighbor_v}')

            if l_neighbor_v < mid_v and mid_v > r_neighbor_v:
                return mid_i
            elif l_neighbor_v > mid_v:
                right_i = mid_i - 1
            else:
                left_i = mid_i + 1
        