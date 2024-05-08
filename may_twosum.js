/*
https://leetcode.com/problems/two-sum/
good: 10 minutes

PROBLEM:
I: nums, array of ints
 - at least two integers, only intester
I: target, int
O: array of two ints, indices of nums that sum to target
Rules
- only one valid answer



EXAMPES:
nums = [2,7,11,15], target = 9
Output: [0,1]

nums = [3,2,4], target = 6
Output: [1,2]

nums = [3,3], target = 6
Output: [0,1]

APPRAOCH: 
brute force. nested loop. O(n^2)
use a map: int:indx
    iterate through nums
        check map for complem,ent
            if match, return indices

*/
const p = (...args) => console.log(...args);

function twoSum(nums, target) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let compliment = target - num;
        if (compliment in seen) {
            return [seen[compliment], i]
        } else {
            seen[num] = i;
        }
    }

}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

PROBLEM
I: 
 nums, arrray of integer
 target, number
O:
 array of numbers, represening index of numbers that sum to target
R:
- nums has at least two numbers, only numbers
- target is negative, zero poasitive 
- use each number only once
- exactly one solution




EXAMPLES

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
2 ,7, 11,15
^. ^

Input: nums = [3,2,4], target = 6
Output: [1,2]
3,2,4
  ^ ^

Input: nums = [3,3], target = 6
Output: [0,1]
3, 3
^. 6


mental model
brute force; O N^2
loop over elements (i)
  loop over i +1 elements
    if numbs[i] + nums[k] == target

hash O()n)
init object: num: index

loop over numbers
    init complement
    if complement is in object
        return {}index, i]
    

 */



// solution
// function twoSum(nums, target) {
//   let seen = {};
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let complement = target - num;
//     if (complement in seen) {
//       return [seen[complement], i]
//     } else {
//       seen[num] = i;
//     }
//   }
// }

// works
// function twoSum(nums, target) {
//     let seen = {};
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         let compliment = target - num;
//         if (compliment in seen ) { // complement[seen] fails because 0 is false
//             return [seen[compliment], i];
//         }
//         seen[num] = i;
//     }
// }















// function twoSum(nums, target) {
//     let seen = {}
//     for (let i = 0; i < nums.length; i++) {
//         let current = nums[i];
//         let compliment = target - current;

//         if (compliment in seen) {
//           return [seen[compliment], i]
//         }
//         seen[current] = i;
//     }
// }

// var twoSum = function(nums, target) {
//     let numbersSeen = {};
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         let compliment = target - num;
//         console.log(i, num, String(compliment), numbersSeen)

//         if (numbersSeen[String(compliment)]) {
//           return [numbersSeen[compliment], i];
//         }
//         numbersSeen[num] = i;
//     }
    
// };

// twoSum([2,7,11,15], 9);