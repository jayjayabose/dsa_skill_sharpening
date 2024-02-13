/*
 I @param {number[]} nums
   @param {number} target
 O  @return {number[]}
 Rules
 return the index of teh first and last occurance of target in nums
 
 Eamples

Example 1:

5, 7, 7, 8, 8, 1
          

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

appraoch
index is leftmost occurance of target IF
    nums[i] === target AND (nums[i] is left end OR n-1 is not tarte)


 */

    function searchRange (nums, target) {
      let left = 0;
      let right = nums.length - 1;
      let output = [];
  
      while (left <= right) {
          let mid = Math.floor((left + right)/2);
          let midVal = nums[mid];
          if (target === midVal && (mid === left || midVal !== nums[mid-1]) ) {
              console.log('leftmost', left, mid, right);
              output.push(mid);
              break;
          } 
          else if (target <= midVal) {
              right = mid -1;
          } else {
              left = mid + 1;
          }
      }
  
      if (output.length === 0) {
          return [-1, -1];
      }
  
      left = 0;
      right = nums.length - 1;
  
      while (left <= right) {
          let mid = Math.floor((left + right)/2);
          let midVal = nums[mid];
  
          if (target === midVal && (mid === right || midVal !== nums[mid+1]) ) {
              console.log('righttmost', left, mid, right);
              output.push(mid);
              break;
          } 
          else if (target >= midVal) {
              left = mid + 1;
          } else {
              right = mid -1;
          }
      }  
  
      return output;
  };