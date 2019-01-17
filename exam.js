'use strict';

//перменная и константа
// Переменная состоит из имени и выделенной области памяти, которая ему соответствует.
// Объявление const задаёт константу, то есть переменную, которую нельзя менять
const num = 123;
const arr = [];
const obj = {};


//типы данных
//number, string, boolean, null, undefined, object
const a = 123;
const b = 'Слово';
const c = true;
const d = null;
const e = undefined;
const f = {};


//функция(все виды объявления)
// Функции - ключевая концепция в JavaScript.
// Важнейшей особенностью языка является первоклассная поддержка функций​.
//  Любая функция это объект, и следовательно ею можно манипулировать как объектом.
function first() {} //function declaration
const second = function() {}; // function expression
const third = () => {}; // lambda function
const fourth = () =>  //lambda expression 

//контекст и область видимости
// Переменные объявленные в функции не могут быть доступными где-нибудь вне этой функции,
//  поэтому переменные (которые нужны именно для функции) объявляют только в scope функции.
function x() {
  const smth = '123';
  function z() {
    const smth = '321';
    console.log(smth);//321
  }
  console.log(smth);//123
}
console.log(smth);//undefined


//функции высшего порядка
// враперы, колбэки и тд
//  Функция высшего порядка — это функция, которая может принимать другую функцию
//  в качестве аргумента или возвращать другую функцию в качестве результата.


//callback
//Функция, которая передается в качетве аргуменат другой функции
const fn =(par, callback) =>{
  if(!par){
    callback(new Error('parametr needed'));
    return;
  }
  callback(null, 'Data' + par);
  return 'Value';
};


//враперы
// Оброчавиает функцию но не изменяет её
const logable = fn1 => (...args) => {
  const res = fn1(...args);
  console.log(`Call ${fn1.name}(${args.join(', ')}) Result: ${res}`);
  return res;
};


//условия
let one = 1;
let один = 1;

if(one === один){
  true
} else {
  false
};

one === один ? true : false 


// циклы и итерирование
// цикл for
for(let i = 1, i < 5, i++);

// цикл while
while(one > -3){
  console.log(one);
  one - 1;
}

// цикл do while
do{
  console.log(один);
  один - 1;
}while(один > -3);

// цикл for in
for(const key in Array){
  //для каждого ключа в чем-то(массиве) сделать что-то(только перечисляемые свойства)
}

// цикл for of
for(let key in obj){
  //do smth      вызывает [Symbol.iterator]
}

//класс и объект
// class – удобный «синтаксический сахар» для задания конструктора вместе с прототипом.
const person = {};
person.name = 'George';
person.born = '1944';

const person2 = new Object();//в скобочки  передавать от кого наследуется


class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  static from(obj) {
    const {x, y} = obj;
    return new Point(x, y);
  }
}

const p2 = new Point1(6, 12);
p2.move(3, 3);

//прототип
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.from = function(obj) {
  const {x, y} = obj;
  return new Point(x, y);
};

Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};

const p1 = new Point(5, 15);
p1.move(7, 23);

//наследование
// когда один объект копирует свойства другого, получает его поля и методы

//методы

//замыкание
// Если функция использует внутри себя переменные материнской функции,
// то они продолжают существовать даже после окончания этой функции
const hash = () => {
  const data = {};
  let counter = 0;
  return (key, value) => {
    data[key] = value;
    counter++;
    console.dir({ counter });
    return data
  }
}

const log = (base, n) => Math.log(n) / Math.log(base)

const createLog = base => n => log(base, n);

const lg = createLog(10);


//композиция
const compose = (f1, f2) =>x => f2(f1(x))


// каррирование
const curry = fn =>(...args) => {
  if (fn.length > args.length) {
    const f = fn.bind(null, ...args);
    return curry(f);
  } else {
    return fn(...args);
  }
};


// частичное применение
const partial = (fn, ...args) => (...rest) => fn(...args.concat(rest));

const sum4 = (a, b ,c ,d) => (a + b + c + d);

