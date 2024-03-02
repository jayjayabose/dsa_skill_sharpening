/*
I: l1, L2
O: head of merged list
Rules
 - splice the lists together
 - list is sorted

Algo 

INIT dummy
INIT tail to dummy

LOOP; until end of l1 or l2
    IF value of l1 is less than val l2
        assign tail.next to l1
        advance l1
    ELSe
        assign tail.next = l2
        advance l2
    END IF

END LOOP

IF l1 is nuull
    assign tail.nex tot l2
ELSE
    assighn tail;nest to l1
ENDIF

return dummy next.
*/


function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(null)
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next
        } else {
            tail.next = l2;
            l2 = l2.next
        }
        tail = tail.next
    }

    if (l1) {
        tail.next = l1
    } else {
        tail.next = l2
    }

    return dummy.next;
}