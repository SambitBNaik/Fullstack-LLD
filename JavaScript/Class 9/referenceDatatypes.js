const obj={
    firstName :"Ankit",
    LastName  :"Tiwari",
};


//Sprade operator
const obj2 ={...obj};
obj2.firstName="Uttam";
obj2.LastName="sharma";

console.log(obj);
console.log(obj2);