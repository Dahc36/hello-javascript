// Project setup
<!DOCTYPE html>
<html>
<head>
  <title>Tutorial JS</title>
</head>
<body>
  <div>Hello JavaScript</div>
</body>
</html>

// LLamar script
<!DOCTYPE html>
<html>
<head>
  <title>Tutorial JS</title>
</head>
<body>
  <div>Hello JavaScript</div>
  <script src="index.js" ></script>
</body>
</html>

// Runtime environment o ambiente de ejecución
// 1 + 2
// console.log('Hola mundo');

// Console.log, hello world
console.log('Hello world!');

// 01 - Variables ************************************************************************************************************
// Declaración
var x = 1;
console.log('X:');
console.log(x);

// Weakly typed
var numeroUno = 1;
console.log('Número:');
console.log(x);
// <meta charset="UTF-8">

numeroUno = '1';
console.log('Número:');
console.log(x);

// Primitive data types

// cohercion
// 1 + 1
// '1' + 1
// 1 + true
// '' + 1 + true
// 1 + true + ''
// 1 + undefined
var numeroUno = 1;
console.log('Número: ' + numeroUno);

// Hoisting let & const
console.log('Número: ' + numeroUno);
var numeroUno = 1;

console.log('1 - Número: ' + numeroUno);
var numeroUno = 1;
console.log('2 - Número: ' + numeroUno);

var numeroUno
console.log('1 - Número: ' + numeroUno);
numeroUno = 1;
console.log('2 - Número: ' + numeroUno);

console.log('1 - Número: ' + numeroUno);
console.log('2 - Número 2: ' + numeroDos);
var numeroUno = 1;
console.log('3 - Número: ' + numeroUno);
// numeroUno
// numeroDos

console.log('1 - Número: ' + numeroUno);
console.log('2 - Número2: ' + numeroDos);
var numeroUno = 1;
console.log('3 - Número: ' + numeroUno);
var numeroDos = 2;
// numeroUno
// numeroDos

console.log('1 - Número: ' + numeroUno);
console.log('2 - Número2: ' + numeroDos);
var numeroUno = 1;
console.log('3 - Número: ' + numeroUno);
let numeroDos = 2;
// Temporal dead zone
// let let

console.log('1 - Número: ' + numeroUno);
let numeroDos;
console.log('2 - Número2: ' + numeroDos);
var numeroUno = 1;
console.log('3 - Número: ' + numeroUno);
numeroDos = 2;

console.log('1 - Número: ' + numeroUno);
let numeroDos = 2;
console.log('2 - Número2: ' + numeroDos);
var numeroUno = 1;
console.log('3 - Número: ' + numeroUno);
numeroDos = 'a';

console.log('1 - Número: ' + numeroUno);
const numeroDos = 2;
console.log('2 - Número2: ' + numeroDos);
var numeroUno = 1;
console.log('3 - Número: ' + numeroUno);
numeroDos = 'a';

var numeroPar = 1;
if (numeroPar % 2 == 1) {
  var numeroPar = 2;
  console.log('1 - Número: ' + numeroPar);
}
console.log('2 - Número ' + numeroPar);

// 02 - Functions ************************************************************************************************************
// Declaration, expression, named, anonymous
function nombreFunc(arg) {
  console.log('nombreFunc');
  return arg;
}
console.log('Returns: ' + nombreFunc());

const nombreFunc = function(arg) {
  console.log('nombreFunc');
  return arg;
}
console.log('Returns: ' + nombreFunc());

// Hoisting
var x = 1;
console.log(x); // 1
console.log(y); // undefined
console.log(z); // Uncaught ReferenceError: z is not defined
var y = 2;

function x() { return 1 };
console.log(x());
console.log(y());
console.log(z());
function y() { return 2 };
var z = function() { return 3 };

// Argumentos pasados por valor
let x = 1;
let func = function(x) {
  x = x + 3;
  return x;
}
console.log(func(x));
console.log(x);

// Closure
let x = 1
const func1 = function(y) {
  x = x + y;
};
func1(2);
console.log(x);

// 03 - Objects ************************************************************************************************************
// Properties and methods
let propName = 'String value';
let myObj = {
  x: 1,
  y: 2,
  foo: function(arg) {
    return arg;
  },
  [proName]: 'I\'m a string'
};
myObj.z = 3;
myObj['a'] = 'a';
console.log(myObj);

