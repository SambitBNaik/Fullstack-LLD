const car1={
    name :'nexon',
    color:"coral",
    model:'Nexon petrol',
    topspeed:'160kmph'
};

const car2={
    name :'Tiago',
    color:'black',
    model:'Disel',
    topspeed:'240kmph'
};

const car3={
    name:'Safari',
    color:'red',
    model:'Disel',
    topspeed:"240kmph"
};

const car4={
    name:'Harrier',
    color:'black',
    model:'petrol',
    topspeed:"240kmph"
};
const car5={
    name:'Altroz',
    color:'red',
    model:'Disel',
    topspeed:"240kmph"
};

// Constructor

// -> used toinitilize object variable
// -> in order to create object you use new keyword

// Step-1 :{}
// Step-2 :{
//     this.name: undefined;
//     this.color: undefined;
//     this.model: undefined;
//     this.topspeed: undefined;
// }

// Step-3 :{
//     name: Altroz;
//     color: black;
//     model: petrol;
//     this.topspeed: 250kmph;
// }

function TataCar(name , color, model, topspeed){
    this.name= name;
    this.color= color;
    this.model=model;
    this.topspeed=topspeed;
}

const Altroz = new TataCar("Altroz","Black","Petrol","250kmph");
const Safari = new TataCar("Safari","Red","Petrol","250kmph");
console.log(Safari);

// 2 ways of creating objects in js
// {} | constructor function