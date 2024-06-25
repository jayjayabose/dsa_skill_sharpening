import doctest
from queue import PriorityQueue
from collections import defaultdict


class Link:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

    def __str__(self):
        if not self.next:
            return f"Link({self.val})"
        return f"Link({self.val}, {self.next})"

def merge_k_linked_lists(linked_lists):
    '''
    Merge k sorted linked lists into one
    sorted linked list.
    >>> print(merge_k_linked_lists([
    ...     Link(1, Link(2)),
    ...     Link(3, Link(4))
    ... ]))
    Link(1, Link(2, Link(3, Link(4))))
    >>> print(merge_k_linked_lists([
    ...     Link(1, Link(2)),
    ...     Link(2, Link(4)),
    ...     Link(3, Link(3)),
    ... ]))
    Link(1, Link(2, Link(2, Link(3, Link(3, Link(4))))))
    '''

    """
    init priority queue: queue
    loop: all nodes in all lists
        push node to aueue, based on value

    init dummy; List(None)
    inint curr = dummy
    dummy.next = queue.pop

    while queis is not empty
        link = Link(queue.pop)
        curr.next = link
        curr = curr.next

    return dummy.next



    """
    copy_linked_lists = linked_lists[:]

    pq = PriorityQueue()
    val_link_map = defaultdict(list)

    dummy = Link(None)
    curr = dummy

    for link in copy_linked_lists:
        val_link_map[link.val].append(link)
        pq.put(link.val)

    while len(val_link_map) > 0:
        min_val = pq.get()
        min_link = val_link_map[min_val].pop()
        new_link = Link(min_val)
        curr.next = new_link
        curr = curr.next

        if len(val_link_map[min_val]) == 0:
            del val_link_map[min_val]
        if min_link.next:
            pq.put(min_link.next.val)
            val_link_map[min_link.next.val].append(min_link.next)

    return dummy.next

if __name__ == '__main__':
    doctest.testmod()
    # print(merge_k_linked_lists([
    #     Link(1, Link(2)),
    #     Link(2, Link(4)),
    #     Link(3, Link(3)),
    #     ]))    