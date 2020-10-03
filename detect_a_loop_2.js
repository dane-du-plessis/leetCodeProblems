/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let nodes = new Map()
  let current = head
  let index = 0
  while(current !== null) {
    nodes.set(current, index)
    current = current.next
    index += 1
    if(!current) return null
    if(nodes.has(current)) return nodes.get(current)
  }
};

var printList = function (head) {
  var current = head
  var output = ''
  var nodeMap = new Map()
  while (current) {
    if (nodeMap.has(current)) {
      break
    }
    nodeMap.set(current, true)
    output += current.val + ' -> '
    current = current.next
  }
  console.log(output)
}

var list = new ListNode(1)
var head = list
var posIndex = 4
var pos = null

for (var i = 1; i < 10; i++) {
  list.next = new ListNode(i)
  list = list.next
  if (i == posIndex) {
    pos = list
  }
}

list.next = pos // here is the loop!


printList(head)
console.log(hasCycle(head))