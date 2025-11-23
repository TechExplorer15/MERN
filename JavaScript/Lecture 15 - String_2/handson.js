// ------------ String Handson file ------------

/* split() --> split function convert string to array, it convert string to small string
array element based on what value you passed in function, it can not change original string
it just create a new one.  */

let str = "Full stack  course";
console.log(str.split(" "));
/* console.log(str.split("", 2)); //limit is 2
console.log(str.split("  "));
console.log(str.split("st"));
console.log(str.split("5")); */ // if the given value is not present in string it can write original one in array

// count number of words
let word = "    this offer is valid only once per user";
console.log(word.trim().split(" ").length);

/* join() --> the join() method does the exact opposite:
 it combines all the elements of an array back into a single string.
 */

let arr = [3, 2, 4, 5];
console.log("Sum of arr element: ", arr.join(" "), "is:", 14);

// Question --> given a string, toggle its case(lower to upper and vise versa)

function toggleCase(str) {
  let n = str.length;
  let result = "";

  //method-1
 /*  for (let i = 0; i < n; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      result += str[i].toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      result += str[i].toLowerCase();
    } else result += str[i];
  } */
  // method-2
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else result += str[i];
  }
  return result;
}

console.log(toggleCase("abcABC"));
