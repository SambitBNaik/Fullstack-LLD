"use strict";

// Simple console log
// console.log(this); -> empty object

// This inside function -> point to undefined
function test(){
    console.log(this);
}
// test();

// this keyword is inside an object itself -> adam 32

const obj={
    name : "adam",
    age:32,
    getPrintinfo : function(){
        console.log(this.name+ " "+this.age);
    },
};

// obj.getPrintinfo();

// This key word from a function that is inside a function  inside an object
const obj2 ={
    name:"steve",
    age:26,
    tetsFunction : function(){
        function g(){
            console.log( this);
            console.log(this.name+" "+this.age);
        }
        g();
    },
};

obj2.tetsFunction();