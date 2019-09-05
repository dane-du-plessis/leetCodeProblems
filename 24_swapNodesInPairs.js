/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null) {
      return head
  }
  let a = head
  let b = head.next
  if (b) {
      a.next = b.next
      b.next = a
      a.next = swapPairs(a.next)
      return b
  }
  return a
};