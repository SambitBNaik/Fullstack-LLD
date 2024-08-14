// TypeScript Special Types

// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
// The example below does not use any and will throw an error:

// Example without any
// let u= true;
// u="string";// Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u);// Errpr: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// Setting any to the special type any disables type checking:
// Example with any
// let v: any=true;
// v="string";// no error as it can be "any" type
// Math.round(v);// no error as it can be "any" type

// any can be a useful way to get past errors since it disables type checking, 
// but TypeScript will not be able provide type safety, and tools which rely on type data,
// such as auto completion, will not work. Remember, it should be avoided at "any" cost...

// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript  will prevent unknown types from being used, as shown in the below examples:

let w: unknown=1;
w="string";// error
w={
    runANonExistentMethod: ()=>{
        console.log("T think therefore I am");
    }
} as {runANonExistentMethod:()=> void}
// How can we avoid the error for the code commented out below when we don't know type?
// w.runANonExistentMethod();// Error: Object is of type'uunknown'.

if(typeof w==='object' && w!==null){
    (w as {runANonExistentMethod : Function}).runANonExistentMethod();
}
// Altough we have to cast multiple times we can do check in the if to secure our type and have a safer casting


// Compare the example above to the previous example, with  any.

// unknowm is best used when you dont know the type of data being typed. To add a type later, you will need to cast it.
// casting is when we use the "as" keyword to say property or variable is of the casted type.


// Type : never
// never effectively throws an error whenever it is defined.
// let x: never = true;// Error: Type 'boolean' is not assignable to type 'never'.

//  never is rarely used, especially by itself, its primary use is in advanced generics.

// Type : uundefined & null
// undefined and null are types that refer to the javascript primitives and null respectively.
let y: undefined=undefined;
let x: null=null;


// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.