'use strict';

const Array = require('./array');


function sandbox() {
  Array.SIZE_RATIO = 3;
  let testArray = new Array();

  testArray.push(5);
  console.log(testArray); // Array { length: 1, _capacity: 1, ptr: 0 }

  testArray.push(5);
  console.log(testArray);
  testArray.push(15);
  console.log(testArray);
  testArray.push(19);
  console.log(testArray); // we triple the memory size/capacity
  testArray.push(45);
  testArray.push(10);
  console.log(testArray); // Array { length: 6, _capacity: 6, ptr: 3 }
  // We move the pointer just before exceeding capacity.

  testArray.pop();
  testArray.pop();
  testArray.pop();
  console.log(testArray); // Array { length: 3, _capacity: 12, ptr: 3 }
  // Removing items from the array does not decrease capacity or move the pointer.

  console.log(testArray.get(1));

  testArray.pop();
  testArray.pop();
  testArray.pop();

  testArray.push('adrian');
  // Our array only contains one item but the pointer & capacity remain the same.

  console.log(testArray); // Array { length: 1, _capacity: 12, ptr: 3 }
  // The resize function ensures memory capacity will be allocated as needed, moving the pointer when necessary.
}

sandbox();