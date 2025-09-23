/* -----------Array---------------

1 --> Remove the pain of creating multiple variable for same
      type of data.
2 --> Array is a collection of similar type of data, taht can be manage
      /accessed using one variable only.
index --> 0 1 2 3
     A = [1,2,3,4,5,6] --> Integer Array*/


const name = ["Tanmay", "Rohit", "Vaibhav","Pratik"];

let length = name.length;
console.log(length);

for(let i = 0; i < length; i++){
    console.log(name[i]);
}


console.log("********Number Array*******");

const element = [15];
let n = element.length;

// let sum = sum_of_array(element);
// console.log(sum);

/* 
function sum_of_array(element){
    let n = element.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += element[i];
    }
    return sum;
} */


// Absolute function in js --> |3-7| = 4
//console.log(Math.abs(3 - 7));

/* Q1.
Find the absolute difference of (sum of all odd elements) and (sum of all even element) */

/* function sum_of_even(element){
    let n = element.length;
    let sum_even = 0;
    let sum_odd =0;
    for(let i = 0; i < n; i++){
        if(i%2 == 0){
        sum_even += element[i];}
        else{
        sum_odd += element[i];
        }
    }
    return (Math.abs(sum_even - sum_odd));
    
}

let abs = sum_of_even(element);
console.log(abs); */

function fizz(element){
    for(let i = 0; i < n; i++){
        if(element[i]%3 == 0){
            console.log("Fizz"); 
        }
        if(element[i]%5 == 0){
            console.log("Buzz");  
        }
        if(element[i]%3 == 0 && element[i]%5 == 0){
            console.log("FizzBuzz");
            
        }
    }
}

fizz(element);


/* Insertion in Array
Array1 = [1,5,6,7];
Array[1] = 7;


inserts at end
Array1.push(9);

insert at begining
Array1.unshift(3);

HW --> How to insert multiple element by using push() and unshift()

-----Delation in Array------
1 --> Delete at end
arr.pop(); HW--> find out what it returns

2 --> Delete at begining
arr.shift()

*/
num = [4,5,8,7,6,7,10]
console.log("index of 6 in Array", num.indexOf(6));
console.log(num[5]);

console.log(num.lastIndexOf(1));

let index = (num.indexOf(10));
num[index] = 14;
console.log(num);

//Q1 H.W
console.log("how to insert multiple elements using push()");

let arr1=[];
n=7;
for (let i=1; i<=n; i++)  // for element n to 5
{
  // if required any condition
    arr1.push(i);
};
console.log(arr1);

// or 

arr1.push(6,7,8)
console.log(arr1);

//Q2
console.log("insert multiple elements using unshift()");

let arr2=[]
n=5;
for (let i=n; i>=1; i--)  // for element n to 5
{
  // if required any condition
    arr2.unshift(i);
};
console.log(arr2);

//or

arr2.unshift(-3,-2,-1,0); 
console.log(arr2);

//Q3
console.log("write a function to return the index of a target element");

function findIndex(arr,targetValue) {

  for (let i=0; i<arr.length; i++)
  {
    if (arr[i]==targetValue) return "index position of target value is : "+i;
  
  }
  
}
console.log(findIndex([5,4,2,-5,2,3,4],-5));





