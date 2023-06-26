'use strict';
const Linkedlist = require('../LinkedListCC6');

// Test to add a node to the end of the linked list
test('Appending a node to the end of the linked list', () => {
  const myList = new Linkedlist();
  myList.append(1);
  expect(myList.head.value).toBe(1);

  myList.append(2);
  expect(myList.head.next.value).toBe(2);
});

// Test to add multiple nodes to the end of the linked list
test('Appending multiple nodes to the end of the linked list', () => {
  const myList = new Linkedlist();
  myList.append(1);
  myList.append(2);
  myList.append(3);
  myList.append(4);

  let current = myList.head;
  expect(current.value).toBe(1);

  current = current.next;
  expect(current.value).toBe(2);

  current = current.next;
  expect(current.value).toBe(3);

  current = current.next;
  expect(current.value).toBe(4);
});

// Test to insert a node before a node located in the middle of the linked list
test('Inserting a node before a node in the middle of the linked list', () => {
  const myList = new Linkedlist();
  myList.append(1);
  myList.append(2);
  myList.append(4);

  myList.insertBefore(2, 3);

  let current = myList.head;
  expect(current.value).toBe(1);

  current = current.next;
  expect(current.value).toBe(3);

  current = current.next;
  expect(current.value).toBe(2);

  current = current.next;
  expect(current.value).toBe(4);
});

// Test to insert a node before the first node of the linked list
test('Inserting a node before the first node of the linked list', () => {
  const myList = new Linkedlist();
  myList.append(1);
  myList.append(2);
  myList.append(3);

  myList.insertBefore(1, 0);

  let current = myList.head;
  expect(current.value).toBe(0);

  current = current.next;
  expect(current.value).toBe(1);

  current = current.next;
  expect(current.value).toBe(2);

  current = current.next;
  expect(current.value).toBe(3);
});

// Test to insert a node after a node in the middle of the linked list
test('Inserting a node after a node in the middle of the linked list', () => {
  const myList = new Linkedlist();
  myList.append(1);
  myList.append(2);
  myList.append(4);

  myList.insertAfter(2, 3);

  let current = myList.head;
  expect(current.value).toBe(1);

  current = current.next;
  expect(current.value).toBe(2);

  current = current.next;
  expect(current.value).toBe(3);

  current = current.next;
  expect(current.value).toBe(4);
});

// Test to insert a node after the last node of the linked list
test('Inserting a node after the last node of the linked list', () => {
  const myList = new Linkedlist();
  myList.append(1);
  myList.append(2);
  myList.append(3);

  myList.insertAfter(3, 4);

  let current = myList.head;
  expect(current.value).toBe(1);

  current = current.next;
  expect(current.value).toBe(2);

  current = current.next;
  expect(current.value).toBe(3);

  current = current.next;
  expect(current.value).toBe(4);
});
