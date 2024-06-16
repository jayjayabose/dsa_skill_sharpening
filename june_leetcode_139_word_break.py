"""
i: s, string representing a workd
i: wordDict, dict of Strings 
o: bool, true if s 
rules
 true if s by combining one or more dictionary words.
 can reuse words

e:
leet code => true
wordDict = ["leet","code"]

apple pen apple => true
wordDict = ["apple","pen"]

catsandog
["cats","dog","sand","and","cat"]

---
        leetcode // ["leet","code"]
    leet      code
code // ["leet","code"]    
 code
   ''


data structurs
string
[]string

approach
func(word,)
    // base case
    word = '', return True

    // recursive case
           
    results []
    // iterate each word
        IF word matches s, 
            result.append(func(remainder_s))
        ELSE result.append(false)

    return any(results)        
        
    

"""

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        def _wordBreak(s, memo={}):
            if s in memo:
                return memo[s]

            # base case
            if len(s) == 0:
                return True
            # recursive case
            else:
                results = []
                for word in wordDict:
                    s_front = s[0:len(word)]
                    
                    if s_front == word:
                        s_back = s[len(word):]
                        results.append(_wordBreak(s_back, memo))
                    else:
                        results.append(False)
                
                memo[s] = any(results)
                return memo[s]
        
        return _wordBreak(s)
        