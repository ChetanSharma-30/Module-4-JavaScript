// Arrays and Objects in JavaScript

// Arrays

console.log("We are in tut 7");

// const marks = [34, 55, 46, 58, 90, 80];
const fruits = ['orange', 'apple', 'banana'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(32, 48, 79, 'orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruits);
// console.log(fruits[1]);
// console.log(fruits.length);
// console.log(Array.isArray(arr));
// console.log(Array.isArray('asdf'));
// console.log(marks);

arr[0] = 'Chetan';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);
 
// let value = marks.indexOf(55);
// console.log(value);

// Mutating or modify array

// marks.push(34);
// marks.unshift(1009);
// marks.pop();
// marks.shift();
// marks.splice(1, 2);
// marks.reverse();
let marks = [34, 55, 46, 58, 90, 80];
// console.log(marks);
let marks2 = [1, 2, 3, 4];
marks = marks.concat(marks2);
// console.log(marks);


// Objects

let myobj = {
    'first name' : 'chetan',
    Channel: 'codewithchetan',
    isActive: true,
    marks: [1, 2, 3, 4, 5],
}

// console.log(myobj);
// console.log(myobj['first name']);
// console.log(myobj['Channel']);
// console.log(myobj.Channel);

