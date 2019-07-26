// const chalk = require('chalk')
const Grids = require('./Grids')
const log = console.log;

const grid = Grids.grid2;

log(grid)

let enqueueSurrounding = function(queue, grid, depthGrid, x, y) {
    let numRows = grid.length
    let numCols = grid[0].length
    let i = x
    let j = y

    //up
    i = x-1
    if(0 <= i && i < numRows && grid[i][j] !== -1) {
        queue.push([i,j])
        depthGrid[i][j] = depthGrid[x][y] +1 
    }

    //down
    i = x+1
    if(0 <= i && i < numRows && grid[i][j] !== -1) {
        queue.push([i,j])
        depthGrid[i][j] = depthGrid[x][y] +1 
    }

    //left
    i = x
    j = y-1
    if(0 <= j && j < numCols && grid[i][j] !== -1) {
        queue.push([i,j])
        depthGrid[i][j] = depthGrid[x][y] +1 
    }

    //right
    i = x
    j = y+1
    if(0 <= j && j < numCols && grid[i][j] !== -1) {
        queue.push([i,j])
        depthGrid[i][j] = depthGrid[x][y] +1 
    }
}

let bfs = function(grid) {
    let depthGrid = grid.map(x => x.map(y => y)) // deep copy this sucker, forget about slice()
    depthGrid[0][0] = 0
    let queue = []
    queue.push([0,0]) // [x,y] - cell to visit next
    let x, y

    while(queue.length > 0) {
        let current = queue.shift() // dequeue an element

        x = current[0]
        y = current[1]

        log('current ' + current + ' -> ' + grid[x][y])
        if(grid[x][y] === 0 || grid[x][y] === 9) {
            // log("adding")
            if(grid[x][y] === 9) {
                log('found target at (' + x + ' ,' + y + ')  -> DEPTH: ' + depthGrid[x][y])
                break
            }

            // visit the square
            grid[x][y] = -1

            // enqueue surrounding available cells
            enqueueSurrounding(queue, grid, depthGrid, x, y)
        }
        log(depthGrid)
    }
}

bfs(grid)