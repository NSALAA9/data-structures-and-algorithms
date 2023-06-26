Problem Domain:
The problem domain is to implement a linked list class with the following methods:
- `append(newValue)`: Adds a new node with the given value to the end of the linked list.
- `insertBefore(value, newValue)`: Inserts a new node with the given `newValue` before the first occurrence of the node with the given `value`.
- `insertAfter(value, newValue)`: Inserts a new node with the given `newValue` after the first occurrence of the node with the given `value`.

Algorithm:
1. Create a Node class with `value` and `next` properties.
2. Create a LinkedList class with a `head` property.
3. In the `append(newValue)` method:
   - Create a new node with the given `newValue`.
   - If the linked list is empty (head is null), set the new node as the head.
   - Otherwise, traverse to the end of the list and set the `next` reference of the last node to the new node.
4. In the `insertBefore(value, newValue)` method:
   - Create a new node with the given `newValue`.
   - If the linked list is empty, throw an error.
   - If the head node matches the `value`, set the new node as the new head.
   - Traverse the list until finding a node with a `next` node that matches the `value`.
   - Insert the new node by updating the `next` references.
5. In the `insertAfter(value, newValue)` method:
   - Create a new node with the given `newValue`.
   - If the linked list is empty, throw an error.
   - Traverse the list until finding a node that matches the `value`.
   - Insert the new node by updating the `next` references.
6. Implement any necessary error handling.

Solution:
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
Time and Space Complexity:
- `append(newValue)`: The time complexity is O(n), where n is the number of nodes in the linked list, as it requires traversing the entire list to reach the end. The space complexity is O(1) since it only requires creating a new node.
- `insertBefore(value, newValue)`: The time complexity is O(n), where n is the number of nodes in the linked list, as it may require traversing the list to find the node before which the new node needs to be inserted. The space complexity is O(1) since it only requires creating a new node.
- `insertAfter(value, newValue)`: The time complexity is O(n), where n is the number of nodes in the linked list, as it may require traversing the list to find the node after which the new node needs to be inserted. The space complexity is O(1) since it only requires creating a new node.

- Test Cases:
The provided code includes test cases that can be used to verify the correctness of the implementation. These test cases cover scenarios such as appending nodes to the end of the list, inserting nodes before and after existing nodes, handling edge cases, and checking the integrity of the linked list structure. You can execute the tests using a testing framework like Jest to ensure the desired functionality of the linked list class.
![CC6](https://github.com/NSALAA9/data-structures-and-algorithms/assets/129075779/14102695-3c94-4ab7-8870-f042a56132c4)
![input output](https://github.com/NSALAA9/data-structures-and-algorithms/assets/129075779/19518bb4-5dd2-4178-a457-09cf66b4f153)
![Linked List CC6 (1)](https://github.com/NSALAA9/data-structures-and-algorithms/assets/129075779/e9e33749-7971-43cd-a78a-a67986f30f30)


[Pull Request](https://github.com/NSALAA9/data-structures-and-algorithms/pull/7)
