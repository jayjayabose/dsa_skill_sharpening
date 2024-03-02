function reverseList(head) {
  let curr = head;
  let prev = null

  while (curr.next) {
      let next = curr.next; // grab next before reassigning next
      current.next = prev; // reverse pointer
      prev = current; // advance prev 
      current = next // advanc curr
  }

  return curr;
}