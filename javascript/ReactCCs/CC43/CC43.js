class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function totalUsage(root) {
  if (root === null) {
    return 0;
  }
    
  // Calculate the total usage for the current node
  let nodeTotal = root.value;
    
  // Calculate the total usage for the left and right subtrees
  let leftTotal = totalUsage(root.left);
  let rightTotal = totalUsage(root.right);
    
  // Return the sum of the current node's usage and the total usage of its children
  return nodeTotal + leftTotal + rightTotal;
}

// Example usage:
// Construct the binary tree as described in the prompt
const root = new TreeNode(35,
  new TreeNode(41, new TreeNode(33), new TreeNode(52)),
  new TreeNode(59, new TreeNode(30), new TreeNode(44)));

// Calculate the total water usage
const result = totalUsage(root);
console.log(result);  // Output: 294

module.exports = { TreeNode, totalUsage };
