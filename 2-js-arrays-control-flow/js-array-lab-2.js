// 1. How do we assign a value to a variable?
// Which line(s) is/are valid?

let a_1 = 0;
const b_1 = 1;

// How do we change the value of a variable?
a_1 = 2;
// How do we assign an existing variable to a new variable?
a_1 = b_1;
console.log(a_1)

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

console.log(Math.floor(a))
console.log(Math.ceil(b))
console.log(Math.abs(b-a))
console.log(Math.max(a, b, c, d, e))
console.log(Math.min(a, b, c, d, e))
console.log(Math.sqrt(e))
console.log(Math.pow(e, d))


for(let i = 0; i < 10; i++){
  let digitalDie = Math.ceil(Math.random()*6)
  console.log(digitalDie)
}

//1. Create a variable called firstVariable.
let firstVariable
//2. assign it the value of a string: "Hello World"
firstVariable = 'Hello World'
//3. On the next line, change the value of this variable to a number.
firstVariable = 5
//4. store the value of firstVariable into a new variable called secondVariable
let secondVariable = firstVariable
//5. On the next line, change the value of secondVariable to a string.
secondVariable = secondVariable.toString()
//6. What is the value of firstVariable?
console.log(firstVariable)

const a_3 = 6;
const b_3 = 100;
const c_3 = -5;
const d_3 = 3000;
const e_3 = 'Jelly Bean';

console.log(Boolean(a_3 + b_3))
console.log(Boolean(c_3 + d_3))
console.log(Boolean('Peanut' + 'Peanut'))
console.log(Boolean(a_3 + b_3 + c_3))
console.log(Boolean(a_3 + a_3 + d_3))
console.log(Boolean(e + 'Jelly Bean'))
console.log(Boolean(48 + '48'))
console.log(Boolean('e' + 'Eh'))

let bank_account = 0
for(i = 0; i < 11; i++){
  bank_account += i
}
console.log(bank_account)

let bank_accountDouble = 0
for(let i = 0; i < 101; i++){
  bank_accountDouble += i*2
}
console.log(bank_accountDouble)


let fib = 0
let fib_1 = 1
let sumEven = 0
for(let i = 0; i < 100; i++){
  let fib_2 = fib_1 + fib
  fib = fib_1
  fib_1 = fib_2
  if(fib_1 % 2 === 0){
    sumEven+=fib_1
  }
}
console.log(sumEven)

// Checkerboard

const boardSize = 8;

let board = '';
let currentChar = '#';
let firstChar = ' ';

for(let i = 0; i < boardSize/2; i++){
  
  let line = firstChar

  for(let j = 0; j < boardSize-1; j++){

    line += currentChar
    firstChar = currentChar

    if(currentChar === ' '){
      currentChar = '#'
    }
    else{
      currentChar = ' '  
    }
  }

  board += line + '\n'

}
console.log(board)