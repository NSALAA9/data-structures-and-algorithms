const Graph = require('./CC36'); // Replace with the actual file path

describe('Graph', () => {
  let graph;
  let pandora;
  let arendelle;
  let metroville;
  let monstroplolis;
  let narnia;
  let naboo;

  beforeEach(() => {
    graph = new Graph();
    pandora = graph.addNode("Pandora");
    arendelle = graph.addNode("Arendelle");
    metroville = graph.addNode("Metroville");
    monstroplolis = graph.addNode("Monstroplolis");
    narnia = graph.addNode("Narnia");
    naboo = graph.addNode("Naboo");

    graph.addEdge(pandora, arendelle);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstroplolis);
    graph.addEdge(monstroplolis, narnia);
    graph.addEdge(monstroplolis, naboo);
    graph.addEdge(metroville, naboo);
    graph.addEdge(narnia, naboo);
  });

  it('should perform breadth-first traversal from Pandora', () => {
    const result = graph.breadthFirst(pandora);
    expect(result).toEqual(["Pandora", "Arendelle", "Metroville", "Monstroplolis", "Narnia", "Naboo"]);
  });

  it('should perform breadth-first traversal from Narnia', () => {
    const result = graph.breadthFirst(narnia);
    expect(result).toEqual(["Narnia", "Monstroplolis", "Naboo", "Pandora", "Arendelle", "Metroville"]);
  });

  it('should perform breadth-first traversal from Metroville', () => {
    const result = graph.breadthFirst(metroville);
    expect(result).toEqual(["Metroville", "Arendelle", "Naboo", "Pandora", "Monstroplolis", "Narnia"]);
  });

  it('should handle disconnected nodes', () => {
    const atlantis = graph.addNode("Atlantis");
    const result = graph.breadthFirst(atlantis); // Traversing from a disconnected node.
    expect(result).toEqual(["Atlantis"]);
  });

  it('should return an empty array for an empty graph', () => {
    const emptyGraph = new Graph();
    const result = emptyGraph.breadthFirst(pandora);
    expect(result).toEqual([]);
  });
});
