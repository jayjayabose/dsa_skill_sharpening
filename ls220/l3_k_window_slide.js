// Write a function that takes an array of integers and an integer k
// as inputs and returns the maximum sum of any consecutive k elements in
// the array. If the array contains less than k elements, the
// function should return null.
// If the integer k is less than 1 return null as well.

// Example:
// Input: nums = [3, 2, 6, 5, 1, 10, -2], k = 4
// Output: 22

// Input: nums = [1, 2, 3], k = 4
// Output: null

// Input: nums = [1, 2, 3], k = 0
// Output: null


/*
PROBLEM
https://launchschool.com/lessons/65c3e669/assignments/ed8a63c5
45 minutes -- lots of attention to detail errros
- brute force approach is O(n * k), -- elements * window size 
what is largest sum created by any three consecutive elements?

I: []int, integers
I: int, i
O: int, max sum of any consecutive k elements
RULES
- null if < k elements
- integers are negative, zero, positive

EXAMPLES
k = 4
3, 2, 6, 5, 1, 10, -2
0                   6
         r
   l

DATA STRUCTURES
[]int
 int
[]int -- window 
int curentSum
int maxSum


ALGO
if len < k, null
if 0, null

currSum: 0, maxSum: 0
l, r = 0

init: r: 0 // calculate initial sum
  LOOP: while r < k
     add [r] to to currSum
     r++

// r = k
assign maxSum

Loop: while r < len - 1
  add [r] to currSUm
  subtract [l] from sum
  assign max 
  l++
  r++

return max

*/

function maximumSums(numbers, k) {
  if (k > numbers.length || k === 0) return null;

  let currSum = 0
  let left = 0
  let right = k - 1;

  for (let i = 0; i <= right; i++) {
    currSum += numbers[i];
  }

  let maxSum = currSum;
  console.log(maxSum)

  while (right < numbers.length - 1) {
    currSum -= numbers[left];
    left += 1;
    right += 1;
    currSum += numbers[right];
    maxSum = Math.max(currSum, maxSum);
  }

  console.log(maxSum)
  return maxSum;
}


 console.log(maximumSums([3, 2, 6, 5, 1, 10, -2], 4) === 22);
 console.log(maximumSums([1, 2, 3, 4, 5, 6], 4) === 18); // 18
 console.log(maximumSums([1, 2, 3], 4) === null); 
 console.log(maximumSums([1, 2, 3], 0) === null); 

// Output: 22

// Input: nums = [1, 2, 3], k = 4
// Output: null

// Input: nums = [1, 2, 3], k = 0
// Output: null