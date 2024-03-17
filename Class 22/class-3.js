class Person{
    constructor(name, age){
        this.name= name;
        this.age=age;
    }

    greet(){
        console.log("Greeting from"+ this.name);
    }

    static compareAges(person1, person2){
        if(person1.age>person2.age){
            return `${person1.name} is older than ${person2.name}`;
        }
        else if(person1.age<person2.age){
            return `${person1.name} is younger than ${person2.name}`;
        }
        else{
            return `${person1.name} and ${person2.name} are same age`;
        }
    }
}

// child class
class Student extends Person{
    constructor(name, age, grade){
        super(name,age);
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} studies in ${this.grade}`);
    }
}

const person = new Person("john", 26);
const perosn2 = new Person("uttam",28);
const student = new Student("Sambit","26","10");

console.log(Person.compareAges(person,perosn2));