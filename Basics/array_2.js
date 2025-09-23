// Slice

/* let arr = [4, 5, 8, 9];
console.log(arr);

console.log(arr.slice(1, 3)); //--> will give elements in range [1, 4)
console.log(arr.slice(1));
console.log(arr.slice()); */

// Splice
/* console.log("Splice");

console.log(arr.splice(1, 3)); // Change the original array
console.log(arr);

console.log("Array Concat");

arr1 = [-1, -2, -3];
console.log(arr.concat(arr1)); */

// Types of loops for array

// the basic loop
//for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// for... in loop
/* for (let index in arr) {
  console.log(arr[index]);
  //console.log(typeof index); --> type of index here is "string"
} */

// for... of loop
//for (let value of arr) console.log(value);

/*Write a function which print the prefix sum of an Array
input A1 = [2,3,4,5]
output A2 = [2,5,9,14]*/

/* let A1 = [2,3,4,5];
let A2 = [];
A2[0] = A1[0];
for(let i = 1; i <= n; i++){
    A2 = (sum + A1[i]);
}
console.log(A2);
 */

/* Swapping of two values of an array
 */

function swap_element(A3, ind1, ind2) {
  let temp = A3[ind1];
  A3[ind1] = A3[ind2];
  A3[ind2] = temp;

  console.log(A3);
}

A3 = [1, 2, 3, 4, 5];
swap_element(A3, 3, 4);

//Q. Swap alternate elements of an array
/* 
input --> arr = [1,2,3,4,5] --> odd length array
output --> arr = [2,1,4,3,5]
 */

function swap_alternate(arr) {
  for (let i = 1; i <= arr.length; i+= 2) {
    let temp = arr[i];
    arr[i] = arr[i-1];
    arr[i-1] = temp;
  }
  console.log(arr);
  
}

arr = [1,2,3,4,5,6];
swap_alternate(arr);


//------- Heterogenious property of arrays in js-----
A4 = [1, 2, "123", 2.33, true, [3, 4, "five", [2, 5, "printMe"]]];

 console.log(A4[5][3][2]);

 //subarray
    