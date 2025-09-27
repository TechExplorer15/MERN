// ----------------- Nested Array ---------------

arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

// Print the row of a Array
for(let i = 0; i < 3; i++){
    let str = "";
    for(let j = 1; j <= 5; j++){
        str += j + 5 * i + " ";
    }
    //console.log(str);
    
}

// another way 
for(let i = 0; i < arr.length; i++){
    let row = "";
    for(let j = 0; j < arr[i].length; j++){
        row += arr[i][j] + " ";
    }
    //console.log(row);
}

// Print the sum of each row
for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
    }
    console.log("The sum of row is: ",sum);
} 

// print the sum of matrix
let matrixSum = 0;
for(let i = 0; i < arr.length; i++)
    for(let j = 0; j < arr[i].length; j++)
        matrixSum += arr[i][j];

console.log("Matrix sum is:",matrixSum);

// Print the [sum of (product of elements of each even indexed-row)]

function productSum(arr){
let productSum = 0;
for(let i = 0; i < arr.length; i++){
    if(i%2 == 1) continue;
    let productOfRow = 1;
    for(let j = 0; j < arr[i].length; j++){
        productOfRow *= arr[i][j];
    }
    productSum += productOfRow
}
console.log("Sum of product of elements of each even row is:",productSum);
}

//productSum(arr);


// Print the Array in a Column vise
function printColumn(arr){
    for(let i = 0; i < arr[0].length; i++){
        let column = "";
        for(let j = 0; j < arr.length; j++){
            column += arr[j][i] + " ";
        }
        console.log(column);
    }
}

printColumn(arr);

// print the sum of elements in odd-indexed columns

function sumOfOddindexColumns(){
    let sum = 0;
    for(let i = 0; i < arr[0].length; i++){
        for(let j = 0; j < arr.length; j++){
            if(j % 2 == 1){
                sum += arr[j][i];
            }
        }
    }
    console.log(sum);   
}

sumOfOddindexColumns(arr);

arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* Function to print all the elements of primary diagonal */
function getPrimaryDiagonal(arr1) {
  let n = arr1.length;
  let primaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    primaryDiagonal.push(arr1[i][i]);
  }
  return primaryDiagonal.join(" ");
}

function getSecondaryDiagonal(arr1) {
  let n = arr1.length;
  let secondaryDiagonal = [];
  for (let i = 0; i < n; i++) {
    secondaryDiagonal.push(arr1[i][n - i - 1]);
  }
  return secondaryDiagonal.join(" ");
}

console.log("Primary diagonal:", getPrimaryDiagonal(arr1));
console.log("Secondary diagonal:", getSecondaryDiagonal(arr1));


/* function to check if primary diagonal sum is odd or even */
function getPrimaryDiagonalSum(arr1) {
  let n = arr1.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr1[i][i];
  }
  return sum % 2 == 0 ? true : false; //returning true for even sum, false for odd sum
}
console.log(getPrimaryDiagonalSum(arr));