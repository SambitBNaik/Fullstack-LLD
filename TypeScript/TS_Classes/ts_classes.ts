// TypeScript Classes
// TypeScript adds types and visiblity modifiers to javascript classes.

// Members : Types
// The memebers of a class (properties & methodes) are typed using type annotations,similar to varibles
// Example:-
// class Person{
//     name: string;
// }
// const person= new Person();
// person.name='Jane';

// Members: Visibility
// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript
// public: (default) allows access to the class member from any where
// private: only allows access to the class member from within the class.
// protected: allows access to the class member from itself and any classes that inherit it , which is covered in the inheritance section below.


// class Person{
//     private name: string;

//     public constructor(name: string){
//         this.name=name;
//     }

//     public getName(): string{
//         return this.name;
//     }
// }

// const person= new Person("Jane");
// console.log(person.getName());// person.name isn't accessible from outside the class since it's private

// The this keyword in a class usually refers to the insatance of the class. 

// Parameters Properties
// TypesScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

// class Person{
//     // Name is a private member variable

//     public constructor(private name: string){}

//     public getName(): string{
//         return this.name;
//     }
// }

// const person= new Person("Jane");
// console.log(person.getName());


// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.

// class Person{
//     private readonly name: string;

//     public constructor(name: string){
//         // name can not be changed after this initial defination, which has to be either at it's declaration or in the constructor.
//         this.name=name;
//     }

//     public getName(): string{
//         return this.name;
//     }
// }

// const perosn= new Person("Jane");
// console.log(perosn.getName());


// Inheritance: Extends
// Classes can extended each other through the extendes keyword. A class can only extends one other class.

// Example
// interface Shape{
//     getArea: ()=> number;
// }

// class Rectangle implements Shape{
//     public constructor(protected readonly width: number, protected readonly height: number){}

//     public getArea(): number{
//         return this.width* this.height;
//     }
// }

// class Square extends Rectangle{
//     public constructor(width: number){
//         super(width,width);   
//     }
//     // getArea gets inherited from rectangle
// }

// const mySq=new Square(20);
// console.log(mySq.getArea());

// Override
// When a class extendes another class, it can replace the members if the parent class with the same name.
// Newer version of TypeScript allow explicitly marking this with the override keyword.

// interface Shape{
//     getArea: ()=>number;
// }

// class Rectangle implements Shape{
//     // using protected for these members allows access from classes that extended from this class, such as square
//     public constructor(protected readonly width: number, protected readonly height: number) {}

//     public getArea(): number{
//         return this.width * this.height;
//     }

//     public toString(): string{
//         return `Rectangle[width=${this.width}, height=${this.height}]`;
//     }
// }

// class Square extends Rectangle{
//     public constructor(width: number) {
//      super(width,width);   
//     }

//     // this toString replaces the toString from Rectangle
//     public override toString(): string {
//         return `Square[width=${this.width}]`;
//     }
// }

// const mySq=new Square(20);
// console.log(mySq.toString());

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword. Members that are left unimplemented also use abstract keyword.

// abstract class Polygon{
//     public abstract getArea(): number;

//     public toString(): string{
//         return `Polygon[area=${this.getArea()}]`;
//     }
// }

// class Rectangle extends Polygon{
//     public constructor(protected readonly width:number, protected readonly height: number){
//         super();
//     }

//     public getArea(): number {
//         return this.width* this.height;
//     }
// }

// const myRect= new Rectangle(10,20);
// console.log(myRect.getArea());