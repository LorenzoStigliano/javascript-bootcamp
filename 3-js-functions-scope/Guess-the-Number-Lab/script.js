const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  prevGuesses: [],
  secretNum: null,
  
  play: function() {

    this.biggestNum  = parseInt(window.prompt('Please set the largest number.'))
    this.smallestNum = parseInt(window.prompt('Please set the smallest number.'))
    
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    let playCondition = true

    while(playCondition){
      
      let guessPlayer = this.getGuess()
      this.prevGuesses.push(guessPlayer)
      
      this.render(guessPlayer, this.secretNum, this.prevGuesses)
      
      playCondition = (guessPlayer !== this.secretNum)

    }
  },
  
  getGuess: function(){

    let guess = window.prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}.`)
  
    while( !(guess > this.smallestNum && guess < this.biggestNum && parseInt(guess)) ){
      guess = window.prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}.`)
    }
    return parseInt(guess)
  },
  
  render: function(guess, secretNum, prevGuesses){
    
    if(guess === secretNum){
      window.alert(`Congrats! You guessed the number in ${prevGuesses.length} guesses!`)
    } else{
      window.alert(`Your guess is too ${guess > secretNum ? 'high' : 'low'} \nPrevious guesses: ${prevGuesses}.`)
    }
  }
}

game.play()
