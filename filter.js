'use strict';

function filter (array) {

  let filtered = [];

  for (let i=0; i < array.length; i++) {
    if (array[i] > 5) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

function filter2 (array, number) {

  let filtered = [];

  for (let i=0; i < array.length; i++) {
    if (array[i] > number) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

console.log(filter2([1,23,3,50,7,3], 20));

// Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array. Don't use array's built-in .filter method here; write the algorithm from scratch.

function filter3 (array, condition) {

  let filtered =  [];

  if (condition !== typeof 'function') {
    throw new Error('Condition must be a function');
  }

  for (let i=0; i < array.length; i++) {
    if (condition) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

