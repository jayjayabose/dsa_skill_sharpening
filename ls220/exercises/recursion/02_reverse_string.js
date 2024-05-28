/*
Implement a recursive function that reverses a given string. 
The function should take a string as input and return its reverse. 
For example, if the input is "hello", the function should return "olleh". Solve the problem using recursion.

i: string, str
o: string

e: 
  hello
  ello h
  llo e
  lo l
  o l
  o
- a [string] is a [pallindrom] if [its first and last letters are equal] and the rest of the [string] is a [pallindome ]

s string is reversed if its first letter is last, and the rest of the string is reversed

algorithm:
  // base
  len is 1, return str

  revers(string - first element) + first element 


*/

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.