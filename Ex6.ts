// Write a TypeScript program that declares an array of a specific data type. 
// It will demonstrates common array operations like adding elements, removing 
// elements, and iterating through the array.


// Declare an array of strings
const colors: string[] = ["Red", "Green", "Blue", "Orange"];
// Add elements to the array
colors.push("White");
colors.push("Pink");
// Remove elements from the array
colors.pop(); // Removes the last element ("Orange")
// Iterate through the array and print each element
console.log("Array Elements:");
for (const c of colors) {
  console.log(c);
}
// Check if an element exists in the array
const searchColor = "Green";
const isColorInArray = colors.includes(searchColor);
console.log(`Is ${searchColor} in the array? ${isColorInArray ? "Yes" : "No"}`);
// Find the index of a specific element in the array
const indexOfBlue = colors.indexOf("Blue");
console.log(`Index of "Blue" in the array: ${indexOfBlue}`);
// Remove a specific element from the array by index
if (indexOfBlue !== -1) {
  colors.splice(indexOfBlue, 1);
}
// Display the modified array
console.log("Modified Array:");
console.log(colors);
