
// Simple console log
// console.log(this);

// This inside function
function  test(){
    console.log(this);
};
// test();

// This keyword is inside  an object itself
const obj={
    name:"adam",
    age: 32,
    getPrintInfo: function(){
        console.log(this.name+" "+this.age);
    }
}

// obj.getPrintInfo();

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
// This point to the global object.