# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
PROBLEM
I: Head
 - 0 or more nodes
 - node val is postive integer
 - not ordered
O: Head
Rules:
 remove all nodes that have a repeated value
 head may change

EXAMPLES
d [1,2,*,3,4,5,*], val = 6
             p     
               c
[1,2,3,4,5]


[7,7,7,7], val = 7
 p
 c
[]

ALGO
init dummy with next -> head
init prev: dummy
init curr: head

LOOP: curr through all nodes
  IF curr value is target value
    // delete: 
    prev.next = curr.next
    // advance curr
    curr = curr.next
 ELSE
    // advance curr
    // advance prev

return dummy.next

"""
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = ListNode(-1)
        dummy.next = head
        prev = dummy
        curr = head

        while (curr != None):
            if curr.val == val:
                prev.next = curr.next
            else:
                prev = prev.next
            
            curr = curr.next

        return dummy.next
        