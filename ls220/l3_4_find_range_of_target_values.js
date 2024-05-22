/*
PROBLEM: return leftMost and rightMost index of a value in array, or [-1, -1]
https://launchschool.com/lessons/a87f81ad/assignments/1a106b16

60 minutes
I; []numbers, nums
I; number, target
O: []number, start and end index of target in nums
RULES
- nums is sorted ascending
- nums empty => [-1, -1]
- return start and end index of target in nums in an array
   or [-1, -1] if target is not in nus

EXAMPLES

Example:
[1, 2, 3, 3, 3, 3, 3, 4, 5], target = 3 =>[2, 6]
 0  1  2  3  4  5  6  7  8
 l           m           r // target === [nid] and , go left
 l  m     r   // go right
       l  r   // 
       m


 [1, 2, 3, 3, 3, 5, 6], target = 4, => [-1, -1]
 0  1  2  3  4  5  6  
DATA STRUCTURES
[] numbers, output
  number, index

[] numbers, nums
  number, elements


ALGORITHM
approach
  find leftMost value
  if not found, return -1, -1
  find rightMost value


func: findLeftMostIndexOfValue(val)
i; int
o: int, index or || -1
rules
- if [], return -1

init output; [-1, -1]

init left, right
LOOP: left < = right
  init mid
  // found leftMostTargetIndex
  if [i] === target && (i === 0 || [i - 1] !=== target) // set i in output
  if target <= [m], go left
  else, go right
  
check if we we found I, else return [-1, -1]

// right most example
return condition; target = [m]

 0  1  2  3               8
[1, 2, 3, 3, 3, 3, 3, 4, 5] // target: 1 => 0
 l           m           r  // target < m , go left
 l  m     r             r  // target < m , go left
 l                        // target === [m] and  [m + 1] !=== target
 r
 m

  0  1  2  3              8
 [1, 2, 3, 3, 3, 3, 3, 4, 5] // target; 1 => 0
  l           m           r  // target < m , go left
  l  m     r             r  // target < m , go left  
*/

function findRangeOfTargetValue(arr, target) {
  return [findLeftMostIndexOfValue(arr, target), findRightMostIndexOfValue(arr, target)];
}

function findLeftMostIndexOfValue(arr, target) {
  let left = 0; right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target && (mid === 0 || arr[mid - 1] !== target)) {
      return mid;
    }

    if (target <= arr[mid]) {
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  return - 1;
}

function findRightMostIndexOfValue(arr, target) {
  let left = 0; right = arr.length - 1;


  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // rightmost index: vaue is found and we are at right end or array or next val is different
    if (arr[mid] === target && (mid === arr.length - 1 || arr[mid + 1] !== target)) {
      // console.log('return early')
      return mid;
    }

    if (target >= arr[mid]) {
      // go right
      left = mid + 1;
    } else {
      // go left
      right = mid - 1;
    }
    // if (target < arr[mid]) {
    //   // go left
    //   right = mid - 1;
    // } else {
    //   // go right
    //   left = mid + 1;
    // }
  }
  // console.log('return late')
  return -1;
}

console.log(findRangeOfTargetValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 3)) // [2, 6]
console.log(findRangeOfTargetValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 1)) // [0,0]
console.log(findRangeOfTargetValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 7) ) // [-1, -1]
console.log(findRangeOfTargetValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 5)) // [8, 8]
console.log(findRangeOfTargetValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 4)) // [7, 7]

// console.log(findLeftMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 3) === 2)
// console.log(findLeftMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 1) === 0)
// console.log(findLeftMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 7) === -1)
// console.log(findLeftMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 5) === 8)
// console.log(findLeftMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 4) === 7)

// console.log(findRightMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 3) === 6) 
// console.log(findRightMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 1) === 0) 
// console.log(findRightMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 7) === -1)
// console.log(findRightMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 5) === 8)
// console.log(findRightMostIndexOfValue([1, 2, 3, 3, 3, 3, 3, 4, 5], 4) === 7)