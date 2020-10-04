import java.util.ArrayList;
import java.util.List;

public class Serialization {
    private String convertToString(List<TreeNode> result) {
        StringBuilder sb = new StringBuilder();
        sb.append('[');
        for (int i = 0; i < result.size(); i++) {
            TreeNode next = result.get(i);
            if (next == null) {
                sb.append("null");
            } else {
                sb.append(next.val);
            }
            if (i == result.size() - 1) {
                continue;
            } else {
                sb.append(',');
            }
        }
        sb.append(']');

        return sb.toString();
    }

    private void serializeTree(List<TreeNode> parentRow, List<TreeNode> result) {
        ArrayList<TreeNode> childRow = new ArrayList<TreeNode>();
        ArrayList<TreeNode> nextResultRow = new ArrayList<TreeNode>();

        boolean allNulls = true;
        boolean nonNullChild = false;
        int lastNonNull = 0;
        for (int i = 0; i < parentRow.size(); i++) {
            TreeNode next = parentRow.get(i);
            if (next != null) {
                allNulls = false;
                lastNonNull = i;
            }
            nextResultRow.add(next);
            if (next == null) {
                childRow.add(null);
                childRow.add(null);
            } else {
                if (next.left != null) {
                    nonNullChild = true;
                }
                childRow.add(next.left);
                if (next.right != null) {
                    nonNullChild = true;
                }
                childRow.add(next.right);
            }
        }

        if (allNulls) {
            return;
        }

        if (nonNullChild) {
            result.addAll(nextResultRow);
        } else {
            for (int i = 0; i <= lastNonNull; i++) {
                result.add(nextResultRow.get(i));
            }
            return;
        }
        serializeTree(childRow, result);
    }

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null)
            return "[]";
        List<TreeNode> result = new ArrayList<TreeNode>();
        List<TreeNode> parentRow = new ArrayList<TreeNode>();
        parentRow.add(root);
        serializeTree(parentRow, result);
        return convertToString(result);
    }

    private ArrayList<TreeNode> splitToNodes(String data) {
        ArrayList<TreeNode> nodes = new ArrayList<TreeNode>();
        data = data.subSequence(1, data.length() - 1).toString();
        System.out.println(data);
        String[] dataArr = data.split(",");
        if(dataArr[0].equals("")) {
            return nodes;
        }
        for (int i = 0; i < dataArr.length; i++) {
            System.out.println(dataArr[i]);
            if (dataArr[i].equals("null")) {
                nodes.add(null);
                continue;
            }
            nodes.add(new TreeNode(Integer.parseInt(dataArr[i])));
        }
        return nodes;
    }

    private void buildTree(int index, ArrayList<TreeNode> row, ArrayList<TreeNode> nodes) {
        if (nodes.size() - 1 < index)
            return;
        ArrayList<TreeNode> nextRow = new ArrayList<TreeNode>();
        for (int i = 0; i < row.size(); i++) {
            TreeNode next = row.get(i);
            TreeNode left, right;
            left = nodes.get(index);
            if (next != null)
                next.left = left;
            nextRow.add(left);
            index++;
            if (index + 1 > nodes.size())
                return;
            right = nodes.get(index);
            if (next != null)
                next.right = right;
            nextRow.add(right);
            index++;
            if (index + 1 > nodes.size())
                return;
        }
        buildTree(index, nextRow, nodes);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        ArrayList<TreeNode> nodes = splitToNodes(data);
        if (nodes.size() == 0)
            return null;
        ArrayList<TreeNode> row = new ArrayList<TreeNode>();
        TreeNode root = nodes.get(0);
        row.add(root);
        buildTree(1, row, nodes);
        return root;
    }

    public static void main(String[] args) {
        TreeBuilder builder = new TreeBuilder();
        Serialization sol = new Serialization();
        System.out.println(sol.serialize(builder.simpleTree()));
        System.out.println(sol.serialize(null));
        System.out.println(sol.serialize(builder.longTree()));
        String test = sol.serialize(builder.longTree());
        TreeNode root = sol.deserialize(test);
        System.out.println(sol.serialize(root));
        System.out.println(sol.deserialize("[]"));
    }

}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));