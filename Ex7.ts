// Write a TypeScript program that defines an enumeration 'Color' with 
// values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of
// type 'Color' and assign it one of the enumeration values.


// Define an enumeration (enum) for colors
enum Color {
    Red = "Red",
    Green = "Green",
    White ="White",
    Blue = "Blue"
  }
  console.log("List of colors:",Color);
  // Create a variable 'selectedColor' of type 'Color' and assign a value from the enumeration
  let selectedColor: Color = Color.Green;
  
  // Print the selected color
  console.log("Selected Color:", selectedColor);
  