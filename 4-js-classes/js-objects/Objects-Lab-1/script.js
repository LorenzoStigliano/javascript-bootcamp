//Me, Me, Me
// 1. Create an empty object called me.
const me = {}
// 2. Assign it properties for name, age, and email with corresponding values.
me.name = 'Lorenzo'
me.age = 12
me.email = 'lorenzo@email.com'
// 3. The object would look something like this if we console logged it:
console.log(me)
// 4. Using dot notation, access the name property in your object.
console.log(me.name)
// 5. Without writing directly into the object, update the value of age to be 1000 years old.
me.age = 1000
// 6. Using dot notation, verify that age has been updated.
console.log(me.age)
// 7. Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
me.placeOfResidence = 'Edinburgh'
// 8. Access the value of "place of residence"
console.log(me.placeOfResidence)


// Given the slimer object:
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
// What would you write to access the name and console.log it?
console.log(monster.name)
// What would you write to change the type to 'creature' (without changing it inside the object itself)
monster.type = 'creature'
// What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6
// console.log the object to make sure type is creature, and age is 6
console.log(monster)

//Ogers
//how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?

const adventurer = {
  name: 'LorenzoDroganSlayer',
  hitpoints: 100,
  damage: 20,
  recieveDamage(damage){
    this.hitpoints -= damage
  },
  gethealth(){
    return this.hitpoints
  }
}

//how would you model an ogre? Your ogre will want hitpoints.
const ogre = {
  name: 'Shrek',
  hitpoints: 200,
  damage: 5,
  recieveDamage(damage){
    this.hitpoints -= damage
  },
  gethealth(){
    return this.hitpoints
  }
}

while(adventurer.hitpoints > 0 && ogre.hitpoints > 0){
  adventurer.recieveDamage(ogre.damage)
  ogre.recieveDamage(adventurer.damage)
}
console.log(adventurer.hitpoints, ogre.hitpoints)


// cat combinator

// Define an object called cat1 and cat2 that contains the following properties:

const cat1 = {
  name: "garfield",
  breed: "gingerboi",
  age: 44
}

const cat2 = {
  name: "monica",
  breed: "sweetthooth",
  age: 32.3
}

//Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

//Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.


function combineCats(mama, papa){
  return {
    name: mama.name + papa.name,
    age: 1,
    breed: `${mama.breed}-${papa.breed}`
  }
}

console.log(combineCats(cat1, cat2))
