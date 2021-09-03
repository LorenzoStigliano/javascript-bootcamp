// ** 📚 LESSON TO DO 📚 **
// functions -> definition, expression, arrow function
// params and args
// scope
// REST params
// default params
// IIFE

//hoisting -> pulls all functions to the top, stores functions in memory before executing
greeting()

function greeting() {
  console.log('greeting')
}

greeting()

// if function is defined in the following way will NOT be hoisted
//function expression
const welcome = function() {
  console.log('welcome')
}

welcome()

// ALTERNATIVE ways of writing functions
//arrow functions
const sayHello = () => {
  console. log('hello')
}

sayHello()

const sayHello_1 = () => console.log('hello')

sayHello_1()

//args and params
function greeting_1(name) {
  return `Hello, my name is ${name}`
}
console.log(greeting_1('Lorenzo'))

const sayHello_2 = (name) => name
console.log(sayHello_2('Lorenzo'))

const myCondtion = 'hello'
// if condtion is true 'hello world' else 'no greeting found'
const usingATernary = myCondtion ? 'hello world' : 'no greeting found'

// scope

const globalVariable = 'a'

function scopefunction() {
  // can only be used inside the function
  const functionVariable = 'b'
  console.log(globalVariable+functionVariable)
}

scopefunction()

//REST parameters

// do not need to define the type of parameters needed
function getPoints_Rest(...scores){
  console.log(scores)
}

getPoints(12,56,34,54,321,12)

// will be the same without points
function getPoints(scores){
  console.log(scores)
}

getPoints([12,56,34,54,321,12])

function getPoints_Rest_2(first, second, ...scores){
  //first value
  console.log(first)
  //second value
  console.log(second)
  //rest of the values as an array
  console.log(scores)
}

getPoints_Rest_2(12,56,34,54,321,12)

// default parameters
function welcome_default(name){
  // how to take care of undefined if no name parameter is passed:
  name = name ? name : 'world'
  console.log(`Hello ${name}.`)
}
//name => will be 'undefined'
welcome_default()

//imediatley invoked function expression (IIFE) - these are isolated in their own line of code anything witin ;(.....function.....)

;(function(){
  console.log('Hello')
})()

;(() =>
  console.log('with an arrow functio'))()


//========== Mini Challenges #1 ==========//

//=== EXERCISE 1:
// Write a function named computeArea as a function declaration.

// It will have two parameters: width & height.

// It will compute the area of a rectangle (width X height) and return a string in the following form:

// The area of a rectangle with a width of ___ and a height of ___ is ___ square units

function computeArea(width, height){
  let area = width * height
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

console.log(computeArea(1, 3))

//=== EXERCISE 2:
// Write a function named planetHasWater as a function expression.

// It will have one parameter: planet.

// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.

// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

const planetHasWater = (planet) => {
  return planet.toLowerCase() === 'earth' ||planet.toLowerCase() === 'mars'
}

const planetHasWater2 = (planet) => planet === 'mars' || planet === 'earth' ? true : false

console.log( planetHasWater('Earth') ) // true
console.log( planetHasWater('Venus') ) // false
// // Test the bonus...
console.log( planetHasWater('mArS') ) // true

