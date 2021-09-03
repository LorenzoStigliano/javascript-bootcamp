// * Read the instructions inside the readme file carefully

// * Remember to "go live" below. The browser will automatically reload when you save your code.

function init() {

  // ? Task 1
  const button = document.querySelector('#toggle')
  const circle = document.querySelector('.circle')

  function handleClick(event){
    circle.classList.toggle('pulse')
  }

  button.addEventListener('click',handleClick)

  // ? Task 2

  const select = document.querySelector('#cities')
  const selectSpan = document.querySelector('#city')

  function handleSelect(event) {
    selectSpan.innerText = event.target.value
  }

  select.addEventListener('change', handleSelect)


  //  ? Task 3

  const nameButtons = document.querySelectorAll('.name')
  const nameSpan = document.querySelector('#current')

  function handleNameButtonsEnter(event) {
    nameSpan.innerText = event.target.innerHTML
  }

  function handleNameButtonsLeave(event){
    nameSpan.innerText = ''
  }

  nameButtons.forEach(button => {
    button.addEventListener('mouseenter', handleNameButtonsEnter)
    button.addEventListener('mouseleave', handleNameButtonsLeave)
  })

  // ? Task 4

  const form = document.querySelector('#subscribe')
  const formButton = document.querySelector('.submit')

  function handleSubmit(event) {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value

    formButton.classList.add('submitted')
    formButton.innerText = 'Submitted!'

  }

  form.addEventListener('submit', handleSubmit)




  // ? Task 5





}

window.addEventListener('DOMContentLoaded', init)
