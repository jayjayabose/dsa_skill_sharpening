/*
PROBLEM
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
*/