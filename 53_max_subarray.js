


/*
PROBLEM:
Given an integer array nums, find the subarray  with the largest sum, and return its sum.

I: [] nums, array of integers, pos, neg, zero
 - not empty
 - only integer values
 - not sorted
 - values can repeat
 - not sparse

O: num - represents sum of subarray with greatest sum

Rules
 - subarray is one or more consecutive elements

EXAMPLES
 [-2,1,-3,4,-1,2,1,-5,4]
        ^
          4,-1,2,1]

[5,4,-1,7,8]
          ^
[5,4,-1,7,8]


MENTAL MODEL
 - ne

APPRAOCH
Brute force: nexted loop O(n^2)


 */
// var maxSubArray = function(nums) {
//     console.log(nums);
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     let mid = Math.floor(nums.length - 1);
//     return maxSubArray(nums.slice(0,mid)) + maxSubArray(mid);
    
// };

function maxSubArray(nums){
  let maxSum = nums[0];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
      if (currSum <= 0) {
          currSum = 0;
      }
      currSum += nums[i];
      if (currSum > maxSum) {
          maxSum = currSum;
      }
  }
  return maxSum;
}