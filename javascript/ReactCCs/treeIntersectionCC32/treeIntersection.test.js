// treeIntersection.test.js

const { TreeNode, treeIntersection } = require('./treeIntersection');
const { expect } = require('chai');

describe('treeIntersection', () => {
  it('should return an array of common values between two trees', () => {
    // Create tree1
    const tree1 = new TreeNode(100);
    tree1.left = new TreeNode(160);
    tree1.right = new TreeNode(350);
    tree1.left.left = new TreeNode(125);
    tree1.left.right = new TreeNode(175);
    tree1.right.left = new TreeNode(200);
    tree1.right.right = new TreeNode(500);

    // Create tree2
    const tree2 = new TreeNode(125);
    tree2.left = new TreeNode(160);
    tree2.right = new TreeNode(200);

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.have.members([160, 125, 200]);

  });

  it('should handle empty trees', () => {
    // Create empty trees
    const tree1 = null;
    const tree2 = null;

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.deep.equal([]);
  });

  it('should handle trees with no common values', () => {
    // Create tree1 with values [1, 2, 3]
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    // Create tree2 with values [4, 5, 6]
    const tree2 = new TreeNode(4);
    tree2.left = new TreeNode(5);
    tree2.right = new TreeNode(6);

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.deep.equal([]);
  });

  it('should handle trees with duplicate common values', () => {
    // Create tree1 with values [1, 2, 3, 4, 5]
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);
    tree1.left.left = new TreeNode(4);
    tree1.left.right = new TreeNode(5);

    // Create tree2 with values [2, 4, 6, 8, 10]
    const tree2 = new TreeNode(2);
    tree2.left = new TreeNode(4);
    tree2.right = new TreeNode(6);
    tree2.left.left = new TreeNode(8);
    tree2.left.right = new TreeNode(10);

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.deep.equal([2, 4]);
  });

  it('should handle trees with negative values', () => {
    // Create tree1 with negative values [-1, -2, -3, -4, -5]
    const tree1 = new TreeNode(-1);
    tree1.left = new TreeNode(-2);
    tree1.right = new TreeNode(-3);
    tree1.left.left = new TreeNode(-4);
    tree1.left.right = new TreeNode(-5);

    // Create tree2 with negative values [-2, -4, -6, -8, -10]
    const tree2 = new TreeNode(-2);
    tree2.left = new TreeNode(-4);
    tree2.right = new TreeNode(-6);
    tree2.left.left = new TreeNode(-8);
    tree2.left.right = new TreeNode(-10);

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.deep.equal([-2, -4]);
  });


  it('should handle trees with single nodes', () => {
    // Create tree1 with a single node
    const tree1 = new TreeNode(42);

    // Create tree2 with a single node
    const tree2 = new TreeNode(42);

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.deep.equal([42]);
  });

  it('should handle trees with only one common value', () => {
    // Create tree1 with values [1, 2, 3]
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    // Create tree2 with a single common value
    const tree2 = new TreeNode(2);

    // Perform the intersection
    const result = treeIntersection(tree1, tree2);

    // Verify the result
    expect(result).to.deep.equal([2]);
  });

});
