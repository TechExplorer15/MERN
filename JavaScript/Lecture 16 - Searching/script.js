function frequencyCounter(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
let arr = [1, 6, 5, 8, 9, 7];
console.log(frequencyCounter(arr, 5));

function linearSearchString(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}
let str = "hello";
console.log(linearSearchString(str, "e"));

let user = [
  {
    id: 1,
    name: "Pratik",
    city: "Nashik",
  },
  { id: 2, name: "Rohit", city: "Pune" },
  { id: 3, name: "Kiran", city: "Mumbai" },{id: 4, name: "Rohit", city: "Banglore"}
];

function searchInObject(user, name){
    for(let i = 0; i < user.length; i++){
        if(user[i].name === name){
            return user[i];
        }
    }
    return -1;
}

console.log(searchInObject(user, "Rohit"));


// -------------- Map in js ------------

let studentMap = new Map();

studentMap.set("1", "Kartik");
studentMap.set("2", "Ram");
studentMap.set("3", "Pratik");

console.log(studentMap.get("1"));
console.log(studentMap.has("Pratik"));

studentMap.delete("3");
//console.log(studentMap);

str = [10, 20, 10, 30, 40, 50, 30];

function frequencyCounterNumber(num){
    let frequency = new Map();
    for(let num of str){
        if(frequency.has(num)){
            frequency.set(num, frequency.get((num))+1)
        }
        else {
            frequency.set(num, 1);
        }
    }
    return frequency;
}

//console.log(frequencyCounterNumber(arr));

function frequencyCounterString(str1){
    str1 = str1.trim();
    let frequency1 = new Map();
    for(let char of str1){
        if(char === " ") continue;
        if(frequency1.has(char)){
            frequency1.set(char, frequency1.get((char))+1)
        }
        else {
            frequency1.set(char, 1);
        }
    }
    return frequency1;
}

let str1 = "hello world";
console.log(frequencyCounterString(str1));


// ------------ sets --------------

let fruits = new Set();

fruits.add("Apple");
fruits.add("Mango");
fruits.add("Banana");
fruits.add("Mango");

console.log(fruits);
console.log(fruits.has("Mango"));
fruits.delete("Banana");
console.log(fruits);


// --------- Anagram ---

function isAnagram(str2, str3){
    if(str2.length !== str3.length) return false;

    return str2.split('').sort().join('') === str2.split('').sort().join('');

}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("list", "silent"));

// Time Complexity for this -->

/* split('') --> O(n)
sort() --> O(n log n)
join('') --> O(n) */


