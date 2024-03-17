const CaptainAmerica = {
    name: "Steve Rogers",
    age: 165,
    allies: ["Tony", "Bucky", "Natasha", "Dr Banner", "Thor"],
    address: {
      country: "United States",
      city: {
        name: "Brooklyn",
        zipcode: 12345,
      },
    },
    isAvengerLeader: true,
    SayHi: function () {
      console.log("Captain Says Hi");
    },
};

//CRUD
//Acessing the items of the object
console.log(CaptainAmerica.name);
console.log(CaptainAmerica.SayHi());

//Updating the items of obj
CaptainAmerica.isAvengerLeader=false;
CaptainAmerica.address.zipcode=54321;
console.log("Updated leader  status", CaptainAmerica);

//Adding the item into the object
CaptainAmerica.movies=[
    "Civil-War",
    "End Game",
    "Age of ultron",
    "Infinity War",
    "First Avanger"
];
console.log("Added Movies",CaptainAmerica);

//Deleting items from the object

delete CaptainAmerica.movies;
console.log("Removed Movies", CaptainAmerica);

  