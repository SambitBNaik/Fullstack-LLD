//numbers

// const a=10;
// const b=-10;
// const c=10.345;
// const d=-10.345;

// console.log(typeof a);
// console.log(a,b,c,d);

// //Strings
// const e="q";
// const f="hello world";
// console.log(typeof e);
// console.log(e, f);

// //null
// const g = null;
// console.log(typeof g, g);

// //boolean
// const h=true;
// const i= false;
// console.log(typeof h);
// console.log(h,i);

// //undefined || not definec

// //not defined talks about variables  which is not declared
// // console.log(aplha);

// //undefined -> when variable is declared but not initialized

// let j;
// console.log(typeof j, j);

// //non -premitive types

// //arrays

// //collections of values  which can  store  different  data types  values
// const k=[1,2,3,4,5];
// const l=["sambit",1,2, true, null];
// console.log(typeof k,k);
// console.log(typeof l,l);

//objects - custom data type  which can  store  any data

const person={
    firstName :"sambit",
    lastName:"Naik",
    phoneNumber :"7978586534",
    age :27
};
console.log(typeof  person);
console.log(person);
console.log(typeof person.firstName);

//functions -Create a function when you  want to perform
//a specific task again again

//(...,..,...) -> functions parameters
//{ } is called  as function body

function  coffeeMachine(quantity, drink){
    const item="I need"+quantity+" "+drink;
    return item;
}

console.log(coffeeMachine(" 200ml", "expresso"));
console.log(coffeeMachine(" 200ml", "latte"));
console.log(typeof coffeeMachine);