/*
PROBLEM
https://edabit.com/challenge/b9FBAhxaijR9fzxgo
45: minutes
I: string
O: []int, distance of each char from vowel
Rules
 - input has at least one vowel
 - all lowercase
 - Vowels are: a, e, i, o, u.
 - if char is a vowel distance is zero



EXAMPLES
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]

---
vowelIndexes [1]

b a b b b
      ^
  *
1 0 1 2 3 

a b c d a b c d
^ 1 2 1 ^ 1 2 3

s h o p p e r
2 1 ^ 1 1 ^ 1

DATA STRUCTURES
string || []string,  vowels

string, input
 []strings // chars

 []int

APPROACH
 output: []
 vowels 'aeiou'
 
 iterate array of chars with i
  if char is vowel, 
    push 0 to output,
  

  // check both sides for vowel
    let leftVowelIdx = -Infinity
    for l = i-1, l > 0; l--
      if chars[i] is vowel, 
        leftVowelIdx = l
        break

      rightVowelIdx = Infinity
      for r = i + 1, r < chars.lenth; r==
        if chars[r] is vowel, 
          rightVowelIdx = r
          break

    leftDist = currI - leftVowelIdx
    rightDist - rightVowelIdx - currI
    assin min(leftDist, rightDist)


*/

const p = (...args) => console.log(...args);

// radiate out solution O(n^2)
// function distanceToNearestVowel(input) {
//   const output = [];
//   const vowels = 'aeiou';

//   for (let i = 0; i < input.length; i++) {
//     let char = input[i];
    
//     if (vowels.includes(char)) {
//       output.push(0);
//     } else {

//       // look left
//       let leftVowelIdx = -Infinity;
//       for (let l = i - 1; l >= 0; l--) {
//         let leftChar = input[l];
//         if (vowels.includes(leftChar)) {
//           leftVowelIdx = l;
//           break;
//         }
//       }
//       let leftDistanceToVowel = i - leftVowelIdx

//       // look right
//       let rightVowelIdx = Infinity;
//       for (let r = i + 1; r < input.length; r++) {
//         let rightChar = input[r];
//         if (vowels.includes(rightChar)) {
//           rightVowelIdx = r;
//           break;
//         }
//       }

//       let rightDistanceToVowel = rightVowelIdx - i;
//       let minDistanceToVowel = Math.min(leftDistanceToVowel, rightDistanceToVowel);
//       output.push(minDistanceToVowel);
//     }
//   }
//   return output;
// }


/*
I: string
O: []int, distance of each char from vowel
Rules
 - input has at least one vowel
 - all lowercase
 - Vowels are: a, e, i, o, u.
 - if char is a vowel distance is zero


 EXAMPLES

prev: null | i
next: null | i | Infinity



1 )0
b a b b b
0 1 2 3 4 
  ^

prev: null
next: INf

LOOP each char with i
  IF char is vowel
    assign 0
    assign prev: i
    assign next
  
  ELSE: char is NOT vowel
    # calcualte distance
      IF prev is Null
        next - i
      ELSE
        min(i - prev, next - i)

*/

function distanceToNearestVowel(input) {
  const vowels = 'aeiou';

  let output = new Array(input.length);
  let prevVowel = null
  let nextVowel;
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (vowels.includes(char)) {
      nextVowel = i;
      break
    }
  }

  // for (let i = 0; i < input.length; i++) {
    // let char = input[i];
  [...input].forEach((char, i) => {

  
    if (vowels.includes(char)) {
      output[i] = 0;
      prevVowel = i;
      nextVowel = Infinity;
      for (let j = i + 1; j < input.length; j ++) {
        if (vowels.includes(input[j])) {
          nextVowel = j;
        }
      }
    } else {
      if (prevVowel === null) {
        output[i] = nextVowel - i;
      } else {
        output[i] = Math.min(i - prevVowel, nextVowel - i);
      }
    }
  });

  return output
}


p(distanceToNearestVowel("aaaaa"))// ➞ [0, 0, 0, 0, 0]

p(distanceToNearestVowel("babbb")) // ➞ [1, 0, 1, 2, 3]

p(distanceToNearestVowel("abcdabcd")) // ➞ [0, 1, 2, 1, 0, 1, 2, 3]

p(distanceToNearestVowel("shopper")) //➞ [2, 1, 0, 1, 1, 0, 1]