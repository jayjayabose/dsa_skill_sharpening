"""

PROBLEM:
return the greatest sum that can be produced by summing elements of a subarray
I: nums, List[int]
O: int
rules:
subrray is one or more consecutuive elements
nums has at least one int, can be negative, positive or zero

EXAMPLE:
 
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Input: nums = [1]
Output: 1

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
ALGO:

FUNC: maxSubArray(nums)
    FUNC: calculate_subarray_max(nums, left, right)
    # left and right are pointers

        # base case
        if left === right
            return nums[left]

        mid = (left + right) / 2
        left_subarray_max = func(nums, left, mid)
        right_subarray_max = func(nums, mid + 1, right)
        cross_subarray_max = calculate_cross_subarray_max(nums, left, mid, right)

        return max(left, right, cross)

"""

def maxSubArray( nums: list[int]) -> int:
    def calculate_subarray_max(nums, left, right):
        #base case
        if left == right:
            # print('base', nums[left])
            return nums[left]
        
        mid = (left + right) // 2
        left_subarray_max = calculate_subarray_max(nums, left, mid)
        right_subarray_max = calculate_subarray_max(nums, mid + 1, right)
        cross_subarray_max = calculate_cross_subarray_max(nums, left, mid, right)

        return max(left_subarray_max, right_subarray_max, cross_subarray_max)

    return calculate_subarray_max(nums, 0, len(nums) - 1)





def calculate_cross_subarray_max(nums, left, mid, right):
    """
    return greatest subarray sum that includes element at left and right indices

    ALGO
        // calculate left
        
        left_max: -inf
        left_cum: 0

        iterate: i: mid to left
            increment left_cum
            if left_cum > left_max, reassign

        // calculate right
        

        // return sum of left and right

    """
    # print(left, mid, right)
    left_max = float('-inf')
    left_cum = 0

    for i in range(mid, left - 1, -1):
        # print('left i', i)
        left_cum += nums[i]
        left_max = max(left_max, left_cum)

    # print('left_max', left_max)
    right_max = float('-inf')
    right_cum = 0

    for i in range(mid + 1, right + 1):
        # print('right i', i)
        right_cum += nums[i]
        right_max = max(right_max, right_cum)

    # print('right_max', right_max)
    return left_max + right_max

nums = [-2,1,-3,4,-1,2,1,-5,4]
# mid = (len(nums) - 1) // 2
# assert calculate_cross_subarray_max(nums, 0, mid, len(nums) - 1) == 6, "case 1 failed"
# assert calculate_cross_subarray_max(nums, 0, 1, 2) == -2, "case 2 failed"

assert maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) == 6
assert maxSubArray([1]) == 1
assert maxSubArray([5,4,-1,7,8]) == 23
# print(cross_subarray_max(nums, 0, 1, 2))