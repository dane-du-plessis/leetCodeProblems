/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
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


const { PerformanceObserver, performance } = require('perf_hooks');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function printLL(head) {
    let current = head
    let s = ''
    if(!head) return s
    while(current) {
        s += current.val + ' -> '
        current = current.next
    }
    console.log(s)
}

var middleNode1 = function(head) {
    let slow = head
    let fast = head
    let skip = false

    while(fast !== null) {
        skip && (slow = slow.next)
        skip = !skip
        fast = fast.next
    }

    return slow
}

var middleNode2 = function(head) {
    let slow = head
    let fast = head
    let skip = false

    while(fast) {
        skip && (slow = slow.next)
        skip = !skip
        fast = fast.next
    }

    return slow
}


var middleNode3 = function(head) {
    let nodes = []
    while(head) {
        nodes[nodes.length] = head
        head = head.next
    }
    // console.log(nodes)
    const L = nodes.length
    const mid = L%2 == 0 ? L/2 : Math.floor(L/2)
    return nodes[mid]
}

var middleNode4 = function(head) {
    let A = [head];
    while (A[A.length - 1].next != null)
        A.push(A[A.length - 1].next);
    return A[Math.trunc(A.length / 2)];
};

// var middleNode = function(head) {
//     let A = [head]
//     while(A[A.length-1].next !== null)
// }

const head = new ListNode(1)
let current = head

for (let i = 2; i <= 1000000; i++) {
    current.next = new ListNode(i)
    current = current.next
}

// printLL(head)

// console.log(middleNode(head).val)

let start = performance.now()
middleNode1(head).val
let end = performance.now()
console.log(end - start, ' ms')


start = performance.now()
middleNode2(head).val
end = performance.now()
console.log(end - start, ' ms')


start = performance.now()
middleNode3(head).val
end = performance.now()
console.log(end - start, ' ms')

start = performance.now()
middleNode4(head).val
end = performance.now()
console.log(end - start, ' ms')