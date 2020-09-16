// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1204/

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


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null) return
    var prev = null
    var curr = head
    var next = curr.next
    if (next === null) return head
    while (next !== null) {
        curr.next = prev
        prev = curr
        curr = next
        next = next.next
        console.log(prev)
    }
    curr.next = prev
    return curr
}

let head = new ListNode(0)
let list = head
for (let i = 1; i < 10; i++) {
    list.next = new ListNode(i)
    list = list.next
}

printList(head)

let reversed = reverseList(head)

printList(reversed)