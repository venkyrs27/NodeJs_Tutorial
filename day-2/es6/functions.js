// in js , functions are called First class citizens
// ES5 syntax
// function sum(a, b) {
//           return a + b;
// }

// ES5 function expression syntax
// const sum = function sum(a, b) {
//           return a + b;
// }

// New ES6 syntax 1 => arrow functions
// const sum = (a, b) => {
//           return a + b;
// }

// ES6 syntax 2
const sum = (a, b) => a + b;

const double = n => n * 2;

const greet = () => 'hi';
//or
//const greet = _ => 'hi';

// visit mdn arrow func doc for more

console.log(sum(2, 3));
