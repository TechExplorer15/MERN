/* // Type conversion or type casting --> convert one data type to another

//let A = "18";
//console.log(Number(A));

// Swap two numbers 

let a = 10;
let b = 7;
let c;

//c = a;
//a = b;
//b = c;

console.log(a, b);

/* second way -->
[a, b] = [b, a];

Third Way --> 
a = a + b;
b = a - b;

let x = b%10;
let y = Math.floor((b%100)/10);
let z = Math.floor((b/100));

console.log("The reverse number of b is: "+ x + y + z);

// Pre and Post increment and Decrement operator (++,--)

let t = 15;
let k = 15;
let r = ++t; //pre increment --> First change then use
let s = k++; //post increment --> First use then change
console.log(r);
console.log(s);
 */

let a = 10, b = 11;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("A :", a);
console.log("B :", b);
console.log("C :", c);

let x = true;
x++
console.log(x);
console.log(true + true);


let n = 1215;
let last = n%10;
console.log(last);
