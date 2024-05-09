/*
https://leetcode.com/problems/minimum-size-subarray-sum/
Good: 40 minutes. i had to write code in larger than bite size but it was not a probm
PROBLEM
I: nums, array of positive integers
- not empty
I: target, int
 - 1 or greater
O:int, length of shorted subarrary with sum >= target || 0
Rules
- subarray is contiguous elements
- subarray sum >= target to qualify

notes
- 

EXAMPLES:
target = 7, 
nums = [2,3,1,2,4,3]
                ^
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

target = 4, 
nums = [1,4,4]
Output: 1

target = 11, 
nums = [1,1,1,1,1,1,1,1]
Output: 0

1,1,1,1,1,1,1,1
              ^
*

--
target = 7, 
minLenght: 4
sum: 8
[2,3,1,2,4,3]
 ^
       ^

target = 5, 
minLenght: Inf
sum: 8
[10,3,1,2,4,3]
 ^ 
 ^
appraoch: brute force. create all sub arrays: O(n)

Algo:

runner: 0
anchor: 0
sum: nums[0]
min_lengh: Infity

while runner  length:
    while sum < target and runner < length -1
        advance runner
        incrmenent sum
        if sum >= target
            if length < min
                reassign min
    
    while sum >= target and anchor <= runner// >=
        decrement sum
        advance anchor
            
        if sum >= target
            if length < min
                reassign min

return min length or 0
    
*/
const p = (...args) => console.log(...args);

function minSubArrayLen(target, nums) {
    let runner = 0;
    let anchor = 0;
    let sum = nums[0];
    let minLength = Infinity;

    if (sum >= target) {
        return 1;
    }

    for (let runner = 0; runner < nums.length; runner++) {
        sum += nums[runner];
        if (sum >= target) {
            let length = runner - anchor + 1;
            minLength = length < minLength ? length : minLength;
        }

        while (sum >= target && anchor <= runner) {
            sum -= nums[anchor];
            anchor += 1;
            if (sum >= target) {
                let length = runner - anchor + 1;
                minLength = length < minLength ? length : minLength;
            }        
        }
    }

    return minLength === Infinity ? 0 : minLength;
}


/*
PROBLEM
find shortest subarray that sums to target (or greater) - return length; or zero if no solution

I: 
  array holding numbers
   - not empty
   - numbers are positive (not negatove or zero)
  target
   - 1 or greater
O: number, length of of qualifying subarray OR 0 if no solution
Rules:
 - subdquence is consecutive numbers


EXAMPLES

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2

2, 3, 1 ,2, 4, 3
            ^. ^  
a        r.      // 8
   a        r    // 

Input: target = 4, nums = [1,4,4]
Output: 1
1, 4, 4
^

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

1, 1, 1, 1, 1, 1, 1, 1
^. ^. ^  ^ ^ . ^. ^  ^

5
1 2 4 1 1 5



mental model
  loop runner over all values
    get sum of values from anchor to runner
    if sum >= target
        // determine if output shoudl be updated
        // move anchor until sum < target OR anchor reaches 

    endif

   return output
  send runner out until targe sum is reached OR end is reached
        pull the anchor in until sum is < target and anchor pos < runner pos

15
1 4 10 5 4 5
       a
           r

output: 3
sum:  15

FUNC
 INIT: output: 0
 INIT: anchor: 0
 INIT: sum

 LOOP: i; 0 to length -1
    assign sum: sum + value at i
    IF sum >= target
        init length: ouptut = i - anchor + 1
        IF output is 0 OR length < output
            assign output = length
            
            // advance anchor
            LOOP do
                sum: sum - value at ahncor
                anchor++
            ENDLOOP while sum < target AND anchor index <= runner index
        ENDIF
    END
 ENDLOOP

 return output


REPEAT:

I: array of numbers, target num
O: num, min length of subarray with sum >= target || 0
Rules
subarray is consuective number

ALGO
init sum: 0
init minLength = Infinitiy
init i, j = 0;

LOOP: i to last element
    add val at i to sum
    // update min length ?

    LOOP: while sum > target && j < i
        subtract val at j
        move j
        // update min lenght/
     
    END LOOP

END LOOP

return correct value

 */

// function minSubArrayLen(target, nums) {
//     let sum = 0;
//     let minLength = Infinity;
//     let j = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         if (sum >= target) {
//             let len = i - j + 1;
//             minLength = len < minLength ? len : minLength;
//         }

//         while (sum > target && j < i) {
//             sum -= nums[j];
//             j++;
//             if (sum >= target) {
//                 let len = i - j + 1;
//                 minLength = len < minLength ? len : minLength;
//             }            
//         }
//         // console.log(sum)
//     }

//     return minLength === Infinity ? 0 : minLength;

// }






// better than version below
// function minSubArrayLen(target, nums) {
//   let minSizeSubarray = Infinity;
//   let sum = 0;
//   let left = 0;

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
    
//     while (sum >= target) {
//       let len = right - left + 1;
//       minSizeSubarray = Math.min(minSizeSubarray, len);

//       sum -= nums[left];
//       left++;
//     }
//   }

//   return minSizeSubarray === Infinity ? 0 : minSizeSubarray;
// }


// var minSubArrayLen = function(target, nums) {
//     let output = Infinity;
//     let leftIdx = 0;
//     let sum = 0;

//     for (let rightIdx = 0; rightIdx < nums.length; rightIdx++) {
//         sum += nums[rightIdx];

//         if (sum >= target) {
//             while (sum >= target) {
//                 let length = rightIdx - leftIdx + 1;
//                 output = Math.min(output, length);               
//                 sum -= nums[leftIdx];
//                 leftIdx++;
//             }
//         }
//     }
    
//     return output === Infinity ? 0 : output;
// };