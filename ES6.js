const pets = [{
    name: "Max",
    type: "dog",
    bornOn: 2018
  },
  {
    name: "Angel",
    type: "cat",
    bornOn: 2015
  },
  {
    name: "Jasper",
    type: "dog",
    bornOn: 2016
  }
];

const getAge = (pet) => new Date().getFullYear() - pet.bornOn;


let petsWithAge = pets.map((pet) => {
    return {...pet, age:getAge(pet)}});
console.log(petsWithAge);

let dogs = [];

dogs =pets.filter((pet) => pet.type === "dog" );
console.log(dogs);

let jasper;

jasper = petsWithAge.find((pet) => (pet.name === "Jasper"));
console.log("Jasper is " + jasper.age + " years old");
