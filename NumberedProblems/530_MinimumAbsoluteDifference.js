/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var getMinimumDifference = function(root) {
    let min = Number.MAX_SAFE_INTEGER, prev, current
    // traverse in-order check differences as you go along

    let traverseInOrder = function(node) {
        if (node === null) {
            return null
        }
        traverseInOrder(node.left)
        if (prev === undefined) {
            prev = node.val
        } else {
            current = node.val;
            (current - prev < min) && (min = current - prev);
            prev = current;
        }
        traverseInOrder(node.right)
    }
    traverseInOrder(root)
    return min
};

const root = new TreeNode(1)
let temp = root
temp.right = new TreeNode(400)
temp.right.left = new TreeNode(390)


console.log(getMinimumDifference(root))