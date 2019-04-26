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

// Objects
// ejemplo cambiar un objeto, aunque sea declarado con const
let myObj = {
  x: 1,
  y: 2
};
console.log('X: ' + myObj.x);
console.log('Y: ' + myObj.y);
console.log('Obj: ' + myObj);



// Arrays, functions


// Spread operator
// For loop example
// comparison by value or reference
// Constructor
// Properties and methods
// The prototype chain & static methods
// Classes
// Inheritance
// This, arrow func?

// Callbacks & Functional programming
const add = function(x) {
  return function(y) {
    return x + y;
  }
};

// High order functions, curried functions

// Global objects & methods
// String, template literals
// Array: find, indexOf, filter, reduce, map, spread operator
// Function: bind, call, apply
// Object: keys, values, entries, spread operator
// Math
// Window, document
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
