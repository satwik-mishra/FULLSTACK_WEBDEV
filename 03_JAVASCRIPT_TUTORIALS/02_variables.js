//  a variable is a container that stores a value
/* there are two steps to declare a variable 
   1. decalration
   2. initialization
*/

let x; //declaration
x=10; // initialization
console.log(x);
let y=10; //both declaration and initialization
let age = 20;
console.log("my age is :" +age);
let gpa = 7.9
let price = 100
console.log(`my gpa is ${gpa}`);
console.log(`the price is ${price} rupees`);
// displaying data type of a variable 
console.log("----------------------------------");
console.log(typeof gpa);
console.log(typeof price);
console.log("-----strings-----");
let firstname="satwik";
console.log(`your name is : ${firstname}`);
console.log(`type of "firstname" is : ${typeof firstname}`);
let email="satwikmishra074@gmail.com"
console.log(`your email is : ${email}`);
console.log("-----booleans-----");
let online = true;
console.log(`bro is online? ${online} , and type of "online" is ${typeof online}`);
let forsale = false;
console.log(`is this car for sale? ${forsale}`);
let is_student=true;
console.log(`is the student enrolled? : ${is_student}`);

let fullname="satwik mishra"
let myage=20;
let isstudent=true;
document.getElementById("p1").textContent=`your name is ${fullname}`;
document.getElementById("p2").textContent=`you are ${age} years old`;
document.getElementById("p3").textContent=`are you enrolled in school? ${isstudent}`;

