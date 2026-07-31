class Animal {

  constructor(name) {
    this.name = name;
  }

  eats() {
    console.log(this.name + " eats food.");
  }
}

// let Animal1 = new Animal("Dog");
// Animal1.eats(); // Output: Dog eats food.

class Dog extends Animal {
    eats() {
        super.eats(); // Call the parent class method
        console.log(this.name + " eats meat.");
    }

}

let Dog1 = new Dog("Doggy");
Dog1.eats(); // Output: Dog eats meat.