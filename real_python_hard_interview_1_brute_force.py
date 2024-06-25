import doctest
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

    values = []
    for node in linked_lists:
        curr = node
        while curr:
            values.append(curr.val)
            curr = curr.next
            
    values.sort()
    head = Link(values.pop(0))
    curr = head
    for value in values:
        next_node = Link(value)
        curr.next = next_node
        curr = curr.next
    
    return head


if __name__ == '__main__':
    doctest.testmod()
    # result = (merge_k_linked_lists([
    # Link(1, Link(2)),
    # Link(2, Link(4)),
    # Link(3, Link(3)),
    # ]))

    # assert result.val == 2
    # print(result)
    