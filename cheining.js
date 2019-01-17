'use strict';

const Text1 = function(s) {
  this.value = s;
};

Text1.prototype.line = function(a) {
  this.value += '\n' + a;
  return this;
};

Text1.prototype.toString = function() {
  return this.value;
};

const novel = new Text1('Муха села на варенье,')
  .line('Вот и всё стихотворенье');

console.log(novel + '');

class Text2 {
  constructor(s) {
    this.value = s;
  }
  line(a) {
    this.value += '\n' + a;
    return this;
  }
  toString() {
    return this.value;
  }
}

const txt = new Text2('line 1').line('line 2').line('line 3');

console.log(txt + '');


const Text3 = (s = '') => ({
  line: a => Text3(s + '\n' + a),
  toString: () => s
});

const story = Text3('Жил-был пёс').line('Он любил есть овёс!');

console.log(story + '');



const Text4 = (s = '', o = {
  line: a => (s += '\n' + a, o),
  toString: () => s
}) => o;

const book = Text4('1st').line('2nd').line('3d');

console.log(`${book}`);

