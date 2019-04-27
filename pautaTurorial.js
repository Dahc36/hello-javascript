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

// 01 - Variables ******************************************************************************
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

// 02 - Functions ******************************************************************************
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

// 03 - Objects ******************************************************************************
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
let obj1 = {
  x: 1
};
let obj2 = {
  x: 1
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// Spread operator
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

// Global objects & methods
// String, template literals
// Array: find, indexOf, filter, reduce, map, spread operator
// Function: bind, call, apply
// Object: keys, values, entries, spread operator
// Math
// Window, document

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
