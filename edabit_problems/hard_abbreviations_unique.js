

/*
https://edabit.com/challenge/H8JABWQfYFN4ZSAxE

PROBLEM:
determine each abbreviation has one and only one matching word

I: [] abbreviations
 - all strings, no sparse arrasy, any chars

I: [] words

O: bool, true if  each abbreviation has one and only one matching word

Rules
- if word count < abbrev count, else false
- case insenstive
- an abbreviation matches letters [0,n] in string
- each abbrev should match one and only one word, else false

DATA STRUCTURES 
[]string, 
 
[]string, words

EXAMPLES
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false
// ba is ambigous

uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true


// no matches
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false

--
"ho", "h", "ha"
"house", "hope", "happy"

APPROACH
1. nested loop: O(n^2)
  iterate through abbrev
    init: matchCount: 0
    iterate through words
      if match
        increment matchcount
        if matchCount == 2, return false
      
    
    if match == 0, return false

  return true

ALGO:



*/

const p = (...args) => console.log(...args);

function uniqueAbbrev(abbreviations, words) {
  for (const abbrev of abbreviations) {
    let matches = 0;
    for (const word of words) {
      if (abbrev === word.slice(0, abbrev.length)) {
        matches += 1;
        if (matches > 1) return false;
      }
    }
    if (matches === 0) return false;
  }
  return true;
}

p(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])) // ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

p(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])) // ➞ true

p(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"])) // ➞ false

p(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"])) // ➞ true