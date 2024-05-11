// Write a TypeScript program that defines a TypeScript interface Makina with properties 
// make and model of type string. Create a type Autobus with properties make and model of 
// type string and an additional property payloadCapacity of type number. Now, create 
// a type Vehicle that represents either a Makina or a Autobus using a union type.


// Define an interface 'Car' with 'make' and 'model' properties of type 'string'
interface Makina {
    make: string;
    model: string;
  }
  
  // Define a type 'Bus' with 'make' and 'model' properties of type 'string' and 'payloadCapacity' of type 'number'
  interface Autobusi {
    make: string;
    model: string;
    payloadCapacity: number;
  };
  
  // Create a type 'Vehicle' that represents either a 'Car' or a 'Bus' using a union type
  type Vehicle = Makina | Autobusi;
  
  // Create instances of 'Car' and 'Bus'
  const car: Makina = { make: "Audi", model: "A4" };
  const bus: Autobusi = { make: "Vovo", model: "XC60", payloadCapacity: 20 };
  
  // Create an array of 'Vehicle' type
  const vehicles: Vehicle[] = [car, bus];
  
  // Iterate through the 'vehicles' array and print details
  vehicles.forEach((vehicle) => {
    console.log(`Make: ${vehicle.make}`);
    console.log(`Model: ${vehicle.model}`);
    if ("payloadCapacity" in vehicle) {
      console.log(`Payload Capacity: ${vehicle.payloadCapacity}`);
    }
    console.log("--------");
  });
  