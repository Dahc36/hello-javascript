function MyObject(name) {
  this.name = name;
  this.myMethod = function(newName) {
    this.name = newName;
  }
};

MyObject.prototype.toStdout = function() {
  console.log(this)
}

var myObectInstance = new MyObject('Object name');

class MyClass {
  constructor(name){
    this.name = name;
  }

  static testFunction(value){
    console.log(this);
    console.log(value);
  }

  myMethod(newName) {
    this.name = newName;
  }

  toStdout() {
    console.log(this)
  }
}

var myClassInstance = new MyClass('Class name');