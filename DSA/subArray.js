//----------- Sub-Array ----------

// Print all the sub-array from the given array

let arr = [1, 2, 3, 4, 5, 6];

function subArray(arr){
    for(let i = 0; i < arr.length; i++){
        let sub = [];
        for(let j = i; j < arr.length; j++){
            sub.push(arr[j]);
            console.log(sub);
        }
    }
}
subArray(arr);

