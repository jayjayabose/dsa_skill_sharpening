// https://launchschool.com/lessons/bfc761bc/assignments/b1e4e00d

/*
PROBLEM:
convert a string representing an octat to a number in base 10
I; String, octal
- empty? digits onlY? // valid only/
O: Number, decimal

EXAMPLES:
  233                         // decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1

d  233    
e  210
                        // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal

DATA STRUCTURES:

String, octal
  [] string
   String, digit
   Number, digit

Number index

Number digit value
Number total value

ALGO:

init: array of digits in Number 
inti: totalDecimalValue

LOOP: i = 0 to len - 1
  exp: len - 1 - i
  digit: element at i
  digitDecimalValue digit * 10 ** exp
  increment 

reutrn





*/
const p = (...args) => console.log(...args);

function octalToDecimal(numberString) {
  let totalDecimalValue = 0;
  let digits = [... numberString].map(Number)
  digits.forEach((digit, i) => {
    let exponent = numberString.length - 1 - i;
    let digitDecimalValue = digit * (8 ** exponent);
    totalDecimalValue += digitDecimalValue;

  }) 
  return totalDecimalValue;
}

p(octalToDecimal('1'));           // 1
p(octalToDecimal('10'));          // 8
p(octalToDecimal('130'));         // 88
p(octalToDecimal('17'));          // 15
p(octalToDecimal('2047'));        // 1063
p(octalToDecimal('011')); 