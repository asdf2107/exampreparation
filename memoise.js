'use strict';

const argKey = x => x.toString() + '|||' + typeof x;
const generateKey = args => args.map(argKey).join('---');

const memoize = fn => {
  const cache = {};
  return (...args) => {
    const key = generateKey(args);
    const value = cache[key];
    if (value) return value;
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};


const summ = (x, y) => {
  return x + y;
};

const msumm = memoize(summ);

console.log('sum1 ' + msumm(1, 2));
console.log('sum2 ' + msumm(1, 2));
console.log('sum3 ' + msumm(2, 2));
console.log('sum4 ' + msumm(3, 2));
