function linearSearch(arr, target){
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        if(target === arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1, 2, 5, 6, 8, 9], 5));

// min number in the array

let arr = [23, 11, 12, 45, 3, 1, 15];

function min_element(arr){
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= result){
            result = arr[i];
        }
    }
    return result;
}

console.log("Min element in the array is:", min_element(arr));

// finding whether a word exists in a sentence

let sentence = "I love coding in JS";

function find_word(sentence, searchWord){

    let words = sentence.split(" ");

}


//********** Binary Search ************
let arr1 = [1, 3, 5, 10, 15, 20, 40];
function binary_search(arr, target){

    let low = 0;
    let high = arr.length - 1;
    

    while(low <= high){
        let mid = Math.floor((high + low)/2);
        if(arr[mid] == target){
            return mid;
        }
        if(target < arr[mid]){
            high = mid-1;
        }
        else{
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binary_search(arr1, 15));


let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function findSquareRoot(arr2, term){
    let left = 0;
    let right = term;

    while(left <= right){
        let middle = Math.floor(left + (right - left)/2);
        let middleSquare = middle * middle;

        if(middleSquare == term){
            return middle;
        }
        if(middleSquare > term){
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }
    return -1;
}

console.log("The Square root of the term is:", findSquareRoot(arr2, 25));


// Find the first occurance of an element in an array
// lower bound


function lowerBound(arr3, x){
    let left = 0;
    let right = arr3.length-1;

    while(left < right){
        let middle =Math.floor(left + (right - left) / 2);

        if(arr3[middle] > x){
            left = middle
        }
        else{
            right = middle - 1;
        }
    }
    return left;
}
