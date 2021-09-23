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

// 4: Data Types:

/*
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
*/

// 5: Type Conversion

/*
let val;

// number to string
val = String(555); // note S is capital
val = String(4+4);
// bool to string
val = String(true); // note S is capital
// Date to string
val = String(new Date()); // note S is capital
// Array to string
val = String([1, 2, 3, 4]); // note S is capital
// toString()
val = (4).toString(); // note S is capital
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30'); // needed for decimals

//output
console.log(val);
console.log(typeof val);
// console.log(val.length); //only works on Strings
console.log(val.toFixed(2)); //only works on numbers

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
*/

// 6: Math Object & numbers

/*
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.random() * 20; // a random number b/w 1 & 19
val = Math.random() * 20 + 1; // a random number b/w 1 & 20
val = Math.floor(Math.random() * 20 + 1); // a random number b/w 1 & 20 excluding decimals

console.log(val);
*/

// 7: String Methods Concatenation

/*
const firstName = 'Ali';
const lastName = 'Hassan';
const age = 43;
const str = 'Hey, I have been looking for you'
const tags = 'Web Development, Programming, Web Designing, SEO'

let val;

val = firstName + lastName;


val = firstName + ' ' + lastName; //concatenation

val = firstName;
val += lastName; //appending

val = 'Ali ';
val += 'Hassan' //appending

val = 'Hello! My name is ' + firstName + ' and I am ' + age;

val = 'He\'s been living at her sister\'s for several months now'; // Escaping
val = "He's been living at her sister's for several months now"; // Escaping

// properties and methods available with strings

val = firstName.length; //legth

val = firstName.concat(' ', lastName); //concat()-> similar to concatenation

val = firstName.toUpperCase(); //changing the case
val = firstName.toLowerCase();

val = firstName[0]; //array

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt(1);
val = firstName.charAt(firstName.length - 1); // formula for showing the last character

val = firstName.substring(0, 2); //substring

val = firstName.slice(0,2) //almost same as substring
val = firstName.slice(-2) //but can be used with -ve values

val = str.split(' '); // turning into an array based on spaces
val = tags.split(','); // turning into an array based on comma's

val = str.replace('you', 'him'); // replaces you with him

val = tags.includes('Web Design'); //looks for a certain thing and tells us if its is located in the specified string or not
val = tags.includes('Java'); // false as it is not present in the specified string

console.log(val);
*/

// 8: Template literals/strings

const name = 'Ali';
const age = 23;
const job = 'Developer';
const city = 'Lahore';

let html;

//Without template strings/literals (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
          '<li>Name:  ' + name + '</li>' +
          '<li>Age:  ' + age + '</li>' +
          '<li>Job:  ' + job + '</li>' +
          '<li>City:  ' + city + '</li>' +
        '</ul>';

// With Template literals/strings
function hello(){
  return 'Hello World';
};

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${4+4}</li>
    <li>${4+name}</li>
    <li>${hello()}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
  </ul>
`;

document.body.innerHTML = html