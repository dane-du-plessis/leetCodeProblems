/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
    if(!t1 && !t2)
        return null
    // initialize the root
    let root = new TreeNode(0);

    // traverse the trees in-order, creating new nodes if either of the nodes is defined
    var traverseAndCreate = function(node1, node2, newNode) {
        if (node1 === null && node2 === null) 
            return;
        
        // assign value to newNode
        node1 !== null && (newNode.val += node1.val);
        node2 !== null && (newNode.val += node2.val);
    
        //get pointers to left/right subtrees
        let node1left = node1 !== null ? node1.left  : null
        let node2left = node2 !== null ? node2.left : null

        let node1right = node1 !== null ? node1.right : null
        let node2right = node2 !== null ? node2.right : null
        
        // traverse if a subtree exists
        if (node1left || node2left) {
            newNode.left  = new TreeNode(0);
            traverseAndCreate(node1left, node2left, newNode.left);
        }
        if (node1right || node2right) {
            newNode.right = new TreeNode(0);
            traverseAndCreate(node1right, node2right, newNode.right);
        }
    }

    traverseAndCreate(t1, t2, root);
    return root;
};


const root1 = new TreeNode(0)
const root2 = new TreeNode(2)

root1.left = new TreeNode(1)
root2.left = new TreeNode(2)

root1.right = new TreeNode(3)
root2.right = new TreeNode(4)


const newTree = mergeTrees(root1, root2)

// console.log(root1)
// console.log(root2)
console.log(newTree)