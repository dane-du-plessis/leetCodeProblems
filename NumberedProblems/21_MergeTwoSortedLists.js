/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    let head, current
    let temp1 = l1
    let temp2 = l2

    // select the head of the new list
    if (l1.val <= l2.val) {
        head = l1
        temp1 = head.next
        current = l1
        if(!temp1) {
            current.next = l2
            current = l2
        }
    } else {
        head = l2
        temp2 = head.next
        current = l2
        if(!temp2) {
            current.next = l1
            current = l1
        }
    }

    // add remaining elements to the list
    while (temp1 && temp2) {
        if (temp1.val <= temp2.val) {
            current.next = temp1
            current = temp1
            temp1 = temp1.next
            if(!temp1)
                current.next = temp2
        } else {
            current.next = temp2
            current = temp2
            temp2 = temp2.next
            if(!temp2)
                current.next = temp1
        }
    }
    
    return head
}


function printLL(head) {
    let current = head
    let s = ''
    if(!head) return s
    while(current) {
        s += current.val + ' -> '
        current = current.next
    }
    console.log(s)
}

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const head1 = new ListNode(2)
head1.next = new ListNode(2)
head1.next.next = new ListNode(4)
head1.next.next.next = new ListNode(7)
head1.next.next.next.next = new ListNode(9)

const head2 = new ListNode(1)
head2.next = new ListNode(3)
head2.next.next = new ListNode(4)
head2.next.next.next = new ListNode(5)

printLL(head1)
printLL(head2)
console.log("------------------")

// mergeTwoLists(head1,head2)

printLL(mergeTwoLists(null,null))
console.log("------------------")
printLL(mergeTwoLists(head1,head2))
console.log("------------------")
printLL(mergeTwoLists(head1,null))
console.log("------------------")
printLL(mergeTwoLists(null,head2))
console.log("------------------")
printLL(mergeTwoLists(new ListNode(2), new ListNode(1)))
console.log("------------------")
printLL(mergeTwoLists(new ListNode(1), new ListNode(2)))