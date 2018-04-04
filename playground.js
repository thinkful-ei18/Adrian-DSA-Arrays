'use strict';

const Array = require('./array');

let testArray = new Array();

function sandbox() {
  testArray.push(5);
  testArray.push(10);
  console.log(testArray);
  testArray.remove(1);
  console.log(testArray);
}

sandbox();