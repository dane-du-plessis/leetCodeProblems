/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

let traverseLevelOrder = function(root) {
    let queue = []
    // enqueue: queue.push()
    // dequeue: queue.shift()

    queue.push(root)

    let node
    while(queue.length !== 0) {
        node = queue.shift()
        console.log(node.val)
        node.left && (queue.push(node.left))
        node.right && (queue.push(node.right))
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var insertIntoBST = function(root, val) {

    if (root === null) {
        root = new TreeNode(val)
        return root
    }

    // const newNode = new TreeNode(val)
    var insertRec = function(root,val) {
        if (val > root.val) {
            if (root.right !== null) {
                insertRec(root.right, val)
            } else {
                root.right = new TreeNode(val)
            }
        } else {
            if (root.left !== null) {
                insertRec(root.left, val)
            } else {
                root.left = new TreeNode(val)
            }
        }
    }

    insertRec(root,val)
    return root
};

const root = new TreeNode(1)
let temp = root
temp.right = new TreeNode(100)
temp.left = new TreeNode(-10)

traverseLevelOrder(root)

insertIntoBST(root, -5)
traverseLevelOrder(root)
