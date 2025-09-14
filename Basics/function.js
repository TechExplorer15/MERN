/* ---------Functions-----------
1. What is a Function?

👉 A function is a block of reusable code designed to perform a task.

Encapsulation: Groups logic in one place.

Reusability: Write once, use multiple times.

Maintainability: Makes code cleaner and easier to debug. */

// DRY - Don't Repeat Yourself
// It is created when we want to use some lines of code multiple times in our project and we don't when and where exactly we need to have this block of code
// in simple terns, function are a block of code that perforn specific tasks.
// Same rues of variable name and function name
//function parameters are defined but not passed arguments by default pass NaN



/* function welcome(name, platform){
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
if you issue book more than 10 days it will charge 3rs/day 

function library_fine(issue_dates = 0){
 if(issue_dates > 10){}
}

// Function program for calculate average
function average(n1 = 0, n2 = 0, n3 = 0){
    let avg = (n1 + n2 + n3/3);
    console.log(avg);
}

average(15, 25, 40); */


// Write a function program to calculate nCr
function factorial(n){
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

factorial(5);

function calculation(n, r){
    let cal = factorial(n) / (factorial(n-r)*factorial(r));
    console.log("nCr:",cal);
    
}

calculation(3, 2)

// Example 10 Book submitting in Library
// time complexity O(1)
/* console.log("-------------------------------");
function library(issuedDate = 0)
{
	const daysOfIssuance = calculateDays(issuedDate);
    if (daysOfIssuance <= 10) return 0;
	return (daysOfIssuance - 10) * 3;
}
function calculateDays(issuedDate)
{
	return 25 - issuedDate;
}

console.log("Total Fine: " + library(22));

// Example 11 Handal the multiple parameters
// rest operator - combines all the values inside it and makes an array
// always comes at position in function params
// time complexity O(n)
console.log("-------------------------------");
function sumN(a, b, ...c) // rest operator
{
	console.log(a,b,c);
}
sumN(1, 2, 3, 4); */