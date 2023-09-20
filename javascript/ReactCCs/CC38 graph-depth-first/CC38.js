class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
  
class Graph {
  constructor() {
    this.nodes = [];
  }
  
  addNode(value) {
    this.nodes.push(new Node(value));
  }
  
  addEdge(node1, node2) {
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
  }
  
  depthFirstPreOrder(startNode) {
    const visited = new Set();
    const result = [];
  
    function dfs(node) {
      if (!visited.has(node)) {
        visited.add(node);
        result.push(node.value);
  
        // Define the desired order of traversal (A, B, C, G, D, E, H, F)
        const orderedNeighbors = node.neighbors.sort((a, b) =>
          a.value.localeCompare(b.value)
        );
  
        orderedNeighbors.forEach((neighbor) => {
          dfs(neighbor);
        });
      }
    }
  
    dfs(startNode);
    return result;
  }
}
  
// Create the graph and perform depth-first pre-order traversal
const graph = new Graph();
const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const G = new Node("G");
const H = new Node("H");
  
graph.addNode(A);
graph.addNode(B);
graph.addNode(C);
graph.addNode(D);
graph.addNode(E);
graph.addNode(F);
graph.addNode(G);
graph.addNode(H);
  
graph.addEdge(A, B);
graph.addEdge(A, C);
graph.addEdge(B, D);
graph.addEdge(B, E);
graph.addEdge(C, F);
graph.addEdge(C, G);
graph.addEdge(G, H);
  
const traversalResult = graph.depthFirstPreOrder(A);
console.log(traversalResult.join(", "));
  