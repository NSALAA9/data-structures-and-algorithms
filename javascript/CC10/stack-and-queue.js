// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     newNode.next = this.top;
//     this.top = newNode;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       throw new Error('Stack is empty');
//     }
//     const value = this.top.value;
//     this.top = this.top.next;
//     return value;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       throw new Error('Stack is empty');
//     }
//     return this.top.value;
//   }

//   isEmpty() {
//     return this.top === null;
//   }
// }
// class Queue {
//   constructor() {
//     this.front = null;
//   }

//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.front = newNode;
//     } else {
//       let current = this.front;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       throw new Error('Queue is empty');
//     }
//     const value = this.front.value;
//     this.front = this.front.next;
//     return value;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       throw new Error('Queue is empty');
//     }
//     return this.front.value;
//   }

//   isEmpty() {
//     return this.front === null;
//   }
// }

// module.exports = { Stack, Queue };


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
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }

    const dequeuedValue = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null; // If the queue becomes empty after dequeue
    }

    return dequeuedValue;
  }

  peek() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Stack, Queue };

