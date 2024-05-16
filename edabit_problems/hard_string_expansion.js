/*
PROBLEM:
https://edabit.com/challenge/4NKNkPZtN39cqCQMk
I: string
O: string, expanded
Rules
- Numeric values represent the occurrence of each letter preceding that numeric value.
- Repeat each non-number char N times until a new number is reached
- if consecutive numeric characters, ignore them all except last one.
- if no numbers, string is unchange
- '' return ''

questions
 - alwoys a number
 - 1 - 9, what about 0?

EXAMPLES
stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
stringExpansion("3Mat")➞ "MMMaaattt"      // correct
stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"

stringExpansion("airforce") ➞ "airforce"
stringExpansion("") ➞ ""

---

number: 1
output: MMMuuubb

3M 123u 42b 12a
         ^

3M 2u 5b 2a 1s 1h 2i 1r

airforce


DATA STRUCTURES 
string, input
  number

 string, output

appraoch
  multiplier: 1
  output ''

 step through chars
  # not number
    multiply and append to output
  # number
    update multiplyer

  return output

  match(/[0-9]/)
*/
const p = (...args) => console.log(...args);

function stringExpansion(input) {
  let multiplier = 1;
  let output = ''

  for (char of input) {
    if (/[0-9]/.test(char)) {
      multiplier = Number(char);
    } else {
      output += char.repeat(multiplier);
    }
  }


  return output;
}


p(stringExpansion("3M2u5b2a1s1h2i1r") === "MMMuubbbbbaashiir")
p(stringExpansion("3Mat") === "MMMaaattt")
p(stringExpansion("3M123u42b12a") === "MMMuuubbaa")
p(stringExpansion("airforce") === "airforce")
p(stringExpansion("0airforce") === "")
p(stringExpansion("air0force") === "air")
p(stringExpansion("") === "")
