
// just bit of recurrsion recall - let's warm up the brain.

// Problem: double values of an array in place
function double(arr, idx = 0) {
  // baseline condision
  if (idx === arr.length) return
  
  // do the thing: double
  nums[idx] *= 2

  // recursive call
  // note: pass origional array, and index, (not a new array)
  double(arr, idx + 1)
}

// let nums = [1,2,3];
// double(nums);
// console.log(nums);


// Example: what is the subproblem?
function factorial(num) {
  // baseline condition
  if (num === 1) {
    return 1
  } 

  // subproblem: factorial n = n * factorial (n - 1)
  return num * factorial(num -1);
}

// console.log(factorial(6))


// Example: Top Down Thought Process
// Imagine someone has implemented the methods
// What happens when you call it on the sub problem

function arraySum(arr) {
  // baseline; sum of array with one item
  if (arr.length === 1) {
    return arr[0]
  }
  // subproblem: element + sum of rest of array
  // invoke arraySum on the subproblem
  return arr[0] + arraySum(arr.slice(1));
}

console.log(arraySum([1,2,3]));