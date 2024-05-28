// https://leetcode.com/problems/same-tree/

var isSameTree = function(p, q) {
  // base case
  if (p === null && q === null) return true // both are null
  if (p === null || q === null) return false // one is nnull, one is not (bot are not nul b/c prior line did not return)

  // recursive case
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // val is same and subtress are the same
  
};