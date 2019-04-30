# Project setup

## HTML
```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tutorial JS</title>
</head>
<body>
  <div>Hello JavaScript</div>
  <script src="index.js" ></script>
</body>
</html>
```

## JS
```JavaScript
console.log('Hello world!');`
```

# Variables

## Declaration
```JavaScript
var x = 1;
console.log('x = ' + x);
```

## Weakly typed
```JavaScript
var x;
console.log(`x = ${x} (${typeof x})`);
x = '1';
console.log(`x = ${x} (${typeof x})`);
x = true;
console.log(`x = ${x} (${typeof x})`);
x = { x: 1 };
console.log(`x = ${x} (${typeof x})`);
```

## Type coercion
```JavaScript
  console.log(`1 + 1 = ${1 + 1}`);
  console.log(`1 + '1' = ${1 + '1'}`);
  console.log(`1 + true = ${1 + true}`);
  console.log(`1 + [1] = ${1 + [1]}`);
  console.log(`1 + undefined = ${1 + undefined}`);
```

## Hoisting
```JavaScript
  console.log('x = ' + x);
  var x = 1;
  console.log('y = ' + y);
  let y = 1;
```

# Functions
## Declaration
```JavaScript
function foo(arg) {
  return arg;
}

console.log(`foo(1) = ${foo(1)}`);
```

## Expression
### Named
```JavaScript
const  foo = function bar(arg) {
  return arg;
}

console.log(`foo(1) = ${foo(1)}`);
```
### Anonymous
```JavaScript
const  foo = function (arg) {
  return arg;
}

console.log(`foo(1) = ${foo(1)}`);
```

## Hoisting
### Declaration
```JavaScript
function x() { return 1 };

console.log(`x() = ${x()}`);
console.log(`y() = ${y()}`);
console.log(`z() = ${z()}`);

function y() { return 2 };
```

### Expression
```JavaScript
var x = function x() { return 1 };

console.log(`x() = ${x()}`);
console.log(`y() = ${y()}`);
console.log(`z() = ${z()}`);

var y = function y() { return 2 };
```

## Arguments
### Passed by value
```JavaScript
let x = 1;
let foo = function(x) {
  x = x + 3;
  return x;
};

console.log(`foo(x) = ${foo(x)}`);
console.log(`x = ${x}`);
```

### Passed by reference
```JavaScript
let x = { a: 1 };
let foo = function(x) {
  x.a = x.a + 3;
  return x;
}

console.log(`foo(x) = ${foo(x)}`);
console.log(`x = ${x}`);
```

## Closure
```JavaScript
let x = 1
const foo1 = function(x) {
  x = x + 1;
};

const foo2 = function() {
  let x = 2;
};

const foo3 = function() {
  x = x + 1;
}

foo1(x);
console.log(`After foo1(x), x = ${x}`);
foo2();
console.log(`After foo2(), x = ${x}`);
foo3();
console.log(`After foo3(), x = ${x}`);
```

# Objects

## Properties and Methods
```JavaScript
let propName = 'String value';
let myObj = {
  x: 1,
  y: 2,
  foo: function(arg) {
    return arg;
  },
  [propName]: 'I\'m a string'
};

myObj.z = 3;
myObj['a'] = 'a';
console.log(myObj);
```

## Passed by reference
```JavaScript
let obj1 = {
  x: 1
};
let obj2 = {
  x: 1
};

console.log(`obj1 === obj2 = ${obj1 === obj2}`);

obj2 = obj1;
console.log(`obj1 === obj2 = ${obj1 === obj2}`);

obj1.y = 2;
console.log('obj1: ');
console.log(obj1);
console.log('obj2: ');
console.log(obj2);
console.log(`obj1 === obj2 = ${obj1 === obj2}`);

obj2 = { ...obj1 };
obj1.z = 3;
console.log('obj1: ');
console.log(obj1);
console.log('obj2: ');
console.log(obj2);
console.log(`obj1 === obj2 = ${obj1 === obj2}`);

const constObj = { value: 'Initial value' };
console.log('constObj: ');
console.log(constObj);
constObj.value = 'Second value';
console.log('constObj: ');
console.log(constObj);
constObj = { value: 'Third value' };
console.log('constObj: ');
console.log(constObj);
```

## This
```JavaScript
const foo = function () {
  return this;
};

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
```

### Behaviour
```JavaScript
const foo = function () {
  return this;
};

const fooThis = function () {
  const foo = function () {
    return this;
  }
  return foo();
}

const fooThat = function () {
  const foo = function (that) {
    return that;
  }
  return foo(this);
}

const fooArrow = function () {
  const foo = _ => this;
  return foo();
}

obj1 = {
  a: 1,
  bar: foo,
  barThis: fooThis,
  barThat: fooThat,
  barArrow: fooArrow
};

console.log(obj1.bar());
console.log(obj1.barThis());
console.log(obj1.barThat());
console.log(obj1.barArrow());
```

# Classes
## Constructor
```JavaScript
class Square {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const square = new Square(4);
console.log(square);
console.log(`square.area() = ${square.area()}`);
```

## Inheritance & static methods
```JavaScript
class Animal {
  constructor(species, legs) {
    this.species = species;
    this.legs = legs;
  }

