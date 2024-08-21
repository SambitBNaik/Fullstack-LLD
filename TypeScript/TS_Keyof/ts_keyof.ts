// keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.

// Example
interface Person{
    name:string;
    age:number;
}

// 'key of person' here creates a union type of 'name' and 'age', other strings will not be allowed
function printPersonProperty(person : Person, property : keyof Person){
    console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person={
    name:"Max",
    age:27
}
printPersonProperty(person,"name");

// keyof with index signatures
// keyof can also be used with index signatures to extract the index type.

type StringMap= {[key: string]: unknown};
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap{
    return {[property]: value};
}