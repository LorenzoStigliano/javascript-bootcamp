
const game = {
 	'1': {
 		name: '',
    marker: 'X',
    score: 0
 	},
 	'-1': {
 		name: '',
    marker: 'O',
    score: 0
 	},
  board : {
    '1' : 0,
    '2' : 0,
    '3' : 0,
    '4' : 0,
    '5' : 0,
    '6' : 0,
    '7' : 0,
    '8' : 0,
    '9' : 0
  },
  game_status: 1,
  checkWin(){
    if(this.board['1']+this.board['2']+this.board['3'] === 3 || this.board['1']+this.board['2']+this.board['3'] === -3){
      return true
    }
    if(this.board['4']+this.board['5']+this.board['6'] === 3 || this.board['4']+this.board['5']+this.board['6'] === -3){
      return true
    }
    if(this.board['7']+this.board['8']+this.board['9'] === 3 || this.board['7']+this.board['8']+this.board['9'] === -3){
      return true
    }
    if(this.board['1']+this.board['4']+this.board['7'] === 3 || this.board['1']+this.board['4']+this.board['7'] === -3){
      return true
    }
    if(this.board['2']+this.board['5']+this.board['8'] === 3 || this.board['2']+this.board['5']+this.board['8'] === -3){
      return true
    }
    if(this.board['3']+this.board['6']+this.board['9'] === 3 || this.board['3']+this.board['6']+this.board['9'] === -3){
      return true
    }
    if(this.board['1']+this.board['5']+this.board['9'] === 3 || this.board['1']+this.board['5']+this.board['9'] === -3){
      return true
    }
    if(this.board['3']+this.board['5']+this.board['7'] === 3 || this.board['3']+this.board['5']+this.board['7'] === -3){
      return true
    }
  },
  checkDraw(){
    const valueBoard = Object.values(this.board)
    const filteredBoard = valueBoard.filter(val => {
      return val === 0
    })
    return filteredBoard.length === 0

    }
  }


function init() {

  const boardElements = document.querySelectorAll('.board-group')
  const restButton = document.querySelector('#rest-button')
  const span = document.querySelector('#selected')
  const spanScoreX = document.querySelector('#selected-playerX')
  const spanScoreY = document.querySelector('#selected-playerO')

  spanScoreX.innerText = game['1'].score
  spanScoreY.innerText = game['-1'].score

  function addElement(event) {

    const value = event.target.innerHTML
    const cellId = event.target.id

    if(value === '' && !game.checkDraw() && !game.checkWin()){
      const marker = game[game.game_status.toString()].marker
      event.target.innerHTML = marker

      game['board'][cellId.toString()] = game.game_status

      if(game.checkWin()){
        span.innerText = ` ${marker} won the game.`
        game[game.game_status.toString()].score += 1
      } else if(game.checkDraw()){
        span.innerText = ` The game is a draw.`
      }
      game.game_status = -game.game_status
    }
  }

  function handleRest(){
    const boardSections = document.querySelectorAll('.board-section')
    boardSections.forEach(element => {
      element.innerText = ''
    })
    game.board = {
      '1' : 0,
      '2' : 0,
      '3' : 0,
      '4' : 0,
      '5' : 0,
      '6' : 0,
      '7' : 0,
      '8' : 0,
      '9' : 0
    }
    span.innerText = ''
    spanScoreX.innerText = game['1'].score
    spanScoreY.innerText = game['-1'].score
  }

  boardElements.forEach(element => {
    element.addEventListener('click', addElement)
  })

  restButton.addEventListener('click', handleRest)
}

window.addEventListener('DOMContentLoaded', init)