  static isMammal(animal) {
    return animal.species === 'Mammal';
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
console.log(dog);
console.log(`dog.speak() = ${dog.speak()}`);
console.log(`Animal.isMammal(dog) = ${Animal.isMammal(dog)}`);
console.log(spider);
console.log(`spider.speak() = ${spider.speak()}`);
console.log(`Animal.isMammal(spider) = ${Animal.isMammal(spider)}`);
```

# Global objects & methods
## Arrays
```JavaScript
let arr = [ 5, 4, 6, 3, 7, 8, 2, 9, 1, 5, 4, 3, 6, 1, 8, 5, 7, 4, 6, 1, 4, 3, 5, 4, 4, 4 ];
console.log(`arr = ${arr}`);

const sum = arr.reduce((result, value) => result + value, 0);
console.log(`sum = ${sum}`);

const frequencyMap = arr.reduce((result, value) => ({
  ...result,
  [value]: result[value] ? result[value] + 1 : 1
}), {});
console.log(frequencyMap);

const sortedArr = [...arr].sort((a, b) => a - b);
console.log(`sortedArr = ${sortedArr}`);
// map

const doubleArr = arr.map(value => value * 2);
console.log(doubleArr);

const sortedWithOriginalPositionsMap = arr
  .map((value, index) => ({
    pos: index,
    value
  }))
  .sort((a, b) => a.value - b.value);
console.log(sortedWithOriginalPositions);
```

## Objects

```JavaScript
const obj1 = {
  x: 'Equis',
  y: 'Igriega',
  z: 'zeta'
};

for (const [key, value] of Object.entries(obj1)) {
  console.log(`${key}: ${value}`);
}
```

## Document
```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tutorial JS</title>
</head>
<body>
  <div id="root">Hello JavaScript</div>
  <script src="index.js" ></script>
</body>
</html>
```

```JavaScript
let clicks = 0;
const addClick = event => {
  clicks += 1;
  console.log(clicks);
}

const root = document.getElementById('root')
root.innerHTML = 'Hello SEA!';
root.addEventListener('click', addClick);
```

# Async programming

## Event loop
```JavaScript
const start = new Date();
const log = function(value) {
  let time = (new Date() - start) / 1000 + 's';
  console.log(`${value} (${time})`);
};

const blocker = function () {
  let n = 1000000000;
  let i = 0;
  while (i < n) {
    i++;
  }
  return 'Blocker done!';
};

const asyncBlocker = function () {
  return Promise.resolve().then(blocker);
};

log('First normal log');
setTimeout(_ => log('Timeout' + blocker()), 0);
asyncBlocker().then(response => log('Async' + response));
log('Normal' + blocker());
log('Second normal log');
```

## Promises
```JavaScript
console.log('Searching...');
fetch('https://swapi.co/api/people/')
  .then(response => {
    response.json()
      .then(response => {
        console.log(response);
      });
  });
```

### Chaining
```JavaScript
console.log('Searching...');
fetch('https://swapi.co/api/people/')
  .then(response => {
    return response.json();
  })
  .then(response => {
    let personajes = response.results.map(value => value.name);
    console.log(personajes);
  });
```

### Async await
```JavaScript
const fetchCharacters = async function () {
  let response = await fetch('https://swapi.co/api/people/');
  let data = await response.json();
  const luke = data.results[0];
  response = await fetch(luke.species);
  data = await response.json();
  return data;
};

console.log('Searching...');
fetchCharacters()
  .then(response => {
    console.log(response);
  });
```

# Functional programming
## Curried functions
```JavaScript
const add = function (a, b) {
  return a + b;
};

const addCurried = a => b => a + b;

console.log(`addCurried(2)(3) = ${addCurried(2)(3)}`);
const add4 = addCurried(4);
console.log(`add4(5) = ${add4(5)}`);
```

## High order functions
```JavaScript
const add = function (...values) {
  return values.reduce((result, value) => result + value, 0);
};

const numbersOnly = function (callback, ...values) {
  const cleanValues = values.filter(value => typeof value === 'number');
  return callback(...cleanValues);
};

console.log(`add(2, [ 0 ], 3, '', 1, true, 9) = ${add(2, [ 0 ], 3, '', 1, true, 9)}`);
console.log(`numbersOnly(add, 2, [ 0 ], 3, '', 1, true, 9) = ${numbersOnly(add, 2, [ 0 ], 3, '', 1, true, 9)}`);
```

# Example
```HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tutorial JS</title> 
</head>
<body>
  <div id="root">
    <input id="search-input" type="text">
    <button id="search-button">Search</button>
    <div>
      <h3>Search results</h3>
      <ul id="result-list"></ul>
    </div>
    <div>
      <h4>Character details</h4>
      <ul id="character-details"></ul>
    </div>
  </div>
  <script src="tutorial.js" ></script>
</body>
</html>
```

```JavaScript
let textInput = '';
const setTextInput = function (event) {
  textInput = event.target.value;
};

const selectCharacter = character => event => {
  let details = document.getElementById('character-details');
  while (details.firstChild) {
    details.removeChild(details.firstChild);
  }
  for (const [key, value] of Object.entries(character)) {
    let characterValue = document.createElement('li');
    characterValue.innerHTML = `${key}: ${value}`;
    details.appendChild(characterValue);
  }
};

const createList = function (list) {
  let listElement = document.getElementById('result-list');
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
  for (const value of list) {
    let listItem = document.createElement('li');
    listItem.innerHTML = value.name;
    listItem.addEventListener('click', selectCharacter(value))
    listElement.appendChild(listItem);
  }
};

const geResults = async function (search) {
  const response = await fetch('https://swapi.co/api/people/?search=' + search);
  const data = await response.json();
  return data.results;
};

const search = function (event) {
  console.log('Searching...');
  geResults(textInput).then(results => {
    createList(results);
    console.log('Done searching!');
  });
};

document.getElementById('search-input')
  .addEventListener('input', setTextInput);

document.getElementById('search-button')
  .addEventListener('click', search);
```
