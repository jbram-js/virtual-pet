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

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
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

      pet.fitness = 8;
      pet.walk();

      expect(pet.fitness).toEqual(10);

      pet.fitness = 10;
      pet.walk();

      expect(pet.fitness).toEqual(10);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('The puppy formerly known as Prince');
      
      pet.hunger = 9;
      pet.feed();
      
      expect(pet.hunger).toEqual(6);
    });

    it('decreases hunger by 3 to a minimum of 0', () => {
      const pet = new Pet('The puppy formerly known as Prince');
  
      pet.hunger = 2;
      pet.feed();

      expect(pet.hunger).toEqual(0);
  
  
      pet.hunger = 1;
      pet.feed();
      
      expect(pet.hunger).toEqual(0);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });
  
  describe('checkUp', () => {
    it('let owner know needs a walk when fitness is less than or equal to 3', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.fitness = 3;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I need a walk');

      pet.fitness = 2;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('let owner know needs feeding when hunger is more than or equal to 5', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I am hungry");

      pet.hunger = 6;
      pet.checkUp();

      expect(pet.checkUp()).toEqual("I am hungry");
  });

    it('let owner know needs walking & feeding when fitness is less than or equal to 3 & hunger is more than or equal to 5', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.fitness = 3;
      pet.hunger = 5;
      pet.checkUp();

      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
      
      pet.fitness = 2;
      pet.hunger = 6;
      pet.checkUp();

      expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
    });

    it('let owner know pet is great when fitness & hunger levels are correct', () => {
      const pet = new Pet('The puppy formerly known as Prince');

      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();

      expect(pet.checkUp()).toBe('I feel great!');

      pet.fitness = 5;
      pet.hunger = 3;
      pet.checkUp();

      expect(pet.checkUp()).toBe('I feel great!');
    });
  });

  describe('isAlive', () => {
    it('Checks if your pet is still alive', () => {
      const pet = new Pet('The puppy formerly known as Prince');
      pet.age = 31;
      pet.hunger = 11;
      pet.fitness = -1;
     
      expect(pet.isAlive).toBe(false);

      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;
      
      expect(pet.isAlive).toBe(false);

      pet.age = 29;
      pet.hunger = 9;
      pet.fitness = 1;

      expect(pet.isAlive).toBe(true);

      pet.age = 15;
      pet.hunger = 5;
      pet.fitness = 5;

      expect(pet.isAlive).toBe(true);

    });
  });