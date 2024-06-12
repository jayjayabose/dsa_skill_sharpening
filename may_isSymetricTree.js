// https://leetcode.com/problems/symmetric-tree/

/*
- _A [data structure] is a [problem definition] if [some condition is true], 
and the rest of the [data structure] is [problem definition].

a binary tree is a symmetric tree if 
  root left and right have same value and
  outer children subtrees are symmetric  and
  inner children subtres are symmetric
*/

var isSymmetric = function(root) {
  // inner function
  function _isSymetric(left, right) {
      // base case
      if (left === null && right === null) return true; // both children null
      if (left === null || right === null) return false; // one child null, one not null

      // recursive case
      return left.val === right.val && // left val and right val are equal
      // subtrees are symetric
      _isSymetric(left.left, right.right) &&
      _isSymetric(left.right, right.left);

  }

  return _isSymetric(root.left, root.right)
  
};