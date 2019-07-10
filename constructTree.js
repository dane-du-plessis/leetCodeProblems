function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
} 

// var buildTree = function(nodes) {
//     const root = new TreeNode(nodes[0])
//     let level = 1

//     for (let L = 1; L <= Math.ceil(Math.log2(nodes.length + 1)); L = L*2) {
//         console.log(L)

//     }

//     while (node)    
// };


let traverseInOrder = function(root) {
    if (!root) {
        return null
    }

    traverseInOrder(root.left)
    console.log(root.val)
    traverseInOrder(root.right)
}

let traversePreOrder = function(root) {
    if (!root) {
        return null
    }

    console.log(root.val)
    traversePreOrder(root.left)
    traversePreOrder(root.right)
}

let traversePostOrder = function(root) {
    if (!root) {
        return null
    }

    traversePreOrder(root.left)
    traversePreOrder(root.right)
    console.log(root.val)
}

let traverseLevelOrder = function(root) {
    let queue = []
    // enqueue: queue.push()
    // dequeue: queue.shift()

    queue.push(root)

    let node
    while(queue.length !== 0) {
        node = queue.shift()
        console.log(node.val)
        node.left && (queue.push(node.left))
        node.right && (queue.push(node.right))
    }
}

const tree = [
1,
2,                             3,
4,           5,                6,             null,
8,   null,   null,    11,      12,      13
];

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

// traverseInOrder(root)
// console.log("------------------")
// traversePreOrder(root)
// console.log("------------------")
// traversePostOrder(root)


traverseLevelOrder(root)