/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var curr = head
    var prev = null
    
    if(curr === null) return head
    
    while(curr !== null) {
        // do stuff
        if (prev === null && curr.val === val) {
            curr = curr.next
            head = curr
            continue
        }
        if (prev !== null && curr.val === val) {
            prev.next = curr.next
            curr = curr.next
            continue
        }
        prev = curr
        curr = curr.next
    }
    return head
};