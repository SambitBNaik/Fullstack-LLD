// TypeScript has a specific syntax for typing arrays.

// Example
// const names: string[]=[];
// names.push("sambit","ronak");// no error
// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


// Readonly
// The readonly keyword can prevent arrays from being changed.

// const names : readonly string[]=['Dylan'];
// names.push("jack");// Errro: Property 'push' doesnt exist on type 'readonly string[]'.
// // try removing the readonly modifier and see if it works?


// Type Inference
// TypeScript can infer the type of an array if it has values.

const numbers=[1,2,3]; // inferred to type nuumber[]
numbers.push(4);// no error
//  numbers.push("2"); //Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number=numbers[0];// no error
