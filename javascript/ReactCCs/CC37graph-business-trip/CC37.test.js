const { Graph, businessTrip } = require('./CC37'); 

describe('businessTrip', () => {
  let cityGraph;

  beforeEach(() => {
    cityGraph = new Graph();
    cityGraph.addVertex("Metroville");
    cityGraph.addVertex("Pandora");
    cityGraph.addVertex("Arendelle");
    cityGraph.addVertex("New Monstropolis");
    cityGraph.addVertex("Naboo");

    cityGraph.addEdge("Metroville", "Pandora", 82);
    cityGraph.addEdge("Arendelle", "New Monstropolis", 42);
    cityGraph.addEdge("New Monstropolis", "Naboo", 73);
  });

  it('should calculate the cost of a valid trip', () => {
    const trip = ["Metroville", "Pandora"];
    expect(businessTrip(cityGraph, trip)).toBe(82);
  });

  it('should calculate the cost of another valid trip', () => {
    const trip = ["Arendelle", "New Monstropolis", "Naboo"];
    expect(businessTrip(cityGraph, trip)).toBe(115);
  });

  it('should return null for a trip with no direct flight', () => {
    const trip = ["Naboo", "Pandora"];
    expect(businessTrip(cityGraph, trip)).toBeNull();
  });

  it('should return null for an invalid trip', () => {
    const trip = ["Narnia", "Arendelle", "Naboo"];
    expect(businessTrip(cityGraph, trip)).toBeNull();
  });
});
