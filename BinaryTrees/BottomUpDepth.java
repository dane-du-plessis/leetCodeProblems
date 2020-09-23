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
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        int answer = findMaxDepth(root, 0);
        return answer;
    }
    private int findMaxDepth(TreeNode root, int depth) {
        if(root == null) return depth;
        if(root.left == null && root.right == null) {
            return depth + 1;
        }
        int left = findMaxDepth(root.left, depth);
        int right = findMaxDepth(root.right, depth);
        return left > right ? left + 1 : right + 1;
    }
}