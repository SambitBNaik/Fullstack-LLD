/**
 * Function statement , function  Decalration
 * Function Expression
 * Anonymous fuction
 * Named Function Expression
 * Arrow Function
 */

//Fucnction Declaration, Function Statement
//function Parameter

function SayHi(from, to){
    console.log(from+" is whishing HI!  to the "+ to);
}
//Function Invocation
//Function Arguments

SayHi("Abhishek", "Ratan");

//Functions Expression
//Annonymous  Function  Expression

const sayHiExpression = function(from , to){
    console.log(from+" is whishing  HI! to the "+to+" from say hi  expression" );
};
sayHiExpression("Abhishek","Ratan");

//Arrow  functions -ES6
const Hello =(from, to) =>{
    console.log(from+" is  whishing  HI!  to the "+ to+" from say hi expression 1");
};

Hello("Sambit", "liti");

//First class  citizens ||  first class  function
//Functions  can be used  as methods and as variables  and  can be passed into function
//can be also returned from function
const hello =() =>{
    return  "Say Hello";
}

const HelloWorld=(params) =>{
    return params;
};

//const newfunc = HelloWorld(hello);
//newfunc();

console.log(HelloWorld(hello)());

