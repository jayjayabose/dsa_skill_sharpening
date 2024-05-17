/*
PROBLEM
https://edabit.com/challenge/nxSeD3tvqQkumGNid
50 minutes: 
+ use of DATA STRUCTURES thinking helped to get to solution
+ caught an error during psuedoccode walk through
- error was i did not pay close attention the rules I identified

I: []strings
O: []string - filtered for qualifiying words
Rules
- include first word
- include words that same (and only same) vowel as first word
  - required vowels, disqualifying vowels
- at least two words, not empty strings
- vowels 'aeou'
- string are lc, may have ws
- consider vowels as present / not present - frequ does not matter


EXAMPLES
sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]
sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]
sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]


DATA STRUCTURES
// vowels, string
firstWordVowels, { letter: bool}

[]string, words
  []string, letters in a word
[]string, qualifying words
 

a
e t
i
o t
u

set: rquiredVowesl (a, o)

"toe", "ocelot", "maniac"
           ^ 

["toe", "ocelot"]


ALGO
copy array 
init: firstWord // slice
init: vowels // loop over 'aeiou' set all false
init: requiredVowels

// update vowels based on firstWord
 LOOP: chars in firstWord
  if char is vowel, true
  add to rquired vowels

//   
// filter words: (a) no disqualifying vowels (b) all required vowels
  // filter callback
  init: requiredVowesRemaining // 
  LOOP: chars in word
    IF char not in vowels, continue
    IF vowels[char] === false // disqualify
      return false
    ELSE
      remove vowel from requiredVowesRemaining

   return requiredVowesRemaining length == 0
  

*/


function sameVowelGroup(words) {
  words = words.slice();
  const firstWord = words.shift()
  const vowels = [... 'aeiou'].reduce((counts, char) => {
    counts[char] = false;
    return counts
  }, {});
  const requiredVowels = new Set();

  for (const char of firstWord) {
    if ('aeiou'.includes(char)) {
      vowels[char] = true;
      requiredVowels.add(char);
    }
  }

  words = words.filter((word) => {
    const requiredVowelsRemaining = new Set([...requiredVowels]);
    for (const char of word) {
      if (!(char in vowels)) continue;
      if (vowels[char] === false) return false;
      requiredVowelsRemaining.delete(char);
    }
    return requiredVowelsRemaining.size === 0;
  });

  // console.log(firstWord, words, requiredVowels, vowels)
  words.splice(0, 0, firstWord);
  return words;
}

const p = (...args) => console.log(...args)
p(sameVowelGroup(["toe", "ocelot", "maniac"])) //➞ ["toe", "ocelot"]
p(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])) // ➞ ["many"]
p(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])) //➞ ["hoops", "bot", "bottom"]