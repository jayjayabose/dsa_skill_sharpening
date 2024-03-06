function twoSum(nums, target) {
  let seen = {}
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i]
      let compliment = target - num;
      if (compliment in seen) {
          return [seen[compliment], i]
      } else {
          seen[num] = i;
      }
  }
}
