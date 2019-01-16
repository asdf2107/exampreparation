'use strict';



//SYNC

const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('arguments should be numbers.');
  }
};

try {
  console.log(sum(2, 3));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(sum(2, 'A'));
} catch (error) {
  console.log(error.message);
}

console.log('W0rk');





const sum2 = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return [null, a + b];
  } else {
    return [new Error('should be numbers')];
  }
};

console.log(sum2(2, 5));
console.log(sum2(2, 'f'));




//ASYNC

const sum3 = (a, b, callback) => {
  if (typeof a === 'number' && typeof b === 'number') {
    callback(null, a + b);
  } else {
    callback(new Error('numbers'));
  }
};

sum3(2, 3, (err, res) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(res);
});

sum3(2, 'A', (err, res) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(res);
});

