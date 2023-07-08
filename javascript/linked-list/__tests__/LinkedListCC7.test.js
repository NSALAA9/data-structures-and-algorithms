const { LinkedList, Node } = require('../LinkedListCC7');

// describe("LinkedList", () => {
//   let ll;

//   beforeEach(() => {
//     ll = new LinkedList();
//     ll.head = new Node(1);
//     ll.head.next = new Node(3);
//     ll.head.next.next = new Node(8);
//     ll.head.next.next.next = new Node(2);
//   });
//   });

//   it("should return the node's value that is k places from the tail of the linked list", () => {
//     assert.strictEqual(ll.kthFromEnd(0), 2);
//     assert.strictEqual(ll.kthFromEnd(2), 3);
//   });

//   it("should throw an exception when k is greater than the length of the linked list", () => {
//     assert.throws(() => {
//       ll.kthFromEnd(6);
//     }, Error);
//   });

//   it("should throw an exception when k is not a positive integer", () => {
//     assert.throws(() => {
//       ll.kthFromEnd(-1);
//     }, Error);
//   });

//   it("should return the node's value when the linked list is of size 1", () => {
//     const singleNodeLL = new LinkedList();
//     singleNodeLL.head = new Node(5);
//     assert.strictEqual(singleNodeLL.kthFromEnd(0), 5);
//   });

//   it("should return the node's value when k is in the middle of the linked list", () => {
//     assert.strictEqual(ll.kthFromEnd(1), 8);
//   });
// });

test('kthFromEnd should return the correct node value', () => {
  // Create a linked list
  const ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);

  // Test case: k = 0, expected output: 2
  expect(ll.kthFromEnd(0)).toBe(2);

  // Test case: k = 2, expected output: 3
  expect(ll.kthFromEnd(2)).toBe(3);

  // Test case: k = 6 (greater than list length), expected output: Error
  expect(() => ll.kthFromEnd(6)).toThrow('k is greater than the length of the linked list.');

  // Test case: k = -1 (negative value), expected output: Error
  expect(() => ll.kthFromEnd(-1)).toThrow('k must be a non-negative integer.');

  // Test case: Empty list, expected output: Error
  const emptyList = new LinkedList();
  expect(() => emptyList.kthFromEnd(1)).toThrow('Cannot perform operation on an empty list.');

  // Test case: List with only one node, k = 0, expected output: 1
  const singleNodeList = new LinkedList();
  singleNodeList.append(1);
  expect(singleNodeList.kthFromEnd(0)).toBe(1);

  // Test case: List with only one node, k = 1 (greater than list length), expected output: Error
  expect(() => singleNodeList.kthFromEnd(1)).toThrow('k is greater than the length of the linked list.');

  // Test case: List with multiple nodes, k = 1 (middle node), expected output: 8
  expect(ll.kthFromEnd(1)).toBe(8);
});
