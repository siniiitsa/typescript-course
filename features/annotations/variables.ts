// type annotations are explicit declarations of type for specific variables

// primitives
let count: number = 5;
let userName: string = 'Sergey';
let isObject: boolean = false;

let nothing1: null = null;
let nothign2: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let nums: number[] = [1, 2, 3];
let names: string[] = ['Sergey', 'Olga', 'Vadim'];
let answers: boolean[] = [true, false];
let dates: Date[] = [new Date()];

class User {}
let users: User[] = [new User()];

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};

// When to use annotations
// 1) Function that returns 'any' type
let json = '{"x": 20, "y": 30}';
let coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize later
let colors = ['red', 'green', 'blue'];
let hasGreen: boolean;

for (let color of colors) {
  if (color === 'green') {
    hasGreen = true;
  }
}

// 3) Variables whose type cannot be inferred correctly
const numbers = [-1, 0, 1];
let lastNumberAboveZero: null | number;

for (let n of numbers) {
  if (n > 0) {
    lastNumberAboveZero = n;
  }
}
