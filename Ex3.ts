// Write a TypeScript program that declares a variable as a 
// number and then 
// tries to assign a string to it to see type checking in action.


// Declare a variable as a number
let n: number = 42;

// Attempt to assign a string to the number variable (Type Error)
// n = "Hello, TypeScript!"; // This line will result in a type error

// Attempt to print the value (won't reach this line due to the error above)
console.log("n = ", n);
