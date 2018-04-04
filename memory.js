'use strict';

class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  allocate(size) {
    // set aside memory blocks
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }

  free(ptr) {} // free up unused memory

  copy(toIdx, fromIdx, size) {
    // copy from to pointer from pointer, specifying size
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards through memory
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards through memory
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  get(ptr) {
    // retrieve array item w/ pointer
    return this.memory[ptr];
  }

  set(ptr, value) {
    // modify array item w/ pointer
    this.memory[ptr] = value;
  }
}

module.exports = Memory;