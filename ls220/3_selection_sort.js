/*

Algo

i: 1
minVal = 2
minIdx = 2

1, 2, 8, 3
0  1  2  3


idx = 0

LOOP: i = 0, to i < length - 1
  init: minVal = Infinity
  init: minIdx = null

  Loop: j = i; j < len - 1
    init currVal
    if currVal < minVal
      reassing minval 
      reassing minIdx

  swap i, minIdx values
*/

// keep moving the lowest number to the frong
function selectionSort(numbers) {
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    let minIdx = i;

    for (let j = i; j < len; j++) {
      let currVal = numbers[j];
      if ( currVal < numbers[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [numbers[i], numbers[minIdx]] = [numbers[minIdx], numbers[i]];
    }
  }
  console.log(numbers);
  return numbers
}

selectionSort([3,8,2,1])