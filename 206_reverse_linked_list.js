/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


 /*
EXAMPLES

  [1,2,3,4,5]
   p c n
Output: [5,4,3,2,1]

ALGO

INIT: prev -> nil, curr -> head, next -> curr.next
LOOP: while curr is not null
    curr.next = prev
    prev = curr
    curr = curr.next
    next = next.next
END LOOP
return current

 
 */

 // mental model: this is a two pointer solution with a temp varaible b/c we break links that we need
 var reverseList = function(head) {
  let prev = null
  let curr = head;

  while (curr) {
      // hold next node before reversing pointer
      let next = curr.next; // declare next in block to avoid curr === null
      curr.next = prev; // reverse pointer
      prev = curr; // advance
      curr = next; // advance
  }

  return prev;    
};