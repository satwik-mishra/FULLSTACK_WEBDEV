let score="33abc";
console.log(typeof(score));
let ValueInNumber=Number(score); //syntax to convert datatypes in javascript
console.log(ValueInNumber); //as 33abc is not a pure number, it gives NAN[not a number] as output
console.log(typeof(ValueInNumber)); 

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn); //this will convert 1 to true and 0 to false
console.log(booleanIsLoggedIn);

let emptyString=""
let booleanEmptyString=Boolean(emptyString) //this will convert an empty string to boolean
console.log(booleanEmptyString);  //output is false for empty string

//"" => false
//"abcd" =>true

let randomNumber=363
let RandomNumberToString=String(randomNumber)
console.log(RandomNumberToString);
console.log(typeof RandomNumberToString); //converts 363 to string from number

 // ************************OPERATIONS*********************************
  
let value = 3;
let negativeValue = -value
console.log(negativeValue); //output = -3
console.log(typeof negativeValue); //type is number

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //to the power
console.log(2/3);
console.log(2%3);
let str1= "Hello"
let str2= " Satwik"
let str3=str1 + str2 ;
console.log(str3);

console.log(1 + "2"); //output is 12
console.log("1" + 2); //output is 12
console.log("1" + 2 + 2); //output is 122
console.log(1 + 2 + "2"); //output is 32


console.log(true); //output is true
console.log(+true);//output is 1
// console.log(true+); //it is an error
console.log(+""); //output is 0

