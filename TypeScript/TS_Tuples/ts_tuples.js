// TypeScript Tuples
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be known type of value.
// to define a tuple, specify the type of each element in the array.
// Example
// Define our tuple
// let outTuple: [number, boolean, string];
// // initialize correctly
// outTuple=[5,false,'Coding God was here'];
// As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:
// Example
// define our tuple
// let ourTuple: [number, boolean, string];
// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// Readonly Tuple
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values.
// Example
// Define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple=[5,false, 'coding god was here'];
// //we have no type safety in our tuple for indexes 3+
// ourTuple.push('Someting new and wrong');
// console.log(ourTuple);
var ourTuple;
ourTuple = [5, false, "i am"];
console.log(ourTuple);
ourTuple.push("sambit");
console.log(ourTuple);
