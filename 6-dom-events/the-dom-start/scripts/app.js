// ! 🚨 HOOK IT ALL UP


// *  ------- ACCESSING A DOM ELEMENT --------
const headingElement = document.getElementById('target-element')
console.log(headingElement)
const headingElementAlt = document.querySelector('#target-element')
console.log(headingElementAlt)



// *  -------- UPDATE/CHANGE DOM ELEMENT --------
headingElement.innerText = 'We changed the text!'
headingElement.innerHTML = '<p>We changed the text!</p>'
//change element using CSS
headingElement.style.color = 'red'
headingElement.style.borderTop = '2px solid purple'

headingElement.classList.add('my-class')
console.log(headingElement.classlist)

// *  -------- CREATING NEW ELEMENT ---------

const newElement = document.createElement('h2')
console.log('new element', newElement )

const targetContainer = document.querySelector('#target-container')

targetContainer.appendChild(newElement)
newElement.innerText = 'I am a new element'

// *  -------- ACCESSING MULTIPLE ELEMENTS --------

//querySelectorALL when grabing multiple elements
const multipleElements = document.querySelectorAll('.multi-element')
console.log(multipleElements)


// * -------- CHANGE/UPDATE MULTIPLE ELEMENTS AT ONCE --------

multipleElements.forEach((element) =>{
  element.style.backgroundColor = 'green'
  element.innerText = 'Switch!'
})

// Store the element inside a const called "body".

const body = document.querySelector('body')
console.log(body)

// Create and store it in a const called "heading".

const newElementBody = document.createElement('heading')
console.log('new element', newElementBody )

// Using innerHTML add "I am a heading" inside the tag

newElementBody.innerText = 'I am a heading'

// Append the heading to the body of the HTML.

body.appendChild(newElementBody)

// Make it grey
// Give it a border of 2px solid green
// Give it 20px of padding

newElementBody.style.color = 'grey'
newElementBody.style.border = '2px solid green'
newElementBody.style.padding = '20px'

// Use JavaScript to find the height of the (including the padding and border) and then console log it. (You should get 81).

const height = newElementBody.offsetHeight

console.log(height)

// Create and store it in a const called box
const box = document.createElement('div')

// Add the string "I am a div" inside the box
box.innerText = "I am a div"

// Append the div to the body of the HTML
body.appendChild(box)

// Give the div a class of "box"
box.className = 'box'

// Give the div an id of "single"
box.id = 'single'

// Give the div a data attribute of "data-id='1'"
box.setAttribute("data-id", 1)
