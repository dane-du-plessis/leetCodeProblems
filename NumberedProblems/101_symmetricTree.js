/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSymmetric = function(root) {
    if (!root) 
        return true
    
    var isSameTree = function(tree1, tree2) {
        if (!tree1 && !tree2)
            return true

        if (!tree1 || !tree2)
            return false

        if (tree1.val !== tree2.val)
            return false

        return isSameTree(tree1.left, tree2.right) && isSameTree(tree1.right, tree2.left)
    }

    return isSameTree(root.left, root.right)
}

const tree = new TreeNode(1)
// tree.left = new TreeNode(2)
// tree.right = new TreeNode(2)

// tree.left.left = new TreeNode(3)
// tree.left.right = new TreeNode(4)

// tree.right.left = new TreeNode(4)
// tree.right.right = new TreeNode(3)

console.log(isSymmetric(tree))