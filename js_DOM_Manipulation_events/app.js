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

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);