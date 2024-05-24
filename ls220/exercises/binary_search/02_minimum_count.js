/*
PROBLEM; return lower of count of negative elements, count of positive elements
https://launchschool.com/exercises/27d569d0?track=python
Performance: Good. 35 minutes.

I: [] numbers, ascending
O: number, min(count negave, count postive)
Rules
 - elements are sorted
 - 0 is not negative or positive
 - no dupicate value (ascending order, not non descedning)
 - if array is empty => 0

EXAMPLES
 0    1   2   3  4  5
[-4, -3, -2, -1, 3, 4]
 l        m         r
              l  m  r

[-4, -3, -2, -1, 3, 4] ==> 2
                 ^
                 4   // i = 4 negative , length - i = 2 positive // find sign change

[-3, 1, 2, 3, 4, 5] ==> 1
     ^                 // i = 1 negative, length - i - 5 negative

[-5, -4, -3, -2, -1] ==> 0
// no sign change

[1, 2, 3, 4, 5] ==> 0
// no sign change

[-2, -1, 1, 2] ==> 2

[-7, -5, -4, 1, 2, 6, 10] ==> 3
[-3, -2, -1, 0, 5, 6] ==> 2 // do not count zero

[-1, 0, 1] ==> 1
[] ==> 0

DATA STRUCTURES
  []numbers
    number

APPROACH
  pivot: first positive, after a negative, or zero
  find pivot
    determine counts
    
  # no pivot, 0
  # pivot follows 0
    adjust negative count

ALGO:
  
  init left, right
  LOOP: left <= right
    init: mid
    // pivot
    IF mid > 0 and [mid] > 0 and ([mid - 1] <= 0)
      init: posCount: length - mid
      init: negCount: mid
      IF [mid] === 0
        negCount --
      
      return min (negCOunt, posCount)
    
    IF [mid] <= 0
      // go right
    ELSE
      // go left

  return 0

  
*/

function minimumCount(nums) {
  let left = 0; right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid > 0 && nums[mid] > 0 && nums[mid - 1] <= 0) {
      let negCount = nums[mid - 1] === 0 ? mid - 1 : mid;
      let posCount = nums.length - mid;
      return Math.min(negCount, posCount);
    }

    if (nums[mid] <= 0) {
      // go right
      left = mid + 1;
    } else {
      // go left
      right = mid - 1;
    }
  }

  return 0
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);
