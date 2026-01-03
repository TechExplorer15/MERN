//Bubble Sort
let arr = [6,4,1];
let swapped;

function bubble_sort(arr){
    let n = arr.length;
    let count = 0;
    for(let i = 0; i < n-1; i++){
        swapped = false;
        for(let j = 0; j < (n-i-1); j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
                count++;
            }
        }
        if(!swapped) break;
    }

    console.log(count);
    console.log(arr[0]);
    console.log(arr[arr.length-1]); 
}

(bubble_sort(arr));

//Selection Sort

function selection_sort(){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        let minindex = i;

        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minindex]){
                minindex = j;
            }
        }
        if(minindex !== i){
            let temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }
    }
    return arr;
}

console.log("Selection sort array:",selection_sort(arr));


//Insertion sort

function insertion_sort(arr){
    let n = arr.length;
    for(let i = 1; i < n; i++){
      let key = arr[i];     // Element to be inserted
      let j = i - 1;

        // Shift elements greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        [2, 5, 5, 9]
        // Insert key at correct position
        arr[j + 1] = key;
    }
}