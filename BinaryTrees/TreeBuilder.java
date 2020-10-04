public class TreeBuilder {
    public TreeBuilder() {};

    public TreeNode simpleTree() {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        return root;
    }

    public TreeNode longTree() {
        TreeNode root = new TreeNode(0);
        TreeNode next = root;
        for(int i = 1; i <= 4000 ; i++) {
            next.left = new TreeNode(i);
            next.right = new TreeNode(i);
            next = next.left;
        }
        return root;
    }
}