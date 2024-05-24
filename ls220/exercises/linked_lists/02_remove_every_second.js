/*
problem: remove every other node in a list
i: Node, head
o; Node, head (same node)
rules
- remove every other node in list begining with head.next (node #2)
- head is not null, is Node

examples
  remove: false
   ------->  ------->
  1 x  2 -> 3 x  4 -> 5 -> nul
  p         c
            p    c
            p         c
                      p     c

data structures

algo
  remove: true
  p = head
  c = head.nxt

  Loop: while curr
  IF remove 
    p.next = p.next.next
    remove = false
  ELSE
    p = p.next
    remove = true

  c = c.next

  return head
*/

function removeEverySecondNode(head) {
  let curr = head;
  while (curr && curr.next) {
    curr.next = curr.next.next;
    curr = curr.next;
  }
  return head;
}

// function removeEverySecondNode(head) {
//   let remove = true;
//   prev = head;
//   curr = head && head.next;

//   while (curr) {
//     if (remove) {
//       prev.next = prev.next.next;
//       remove = false;
//     } else {
//       prev = prev.next;
//       remove = true;
//     }
//     curr = curr.next;
//   }
//   return head;
// }

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
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

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([]);

printLinkedList(removeEverySecondNode(list1)); // Expected: 1 -> 3 -> 5 -> null
printLinkedList(removeEverySecondNode(list2)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list3)); // Expected: 1 -> null
printLinkedList(removeEverySecondNode(list4)); // Expected: 1 -> 3 -> null
printLinkedList(removeEverySecondNode(list5)); // Expected: null