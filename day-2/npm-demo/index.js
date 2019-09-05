const _ = require('lodash');

const numbers = [10, 20, 30];

const mulNumbers = _.map(numbers, (n) => { return n * 10 });

console.log("After changes : " + mulNumbers);

