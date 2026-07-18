// use LinkedList so that when we enqueue, we don't have to shift all the elements
// result in O(1) time complexity
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // seem more concise to me
  enqueue1(value) {
    const newNode = new Node(value);
    if (this.length) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
    this.length++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue1("Joy");
myQueue.enqueue1("Matt");
myQueue.enqueue1("Pavel");
myQueue.enqueue1("Samir");
myQueue.dequeue();
myQueue.peek();
console.log(myQueue);
