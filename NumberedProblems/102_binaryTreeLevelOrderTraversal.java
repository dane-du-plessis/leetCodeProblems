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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List result = new ArrayList<ArrayList<Integer>>();
        if (root == null) return result;
        List stack = new ArrayList<TreeNode>();
        stack.add(root);
        traverse(stack, result);
        return result;
    }
    
    private List<List<Integer>> traverse(List<TreeNode> stack, List<List<Integer>> result) {
        if (stack.isEmpty()) {
            return result;
        }
        
        List level = new ArrayList<Integer>();
        List newStack = new ArrayList<TreeNode>();
        TreeNode node;
        for(int i = 0; i < stack.size(); i++) {
            node = stack.get(i);
            level.add(node.val);
            
            if(node.left != null) {
                newStack.add(node.left);
            }
            
            if(node.right != null) {
                newStack.add(node.right);
            }
        }
        
        result.add(level);
        
        // recurse
        traverse(newStack, result);
        
        // return
        return result;
    }
}