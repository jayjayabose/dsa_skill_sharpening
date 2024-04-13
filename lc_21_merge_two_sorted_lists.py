# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
PROBLEM:
I:
 list1, ListNode
 list1, ListNode
 - can be None
 - non-decreasing order
O:
 ListNode, head of merged list(l1 or l2)

Rules
 - merge lists
 - maintain non-decreasing order

EXAMPLES

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

 1,2,4
 a
 1,3,4
 b


Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]

ALGO
if h1 none - return h2
vse versa

init dummy
# init tail = dummy.next

// find the head, assign tail
    find lesser h
    assign d.next to lesser h
    init tail to lesser
    advance lesser h

// loop until one list is exhasted
  find lesser head

  t.next = lesser head
  tail = tail.next
  lesser head = lesser head.next

// assign remain list
tail.next = head that is not nulll 9or null

return dummy.head


NOTES TO Self
pythonn as a ternary-like IF syntax
 
"""
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 == None:
            return list2
        elif list2 == None:
            return list1

        dummy = ListNode(None)

        if (list1.val < list2.val):
            lesser = list1
            list1 = list1.next
        else:
            lesser = list2
            list2 = list2.next
        
        dummy.next = lesser    
        tail = dummy.next

        while (list1 and list2):
            if (list1.val < list2.val):
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        tail.next = list1 if list1 != None else list2

        return dummy.next