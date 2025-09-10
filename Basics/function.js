/* ---------Functions-----------
1. What is a Function?

👉 A function is a block of reusable code designed to perform a task.

Encapsulation: Groups logic in one place.

Reusability: Write once, use multiple times.

Maintainability: Makes code cleaner and easier to debug. */


function welcome(name, platform){
   console.log("Hello",name,"Welcome to our",platform);
}

welcome("Riya", "App");
welcome("Pratik", "Website");
welcome("Deep", "Office");

function greatest_number(a, b){
    let max = Math.max(a, b)
    return max;
}

let max1 = greatest_number(10, 25);
let max2 = greatest_number(85, 55);

console.log({max1, max2});

// Function for minimum number by using all posible method


function sum(A = 0, B = 0, C = 0 ){
    return A + B + C;
}

let sum1 = sum(5, 15, 2);
let sum2 = sum(15, 2);

console.log({sum1, sum2});

// fUNCTION FOR LIBRARY

/* if issue book less than 10 days it will pay zero fees
if you issue book more than 10 days it will charge 3rs/day */

function library_fine(issue_dates = 0){
 if(issue_dates > 10){}
}