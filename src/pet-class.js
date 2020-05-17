const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0; 
const UNFIT_TRIGGER = 3;
const HUNGRY_TRIGGER = 5;

class Pet {
    constructor(name) {
      this.name = name;
      this.age = MINIMUM_AGE;
      this.hunger = MINIMUM_HUNGER;
      this.fitness = MAXIMUM_FITNESS;
    }
    growUp() {
      this.age += 1;
      this.hunger += 5;
      this.fitness -= 3;
    }
    walk() {
      if (this.fitness <= 6) {
        this.fitness += 4;
      }
      else {
        this.fitness = 10;
      }
    }
    feed() {
      if (this.hunger >= 3) {
        this.hunger -= 3;
      }
      else {
        this.hunger = 0;
      }
    }
    checkUp() {
      if (this.fitness <= UNFIT_TRIGGER && this.hunger >= HUNGRY_TRIGGER) {
        return 'I am hungry AND I need a walk';
      }
      else if (this.fitness <= UNFIT_TRIGGER) {
        return "I need a walk";
      }
      else if (this.hunger >= HUNGRY_TRIGGER) {
        return 'I am hungry';
      }
      else {
        return 'I feel great!';
      }
    }
  }
    
  