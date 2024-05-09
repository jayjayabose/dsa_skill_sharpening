// https://leetcode.com/problems/merge-two-sorted-lists/
// leetcode: easy
// good: I know the algo. able to code soltion in 10 minutes

/*
PROBLEM
I: l1
I: l2
O:
Rules
 - do mutate
 - vales are ints
 - sorted
 - lists can be empty

A:
 create dummy
 create mergedTail, assign to dummy

 while: both lists are not emtpe
    find lower head
    assign mergedTail.next to lower
    advance mergedTail
    advance list head

 assign remainder of whatever list is not nul    

*/


function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(null);
  let mergedTail = dummy;

  while (l1 && l2) {
      if (l1.val <= l2.val) {
          mergedTail.next = l1;
          l1 = l1.next;
      } else {
          mergedTail.next = l2;
          l2 = l2.next;
      }
      mergedTail = mergedTail.next;
  }

  mergedTail.next = l1 ? l1 : l2

  return dummy.next;
}



/* 
PROBLEM
I:
l1: head of list 1
l2: head of list 2
O:
head of merged list (L1 or L2)
Rules
- lists are sorted ascending

EXAMPLES

[1,2,4], 
[1,3,4]

Output: [1,1,2,3,4,4]

MENTAL MODEL


ALGO

INIT dummy -> new (null)

INIT: tail -> dummy


LOOP: while L1 and L2 are both not null
  IF L1 < L2
      assign tail to L1
      advance L1
  ELSE 
      assign tail to L2
      advanceL2
  ENDIF
END LOOP

IF L1 is null
  assign tail to L2
ELSE 
  assign tail to L1
ENDIF

return dummy.next

*/

// var mergeTwoLists = function(l1, l2) {
//     let dummy = new ListNode(null);
//     let tail = dummy;
//     while (l1 && l2){
//         if (l1.val < l2.val) {
//             tail.next = l1;
//             l1 = l1.next;
//         } else {
//             tail.next = l2;
//             l2 = l2.next;
//         }
//         tail = tail.next;
//     }

//     if (l1 === null) {
//         tail.next = l2;
//     } else {
//         tail.next = l1;
//     }

//     return dummy.next;
// }

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

// solution
// var mergeTwoLists = function(l1, l2) {
//     let dummy = new ListNode(null);
//     let tail  = dummy;

//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             tail.next = l1;
//             l1 = l1.next;
//         } else {
//             tail.next = l2;
//             l2 = l2.next
//         }
//         tail = tail.next;
//     }

//     if (!l1) {
//         tail.next = l2;
//     } else if (!l2) {
//         tail.next = l1
//     }

//     return dummy.next;
// };



/*
I: l1, L2
O: head of merged list
Rules
- splice the lists together
- list is sorted

Algo 

INIT dummy
INIT tail to dummy

LOOP; until end of l1 or l2
  IF value of l1 is less than val l2
      assign tail.next to l1
      advance l1
  ELSe
      assign tail.next = l2
      advance l2
  END IF

END LOOP

IF l1 is nuull
  assign tail.nex tot l2
ELSE
  assighn tail;nest to l1
ENDIF

return dummy next.
*/


// function mergeTwoLists(l1, l2) {
//     let dummy = new ListNode(null)
//     let tail = dummy;

//     while (l1 && l2) {
//         if (l1.val <= l2.val) {
//             tail.next = l1;
//             l1 = l1.next
//         } else {
//             tail.next = l2;
//             l2 = l2.next
//         }
//         tail = tail.next
//     }

//     if (l1) {
//         tail.next = l1
//     } else {
//         tail.next = l2
//     }

//     return dummy.next;
// }