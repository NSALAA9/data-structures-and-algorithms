// Import the required classes and function
const { Node, breadthFirst } = require('./tree-breadth-first');

// Test 1: Breadth-first traversal on an empty tree
test('Breadth-first traversal on an empty tree', () => {
  const tree = null;
  const expected = [];
  const result = breadthFirst(tree);
  expect(result).toEqual(expected);
});

// Test 2: Breadth-first traversal on a tree with one node
test('Breadth-first traversal on a tree with one node', () => {
  const tree = new Node(5);
  const expected = [5];
  const result = breadthFirst(tree);
  expect(result).toEqual(expected);
});

// Test 3: Breadth-first traversal on the example tree
test('Breadth-first traversal on the example tree', () => {
  const example = new Node(2);
  example.left = new Node(7);
  example.right = new Node(5);
  example.left.left = new Node(2);
  example.left.right = new Node(6);
  example.right.right = new Node(9);
  example.left.right.left = new Node(5);
  example.left.right.right = new Node(11);
  example.right.right.left = new Node(4);

  const expected = [2, 7, 5, 2, 6, 9, 5, 11, 4];
  const result = breadthFirst(example);
  expect(result).toEqual(expected);
});
