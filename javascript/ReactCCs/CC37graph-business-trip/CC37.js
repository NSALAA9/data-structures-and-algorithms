class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  addEdge(startVertex, endVertex, cost) {
    this.adjacencyList.get(startVertex).push({ vertex: endVertex, cost });
    this.adjacencyList.get(endVertex).push({ vertex: startVertex, cost });
  }
  
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
}
function businessTrip(graph, cities) {
  let totalCost = 0;
  
  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];
  
    const neighbors = graph.getNeighbors(currentCity);
  
    // Check if neighbors is defined
    if (!neighbors) {
      return null; // City not found in the graph
    }
  
    const directFlight = neighbors.find((neighbor) => neighbor.vertex === nextCity);
  
    if (!directFlight) {
      return null; // No direct flight available
    }
  
    totalCost += directFlight.cost;
  }
  
  return totalCost;
}
  
module.exports = {
  Graph,
  businessTrip,
};
// Example usage:
const cityGraph = new Graph();
  
cityGraph.addVertex("Metroville");
cityGraph.addVertex("Pandora");
cityGraph.addVertex("Arendelle");
cityGraph.addVertex("New Monstropolis");
cityGraph.addVertex("Naboo");
  
cityGraph.addEdge("Metroville", "Pandora", 82);
cityGraph.addEdge("Arendelle", "New Monstropolis", 42);
cityGraph.addEdge("New Monstropolis", "Naboo", 73);
  
const trip1 = ["Metroville", "Pandora"];
const trip2 = ["Arendelle", "New Monstropolis", "Naboo"];
const trip3 = ["Naboo", "Pandora"];
const trip4 = ["Narnia", "Arendelle", "Naboo"];
  
console.log(businessTrip(cityGraph, trip1)); // Output: 82
console.log(businessTrip(cityGraph, trip2)); // Output: 115
console.log(businessTrip(cityGraph, trip3)); // Output: null
console.log(businessTrip(cityGraph, trip4)); // Output: null
  
