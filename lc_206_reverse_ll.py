# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

"""
PROBLEM:
I: head, ListNode
 - can be None
O: head, ListNode, head of list with all nodes in reverse order
rules
 - if None or 1 element return same list

notes
 - we do need to change head, need a dummy note

EXAMPLES:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

d 1,2,3,4,5
p
  c


Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []

ALGO
dummy with next = head
prev = dummy
curr = head // handle head is None

LOOP Curr through all nodes

    tmp = c.next

    // reverse
    reassign next to prev
    
    // advance current 
    reassing current to tmp
    
    // advance prev
    prev = cur

return dummy.head



"""
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head

        while curr != None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        
        return prev