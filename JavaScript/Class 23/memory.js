let firstName="Muneeswara";
let secondName = "babu";
secondName="pawar";
firstName=secondName;
// console.log(firstName);
// console.log(secondName);

//pass by value

let firstNameObj ={
    name:"kiran",
}

let secondNameObj ={
    name:"lovepreet",
}
firstNameObj = secondNameObj;
secondNameObj.name="uttam";
// console.log(firstNameObj);
// console.log(secondNameObj);


let person1={
    name:"adam",
    age:"25",
    address:{
        city:"Mumbai",
        pincode:"123456",
    },
};


//copy

// let person2={...person1};
// person1.name="kiran";
// person1.address.city="Banglore";
// console.log(person1);
// console.log(person2);

console.log(JSON.stringify(person1));

let person3= JSON.parse(JSON.stringify(person1));
person1.name="kiran";
person1.address.city="Banglore";
console.log(person1);
console.log(person3);

