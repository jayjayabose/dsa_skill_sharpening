/*
PROBLEM
https://launchschool.com/exercises/5ec1e512?track=javascript
Good: 25 minutes. NO stumbles.
compute avg of every subarray of target length

I: []numbers, numbers
I: number, target
O: [] numbers, avg subarrasy
Rules
 - output avg value of subarray of length target
 - if target > len => []

EXAMPLES
output [2, 3, 4, 5]
sum: 7
[1, 2, 3, 4, 5, 6], target =3)
             r
        l

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]

DATA STRUCTURES

[]numbers, output
sum, number

[]numbers, input
 numbers

 Brute force; O(n * target)

ALGO
guard: target > len

init: output []
init: sum: 0

// calculate first avg
init; right = target
LOOP: i = 0, < right
  add [i] to sum

// push avg to output

// right is equal to target
init left: 0
LOOP: while right < len
  add [right] to sum
  subtract [left] fro sum
  calc average and push to output
  right++
  left++

return output


*/

// function findAverages(numbers, target) {
//   if (target > numbers.length) return [];
  
//   const output = []
//   let sum = 0;
//   let right = target;
//   for (let i = 0; i < right; i++) {
//     sum += numbers[i];
//   }
//   output.push(sum / target);

//   let left = 0;
//   while (right < numbers.length) {
//     sum += numbers[right];
//     sum -= numbers[left];
//     output.push(sum / target);
//     right++;
//     left++;
//   }

//   return output;
// }


/*

A;
output []
sum: 0
left: 0

lOOP: right = 0, to len - 1
  // add [right] to sum
  IF right >= target - 1
    push avg(sum) to output
    sum -= [left]
    left ++

reurn otuput
*/

function findAverages(numbers, target) {
  const output = [];
  let sum = 0;
  let left = 0;

  for (let right = 0; right < numbers.length; right++) {
    sum += numbers[right];
    if (right >= target - 1) {
      output.push(sum / target);
      sum -= numbers[left];
      left++
    }
  }

  return output;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]