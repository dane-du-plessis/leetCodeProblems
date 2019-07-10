function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
} 

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

let serializeInOrder = function(arr) {
    if (arr.length == null)
        return null

    let queue = []
    queue.push(new TreeNode(arr[0]))
    let root = queue[0]
    let i = 0
    let node
    while (i < arr.length) {
        node = queue.shift()
        // (arr.length > ++i) && (node.left  = new TreeNode(arr[i]));
        // (arr.length > ++i) && (node.right = new TreeNode(arr[i]));
        
        if (++i < arr.length) {
            node.left  = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        
        if (++i < arr.length) {
            node.right = new TreeNode(arr[i])
            queue.push(node.right)
        }

    }

    return root

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

// traverseInOrder(root)
// console.log("------------------")
// traversePreOrder(root)
// console.log("------------------")
// traversePostOrder(root)


// traverseLevelOrder(root)

//serialize from in-order array value input

// const tree = [1,2,3,4,5,6,7, null, 9, null, 11]

const tree = [1,2,null,4]

const deserializedTree = serializeInOrder(tree)

traverseLevelOrder(deserializedTree)