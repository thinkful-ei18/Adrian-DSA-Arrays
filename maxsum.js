'use strict';

function maxSum (array) {

  if (array.constructor !== Array) {
    throw new Error('Input must be an array');
  }

  var sum = array.reduce((a,b) => a + b, 0);
  return sum;
}

console.log(maxSum([1,2,3]));

// Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4,6,-3,5,-2,1]
// Output: 12