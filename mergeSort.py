


# arr = [2, 4, 7, 8, 1, 3, 9]    
# print(merge_sorted_arrays(arr, 0, 3, 6))

def sort(nums):
    def merge_sorted_arrays(nums, l, m, r):
        """

        O: same array
        """

        if l == r:
            return nums
        i = l
        j, k = 0, 0

        left = nums[l : m + 1]
        right = nums[m + 1 : r + 1]

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
            i += 1

        while k < len(right):
            nums[i] = right[k]
            k += 1
            i += 1

        return nums    
    
    def merge_sort(nums, l, r):
        if (l == r):
            return nums

        m = (l + r) // 2
        merge_sort(nums, l, m)
        merge_sort(nums, m + 1, r)
        
        return merge_sorted_arrays(nums, l, m, r)

    return merge_sort(nums, 0, len(nums) - 1)



arr = [2, 10, 4, 0, 7, 8, 1, 3, 9]    
print(sort(arr))