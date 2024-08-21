// TypeScript Casting
// There are times when working with types where it's necessary to override the type of variable, such as when incorrect
// types are provide by a library. casting is the process a type.

// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
// Example
// let x : unknown ='hello';
// console.log((x as string).length);

// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
// let x: unknown = 4;
// console.log((x as string).length); // prints undefined since numbers don't have a length

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will 
// throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
 
// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. 
// If this was intentional, convert the expression to 'unknown' first.

// The force casting section covers how to override this.

// Casting With <>
// using <> works the same as casting with as.
// Example
// let x : unknown ='hello';
// console.log((<string>x).length);

// This type of casting will not work with TSX, such as when working on React files.

// Force casting
// To override type errors that Typescript may throw when casting, first two cast ti unknown, then to the target type.
// let x='hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined.