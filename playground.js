'use strict';

const Array = require('./array');


function sandbox() {
  Array.SIZE_RATIO = 3;
  let testArray = new Array();

  testArray.push(5);
  console.log(testArray);
}

sandbox();