/*
problem:
i: head
i: target
o: head
rules:
- delete all nodes where val === target

examples;
target: 2
        ------->   ------->
d  ->  1 -> 2 -> 3 -> 2 -> 4 -> null,
                           p    
                                   c

Input: 1 -> 2 -> 3 -> 2 -> 4 -> null, Target: 2
Output: 1 -> 3 -> 4

Input: 1 -> 3 -> 1, Target: 1
Output: 3 -> null

Input: null, Target: 3
Output: null

data structures:

algo:
init dummy
dummy.next = head
prev = dummy

LOOP: cur = head ... curr = lastnode
  # curr.val is not target
    advance prev
  # curr.val is target: deleted
    prev.next = prev.next.next
  
  curr = curr.next

return dummy.next


*/

// Given a head of a linked list and a target value,
// remove all occurrences of the target value from the
// linked list.



class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

function deleteFromLinkedList(head, target) {
  let dummy = new Node(null, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.val !== target) {
      prev = prev.next;
    } else {
      prev.next = prev.next.next;
    }
    curr = curr.next;
  }

  return dummy.next;
}

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(2);
head1.next.next.next.next = new Node(4);

console.log(deleteFromLinkedList(head1, 2));