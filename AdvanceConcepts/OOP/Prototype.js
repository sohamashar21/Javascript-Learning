// let myName = "Soham          "
// let myChannel = "Soham..........."

// console.log(myName.truelength());

let myHeros = ['thor','spiderman']

let heroPower = {
  thor:"thunder",
  spiderman:"Spider",

  getSpiderPower: function(){
     console.log(`Spidy power is: ${this.spiderman}`);     
  }
}

Object.prototype.soham = function(){
  console.log(`Soham is present in all objects`)
}

Array.prototype.heySoham = function(){
  console.log(`Soham says hello`)
}

// // heroPower.soham();
// myHeros.soham()
// myHeros.heySoham()
// heroPower.heySoham()


// Inheritance - prototype inheritance

// Old Approach
const user = {
  name:"chai",
  email:"chai@google.com"
}
const Teacher = {
  makeVideo : true
}

const teachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'Js Assignments',
  fullTime: true,
  ___proto___: teachingSupport
}

Teacher.___proto___ = user

// Modern Syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUserName = 'soham          '

String.prototype.trueLength = function(){
   console.log(`${this}`)
    console.log(`This length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"soham  ".trueLength()
"iceTea   ".trueLength()