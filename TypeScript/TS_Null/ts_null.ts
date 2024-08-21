// TypeScript Null & Undefined
// TypeSript has a powerful system to deal with null or undefined values.
// By default null and undefined handling is disbled , and can be enabled by setting strictNullChecks to true.
// The rest of this page applies for when strictNullChecks is enabled.

// Types
// null and undefied are premitive types and can be used like other types, such as string.
// Example
// let value: string | undefined | null= null;
// value='hello';
// value= undefined;

// let value: string | undefined | null = null;
// console.log(typeof value);

// value = 'hello';
// console.log(typeof value);

// value = undefined;
// console.log(typeof value);

// Optional Chaininh
// Optional chaining is a javascript feature that works well with TypeScripts null handling. It allows accessing properties
// on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties.
// Example
interface House{
    sqft:number,
    yard?:{
        sqft:number;
    };
}
function printYardSize(house : House){
    const yardSize=house.yard?.sqft;
    if(yardSize===undefined){
        console.log('No yard');
    }else{
        console.log(`Yard is ${yardSize} sqft`);
    }
}

let home: House={
    sqft: 500
};

printYardSize(home);// prints 'No yard'

// Nullish Coalescence
// Nullish Coalscence is another javascript feature that also works well with TypeScript null handling. It allows writing expressions
// that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values cn occur in the expression but 
// are still valid. it can be used with the ?? operator in  an expression, similar to using the && operator.
// Example
function printMilage(milage: number |null | undefined){
    console.log(`Milage: ${milage ?? 'Not Available'}`);
}

printMilage(null);//Prints Milage: Not Available
printMilage(0);//Prints Milage: 0


// Null Assertion
// TypeScript's inference system isn't present, there are times when it makes sense to ignore a vlaues possiblity of being
// null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.
// Example

// function getValue(): string | undefined{
//     return 'hello';
// }
// let value=getValue();
// console.log('Value length'+ value!.length);

// Just like casting, this can be unsafe and should be used with care.

// Array bounds handling
// Even with strictNullChecks enabled, by default TypeScript will assume array access will never return undefined(unless undefined is part of array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.
// Example

let array: number[]=[1,2,3];
let value= array[0];// with `noUncheckedIndexedAccess` this has the type `number | undefined`