// Referencia
// comparison by value or reference
// ternary operator
// truthy, falsy
let obj1 = {
  x: 1
};
let obj2 = {
  x: 1
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// Spread operator (con reemplazar alguna variable)
let obj1 = {
  x: 1
};
let obj2 = obj1;
obj1.x = 2;
console.log(obj1);
console.log(obj2);

// Arrays
let arr1 = [ 1, 2, 3, 4 ];
let arr2 = [ ...arr1 ];
arr1[1] = 'Hello';
console.log(arr1);
console.log(arr2);

// Ejemplo cambiar un objeto, aunque sea declarado con const
const obj = {
  x: 1
};
obj = {
  x: 2
};
console.log(obj);

const obj = {
  x: 1
};
obj.x = 2;
console.log(obj);

// Func por referencia
const changeX = function(obj) {
  obj.x = 'new';
}
const myObj = {
  x: 1
};
changeX(myObj);
console.log(myObj);

// This, arrow func?
// this -> window
// var x = 'a'; window.varX
// let x = 'a'; window.letX
const foo = function () {
  return this;
} 
obj1 = {
  a: 1,
  bar: foo
};
obj2 = {
  b: 2,
  bar: foo
};
console.log(obj1.bar());
console.log(obj2.bar());

// this depende donde se llame a la función
const foo = function () {
  let that = this;
  const foo2 = function () {
    return that;
  }
  return foo2();
}
obj1 = {
  a: 1,
  bar: foo
};
obj2 = {
  b: 2,
  bar: foo
};
console.log(obj1.bar());
console.log(obj2.bar());

// Arrow functions
const add => (a, b) => a + b;

// This se hereda
const foo = function() {
  const foo2 = () => {
    return this;
  }
  return foo2();
}
obj1 = {
  a: 1,
  bar: foo
};
obj2 = {
  b: 2,
  bar: _ => this
};
console.log(obj1.bar());
console.log(obj2.bar());

// Ejemplo peludo
const foo = function() {
  const foo2 = () => {
    return this;
  };
  return foo2;
};
obj1 = {
  a: 1,
  bar: foo
};

obj2 = {
  b: 2,
  bar: foo
};
const foo1 = obj1.bar();
console.log(foo1());
console.log(obj2.bar()());

// Classes
// Constructor
class Square {
  constructor(side) {
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}
const square = new Square();
// The prototype chain (algo falta)

// Inheritance
class Animal {
  constructor(species, legs) {
    this.species = species;
    this.legs = legs;
  }
  speak() {
    return '...';
  }
}
class Dog extends Animal {
  constructor(breed) {
    super('Mammal', 4);
    this.breed = breed;
  }

  speak() {
    return 'Woof!';
  }
}
class Spider extends Animal {
  constructor() {
    super('Arachnid', 8);
  }
}
const dog = new Dog('German shepherd');
const spider = new Spider();

// Static methods
// ...
  static isDog(animal) {
    return animal.speak() === 'Woof!';
  }
// ...

// 04 - Global objects & methods ********************************************************************************************************
// String
// Template literals
let greeting = 'Hello';
let name = 'David';
let lastName = 'Hans';
console.log(greeting + ', my name is ' + name + ' ' + lastName + '!');
console.log(`${greeting}, my
  name is ${name} ${lastName}!`);

let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
// length
// charAt()
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
// indexOf()
// toLowerCase(), toUpperCase()
// substring(6, 11)
// replace(/[eio]/g, '')
// split('') split(' ')

// Array
// length
// indexOf
// for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// for of
for (const value of arr) {
  console.log(value);
}
// forEach
const doToEachArr = function(callback) {
  for (const value of arr) {
    callback(value);
  }
}
doToEachArr(value => {
  console.log(value.charAt(0));
});

arr.forEach(value => console.log(value.charAt(0)));
// filter
const filteredArr = arr.filter(value => value.indexOf('e') > -1);
console.log(filteredArr);
// reduce
let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1 ];
const sum = arr.reduce((result, value) => result += value, 0);
console.log(sum);

let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1, 5, 4, 3, 6, 1, 8, 5, 7, 4, 6, 1, 4, 3, 5, 4, 4, 4 ];
const freqMap = arr.reduce((result, value) => ({
  ...result,
  [value]: result[value] ? result[value] + 1 : 1
}), {});
console.log(freqMap);
// sort
let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1 ];
const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);
// map
let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1 ];
const newArr = arr.map(value => value * 2);
console.log(newArr);

let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1 ];
const newArr = arr
  .map((value, index) => ({
    pos: index,
    value
  }))
  .sort((a, b) => a.value - b.value);
console.log(newArr);

// entries (for)
// desctructuring
const arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1 ];
const [ a, b, c ] = arr;

const x = {
  a: 'Hello',
  b: 'World'
};
const { a, b } = x;

// Function: bind, call, apply
// Object: keys, values, entries, spread operator
// Math
// Window, document
// alert('Alerta!')

// Callbacks & Functional programming
const add = function(x) {
  return function(y) {
    return x + y;
  }
};
// High order functions, curried functions

// DOM manipulation
// Hello world
// Events
// Async programming
// Timeouts
// Promises & event loop
// Async await
// Fetch
// DOM manipulation example
// Node project
