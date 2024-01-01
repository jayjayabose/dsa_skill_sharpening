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



var strStr = function(haystack, needle) {
  for (let h = 0; h < haystack.length - needle.length + 1; h++) {
      if (haystack[h] === needle[0]) {
          for (let n = 0; n < needle.length; n ++) {
              if (haystack[h + n] !== needle[n]) {
                  break
              }
              if (n === needle.length - 1) {
                  return h;
              }
          }
      }
  }
  return -1;
};