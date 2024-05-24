/*
problem
Given a singly linked list and a specific value (referred to as the 'key'), 
your task is to determine how many times this key appears within the linked list. 
For instance, given a linked list like 1->2->1->2->1->3->1 and a key of 1, 
the expected result would be 4, as the key 1 appears four times in the list.

Count how many times key occurs in a list

i: Node, head
i: Number, key
o: Number, count of occuranances of key
rules
 - head is not null, is Node
 

examples
1->2->1->2->1->3->1 and a key of 1,  => 4
1->2->1->2->1->3->1 and a key of 5,  => 5
data structures

algorithn
init count: 0
LOOP through list
  if val == target
    increment count

  return count
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function countKeyOccurrences(head, key) {
  let count = 0;
  let curr = head
  while (curr) {
    if (curr.val === key) {
      count++;
    }
    curr = curr.next;
  }
  return count;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

console.log(countKeyOccurrences(createLinkedList([1,2,3,4]), 2) === 1);
console.log(countKeyOccurrences(createLinkedList([1,2,3,1,1,4]), 1) === 3);
