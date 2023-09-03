const { Stack, Queue } = require('./stack-and-queue');

// Stack tests
test('push onto a stack', () => {
  const stack = new Stack();
  stack.push(5);
  expect(stack.peek()).toBe(5);
});

test('pop off the stack', () => {
  const stack = new Stack();
  stack.push(5);
  const value = stack.pop();
  expect(value).toBe(5);
  expect(stack.isEmpty()).toBe(true);
});

test('peek the next item on the stack', () => {
  const stack = new Stack();
  stack.push(5);
  expect(stack.peek()).toBe(5);
  expect(stack.isEmpty()).toBe(false);
});

// Queue tests
test('enqueue into a queue', () => {
  const queue = new Queue();
  queue.enqueue(10);
  expect(queue.peek()).toBe(10);
});

test('dequeue out of a queue', () => {
  const queue = new Queue();
  queue.enqueue(10);
  const value = queue.dequeue();
  expect(value).toBe(10);
  expect(queue.isEmpty()).toBe(true);
});

test('peek into a queue', () => {
  const queue = new Queue();
  queue.enqueue(10);
  expect(queue.peek()).toBe(10);
  expect(queue.isEmpty()).toBe(false);
});
