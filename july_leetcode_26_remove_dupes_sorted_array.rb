=begin
i: {Integer[]} nums
o: {Integer}, number of unique elements
rules
 - non decreasing order
 - remove dupes in places
 - first k, contain unique elements

algo
init: left = 0
LOOP: i, 0.. len - 1
    IF values are same
        assign right val to left index
        advance left

return left + 1
=end
def remove_duplicates(nums)
  left = 0
  (0..nums.length - 1).each do | idx |
      if nums[left] != nums[idx]
          left += 1
          nums[left] = nums[idx]
      end
  end
  return left + 1
end