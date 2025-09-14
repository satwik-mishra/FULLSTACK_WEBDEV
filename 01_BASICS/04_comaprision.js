// console.log(2>1);
// console.log(2>4);
// console.log(2>=1);
// console.log(2==2);
// console.log(2!=1);

console.log("2">1); //output is true
console.log("02">1);//output is true
console.log(null > 0); //output is false because 0 is not > 0
console.log(null == 0);// output is false because comparision operation and equality check works differently
console.log(null >= 0);//output is true    [comparisions convert null to a number , treating it as 0 thats why null >= 0 is true cause 0>=0 is true]

console.log("----------------------------");

console.log(undefined == 0); //output is false
console.log(undefined > 0); //output is false
console.log(undefined < 0); //output is false

/* === checks value as well as data types */
console.log("----------------------------");
console.log("2"===2); //output is false because 2 in string is != 2 in number

