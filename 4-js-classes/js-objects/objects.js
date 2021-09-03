// ** 📚 LESSON TO DO 📚 **
// defining objects
// accessing  info 
// properties, methods, this
// convenience syntax
// iterating
// delete
// spread & destructing 

const objectAboutMe = {
  name: 'Lorenzo',
  age: 22,
  pets: ['dog', 'fish'],
  // can have nested objects
  pet: {
    name: 'charles',
    type: 'dog'
  }
}
// access values
console.log(objectAboutMe.name)
console.log(objectAboutMe['name'])

const myName = 'name'
console.log(objectAboutMe[myName])

// add a new key value pair
objectAboutMe.location = 'Edinburgh'
console.log(objectAboutMe)

// short hand syntax
const name = 'Lorenzo'
const objectAboutMe2 = {
  name,
  age: 22,
  location: 'Edinburgh',
  introduce: function introduce(){
    return `Hi, my name is ${name}.`
  }
}

console.log(objectAboutMe2.introduce())

// this. to refrence the value in the same object
const objectAboutMe3 = {
  name: 'Lorenzo',
  age: 22,
  hobbies:[],
  location: 'Edinburgh',
  introduce(){
    return `Hi, my name is ${this.name}.`
  },
  addHobby(hobby){
    this.hobbies.push(hobby)
  }
}

console.log(objectAboutMe3.introduce())
console.log(objectAboutMe3.addHobby('Netflix'))

// to delete
delete objectAboutMe3.age

//iterating in a object
for( key in objectAboutMe3){
  console.log(objectAboutMe3[key])
}

const person = {
  name: 'char',
  age: 22,
  location: 'spain'
}

// returns array of key and type
const objectEntries = Object.entries(person)
console.log(objectEntries)
//get values
const objectValues = Object.values(person)
console.log(objectValues)
//get keys
const objectKeys = Object.keys(person)
console.log(objectKeys)

// points to same place in memory 
const personTwo = person
personTwo.name = 'Charlotte'
console.log('person ->', person)
console.log('person ->', personTwo)

//complex datatypes saved in memory
console.log({}==={})

// spread
// how to copy an object no pointers
const personThree = {...person, location: 'London'}
personThree.name = 'Lorenzo'
console.log('person ->', person)
console.log('person ->', personThree)

const objectOne = {
  say : 'hi',
  or: 'bye'
}

const objectTwo = {
  meow : 'cat',
  woof: 'dog'
}

const merdgedObject = {...objectOne, ...objectTwo}
console.log(merdgedObject)

//destructing 

const objectThree = {
  meow : 'cat',
  woof: 'dog'
}

// access the elements of the object
const { meow, woof } = objectThree
console.log(meow)
console.log(woof)

function greeting(person){
  const { meow, woof } = person
  console.log(meow)
  console.log(woof)
}

const greeting_2 = ({ meow }) => console.log(meow)

greeting(merdgedObject)
greeting_2(merdgedObject)

// Deeeeeeep Copy

const user = {
  username: 'lori',
  email: 'lore@lori',
  socialMedia: {
    twitter: '@char',
    facebook: 'loriface',
    linkedIn: 'lorilori'
  }
}

// this does not update both
const userCopy = {...user}
userCopy.email = 'copy@email.com'

console.log('User', user)
console.log('User copy', userCopy)

//this updates both, not the nested object 
const userCopy_2 = {...user}
userCopy_2.socialMedia.twitter = '@lori'

console.log('User', user)
console.log('User copy', userCopy_2)

//need a deep copy:
const userDeepCopy = {
  ...user,
  socialMedia : {
    ...user.socialMedia,
    // updating new
    twitter: '@new'
  }
}

// make sure you are working with a copy or a refrence
const newObject_5 = JSON.parse(JSON.stringify(user))
console.log(newObject_5)

// ====== Mini Challenges 

// Create a "myClassroom" object, it should have the following properties: class name (string), location (string), number of students (number), student names (array - add 4 classmemebers as strings)
// Log the whole object
// Log the just the location
// Log the string '(class name) at (class location) has  (class number od students) students in it'

const myClassroom = {
  className: 'Computing',
  location: 'Zoom',
  numberOfStudents: 4,
  studentNames: ['Lorenzo', 'Cheng', 'Ani', 'Ryan']
}

console.log(myClassroom)
console.log(myClassroom.location)
console.log(`${myClassroom.className} at ${myClassroom.location} has  ${myClassroom.numberOfStudents} students in it.`)

// Create a car object, which has properties for the following:
// brand(String)
// speed in mph(Number)

// And the following methods:// ?
//  speedUp: which increments the car's current speed by 10.
// slowDown: which decrements the car's current speed by 10.

// Both methods should also console log the following string, passing in the brand name and new speed value: "The (brand) is travelling at (speed)mph"
//  Test drive your cars by invoking their methods.

const car = {
  brand: 'Fiat',
  speed: 70,
  speedUp(){
    this.speed += 10
    console.log(`The ${this.brand}is travelling at ${this.speed}mph.`)
  },
  slowDown(){
    this.speed -= 10
    console.log(`The ${this.brand}is travelling at ${this.speed}mph.`)
  }
}

car.speedUp()
car.slowDown()

//  Create a bag object with the following property:
// contents(Array)

//  The bag should have the following methods:
//  addItem(String) - pushes a new item into the bag's contents array.
//  removeItem(String) - removes a given item from the bag's contents array.
//  listItems - lists all the current contents of the bag.
// emptyBag - removes all items from the bag.

//  Test your methods, logging your bag after each on to make sure they are working!
// You may need to do some Googling for this one

const bag = {
  contents : [],
  addItem(string){
    this.contents.push(string)
  },
  removeItem(string){
    this.contents.splice(this.contents.indexOf(string),1)
  },
  listItems(){
    this.contents.forEach(item => console.log(item))
  },
  emptyBag(){
    this.contents = []
  }
}

bag.addItem('book')
bag.addItem('brush')
bag.listItems()
bag.removeItem('book')
bag.listItems()
bag.emptyBag()
bag.listItems()
