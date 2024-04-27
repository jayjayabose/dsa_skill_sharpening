"""
PROBLEM: 
I: nums, list[int]
O: nums, same array
Rules: 
- sort array in place

EXAMPLES

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

ALGO:
I: nums, L, M, R
O: nums

mergeSort(nums, l, r)
    # base
    IF l == right
        return [l]
    
    init m
    mergeSort(nums, l m + 1)
    mergeSort(nums, m + 1, r)
    merge(l, m, r)


    return nums



"""



def merge(nums, L, M, R):
    left = nums[L: M + 1]
    right = nums[M + 1: R + 1]

    i = L
    j = 0
    k = 0

    while j < len(left) and k < len(right):
        if left[j] <= right[k]:
            nums[i] = left[j]
            j += 1
        else:
            nums[i] = right[k]
            k += 1
        i += 1

    while j < len(left):
        nums[i] = left[j]
        j += 1

    while k < len(right):
        nums[i] = right[k]
        k += 1
        
    return nums


# print(merge(nums, 0, 2, 5))

def sort(nums):
    def mergeSort(arr, l, r):
        if l == r:
            return arr
        
        m = (l + r) // 2
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)
        return arr

    return mergeSort(nums, 0, len(nums) - 1)

    
nums = [1, 200, 3, 5, 2, 4, 100]
print(sort(nums))