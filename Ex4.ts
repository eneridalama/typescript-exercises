// Write a TypeScript program that converts a variable of one 
// type to another 
// using type assertions and type conversion functions like 
// parseInt().


// Using type assertion to convert a string to a number
let str_num: string = "100";
let numberFromAssertion: number = parseInt(str_num); // Using parseInt to convert
console.log("Number from assertion:", numberFromAssertion);

// Using type assertion to convert a number to a string
let numberValue: number = 200;
let stringFromAssertion: string = numberValue.toString(); // Using toString() method to convert
console.log("String from assertion:", stringFromAssertion);
