/* Write a code for give final price of product after discount.
2000 - 5000 --> 5%
5001 - 8000 --> 10%
8001 - 10000 --> 15%
above 10001 --> 20%*/

/* let mrp = 5000;
let discount = 0;

if(mrp < 2000){
    discount = 0;
}
else if(mrp >= 2000 && mrp <= 5000){
    discount = 5;
}
else if(mrp > 5000 && mrp <= 8000){
    discount = 10;
}
else if(mrp > 8000 && mrp <= 10000){
    discount = 15;
}
else if(mrp > 10000){
    discount = 20;
}
console.log(Math.floor(mrp - (discount*mrp/100))); */


// Electricity bill calculation
/* unit --> 0 - 100 --> 4rs/unit
 unit --> 101 - 200 --> 6rs/unit
 unit --> 201 - 400 --> 8rs/unit
 unit --> 401  --> 10rs/unit*/

 /* let unit = 106;
 let bill = 0;

 if(unit>400){
    bill += (unit-400)*10
    unit = 400;
 }
 if(unit>200 && unit<=400){
    bill += (unit-200)*8
    unit = 200;
 }
 if(unit>100 && unit<=200){
    bill += (unit-100)*6
    unit = 100;
 }
 if(unit<=100){
    bill += (unit)*4
 }
 console.log("You need to pay the light bill of Amount:",bill); */

 let Amount = 4300;
 let notes = 0;

 if(Amount >= 500){
    notes = Math.floor(Amount/500);
    console.log("500rs notes in", Amount, "is:", notes);  
    Amount = Amount%500;
 }
 if(Amount >= 200){
    notes = Math.floor(Amount/200);
    Amount = Amount%200;
    console.log("200rs notes is:", notes);  
 }
 if(Amount >= 100){
    notes = Math.floor(Amount/100);
    Amount = Amount%100;
    console.log("100rs notes is:", notes);  
 }
  if(Amount >= 50){
    notes = Math.floor(Amount/50);
    Amount = Amount%50;
    console.log("50rs notes is:", notes);  
 }
  if(Amount >= 20){
    notes = Math.floor(Amount/20);
    Amount = Amount%20;
    console.log("20rs notes is:", notes);  
 }
  if(Amount >= 10){
    notes = Math.floor(Amount/10);
    Amount = Amount%10;y
    console.log("10rs notes is:", notes);  
 }
  if(Amount >= 5){
    notes = Math.floor(Amount/5);
    Amount = Amount%5;
    console.log("5rs notes is:", notes);  
 }
 
 //Switch case 

 let day = 3;

 switch (day) {
   case 1: console.log("Monday");
   break;
   case 2: console.log("Tuesday");
   break;
   case 3: console.log("Wednesday");
   break;
   case 4: console.log("Thursday");
   break;
   case 5: console.log("Friday");
   break;
   case 6: console.log("Saturday");
   break;
   case 7: console.log("Sunday");
   break;
 
   default: console.log("Envalid Input");
 }
 

 