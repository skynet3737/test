"use strict";

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i < max; i += 1) {
  if (i % 2 !== 0) {
    console.log('Не четное: ', i);
    continue;
  }

  console.log('Четное: ', i);
  total += i;
}

console.log('total: ', total);