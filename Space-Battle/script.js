
class Ship {
  constructor(name, hull, firepower, accuracy, alive) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
    this.alive = true
  }
  attack(target) {
    let chance = Math.random()
    if (chance <= this.accuracy) {
      target.hull -= this.firepower
      window.alert(`
      ${this.name} has dealt ${this.firepower} to ${target.name}
      ${target.name} hull: ${target.hull}
      `)
    }
    else {
      window.alert(`
      ${this.name} has missed ${target.name}
      ${target.name} Hull: ${target.hull}`)
    }
  
  }
}

class Alienship extends Ship{
  constructor(name){
    super(name)
    this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3
    this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2
    this.accuracy = Math.random() *.2 + 0.6
  }
}

class Spaceship extends Ship {
  constructor(name){
    super(name)
    this.hull = 20
    this.firepower = 5
    this.accuracy = 0.3
  }
}

const game = {
  player: null,
  opponent: [],
  turn: 1,
  numOfAliens: 0,
  start() {
    this.player = new Spaceship('USS Schwarzenegger')
    this.numOfAliens = Math.floor(Math.random() * 6) + 1
    for (let i = 0; i < this.numOfAliens; i++ ){
      let alien = new Alienship(`Alien ${i+1}`)
      this.opponent.push(alien)
    }
    this.nextTurn()
  },

  nextTurn() {
    if (!this.checkWin()) {
      if (this.turn % 2 === 1) {
        // we can pick which alien ship to attack
        let alienStatusList = ''
        for (i=0; i < this.opponent.length; i++) {
          alienStatusList += `Alien ${i+1}: ${this.opponent[i].alive ? this.opponent[i].hull : 'Dead'}\n`
        }
        let alienIndex = parseInt(window.prompt(`
        Hull: ${game.player.hull}
        Alien status: \n${alienStatusList}
        Which alien ship would you like to attack? Pick between Alien 1 and ${this.numOfAliens}.`))
        this.player.attack(this.opponent[alienIndex-1])
      } 
      else {
        // for all aliens 1 and max amount of aliens attack
        for (i=0; i < this.opponent.length; i++) {
          if (this.opponent[i].alive) {
            this.opponent[i].attack(this.player)
          }
        }
        
      }     
    this.turn ++
    this.nextTurn()  
    } else {
      game.finished()
    }
  },
  
  checkWin() {
    if (this.player.hull <= 0){
      window.alert(`The ${this.player.name} went kabloo-ey.`)
  
      return true
    } 
    let deadCount = 0
    for (let i = 0; i < this.opponent.length; i++ ){
      if (this.opponent[i].hull <= 0 && this.opponent[i].alive) {
        window.alert(`The ${this.opponent[i].name} went kabloo-ey.`)
        this.opponent[i].alive = false
        
      }
      if (!this.opponent[i].alive) deadCount ++
    } 
    if (deadCount === this.numOfAliens) return true
    return false
  },
  finished() {
    window.alert(`The Game ended.`)
  }
}

game.start()
