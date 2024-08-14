// TypeScript Object Types
// TypeScript has specific syntax for typing objects.

// Example
// const car: {type: string, model: string, year: number}={
//     type:"Toyota",
//     model:"Corolla",
//     year:2009
// };

// Objects types like this can also be written separatly, and even be reused
 
// Types Inference
// TypeScript can infer the types of properties based on their values.

// const car={
//     type:"Toyota",
// };
// car.type="Ford";// no error
// car.type=2;// Error: Type 'number' is not assignable to type 'string'.

// Optional Properties
// Opetional properties are properties that dont have to be defined in the object defination.

// const car:{type: string, milage:number}={//Property 'milage' is missing in type '{ type: string; }' 
//     // but required in type '{ type: string; milage: number; }
//     type:"Toyota",
// };
// car.milage=2000;

// example with optional property
// const car:{type: string, mileage?:number}={ // no error
//     type: "Toyota"
// };
// car.mileage=2000;

// index Signatures
// Index signatures can be used for objects without a defined list of properties.

// const nameAgeMap :{[index : string]: number}={};
// nameAgeMap.jack=25;// no error
// nameAgeMap.Mark="Fifty";//Error: Type 'string' is not assignable to type 'number'.

// Index  signstures like this one can also be expressed with utility types like Record<string, number>
