// ** 📚 LESSON TO DO 📚 **
// Variables
// Strings & string methods
// Numbers & Math object
// Booleans
// Mixing types 

// 1. variables
// var, let, const (use camel case; lorenzoStigliano)

// const
const myName = 'Lorenzo'
// always remains the same cannot be reassigned
// myName = 'Jack' // will not work

// let
let myGreeting = 'Hello'
// can be reassigned
myGreeting = 'World'
console.log(myGreeting)

// alternative declaration
let name
name = 'Lorenzo'
console.log(name)

// 2. data types
// Primative: boolean, null, undefined, strings, symbols, number
// Objects: Array, Object, Function, Regex, Date

// strings
// collection of characters inside quotation marks
// single or double quotes is the same: '__' or "__"
const myString = 'Hello World'
console.log(typeof(myString))
console.log(myString.length) //counts empty spaces
//concatenation
const greeting = 'Hello'
const me = 'Lorenzo'
console.log(greeting + ' ' + me)

//like python formating, literal formatting
console.log(`${greeting}, my name is ${me}`)

// other function to strings
console.log(greeting.toUpperCase())

// 3. numbers
const number1 = 5
const number2 = 12

// arithmetic
console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 / number2)
console.log(number1 * number2)

// remainder (modulo)
console.log(number1 % number2)

// Math object
const number3 = 10
console.log(Math.sqrt(number3))

// rounding 
const number4 = 6.12
console.log(Math.round(number4))
console.log(Math.floor(number4))
console.log(Math.ceil(number4))

//random number between 0 and 1
const randNum = Math.random()
console.log(randNum)

// 4. booleans
// true and false
// falsey values:
// false 
// 0
// ''
// NaN
// null
// undefined

//all other true

//check boolean value
console.log(Boolean(0))

// 5. mixing types
const numberOne = '5.78'
const numberTwo = 5

// adds string and numbers together does not
// throw errors if they do not match 
console.log(numberOne + numberTwo)

//string to number
const stringToNumber = parseInt(numberOne)
console.log(stringToNumber)

const stringToDecimal = parseFloat(numberOne)
console.log(stringToDecimal)

//cannot convert strings with letters in it
const convertUsingNumber = Number(numberOne)
console.log(convertUsingNumber)

// 👩‍💻 🧑‍💻 PRACTICAL EXERCISES 👩‍💻 🧑‍💻 

// --------------VARIABLES--------------

// Declare a const, and use console.log to log its contents

const newConstant = 1
console.log(newConstant)

// Try to reassign the value, and attempt to log it again

// will not work.

// --------------STRINGS--------------

// * Define a string as a const, log that string and its length to the console

const newStringTwo = 'Hi'
console.log(newStringTwo.length)

// * Using the "+" syntax and the string defined above, console.log the string "The word (myString) is (myStringLength) long"

console.log(`My String ${newStringTwo} is ${newStringTwo.length} long.`)

// * Try again using the template literal syntax.

// * Declare the string value 'javascript' as a const all lowercase, using string methods do the following:

const javaString = 'javascript'

// * Log the string to the console all in uppercase -> 'JAVASCRIPT'

console.log(javaString.toUpperCase())

// * Log it title cased -> 'Javascript'

console.log(javaString[0].toUpperCase()+ javaString.slice(1, javaString.length))

// * Bonus, log it like this -> 'JavaScript 😎'

// --------------NUMBERS--------------

// Using the in built Math Object, try the following:

// Log the float 3.3 to the nearest number

const number_1 = 3.3
console.log(Math.round(number_1))

// Log the float 10.8 rounded to 10

const number_2 = 10.8
console.log(Math.floor(number_2))

// Log the float 4.2 round to 5

const number_3 = 4.2
console.log(Math.ceil(number_3))

// Log a random number between 1 and 10

const number_4 = Math.random() * 10 
console.log(Math.ceil(number_4))


// ------------MIXING TYPES------------

// Declare two "consts", "numOne" and "numTwo", set their values to strings of number characters '10' and '5'

const numOne = '10' 
const numTwo = '5'


// Declare a new variable with "let" called result, use the "+" operator to assign it a value and log it so it produces "105"

let result 
result = numOne + numTwo
console.log(result)

// What is the type of result currently? Log it using the built in "typeof()" function

console.log(typeof(result))

// Now re assign result to add the number 45 and log it. --> 150
result = parseInt(result)+45
console.log(result)
// Log result in typeof again, what will it be now?

console.log(typeof(result))