const arr=[2,3,4,5,6];

function calculateSquare(arr){
    const result=[];
    for(let i=0 ;i<arr.length;i++){
        result.push(arr[i]*arr[i]);
    }
    return result;
}
// console.log(calculateSquare(arr));

// map -> when on each index of the array you are expecting
// same opertion to be done

// foreach loop
// const output= arr.map((num,index)=>{
//     console.log(num,index);
//     return num*num;
// })

// console.log(output);
const transaction =[1000,300,500,200,100];
const inrToUSD=83;
const outputTxnArrr = transaction.map((txn,i)=>{
    return txn/ inrToUSD;
})

console.log(outputTxnArrr);