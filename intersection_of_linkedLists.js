// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/

// There is a much faster way:
/*
1. Get to the last node of each list. 
   If these last nodes are not the same, the lists do not intersect. 
   Record the length of the lists.

2. Find the difference in length. Discard from the longer list this number of nodes.

3. Advance in lockstep, compring each node, until the intersecting node is found. Return it.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // Load everything in one list into a hashmap.
  
  var map = new Map()
  var pointer = headA
  while(pointer !== null) {
      map.set(pointer, '')
      pointer = pointer.next
  }
  
  // iterate through the second list, as soon as you find one already in the hashmap, you're done
  pointer = headB
  while(pointer !== null) {
      if(map.has(pointer)) return pointer
      pointer = pointer.next
  }
  return null
}