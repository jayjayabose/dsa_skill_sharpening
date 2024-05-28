function isPallindrome(word) {
  return _isPallindrome(word, 0, word.length - 1);
}

function _isPallindrome(word, start, end) {
  if (end <= start) {
    return true;
  }
  if (word[start] === word[end]) {
    return _isPallindrome(word, start + 1, end - 1)
  } else {
    return false
  }
}

console.log(isPallindrome('madam') == true)
console.log(isPallindrome('abcbea') == false)
console.log(isPallindrome('tacocat') == true)