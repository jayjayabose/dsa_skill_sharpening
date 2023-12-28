/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

I: 
nums: int[]
 - numbers, ascending, distinct values, negative, zero, positive
 - not empty
 - may be rotated

target: number

O: int, index of target or -1

[0,1,2,4,5,6,7] 
       ^
Rotated at pivot index 3 ->
[4,5,6,7,0,1,2].
 ^

EXAMPLES
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4


Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1


DATA STRUCTURES
array ints sorted
int

MENTAL MODEL
When a sorted array is rotated, we end up with two sorted arrays
Determine if we are in "left sorted array" or "right sorted array"
  IF nums[l] < nums[m], we are in the left sorted array

In either sorted array we know what direction to go, and at what limit we   

IF value at m equals target, return m

IF value at m is less than target, 
    go left
ELSE 
    go right

 0 1 2 3 4 5 6
[4,5,6,7,0,1,2]
 l   m       r
 
 */


 var search = function(nums, target) {
  let [l, r] = [0, nums.length - 1];
  while (l <= r) {
      let m = Math.floor(l + (r - l) / 2);
      if (nums[m] === target) {
          return m;
      }
      console.log(l, m, r)
      // in left sorted array
      if (nums[l] <= nums[m]) {
          if (target > nums[m] || target < nums[l]) {
              l = m + 1;
          } else {
              r = m - 1;
          }
      } else {
          if (target < nums[m] || target > nums[r]) {
              r = m - 1;
          } else {
              l = m + 1;
          }
      }
  }
  return -1;
};