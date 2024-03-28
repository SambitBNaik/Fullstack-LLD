Array.prototype.myReduce = function(cb,intialValue){
    let response= intialValue;
    for(let i=0;i<this.length;i++){
        response=response?cb(response,this[i],i,this) : this;
    }
    return response;
}


const arr=[1,2,3,4,5,6,7,8,9,10];
// sum of elements
const result= arr.reduce((previousValue,currentValue,index,arr)=>{
    return (previousValue+=currentValue);
},0);

console.log(result);

const arr1=[1,2,3,4,5,6];
const result1 = arr1.reduce((previousValue,currentValue,index,arr1)=>{
    return (previousValue+=currentValue);
},0);
console.log(result1);