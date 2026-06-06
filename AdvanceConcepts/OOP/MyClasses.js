// // ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("Soham", "soham@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`;
}

User.prototype.changeUserName = function(){
   return `${this.username.toUpperCase()}`;
}

const soham = new User("Soham","soham@123","123")
console.log(soham.encryptPassword())
console.log(soham.changeUserName())