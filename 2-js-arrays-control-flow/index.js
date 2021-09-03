// ** 📚 LESSON TO DO 📚 **
// Control flow && Conditionals 
// Loops - for && forEach 
// Arrays

// ----- CONTROL FLOW && CONDITIONALS -----

console.log('5' == 5)
//strict comparison; data type and value
console.log('5' === 5)
console.log('5' !== 5)

const myName = 'Lorenzo'

if (myName === 'Lorenzo'){
  console.log('My name is Lorenzo.')
}else if(myName === 'Stig'){
  console.log('Rest in RIP.')
}else{
  console.log('Oh hi good sir.')
}

const isSunny = 'yes it is'
const temp = 18
const needSunglasses = true

// && AND operator
// || OR operator
// Example:

if(isSunny && temp < 20){
  console.log('its sunny today')
}
if(!isSunny){
  console.log('its sunny today')
}

// ----- ARRAYS -----

const myArray = ['Dog', 2, {}, null]
const animalArray = ['Dog', 'Cat', 'Sheep', 'Monkey']

// access items
console.log(animalArray[0])

//it is mutable
animalArray[1] = "Lizard"

// length
console.log(animalArray.length)

//last entry in the array
console.log(animalArray[animalArray.length-1])

// mutable methods
animalArray.pop() // removes last item
animalArray.shift() // remove first item
animalArray.push('Fish') //add to end
animalArray.unshift('Elephant') //add to the front of array
animalArray.splice(1,1, 'Kitten') //removes and replaces

const getItem = animalArray.pop() // to store

// immutable methods
const newArray = animalArray.concat(myArray)
//snapshot
const arraySnapshot = animalArray.slice(1,2) //item only at index one. Staring at 1 upto 2.

//join array pased on the .join('') condition
const arrayToString = animalArray.join('')



// ----- FOR LOOPS && FOR EACH -----

const myPets = ['Dog', 'Cat', 'Sheep', 'Monkey']

for(let i = 0; i < myPets.length; i++){
  myPets[i] = myPets[i].toUpperCase()
}
console.log(myPets)

const bigPets = []
//pet is what each item is called when iterate over it
myPets.forEach((pet) => {
  console.log(pet)
  if(pet.length > 0){
    bigPets.push(pet)
  }
  else{
    console.log(pet)
  }
})


// 👩‍💻 🧑‍💻 PRACTICAL EXERCISES 👩‍💻 🧑‍💻

// --------IF/ELSE-------

// * Declare a "const" "isRaining" and set its value to the boolean true

const isRaining = "its raining"

// * Write an "if/else" statement. If isRaining is true, the string 'Bring a raincoat!' should be logged to the console, otherwise it should log 'good to go!'

if(isRaining){
  console.log('Bring a raincoat!')
}
else{
  console.log('good to go!')
}



// * Check your statement by changing "isRaining" to be false and re run the code to see the new output


// * Declare a const "temp" and assign it to the number 31

const temp1 = 31


// * Write an if statement that logs the following. If The temp is below 10, log 'Wrap up warm', if it is below 18 log 'just a sweatshirt', below 25 log 'perfect day' and anything above that 'scorching!'

if(temp1 < 10){
  console.log('Wrap up warm')
}else if(temp1 < 18){
  console.log('just a sweatshirt')
}
else if(temp1 < 25){
  console.log('perfect day')
}
else{
  console.log('scorching!')
}


// * Check your statement by changing temp to different number values, and re run the code the code to see the new output

// ------ CONDITIONAL OPERATORS ------

// * Comment back in the "const" declarations that have been commented out below

const milkAdded = true
const waterTemp = 100
const brewed = true

// * Write if statements to deal with following conditions:

// * If waterTemp is below 90, log 'Boil the kettle'

if (waterTemp < 90){
  console.log('Boil the kettle')
}

// * If waterTemp is above 90, but brewed is not true, log 'Still brewing' 

if (waterTemp > 90 && !brewed){
  console.log('Still brewing' )
}

// * If waterTemp is above 90 and brewed is true, but milkAdded is false, log 'Needs milk!'

if (waterTemp > 90 && brewed && !milkAdded){
  console.log('Needs milk!')
}

// * If waterTemp is above 90 and brewed is true and milkAdded is true, log 'Tea is ready!'

if (waterTemp > 90 && brewed && milkAdded){
  console.log('Tea is ready!')
}

// ----- ARRAYS -----

// * Define a "const" students that is an array. Add the name of four of your classmates as strings.

const students = ['Ni', 'Lorenzo', 'Barns', 'Elliot']

// * Access the first name in the array and log it to the console.

console.log(students[0])

// * Access the third name in the array and log it to the console.

console.log(students[2])

// * Reassign the last item in the array to be a different name and log it

students[students.length - 1] = 'Jack'
console.log(students[students.length - 1])

// * Define an array called "foods", add a few strings of different food items, and log the array to the console

const foods = ["Pasta", "Pizza", "Burger", "Hotdog"]


// * Using an array method, add another food item to the end of the array, and log it again

foods.push("Fish")

// * Use another array method to remove the first item of the array

foods.shift()

// * Define a const "joined". Assign its value to the foods array to a string of all the array items joined together

const joined = foods.join(' ')
console.log(joined)

// * Define an array "students" and add some strings of names. Write a for loop that will log each item from the array in order

for( let i = 0; i < students.length; i++){
  console.log(students[i])
}

// * Write a forEach loop that console logs each students name in order
students.forEach((student) => {
  console.log(student)
})

// * Write a forEach loop that console logs each students name, but with the letters of each name reversed
students.forEach((student) => {
  console.log(student.split("").reverse().join(""))
})