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
    it('increments the hunger by 5', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });  
    it('decreases the fitness by 3', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
    }); 
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by 4 to a maximum of 10', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.fitness = 7;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
    it('increases fitness by 4 to a maximum of 10', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.hunger = 15;
      pet.feed();
  
      expect(pet.hunger).toEqual(12);
    });
    it('decreases hunger by 3 to a minimum of 0', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.hunger = 2;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
    it('decreases hunger by 3 to a minimum of 0', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.hunger = 1;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
  });
  