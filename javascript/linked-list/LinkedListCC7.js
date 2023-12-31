'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    if (!this.head) {
      throw new Error('Empty linked list');
    }

    if (k <= 0) {
      throw new Error('k must be a positive integer');
    }

    let p1 = this.head;
    let p2 = this.head;

    // Move p2 k nodes ahead
    for (let i = 0; i < k; i++) {
      if (!p2) {
        throw new Error('k is greater than the length of the linked list');
      }
      p2 = p2.next;
    }

    // Move both pointers until p2 reaches the end
    while (p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1.value;
  }
}
const list = new LinkedList();
const node= new Node();

module.exports = LinkedList ;
