/* Write  a fuction to find the sum of all subarrays whose length is k
input: A = [7, 4, 8, 6, 5], k = 3 
output: 56
Explanation: all subarrays of size 3 --> [7, 4, 8], [4,8,6], [8,6,5] and thier sum is 19 + 18 + 19 = 56*/

let A = [7, 4, 8, 6, 5];
function sumOfSubarrays(A, k) {
  let n = A.length;
  if (k > n) return 0; // invalid

  // Step 1: first window sum
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += A[i];
  }

  let totalSum = windowSum; // add first window

  // Step 2: slide window
  for (let i = k; i < n; i++) {
    windowSum = windowSum - A[i - k] + A[i]; // remove old, add new
    totalSum += windowSum;
  }

  return totalSum;
}

// Test
//console.log(sumOfSubarrays(A, 3)); // 56

//-------- Nested Array -------------

//check the given array is a matrix or not
 arr = [1, 2, "arr", [2, [4, 5]]];

function matrix(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
       let x = Array.isArray(arr[i]);
       if(x == true){

       }
    }
}

console.log(matrix(arr));


/* Function to reverse an array
input: [3,2,4,1,9]
output: [9,1,4,2,3] */

arr = [3,2,4,1,9];
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

console.log("Reverse array :",reverse(arr));

/* Reverse each row of a nested 2D array
input: [
[1, 2],
[2, 3, 4, 5],
[3, 4, 5, 6]] */

arr = [[1, 2],
[2, 3, 4, 5],
[3, 4, 5, 6]];

function reverse_2D_array(arr){
    for(let i = 0; i < arr.length; i++){
        let reverse2D = reverse(arr[i]);
        console.log(reverse2D);
    }
    
}

reverse_2D_array(arr);

// H.W --> Reverse columns of a 2D matrix
 


