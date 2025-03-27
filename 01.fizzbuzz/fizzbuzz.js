#!/usr/bin/env node

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${i}`);
  }
}

import emoj from './node_modules/emoj/distribution/index.js';
console.log(emoj('cat'));
console.log(emoj('dog'));
