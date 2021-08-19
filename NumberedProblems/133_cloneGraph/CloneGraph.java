/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class CloneGraph {
  public Node cloneGraph(Node node) {
      if(node == null) return null;
      LinkedList<Node> queue = new LinkedList<>();
      Map<Node, Node> visited = new HashMap<>();
      Node one = new Node(node.val);
      queue.add(node);
      visited.put(node, one);
      while(!queue.isEmpty()) {
          Node next = queue.remove();
          Node clone = visited.get(next);
          for(Node n : next.neighbors) {
              if(!visited.containsKey(n)){
                  queue.add(n);
                  visited.put(n, new Node(n.val));
              }
              clone.neighbors.add(visited.get(n));
          }
      }
      return one;
  }
}
