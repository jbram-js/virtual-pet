const MAXIMUM_AGE = 30;
const MINIMUM_AGE = 0;
const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0; 
const UNFIT_TRIGGER = 3;
const HUNGRY_TRIGGER = 5;

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
  }

  Pet.prototype = {
    get isAlive() {
      return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    }
  };
  
  Pet.prototype.growUp = function() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
  }

  Pet.prototype.walk = function() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }
    else if (this.fitness <= 6) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }

  Pet.prototype.feed = function() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }
    else if (this.hunger >= 3) {
      this.hunger -= 3;
    } else {
      this.hunger = 0;
    }
  }

  Pet.prototype.checkUp = function() {
    if (this.fitness <= UNFIT_TRIGGER && this.hunger >= HUNGRY_TRIGGER) {
      return 'I am hungry AND I need a walk';
    }
    else if (this.fitness <= UNFIT_TRIGGER) {
      return 'I need a walk';
    }
    else if (this.hunger >= HUNGRY_TRIGGER) {
      return 'I am hungry';
    }
    else {
      return 'I feel great!';
    }
  } 
  

module.exports = Pet;