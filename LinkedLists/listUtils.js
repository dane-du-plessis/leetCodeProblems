//  Definition for singly-linked list.
export function ListNode(val) {
    this.val = val;
    this.next = null;
}


export var printList = function (head) {
    var current = head
    var output = ''
    while (current) {
        output += current.val + ' -> '
        current = current.next
    }
    console.log(output)
}
