class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      throw new Error('Both vertices must exist in the graph.');
    }

    this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Vertex does not exist in the graph.');
    }

    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }
}
module.exports = Graph;


// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 2);
graph.addEdge('B', 'C', 3);

console.log(graph.getVertices()); // Output: ['A', 'B', 'C']
console.log(graph.getNeighbors('B')); // Output: [{ node: 'A', weight: 2 }, { node: 'C', weight: 3 }]
console.log(graph.size()); // Output: 3

