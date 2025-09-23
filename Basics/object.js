//--------- object ----------

//School

/* onsole.log("Mother's datails");
const name = "Priya Singh";
let age = 32;
let address = "Baner, Pune";

console.log("Student Details");
const std_name = "Pratik";
let std_age = 15;
const std_gender = "Male";
const std_add = "Viman nagar, Pune"; */

/* let mother = { name: "Priya Singh", age: 32, address: "Baner Pune" };

let student = {name: "Pratik Patil", age: 15, std: "10th", gender: "Male"};

mother.accupation = "houswife";
console.log(mother);
mother.age = 33;
console.log(mother); */

let vehicle1 = {top_speed: 200, number_of_seat: 7, name: "Xuv700", milage: "18 Km/L", city: "Pune"};

vehicle1.color = ["White","Black","Red"];
console.log(vehicle1);
console.log(vehicle1.top_speed);

let vehicle2 = {
  top_speed: 180,
  number_of_seat: 4,
  name: 'Thar',
  milage: '18 Km/L',
  color: [ 'White', 'Black', 'Red' ],city: "Pune"
}

let vehicles = [vehicle1, vehicle2]

for(let i = 0; i < vehicles.length; i++){
    console.log("Vehicle name and city is:",vehicles[i].name, vehicles[i].city); 
}

for(let vehicle of vehicles){

  if(vehicle?.address?.city == "Pune"){

    vehicle.address.city = "Mumbai";

  }

}

console.log(vehicles);

// resume management system

let resume = {name: "Tanmay",
    email:"tanmay@gmail.com",
    skill: ["HTML","CSS","JavaScript",],
    dispaly: function(){
        console.log("Name:",this.name);
         console.log("email:",this.email);
          console.log("skill:",this.skill);
    }
}

resume.dispaly();