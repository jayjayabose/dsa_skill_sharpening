/*
PROBLEM:
https://edabit.com/collection/QcMwhyqrjLzqupHj4
55 minutes

I: []int, set of nums
 - not sorted
I: int, target
O: []int, pairs of nums that sum to target
Rules
 - order each pair: small, large
 - order pairs ascending by [0] <--
 - use num only once in a pair
 - return [] if no pair sum to target
Questions
 - can nums be used in more than one pair?

 ]

EXAMPLES:
allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7

allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

---
 {
  x2x
  4
 }

 output: [2, 5] , [3, 4]

 target: 7
[2, 4, 5, 3]
          ^

DATA STRUCTURES
[]int
 int
 [][]ints

ALGO
init output: []
init seenNumbers: {}

LOOP: all nums in nun in nums
 init: complement: target - num

 # complement is in seen AND count > 0
   decrement count
   init: newSet // IN RDER
   # add to set in order
    if output is empty OR newSet[0] > [0] of last set in output
      push set
    else
      init: insertIndex -
      # find idx of first largest, splice inot array at that indes
        LOOP: sets in output, from end to beginning
          if set[0] > newSet[]
            insertIndex = i
          else 
            break

        splice at i
 # else
   add to seen

return output


*/

const p = (...args) => console.log(...args);

function allPairs(nums, target) {
  const output = [];
  const seenNums = {};

  for (const num of nums) {
    let compliment = target - num;
    if (compliment in seenNums && seenNums[compliment] > 0) {
      seenNums[compliment] -= 1;

      // create new set in correct order
      let newSet = num < compliment ? [num, compliment] : [compliment, num];

      // push to end if first or largest
      if (output.length === 0 || output[output.length - 1][0] < newSet[0]) {
        output.push(newSet);
      } else { 
        // find index to insert, index next largest set
        let insertIndex;
        for (let i = output.length - 1; i <= 0; i --) {
          let outputSet = output[i];
          if (newSet[0] > outputSet[0]) {
            insertIndex = i;
          } else {
            break;
          }
        }
        output.splice(insertIndex, 0, newSet);
      }
    } else {
      if (!(seenNums[num] in seenNums)) {
        seenNums[num] = 1;
      } else {
        seenNums[num] += 1;
      }
    }
    
  }
  return output;
}

p(allPairs([2, 4, 5, 3], 7)) // ➞ [[2, 5], [3, 4]]

p(allPairs([5, 3, 9, 2, 1], 3)) //➞ [[1, 2]]

p(allPairs([4, 5, 1, 3, 6, 8], 9)) //➞ [[1, 8], [3, 6], [4, 5]]