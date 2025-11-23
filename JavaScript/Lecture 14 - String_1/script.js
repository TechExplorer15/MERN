// --------- string -------------

let str = "Tanmay";
let str1 = 'Wagh';
let str2 = `string`;

// printing a string 
console.log(str);

for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

let words = "Hi how was your day";
let count = 1;
for(let i = 0; i < words.length; i++){
    if(words[i] === " "){
        count++;
    }
}
console.log(count);


//Methods in String
console.log("baloon".includes('oon')); // can search for a string of more than or equal to 1 length
console.log("baloon".includes('ooN')); //case sensitive

// replace()
str = "shoes";
console.log(str.replace("s", "d")); //returns a new string, doesn't change the original one

// replaceAll()
str = "shows";
console.log(str.replaceAll("s", "a")); //returns a new string, doesn't change the original one

// trim()
console.log("         abc   xyz     ".trim()); //removes all the leading and training spaces

// substring()

console.log("Tanmay".substring(2)); 
console.log("Tanmay".substring(2, 5)); 
console.log("Tanmay".substring(4,-2)); 
console.log("Tanmay".substring(-2, 6)); //--> negative change to zero

// H.w print substring of 3

// slice() --> almost same as substring() method, but only difference is when the range is negative

console.log("acciojob".slice(2)); // [2, n]
console.log("acciojob".slice(-2)); // gives exactly 2 char from end
console.log("acciojob".slice(4, -2));
console.log("acciojob".slice(-7, -2));
console.log("acciojob".slice(2, 5));

// repeat()
console.log("abcd".repeat(4));

console.log("abcd".__proto__);
console.log("123" + [123]);














