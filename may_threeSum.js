/*
https://leetcode.com/problems/3sum/
not bad: 45 mins.  this was tricky but I worked through it

PROBLEM
I: nums, array of ints
O: 2d array, array of distint,  qualifying triplets
Rules
- triplet has three unique elements, that sum to 0
- do not repeat triplets
- return empty array if no triplets: []

EXAMPLES
nums = [-1,0,1,2,-1,-4]
[[-1,-1,2],[-1,0,1]]

nums = [0,1,1]
Output: []

nums = [0,0,0]
Output: [[0,0,0]]

n -1
l -1
r  2
[-4, -1, -1, -1 0,1, 2, 2]
      *.      
                L
                   R

APPROACHES
brute force: triple nexted loop O(n^3)

sort: iter through, elements, with i,to second third to last
    skip repeate values // move this
    use two pointers to find tripelet
        if found, add
        
ALGORITHM
 */

const p = (...args) => console.log(...args);

function threeSum(nums) {
    let triplets = [];
    nums = nums.slice().sort((a, b) => a - b);

    for (let i = 0; i < nums.length -2; i++) {
        let num = nums[i];

        let leftIndex = i + 1; 
        let rightIndex = nums.length - 1;

        while (leftIndex < rightIndex) {
            let sum = num + nums[leftIndex] + nums[rightIndex];
            if (sum < 0) {
                leftIndex += 1
            } else if (sum > 0) {
                rightIndex -= 1;
            } else {
                triplets.push([num, nums[leftIndex],  nums[rightIndex]]);
                while (nums[leftIndex] === nums[leftIndex + 1]) {
                    leftIndex += 1
                }
                leftIndex += 1
            }
        }

        // advance to num to next unqie value
         while (nums[i] === nums[i +1]) {
            i += 1;
        }
    }

    return triplets;
}

/*
Problem
find all sets of three unique numbers that sum to 0

I: {number[]} nums
O: {number[][]}
R: 
- order does not matter
- each value can appear in output as many times as it occurs in input (or not at all)

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

-1, 0, 1, 2, -1, -4

-4, -1, -1, 0, 1, 2
 ^
     l            r // 3sum: -3;  need a larger number, do not move r pointer
         l        r // 3sum: -3
            l     r // 3sum: -2
                l r // 3sum: -1

B
[0,1,1]
Output: []

C
Input: nums = [0,0,0]
Output: [[0,0,0]]

D:

 -3 -1  0 12 2 3

  0 0 0 0 
  ^ ^ ^
    ^ ^ ^

-2 -1 0 1 1 2
 i.     l r 

-20 -1 0 1 10 10 20
 i.    l         r 
 i.         l  r 

-2, 0, 0, 2, 2
 i  l        r
 i     l  r
DATA

ALGO

 - need postives and negatives to sum to 0
 - or just 0

 mental model
  advancing right pointer always reduces 3sum
  advancing left pointer increase 3 sum, until 0 is reached

  move to unique i avoids duplicates
  can there be more than one 3sum for a given i: yes

FUNC
  init 3sums: []
  loop: iterate to positive or third last element
    IF prev value exists AND equal curr value
        continue
    END
    set L and R ponters and get values
    loop: while L < R and i <= 0 
        calculate 3sum
        if 3sum equals 0 && isNotInOutput
            add set to outut
            advance left
            advance right
        if 3sum is less than 0
            advance left // left++
        if 3sum is greater than 0
            advance right // right--
    end loop
  end loop

  return 3sums

--- repeitation  
I: 
 - nums, []nums
 - target, num
O:
 - [][]nums, triplets that sum to target

Rules
 - values in each triplet are unique
 - no repeated triplets

A: 
 sort the array
 init output []
 LOOP:: pointer from index 0 to length - 3
    // if pointer is same as prior, continue

    set left; pointer +1
    set rigth length-1
    LOOP: while left < right
        INIT sum 
        If sum === target
            push triplet to outout
            break
        ELSE IF sum < target
            advance left
        ELSE
            advance right
        ENDIF
            
        

    END LOOP
    return output
END LOOP  


0 0 0 0 
^ l.  r
^   l r
 */

// function threeSum(nums) {
//     let output = []
//     nums = nums.slice().sort((a,b) => a -b);
//     console.log('nums', nums);
//     for (let i = 0; i < nums.length - 2; i++) {
//         // pickup point. this is not right
//         if (i > 0 && nums[i - 1] === nums[i]) {
//             continue;
//         }
//         console.log('num', nums[i]);

//         let leftIdx = i + 1;
//         let rightIdx = nums.length - 1;


//         while (leftIdx < rightIdx) {
//             // let leftVal = nums[leftIdx];
//             // let rightVal = nums[rightIdx];
//             let sum = nums[i] + nums[leftIdx] + nums[rightIdx]
//             if (sum === 0) {
//                 output.push([nums[i], nums[leftIdx], nums[rightIdx]]);
//                 leftIdx += 1;
//                 while (nums[leftIdx] === nums[leftIdx - 1]) {
//                     leftIdx += 1;
//                 }
//             } else if (sum < 0) {
//                 leftIdx += 1;
//             } else {
//                 rightIdx -= 1;
//             }
//         }
//     }

//     return output;
// }


// solution
// var threeSum = function(nums) {
//     nums.sort((a,b) => a - b);
//     let output = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         if ( i > 0 && nums[i-1] === nums[i]) {
//             continue
//         }
//         let leftIdx = i +1;
//         let rightIdx = nums.length -1;
//         while (leftIdx < rightIdx && nums[i] <= 0) {
//             let sum = nums[leftIdx] + nums[rightIdx] + nums[i];
//             if (sum < 0) {               
//                 leftIdx++;
//             } else if (sum > 0 ) {
//                 rightIdx--;
//             } else {
//                 output.push([nums[i], nums[leftIdx], nums[rightIdx]]);
//                 leftIdx++;
//                 while (nums[leftIdx-1] === nums[leftIdx]) {
//                     leftIdx++;
//                 }
//             }
//         }
//     }

//     return output;
// };