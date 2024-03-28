// oops -> java, python , c++ -> class, object -> inheritance, abstraction,
// polymorphism, encapsulation
// functional -> javascript, also supports opps
//(behind the scenes its functional prrogrramming)
// procedural -> sql, c- top to bottom level of exection

// callback
//callback me later

function printFirstName(name){
    console.log(name);
}

function printLastName(name){
    console.log(name);
}

//DRY -> Dont repaet yourself
// console.log(printFirstName("Himangi"),printLastName("Pawar"));

// A callback function is a=function passed into another function as an argument,
//which is then invoked inside the outer function to complete some sort action.

//HOF -> Higher  Order function
//Any function that takes in a function or returns out is a higher-order function
//  function printFullName(name, callBackfn){
//     return callBackfn(name);
//  }

//  function printName(name){
//     console.log(name);
//  }

//  console.log(
//     printFullName("himangi",printName),
//     printFullName("pawar",printName)
//  );

//  printFullName is higher order function(hof)
//  printName is a callback function

//------------------------------------------------------------------------------------------

//radius of different circles
const myRadiusArr=[2,3,5,6,7,8];

// find for each circle area , circuference and diameter


//V1

//1st methood
// const area= myRadiusArr.map((num)=>{
//     return 3.141*num*num;
// })
// console.log(area);

// //2nd method // calculate area
// function calculateArea(myRadiusArr){
//     const result=[];
//     for(let i=0;i<myRadiusArr.length;i++){
//         result.push(3.141*myRadiusArr[i]*myRadiusArr[i]);
//     }
//     return result;
// }

// // calculate circuference
// function circumference(myRadiusArr){
//     const result=[];
//     for(let i=0;i<myRadiusArr.length;i++){
//         result.push(2*3.141*myRadiusArr[i]);
//     }
//     return result;
// }

// // calculate diameter
// function calculateDiameter(myRadiusArr){
//     const result=[];
//     for(let i=0;i<myRadiusArr.length;i++){
//         result.push(2*myRadiusArr[i]);
//     }
//     return result;
// }

// console.log("Area :"+calculateArea(myRadiusArr));
// console.log("Circumference :"+circumference(myRadiusArr));
// console.log("Diameter :"+calculateDiameter(myRadiusArr));

// V2
// calculate is HOF

function calculate(myRadiusArr,callback){
    let result =[];
    for(let i=0;i<myRadiusArr.length;i++){
        result.push(callback(myRadiusArr[i]));
    }
    return result;
}

function calculateArea(radius){
    return 3.141*radius*radius;
}
function calculateCircumference(radius){
    return 2*3.141*radius;
}
function calculateDiameter(radius){
    return 2*radius;
}
// callback -> calculateArea -> Calculate circumference -> calculate diameter
console.log("Area :"+calculate(myRadiusArr,calculateArea));
console.log("Circumferenece :"+ calculate(myRadiusArr,calculateCircumference));
console.log("Diameter :"+calculate(myRadiusArr,calculateDiameter));