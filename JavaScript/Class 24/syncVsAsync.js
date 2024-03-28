// synchoronous - One thing at at time in order
// JS-> Synchoronous single threaded language
// Execute each file from top to bottom
// blocking queue - taking long time to complete
let hello1="Hello1";
let hello2="Hello2";

// console.log(hello1);

for(let i=0;i<1000;i++){}
// console.log(hello2);

let hello3="Hello3";
let hello4="Hello4";
let hello5="Hello5";
let hello6="Hello6";

console.log(hello3);
console.log(hello4);

// asyncronous
setTimeout(()=> console.log(hello5),0);

console.log(hello6);