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

    """

    """
    copy_linked_lists = linked_lists[:] # copy the list
    dummy = Link(0)
    curr = dummy

    while any(copy_linked_lists):
        front_vals = [link.val for link in copy_linked_lists if link] # filter None values
        min_val = min(front_vals) # find min of not None values
    
        # find node with min value
        for i, link in enumerate(copy_linked_lists):
            if link and link.val == min_val:
                # create node and set it as next in list
                curr.next = Link(min_val)
                curr = curr.next

                # advance the node referenced in the array. will be None at end of list
                copy_linked_lists[i] = copy_linked_lists[i].next
                break

    return dummy.next

if __name__ == '__main__':
    doctest.testmod()
    # print(merge_k_linked_lists([
    #     Link(1, Link(2)),
    #     Link(2, Link(4)),
    #     Link(3, Link(3)),
    #     ]))    