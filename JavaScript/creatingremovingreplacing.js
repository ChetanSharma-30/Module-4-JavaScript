// Creating, Removing & Replacing Element in JavaScript

console.log('Welcome to tut 16');

let element = document.createElement('li');

// Add a class name to the element

element.className = 'childu1';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
element.innerText = 'Hello chetan';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let ele2 = document.createElement('h3');
ele2.id = 'ele2';
ele2.className = 'ele2';
let tnode = document.createTextNode('This is created node for ele2');
ele2.appendChild(tnode);

element.replaceWith(ele2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
