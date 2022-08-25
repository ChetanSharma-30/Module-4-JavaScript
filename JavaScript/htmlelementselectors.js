// Html Element Selectors in JavaScript

console.log('Welcome to tut 13')

/*
Element Selectors:
1. Single element selector
2. Multi element selector

*/
// 1. Single element selector

let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Chetan is a good boy';
element.innerHTML = '<b>Chetan is a good boy</b>';
// console.log(element);

let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'orange';
// console.log(sel);

// 2. Multi Element Selectors

let ele = document.getElementsByClassName('child');
ele = document.getElementsByClassName('container');
ele = document.getElementsByTagName('div');
console.log(ele);
 
Array.from(ele).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
})
// console.log(ele[0].getElementsByClassName('child'));
