// printGreeting
//Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

function printGreeting(name){
  return `Hello there, ${name}!`
}

console.log(printGreeting("Slimer"))

//reverseWordOrder
//Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

function reverseWordOrder(str){
  const words = str.split(' ')
  let reverseString = ''
  for(let i = words.length-1; i > -1; i--){
    reverseString += words[i] + ' '
  }
  return reverseString
}

console.log(reverseWordOrder("Ishmael me Call"))
console.log(reverseWordOrder("I use Lâncome on my comb"))

//calculate
//Write a function called calculate. This function should take three arguments, two numbers and a string.
//Name the parameters num1, num2, and operation.

//If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.

//If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.

//Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).

function calculate(num1, num2, operation){
  switch(operation) {
  case 'add':
    return num1 + num2
  case 'sub':
    return num1 - num2
  case 'mult':
    return num1 * num2
  case 'div':
    return num1 / num2
  case 'exp':
    return num1 ** num2
  default:
    return null
  }
}

console.log(calculate(4, 3, "sub"))
console.log(calculate(4, 3, "exp"))

//printConsecutives
//Write a function printConsecutives that can take an array of any length, and print groups of three numbers where three consecutive numbers increase by 1.

function printConsecutives(array){

  for(let i = 0; i < array.length - 2; i++){

    if(array[i]+1 === array[i+1] && array[i+1]+1 === array[i+2]){
      console.log(array[i],array[i+1],array[i+2])
    }
  }
}

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9])
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3])

//letterReverse
//Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation.

function reverseString(string){
  let stringRev = ''
  for(let i = string.length-1; i>-1; i--){
    stringRev = stringRev + string[i]
  }
  return stringRev
}

function letterReverse(string){
  const words = string.split(' ')
  let returnString = ''
  for(let i = 0; i < words.length; i++){
    returnString += reverseString(words[i]) + ' '
  }
  return returnString
}

console.log(letterReverse("Luke I am your father"))
console.log(letterReverse("Aren't you a little short for a storm trooper"))

