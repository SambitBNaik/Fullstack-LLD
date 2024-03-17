// sum mof the all numbers
const obj={
    arr :[1,2,3,4,5],
};

function sumOfNumbers(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

// reduce HOF should  be used when to reduce array of items  into single item
console.log("SumOfNumbers :" +sumOfNumbers(obj.arr));