const fx = partial(sum4, 1, 2);
const fz = partial(fx, 5, 4);

// списки
// Список - набор элеменов,связанных между собой
// может быть односвязным и двухсвязным



// стек дек очередь
// Это образцы списков
// Стек - добавляем и отнимаем только с конца
// Дек - добавляем и отнимаем с двух сторон
// Очередь - добавляем с конца, забираем из начала


// функтор
// Функтор - это абстракция, которая хранит (инкапсулирует) в себе какое-то значение, и 
// на котором реализован а. метод .map, который принимает функцию, 
// применяет его к инкапсулированному у себя значению и возвращает новый 
// функтор-обёртку над полученным отображением


// примеси
// Примеси - это когда мы добавляем объекту/функции/классу/прочему,
//  не свойственное ему поведение, те новые методы или что-то еще
const person1 ={name: 'James'};
const person2 ={};
const person3 ={};

person2.name = 'Logan'
const Mixin = obj => {
  obj.name = obj.name || 'Not named';
  obj.calculateCost = function(age) {
    return `${this.name} ${age} years old`;
  };
};


// утиная типизация
// Всё что ведет себя как утка - и есть утка


// чеининг
// Может быть объектный и функциональный
// см. cheining.js(почему-то через e)

// регулярки
// регулярные выражения - специальный набор символов используемый для поиска в тексте/ файле, можно
// считать что это другой язык


// сериализация
// Процесс перевода данных из одного формата в другой, изменение их


// парсинг
// Ищет в файле/тексте нужную нам информацию


// мемоизация
const argKey = x => x.toString() + '|||' +typeof x;
const generateKey = args =>args.map(argKey).join('---');

const memoise = fn => {
  const cache = {};
  return (...args) =>{
    const key = generateKey(...args);
    const value = cache[key]
    if (value) return value;
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};


// коллекции
// Массивы, объекты, сэт, мэп - это всё коллекции
// мэп - коллекция которая имеет дофигилион методов, и  можно в ней искать элементы и много чего с ними делать
// Сэт - то же самое что и мэп, только без повторов


// множества
// набор однозначных элементов ( без повторов)
// То , что хранит в себе сэт

// символы
// Новый примитивный тип данных Symbol служит для создания уникальных идентификаторов.
// Всегда фиксированно занимают 32 или 64 бит
// Два символа с одинаковым названием не равны
Symbol.for('name') === Symbol.for('name')
Symbol('name') !== Symbol('name')


// фабрики
// Функция или Объект который порождает другие функции объекты однотипные

// пулы
// А пул это набор таких функций, которые лежат в нём,
// и если нужно их использовать берет оттуда ограниченное количество, чтобы не забивать память
// В пуле лежат структуры данных, которые мы вынимаем, используем, а потом возвращаем назад


// таймеры
// см. time.js


// ивентэмиттер
//см EventEmitter.js
// «EventEmitter» представляет собой основной объект реализующий работу с событиями в Node.JS.
// Большое количество других встроенных объектов, которые генерируют события в Node.JS, ему наследуют.
// Для того, чтобы воспользоваться «EventEmitter»,
// достаточно подключить ‘events’, встроенный и взять у него соответствующее свойство.


// работа с консолью
console.info


// простейшая работа с файлами
// Файлы можно читать синхронно и асинхронно, за ним можно следить и тд.
// В этом нам поможет библиотека "fs"
// Пример синхронного считывания
const fs = require('fs');

const buffer = fs.readFileSync('filename', 'utf8');
const scr = buffer.toString();

const lines = scr.split('\n').filter(line => !!line);
console.dir(lines)//Массив с полным текстом файла

// Пример синхронной записи
const buffer1 = fs.readFileSync('filename', 'utf8');
const scr1 = buffer1.toString();
const lines1 = scr.split('\n').filter(line => !!line);
fs.writeFileSync('newfilename.txt', lines.join('\n'));
// При асинхронном считывании
fs.readFile('filename','utf8',callback)//будет вызван когда файл считается


// обработка ошибок
// см. errors.js




