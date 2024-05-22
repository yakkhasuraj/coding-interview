// Implement a Queue using two stacks.
// Do not create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.

// Examples
// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek(); === 1
// q.remove(); === 1
// q.remove(); === 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    return this.second.peek();
  }
}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());
console.log(q.remove());
console.log(q.remove());
