const { PseudoQueue } = require('./stack-and-queue');
//const { PseudoQueue } = require('./pseudo-queue');


describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  test('enqueue and dequeue elements in FIFO order', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test('dequeue from an empty queue throws an error', () => {
    expect(() => {
      queue.dequeue();
    }).toThrow('PseudoQueue is empty');
  });

  test('enqueue and dequeue multiple elements correctly', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);

    queue.enqueue(50);

    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(40);
    expect(queue.dequeue()).toBe(50);
  });
});
