'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should instantiate an empty linked list', () => {
    expect(linkedList.head).toBeNull();
  });

  it('should properly insert into the linked list', () => {
    linkedList.insert('c');
    expect(linkedList.head.value).toBe('c');

    linkedList.insert('b');
    expect(linkedList.head.value).toBe('b');

    linkedList.insert('a');
    expect(linkedList.head.value).toBe('a');
  });

  it('should properly insert multiple nodes into the linked list', () => {
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });

  it('should return true when finding a value within the linked list that exists', () => {
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.includes('b')).toBe(true);
  });

  it('should return false when searching for a value in the linked list that does not exist', () => {
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.includes('d')).toBe(false);
  });

  it('should properly return a collection of all the values that exist in the linked list', () => {
    linkedList.insert('c');
    linkedList.insert('b');
    linkedList.insert('a');
    expect(linkedList.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });
});
