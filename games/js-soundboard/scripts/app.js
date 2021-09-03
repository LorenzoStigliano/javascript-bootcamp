
function init() {

  const daftButtons = document.querySelectorAll('.btn-group')
  const span = document.querySelector('#selected')

  function playAudio(event) {
    const lyric = event.target.innerHTML
    const audio = document.getElementById(lyric)
    const audioFile = event.target.innerHTML.replace(/\s+/g, '_').toLowerCase()
    audio.src = `./sounds/${audioFile}.wav`
    audio.play()
    span.innerText = `${span.innerText} ${lyric.toLowerCase()}`

  }

  daftButtons.forEach(button => {
    button.addEventListener('click', playAudio)
  })
}

window.addEventListener('DOMContentLoaded', init)
