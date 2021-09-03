// ** 📚 LESSON TO DO 📚 **
// Filter
// Map
// Reduce

// Filter
const animals = ['cat', 'dog', 'monkey', 'ladybird']

const filteredAnimals = animals.filter(animal => {
  return animal === 'cat' || animal[0] === 'm'
})

console.log(filteredAnimals)
console.log(animals)

// Map
const numbers = [1, 2, 3, 4, 5]

const multipledNumbers = numbers.map(num => {
  return num*2
})

console.log(multipledNumbers)

const upperCaseAnimals = animals.map(animal => {
  return animal.toUpperCase()
})

console.log(upperCaseAnimals)

// Reduce
// acc is special for reduce, the 0 is the starting value
const sumOfNums = numbers.reduce((acc, number)=>{
  console.log('ACC', acc)
  console.log('number', number)
  return acc + number
}, 0)

console.log(sumOfNums)

const numbersTwo = [1, 2, 12, 42, 6500, 145, 4434343, 245, 1,  53, 8509]

const sortedNumber = numbersTwo.reduce((acc, number) =>{
  if (number % 2 === 0){
    acc.even.push(number)
  } else {
    acc.odd.push(number)
  }
  return acc
}, {
  odd:[],
  even:[]
}, 0)

console.log(sortedNumber)

const countries = [['spain', 'spanish'], ['england', 'english'], ['germany', 'german']]

// array destructuring a list of list 
const languageDictionary = countries.reduce((acc, [country, language]) =>{
  acc[country] = language
  return acc
},{},0)

console.log(languageDictionary)

const flattendArray = countries.reduce((acc, array) => {
  return [ ...acc, ...array]
}, [])

console.log(flattendArray)

// ** LAB **


// EXERCISE 1
// Uncomment the following array
// const fruits = ['apple', 'pear', 'strawberry', 'kiwi', 'passion fruit', 'mango']

// Define a const "smallFruits" and assign it value of the fruits array, filtered to only contain fruits with 4 charaters or less
// Log the "smallFruits" array and expect to see -> ['pear', 'kiwi']

// Define a const "bigFruits" and assign it value of the fruits array, filtered to only contain fruits with more than 6 characters
// Log the "bigFruits" array and expect to see -> ['stawberry', 'passion fruit']

// Define a const "mediumFruits" and assign it value of the fruits array, filtered to only contain fruits with more than 4 characters but less than or equal to 6 characters
// Log the "mediumFruits" array and expect to see -> ['apple', 'mango']



// EXERCISE 2
// Uncomment the following array
// const cities = ['London', 'New York', 'Paris', 'Tokyo', 'Los Angeles']

// Define a const "cityLengths" and assign it the value of the cities array, mapped into an array indicating the length of each city string

// Log the "cityLengths" array and expect to see -> [6, 8, 5, 5, 11]

// Define a const "cityShouts" and and assign it the value of the cities array, mapped into an array where all the strings have been transformed to uppercase with a '!' on the end
// Log the "cityShouts" array and expect to see ->  'LONDON!', 'NEW YORK!', 'PARIS!', 'TOKYO!', 'LOS ANGELES!' ]
// Log the original "cities array. What has happened to it?



// EXERCISE 3
// using "map" write a function that returns the string 'even' for all even numbers in an array, and 'odd' for odd numbers.
// Eg. [1, 2, 3, 4, 5, 6, 7, 8] -> ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']



// EXERCISE 4
// Uncomment the following array
// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Define a const "total", assign its value to be the result of calling "reduce" on the numArray, returning the total sum of all numbers in the array.
// Log out "total" should return -> 55



// EXERCISE 5
// Using a selection of your favourite array methods, write a function that capitalises the first letter of each word in a string
// eg: titleCase('The lord of the rings') => 'The Lord Of The Rings'



// EXERCISE 6
// const products = [
//   { name: 'hat', category: 'clothes', price: 100 },
//   { name: 'toothbrush', category: 'bathroom', price: 56 },
//   { name: 'eggs', category: 'food', price: 20 },
//   { name: 'cabbage', category: 'food', price: 20 },
//   { name: 'soap', category: 'bathroom', price: 33 },
//   { name: 'socks', category: 'clothes', price: 88 },
//   { name: 't-shirt', category: 'clothes', price: 72 },
// ]

// Uncomment the above array
// Find the total price of all the clothes (incl. 20% VAT)
// first use just for loops
// next use array methods




// EXERCISE 7

// const myTransactions = [ 
//   { type: 'charge', amount: 300, category: 'Dining' },
//   { type: 'charge', amount: 230, category: 'Shopping' },
//   { type: 'withdraw', amount: 1000, category: 'ATM Cash' },
//   { type: 'depost', amount: 5000, category: 'Check' },
//   { type: 'charge', amount: 100, category: 'Dining' },
//   { type: 'charge', amount: 900, category: 'Shopping' },
//   { type: 'charge', amount: 300, category: 'Dining' },
// ]

// Uncomment the above array
// Use array methods to find the total amount of money charged for Dining


