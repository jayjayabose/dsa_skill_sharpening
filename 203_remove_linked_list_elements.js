/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/*
I: 
head: node
val: int

O:

EXAMPLES
  [1,2,6,3,4,5,6], val = 6
     ^
 d
        p 
           c

[1,2,3,4,5]
----

Input: head = [], val = 1
Output: []

---
  [7,7,7,7], val = 7
d
p
  c
Output: []

Mental Model
two pointers: prev, curr
 advance curr until currnt is null
    if not val
        advance prev
        contnue
    loo: advance prev to not val
        reassing prev.next to curr

return head

    1,2,6,3,4,5,6
  d
            p  
                  c 

ALGO

INIT: dummy -> head
INIT: prev -> dummy
INIT: curr -> head

LOOP: while curr is NOT null
    IF curr.val != val
        // advance both
        curr = curr.next
        prev = prev.next
        continue
    ENDIF

    IF curr.val === val
        //advance curr to next node that is not val
        LOOP: while curr.val === val && curr != null
            curr = curr.next
        END LOOP

        // set prev.next
        prev.next = curr
    ENDIF
ENDLOOP
return head
        


 */
var removeElements = function(head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let [prev, curr] = [dummy, head];

  while (curr) {
      if (curr.val === val) {
          prev.next = curr.next;
      } else {
          prev = prev.next;
      }
      curr = curr.next;
  }
  return dummy.next;  
};