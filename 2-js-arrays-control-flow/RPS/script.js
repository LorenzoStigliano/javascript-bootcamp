let playerCondition = true

while (playerCondition){
  
  const output = ['Rock', 'Paper', 'Scissors']

  let botOutput = output[Math.floor(Math.random() * output.length)]

  const userInput = window.prompt('Choose Rock, Paper or Scissors.')

  window.alert(`Bot played: ${botOutput}.`)

  if (botOutput === userInput){
    window.alert('Draw.')
  }
  else if (botOutput === 'Rock'){
    if (userInput === 'Paper'){
      window.alert('Player wins.')
    }
    if (userInput === 'Scissors'){
      window.alert('Bot wins.')
    }
  }
  else if (botOutput === 'Paper'){
    if (userInput === 'Rock'){
      window.alert('Bot wins.')
    }
    if (userInput === 'Scissors'){
      window.alert('Player wins.')
    }
  }
  else{
    if (userInput === 'Rock'){
      window.alert('Player wins.')
    }
    if (userInput === 'Paper'){
      window.alert('Bot wins.')
    }
  }
  
  let playerPlays = window.prompt('Want to play again? Yes or No?')
  
  if(playerPlays === 'Yes'){
    playerCondition = true
  }
  else{
    playerCondition = false
  }
}
