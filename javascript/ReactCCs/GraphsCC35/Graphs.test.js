const Graph = require('./Graphs');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', 2);
    graph.addEdge('B', 'C', 3);
  });

  it('should add vertices to the graph', () => {
    expect(graph.getVertices()).toEqual(['A', 'B', 'C']);
  });

  it('should add edges between vertices', () => {
    const neighbors = graph.getNeighbors('A');
    expect(neighbors).toContainEqual({ node: 'B', weight: 2 });
  });

  it('should return the size of the graph', () => {
    expect(graph.size()).toBe(3);
  });

  it('should throw an error when getting neighbors of a non-existent vertex', () => {
    expect(() => graph.getNeighbors('D')).toThrowError('Vertex does not exist in the graph.');
  });

  it('should throw an error when adding an edge between non-existent vertices', () => {
    expect(() => graph.addEdge('A', 'D')).toThrowError('Both vertices must exist in the graph.');
  });
});
