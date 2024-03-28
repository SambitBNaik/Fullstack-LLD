// sum of all the numbers
// const obj ={
//     arr:[1,2,3,4,5],
// };

// function sumOfNumbers(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// reduce HOF should be uded when to reduce array of items into a single item
// console.log("Sum of numbers :"+ sumOfNumbers(obj.arr));

// // acc-> sum

// const sum1= obj.arr.reduce((result, num)=>{
//     return result+num;
// });

// console.log(sum1);

// calculate prefix sum array
function calculatePrefixsum(array){
    const prefixsum= array.reduce((accumulator, currentValue)=>{
        if(accumulator.length>0){
            accumulator.push(accumulator[accumulator.length-1]+currentValue);
        }else{
            accumulator.push(currentValue);
        }
        return accumulator;
    },[])
    return prefixsum;
}

const arr=[1,2,3,4,5,6,7,8];
console.log(calculatePrefixsum(arr));
