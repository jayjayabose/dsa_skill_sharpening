/*
Implement a document scanning function wordCountEngine, which
  receives a string document and 
  returns a list of all unique words in it 
    and their number of occurrences, sorted by the number of occurrences 
      in a descending order. 
      
    If two or more words have the same count, they should be sorted according to their order in the original sentence. 
    
   Assume that all letters are in english alphabet. 
   You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

problem:
i: string, document
o: [][word:string, 'count:string']
rules
 - all chars english alpha
 - strip punctuation
 - use whitespace to separate words
 - not case sensitive

 - output
   [unique words, number of occurances]
   sorted desc by number of occurences
    the by original order

   

examples
input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]




bucketedWords =[ [practice], null, null]

output: 
["practice", "3"],  ["perfect", "2"], ["makes", "1"],

data structuers:
String
Stirnig -- cleaning the string (N)
[] String, words  
{word: count occurnces}

wordOrder: [] unique words in they appearance
wordOccurances: []['word', 'count']

appproach:
1. clean string
2. array of workd


algo:
 init cleanstring
 init wordList - array of words

 wordList: 'practice makes perfect youll only get perfect by practice just practice' // cleaned stri

 // wordList: 'practice makes perfect youll only get perfect by practice just practice'


init wordMap
["practice", "3"],  
["perfect", "2"], 
["makes", "1"],  
["youll", "1"], <-
["only", "1"], 
["get", "1"], 
["by", "1"], 
["just", "1"] ] // Map <word:string>, <count:number>  
  
//new Array(largestCount + 1) with null values
init bucketedWords =[ [], []], [], []]

place words in bucketedWords
  
init: counterList 
 [null, null, null, null]
  0.     1.   2.    3
                    [practice]
                    
               perfect
               
          makes,
          youll
          only
          get
          by
          just
 
 
 
 init wordOrder []strings
  - iterate through words
   - if word is not in wordOrder, push it   
 
 func: generateOutput(wordsCount, wordOrder)
  
*/

let my_document = "Practice makes perfect. you'll only get Perfect by practice.   just practice!"

function wordCountEngine(document) {
  const output = [];
  const cleanedDocument = document.replace(/[^a-z ]/gi, '').toLowerCase();
  const wordList = cleanedDocument.split(/ +/);

  const wordMap = new Map();
  for (const word of wordList) {
    wordMap.set(word, ((wordMap.get(word)) || 0) + 1);
  }

  
  const maxOccurances = Math.max(...wordMap.values());
  
  const wordBuckets = Array.from({length: maxOccurances + 1}, () => []);
  for (const [word, count] of wordMap) {
    wordBuckets[count].push([word, String(count)]);
  }
  for (let i = wordBuckets.length - 1; i >= 0; i--) {
    const bucket = wordBuckets[i];
    for (const wordEntry of bucket) {
      output.push(wordEntry);
      }
      }
  return output;
}

console.log(wordCountEngine(my_document))