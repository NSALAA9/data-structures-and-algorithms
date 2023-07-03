class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function zipLists(list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let head = list1;
  let current1 = list1.next;
  let current2 = list2;

  while (current1 && current2) {
    let temp1 = current1.next;
    let temp2 = current2.next;

    current1.next = current2;
    current2.next = temp1;

    current1 = temp1;
    current2 = temp2;
  }

  return head;
}

// Example usage
// list1: 1 -> 3 -> 2 -> null
// list2: 5 -> 9 -> 4 -> null
// zipped: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null

const list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(2);

const list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(4);

const zippedList = zipLists(list1, list2);

// Traverse and print the zipped list
let current = zippedList;
while (current) {
  process.stdout.write(`${current.value} -> `);
  current = current.next;
}
console.log("null");
