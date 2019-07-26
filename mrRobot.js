// Given an m x n grid, find the number of ways a robot can move left, right, up, down to reach a destination cell at i,j starting from 0,0. 
// Some cells are not navigable and marked 1. The destination cell is marked 9. Navigable cells are marked 0.
// Find:
// 1. The minimum number of steps required to reach the destination cell from the origin. -- Maintain counter value in each node
// 2. The exact path that is the sortest route. -- Maintain pointer to parent node. Once found, the return path is easy to recover (breadcrumb solution)
// 3. The maximum number of steps required to reach the destination cell from the origin. -- This won't exist for a BFS
// 4. The longest possible path. -- Won't find this with a BFS -- Need some other way. This is a sort of optimal packing problem - how much rope can you fit into the space shuttle
let log = console.log

class GraphNode {
    constructor(x,y){
        this.x = x // beacuse this is a grid node
        this.y = y
        this.target = false // so that we know whether or not this is what we want
        this.outgoing = [] // directed graph
        this.stepsToHere = 0
    }
}

class Arc {
    constructor() {
        this.start = null
        this.end = null
    }
}


// let grid = [
//     [0,0,0,0,0,0,0],
//     [0,1,1,0,1,1,1],
//     [0,1,9,0,0,0,0],
//     [0,1,1,0,0,0,0],
//     [0,0,0,0,0,0,0]
// ];

// let grid = [
//     [0,0,0],
//     [0,0,9]
// ];

// let grid = [
//     [0,0,0],
//     [0,1,1],
//     [0,0,9]
// ];

// let grid = [
//     [0,0,0],
//     [0,9,0]
// ];


let grid = [
    [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,],
    [0,0,1,9,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,],
    [0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,],
    [0,0,1,0,1,0,1,0,1,0,0,1,0,0,9,1,0,0,0,],
    [0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,],
    [0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,],
    [0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,],
    [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,],
];

let numRows = grid.length;
let numCols = grid[0].length;

// construct graph from the grid, this is really an adjacency list
for (let i = 0; i < numRows; i++) {
    let row = ''
    for (let j = 0; j < numCols; j++) {
        row += grid[i][j] + ' ' 
    }
    log(row)
}

// create a graph
const root = new GraphNode(0,0)
const allNodes = new Set() // a set containing all the nodes
allNodes.add(root)

let findNode = function(allNodes, x, y) {
    for(n of allNodes) {
        if (n.x === x && n.y === y) {
            return n
        }
    }

    return null
}

let checkAndAddNode = function(grid, allNodes, x, y) {
    let existingNode  = findNode(allNodes,x,y)
    if (existingNode) {
        return existingNode
    }

    if (grid[x][y] === 0 || grid[x][y] === 9) {
        let newNode = new GraphNode(x,y)
        if (grid[x][y] === 9) {
            newNode.target = true
        }
        allNodes.add(newNode)
        return newNode
    }

    return null
}


for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        log(i + " " + j)
        // i, j
        // if node is new, add it to the set.
        let node = checkAndAddNode(grid, allNodes, i, j)
        if (node === null) {
            log('nothing here')
            continue
        }
        log("node present")

        let x
        let y
       
        //Add edges to other nodes, if they're there

        // up
        // i-1, j
        x = i-1
        y = j
        if (0 <= x && x < numRows) {
            let otherNode = checkAndAddNode(grid, allNodes, x, y)
            if (otherNode) {
                node.outgoing.push(otherNode) // duplicates
            } 
        }

        // down
        // i+1, j
        x = i+1
        y = j
        if (0 <= x && x < numRows) {
            let otherNode = checkAndAddNode(grid, allNodes, x, y)
            if (otherNode) {
                node.outgoing.push(otherNode)
            } 
        }

        // left
        // i, j-1
        x = i
        y = j-1
        if (0 <= x && x < numRows) {
            let otherNode = checkAndAddNode(grid, allNodes, x, y)
            if (otherNode) {
                node.outgoing.push(otherNode)
            } 
        }

        // right
        // i, j+1
        x = i
        y = j+1
        if (0 <= x && x < numRows) {
            let otherNode = checkAndAddNode(grid, allNodes, x, y)
            if (otherNode) {
                node.outgoing.push(otherNode)
            }
        }
    }
}

log(allNodes)
log(allNodes.size)


// conduct a depth first search to find the shortest route to the destination cell

log('===========================================')
log('===========================================')
log('===========================================')
log('===========================================')

let dfs = function(node) {
    let visited = new Set()
    let queue = [] // push and shift to enqueue and dequeue
    queue.push(node)

    while(queue.length > 0) {
        let current = queue.shift()
        if(!visited.has(current)) {
            log(current.x + ' ' + current.y + ' >>> ' + current.stepsToHere)
            visited.add(current)
            if(current.target) break
            for(let i = 0; i < current.outgoing.length; i++) {
                // enqueue
                current.outgoing[i].stepsToHere = current.stepsToHere + 1
                queue.push(current.outgoing[i])
            }
        }
    }
    // console.log(counter)
}

dfs(root)