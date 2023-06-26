const { LinkedList, Node } = require("../LinkedListCC7");

describe("LinkedList", () => {
  let ll;

  beforeEach(() => {
    ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(3);
    ll.head.next.next = new Node(8);
    ll.head.next.next.next = new Node(2);
  });
  });

  it("should return the node's value that is k places from the tail of the linked list", () => {
    assert.strictEqual(ll.kthFromEnd(0), 2);
    assert.strictEqual(ll.kthFromEnd(2), 3);
  });

  it("should throw an exception when k is greater than the length of the linked list", () => {
    assert.throws(() => {
      ll.kthFromEnd(6);
    }, Error);
  });

  it("should throw an exception when k is not a positive integer", () => {
    assert.throws(() => {
      ll.kthFromEnd(-1);
    }, Error);
  });

  it("should return the node's value when the linked list is of size 1", () => {
    const singleNodeLL = new LinkedList();
    singleNodeLL.head = new Node(5);
    assert.strictEqual(singleNodeLL.kthFromEnd(0), 5);
  });

  it("should return the node's value when k is in the middle of the linked list", () => {
    assert.strictEqual(ll.kthFromEnd(1), 8);
  });
});
