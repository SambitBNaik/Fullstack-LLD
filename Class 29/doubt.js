function multiplyBy(num){
    return function(x){
        return num*x;
        var num=2;
    };
}
// var multiplyByTwo= multiplyBy(2);
// var results=multiplyByTwo(5);
// console.log(results);

// console.log(multiplyBy(5)(2));

function  sum(x,y){
    return x+y;
}
const val= sum(1,2);
const sum1= function(x,y){};

function fetchData(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        console.log("Data recived:" ,data);
    })
    .catch((erroe)=>{
        console.log("Error fetching data:", error);
    })
}

fetchData("https://api.example.com/data");