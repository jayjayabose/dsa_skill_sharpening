
/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * OK: 45 mintes to code, after getting guidance on appraoch
 I: @param {string} s
 O @return {number}, chars in longest substring without repeating chars
 RULES
  - if s is empty return 0

 
 EXAMPLES

"abcabcbb"
 ^^^
Output: 3

"bbbbb"
 ^
Output: 1

"pwwkew"
   ^^^ 
Output: 3

max: 3
len: 3

letters {
 a:3
 b:1
 c:2
}

a b c a b c b b
       a. 
          i
approach
 set anchor pointer at 0
 maxLength = -Inf
 length = 1
 letters = {}

 iterate over each i in string
    char = s[i]
    if char is in letters
        while s[a] ! = char
            delete s[a] from letteres    
            length--
            anchor ++
        delete s[a] from letteres    
        length--
        anchor ++
        
        reassing letters[char] = i
      
    else:
         letters[char] = runner
         length ++
         maxLength max of len, maxLength

return maxLength
 */
const p = (...args) => console.log(...args);

var lengthOfLongestSubstring = function(s) {
    let anchor = 0;
    let maxLength = 0;
    let currLength = 0;
    const charsInCurrentSubstring = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char in charsInCurrentSubstring) {
            while (s[anchor] !== char) {
                // delete charsInCurrentSubstring.anchor;
                delete charsInCurrentSubstring[s[anchor]];
                currLength -= 1;
                anchor += 1;
            }
            charsInCurrentSubstring[char] = i
            anchor += 1;
        } else {
            charsInCurrentSubstring[char] = i
            currLength += 1;
            maxLength = Math.max(currLength, maxLength)
        }
    }
    return maxLength;
};