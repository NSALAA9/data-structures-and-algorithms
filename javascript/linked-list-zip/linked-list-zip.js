// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function zipLists(list1, list2) {
//   if (!list1) {
//     return list2;
//   }
//   if (!list2) {
//     return list1;
//   }

//   let head = list1;
//   let current1 = list1.next;
//   let current2 = list2;

//   while (current1 && current2) {
//     let temp1 = current1.next;
//     let temp2 = current2.next;

//     current1.next = current2;
//     current2.next = temp1;

//     current1 = temp1;
//     current2 = temp2;
//   }

//   return head;
// }

// // Example usage
// // list1: 1 -> 3 -> 2 -> null
// // list2: 5 -> 9 -> 4 -> null
// // zipped: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null

// const list1 = new Node(1);
// list1.next = new Node(3);
// list1.next.next = new Node(2);

// const list2 = new Node(5);
// list2.next = new Node(9);
// list2.next.next = new Node(4);

// const zippedList = zipLists(list1, list2);

// // Traverse and print the zipped list
// let current = zippedList;
// while (current) {
//   process.stdout.write(`${current.value} -> `);
//   current = current.next;
// }
// console.log('null');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

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

  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    console.log('null');
  }
}

const zipLists = (list1, list2) => {
  if (!list1.head) {
    return list2;
  }
  if (!list2.head) {
    return list1;
  }

  const zippedList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    zippedList.insert(current1.value);
    zippedList.insert(current2.value);

    current1 = current1.next;
    current2 = current2.next;
  }

  while (current1) {
    zippedList.insert(current1.value);
    current1 = current1.next;
  }

  while (current2) {
    zippedList.insert(current2.value);
    current2 = current2.next;
  }

  return zippedList;
};


module.exports ={ Node,
  zipLists,
  LinkedList
};

