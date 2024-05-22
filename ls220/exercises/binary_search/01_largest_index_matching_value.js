/*
PROBLEM
https://launchschool.com/exercises/bd4cdca7?track=javascript
Time: 10 minutes + 10. review the lesson. i did not fiture when to go left vs right
30 - 40 minutes all told
find rightmost index where value === index
I: nums, []numbers
O: number - index of largest qualifying number, or -1
Rules
- numbers are distinct and ascending, array is not empty
- find largest index (j) where j equals value at j (j === nums[j])
- return -1 if none exist

notes
i increases by one on each step
val increase by one or more
 
if val >

EXAMPLES
console.log(findLargestIndex([-1, 0, 2, 3]) === 3);
console.log(findLargestIndex([0, 1, 2, 3, 4]) === 4);
console.log(findLargestIndex([-5, 0, 3, 4, 7, 9]) === -1);
console.log(findLargestIndex([-2, 0, 1, 3, 3, 5]) === 5);
console.log(findLargestIndex([0]) === 0);

-1, 0, 2, 3 // 3
 0  1  2  3 

0, 1, 2, 3, 4] // 4
0  1  2  3  4 

      -5   ] 
 0  1  2  3  4 

0, 1, 2, 3, 9] // 3
0  1  2  3  4 

5, 0, 3, 4, 7, 9] // -1
0  1  2  3  4  5

0 / 0
0

DATA STRUCTURES
[]numbers
  numbers - values
  values - index

numnber -- index or -1


ALGO:

init: left, right
init: match falsse
LOOP: while left <= right
  init mid:
  IF nums[m] > m
    // go left
  ELSE
    if num[m] === m, match = true
    // go right

 return match ? right ; -1 

*/

function findLargestIndex(nums, target) {
  let left = 0, right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > mid) {
      right = mid - 1;
    } else {
      if (nums[mid] === mid) result = mid;
      left = left + 1;
    }
  }

  return result;
}
console.log(findLargestIndex([-1, 0, 2, 3]) === 3);
console.log(findLargestIndex([0, 1, 2, 3, 4]) === 4);
console.log(findLargestIndex([-5, 0, 3, 4, 7, 9]) === -1);
console.log(findLargestIndex([-2, 0, 1, 3, 3, 5]) === 5);
console.log(findLargestIndex([0]) === 0);