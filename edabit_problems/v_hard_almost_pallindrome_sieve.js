/*
https://edabit.com/challenge/xPnZKhYcn5TwK3HFT
PROBLEM:
29 minutes
 
I: []int
O: []int, subset that qualify
Rules
- no more than one digit wiht odd frequency
  - pallindrome reads same forward and backwards
  - almost-pallindrom: digts can be rearrange to form a palindrome

- order?


EXAMPLES
palindromeSieve([443, 12, 639, 121, 3232]) ➞ [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

palindromeSieve([5, 55, 6655, 8787]) ➞ [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

palindromeSieve([897, 89, 23, 54, 6197, 53342]) ➞ []

DATA STRUCTURES
[]int
  int
    []string // each digit

{
  digit: count: 
}


appraoch
palindromeSieve([443, 12, 639, 121, 3232]) ➞ [443, 121, 3232]

{
  '3', 2
  '2', 2
}

3232

func: isPalindrom(num)
 init: counts {}
 convert to string
 loop chars
   add to counts, cinrement counts as appropriate

  get entries. fiter for counts that are odd
  return result < 2

^

 */

const p = (...args) => console.log(...args);

function palindromeSieve(numbers) {
  return numbers.filter(isPalindrome);
}

function isPalindrome(num) {
  const counts = {};
  num = String(num);
  for (digit of num) {
    if (digit in counts) {
      counts[digit] += 1;
    } else {
      counts[digit] = 1;
    }
  }
  let entries = Object.entries(counts)
    .filter(entry => {
      if (entry[1] % 2 === 1) {
        return entry;
      } 
    })
  return entries.length < 2
}

// p(isPalindrome(11122222))


p(palindromeSieve([443, 12, 639, 121, 3232])) //➞ [443, 121, 3232]
// Since 443 => 434; 121 is a palindrome; 3232 => 2332 or 3223

p(palindromeSieve([5, 55, 6655, 8787])) //➞ [5, 55, 6655, 8787]
// Single-digit numbers are automatically palindromes.

p(palindromeSieve([897, 89, 23, 54, 6197, 53342])) // ➞ []
