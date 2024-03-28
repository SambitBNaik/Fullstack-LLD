const getEmailFn= function(){
     console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
};

const student={
    firstName:"Adam",
    lastName:"Smith",
    age:25,
    // getEmail: getEmailFn,
};


const getInfo = function(city, school, sport){
    console.log(
        `${this.firstName} ${this.lastName} studies in ${school} at ${city} and he likes to play ${sport} `
    );
};



const arr =["Hydrabad","City Montisorry School","Cricket"];
// getInfo.call(student, ...arr);
// getInfo.apply(student, arr);



 student.getEmailFn();

const teacher ={
    firstName:"Rohit",
    lastName: "Sharma",
    age:37,
    getEmail : getEmailFn,
};

// teacher.getEmail();

const student1={
    firstName:"Adam",
    lastName:"Smith",
    age:25,
    getEmail: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

const teacher1 ={
    firstName:"Rohit",
    lastName:"Sharma",
    age:37,
};

// teacher1.prototype = student1;
// borrow function


// i want to change this refering to inside student1
// student1.getEmail();

// call, bind , apply all are solving same problem in different way
// if you want to change the context of this keyword a particular function
// is referring to then we can use call, apply , bind

// student1.getEmail.call(teacher1);
// getEmailFn.call(student);