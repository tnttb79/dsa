//1 - 10 - 5 - 15;

export class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printListWForLoop() {
    const arrayOfNodes = [];
    for (
      let currentNode = this.head;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      arrayOfNodes.push(currentNode.value);
    }
    console.log(this.listToString(arrayOfNodes));
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
    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    // prepend if <= 0
    if (index <= 0) return this.prepend(value);
    // append if >= list length
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const preNode = this.traverseToIndex(index - 1);
    const nextNode = this.traverseToIndex(index);
    preNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this.printListWForLoop();
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    const preNode = this.traverseToIndex(index - 1);
    const removedNode = preNode.next;
    preNode.next = removedNode.next;
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
  reverse(a) {
    // naive approach, more space needed
    if (a) {
      const newLinkedList = new LinkedList(this.tail.value);
      for (let i = this.length - 2; i >= 0; i--) {
        newLinkedList.append(this.traverseToIndex(i).value);
      }
      // To modify the original list
      this.head = newLinkedList.head;
    } else {
      // 2-pointer approach
      this.tail = this.head;
      let previous = null;
      let current = this.head;
      let following = null;
      while (current) {
        // keep 1 pointer to reference to a target node for the next iteration
        following = current.next;
        // establish the current connection logic of this itteration
        current.next = previous;
        // set previous and current for the next iteration
        previous = current;
        current = following;
      }
      this.head = previous;
    }
  }
}

// class for a node
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const myLinkedList = new LinkedList(0);
// myLinkedList.append(1);
// myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.append(4);
// myLinkedList.append(5);
// myLinkedList.printListWForLoop();
// myLinkedList.printListWWhileLoop();
// console.log(myLinkedList.traverseToIndex(0));
// console.log(myLinkedList.traverseToIndex(5));
// myLinkedList.insert(10, 6);
// // myLinkedList.insert(0, 15);
// myLinkedList.printListWForLoop();
// // myLinkedList.remove(2);
// myLinkedList.printListWForLoop();
// myLinkedList.reverse();
// myLinkedList.printListWForLoop();
