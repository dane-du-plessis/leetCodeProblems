/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // row 0 to col n-0
  // row 1 to col n-1
  // row 2 to col n-2
  // row 3 to col n-3
  // row n to col n-n

  // find n
  const n = matrix.length - 1
  let a, b, a_, b_, temp1, temp2;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // i,j => j, n-i
      a = i; b = j;
      // console.log(v,a,b)
      console.log('===============')
      console.log(a,b)

      // 1
      _a = b
      _b = n - a
      temp1 = matrix[_a][_b] // second one
      matrix[_a][_b] = matrix[a][b]
      a = _a
      b = _b
      console.log(a,b)

      // 2 
      _a = b
      _b = n - a
      temp2 = matrix[_a][_b] // move ahead
      matrix[_a][_b] = temp1
      a = _a
      b = _b
      console.log(a,b)

      // 3
      _a = b
      _b = n - a
      temp1 = matrix[_a][_b] // move ahead
      matrix[_a][_b] = temp2
      a = _a
      b = _b
      console.log(a,b)

      // 4
      _a = b
      _b = n - a
      matrix[_a][_b] = temp1
    }
  }
};

/*

   1 2   3 1
   3 4   4 2

*/

// matrix = [[1,2],[3,4]]
// matrix = [[1,2,3],[4,5,6],[7,8,9]]
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// [[3,1],[4,2]]

rotate(matrix)
console.log(matrix)