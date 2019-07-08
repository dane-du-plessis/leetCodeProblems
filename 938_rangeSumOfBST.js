/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var rangeSumBST = function(root, L, R) {
    let sum = 0
    var travInOrder = function(root) {
        if (!root) return
        (root.val >= L) && travInOrder(root.left);
        (root.val >= L && root.val <= R) && (sum += root.val);
        (root.val <= R) && travInOrder(root.right);
    }

    travInOrder(root)
    return sum
}

/*
Traverse in-order, so that the numbers come out least to greatest.
If a node is less than L, stop traversing. If a number is greater than R, stop traversing.
Add total to sum of each node traversed.
Return sum. 

*/

const root = new TreeNode(6)
root.left = new TreeNode(3)
root.left.left = new TreeNode(2)
root.right = new TreeNode(8)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)

let L = 6, R = 7

console.log(rangeSumBST(root,L,R))