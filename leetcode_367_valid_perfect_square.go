func isPerfectSquare(num int) bool {
	left := 0
	right := num
	for left <= right {
			mid := (left + right) / 2
			squared := mid * mid

			if squared == num {
					return true
			} else if squared < num {
					left = mid + 1
			} else {
					right = mid - 1
			}
	}
	return false
}