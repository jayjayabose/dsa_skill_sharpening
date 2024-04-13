# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
PROBLEM:
I: head, ListNode
- list is sorted
- zero or more nodes 
- node values: neg, 0, pos

O: head, ListNode, (same node?)
Rules
 - delete duplicates (each element appears only once)
 - maintain sort

Notes
 - never need to delete head (no dummy head needed)
 - if 0 or 1 nodes, return same list

EXAMPLES:
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

1,*,2,3,*
      p
         c 

ALGO:
// handle 0, 1 nodes
init: prev: head
init: curr: head.next

LOOP: curr through all subsequent nodes
  IF curr val == prev val
    // delete current
    // advance current
  ELSE
    // advance prev
    // advance curr

return head
"""
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        print('head', head, type(head))
        prev = head
        curr = (head and head.next) or None

        while (curr != None):
            if curr.val == prev.val:
                prev.next = prev.next.next
            else:
                prev = prev.next
            curr = curr.next
        
        return head