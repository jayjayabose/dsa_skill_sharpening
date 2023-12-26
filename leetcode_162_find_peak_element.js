/* review
Problem
I: int[]
- at least one number
- negative, zero or positiv alues
- not ordered
O: num represenentng index of a peak
Rules:
 - numbers at edges are larger than numbers off edges
 - a number is peak if greater than left and greater than right
 - if multiple peaks, return any peak index

Questions:
- always a peak? (yes)

Restate the problem
find index of a peak element on O(log n)


EXXAMPLES
Input: nums = [1,2,3,1]
                   ^
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2. 

Input: nums = [1,2,1,3,5,6,4]
                 ^       ^
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.


 4 3 4 5 4 5 6 7 6
 ^.    ^       ^

mental model
if peak return index
if mid + 1 is greater than mid, go right
else go left


AGLO

INIT left, right
LOOP: while left <= right
    INIT mid
    IF isPeak(mid)
        return mid
    ELSE IF  mid + 1 > mid
        go right
    ELSE
        go left
    ENDIF 

END LOOP

*/

var findPeakElement = function(nums) {

  let [left, right] = [0, nums.length - 1];
  
  while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      
      // console.log(left, mid, right)
      // right neighbor is greater (stay in bounds; don't check for out of bounds)
      if (mid < nums.length -1 && nums[mid] < nums[mid + 1]) {
          left = mid + 1;
      // left neighbor is greater (stay in bounds; don't check for out of bounds            
      } else if (mid > 0 && nums[mid] < nums[mid -1]) {
          right = mid - 1;
      // no neighbor is greater, return mid
      // this handles nums.length === 1
      // in any other case we will have gone left or right at least once, so we can return mid
      } else {
          return mid;
      }
  }
}