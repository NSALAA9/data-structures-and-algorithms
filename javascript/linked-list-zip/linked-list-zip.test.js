// Import the necessary modules
const { LinkedList, zipLists } = require('./linked-list-zip');


// describe('zipLists', () => {
//   test('should zip two linked lists with alternating nodes', () => {
//     // Test case 1
//     // list1: 1 -> 3 -> 2 -> null
//     // list2: 5 -> 9 -> 4 -> null
//     // zipped: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null

//     const list1 = new Node(1);
//     list1.next = new Node(3);
//     list1.next.next = new Node(2);

//     const list2 = new Node(5);
//     list2.next = new Node(9);
//     list2.next.next = new Node(4);

//     const zippedList = zipLists(list1, list2);

//     // Traverse and verify the zipped list
//     const values = [1, 5, 3, 9, 2, 4];
//     let current = zippedList;
//     for (const value of values) {
//       expect(current).toBeDefined();
//       expect(current.value).toBe(value);
//       current = current.next;
//     }
//     expect(current).toBeNull();

//     // Test case 2
//     // list1: 1 -> 3 -> null
//     // list2: 5 -> 9 -> 4 -> null
//     // zipped: 1 -> 5 -> 3 -> 9 -> 4 -> null

//     const list3 = new Node(1);
//     list3.next = new Node(3);

//     const list4 = new Node(5);
//     list4.next = new Node(9);
//     list4.next.next = new Node(4);

//     const zippedList2 = zipLists(list3, list4);

//     // Traverse and verify the zipped list
//     const values2 = [1, 5, 3, 9, 4];
//     current = zippedList2;
//     for (const value of values2) {
//       expect(current).toBeDefined();
//       expect(current.value).toBe(value);
//       current = current.next;
//     }
//     expect(current).toBeNull();

//     // Test case 3
//     // list1: 1 -> 3 -> 2 -> null
//     // list2: 5 -> 9 -> null
//     // zipped: 1 -> 5 -> 3 -> 9 -> 2 -> null

//     const list5 = new Node(1);
//     list5.next = new Node(3);
//     list5.next.next = new Node(2);

//     const list6 = new Node(5);
//     list6.next = new Node(9);

//     const zippedList3 = zipLists(list5, list6);

//     // Traverse and verify the zipped list
//     const values3 = [1, 5, 3, 9, 2];
//     current = zippedList3;
//     for (const value of values3) {
//       expect(current).toBeDefined();
//       expect(current.value).toBe(value);
//       current = current.next;
//     }
//     expect(current).toBeNull();
//   });
// });

describe('zipLists', () => {
  it('should zip two linked lists with alternating nodes', () => {
    // Test case 1
    // list1: 1 -> 3 -> 2 -> null
    // list2: 5 -> 9 -> 4 -> null
    // zipped: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null

    const list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);
    list1.insert(2);

    const list2 = new LinkedList();
    list2.insert(5);
    list2.insert(9);
    list2.insert(4);

    const zippedList = zipLists(list1, list2);

    // Traverse and verify the zipped list
    const expectedValues = [1, 5, 3, 9, 2, 4];
    let current = zippedList.head;
    for (const value of expectedValues) {
      expect(current).toBeDefined();
      expect(current.value).toBe(value);
      current = current.next;
    }
    expect(current).toBeNull();
  });

  it('should handle one empty list', () => {
    // Test case 2
    // list1: 1 -> 3 -> null
    // list2: 5 -> 9 -> 4 -> null
    // zipped: 1 -> 5 -> 3 -> 9 -> 4 -> null

    const list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);

    const list2 = new LinkedList();
    list2.insert(5);
    list2.insert(9);
    list2.insert(4);

    const zippedList = zipLists(list1, list2);

    // Traverse and verify the zipped list
    const expectedValues = [1, 5, 3, 9, 4];
    let current = zippedList.head;
    for (const value of expectedValues) {
      expect(current).toBeDefined();
      expect(current.value).toBe(value);
      current = current.next;
    }
    expect(current).toBeNull();
  });

  it('should handle both empty lists', () => {
    // Test case 3
    // list1: null
    // list2: null
    // zipped: null

    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const zippedList = zipLists(list1, list2);

    expect(zippedList.head).toBeNull();
  });
});
