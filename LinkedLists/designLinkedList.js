/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.val = null
  this.next = null
};

MyLinkedList.prototype.printList = function () {
  var current = this
  var output = ''
  while (current) {
    output += current.val + " -> "
    current = current.next
  }
  console.log(output)
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  var current = this
  var counter = 0
  while (current) {
    if (counter > index) return
    if (counter === index) {
      return current.val
    }
    current = current.next
    counter++
  }
  return -1
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.val === null) {
    this.val = val
    return
  }
  var oldHead = new MyLinkedList()
  oldHead.val = this.val
  oldHead.next = this.next
  this.next = oldHead
  this.val = val
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  var current = this
  var prev = null
  // traverse to end
  while (current) {
    prev = current
    current = current.next
  }
  prev.next = new MyLinkedList()
  prev.next.val = val
};

/**
* Add a node of value val before the index-th node in the linked list. 
* If index equals to the length of linked list, the node will be appended to the end of linked list. 
* If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val)
    return
  }
  var current = this
  var prev = null
  var counter = 0
  // find the index
  while (current) {
    prev = current
    current = current.next
    counter++
    if (counter === index) {
      var newNode = new MyLinkedList()
      if (!current) {
        prev.next = newNode
        newNode.val = val
        return
      }
      newNode.val = current.val
      newNode.next = current.next
      current.val = val
      current.next = newNode
      return
    }
  }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) return
  var current = this
  var prev = null
  var counter = 0
  if (index === 0) {
    if (this.next) {
      this.val = this.next.val
      this.next = this.next.next
      return
    }
    return
  }
  while (current) {
    if (counter > index) return
    if (counter === index) {
      prev.next = current.next
      return
    }
    prev = current
    current = current.next
    counter++
  }

};

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/


// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]

var obj = new MyLinkedList()

obj.addAtHead(7)
obj.printList()
console.log(obj.get(0))
obj.deleteAtIndex(0)
obj.printList()
obj.addAtIndex(1,3)
obj.printList()
obj.deleteAtIndex(0)
obj.printList()
obj.addAtIndex(1,11)
obj.addAtIndex(2,35)
obj.printList()
obj.addAtIndex(2,55)
obj.addAtIndex(2,55)
obj.printList()
obj.deleteAtIndex(0)
obj.printList()
obj.deleteAtIndex(3)
obj.printList()
obj.deleteAtIndex(2)
obj.printList()
// ["MyLinkedList","addAtHead","addAtTail","addAtHead","addAtTail","addAtHead","addAtHead","get","addAtHead","get","get","addAtTail"]
// [[],            [7],        [7],        [9],        [8],        [6],        [0],        [5],   [0],       [2],  [5],  [4]]
