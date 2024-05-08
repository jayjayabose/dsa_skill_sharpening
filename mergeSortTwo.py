"""
sort
I: array of numbers, 
O: same array, numbers sorted

func mergeSort
I: arr, l, r
O: arr
A:
 # base
    if l == r
        return arr

 # reduce
 init m
 sort left half
 sort right hafe
 merge (arr, l, m, r)


"""

"""
merge()
I: array, l, m, r
 
O: 
 same array
rules
 mutate array
 elements l to r are sorted


EXAMPLE
3 6 7   1 2 5 
0   2       5
l   m       r

Approach
    nums_idx = l
    l_idx = 0
    r_idx = 0

    init left, right # slices [l, m + 1], [m + 1, r + 1]
    while l_idx and r_ids are in range
        find the lower value
        assign nums[nums_idx]
        advance 

    while
  
"""

def sort(nums):
    def mergeSort(nums, l, r):
        if l == r:
            return nums
        else:
            m = (l + r) // 2
            mergeSort(nums, l, m)
            mergeSort(nums, m + 1, r)
            return merge(nums, l, m, r)    
        
    def merge(nums, l, m, r):
        left = nums[l: m + 1]
        right = nums[m + 1: r + 1]
        n_idx = l
        l_idx, r_idx = 0, 0

        while l_idx < len(left) and r_idx < len(right):
            if left[l_idx] <= right[r_idx]:
                nums[n_idx] = left[l_idx]
                l_idx += 1
            else:
                nums[n_idx] = right[r_idx]
                r_idx += 1
            n_idx += 1
        
        while l_idx < len(left):
            nums[n_idx] = left[l_idx]
            l_idx += 1
            n_idx += 1

        while r_idx < len(right):
            nums[n_idx] = right[r_idx]
            r_idx += 1
            n_idx += 1

        return nums
    
    return mergeSort(nums, 0, len(nums) - 1)



    
# assert merge([3, 6, 7, 1, 2, 5 ],  0 , 2, 5) == [1, 2, 3, 5, 6, 7]
# assert merge([3, 6, 7, 1 ],  0 , 2, 3) == [1, 3, 6, 7]
assert sort([3, 6, 7, 1, 2, 5 ]) == [1, 2, 3, 5, 6, 7]
assert sort([3, 6, 7, 1, 2, 5, 0, 100 ]) == [0, 1, 2, 3, 5, 6, 7, 100]
