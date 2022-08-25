// Children, Parent & Traversing in DOM

console.log('Welcome to tut 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);
// console.log(cont.childNodes);
// console.log(cont.children);
 
// Node types

// 1. Element
// 2. Attributes
// 3. Text Node
// 8. Comment
// 9. document
// 10. doctype

let container = document.querySelector('div.container');
console.log(container.children[1].children);