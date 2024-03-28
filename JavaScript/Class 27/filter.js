
Array.prototype.myFilter=function(cb){
    const response=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            response.push(this[i]);
        }
    }
    return response;
};

const arr=[1,2,3,4,5,6,7,8,9,10];
const result= arr.filter((elem, index, arr)=>{
    return elem%2===0;
});

console.log(result);