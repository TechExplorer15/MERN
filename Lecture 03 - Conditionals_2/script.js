/*
const name1 = "Rohit";
const name2 = "Pratik";

let marks1 = 50;
let marks2 = 40;

let winner_name = name1;
let winner_marks = marks1;

if (marks2 > marks1){
    winner_name = name2;
    winner_marks = marks2;
}

console.log(winner_name, "has score highest marks :", winner_marks);*/

// ternnary operator

let number = 5;

if (
  number % 2 == 0
    ? console.log(number, "is Even")
    : console.log(number, "is Odd")
);

//check the number is posive or negative

/* let A = 10;

const posive_negative = A >= 0 ? "Positive" : "Negative";

console.log("Number", A, "is", posive_negative);

let A = -1;

const posive_negative =
 A < 0 ? "Negative" :
 A == 0 ? "Zero" :
"Positive";
console.log("Number", A, "is", posive_negative);

// Homework : Try all yesterday's question with ternary operator

// Score

const name1 = "Rohit";
const name2 = "Pratik";

let marks1 = 50;
let marks2 = 100;

let winner_name = name1;
let winner_marks = marks1;

let result = (marks2 > marks1) ? console.log(name2, "has score highest marks :", marks2) :
console.log(winner_name, "has score highest marks :", winner_marks); */

// Greatest among three no. */

let num1 = 10;
let num2 = 25;
let num3 = 15;
let max_number;

if (num1 >= num2 && num1 >= num3) {
  max_number = num1;
} else if (num2 >= num1 && num2 >= num3) {
  max_number = num2;
} else {
  max_number = num3;
}
console.log("Maxximum number among three is:", max_number);

// do it with ternary operator

// Math.max(num1, num2);
// Math.min(num1, num2);

/* Max & min of three and more number

Q.print 1-7 into weekdays
like 1 -> Monday
*/

const day_number = "1";

// let num_day = (day_number == 1) ? "Monday":
//  (day_number == 2) ? "Tuesday":
//   (day_number == 3) ? "Wedsenday":
//    (day_number == 4) ? "Thusday":
//     (day_number == 5) ? "Friday":
//      (day_number == 6) ? "Satrday":
//       (day_number == 7) ? "Sunday": "Envalid Entry";

//console.log("The Day is :", num_day);

switch(day_number){
    case 1 : console.log("Monday");
    break;
    case 2 : console.log("Tuesday");
    break;
    case 3 : console.log("Wednsday");
    break;
    case 4 : console.log("Thursday");
    break;
    case 5 : console.log("Friday");
    break;
    case 6 : console.log("Satrday");
    break;
    case 7 : console.log("Sunday");
    break;
    default : console.log("Envalid")
}

//write qsudo-code of any
/* qsudo-code for findig greatest number among three

step 1 :- take a three variables and assign three values to it

step 2 :- our task is to find the max number among three 
          for this task we use a condition statement
          if (num1 >= num2 && num1 >= num3) {
            max_number = num1;
          } else if (num2 >= num1 && num2 >= num3) {
            max_number = num2;
          } else {
            max_number = num3;
          }

step 3 :- Print the max number by using console.log()*/


// Grading system using Swithch case

let marks = 80;

switch(true){
    case marks >= 80 && marks <= 100 : console.log("Grade: A");
    break;
    case marks >= 60 && marks < 80 : console.log("Grade: B");
    break;
    case marks >= 35 && marks < 60 : console.log("Grade: C");
    break;
    case marks < 35 : console.log("Fail");
    break;
    default : console.log("Invalid Input");
}


// check a given number is even or odd using ternary operator

let ticket_num = 11;

let winner = (ticket_num === 11 || ticket_num === 101) ? "Winner!" : "Better luck next time!"
console.log(winner);


// let result = (num_1 % 2 == 0) ? "Even" : "Odd"
// console.log(result);

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);
console.log(max);
console.log(min);


