// Assignments

function removeDuplicates(str) {
let seen = new Set();
let result = "";

for(let i = 0; i < str.length; i++){
  let ch = str[i];
  if(!seen.has(ch)){
    result += ch;
    seen.add(ch);
  }
}
return result;
}

let str = "hello";
console.log(removeDuplicates(str));


// ------------- Binary Search --------------

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;


    while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] === target){
        return mid;
    }

    else if(arr[mid] < target){
        left = mid + 1;
    }
    else right = mid - 1;
}
return -1;
}

let arr = [1, 2, 4, 4, 4, 5, 6, 7];
console.log(binarySearch(arr, 4));

function binarySearch1(arr, target){
    let left = 0;
    let right = arr.length-1;
    let result = -1;


    while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] === target){
        result = mid;
        right = mid - 1;
    }

    else if(arr[mid] < target){
        left = mid + 1;
    }
    else right = mid - 1;
}
return result;
}
let arr1 = ["apple", "banana", "banana", "cherry", "date"];
console.log(binarySearch1(arr, 4));
console.log(binarySearch(arr1, "banana"));
console.log(binarySearch1(arr1, "banana"));


function lowerBound(arr, target){
    let left = 0;
    let right = arr.length-1;
    let result = -1;


    while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] >= target){
        result = mid;
        right = mid - 1;
    }

    else if(arr[mid] < target){
        left = mid + 1;
    }
}
return result;
}

function upperBound(arr, target){
    let left = 0;
    let right = arr.length-1;
    let result = -1;


    while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] > target){
        result = mid;
        right = mid - 1;
    }

    else {
        left = mid + 1;
    }
}
return result;
}