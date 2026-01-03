/*Set  */

let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

let set = new Set([1,2,3,4,5]);
console.log(set);

console.log(set.has(3)); //To check the element present in set or not

set.delete(5); //to delete the element from set
console.log(set);


//set.clear() //to delete all element from set

//Converting set to the array

//1. using the spread operator


let set2 = new Set([1,2,3,4]);
let set3 = new Set([4,1,6,8]);
let result = new Set();

for(let item of set2){
    if(set3.has(item)){
        result.add(item);
    }
}
console.log(result);


let person1 = {
    name: "Gaurav",
    city: "Pune"
}

let person2 = {
    name: "Tanmay",
    city: "Nashik"
}

let personSet = new Set([person1, person2]);


//Map 

let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);




// Find frequency of each word in a given string;

let sentence = "how many repeating words are there in this sentence which has repeating word";

function frequencyCount(){
    let arr = sentence.split(" ");
}