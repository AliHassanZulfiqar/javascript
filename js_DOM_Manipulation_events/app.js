// 1: Document Object properties

/*
let val;

val = document;
val = document.all;
val = document.all(5);
val = document.all.length;

console.log(val);let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className; // it shows us the classes
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
*/

// 2: Single Element Selectors

/*
// document.getElementById():

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelectors():

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // it will only show the first one

document.querySelector('li').style.color = '#ff4040'; // it will only select the first one
document.querySelector('ul li').style.color = '#ff4040'; // still, it will only select the first one
document.querySelector('li:last-child').style.color = '#ff4040'; // it will only select the last one
document.querySelector('li:nth-child(3)').style.color = '#a6c020'; // it will only select the custom one
document.querySelector('li:nth-child(odd)').style.background = '#333'; // it will only select the last one
*/

// 2: Multiple Element Selectors

/*
// document.getElementsByClassName
// const item = document.getElementsByClassName('collection-item'); //this selects all the class items in the whole document but we should not do it on a global scope
// console.log(item);
// console.log(item[0]); // we can also use array method here to select a specific one
// item[0].style.color = 'blue';
// item[0].textContent = 'blue';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // this way we selected only classes within ul

// console.log(listItems);

// document.getElementsByTagName
// let tag = document.getElementsByTagName('li'); //this selects all specified html tags in the whole document but we should not do it on a global scope
// console.log(tag);
// console.log(tag[0]); // we can also use array method here to select a specific one
// tag[0].style.color = 'blue';
// tag[0].textContent = 'blue';

// // Convert HTML collection into array
// tag = Array.from(tag);

// // tag.reverse();

// tag.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(tag);

// document.querySelectorsAll():
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = "#333";
  li.style.color = "#fff";
});

for(let i=0; i < liEven.length; i++){
    liEven[i].style.background = '#CCC';
};

console.log(items);
*/

// 3: DOM Traversing

/*
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; //returns nodelist including text nodes which can be line breaks most of the time.
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// IMPORTANT: nodeList includes everything in the document which even includes line breaks etc


// Get children element nodes
val = list.children; // returns html collection and does not include text nodes
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild; // includes text nodes too
val = list.firstElementChild; // does not include text nodes

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement; // most of the times it gives almost the same results as parentNode
val = listItem.parentElement.parentElement; // parent of the parent

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // we can combine different things

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);
*/

// 4: DOM Element creation

/*
// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes to the newly created link element
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// li.style.background = '#333';
// li.style.color = '#fff';
// li.textContent = 'Added List Item'

console.log(li);
*/

// 5: Replacing & Removing Elements

/*
const newHeading = document.createElement('h3');
//creating element
newHeading.id = 'task-title';
//adding an id
newHeading.appendChild(document.createTextNode('Task List'));
//getting the old element
const oldHeading = document.getElementById('task-title');
//Replacing
document.querySelector('.card-action').replaceChild(newHeading, oldHeading);

console.log(newHeading);

//Removing the Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[1].remove();

// Remove child element
list.removeChild(lis[2]);

// Adding & Removing classes and attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList; // it returns to us in DOMTokenList format
val = link.classList[0];
link.classList.add('test'); // it adds a new class to the targeted element
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com'); // it simply replaces href attribute with google.com
link.setAttribute('title', 'Google');// adding a new attribute named title
val = link.hasAttribute('title'); // shows us a boolean value
link.removeAttribute('title');
val = link;

console.log(val);
*/

// 6: Event listener & Event Object

/*
// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Hello World')

//   e.preventDefault();
// }); // so if there is nothing in the href attr than it will just run the funtion and reload the page which a default behaviour. we can simply overcome this by just using # or we can use an event object and pass the parameter to prevent default bahaviour

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   console.log('Hello')
//   e.preventDefault()
// };

// using a call back function is better than using an anonymous function

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  let val;
  
  val = e;

   // Event target element
   val = e.target;
   val = e.target.id;
   val = e.target.className;
   val = e.target.classList;

  //  e.target.innerText = 'Hello'
  
  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;
 
  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;
 
  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;
  
  
  console.log(val)

  e.preventDefault()
};
*/

// 7: Mouse Events 

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}