/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var curr = head
    var elements = []
    while(curr !== null) {
        elements.push(curr.val)
        curr = curr.next
    }
    console.log(elements)
    for (var i = 0; i < Math.floor(elements.length/2); i++) {
        console.log(i)
        if (elements[i] != elements[elements.length-1-i]){
            return false
        }
    }
    return true
};