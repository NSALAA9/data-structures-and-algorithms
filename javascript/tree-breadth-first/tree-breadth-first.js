class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(tree) {
  if (!tree) return [];

  const result = [];
  const queue = [tree];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}
module.exports = { Node, breadthFirst };

// Example usage:
const example = new Node(2);
example.left = new Node(7);
example.right = new Node(5);
example.left.left = new Node(2);
example.left.right = new Node(6);
example.right.right = new Node(9);
example.left.right.left = new Node(5);
example.left.right.right = new Node(11);
example.right.right.left = new Node(4);

console.log(breadthFirst(example)); // Output: [2, 7, 5, 2, 6, 9, 5, 11, 4]
