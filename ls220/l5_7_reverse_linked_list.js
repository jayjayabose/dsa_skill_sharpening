/*
problem
i:
o:
rules

examples
n <-  <--  <--  <--
d -> 1 x 2 x  3 x 4 x null
                   p   c   t

// Output: 4 -> 3 -> 2 -> 1 -> null

data structures

algo

init dummy
dummy.next = head
prev = null
curr = head

LOOP: while c
  t = c.next
  c.next = prev
  p = c
  c = t

  return dummy.next
 */

class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

function reverseLinkedList(head) {
  const dummy = new Node(null, head);
  let prev = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = '';
  while (curr !== null) {
    result += curr.val + ' -> ';
    curr = curr.next;
  }
  result += 'null';
  return result;
}

// Test case 1
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

console.log("Input: 1 -> 2 -> 3 -> 4 -> null");
console.log("Output:", printList(reverseLinkedList(head1)));
// Output: 4 -> 3 -> 2 -> 1 -> null
