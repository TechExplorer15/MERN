// console.log(a);
// var a = 10;

// // let variable                                  
// /* can be iniatialized, uniniatialized,
//  reassigned;
// can not be redeclare
// ex- let a = 5;
// let a = 45;*/


// /*precidence and associativity 

// *precidence --> Operator precedence in JavaScript determines
// the order in which different operators are evaluated in an expression.
// priority-
// 1. ()
// 2. **
// 3. *,/
// 4. +,-


// *associativity --> If two operators have the same precedence, JavaScript uses
// associativity to decide the order of evaluation.

// Left-to-right (left-associative): Most operators (+, -, *, /, %, <, >, &&, ||)

// Right-to-left (right-associative): Some operators like assignment (=, +=, etc.) and exponentiation (**).

// */
// let c = 3 * 4 + 30 / 6 * 5 ** 2;
// console.log(c);

// let x = 3 + 3 ** 4 / 3 ** 2 - 3 * 4 / 6;
// console.log(x);

// let y = "123" + 5 ** 5 / 25**2 / 5;
// console.log(y);

// /* Logical operators 

// */




// // conditions

// let num = 4;

// if (num % 2 == 0){
//     console.log("Even");
// }
// else {
//     console.log("Odd");}


// // Age

// let age = 12;
// if (age <= 18) {
//     console.log("The person is teenager")
// }
// else {
//     console.log("The person is Adult");
// }

// // Check the given number is even or odd
// let number = 17;

// if ((number/2)%2 == 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

// // == vs ===
// let A = "12";
// const B = 12;
// let D = 12;

// if (A == B){
//     console.log("Both A and B has same value");
// }

// if (B === D) {
//     console.log("Both B and D has same value and Datatypes");
// }

// // Grading System

// let score = 52;

// if (score >= 80 && score <= 100){
//     console.log("Grade : A");
// }
// else if (score >= 60 && score < 80){
//     console.log("Grade : B");
// }
// else if (score >= 35 && score < 60){
//     console.log("Grade : C");
// }
// else {
//     console.log("Grade : Fail");
// }


// // Nested Condition
// let age1 = 25;
// let gender = "Male";

// if (age1 >= 18 && gender == "Male"){
//     console.log("Mature BOY");
// }
// else if (age1 >= 18 && gender == "Female"){
//     console.log("Mature Girl");
// }
// else {
//     console.log("Invalid Entry");
// }

// // logical operator

// /*  && --> Both condition need to True
// || --> One Condition need to True*/

// // print the lucky draw winner

// let ticket_num = 102;
// if (ticket_num == 11 || ticket_num == 101){
//     console.log("Winner"); }
// else{
//     console.log("Loose");
// }

// //
// let log_in = true;
// let has_subscription = false;

// if (log_in && has_subscription)
// {
//     console.log("Primium User");
// }
// else {
//     console.log("Non primium user")
// }

let number = 17;

if (number != 17){
    console.log("Good Number")
}
else{
    console.log("Bad Number");
}

let A = 122;
if (Math.floor(A / 100) == A%10){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}


//
let name1 = "Pratik";
let name2 = "Rohit";
let marks1 = 40;
let marks2 = 50;

if (marks1 > marks2){
     console.log(name1, "has scored highest no:", marks1);
}
else{
    console.log(name2, "has scored highest no:", marks2);
}
