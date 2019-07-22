/**
 * A simple piece of code demonstrating a depth first traversal of a graph.
 */
 class Arc {
     constructor() {
        this.start = null;
        this.end = null;
     }
 }

 class GraphNode {
     constructor(name) {
        this.name = name;
        this.outgoing = [];
     }
 }

// construct a simple graph
let A = new GraphNode('A');
let B = new GraphNode('B');
let C = new GraphNode('C');
let D = new GraphNode('D');
let E = new GraphNode('E');
let F = new GraphNode('F');
let G = new GraphNode('G');
let H = new GraphNode('H');

A.outgoing.push(B);
A.outgoing.push(C);
A.outgoing.push(D);
B.outgoing.push(C);
C.outgoing.push(F);
D.outgoing.push(E);
E.outgoing.push(H);
F.outgoing.push(G);
G.outgoing.push(H);


 // traverse the nodes depth first starting at root
let dft = function(root){
    let visited = new Set();
    dftWorker(root, visited);
}

let dftWorker = function(node, visited) {
    if (visited.has(node)) {
        return;
    }
    visited.add(node);
    console.log(node.name);
    for (let i = 0; i < node.outgoing.length; i++) {
        dftWorker(node.outgoing[i], visited);
    }
}

dft(A);
