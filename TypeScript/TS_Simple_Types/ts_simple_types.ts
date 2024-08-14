// Explicit Type

//Explicit - writing without the type
// let firstName: string="Dylan";

// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:

// let firstName="Dylan";


// Error in Type Assignmemt
// TypeScript will throw error if data types do not match.
// Example:

// let firstName: string="Dylan"; // type string
// firstName=33;// attempts to re-assign the value to a different type

// Implicit type Assignmemt would have made firstName less noticeable as string, but both will throw error:
// let firstName="Dylan";
// firstName=33; // attempts to re-assing the value to different type

// Javascript will not thorw error for mismatched types.

// unable to infer
// TypeScript may not always properly infer what the type of varible may be. In such case, it will set the type
// to any which disables type checking.

// Implicit any as json.parse doesnt know what type of data it returns so it can be "any" thing..
const json=JSON.parse("55");
// most except json to be an object, but it can be string or number like this example
console.log(typeof json);

