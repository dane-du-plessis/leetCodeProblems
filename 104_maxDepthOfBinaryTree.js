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

var maxDepth = function(root) {
    let maxDepthCounter = 0
    var dive = function(root, depth) {
        // set depth
        if (root) {
            depth++;
            (depth > maxDepthCounter) && (maxDepthCounter = depth);
        } else {
            return
        }
        // dive
        dive(root.left, depth)
        dive(root.right, depth)
    }

    dive(root, 0)

    return maxDepthCounter
};

const root = new TreeNode(1)

let temp = root
temp.left = new TreeNode(2)
temp = temp.left
temp.left = new TreeNode(3)
temp = temp.left
temp.left = new TreeNode(4)

temp = root
temp.right = new TreeNode(7)
temp = temp.right
temp.left = new TreeNode(8)

console.log(maxDepth(root))