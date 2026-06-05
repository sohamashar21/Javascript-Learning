function multiplication(num1, num2) {
  return num1 * num2;
}

console.log(multiplication(5, 5));
console.log(multiplication.power);
console.log(multiplication.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;

}

createUser.prototype.increment = function (){
  this.score++ 
}

createUser.prototype.printMe = function(){
  console.log(`Price is: ${this.score}`)
}

const chai = new createUser("Chai",25)
const tea = new createUser("Tea",250)

chai.printMe()