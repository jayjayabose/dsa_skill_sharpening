/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


 /*

 init: dummy(null, null)
 init: tail -> dummy

 LOOP: while l1 adnd l2 are not null
    IF l1 < l2
        tail.next = l1
        l1 = l1.next
    ELSE 
        tail.next = l2
        l2 = l2.next
    ENDIF
    tail = tail.next
END LOOP

if l1 is null
    tail.next = l2
else if l2 is null
    tail.next = l1
endif

return dummy.next

 */
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(null);
  let tail  = dummy;

  while (l1 && l2) {
      if (l1.val < l2.val) {
          tail.next = l1;
          l1 = l1.next;
      } else {
          tail.next = l2;
          l2 = l2.next
      }
      tail = tail.next;
  }

  if (!l1) {
      tail.next = l2;
  } else if (!l2) {
      tail.next = l1
  }

  return dummy.next;
};