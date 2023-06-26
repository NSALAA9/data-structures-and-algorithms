'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      throw new Error('Linked list is empty.');
    } else if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      throw new Error('Value not found in the linked list.');
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      throw new Error('Linked list is empty.');
    } else {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      throw new Error('Value not found in the linked list.');
    }
  }
}

// Example usage:
// Create a linked list
const myLinkedList = new Linkedlist();

// Append nodes
myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.append(2);

// Insert before
myLinkedList.insertBefore(3, 5);
myLinkedList.insertBefore(1, 5);
myLinkedList.insertBefore(2, 5);

// Insert after
myLinkedList.insertAfter(3, 5);
myLinkedList.insertAfter(2, 5);

// Print the linked list
let current = myLinkedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

const list = new Linkedlist();

module.exports = Linkedlist ;
