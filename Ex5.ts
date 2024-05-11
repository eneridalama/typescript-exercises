// Write a TypeScript program that creates type aliases for complex data types 
// such as objects or custom types. 
// Use them to define variables and explain how they improve code readability.


 // Define a type alias for a user object
 type Student = {
    id: number;
    studentname: string;
    email: string;
  };
  
  // Define a type alias for a point in 2D space
  type Point = {
    x: number;
    y: number;
  };
  
  // Create variables using the type aliases
  const student1: Student = {
    id: 1,
    studentname: "ginny_millaray",
    email: "ginny@example.com",
  };
  
  const student2: Student = {
    id: 2,
    studentname: "endika_keeva",
    email: "endika@example.com",
  };
  
  const originPoint: Point = {
    x: 0,
    y: 0,
  };
  
  // Functions that use the type aliases
  function printStudentInfo(student: Student) {
    console.log(`Student ID: ${student.id}`);
    console.log(`Studentname: ${student.studentname}`);
    console.log(`Email: ${student.email}`);
  }
  
  function calculateDistance(point1: Point, point2: Point): number {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  // Using the type aliases to improve code readability
  console.log("Student 1:");
  printStudentInfo(student1);
  
  console.log("\nStudent 2:");
  printStudentInfo(student2);
  
  console.log("\nDistance from origin:");
  console.log(calculateDistance(originPoint, { x: 3, y: 4 }));
  