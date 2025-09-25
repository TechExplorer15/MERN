//Write a code for check a prime number

let number = 2;
let is_prime = true;
for (let i=2; i<=Math.sqrt(number); i++){
    if(number%i == 0){
    is_prime = false;
    break;
    }
}
const msg = (is_prime) ? "Prime number" : "Non-Prime Number";
console.log(msg);

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

let num = 546876;
let rev = 0;

while(num>0){
    let rem = num%10;
    rev = rev*10 + rem;
    num = Math.floor(num/10);
}
console.log(rev);
