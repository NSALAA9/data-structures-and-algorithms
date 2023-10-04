const { TreeNode, totalUsage } = require('./CC43');

describe('totalUsage', () => {
  it('should return 0 for an empty tree', () => {
    const root = null;
    const result = totalUsage(root);
    expect(result).toEqual(0);
  });

  it('should calculate the total water usage for a simple tree', () => {
    const root = new TreeNode(10);
    const result = totalUsage(root);
    expect(result).toEqual(10);
  });

  it('should calculate the total water usage for a complex tree', () => {
    const root = new TreeNode(35,
      new TreeNode(41, new TreeNode(33), new TreeNode(52)),
      new TreeNode(59, new TreeNode(30), new TreeNode(44))
    );
    const result = totalUsage(root);
    expect(result).toEqual(294);
  });

});
