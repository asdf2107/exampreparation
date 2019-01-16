'use strict';

//1-sleep
const sleep = msec => {
  const end = new Date().getTime() + msec;
  while (new Date().getTime() < end);
};

console.log('Start ' + new Date().toISOString());
console.log('Sleep 3000');
sleep(3000);
console.log('End sleep' + new Date().toISOString());


//2-order
const fs = require('fs');

setTimeout(() => {
  console.log('1st timeout 0');
}, 0);

setTimeout(() => {
  console.log('2nd timeout 0');
}, 0);

setTimeout(() => {
  console.log('1st timeout 1');
}, 1);

setTimeout(() => {
  console.log('2nd timeout 1');
}, 1);

setImmediate(() => {
  console.log('Immidiate 1');
});

setImmediate(() => {
  console.log('Immidiate 2');
});

const t1 = setInterval(() => {
  clearInterval(t1);
  console.log('1st interval 0');
}, 0);

const t2 = setInterval(() => {
  clearInterval(t2);
  console.log('2nd interval 0');
}, 0);

process.nextTick(() => {
  console.log('1st procces.nextTick');
});

process.nextTick(() => {
  console.log('2nd procces.nextTick');
});

(callback => callback())(() => {
  console.log('1st callback');
});

(callback => callback())(() => {
  console.log('2nd callback');
});

console.log('finish');


