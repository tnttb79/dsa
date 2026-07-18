import { Node } from "../linked-list/linked-list.js";
// can be simplified with just array, but worth to try things out
class Stack {
  #currentStack;
  constructor() {
    this.currentStack = [];
    this.top = null;
    this.bottom = null;
    this.length = this.currentStack.length;
  }
  #updateStack() {
    this.bottom = this.currentStack[0];
    this.top = this.currentStack.at(-1);
  }
  push(value) {
    this.currentStack.push(value);
    this.length++;
    this.#updateStack();
  }
  pop() {
    const removedItem = this.currentStack.pop();
    this.#updateStack();
    if (removedItem) {
      this.length--;
      return removedItem;
    } else return undefined;
  }
  peek() {
    return this.currentStack.at(-1);
  }
  isEmpty() {
    return !this.currentStack.length;
  }
  printStack() {
    let stringBuilder = "";
    this.currentStack.forEach((e, i) => {
      if (i == this.currentStack.length - 1) {
        stringBuilder += e;
      } else {
        stringBuilder += e + "-->";
      }
    });
    console.log(stringBuilder);
  }
}

const stack = new Stack();
console.log("isEmpty: ", stack.isEmpty());
stack.push(0);
stack.printStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.printStack();
console.log("peeked: ", stack.peek());
console.log("removed:", stack.pop());
console.log("top:" + stack.top);
console.log("bottom", stack.bottom);
console.log("isEmpty: ", stack.isEmpty());
stack.printStack();
console.log("currentStack:" + stack.currentStack);
