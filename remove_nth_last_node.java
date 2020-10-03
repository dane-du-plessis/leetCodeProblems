/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode removeNthFromEnd(ListNode head, int n) {
      ListNode further = head;
      ListNode closer = head;
      
      // Edge cases
      if (head == null) return head; // You asked for it
      if (further.next == null && n == 1) return null; // You're still being stupid.
      
      // advance further pointer
      for (int i = 1; i < n; i++) {
          further = further.next;
          if (further == null) return null;
      }
      
      // advance in lockstep untill further falls off the end
      ListNode prev = null;
      while (further.next != null) {
          further = further.next;
          prev = closer;
          closer = closer.next;
      }
      
      // More edge cases
      if (prev == null) {
          head = head.next;
          return head;
      }
      
      // delete closer
      prev.next = closer.next;
      return head;
  }
}