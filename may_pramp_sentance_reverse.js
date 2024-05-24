/* 
https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4
*/

const sentance = [
  'c', 'a', 't', ' ',
  'a', 'n', 'd', ' ',
  'd', 'o', 'g'
]

const reverseSentance = [
  'g', 'o', 'd', ' ',
  'd', 'n', 'a', ' ',
  't', 'a', 'c'
]

function reverseWordsInSentance(arr) {
  reverseElementsInArray(arr)
  return (reverseWordsInArray(arr))
}

console.log(reverseWordsInSentance(sentance));

function reverseWordsInArray(arr) {
  let start = 0;
  for (let end = 0; end <= arr.length; end++) {
    if (end === arr.length || arr[end] === ' ') {
      console.log('reverse', start, end - 1);
      reverseElementsInArray(arr, start, end - 1);
      start = end + 1;
    }
  }
  return arr;
}

// console.log(reverseWordsInArray(reverseSentance))

function reverseElementsInArray(arr, left = 0, right = null) {
  // let left = 0;
  // let right = arr.length - 1;
  right = right === null ? arr.length - 1 : right
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// console.log(reverseElementsInArray(sentance));