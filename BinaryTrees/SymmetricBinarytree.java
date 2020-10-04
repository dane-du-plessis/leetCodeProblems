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
    boolean answer = true;
    public boolean isSymmetric(TreeNode root) {
        // iterative approach: Do a level-order traversal. Assert that each level is a palindrome. 
        // recursive approach: Clone the tree. Invert the clone. Compare with the original.
        // recursive approach: Traverse subtrees in lockstep, the left in-order, the right in reverse in-order sequence. Compare node values.
        if(root == null) return true;
        symmetricLockstepTraversal(root.left, root.right);
        return answer;
    }
    
    private void symmetricLockstepTraversal(TreeNode leftRoot, TreeNode rightRoot) {
        if (leftRoot == null && rightRoot == null) {
            return;
        }    
        if (leftRoot != null && rightRoot == null || leftRoot == null && rightRoot != null) {
            answer = false;
            return;
        }
        if (leftRoot.val != rightRoot.val) {
            answer = false;
            return;
        }
        symmetricLockstepTraversal(leftRoot.left, rightRoot.right);
        symmetricLockstepTraversal(leftRoot.right, rightRoot.left);
    }
}