// There's a robot at the top left corner of an m X n grid. the robot can only move right and down.
// How many different ways can the robot reach the bottom right corner?
// Imagine certain cells are off limits. How many ways are there now?


// The gird is an m x n grid. To get from position (0,0) to (m,n)
// Solution: create an array, which will contain rights (1) and downs (0).
// In total there will be m + n elements in the array. 
// Recursively build up the entire set of decisions. 

let findPaths = function(grid) {
    let paths = new Set();
    let path = []
    m = grid.length
    n = grid[0].length
    findPathsRecursively(m-1, n-1, path, grid, paths)
    paths.size === 1 ?
        console.log('There is ' + paths.size + ' route.') :
        console.log('There are ' + paths.size + ' routes.')
}

let findPathsRecursively = function(m, n, path, grid, paths) {
    if(m == 0 || n == 0) {
        // add as many zeros as needed
        while (m > 0) {
            m--
            if (grid[m][n] !== 0) break
            path.unshift("D")
        }
        while (n > 0) {
            n--
            if (grid[m][n] !== 0) break
            path.unshift("R")
        }
        if(n === 0 && m === 0){
            console.log("Path: " + path)
            paths.add(path)
        } else {
            console.log("No path.")
        }
        return
    }
    
    if (grid[m-1][n] === 0) {
        findPathsRecursively(m-1, n, ["D"].concat(path), grid, paths)
    }
    if (grid[m][n-1] === 0) {
        findPathsRecursively(m,n-1, ["R"].concat(path), grid, paths)
    }
}

grid = [
    [0,0]
]
findPaths(grid)

grid = [
    [0]
]
findPaths(grid)

grid = [
    [0,1,0,0,0,0],
    [0,0,0,0,1,1],
    [0,1,1,0,0,1],
    [0,1,1,1,0,0]
]
findPaths(grid)