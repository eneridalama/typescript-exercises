// Union Types

// a
// Write a TypeScript program that declares a variable 'result' that can hold
// either a 'string' or a 'number'. Now write a function that takes an argument
// of type 'string | number | boolean' and logs its type


// b
// Write a TypeScript program that creates a function combine that accepts two parameters of 
// types boolean and number. It returns a value that can be either a boolean or a number. Use 
// a union type to achieve this.



// a
// Declare a variable 'result' with a broader union type
let result: string | number | boolean;

// Function that logs the type of the argument
function logType(arg: string | number | boolean): void {
  if (typeof arg === "string") {
    console.log("Type: string");
  } else if (typeof arg === "number") {
    console.log("Type: number");
  } else if (typeof arg === "boolean") {
    console.log("Type: boolean");
  } else {
    console.log("Type: unknown");
  }
}

// Testing the function with different argument types
result = "TypeScript ";
logType(result); // Output: Type: string

result = 100;
logType(result); // Output: Type: number

result = true; // Assigning a boolean value
logType(result); // Output: Type: boolean




// b
// Function 'combine' that accepts boolean and number parameters
function combine(param1: boolean, param2: number): boolean | number {
    if (param1) {
      return param2 * 3; // Return a number if param1 is true
    } else {
      return !param1; // Return a boolean if param1 is false
    }
  }
  
  // Test the 'combine' function
  const result1: boolean | number = combine(true, 24);
  const result2: boolean | number = combine(false, -20);
  
  console.log("Result-1:", result1);  
  console.log("Result-2:", result2);
  