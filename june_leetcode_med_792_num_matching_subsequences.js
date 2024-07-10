/*
problem: how many words are subsequence of str
 * @param {string} sts
 * @param {string[]} words
 * @return {number}
 rules
  - subsequence is created by deleted 0 or more chars in s

examples:
s = "abcde", words = ["a","bb","acd","ace"] // Output: 3
     ^ ^ ^. 
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".  

s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"] // Output: 2

data structures:
String, str
 []strings -- letters of str

[]String, words
 []String, letters of each workd
    



approach: brute force
LOOP: each word: O(m)
    LOOP: letter in word
        LOOP: letter in str
            IF match, break
        END
        return false
    END LOOP
    incrment count

appraoch: multiple anchors + runner
    init count: 0
    init: anchors [0,0,..] // one for each word

    // runner iterates each char in str
    LOOP: strChar of str
        LOOP: idx in anchors // loop through each anchor an each word
            init anchor: anchors[idx]
            intt: word: words[idx]
            init: wordChar: word[anchor] // get the "next" char we are looking for
            // do match
                //increment anchor
                // IF reached end of word
                    increment result

            // do not match
                // do not increment anchor

    return count
 */


function numMatchingSubseq (str, words) {
  let count = 0;
  const anchors = new Array(words.length).fill(0)

  for (const strChar of str) { // each char in str
      console.log('strChar', strChar)
      for (let idx = 0; idx < anchors.length; idx++) { // each word
          const anchor = anchors[idx]
          const word = words[idx]
          if (anchor >= word.length) {
            continue
          }
          const wordChar = word[anchor]
          console.log(word, anchors)
          if (strChar === wordChar) {
            anchors[idx] += 1
            if (anchors[idx] >= word.length) {
              console.log('increment count', word)
              count += 1
            }
          }
      }
  }
  
  return count;
};

const s = "abcde";
const words = ["a","bb","acd","ace"];  

// const s = "dsahjpjauf";
// const words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"];
console.log(numMatchingSubseq(s, words));