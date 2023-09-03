const { BinaryTree, TreeNode } = require('./TreeMax'); 
describe('BinaryTree', () => {
  describe('findMaximumValue', () => {
    test('should throw an error for an empty tree', () => {
      const emptyTree = new BinaryTree();
      expect(() => emptyTree.findMaximumValue()).toThrow('Binary Tree is empty.');
    });

    test('should find the maximum value in a tree with one node', () => {
      const treeWithOneNode = new BinaryTree();
      treeWithOneNode.root = new TreeNode(5);
      expect(treeWithOneNode.findMaximumValue()).toBe(5);
    });

    test('should find the maximum value in a balanced tree', () => {
      const balancedTree = new BinaryTree();
      balancedTree.root = new TreeNode(5);
      balancedTree.root.left = new TreeNode(3);
      balancedTree.root.right = new TreeNode(7);
      expect(balancedTree.findMaximumValue()).toBe(7);
    });

    test('should find the maximum value in an unbalanced tree', () => {
      const unbalancedTree = new BinaryTree();
      unbalancedTree.root = new TreeNode(10);
      unbalancedTree.root.left = new TreeNode(5);
      unbalancedTree.root.left.left = new TreeNode(2);
      unbalancedTree.root.left.right = new TreeNode(8);
      expect(unbalancedTree.findMaximumValue()).toBe(10);
    });

    test('should find the maximum value in a tree with negative values', () => {
      const treeWithNegativeValues = new BinaryTree();
      treeWithNegativeValues.root = new TreeNode(-5);
      treeWithNegativeValues.root.left = new TreeNode(-10);
      treeWithNegativeValues.root.right = new TreeNode(-3);
      expect(treeWithNegativeValues.findMaximumValue()).toBe(-3);
    });
  });
});
