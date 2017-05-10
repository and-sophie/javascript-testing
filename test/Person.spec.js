import Person from '../src/Person';
import Pet from '../src/Pet';

describe('Person', () => {

  let testPet = sinon.spy(Pet);
  let testPerson = new Person(testPet);

  describe('Person.Pet', () => {

    it('returns a Pet class object', () => {
      expect(testPerson.Pet).to.equal(testPet);
    });

  });

  describe('buyPet', () => {

    it('creates a new pet', () => {
      testPerson.buyPet();
      expect(testPet.calledWithNew()).to.equal(true);
    });

  });

  describe('namePet', () => {

    it('calls setName on the pet with the given name', () => {
      testPerson.buyPet();
      testPerson.pet.setName = sinon.spy();
      testPerson.namePet("jack");
      expect(testPerson.pet.setName.calledOnce).to.equal(true);
    })

  })


})
