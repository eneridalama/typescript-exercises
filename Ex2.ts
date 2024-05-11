// Write a TypeScript program that declares variables of the following data types: 
// number, string, boolean, and undefined. 
// Assign values to them and perform basic operations.


// Declare variables
let n1: number = 42;
let strVariable: string = "Hello, TypeScript!";
let boolVariable: boolean = true;
let undefinedVariable: undefined = undefined;
let newVar: string = `${n1} this is n1`;

console.log('newVar ', newVar)



// Perform basic operations
const n2: number = 10;

// Addition
const sum: number = n1 + n2;
console.log("Sum:", sum);

// String concatenation
const concatenatedString: string = strVariable + " How are you?";
console.log("Concatenated String:", concatenatedString);

// Logical operation
const isTrue: boolean = boolVariable && true;
console.log("Logical AND:", isTrue);

// Check if undefined
if (undefinedVariable === undefined) {
    console.log("undefinedVariable is undefined.");
} else {
    console.log("undefinedVariable is defined.");
}
