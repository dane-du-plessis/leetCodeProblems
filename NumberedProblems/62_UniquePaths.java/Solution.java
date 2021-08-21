class Solution {
  public int uniquePaths(int m, int n) {
      int[][] grid = new int[m][n]; // m rows, n columns
      for(int j = m-1; j >=0; j--) {
          for(int i = n-1; i >= 0; i--) {
              if(i == n-1 && (j == m-1)) {
                  grid[j][i] = 1;
                  continue;
              }
              grid[j][i] = getGrid(grid, i+1, j) + getGrid(grid, i, j+1);
          }
      }
      return grid[0][0];
  }
  private int getGrid(int[][] grid, int x, int y){
      if(x > grid[0].length - 1 || (y > grid.length - 1) ) return 0;
      return grid[y][x];
  }
}