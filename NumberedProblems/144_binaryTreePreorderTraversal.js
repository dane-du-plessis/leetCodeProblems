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


var preorderTraversal = function(root) {
    let arr = []

    var traverse = function(node) {
        if(node === null) {
            return null
        }
        console.log(node.val)
        arr.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }

    traverse(root)

    return arr
};