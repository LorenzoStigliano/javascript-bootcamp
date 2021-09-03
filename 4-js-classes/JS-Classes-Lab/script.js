class Person {

  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName	= lastName
  }
  sayHello(){
    return `Hello my name is ${this.firstName} ${this.lastName}.`
  }
}

class Employee extends Person{
  constructor(firstName, lastName, company, wage){
    super(firstName, lastName)
    this.company = company
    this.wage = wage
    this.active = true
  }

  receiveRaise(raise){
    this.wage += raise
  }

  terminate(){
    this.active = false
  }
}

class Manager extends Employee{
  constructor(firstName, lastName, company, wage, department){
    super(firstName, lastName, company, wage)
    this.department = department
  }

  giveRaise(employee, raise){
    employee.receiveRaise(raise)
  }
}

class Worker extends Employee{
  constructor(firstName, lastName, company, wage, manager){
    super(firstName, lastName, company, wage)
    this.manager = manager
  }

  haveLunch(){
    console.log(`The employee is having lunch!`)
  }
}

// testing functions 

const person = new Person('Lorenzo', 'Stigliano')
console.log(person.sayHello())

const employee = new Employee('Lorenzo', 'Stigliano', 'Barclays', 5)
employee.receiveRaise(5)
console.log(employee.wage)

const manager = new Manager('Stig', 'Jackson', 'Barclays', 14, 'Computing')
manager.giveRaise(employee, 10)
console.log(employee.wage)

const worker = new Worker('The', 'Dude', 'Barclays', 12, manager)
