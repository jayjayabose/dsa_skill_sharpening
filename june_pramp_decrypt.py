"""
problem:

i: string, encrypted word 
o: string, decrypted word.
rules
 lowercase latin letters only

 Convert every letter to its ASCII value. 
 Add 1 to the first letter, and 
    then for every letter from the second one to the last one, add the value of the previous letter. 
    Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. 
    Convert the values back to letters.

 to encrypt any letter from index 1 forwward you need
    letter and previous step2 value    
decrypt(word) 

example:
Decrypted message:	
letter    c	r	i	m	e
Step 1:	99	114	105	109	101  // convert to ascii
       +1  +100 + 214 ...  
Step 2:	100	214	319	428	529  // add 1 to first, add previous to the rest
        -26*m
Step 3:	100	110	111	116	113  // reduce value by 26 until in range (97 122)
Step 4:	d	n	o	t	q  // convert to letter 

Encrypted message:	
        d	n	o	t	q
        // convert to ascii
step 1: 100 110 111 116 113 // ascii 
        -1  -100  -110              // subtract prev step 1
step 2: 99    10   1
        +26m                   // get into range

step 3: 99  114  105
        c   r      i   

algo:
prev = 1

"""

def decrypt(word):
  decrypt = ''
  prevNum = 1
  
  for char in word:
    num = ord(char)
    adjustedNum = num - prevNum
    prevNum = num
    while adjustedNum < ord('a'):
      adjustedNum += 26
    
    decrypt += chr(adjustedNum)
    
  return decrypt

if __name__ == "__main__": #note: make runnable

  word = "dnotq"
  assert decrypt(word) == 'crime', 'crime'
  
  word = "flgxswdliefy"
  assert decrypt(word) == 'encyclopedia', 'encyclopedia'
