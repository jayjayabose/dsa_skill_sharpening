"""
Problem: reverse the order of chars in place

I: string, 
O: string, same string
Rules
  reverse only all the consonants
  consonants can be upper or lower case
    any char that is not vowel
  vowels are lowercase
  '' => ''


EXAMPLES:
deectole
   lr

DATA STRUCTURES
vowels
 []string
 string

string, input
 []string , letters


AGLO
given; input
init vowels: set a e i o u
init left null
init right null

assign left first consonat from left 

if left is null, return input // no consonant to swap

init right first consontnat from right

while left < right
    swap
    advance left to next consontant
    advance right to next consontant

return input
"""

def reverseConsonants(input):
    input = [char for char in input]
    vowels = set('aeiou')
    left, right = 0, len(input) - 1
    
    while left < right:
        while (input[left] in vowels and left < len(input)):
            left += 1

        while (input[right] in vowels and right >= 0):
            right -=1

        [input[left], input[right]] = [input[right], input[left]]
        left += 1
        right -= 1
    
    return ''.join(input)

print(reverseConsonants("") == "")
print(reverseConsonants("s") == "s")
print(reverseConsonants("hello") == "lelho")
print(reverseConsonants("leetcode") == "deectole");
print(reverseConsonants("example") == "elapmxe");
print(reverseConsonants("Consonants") == "sotnonasnC");

