import Person from './Person';
import Pet from './Pet';

console.log("Index file has been called");

let person = new Person();

console.log("Creating person object");
console.log(person);


console.log("Creating a new pet");
console.log(person.buyPet());

console.log(person.namePet());
