"use strict";

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    const item = this.data[index];
    return item;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const LastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;
    return LastItem;
  }
}

const newArray = new MyArray();
console.log(newArray);

newArray.push("hey");
console.log(newArray);

newArray.push("you");
console.log(newArray);

newArray.push("!");
console.log(newArray);
