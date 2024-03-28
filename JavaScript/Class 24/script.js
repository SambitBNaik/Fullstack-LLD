// DataSource

const  dataSource=[
    {name:"foo", age:27},
    {name:"tejal", age:26},
    {name:"sambit", age:26},
    {name:"abhinav", age:26},
    {name:"upendra", age :28},
    {name:"uttam", age :26},
];

function getData(){
    console.log("before making api call");
    setTimeout(()=>{
        let output="";
        
        dataSource.forEach((data)=>{
            output+=`<li>${data.name} ${data.age}</li>`
        });
        console.log("after getting data", output);
        document.body.innerHTML=output;
    },3000);
    console.log("after making api call");
}

function createData(data,cb){
    console.log("before making api call");
    setTimeout(()=>{
        dataSource.push(data);
        console.log("After pushing data",dataSource);
        cb();
    },3500);
    console.log("after making create api call");
}

getData();
createData({name:"dheeraj", age:25},getData); 