const name = "Bibhu";
const age = 27;

console.log(`hello my name is ${name} and my age is ${age}` );

// using of  `` is known as string interpollation

const gameName = new String("Bibhu-Bhushan-Gurudas");

console.log(gameName[0]); // accessing of keys
console.log(gameName.__proto__); 

const newName = gameName.substring(0,4);
const newName2 = gameName.slice(-10,4);
console.log(newName);
console.log(newName2);

const newStringOne = "   Bibhuti Bhushan Gurudas";

//  go for the mdn strim to find out new methods.

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'))
