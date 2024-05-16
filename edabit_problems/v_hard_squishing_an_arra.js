/*
PROBLEM
60 minutes - and the solution is kinda gross
I: []int, numbers
I: string, left or right
O: 2d array, [origional array, squished arrays]
Rules
-  left is to successively sum the first two elements of an array (shortening the array in the process).
 - he right is to successively sum the last two elements of an array.
- Include the original array as the first element in either squish.
- Return an empty array if the input is an empty array.

EXAMPLES
squish([1, 2, 3, 4, 5], "left")
➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

squish([1, 2, 3, 4, 5], "right")
➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

squish([1, 0, 2, -3], "left")
➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

squish([1, 0, 2, -3], "right")
➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]

'left'
1, 2, 3, 4, 5
   ^
3     3  4  5
6        4  5
10          5
15

'right'
1, 2, 3, 4, 5
1, 2, 3,    9
1, 2,      12
1,         14
           15

DATA STRUCTURES
[]int
[][]int

APPROACH:

1, 2
0  1  2
 
[1,2] []
 [3]
[3]
output = []
//if 2 or more elements, squish
LOOP: i = 2; i <= numbers.length; i=+
  leftPortion // slice 0, i
  sumLeftPortion // reduce 
  rightPortion // slice (i)
  newArr = [sumLeftPortion].concat(rightPortion)
  output.push(newArr)

return output.unshift(numbers)
*/

const p = (...args) => console.log(...args)

function squish(numbers, direction = 'left') {

  const output = [];

  if (direction === 'right') {
    numbers = numbers.slice(0).reverse()
  }
    

  for (let i = 2; i <= numbers.length; i++) {
    let leftNumbers = numbers.slice(0,i);
    let rightNumbers = numbers.slice(i);
    let leftSum = leftNumbers.reduce((total, num) => total + num, 0);

    if (direction === 'right') {
      rightNumbers.reverse();
      output.push(rightNumbers.concat(leftSum))
    } else {
      output.push([leftSum].concat(rightNumbers))
    }
    // console.log(leftNumbers, leftSum, rightNumbers, '/', output)
  }

  if (direction === 'right') {
    numbers.reverse();
  }
  output.unshift(numbers);
  
  return output;
}

p(squish([1], "left")) //[] [1]]
p(squish([1, 2], "left")) // [ [1, 2], [3]]
// squish([1, 2, 3], "left") // [ [1, 2, 3], [3, 3], [6]]
// p(squish([1, 2, 3, 4], "left")) // [ [1, 2, 3, 4], [3, 3, 4], [6, 4], [10]]

p(squish([1, 2, 3, 4, 5], "left"))
// ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

p(squish([1, 2, 3, 4, 5], "right"))
// ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

p(squish([1, 0, 2, -3], "left"))
// ➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

p(squish([1, 0, 2, -3], "right"))
// ➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]