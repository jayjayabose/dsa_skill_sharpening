/*
https://leetcode.com/problems/is-subsequence/
good: 20 minutes. no issues

PROBLEM:
find letter of s in string of t, in order
I: s 
- can be empty
I: t
- can be empty
O: boolean, true if s is subsquence of t
Rules:
- if s is empty: return false
- if t is empty: return false
- if s and t are both empty: false
- subsequence formed by deleting 0 or more chars, keeping order



EXAMPLES
"ahbgdc"
 ^ ^. ^
"abc", 
 
Output: true

"ahbgdc"
"axc"
Output: false

"a h. b g d c"
            ^
 a b c
       ^

APPROACH:
 start currIdx and searchIdx at 0
 LOOP: tIDX to last idx
    if chars match
        advance searhcIDx
        if searchIDX >= length
            return true

 return false 
    


*/

function isSubsequence(s, t) {
  if (s.length === 0) {
      return true;
  }

  let searchIdx = 0
  for (let i = 0; i < t.length; i++) {
      if (s[searchIdx] == t[i]) {
          searchIdx += 1
          if (searchIdx >= s.length) {
              return true;
          }
      }
  }
  return false;
}

