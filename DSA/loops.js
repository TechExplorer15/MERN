// *************** Loops *****************

/* for loop --> for loop is used when you know the starting and ending of loop

for(init; condition; update){
Block of code that execute 
}

Flow of execution of for loop
1. First step is initialization Ex- let i = 0;
2. Second step is to check condition if it is correct then block of code execute completely.
3. code execute that writen in the for loop.
4. Then update --> then again 2 step perform check condition execute
5. Repeat until lopp stop.*/


//Write a code that sum N natural number.

let N = 5;

if(N <= 0 ){
    console.log("Enter the number greater than zero"); 
}
else{
    let sum = 0;
    for(let i = 0; i <= N; i++){
        sum += i;
    }
    console.log("The sum of the Natural number upto", N , "is: ", sum);
    
}

/* while loop --> while loop is used when you know only condition.

start;

while(end){
code;
change;
}
*/

// Write a code of sum of digits.

let digit = 888;
let sum = 0;
while(digit>0){
    let rem = digit%10;
    sum += rem;
    digit = Math.floor(digit/10); 
}
console.log("The sum of give digit is:",sum);


// reverse a given number and print it using while loop

let number = 54688;
let rev = 0;

while(number>0){
    let rem = number%10;
    rev = rev*10 + rem;
    number = Math.floor(number/10);
}
console.log(rev);


// CHECK THE GIVEN NUMBER IS STRONG NUMBER OR NOT.

/* Strong Number --> Strong number is a number that number whose value
equals the sum of the factorials of its digits.
When you break down the number and calculate the factorial of each digit,
and if their sum equals the original number then that number is called strong.  */

let given_number = 145;
let copy = given_number;
let sum_ = 0;
while(given_number > 0){
    let rem = given_number%10;
    let fact = 1;
    for(let i=1; i<=rem; i++){
        fact = fact*i;
    }
    sum_ += fact;
    given_number = Math.floor(given_number/10);
}
console.log("The sum of factorial of given digit is:",sum_);

if(copy === sum_){
    console.log(copy,"is a Strong Number!");
}
else{
    console.log(copy,"is Not Strong Number!");
    
}


