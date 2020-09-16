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
var oddEvenList = function(head) {
    if(head === null) return head
    var odd = head
    var eve = head.next
    if(eve === null) return head
    var eveHead = eve
    
    while(odd !== null && odd.next !== null && eve !== null && eve.next !== null){
        // console.log(odd.val + ' '+ eve.val)
        odd.next = eve.next
        odd = odd.next
        eve.next = eve.next.next
        eve = eve.next
    }
    // console.log(odd?.val + ' '+ eve?.val)
    odd.next = eveHead
    return head
    
};