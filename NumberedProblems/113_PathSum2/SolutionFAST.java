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
      traverse(root, new ArrayList<Integer>(), 0);
      return this.paths;
  }
  private void traverse(TreeNode root, ArrayList<Integer> path, int currentSum) {
      if(root == null) return;
      path.add(root.val);
      currentSum += root.val;
      if(root.left == null && (root.right == null)) {
          if(currentSum == this.target) {
              paths.add(new ArrayList<Integer>(path));
          } 
      }
      traverse(root.left, path, currentSum);
      traverse(root.right, path, currentSum);
      path.remove(path.size()-1);
  }
}