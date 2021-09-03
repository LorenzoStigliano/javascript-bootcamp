// Calculate the Cube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (number) => Math.pow(number,3)
console.log(calculateCube(5))

//Is a Vowel?
//Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = (char) => ['a','e','i','o','u'].includes(char)
console.log(isAVowel("a"))

//Get Two Lengths
//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (a, b) => [a.length, b.length]
console.log(getTwoLengths("Hank", "Hippopopalous"))

//Get Multiple Lengths
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths (arrayString){
  let returnArray = []
  arrayString.forEach((string) => {
    returnArray.push(string.length)
  })
  return returnArray
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

//Maximum of Three Numbers
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = function (x, y, z){
  return Math.max(x, y, z)
}
console.log(maxOfThree(3, 5, 9))

//Print Longest Word
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord (arrayString){
  let longestWord = ''
  let lengthWord = 0
  arrayString.forEach((string)=>{
    if(string.length > lengthWord){
      longestWord = string
      lengthWord = string.length
    }
  })
  return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))

//Transmogrify the Numbers
//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

function transmogrify(a, b, c){
  return Math.pow((a*b),c)
}
console.log(transmogrify(5, 3, 2))


// A Needle in the Haystack - Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but contains one "needle". After your function finds the needle it should return a message (as a string) that says: "found the needle at postition" plus the index it found the needle so:

//find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

//Should return:

//"found the needle at position 5"

function findNeedle(arrayJunk){
  for(let i = 0; i < arrayJunk.length; i++){
    if(arrayJunk[i] === 'needle'){
      return `found the needle at position ${i}`
    }
  }
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

//Sum the Positive
//Given an array, return the sum of only the positive numbers

function sumPositive (arrayNum){
  let count = 0 
  arrayNum.forEach((num)=>{
    if (num >= 0){
      count += num
    }
  })
  return count
}
console.log(sumPositive([1, -4, 7, 12]))