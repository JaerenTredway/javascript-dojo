// This project shows different ways to swap the values of two variables



//*** create a momentary array, sneak in reassignment, return index zero:
let m = 1;
let n = 2;

console.log('Original values:\nm: ' + m + '\nn: ' + n);

m = [n, n=m][0];

console.log("Swapped values:\nm: " + m + "\nn: " + n);



//*** sneak in a reassignment and return zero: ********
let x = 3;
let y = 4;

console.log('Original values:\nx: ' + x + '\ny: ' + y);

x = y + (y=x, 0);

console.log("Swapped values:\nx: " + x + "\ny: " + y);



//************* ES6 array swap: ***********************
let i = 5;
let j = 6;

console.log('Original values:\ni: ' + i + '\nj: ' + j);

[i, j] = [j, i];

console.log("Swapped values:\ni: " + i + "\nj: " + j);



//************ use a temporary variable: ***************
//*********** (this is the fastest method) *************
let a = 7;
let b = 8;

console.log('Original values:\na: ' + a + '\nb: ' + b);

let temp=a;
a=b;
b=temp;

console.log('Swapped values:\na: ' + a + '\nb: ' + b);


//**** XOR bitwise swap algorithm: *********************
a = 9, b = 10;

console.log('Original values:\na: ' + a + '\nb: ' + b);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('Swapped values:\na: ' + a + '\nb: ' + b);


//********* experiment area: ****************************

// a = 150;
// b = 160;
//
// // a = a ^ b;
// // console.log("\n\n\n" + a, b);
// // b = a ^ b;
// // console.log(a, b);
// // a = a ^ b;
// // console.log(a, b);
//
// //a = a ^ b;
// console.log("\n\n\n" + a, b);
// b = a ^ b;
// console.log(a, b);
// a = a ^ b;
// console.log(a, b);
