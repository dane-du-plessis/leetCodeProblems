class Recursive {
  public int climbStairs(int n) {
      int[] memo = new int[n];
      return climb(0, memo, n);
  }
  private int climb(int current, int[] memo, int target) {
      if(current == target) return 1;
      if(current > target) return 0;
      
      int oneStep = 0;
      int twoStep = 0;
      
      if(current+1 < target && (memo[current+1] > 0)){
          oneStep = memo[current+1];
      } else {
          oneStep = climb(current+1, memo, target);
          if(current+1 < target) memo[current+1] = oneStep;
      }
      
      if(current+2 < target && (memo[current+2] > 0)){
          twoStep = memo[current+2];
      } else {
          twoStep = climb(current+2, memo, target);
          if(current+2 < target) memo[current+2] = twoStep;
      }
      memo[current] = oneStep + twoStep;
      return memo[current];
  }
}