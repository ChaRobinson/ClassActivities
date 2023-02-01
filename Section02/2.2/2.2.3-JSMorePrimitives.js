const { default: nodeTest } = require("node:test");

// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "noon";
timeOfDay = "night";
// Create a variable "greeting" that references a template literal
let greeting = `Good ${timeOfDay}`;
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
// Print "greeting"
console.log(`"${greeting} Person, time to wake up"`);
// Create a new variable, but do not assign it a value
let hippo;
// Print the new variable and its type
console.log(hippo, typeof hippo);
// What type should we expect?
// ***undefined***
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
hippo = null;

// Print the variable and its type again
// What type should we expect?
console.log(hippo, typeof hippo);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?
//console.log(thisDoesNotExist);
// reference error
// Print "greeting" again
console.log(greeting);
// Will this line run?
// no it will not.  Nothing executes after the reference error, so it is imperative to fix the
// reference error.  //


