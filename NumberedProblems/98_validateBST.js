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

var isValidBST = function(root) {
    var traverseAndValdate = function(root, min, max) {
        if (!root)
            return true

        if (min !== null && min >= root.val)
        // if (min && min >= root.val)
            return false

        if (max !== null && max <= root.val)
        // if (max && max <= root.val)
            return false

        return traverseAndValdate(root.left, min, root.val) && traverseAndValdate(root.right, root.val, max)
    }

    return traverseAndValdate(root, null, null)
};

// construct binary tree from level order input array of node values?? how would I do that?

const root = new TreeNode(0)
root.right = new TreeNode(-1)


// const root = new TreeNode(5)
// let temp = root

// temp.left = new TreeNode(2)
// temp = temp.left
// temp.left  = new TreeNode(1)
// temp.right = new TreeNode(3)
// temp = temp.right
// temp.right = new TreeNode(4)

// temp = root
// temp.right = new TreeNode(6)
// temp = temp.right

// temp.right = new TreeNode(9)

// temp = temp.right
// temp.left = new TreeNode(88)
// temp = temp.left
// temp.left = new TreeNode(7)


console.log(isValidBST(root))