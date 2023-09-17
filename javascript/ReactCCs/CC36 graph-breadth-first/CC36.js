// Define a class for representing a Node in the graph
class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
    
// Define a Graph class
class Graph {
  constructor() {
    this.nodes = [];
  }
    
  // Method to add a node to the graph
  addNode(value) {
    const newNode = new Node(value);
    this.nodes.push(newNode);
    return newNode;
  }
    
  // Method to add an edge between two nodes
  addEdge(node1, node2) {
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
  }
    
  // Method for breadth-first traversal
  breadthFirst(startNode) {
    if (this.nodes.length === 0) {
      return [];
    }
  
    const visited = new Set();
    const queue = [startNode];
    const result = [];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
  
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode.value);
  
        currentNode.neighbors.forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
    }
  
    return result;
  }
}
module.exports = Graph;


// Create a new graph instance
const graph = new Graph();

// Create nodes for different locations in the graph
const pandora = graph.addNode("Pandora");
const arendelle = graph.addNode("Arendelle");
const metroville = graph.addNode("Metroville");
const monstroplolis = graph.addNode("Monstroplolis");
const narnia = graph.addNode("Narnia");
const naboo = graph.addNode("Naboo");

// Add edges to connect the nodes
graph.addEdge(pandora, arendelle);
graph.addEdge(arendelle, metroville);
graph.addEdge(arendelle, monstroplolis);
graph.addEdge(monstroplolis, narnia);
graph.addEdge(monstroplolis, naboo);
graph.addEdge(metroville, naboo);
graph.addEdge(narnia, naboo);

// Perform breadth-first traversal starting from 'Pandora'
const resultFromPandora = graph.breadthFirst(pandora);
console.log("Breadth-First Traversal from Pandora:", resultFromPandora);
// Output: ["Pandora", "Arendelle", "Metroville", "Monstroplolis", "Narnia", "Naboo"]

// Perform breadth-first traversal starting from 'Narnia'
const resultFromNarnia = graph.breadthFirst(narnia);
console.log("Breadth-First Traversal from Narnia:", resultFromNarnia);
// Output: ["Narnia", "Monstroplolis", "Naboo", "Pandora", "Arendelle", "Metroville"]

// Perform breadth-first traversal starting from 'Metroville'
const resultFromMetroville = graph.breadthFirst(metroville);
console.log("Breadth-First Traversal from Metroville:", resultFromMetroville);
// Output: ["Metroville", "Arendelle", "Naboo", "Pandora", "Monstroplolis", "Narnia"]
