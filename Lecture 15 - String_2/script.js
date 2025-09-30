/*  // split()

 let str = "Mern Stack  Course";
 console.log(str.split(" "));
 console.log(str.split(""));
 console.log(str.split("  "));
 console.log(str.split("ta"));
 console.log(str.split("y"));


 // join()
 let arr = [1, 2, 3, 4];
 console.log("sum of arr: ", arr.join(" "), "is : ",14);

 // Given a string, toggle its case
 
 function toggleCase(str) {
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] >= "a" && str[i] <= "z")
            result += str[i].toUpperCase();
        else if(str[i] >= "A" && str[i] <= "Z")
            result += str[i].toLowerCase();
        else 
            result += str[i];
    }
    console.log(result);
    
 }

 toggleCase("HelLo12");

 // write a fuction to convert camelcase to snake_case

 function snakeCase(str){
    let snakeCase = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            snakeCase += "_" + str[i].toLowerCase();
        }
        else snakeCase += str[i];
    }
    console.log(snakeCase);

 }

snakeCase("HELLOwORLD");
 
 function camel_Case(str){
    let camelCase = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            camelCase += "_" + str[i].toUpperCase();
        }
        else camelCase += str[i];
    }
    console.log(camelCase);
 }

 camel_Case("abcHello");




 // Extrace Jungle from below string using string method

 let str1 = "    How_are_you_in Jungle!  ";
let index = str1.trim().indexOf("Jungle");
console.log(index);
 console.log(str1.trim().slice(index, -1));
 

 // only use a replace and replaceAll method and replace a "in" with "on" in below string

 str = "Hi are you in Spain, which city are you in?";
 console.log(str.replaceAll("in", "on").replace("on", "in").replace("on", "in").replace("in","on")); */
 

 function reverseString(str3){
    let reverse = "";
    let n = str3.length;
    for(let i = 0; i < str3.length; i++){
        reverse += str3[n - 1 - i];
    }
    console.log(reverse);
 }

/* reverseString("abad")

// function for palindrome

function isPalindromeBrute(str) {
  // Step 1: Normalize
  let cleanStr = str.toLowerCase();

  // Step 2: Two pointer comparison
  let i = 0;
  let j = cleanStr.length - 1;

  while (i < j) {
    if (cleanStr[i] !== cleanStr[j]) {
      return false; // mismatch found
    }
    i++;
    j--;
  }
  return true; // all matched
}
 */
// Test cases
/* console.log(isPalindromeBrute("madam"));       // true
console.log(isPalindromeBrute("Racecar"));     // true
console.log(isPalindromeBrute("hello"));       // false
console.log(isPalindromeBrute("A man, a plan, a canal: Panama")); // true */




// check if a string is palindrome or not, ignore cases (uppercase/lower) & spaces

/* str = "Nurse Run" ;

function isPalindrome(str) {
  // Step 1: Normalize (lowercase and remove spaces)
  let cleanStr = str.toLowerCase();

  // Step 2: Reverse
  let reversedStr = cleanStr.split("").reverseString().join("");

  // Step 3: Compare
  return cleanStr === reversedStr;
}
 */
//console.log(isPalindrome("Nurses Run"));


// lastIndexOf()


//
str = "stringMethodstring";
let clean = str.trim().toLowerCase();
for(let i = 0; i < clean.length; i++){
    if(clean.indexOf(clean[i]) == clean.lastIndexOf(clean[i])){
        console.log(clean[i]);
    }
    console.log("No non-repeating character");  
}