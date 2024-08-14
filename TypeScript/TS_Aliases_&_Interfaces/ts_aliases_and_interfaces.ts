// TypeScript Type Aliases and Interfaces
// TypeScript allows types to be defined seprately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

// Type Aliases
// Type aliases allows defining types with custom name(an Alias).
// Type aliases can be used for primitive like string or more complex types such as objects and arrays:

// type CarYear=number
// type CarType= string
// type CarModel= String
// type Car={
//     year: CarYear,
//     type: CarType,
//     model: CarModel
// }

// const carYear : CarYear =2001
// const carType: CarType="Toyota"
// const carModel: CarModel="Corolla"
// const car : Car={
//     year: carYear,
//     type: carType,
//     model: carModel
// }

// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

// Example
// interface Rectangel {
//     height: number,
//     width: Number
// }

// const rectangel : Rectangel={
//     height: 20,
//     width: 10
// }

// Extending Interfaces
// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new intrface with the same properties as the original, plus something new.

// interface Rectangel{
//     height: number,
//     width: number
// }

// interface ColoredRectangle extends Rectangel{
//     color: string
// }

// const coloredRectangle : ColoredRectangle={
//     height: 20,
//     width: 10,
//     color: "red"
// };