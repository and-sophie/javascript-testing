import Pet from './Pet';

export default class Person {

  constructor(petObject = Pet) {
    this.Pet = petObject;
  }

  buyPet = () => {
    this.pet = new this.Pet;
    return this.pet;
  }

  namePet = () => {
    this.pet.setName();
    return this.pet.name;
  }

}
