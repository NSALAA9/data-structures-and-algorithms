class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.is_empty()) {
      const removedNode = this.top;
      this.top = this.top.next;
      return removedNode.value;
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    if (!this.is_empty()) {
      return this.top.value;
    } else {
      throw new Error('Stack is empty');
    }
  }

  is_empty() {
    return this.top === null;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.is_empty()) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);

    while (!this.stack2.is_empty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.is_empty()) {
      throw new Error('PseudoQueue is empty');
    }

    return this.stack1.pop();
  }
}
module.exports = {
  PseudoQueue,
};
