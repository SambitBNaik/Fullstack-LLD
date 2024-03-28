//1
//undefined and not defined
// console.log(x); //not definde


//2
// y=1;
// // console.log(y);//1 due to hoisting
// var y;

//3
//decalration and initialization
// console.log(z);// undefined
// var z=1;

// //4
// a=1;
// // console.log(a);//error
// let a;

// //5
// console.log(c);//error
// let  c=1;


//6
// console.log(c);
// c=1;

//7
// console.log(sum());// not definde -> undefined
// var sum=function(a,b){// undefined
//     return a+b;
// };
 

//8 
// console.log(total);
// const total= function(a,b){//undefinde -> not defined
//     return a+b;
// };


//9
// console.log(sum1(2,3));

// function sum1(a,b){  //5
//     return a+b;
// }

//10
// function example1(){
//     if(true){
//         var aa=1;
//         let bb=2;
//         console.log(bb);
//     }
//     console.log(aa);  /// error
//     console.log(bb);
// }
// example1();

// let and const variable are blocked scoped 
// if you cannot write logic in one line you for block
// if(trur) var aa=1
// if(true){
//     whatever ,agic happens here stays here with respect to let and const
//     variables
//     where stills var varriables are hoisted in global space
// }

//11

// var cc=20;
// function example(){
//     if(true){
//        var  cc=1;
//     }
//     console.log(cc);  //A: 1
// }
// example();
// console.log(cc); //B:20

//12

// var dd=20;
// function example2(){
//     if(true){
//         dd=1;
//     }
//     console.log(dd);//A: 1
// }
// example2();
// console.log(dd); //B: 1

//13
// function parent(){
//     var a=20;
//     function child(){
//         // lexical scope -> current scope +
//         // parent scope till it reaches globla scope
//         console.log(a);
//     }
//     child();
// }
// parent();   // 20


//14

function parent1(){
    var a=20;
    function child(){
        console.log(a);//A :20
        function child2(){
            console.log(a); //B: 20
        }
        child2();
    }
    child();
}

parent1();

//15
function parent2(){
    var a=20;
    function child(){
        console.log(a);// A- undefined
        function child2(){
            console.log(a);//B - 10
        }
        var a=10;
        child2();
    }
    child();
}
parent2();

//16
function parent3(){
    var a=20;
    function child(){
        console.log(a);// A:20
        function child2(){
            console.log(a);//B: undefinded
            var a=30;
        }
        a=10;
        child2();
    }
    child();
    console.log(a);//C: 10
}
parent3();

//17
function parent4() {
    var a = 20;
    function child() {
      let a = 10; // a = 30
      console.log(a); // A. 10
      function child2() {
        console.log(a); // B. 10
        a = 30;
      }
      console.log(a); // C: 10
      child2();
    }
    child();
    console.log(a); // D: 20
  }
  parent4();

  function parent5() {
    var a = 20;
    function child() {
      let a = 10; // a = 30
      console.log(a); // A. 10
      function child2() {
        console.log(a); // B. 10
        a = 30;
      }
      child2();
      console.log(a); // C:30
    }
    child();
    console.log(a); // D: 20
  }
  
  parent5();