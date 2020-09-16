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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var insertIntoBST = function(root, val) {
    if(root === null) {
        return new TreeNode(val)
    }
    var traverseAndInsert = function(node) {
        if (node.val === val)
            return
        if (node.val < val) {
            node.right === null && (node.right = new TreeNode(val));
            node.right !== null && (traverseAndInsert(node.right));
        } else {
            node.left === null && (node.left = new TreeNode(val));
            node.left !== null && (traverseAndInsert(node.left));
        }
    }
    traverseAndInsert(root)
    return root
};

const root = new TreeNode(4);
root.left = new TreeNode(2)
root.right = new TreeNode(6)


root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

root.right.left = new TreeNode(5)

insertIntoBST(root, -1)

console.log(root)
console.log(root.left)