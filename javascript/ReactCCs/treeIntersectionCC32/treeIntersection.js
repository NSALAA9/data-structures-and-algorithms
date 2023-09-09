// treeIntersection.js

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
function traverseAndPopulate(node, hashmap) {
  if (node) {
    hashmap[node.value] = true;
    traverseAndPopulate(node.left, hashmap);
    traverseAndPopulate(node.right, hashmap);
  }
}
  
function traverseAndCheck(node, valuesHashmap, commonValues) {
  if (node) {
    if (valuesHashmap[node.value]) {
      commonValues.push(node.value);
    }
    traverseAndCheck(node.left, valuesHashmap, commonValues);
    traverseAndCheck(node.right, valuesHashmap, commonValues);
  }
}
  
function treeIntersection(tree1, tree2) {
  const commonValues = [];
  
  // Populate the Hashmap with values from the first tree
  const valuesHashmap = {};
  traverseAndPopulate(tree1, valuesHashmap);
  
  // Check values in the second tree and add common values to the result array
  traverseAndCheck(tree2, valuesHashmap, commonValues);
  
  return commonValues;
}
  
module.exports = {
  TreeNode,
  treeIntersection,
  traverseAndPopulate,
  traverseAndCheck,
};

const tree1 = new TreeNode(100);
tree1.left = new TreeNode(160);
tree1.right = new TreeNode(350);
tree1.left.left = new TreeNode(125);
tree1.left.right = new TreeNode(175);
tree1.right.left = new TreeNode(200);
tree1.right.right = new TreeNode(500);

const tree2 = new TreeNode(125);
tree2.left = new TreeNode(160);
tree2.right = new TreeNode(200);

const result = treeIntersection(tree1, tree2);
console.log(result); // Output: [160, 125, 200]
