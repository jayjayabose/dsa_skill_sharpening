/*
PROBLEM;

I: []integers, nums -- non descending order
O: int, count of unqiqu element

RULES
modify the array in-place 
start with a sequence of unique elements 
maintain order
return the count of these unique elements.

EXAMPLES
[3, 3, 5, 7, 7, 8], 4)
 3  5  7  8  x  x // 4

 3, 5, 7, 8, 7, 7
          a
                r

[1, 1, 2, 2, 2, 3, 4, 4, 5], 5)
 1  2  3  4  5  x  x  x  x
[0], 1)
[-5, -3, -3, -1, 0, 0, 0, 1], 5)
[6, 6, 6, 6, 6, 6, 6], 1)

DATA STRUCTURES


3, 5, 7, 8, 7, 3]
         a
               r
ALGO

 a, 0
 r, 1

 LOOP r to end
  IF r is not same as a
    advance a
    swap 
  
  advance r

return a + 1

*/

function reduceToUnique(numbers) {
  if (numbers.length === 0) return 0

  let anchor = 0;
  for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[anchor] !== numbers[i]) {
      anchor += 1;
      numbers[anchor] = numbers[i]
    }
  }
  numbers.length = anchor + 1;
  return numbers.length;
}

console.log(reduceToUnique([]));

// You should name the function `reduceToUnique` for the tests to work correctly.

function testReduceToUnique(array, expectedLength) {
  const originalReference = array;
  const resultLength = reduceToUnique(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);
  console.log(isSameObject , isLengthCorrect , isModifiedCorrectly)
  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

// console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
// console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
// console.log(testReduceToUnique([0], 1));
// console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
// console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.