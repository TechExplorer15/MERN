// Switch case

// ********* Loops in js ************
/* Issue in repeATING CODE
- Too much work for developer
- chances of error
- unable to count  */

// while loop

// let count = 1;

// while (count != 11) {
//     console.log(count);
//     count++;
// }

// Check even number till 25 

/* let num1 = 0;

while (num1 <= 25) {
    if(num1 % 2 == 0)
    console.log(num1);
    num1 ++;  
}

// count reverse from 10 to 1
let count = 10;

 while (count != 0) {
    console.log(count);
    count--;
 }
 */

 //For loop
//  for (let i = 1; i <= 10; i++){   
//     console.log(i); // O(10)
//  } 

 //steps -->
 /* 1 --> initialize the value of variable
2 --> Check the condition is true
3 --> Execute the line of code that return inside the for loop
4 --> Increment the value
Flow 1 --> 2 --> 3 --> 4 --> 2 */


// print multiples of 3 only upto 50
// for (num = 0; num < 50; num+=3){
//         console.log(num); // Time complexity: O(50/3) or O(13)

// }

//Print the square of each number from 20 to 35 

/* let n = 35;

for (i = 20; i <= n; i++){
    console.log(i**2);
    
} //TC --> O(n) -->[(start + n) - start] */

/* let number = 6;

for(let i = 1; i <= 10; i++){
    console.log(number+ "*" +i + "= " +(number * i));
    
} */

//Find the sum of first 100 numbers and print it 

/* let sum = 0;

for (let i = 0; i <= 100; i++) 
    sum += i; //sum = sum + i
    console.log(sum); */

//short circuiting in js
/* In JavaScript, short-circuiting refers to the behavior
 of the logical operators && (AND) and || (OR) when evaluating expressions.

Instead of always evaluating both operands, JavaScript stops (short-circuits) 
as soon as the result is determined. */

let n = true && 45;
console.log({n});
