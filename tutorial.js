class Animal {
  constructor(species, legs) {
    this.species = species;
    this.legs = legs;
  }

  static isDog(animal) {
    return animal.speak() === 'Woof!';
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
