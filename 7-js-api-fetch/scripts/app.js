function init() {
  const donutList = document.querySelector('#donuts')
  const donutForm = document.querySelector('#new-donut')
  let donuts = []

  async function getDonuts() {
    displayLoading()
    try {
      const response = await fetch('https://ga-doughnuts.herokuapp.com/donuts')
      donuts = await response.json()
      displayDonuts()
    } catch (err) {
      console.log(err)
      displayError('Something went wrong getting the donuts!')
    }
  }

  function displayDonuts() {
    const donutHtml = donuts.map(donut => {
      return `<li>${donut.flavor} - ${donut.style}</li>`
    })
    donutList.innerHTML = donutHtml.join('')
  }

  function handleNewDonut(event) {
    event.preventDefault()
    const newDonut = {
      flavor: donutForm.querySelector('#flavor').value ,
      style: donutForm.querySelector('#style').value
    }
    donuts = [newDonut, ...donuts]
    displayDonuts()

  }

  function displayLoading() {
    donutList.innerHTML = '<li>Donut shop is loading...</li>'
  }

  function displayError(message) {
    donutList.innerHTML = `<li>${message}</li>`
  }




  getDonuts()

  donutForm.addEventListener('submit', handleNewDonut)
}

window.addEventListener('DOMContentLoaded', init) 
