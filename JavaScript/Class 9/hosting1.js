// let a=10;
// console.log(a);
// //can not access a before initialization

/**
 * When  you declaere variable with  let and const
 * so these variable  will not be accessible before initilization and
 * at this moment they will be in a temporal dead zone
 */

const a=10;
const b=20;

const add= function add(a,b){
    var ans=a+b;
    return ans;
};

const  r=add(a,b);
const r1=add(r,b);

console.log(r, r1);

const obj={
    firstName :"john",
    lastName :"Smith",
};
