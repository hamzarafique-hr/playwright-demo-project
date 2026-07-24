abstract class Animal {
  abstract makeSound() :void;
}
class Dog extends Animal 
{
  makeSound()
  {
    console.log("Woof!");
  }

}
