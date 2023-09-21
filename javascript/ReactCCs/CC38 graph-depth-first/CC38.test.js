// graph.test.js

const { Vertex, Edge, Graph } = require('./CC38');

describe('Graph', () => {
  let graph;
  let vertexA;
  let vertexB;
  let vertexC;

  beforeEach(() => {
    graph = new Graph();
    vertexA = new Vertex('A');
    vertexB = new Vertex('B');
    vertexC = new Vertex('C');
  });

  test('should add vertices correctly', () => {
    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    expect([...graph.getVertices()]).toEqual([vertexA, vertexB]);
  });

  test('should add directed edges correctly', () => {
    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addDirectedEdge(vertexA, vertexB, 2);
    const neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toEqual([vertexB]);
  });

  test('should perform depth-first traversal correctly', () => {
    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addVertex(vertexC);

    graph.addDirectedEdge(vertexA, vertexB);
    graph.addDirectedEdge(vertexA, vertexC);

    const dfsResult = graph.depthFirst(vertexA);
    const expectedOrder = [vertexA, vertexB, vertexC];
    expect(dfsResult).toEqual(expectedOrder);
  });
});
