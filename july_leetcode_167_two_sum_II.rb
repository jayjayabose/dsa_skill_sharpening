def two_sum(numbers, target)
  left = 0
  right = numbers.length - 1

  while left < right 
      sum = numbers[left] + numbers[right]
      if sum == target
          return [left + 1, right + 1]
      elsif sum > target
          right -= 1
      else
          left += 1
      end
  end
end