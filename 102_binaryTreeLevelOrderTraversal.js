/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {    
    this.val = val;    
    this.left = this.right = null;
}

let deserializeLevelOrder = function(arr) {
    if (arr.length === 0)
        return null

    const root = new TreeNode(arr[0])
    let nextIndex = 1
    let node = null
    const queue = []
    queue.push(root)

    while(queue.length > 0 && nextIndex < arr.length) {
        node = queue.shift()

        if (node === null) {
            queue.push(null)
            queue.push(null)
        } else {
            if (arr[nextIndex] !== null) {
                node.left = new TreeNode(arr[nextIndex])
                queue.push(node.left)
            } else {
                queue.push(null)
            }
            nextIndex++
            if (arr[nextIndex] !== null) {
                node.right = new TreeNode(arr[nextIndex])
                queue.push(node.right)
            } else {
                queue.push(null)
            }
            nextIndex++
        }
    }
    return root
}



var levelOrderPrint = function(root) {
    if (!root)
        return null
    
    let queue = []
    queue.push(root)
    let node

    while(queue.length > 0) {
        node = queue.shift()
        console.log(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
};

var levelOrder = function(root) {
    if (!root)
        return []
    const max = 100
    let cycle = 0

    const result = []
    let row = []
    const queue = []
    let nodesInLevel = 1
    let counter = 0
    let node
    // do stuff
    queue.push(root)
    while(queue.length > 0 && cycle < max) {
    // while(queue.length > 0) {

        cycle++
        node = queue.shift()
        // console.log(node.val)
        counter++// read queue -> increment counter
        if (node !== null) {
            (node.val !== null && node.val !== undefined) && (row.push(node.val));
            queue.push(node.left)
            queue.push(node.right)
        } else {
            queue.push(null)
            queue.push(null)

        }

        if (counter >= nodesInLevel) {
            console.log(counter + " " + nodesInLevel + " " + row)
            nodesInLevel *= 2
            counter = 0;
            (row.length > 0) && (result.push(row));
            row = []
        }
    }

    console.log(cycle)
    return result
};

// const tree = [3,9,20,null,null,15,7]
// const tree = [1,2,3,4,5,6,7,null,88]
// const tree = [1,2,3,null, null, null, 9]
// const tree = [0, null, 1]
// const tree = [0,null,2, null,null, null, 5]
// const tree = [1,2,3]
// const tree = [0,null,2, null,null, null, 5]
// const tree = [3,9,20,null,null,15,7]
// const tree = [0, null, 2, null, null, 4, 5]
// const tree = [1,null,2,null,3,null,4,33,44]
// const tree = []
// const tree = [1]
// const tree = [1,2,3,4,5,6,7]
tree = [1,2,3,null,4,5]

// const tree = [1,2,null,3,null,4,null,5]
// const tree = [1,2,3,null,4,null,5]
const root1 = deserializeLevelOrder(tree)

const root2 =  new TreeNode(1)
let tree2 = root2
tree2.left = new TreeNode(2)
tree2.left.left = new TreeNode(3)
// tree2.left.left.left = new TreeNode(4)
// tree2.left.left.left.left = new TreeNode(5)


// console.log(root)
// console.log(tree)
levelOrderPrint(root1)
console.log(levelOrder(root1))

// levelOrderPrint(root2)
// console.log(levelOrderTrav(root2))

// levelOrderPrint(root1)
// console.log('============================')
// levelOrderPrint(root2)
