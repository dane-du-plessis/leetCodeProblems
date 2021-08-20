/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  private int target;
  private List<List<Integer>> paths;
  public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
      this.target = targetSum;
      this.paths = new ArrayList<>();
      traverse(root, new ArrayList<Integer>());
      return this.paths;
  }
  private void traverse(TreeNode root, List<Integer> path) {
      if(root == null) return;
      path.add(root.val);
      if(root.left == null && (root.right == null)) {
          if(sum(path) == this.target) paths.add(path);
          return;
      }
      List<Integer> pathL = new ArrayList<>();
      List<Integer> pathR = new ArrayList<>();
      pathL.addAll(path);
      pathR.addAll(path);
      traverse(root.left, pathL);
      traverse(root.right, pathR);
  }
  private int sum(List<Integer> path) {
      int sum = 0;
      for(Integer i : path) sum += i;
      return sum;
  }
}