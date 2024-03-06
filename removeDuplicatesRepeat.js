/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/


runner starts at 1
anchor starts at 0
runner moves on each iteration
anchor moves if runnerVal is "new" // !== anchorVal
   anchor reassings value


*/

function removeDuplicates(nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
      if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
      j++;
  }
  return i + 1;
}
