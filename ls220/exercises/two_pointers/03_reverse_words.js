/*
PROBLEM
https://launchschool.com/exercises/cbbd946c
GOOD: 25 minutes.  
Time: O(N)
 N to split
 M * W to reverse words (M avg word len, W avg word len) -- ~ N
 N to join

Space: O(M) - number of words 

return the sentance with letters of each word reversed.

I: sentance, string -- words space delimited
 - not null, single space chars
O:: string
Rules:
- '' => ''
- reverse all the characters in each word 
- do not change case
- preserve spaces
- preserve word order


EXAMPLES
Hello World

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");

DATA STRUCTURES
string, sentance
 []string words
  []string chars

string sentance

ALGO
  init words // spit sentance on ' '
  reassing words; words.map (reverseWords)
  return join on ' '

ALGO

func: reverseWord(word)
I: string, not null
O: string, reversed string
Rules
- reverse letters, preserve case

DS:
string
[]string
A:
 init chars: []string
 start, end : 0 , len - 1
 LOOP start < end
  swap

 join and return
  

*/

function reverseWord(word) {
  const chars = [...word];
  let [start, end] = [0, chars.length - 1];
  while (start < end) {
    [ chars[start] , chars[end] ] = [ chars[end] , chars[start] ]; 
    start += 1;
    end -= 1;
  }
  return chars.join('')
}

// console.log(reverseWord('JavaScript') === 'tpircSavaJ')
// console.log(reverseWord('Launch') === 'hcnuaL')

function reverseWords(sentance) {
  let words = sentance.split(' ');
 words = words.map(reverseWord);
 return words.join(' ');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");

// let myArray = [12, -2, 55, 68, 80];
// [myArray[0], myArray[1]] = [myArray[1], myArray[0]];
// console.log(myArray); // [-2,12,55,68,80]