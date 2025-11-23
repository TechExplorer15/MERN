// ----------------- Recursion ------------------

// Recursive fuction to print a number from N to 1;
function printNumber(n){
    if(n === 0) return; // Base case --> to stop the function

    console.log(n);
    printNumber(n-1); // recursive call
    
}
//printNumber(4);

function printNumberToN(n){
    if(n > 10) return;
    console.log(n);
    printNumberToN(n+1);
}

printNumberToN(1);

function printStatement(n){
    if(n == 0) return;
    console.log("Hello World");
    printStatement(n-1); 
}
//printStatement(5);

function pattern(n, x = 1){
    if(x > n) return;
    console.log(x);
    pattern(n, x+1);
    console.log(x); 
    
}
//pattern(5);

function pattern(n, x = 5){
    if(x == 0) return;
    console.log(x);
    pattern(n, x-1);
    console.log(x); 
    
}
//pattern(5);

function sum(n){
    if(n == 0) return 0;

    return n + (sum(n-1));
}
console.log(sum(5));



function power(n, x){
    if(n == 0) return 1;

    return x*(power(x,n-1));
}
//console.log("Power", power(2, 3));

function string(str){
    if(str == "") return "";
    
    return string(str.slice(1)) + str[0];
}

//console.log(string("Hello"));

function factorial(n){
    if(n === 1) return 1;

    return n*(factorial(n-1));
}
console.log(factorial(5));

function fibonacciSeries(n){
    
}