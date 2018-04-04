'use strict';

const mem = require('./memory');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize(this.length + 1) * Array.SIZE_RATIO;
    }
    memory.set(this.ptr + this.length, value); // change array item value at ptr
    this.length++; // then increase length
  }

  _resize(size) {
    const oldPtr = this.ptr; // assign oldPtr to current ptr so we can swap space
    this.ptr = memory.allocate(size); // get new ptr from memory
    if (this.ptr === null) {
      throw new Error('Out of memory'); // throw error when we run out of space
    }
    memory.copy(this.ptr, oldPtr, this.length); // copy from old ptr to new ptr using length of array
    memory.free(oldPtr); // free up unused memory
    this._capacity = size;
  }
}

Array.SIZE_RATIO = 3;

module.exports = Array;