const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('The puppy formerly known as Prince')).toBeInstanceOf(Object);
    });
  });

  describe('name', () => {
    it('sets the name property', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      expect(pet.name).toEqual('The puppy formerly known as Prince');
    });
  });

  describe('age', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('The puppy formerly known as Prince');

    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });
  