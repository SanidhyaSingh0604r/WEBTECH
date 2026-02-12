const person={
    name: "Sanidhya",
    age:20,
    address:{
        city:"Ghaziabad",
        state:"Uttar Pradesh",
        pin:202140
    }
};
console.log(person.name);
console.log(person.address);
console.log(person.address.state);

let person2 = person;
person2.age=31;
console.log(person.age);
console.log(person2.age);
