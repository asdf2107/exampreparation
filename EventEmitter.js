'use strict';

// const events = require('events');

// const emitter = () => {
//     const ee = new event.EventEmitter();
//     const emit = ee.emit;
//     ee.emit = (...args) => {
//         if (args[0] !== '*') emit.apply(ee, args);
//         args.apply(ee, args);
//     };
//     return ee;
// };




//prototype

const EventEmitter = function() {
  this.events = {};
};

EventEmitter.prototype.on = function(name, fn) {
  const event = this.events[name];
  if (event) event.push(fn);
  else this.events[name] = [fn];
};

EventEmitter.prototype.emit = function(name, ...data) {
  const event = this.events[name];
  if (event) event.forEach(fn => fn(...data));
};

const ee = new EventEmitter();

ee.on('event1', data => {
  console.dir(data);
});

ee.emit('event1', { a: 5 });



//closure

const emitter2 = () => {
  const events2 = {};
  return {
    on: (name, fn) => {
      const event2 = events2[name];
      if (event2) event2.push(fn);
      else events2[name] = [fn];
    },
    emit: (name, ...data) => {
      const event2 = events2[name];
      if (event2) event2.forEach(fn => fn(...data));
    }
  };
};

const ee2 = emitter2();

ee2.on('SuperName', data => {
  console.dir(data);
});

ee2.emit('SuperName', 'Chto-to na trnslite!');
