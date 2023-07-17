'use strict';
const Node = require('./Node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-order: root >> left >> right
  preOrder() {
    let arr = [];
    const traversal = node => {
      arr.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }

  // Post-order: left >> right >> root
  postOrder() {
    let arr = [];
    const traversal = node => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      arr.push(node.value);
    };

    traversal(this.root);
    return arr;
  }

  // In-order: left >> root >> right
  inOrder() {
    let arr = [];
    const traversal = node => {
      if (node.left) traversal(node.left);
      arr.push(node.value);
      if (node.right) traversal(node.right);
    };

    traversal(this.root);
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break; // Exit the loop after inserting the new node
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break; // Exit the loop after inserting the new node
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

module.exports = BinarySearchTree;
