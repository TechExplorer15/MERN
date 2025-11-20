// ---------------- String --------------------------

// create a string in following way

let name =  "Tanmay";
let surName = 'Wagh';
let str = `Hi, I'am "Tanmay"`;

console.log(typeof{name, surName, str});

// Printig a String
console.log(name);

// loop in string

for(let i = 0; i < str.length; i++){
    //console.log(str[i]);
}

// String are Immutable --> we can't change the value of string literals

name[1] = "n"; // this will not change the name
console.log(name);

name = "Rohit"; // this can change 
console.log(name);

// count the number of word in a string

let words = "How are you?";
let count = 1;
for(let i = 0; i < words.length; i++){
    if(words[i] === " "){
        count++;
    }
}
console.log(count);

// --------- Methods in Strings -------------

// includes() --> checks that the substring is present in original string or not

console.log("Cricket".includes("ket")); //it gives true, can search for a string of more than oe equal to 1 length.
console.log("Cricket".includes("Ket")); //case sensitive --> false


// replace() --> only replace the first value of the target string with new value

str1 = "shoes";
console.log(str1.replace("s", "t")); // return new string not change original one


// replaceAll() --> replace all the occurrences of target with new value

str = "shows";
console.log(str.replaceAll("s", "a")); // return new string

// trim() --> removes all the leading and trailing spaces

console.log("      how are   you?     ".trim()); // return new string

// substring() --> gives a substring based on various terms & conditions

let str2 = "acciojob";

console.log(str2.substring(2)); // gives substring from index = 2 to last index, [2, n)
console.log(str2.substring(2, 6)); // gives substring from index = 2 to 5 | [2, 5)
console.log(str2.substring(-2)); // convert negative values to 0, gives substring from [0, n)
console.log(str2.substring(-2, 6)); // --> [0, 6]
console.log(str2.substring(5, 2)); // --> [2, 5)
console.log(str2.substring(5, -3)) // --> [0, 5]

// slice() --> almost same as substring() method, but only differs when the range is negative

console.log(str2.slice(3))
console.log(str2.slice(-3))
console.log(str2.slice(5, -3))
console.log(str2.slice(-5, -3))
console.log(str2.slice(5, 9))

// repeat()
console.log("abcd".repeat(4));

console.log("abcd".__proto__); // consoles the wrapper object details

// charAt()
console.log("vscode".charAt(2));

// indexOf()
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring", 7));

// toLowerCase()
console.log("AbCd".toLowerCase());

// toUpperCase()
console.log("AbCd".toUpperCase());




console.log("abd".repeat(2.5));
