// type conversion and type coercion

// Tyoe conversion

console .log('welcome to tut 5');
let myvar;
// myvar = 34;
myvar = String(34);
// console.log(myvar);
// console.log(myvar, (typeof myvar));

// let booleanvar = true;
let booleanvar = String(true);
// console.log(booleanvar, (typeof booleanvar));

// let date = new Date();
let date = String(new Date());
// console.log(date, (typeof date));

let arr = [1,2,3,4,5];
// let arr = String([1,2,3,4,5]);
// console.log(arr, (typeof arr));
// console.log(arr.length, (typeof arr));

let i = 8;
// console.log(i.toString());

// let stri = "3434";
let stri = Number("3434");
// stri = Number("343d4");
// stri = Number(true);
// stri = Number(false);
// console.log(stri, (typeof stri));

// let number = parseInt('34');
// let number = parseInt('34.85');
// let number = Number('34.85');
let number = parseFloat('34.85');
// console.log(number, (typeof number));
// console.log(number.toFixed(20), (typeof number));


// Type coercion

// let mystr = "698";
let mystr = Number("698");
let mynum = 34;
// console.log(mystr + mynum);
