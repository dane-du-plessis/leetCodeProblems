/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // [root.left, root.right] = [root.right, root.left]; // MUCH SLOWER
    (root.left !== null) && (invertTree(root.left));
    (root.right !== null) && (invertTree(root.right));

    return root
};

const root = new TreeNode(1)
let temp = root
temp.left = new TreeNode(2)
temp.right = new TreeNode(3)

temp = temp.left
temp.left = new TreeNode(4)
temp.right = new TreeNode(5)

temp = root.right
temp.left = new TreeNode(6)
temp.right = new TreeNode(7)

invertTree(root)