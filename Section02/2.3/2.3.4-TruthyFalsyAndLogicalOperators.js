// Logical Operators
// what do you expect each line to print?
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); // Not  true so it's false
console.log(!(true && false)); //Is it not true?  Yes...so then it's true...unwrap your mind around
//that one xD
console.log(false || !false); //true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); //nill
console.log(!``); //true
console.log(!(1 && "false")); //false
console.log(NaN || !"true"); //false? <--need to be explained like i'm 5

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 10;
age > 10 ? console.log("full menu") : console.log("kids menu");

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *

condition = 10 < 0
? console.log("You don't get a kid's menu!")
: console.log("The number is zero");
