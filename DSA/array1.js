//-----------Array--------------------

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

arr.push(60);
arr.pop();
// arr[7] = 100;
// console.log(arr);

//console.log(arr[3]);

// new Array(2);
// console.log(Array.length);

//function for sum of an array element
/* function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let result = sum(arr);
console.log("The sum of elements in array is:",result); */

// Write a function for find a max element in a Array

/* function max(arr){
let max = arr[0];

for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
return max;
}

let maximum = max(arr);
console.log(maximum); */

//console.log("Given array :",arr);

// Function for reverse a given array

/* function reverse(arr){
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

console.log("Reverse array :",reverse(arr)); */

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

console.log(leftTravel(arr, 2));












