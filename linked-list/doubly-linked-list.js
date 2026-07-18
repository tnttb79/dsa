//1 - 10 - 5 - 15;

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  printListWWhileLoop() {
    let currentNode = this.head;
    const arrayOfNodes = [];
    while (currentNode !== null) {
      arrayOfNodes.push(currentNode.value);
      currentNode = currentNode.next;
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
  append(val) {
    const newNode = new DoublyNode(val);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(val) {
    const newNode = new DoublyNode(val);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    // prepend if <= 0
    if (index <= 0) return this.prepend(value);
    // append if >= list length
    if (index >= this.length) return this.append(value);
    const newNode = new DoublyNode(value);
    const preNode = this.traverseToIndex(index - 1);
    const nextNode = this.traverseToIndex(index);
    preNode.next = newNode;
    newNode.previous = preNode;
    newNode.next = nextNode;
    nextNode.previous = newNode;
    this.length++;
    return this.printListWForLoop();
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    const preNode = this.traverseToIndex(index - 1);
    const removedNode = preNode.next;
    preNode.next = removedNode.next;
    removedNode.next.previous = preNode;
    this.length--;
    return removedNode;
  }
  traverseToIndex(index) {
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }
}

// class for a node
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.append(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.prepend(-5);
// myDoublyLinkedList.append(3);
// myDoublyLinkedList.append(4);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.printListWWhileLoop();
// console.log(myDoublyLinkedList.traverseToIndex(0));
// console.log(myDoublyLinkedList.traverseToIndex(5));
// myDoublyLinkedList.insert(10, 6);
// myDoublyLinkedList.insert(0, 15);
// myDoublyLinkedList.remove(2);
myDoublyLinkedList.printListWWhileLoop();

// let currentNode = myDoublyLinkedList.head;
// while (currentNode != null) {
//   console.log(currentNode);
//   currentNode = currentNode.next;
// }
for (const key in myDoublyLinkedList) {
  if (myDoublyLinkedList.hasOwnProperty(key)) {
    console.log(` test${key}:`, myDoublyLinkedList[key]);
  }
}
