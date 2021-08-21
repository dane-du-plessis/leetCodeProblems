class Solution {
  public int uniquePathsWithObstacles(int[][] grid) {
      if(grid[grid.length-1][grid[0].length-1] == 1) return 0;
      if(grid[0][0] == 1) return 0;
      for(int j = 0; j < grid.length; j++)
          for(int i = 0; i < grid[0].length; i++)
              if(grid[j][i] == 1) grid[j][i] = -1;
      grid[grid.length-1][grid[0].length-1] = 1;
      for(int y = grid.length - 1; y >= 0; y--) {
          for(int x = grid[0].length - 1; x >= 0; x--) {
              if(y == grid.length - 1 && (x == grid[0].length - 1)) continue;
              if(grid[y][x] == -1) continue;
              grid[y][x] = getVal(grid, x+1, y) + getVal(grid, x, y+1);
          }
      }
      return grid[0][0];
  }
  private int getVal(int[][] grid, int x, int y){
      if(x > grid[0].length -1 || (y > grid.length-1)) return 0;
      if(grid[y][x] == -1) return 0;
      return grid[y][x];
  }
}