/*
PROBLEM
https://edabit.com/challenge/TZR9EM6xcJrer4Naq
25 minutes
I: string, sentance
O: string, sorted sentance
Rules
- each word has a digit (only 1-9)
- sort words per digit
- remove digit from word
Questions;
- digits unique?
- max 9 words?


EXAMPLES
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

rearrange(" ") ➞ ""

DATA STRUCTURES
String
  []string, words
   number, word order

String

appraoch
 split to words // 
 map to [digit, word]
 sort
 join words to create output

ALGO:

  init words: // split(' ')



*/

function rearrange(sentance) {
  if (sentance.match(/\S/g) === null) return ''

  let words = sentance.split(' ');

  words = words.map(word => {
    let num = word.match(/\d/)[0];
    let cleanWord = word.replace(/[0-9]/, '');
    return [num, cleanWord]
  });
  
  words.sort((a, b) => a[0] - b[0]);
  return words.map(word => word[1]).join(' ')

}

console.log(rearrange("is2 Thi1s T4est 3a")) //➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"))// ➞ "For the good of the people"

console.log(rearrange(" ")) //➞ ""