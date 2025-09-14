// arrays
const myarray = [1,2,3,4,5] //js arrays are resizable
//shallow copy - copying shares the same reference point
//deep copy - copying dont share the same reference point
const heros=['ironman','thor','hulk'] //syntax of creating an array
const myarray2=new Array(1,2,3,4,5)//another method of creating an array
console.log(myarray2);


//array methods

myarray.push(6) //pushes a number to the end of the array
myarray.push(7)
console.log(myarray);

myarray.pop()   //pops the last value of the array
console.log(myarray);

console.log(myarray.includes(9));
console.log((myarray.indexOf(3)));

const newarray=myarray.join() //converts the array into string
console.log(newarray);
console.log(typeof newarray);