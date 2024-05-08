
/*

https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
PROBLEM
I: haystack, string, string to be searched
I: needle, string, string to be found
O: int, index of first occurance of needed || -1 if not found
Rules
- only lowercase letters, no empty strings
- return idx of first letter if letters in needle occure in order in haystack 

questions
- length of needle < haystack?

EXAMPLES
"sadbutsad"
"sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

"leetcode"
"leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return


"leeto"
      ^
"leetcode"
     ^

approach: 
    iterate chars, with i in haystack 
        if char == first char in needle
            iterate chars in needle with j
                if haystack[i + j] !== needle[j]
                    break
                if j >= lenght - 1 of needle
                      i
    return -1
*/
const p = (...args) => console.log(...args)

var strStr = function(haystack, needle) {
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++){
        // p(haystack[i])
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    break;
                }
                if (j >= needle.length - 1) {
                    return i; 
                }
            }
        }    
    }
    return -1
}


// not elegant. and took me a loong time to complet
// var strStr = function(haystack, needle) {
//     let firstMatchIdx = -1;
//     let needleIdx = 0;
//     let haystackIdx = 0;
//     while (haystackIdx < haystack.length) {
//         let haystackChar = haystack[haystackIdx]
//         let needleChar = needle[needleIdx];
//         // letters match
//         if (haystackChar === needleChar) {

//             // first match
//             if (needleIdx === 0) {
//                 firstMatchIdx = haystackIdx;
//             }

//             // next letter to find
//             needleIdx +=1; 

//             if (needleIdx >= needle.length) {
//                 return firstMatchIdx
//             }
//         // letters do not match
//         } else {
//             //   IF we were building needed (needleIdx > 0)
//             if (needleIdx > 0) {
//                 // reset
//                 needleIdx = 0;
//                 haystackIdx = firstMatchIdx;
//                 firstMatchIdx = -1;
//             }

//         }

//         haystackIdx++;
//     }

//     return -1;
// }




/*
I:
- str
- str
O:
- num

sadbutsad
^
sad


leetcode
   leeto

leatcodeleeto
        leeto   

Mental model
 - iterate over haystack less needle
    when first letter matches
        loop
            check for rest of letters
            break if non-match is found
        return true if last letter is reacehd
 
 return -1
 */


// var strStr = function(haystack, needle) {
//     for (let i = 0; i < haystack.length - needle.length +1; i++) {
//         if (haystack[i] === needle[0]) {
//             for (j = 0; j < needle.length; j++) {
//                 if (haystack[i +j] !== needle[j]) {
//                     break
//                 } else if (j === needle.length -1){
//                     return i;
//                 }
//             }
//         }
//     }
//     return -1
// }

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

PROBLEM
I:
 haystack, string
 needle, string
 - not null, not emnpty, lowercase

O:
 number, index of first occurrence of needled
- first is left most

RULES:
- -1 if not found

EXAMPLES


Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

"sadbutsad"
 ^
"sad"


Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

"leetcode", 
"leeto"


"leetcodeleeto", 
             ^

"leeto"
     ^     


ALGO
INIT:  n -> 0 

LOOP: h: 0 ; < length - needle.length; h++
    IF haystack[h] === needle[n] // first letter match
        // loop through rest of needle
        // break if non-matching letters, 
        // return h if loop completes
   
    ENDIF
END LOOP
return -1

0 1 2 3 4 5 6 7 8 9 0
m i s s i s s i p p i
        ^

i s s i p
^
 */



// var strStr = function(haystack, needle) {
//     for (let h = 0; h < haystack.length - needle.length + 1; h++) {
//         if (haystack[h] === needle[0]) {
//             for (let n = 0; n < needle.length; n ++) {
//                 if (haystack[h + n] !== needle[n]) {
//                     break
//                 }
//                 if (n === needle.length - 1) {
//                     return h;
//                 }
//             }
//         }
//     }
//     return -1;
// };