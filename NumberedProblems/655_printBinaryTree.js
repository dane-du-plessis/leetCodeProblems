/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    if (!root) return;
    // addRow([root]) // sort of what I had in mind
    buildTree(root)
}

// iterative and recursive approach
var buildTree = function (root) {
    // first build the tree interatively
    let currentRow = [root]
    let nextRow = []
    let treeArray = [currentRow]
    let empty = false
    // number of nodes in current level
    let nodesInLevel = 1
    // this loop serves to keep adding empty nodes
    while (!empty) {
        empty = true
        // there will be nodesInLevel arrays in this row, nest arrays to this depth
        for (let index = 0; index < currentRow.length; index++) {
            const element = currentRow[index]
            console.log('Element: ', element)
            let leftChild = [], rightChild = []
            if (element.left == null) {
                leftChild.push(' ')
            } else {
                empty = false
                leftChild.push(element.left)
            }
            nextRow.push(leftChild)
            if (element.right == null) {
                rightChild.push(' ')
            } else {
                empty = false
                rightChild.push(element.right)
            }
            nextRow.push(rightChild)
            nodesInLevel *= 2
        }

        // load currentRow in to tree, set nextRow
        currentRow = nextRow
        treeArray.push(currentRow)
        nextRow = []
    }
    console.log(treeArray)
}

// recursive approach
var addRow = function (row) {
    let childRow = []
    let childEmpty = true
    for (let index = 0; index < row.length; index++) {
        const element = row[index]
        if (element.left == null) {
            childRow.push(' ')
        } else {
            childEmpty = false
            childRow.push(element.left)
        }
        if (element.right == null) {
            childRow.push(' ')
        } else {
            childEmpty = false
            childRow.push(element.right)
        }
    }

    const showRow = row.map(n => n !== " " ? n.val : " ")
    if (childEmpty) {
        console.log(showRow)
        return
    }
    addRow(childRow)
    console.log(showRow)
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


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

// console.log(traverseLevelOrder(root))
printTree(root)