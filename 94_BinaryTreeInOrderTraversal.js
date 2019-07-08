/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
} 
var inorderTraversal = function(root) {
    let res = []
    var inOrder = function(root) {
        if (!root) {
            return
        }
        inOrder(root.left)

        res = res.concat(root.val)

        inOrder(root.right)
    }

    inOrder(root)
    return res
    
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)


console.log(inorderTraversal(root))