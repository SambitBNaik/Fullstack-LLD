// Q1. Write a funcntion sum(x)(y)(z)

function sum(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}
// const sum1=sum(1);
// const sum2=sum1(3);
// console.log(sum2(3));
// console.log(sum(1)(2)(3));//6

// Q2: Write a fuinction sum(x,y)(z)() ->(1,2)(3)()=6

function sum1(x,y){
    return function(z){
        return function(){
            return x+y+z;
        };
    };
}
// console.log(sum1(1,2)(3)());

// Q: implement a function that generates a random 
// number between 1 and 100,
// and returns a fuinction that checks if a guessed
// number matches
// the generated number

function guessGame(){
    const generatedNumber = Math.floor(Math.random()*100)+1;
    console.log(generatedNumber);
    return function(guessNumber){
        if(guessNumber===generatedNumber){
            console.log("Congratulations");
        }
        else if(guessNumber>generatedNumber){
            console.log("Please try a lower number again");
        }
        else{
            console.log("Please try  a higher number");
        }
    };
}

const gameStart = guessGame();
console.log(gameStart(60));
console.log(gameStart(80));
console.log(gameStart(92));