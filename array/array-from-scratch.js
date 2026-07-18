class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // get
  get(index) {
    return this.data[index];
  }
  // push
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  // pop
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  // delete
  delete(index) {
    const itemToDelete = this.data[index];
    this._removeItemAtIndex(index);
    return itemToDelete;
  }

  _removeItemAtIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    delete this.data[this.length - 1];
  }
}

const myArray = new MyArray();
myArray.push("test1");
myArray.push("test2");
myArray.push("test3");
myArray.push("test4");
console.log(myArray);
console.log(myArray.get(0));
myArray.pop();
console.log(myArray);
myArray.delete(1);
console.log(myArray);
