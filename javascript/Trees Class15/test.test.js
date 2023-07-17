// const BinarySearchTree = require('./Binary Tree');
// //const Node = require('./Node');

// // Test 1: Can successfully instantiate an empty tree
// const tree1 = new BinarySearchTree();
// console.log(tree1.root); // Expected output: null

// // Test 2: Can successfully instantiate a tree with a single root node
// const tree2 = new BinarySearchTree();
// tree2.add(10);
// console.log(tree2.root.value); // Expected output: 10

// // Test 3: For a Binary Search Tree, can successfully add a left child and right child properly to a node
// const tree3 = new BinarySearchTree();
// tree3.add(10);
// tree3.add(5);
// tree3.add(15);
// console.log(tree3.root.left.value); // Expected output: 5
// console.log(tree3.root.right.value); // Expected output: 15

// // Test 4: Can successfully return a collection from a pre-order traversal
// const tree4 = new BinarySearchTree();
// tree4.add(10);
// tree4.add(5);
// tree4.add(15);
// tree4.add(3);
// tree4.add(7);
// tree4.add(12);
// tree4.add(18);
// console.log(tree4.preOrder()); // Expected output: [10, 5, 3, 7, 15, 12, 18]

// // Test 5: Can successfully return a collection from an in-order traversal
// const tree5 = new BinarySearchTree();
// tree5.add(10);
// tree5.add(5);
// tree5.add(15);
// tree5.add(3);
// tree5.add(7);
// tree5.add(12);
// tree5.add(18);
// console.log(tree5.inOrder()); // Expected output: [3, 5, 7, 10, 12, 15, 18]

// // Test 6: Can successfully return a collection from a post-order traversal
// const tree6 = new BinarySearchTree();
// tree6.add(10);
// tree6.add(5);
// tree6.add(15);
// tree6.add(3);
// tree6.add(7);
// tree6.add(12);
// tree6.add(18);
// console.log(tree6.postOrder()); // Expected output: [3, 7, 5, 12, 18, 15, 10]

// // Test 7: Returns true/false for the contains method, given an existing or non-existing node value
// const tree7 = new BinarySearchTree();
// tree7.add(10);
// tree7.add(5);
// tree7.add(15);
// console.log(tree7.contains(15)); // Expected output: true
// console.log(tree7.contains(8)); // Expected output: false



const BinarySearchTree = require('./Binary Tree');
const assert = require('assert');

describe('BinarySearchTree', () => {
  it('should successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    assert.strictEqual(tree.root, null);
  });

  it('should successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    assert.strictEqual(tree.root.value, 10);
  });

  it('should add a left child and right child properly to a node', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    assert.strictEqual(tree.root.left.value, 5);
    assert.strictEqual(tree.root.right.value, 15);
  });

  it('should return a collection from a pre-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);
    assert.deepStrictEqual(tree.preOrder(), [10, 5, 3, 7, 15, 12, 18]);
  });

  it('should return a collection from an in-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);
    assert.deepStrictEqual(tree.inOrder(), [3, 5, 7, 10, 12, 15, 18]);
  });

  it('should return a collection from a post-order traversal', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);
    assert.deepStrictEqual(tree.postOrder(), [3, 7, 5, 12, 18, 15, 10]);
  });

  it('should return true or false for the contains method, given an existing or non-existing node value', () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    assert.strictEqual(tree.contains(15), true);
    assert.strictEqual(tree.contains(8), false);
  });
});
