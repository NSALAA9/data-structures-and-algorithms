const { K_ary } = require('./FizzBuzzCC18');

describe('FizzBuzz Tree', () => {
  test('FizzBuzz transformation for a single node', () => {
    const tree = new K_ary();
    tree.append(15); // Divisible by both 3 and 5

    const transformedTree = tree.fizzBuzzTree(tree);

    expect(transformedTree.root.value).toBe('fizzbuzz');
  });

  test('FizzBuzz transformation for a complex tree', () => {
    const tree = new K_ary();
    tree.append(10); // Divisible by 5
    tree.append(20); // Divisible by 5
    tree.append(30); // Divisible by both 3 and 5
    tree.append(40); // Divisible by 5
    tree.append(13); // Not divisible by 3 or 5

    const transformedTree = tree.fizzBuzzTree(tree);

    expect(transformedTree.root.value).toBe('buzz');
    expect(transformedTree.root.children[0].value).toBe('buzz');
    expect(transformedTree.root.children[1].value).toBe('fizzbuzz');
    expect(transformedTree.root.children[2].value).toBe('buzz');
    expect(transformedTree.root.children[3].value).toBe('13');
  });

  test('FizzBuzz transformation for an empty tree', () => {
    const tree = new K_ary();

    const transformedTree = tree.fizzBuzzTree(tree);

    expect(transformedTree.root).toBe(null);
  });
});
