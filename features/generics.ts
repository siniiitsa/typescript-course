// T is used as a function argument, just for type to use anywhere inside the class
class collectionOfData<T> {
  constructor(public collection: T[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

const answers = new collectionOfData<boolean>([true, false]);
const strings = new collectionOfData<string>(['a', 'b', 'c']);

// Type inference works here too
const numbers = new collectionOfData([1, 2, 3]);

// Generics with functions

function printItems<T>(collection: T[]): void {
  for (const item of collection) {
    console.log(item);
  }
}

// Generic Constraints

class House {
  print(): void {
    console.log('I am a House');
  }
}

class Car {
  print(): void {
    console.log('I am a Car');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(collection: T[]): void {
  for (let item of collection) {
    item.print();
  }
}

printHousesOrCars<House | Car>([new House(), new Car()]);
