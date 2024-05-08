// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// good 15 minutes
function removeDuplicates(nums) {
  let uniqueIndex = 0
  for (let i = 1; i < nums.length; i ++) {
      if (nums[uniqueIndex] !== nums[i]) {
          uniqueIndex += 1;
          nums[uniqueIndex] = nums[i];
      }
  }
  
  return uniqueIndex + 1;
}