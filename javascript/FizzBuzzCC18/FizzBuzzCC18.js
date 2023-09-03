
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class K_ary {
  constructor() {
    this.root = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.children.push(newNode);
    }
  }

  fizzBuzzTree(tree) {
    if (!tree.root) {
      // Handle the case of an empty tree
      return tree;
    }

    let queue = [];
    queue.push(tree.root);

    while (queue.length > 0) {
      let remove = queue.shift();
      remove.value % 3 === 0 && remove.value % 5 === 0
        ? (remove.value = 'fizzbuzz')
        : remove.value % 3 === 0? (remove.value = 'fizz'): remove.value % 5 === 0 ? (remove.value = 'buzz'): (remove.value = `${remove.value}`);

      if (remove.children.length > 0) {
        queue.push(...remove.children);
      }
    }
    return tree;
  }
}

module.exports = { Node, K_ary };
