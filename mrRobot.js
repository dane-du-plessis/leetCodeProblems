// Given an m x n grid, find the number of ways a robot can move left, right, up, down to reach a destination cell at i,j starting from 0,0. 
// Some cells are not navigable and marked 1. The destination cell is marked 9. Navigable cells are marked 0.
// Find:
// 1. The minimum number of steps required to reach the destination cell from the origin.
// 2. The exact path that is the sortest route.
// 3. The maximum number of steps required to reach the destination cell from the origin.
// 4. The longest possible path.


let grid = [
    [0,0,0,0,0,0],
    [0,1,1,1,1,0],
    [0,1,9,0,1,0],
    [0,1,1,0,0,0],
    [0,0,0,0,0,0]
];

// let grid = [
//     [0,0,0],
//     [0,1,1],
//     [0,0,9]
// ];

// let grid = [
//     [0,0,0],
//     [0,0,9]
// ];

let numRows = grid.length;
let numCols = grid[0].length;

