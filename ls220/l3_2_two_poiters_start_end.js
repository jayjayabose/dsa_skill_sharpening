// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the the number that appears first
// should be the first one in the output array.

// Example:
// Input: nums = [1, 3, 6, 7, 8, 12], target = 14
// Output: [6, 8]

// Input: nums = [2, 6, 8, 10], target = 20
// Output: null
// Explanation: None of the pairs add up to 20.

/*
I: nums
i; target
O: []int, two numbers that sum to taret
Rules;
  return null if no solution
  maintain order


const target = 14;  
sum: 15
[1, 3, 6, 7, 8, 12]
       l     r


A;
  IF sum is greater than target, right --
  IF sum is less than target, left==
  IF   
 */

  function findTwoSum(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while (leftIndex < rightIndex) {
      let sum = nums[leftIndex] + nums[rightIndex];
      if (sum < target) {
        leftIndex ++;
      } else if (sum > target) {
        rightIndex --;
      } else {
        return [nums[leftIndex], nums[rightIndex]]
      }
    }

    return null;
  }


console.log(findTwoSum([1, 3, 6, 7, 8, 12], 14)); // [6, 8];
console.log(findTwoSum([2, 6, 8, 10], 20)); // null;