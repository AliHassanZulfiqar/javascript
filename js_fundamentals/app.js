// 1: alert('Hello World')

// 2: Log to console 
/*
console.log('Hello World');
console.log('123');
console.log(true);
var greeting = 'Hello'
console.log(greeting);
console.log([1,2,3,4]); //Array
console.log({a:1, b:2}); //object
console.table({a:1, b:2}); //table
console.error('Error 404'); //Errors
// console.clear(); //Clear Console
console.warn('Warning!'); //warning
console.time('HELLO'); //time
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('HELLO End'); //time
*/

// 3: var, let, const

/*
// var:

var name = 'Ali Hassan'; //declaring
var id = 12;
console.log(name);
name = 'Johny'; //reassigning
console.log(name);

var age; //Initializing
console.log(age);
age = 23;
console.log(age);

// Allowed "letters, numbers, _, $"
// Cannot start with a number

var firstName = 'John'; // Camel case
var first_name = 'John'; // Underscore
var FirstName = 'John'; // Pascal Case

// let:

let name;
let name = 'Ali Hassan'; //declaring
let id = 12;
console.log(name);
name = 'Johny'; //reassigning
console.log(name);

// const:

const name = 'Ali'; //cannot be reassigned, have to be assigned with a value
console.log(name);

const person = {
  name = 'Ali',
  age = 30
};

person.name = 'Hassan'; // const cannot be reassigned but it's objects can be.
person.age = '20';
console.log(person);

const num = [1, 2, 3, 4, 5];
num.push(6); // same goes for arrays, here we adding a number to array
console.log(num);
*/

// Data Types:


// PRIMITIVE

const name = 'John Doe'; // String
const age = 45; // Number
const hasKids = true; // Boolean
const car = null; // Null
let test; // Undefined
const sym = Symbol(); // Symbol

// REFERENCE TYPES - Objects

const hobbies = ['movies', 'music']; // Array
const address = {
  city: 'Boston',
  state: 'MA'
} // Object literal
const today = new Date();
console.log(today);
console.log(typeof today);