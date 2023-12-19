func searchRange(nums []int, target int) []int {
	left, right := 0, len(nums)-1
	start, end := -1, -1

	if len(nums) == 0 {
			return []int{start, end}
	}

	// attempt to find least index with target value
	// go left if nums[mid] >= target
	// else to right
	for left < right {
			mid := left + ((right - left) / 2)
			if nums[mid] >= target {
					// go left 
					right = mid
			} else {
					// go right
					left = mid + 1
			}
	}

	// check if we found target
	if nums[left] != target {
			return []int{start, end}
	}

	start = left
	right = len(nums)-1

	// find greatest index with target value
	// go left if nums[mid] is greater than target
	// else go right
	for left < right {
			mid := left + ((right - left) / 2)
			if nums[mid+1] > target {
					// go left
					right = mid
			} else {
					// go right
					left = mid + 1
			}
	}

	end = left

	return []int{start, end}
}