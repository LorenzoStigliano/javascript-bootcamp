// ** 📚 LESSON TO DO 📚 **
// defining
// instantiating
// constructor
// methods
// extending / inheritance
// super

class Person {
  //private
  #pet
  constructor(name, age, location, pet){
    this.name = name,
    this.age = age,
    this.location = location,
    this.#pet = pet
  }
  //#introduce() is an private method
  introduce(){
    console.log(`Hi, my name is ${this.name}.`)
  }
}

const lorenzo = new Person('lorenzo', 22, 'edinburgh', 'dog')

console.log(lorenzo)
lorenzo.introduce()
//cannot access a private variable/method
console.log(lorenzo.pet)

class Animal{
  constructor(name, color){
    this.name = name
    this.color = color
  }
  introduce(){
    console.log(`Hi, my name is ${this.name} and I am ${this.color}.`)
  }
}

const fish = new Animal('nemo', 'orange')
fish.introduce()

class Duck extends Animal{
  constructor(name, color){
    super(name, color)
    //overwrite color
    this.color = 'blue'
  }
  quack(){
    console.log('Quack!?')
  }
  sayHello(){
    //need to use super to call parent class
    super.introduce()
    console.log('I am duck.')
  }
}

const donald = new Duck('donald', 'yellow')
//can use parent class methdos
donald.introduce()
donald.quack()
donald.sayHello()

class Dog extends Animal{
  //no need to add constructor
  bark(){
    console.log('Woof!')
  }
}

const goofy = new Dog('goofy','spotty')
goofy.bark()

//If a parent class had private fields / methods, would they be inherited by the child class in JavaScript? NO

// console.log('')

/* EXERCISE 1

// Write a Cart class that has the following properties:

// contents (array)

// and the following methods:

// addItem(item) - adds the given item into the contents array
// removeItem(item) - removes the given item from the contents array
// empty() - removes all items from the contents array
// */


/* EXERCISE 2
Write a Shape class that has the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the shape
getPerimeter() - calculates the total length of all sides of the shape
*/

/* EXERCISE 3
Write a Square class that extends the Shape class above. It should have the same properties and methods as the Shape class, but only take a width when being instantiated. The height should be automatically set to be equal to the width.
*/

/* EXERCISE 4
Write a Tringle class that extends the Shape class above. It should have the following properties:

width (number)
height (number)

and the following methods:

getArea() - calculates the area of the triangle
getPerimeter() - calculates the perimeter of the triangle (assuming it's right-angled, so width + height + √(width^2 + height^2))
*/

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
  attack(target) {
    let chance = Math.random()
    if (chance <= this.accuracy) {
      target.hull -= this.firepower
      return true
    }
    else return false
  }
}

class Alienship extends Ship{
  constructor(name, hull, firepower, accuracy){
    super(name)
    this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2
    this.accuracy = Math.random() *.2 + 0.6
  }
}


const test = new Alienship('lorenzo')
console.log(test)
readline("j")
