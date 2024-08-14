// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.

// Return Type
// The type of the value returned by the function can be explicitly define.

// Example
// The :number here specifies that this function returns a number
function getTime() : number{
    return new Date().getTime();
}

// if no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type
// The type void can be used to indiucate a function doesn't return any value.

function printHello(): void{
    console.log('Hello!');
}

// Parameters
// Function parameters are typed  with a similar syntax as variables declarations.

// Example
function multiply(a: number, b: number){
    return a*b;
}

//Opltional Parameters
// By default typeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here makes parameter `c` as optional
// function add(a:number, b: number, c?:number){
//     return a+b+(c||0);
// }

// Default Parameters
// For parameters with default values, the default value goes after the annotation:
function pow(value: number, exponenet: number=10){
    return value**exponenet;
}
// TypeScript can also infer the type from the default value.

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({dividend, divisor}:{dividend: number, divisor: number}){
    return dividend /divisor;
}

// Rest Parameters
// Rest paramter can be  typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a:number,b:number,...rest:number[]){
    return a+b+rest.reduce((p,c)=> p+c,0);
}

// Type Alias
// Function types can be specidied seprately from functions with type aliases.
// These types are written similarly to arrow functions, read more about arrow functions here.
// Example
type Negate=(value : number)=> number;

// in this function , the parameter `value` automatically gets asdsigned the type `number` from the type `Negate`
const negateFunction: Negate=(value)=> value *-1;