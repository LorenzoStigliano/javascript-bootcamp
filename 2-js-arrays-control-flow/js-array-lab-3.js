const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

kristynsCloset.splice(0, 1)
console.log(kristynsCloset)

// 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(5, 0, "raybans")
console.log(kristynsCloset)

// 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset[4] = "stained knit hat"
console.log(kristynsCloset)

// 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

console.log(thomsCloset[0][0])

//6. In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1][0])

// 7. Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])

// 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]} today!`)

// 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = 'footie pajamas'
console.log(thomsCloset)

// Write a loop that prints the numbers in order

const twoDArray = [
  [9,8,7],
  [6,5,4],
  [3,2,1],
];

let emptyArray = []
for(i = 0; i < twoDArray.length; i++){
  emptyArray = emptyArray.concat(twoDArray[i])
}
emptyArray.sort()
for(i = 0; i < emptyArray.length; i++){
  console.log(emptyArray[i])
}