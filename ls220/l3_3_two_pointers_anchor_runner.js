// 5 Minutes
// Given an array of positive integers and zeroes, our task is
// to move all zeroes to the end of the array while preserving
// the relative order of non-zero elements. The goal is to solve
// this problem in constant space complexity.

// If no zeroes are present in the array, no changes are needed.


// Example:
// Input: nums = [0, 2, 0, 4, 8]
// Output: [2, 4, 8, 0, 0]


/*
I: [] ints
O: [] ints, same array
Rules
 - move zeros to end
 - preseve order of non-zeros
 - mutate array

 start runner at 0
 move on every iteration
 if at zero, continue
 if at non-zero swap

 start anchor at 0
 advance after swap

 Init a: null
 LOOP: i : 0 to len -1
   IF nums[i] !== 0  // runner at zero
      IF num[a] !== 0  // anchor not at zero
        a = i
      ELSE
        continue
   ElSE: // runner at non-zero
      IF  num[a] === 0
        swap
        anchor ++


---
// Input: nums = [0, 2, 0, 4, 8]
// Output: [2, 4, 8, 0, 0]

 [2, 4, 8, 0, 0] //  2, 4, 8, 0, 0
            r
        a


/ Input: nums = [1, 2, 0, 4, 8]
// Output: [1, 2, 4, 8, 0 ]
 1, 2, 0, 4, 8] //  1, 2, 4, 8, 0 
 a
       r

init anchor: 0
LOOP: runner 0 to len - 1
  IF value at runner != 0
    assing to anchor index
    increment anchor inde

  runner ++

while anchor < len - 1
  assing 0  


*/

function moveZeros(nums) {
  let anchor = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== 0) {
      [nums[anchor], nums[i]] = [nums[i], nums[anchor]];
      anchor++;
    }


  return nums;
}

function moveZeroesNaive(nums) {
  let idx = 0;
  let counter = 0;

  while (counter < nums.length) {
    console.log(counter, nums[idx], nums)
    if (nums[idx] === 0) {
      nums.splice(idx, 1);
      nums.push(0);
    } else {
      idx++;
    }
    counter++;
  }
  return nums;
}

const array = [0, 2, 0, 4, 8];
console.log(moveZeros(array))