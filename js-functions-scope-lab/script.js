// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (x, y, z){
  return Math.max(x, y, z)
}
console.log(maxOfThree(3, 5, 9))

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character){
  return character === 'a' || character === 'e' ||character === 'i' ||character === 'o' ||character === 'u'
}
console.log(isCharAVowel('i'))
console.log(isCharAVowel('z'))

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function (arrayNums){
  let sum = 0
  arrayNums.forEach((num)=>{
    sum += num
  })
  return sum
}
console.log(sumArray([2, 4, 5]))

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(arrayNums){
  let mult = arrayNums[0]
  for(let i = 1; i < arrayNums.length; i++){
    mult = mult*arrayNums[i]
  }
  return mult
}
console.log(multiplyArray([2, 4, 5, 10]))

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function (...rest){
  return rest.length
}

console.log(numArgs(1,2,3,4,5))

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(string){
  let stringRev = ''
  for(let i = string.length-1; i>-1; i--){
    stringRev = stringRev + string[i]
  }
  return stringRev
}

console.log(reverseString('rockstar'))

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(arrayStrings){
  let longest = 0
  let longestString = ''
  arrayStrings.forEach((string)=>{
    if (string.length > longest){
      longestString = string
      longest = string.length
    }
  })
  return longestString
}

console.log(longestStringInArray(['rockstar','eidje','dddddddddddd','abc']))

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arrayStrings){
  let arrayReturn = []
  let numberStrings = arrayStrings.length

  arrayStrings.forEach((string)=>{
    if (string.length > numberStrings){
      arrayReturn.push(string)
    }
  })
  return arrayReturn
}

console.log(stringsLongerThan(['rockstar','eidje','dddddddddddd','abc']))