//https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

*/

/*
PROBLEM:
I: s, string, word one
I: t, string, word two
O; bool, true of word two is anaagram of word one
Rules
- input is all lowercase, letters only
- input is at least one char
- anagram
    letters of word two can be rearranged to spell word one
    each letters used once
        words must be some lenth
    
EXAMPLE
s = "anagram", 
t = "nagaram"
Output: true

s = "rat", 
t = "car"
Output: false

appraoch: use a map for lookup
    return false if lengths are not equal

  init letterCounts
  LOOP: each letter in s
    add entry with value 1
    or incremente entry

  LOOP: each letter in t
    if letter in letterCounts and > 0
        reduce
    else 
        return false

    
  return true



*/

const p = (...args) => console.log(...args)
    function isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let letterCounts = {};
        for (const letter of s) {
            if (letter in letterCounts) {
                letterCounts[letter] += 1
            } else {
                letterCounts[letter] = 1
            }
        }

        for (const letter of t) {
            if (letter in letterCounts && letterCounts[letter] > 0) {
                letterCounts[letter] -= 1
            } else {
                return false;
            }

        }
        return true
    }




// O(nLogN solution)
// function isAnagram(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     let sChars = s.split('').sort();
//     let tChars = t.split('').sort();

//     for (let i = 0; i < sChars.length; i++) {
//         if (sChars[i] !== tChars[i]) {
//             return false;
//         }
//     }

//     return true;

// }

// brute force O(n^2)
// function isAnagram(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     let sLetters = s.split('');
//     let tLetters = t.split('');

//     for (let i = 0; i < sLetters.length; i++) {
//         sChar = sLetters[i];

//         for (let j = 0; j < tLetters.length; j++) {
//             tChar = tLetters[j];

//             if (sChar === tChar) {
//                 tLetters.splice(j, 1);
//                 break
//             } else if (j === tLetters.length - 1){
//                 return false
//             }
//         }
//     }
//     return true
// }



// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     let seen = {}
//     for (const char of s) {
//         if (seen.hasOwnProperty(char)) {
//             seen[char] += 1;
//         } else {
//             seen[char] = 1;
//         }
//     }

//     for (const char of t) {
//         if (seen.hasOwnProperty(char) && seen[char] > 0) {
//             seen[char] -= 1
//         } else {
//             return false;
//         }
//     }

//     return true;
    
// };

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false
//   }
  
//   let seenLetters = {}

//   for (char of s) {
//     if (char in seenLetters) {
//       seenLetters[char] = seenLetters[char] + 1;
//     } else {
//       seenLetters[char] = 1;
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     let char = t[i];
//     if (char in seenLetters && seenLetters[char] >0) {
//       seenLetters[char] = seenLetters[char] - 1
//     } else {
//       console.log('fail', char)
//       return false
//     }

//   }
  
//   return true;
// };