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

// 2: Selectors

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
