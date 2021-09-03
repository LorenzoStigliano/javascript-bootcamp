// * Remember to "go live" below or "open in default browser".

function init() {

  // * ----------------------- CLICK EVENTS -----------------------
  const button = document.querySelector('#button')
  const span = document.querySelector('#button-color-span')

  function handleClick(event) {
    event.target.classList.toggle('button-blue')
    span.innerText = span.innerText === 'red' ? 'blue' : 'red'
  }

  button.addEventListener('click', handleClick)


  // * --------------------- HOVER EVENTS --------------------------
  const hoverImage = document.querySelector('#hover-img')

  function handleMouseEnter(event) {
    event.target.src = 'https://www.placecage.com/c/200/200'
  }

  function handleMouseLeave(event) {
    event.target.src = 'http://www.fillmurray.com/200/200'
  }


  hoverImage.addEventListener('mouseenter', handleMouseEnter)
  hoverImage.addEventListener('mouseleave', handleMouseLeave)




  // * --------------------- SUBMIT EVENTS --------------------------
  const form = document.querySelector('#form')

  function handleSubmit(event) {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value

    console.log(username)
    console.log(email)
  }

  form.addEventListener('submit', handleSubmit)


  // * --------------------- CHANGE EVENTS --------------------------

  const select = document.querySelector('#select')
  const selectSpan = document.querySelector('#selected')

  function handleSelect(event) {
    selectSpan.innerText = event.target.value
  }

  select.addEventListener('change', handleSelect)


  // * --------------------- MULTIPLE ELEMENTS --------------------------
  const animalButtons = document.querySelectorAll('.animal-btn')
  const speakSpan = document.querySelector('#speak')

  function handleAnimalButtons(event) {
    speakSpan.innerText = event.target.value
  }

  animalButtons.forEach(button => {
    button.addEventListener('click', handleAnimalButtons)
  })



  // KEY EVENTS

  function handleKeys(event) {
    console.log(event.keyCode)
  }

  document.addEventListener('keyup', handleKeys)


}

window.addEventListener('DOMContentLoaded', init)
