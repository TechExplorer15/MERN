/* ---------------- Object in Javascript -------------

object --> An object is a collection of key–value pairs.

Keys are called properties (always strings or symbols).

Values can be anything: numbers, strings, functions, arrays, even other objects.


*/

let person = { name: "Tanmay", age: 22, isStudent: true};

// Ways to create Objects

// 1st Way -->

let obj = { key: "value"};

// 2nd Way -->

let obj1 = new Object();
obj.key = "value";

// create a mother and student object that store some details.
let mother = {
  name: "Priya Patil",
  age: 33,
  address: "Baner, Pune",
  city: "Pune",
};

let student = {
  name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};

mother.occupation = "Housewife"; // to add the new key value pair
mother.age = 35; // to update the available key-value.

console.log({mother, student});

// create a vehicle object

let vehicle = {
  name: "Swift",
  noOfSeats: 4,
  topSpeed: 150,
  mileage: 20,
  noOfAirbags: 4
};

vehicle.noOfSeats = 5; // updating the number of seats

vehicle.colors = ["red", "white", "black"]; // adding a new property color in vehicle object

delete vehicle.noOfAirbags; // delete a property

// Nested Object --> object inside an object

vehicle.address = {
  name: "Raj Motors",
  addressLine1: "Near Balewadi Stadium, Balewadi",
  city: "Pune",
  state: "Maharashtra"
};

console.log({vehicle});
console.log("Name of the showroom:", vehicle?.address?.city);

console.log(vehicle.engineType);  // access a property that not defined in object


// vehicle?.address?.city ---> this is called as optional chain to findout the key
// is present or not if present then it gives output othervise it gives undefined.

//



