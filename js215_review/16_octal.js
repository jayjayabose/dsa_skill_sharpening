/*

I: octal, string representing number in octal format
O: int
Rules


  233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1

= 128   + 24    + 3
= 155                          // decimal

Approach

reverse
conver to number
map
reduce

*/

function octalToDecimal(octal) {
  octal = octal.split('')
    .reverse()
    .map(char => Number(char))
    .map((digit, i) => digit * (8 ** i))
    .reduce((total, curr) => total + curr);

  console.log(octal)

}

octalToDecimal('2047');