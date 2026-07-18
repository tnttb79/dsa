import { LinkedList, Node } from "../linked-list/linked-list.js";

// Naive approach for stack, not efficient
// - pop current uses LinkedList.remove(index) -> require full traversal O(n)
// - same issue w/ peek() causing O(n) traversal
class Stack1 {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    if (!this.length) {
      this.currentStack = new LinkedList(value);
    } else {
      this.currentStack.append(value);
    }
    this.length++;
  }
  pop() {
    if (this.length == 0) return undefined;
    const removedItem = this.currentStack.remove(this.length - 1);
    this.length--;
    return removedItem;
  }
  peek() {
    return this.currentStack.traverseToIndex(this.length - 1);
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newItem = new Node(value);
    if (!this.length) this.bottom = newItem;
    newItem.next = this.top;
    this.top = newItem;
    this.length++;
  }
  pop() {
    if (!this.length) return undefined;
    const removedItem = this.top;
    this.top = this.top.next;
    this.length--;
    if (!this.length) this.bottom = null;
    return removedItem.value;
  }
  peek() {
    return this.top ? this.top.value : undefined;
  }
  isEmpty() {
    return !this.length;
  }

  printListWForLoop() {
    const arrayOfNodes = [];
    for (
      let currentNode = this.top;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      arrayOfNodes.push(currentNode.value);
    }
    console.log(this.listToString(arrayOfNodes));
  }
  listToString(arr) {
    let stringBuilder = "";
    arr.forEach((e, i) => {
      if (i == arr.length - 1) {
        stringBuilder += e;
      } else {
        stringBuilder += e + "-->";
      }
    });
    return stringBuilder;
  }
}

// Naive Stack
// const myStack = new Stack1();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// console.log(myStack.peek());
// myStack.currentStack.printListWForLoop();

// Giga Chad Stack =))
const stack = new Stack();
console.log("isEmpty: ", stack.isEmpty());
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("peeked: ", stack.peek());
console.log("removed:", stack.pop().value);
stack.printListWForLoop();
console.log("top:" + stack.top.value);
console.log("bottom", stack.bottom.value);
console.log("isEmpty: ", stack.isEmpty());
