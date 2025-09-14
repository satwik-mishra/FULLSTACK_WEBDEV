// String in JAVASCRIPT
const name='satwik'
const repocount=50
// to concatinate :
console.log(name + repocount + 'value'); //this method is not used nowadays

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

//another method of declaring strings : 
const newvariable = new String('satwik_mishra')
console.log(newvariable[0]); //prints the  0th index
console.log(newvariable.length);
console.log(newvariable.toUpperCase());
console.log(newvariable.charAt(2));
console.log(newvariable.indexOf('t'));
const newvariable2=newvariable.substring(0,4); //we cant give negative values to substring
console.log(newvariable2);
console.log(newvariable.slice(0,4));
// console.log(newvariable.slice(-3,4));
const spaced_string="             murgi_hoon_me           "
console.log(spaced_string);
console.log(spaced_string.trim());
const url="https://mur gi.com"
console.log(url.replace(' ','-'));
console.log(url.includes('hehe'))
console.log(newvariable.split('_')); //separates the string based on '_' and displays an array 



