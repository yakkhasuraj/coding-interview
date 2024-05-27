// Implement classes Node and Linked List

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    this.insertAt(data, this.size() - 1);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (index === counter) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (this.head === null) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (previous === null) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

console.log("\nNode:");
const node = new Node("a", "b");
console.log(node.data);
console.log(node.next);

console.log("\nLinked list:");
const list = new LinkedList();
console.log(list.head);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());

console.log("\nInsert 1:");
list.insertFirst(1);
console.log(list.head);
console.log(list.size());

console.log("\nInsert 2:");
list.insertFirst(2);
console.log(list.head);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());

console.log("\nClear list:");
list.clear();
console.log(list.head);
console.log(list.size());

console.log("\nRemove first node:");
list.insertFirst(1);
list.insertFirst(2);
console.log(list.getFirst());
list.removeFirst();
console.log(list.getFirst());

console.log("\nRemove last node:");
list.clear();
list.insertFirst(1);
list.insertFirst(2);
console.log(list.getLast());
list.removeLast();
console.log(list.getLast());

console.log("\nInsert at the end of linked list:");
list.clear();
list.insertLast(0);
console.log(list.head);

list.clear();
list.insertFirst(1);
list.insertFirst(2);
console.log(list.head);
list.insertLast(0);
console.log(list.head);

console.log("\nGet node at given index:");
list.clear();
console.log(list.getAt(0));
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
console.log(list.getAt(2));

console.log("\nRemove node at given index:");
list.clear();
list.removeAt(0);
list.insertFirst(1);
list.removeAt(2);
console.log(list.head);
list.insertFirst(2);
list.insertFirst(3);
console.log(list.head);
list.removeAt(2);
console.log(list.head);

console.log("\nInsert node at given index:");
list.clear();
list.insertFirst(1);
list.insertFirst(2);
console.log(list.head);
list.insertAt(3, 0);
console.log(list.head);
list.insertAt(4, 1);
console.log(list.head);

console.log("\nFor...of loops:");
list.clear();
list.insertFirst(1);
list.insertFirst(2);

for (let node of list) {
  node.data += 10;
}
console.log(list.head);
