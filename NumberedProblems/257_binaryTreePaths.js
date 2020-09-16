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

var binaryTreePaths = function(root) {
    if (!root) {
        return []
    }

    const resultArr = []; // array of strings with each path
    const path = []; // an array-stack which is re-used to build up the paths. Shouldn't use much memory with push and pop

    // traverse pre-order, push each node to path. Add, pop, stop when a leaf is reached
    let traverse = function(root) {
        path.push(root.val)
        if (!root.left && !root.right) {
            // leaf reached.
            // console.log(path)
            resultArr.push(path.join('->'))
            path.pop() // remove last element
            return
        }
        root.left && traverse(root.left)
        root.right && traverse(root.right)
        path.pop()
    }
    traverse(root)
    return resultArr
};

const root = new TreeNode(1)
let temp = root
temp.left = new TreeNode(2)
temp.left.right = new TreeNode(5)
temp.right = new TreeNode(3)


console.log(binaryTreePaths(root))