console.log("Hello World!");

/* Wrong way of declare variable
person1 = "Rohit";
person1age = 21;

person2 = "Pratik";
person2age = 22;

console.log(person1);
console.log("The some of age of both person is:", person1age + person2age); */

// // write way of declare variable
// console.log(person1);
// let person1 = "Rohit";
// let person1age; // undefined variable

// let person2; //declaration of variable
// person2 = "Pratik"; //initialization or defination of variable
// let person2age = 22; //Both at same time

// console.log(person1);
// console.log("The some of age of both person is:", person1age + person2age);

let name = "Rohit"; // let variable can change their value in future
const name1 = "Pratik"; // const variable can't change it's value in future
let age = 21;

// Data types in js
// Data types --> types of value that variable holds

console.log(typeof name);
console.log(typeof age);

// js is called dynamically type language

let x = "my name is";
x = 5;
x = true;


// ========= Arithmatics opration ==========

// let a = 50;
// let b = 10;

// // sum
// let c = a + b;
// console.log("Sum of a + b is: ", c);

// //subtract
// c = a-b;
// console.log(" a - b is: ", c);

// //multiplication
// c = a*b;
// console.log("Multiplication of a * b is: ", c);

// //Division
// c = a / b;
// console.log("Division of a / b is: ", c);

// //remider %
// c = a % b;
// console.log("% of a % b is: ", c);

const min = 24;
let result = min * 60;
console.log("Minute to sec of 24 is: ", result);

const num2 = 2345;
const second_digit = num2%5;
console.log("The second last digit of", num2 , "is:", second_digit);


// Q.find out the last third digit 

/* 
some weird behaviours of arithmatic operator
*/

//Addition

a = "abc";
c = "123"
b = c + 2;
console.log(b); //in adition it give priority to the string


//multiplication
b = c * 2;
d = a * 2;
console.log(b);
console.log(d);

//decimal addition
c = 0.3 + 0.4;
console.log(c);

//modules of negative number


//precidence and associativity


//
let r = "34";
r += 26;
r *= 2;
console.log(r);