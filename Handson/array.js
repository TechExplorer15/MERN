//-----------Array--------------------

 /* Array is a non-primitive data type

- An array is a special type of object in JS that stores multiple values in a single variable.

- Ordered collection (elements have indexes).

- Can store different data types (numbers, strings, objects, functions, etc.) in the same array. */

/* const name1 = "Name1";
const name2 = "Name2";
const name3 = "Name3";
const name4 = "Name4";
const name5 = "Name5";
const name6 = "Name6";
const name7 = "Name7";
const name8 = "Name8";
const name9 = "Name9";
const name10 = "Name10";

const names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",
  "Name8",
  "Name9",
  "Name10",
]; */


let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

arr.push(60);
arr.pop();

// arr[7] = 100; // to add a value at a specific index in array
// console.log(arr);

//console.log(arr[3]); // to print a specific index element

// new Array(2);  // second way to create a new array
// console.log(Array.length);

//function for sum of an array element
 function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let result = sum(arr);
//console.log("The sum of elements in array is:",result); 

// Write a function for find a max element in a Array

function max(arr){
let max = arr[0];

for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
return max;
}

let maximum = max(arr);
console.log(maximum); 

//console.log("Given array :",arr);

// Function for reverse a given array

 function reverse(arr){
    let start = 0;
    let end = arr.length-1;

    while(start < end){
        //swap

        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr;
}

//console.log("Reverse array :",reverse(arr)); 

// Function for find odd and even element in array and count it

function even_odd(arr){
    let even = [];
    let odd = [];
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] % 2 == 0){
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    return {even, odd};
}

//console.log(even_odd(arr));

// Q. Left rotation of element by k step

arr = [1, 2, 3, 4, 5];

function leftTravel(arr, k){
    for(let i = 1; i <= k; i++){
        let copy = arr[0];
        for(let j = 0; j < arr.length-1; j++){
            arr[j] = arr[j+1];
        }
        arr[arr.length-1] = copy
    }
    return arr;
}

//console.log(leftTravel(arr, 2));


/* (A) Adding / Removing

.push() → add at end

.pop() → remove from end

.unshift() → add at beginning

.shift() → remove from beginning 


(B) Searching / Finding

.indexOf() → index of element

.includes() → true/false

.find() → first matching element

.findIndex() → index of first match


(C) Sorting / Modifying

.sort() → sort (default: as string)

.reverse() → reverse order

.splice() → add/remove at specific index

.slice() → copy part of array

(D) Others

.concat() → merge arrays

.join() → convert to string

.flat() → flatten nested arrays

*/

let slicedArr = arr.slice(1, 4); // doesn't changes the original array
console.log({ slicedArr });

console.log(arr.slice(1, 4)); //--> will give elements in range [1, 4)
console.log(arr.slice(1)); //--> will give elements in range [1, N)
console.log(arr.slice()); //--> will give elements in range [0, N)
console.log(arr.slice(-1));


console.log({arr});


// ------------- Types of loops in array -------------

/* the basic loop */
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

/* for ... in loop */
for (let index in arr) {
  console.log(index);
  // console.log(typeof index) --> type of index here is "string"
}

/* for ... of loop */
for (let value of arr) console.log(value);


//------------- SubArray --------------------

// Print all the sub array
function printSubarrays(arr1) {
  let n = arr1.length;

  for (let i = 0; i < n; i++) {
    // let subarr = [];
    for (let j = i; j < n; j++) {
      /* Method 1
      subarr.push(arr[j]);
      console.log(subarr.join(" ")); 
      */

      /* Method 2 */
      console.log(arr1.slice(i, j + 1).join(" "));
    }
  }
}

let arr1 = [1, 4, 5, 7, 3, 2];
printSubarrays(arr1);



