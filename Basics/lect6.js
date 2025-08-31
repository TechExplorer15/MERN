/*  // Write a code to find a factorial of 10
const n = 10;
let factorial = 0;
for(i =0; i<n; i++){
    factorial *= i;
}
console.log(factorial); 

//Check the given number is prime or not

let number = 15;
let divisorsCount = 0;

for (let i=1; i<number; i++){
    if(number%i == 0){
        divisorsCount ++;
    }
}

const msg = (divisorsCount > 2) ? "Non - Prime number" : "Prime Number";
console.log(msg);


// ****break keyword****

// Print the number between 100 to 200 until the number is divisible by x;

let x = 17;

for(let i = 100; i < 200; i++){
    if(i % x == 0){
        break;
    }
    console.log(i);
    
}

// continue keyword --> 

// print the square of all numbers from 1 to 100, except the number divisible by 17

let num1 = 17;

for (let i=1; i<= 100; i++){
    if (i % num1 == 0){
        continue;
    }
    console.log(i**2);
    
}  */

//Print all odd numbers from 1 to 100 that are divisible by 5

/* let num2 = 5;
let count = 0;

for (let i = 0; i <= 100; i++) {
  if (i % num2 != 0) continue;
    if (i % 2 == 0) continue;
    count++
    if(count == 10)
        break;
console.log(i);
} */

// Nested loop 
/* let num3 = 10;

for(let i = 0; i < 5; i++){
    let star_string = "";
for(let j = 0; j < num3; j++){
    star_string += "*";
}
console.log(star_string);
} */

// print the pattern 
/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

******
*****
****
***
**
*
*/

/* -------Do-While loop-------- 
- First execute the statement inside do block, then checks for condition*/

do {
    console.log("Hello");
    
} while (false);

const response = prompt("Do you want to continue?");
    console.log(response);
    
