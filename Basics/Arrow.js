const user = {
   username : "Soham",
   age : 19,

   welcomeMessage: function(){
      console.log(`username is ${this.username} and age is ${this.age}`);
      console.log(this);
      
    }
   }



//  user.welcomeMessage()
//  user.username = "Yash"
//  user.welcomeMessage()

//{}
// console.log(this);


//Undefined in a variable used by this keyword to refer the variable 
// function chai(){
//   const name = "Chai"
//   console.log(`This is a ${this.name}`);
// }
// chai()

//can store a function in a variable 
// const chai = function (){
//   const username = "Soham"
//   console.log(this.username);
  
// }
// chai()

// const chai = () => {
//   const username = "Soham"
//   console.log(this.username);
  
// }
// chai()

// const addTwo = (num1,num2) => {
//   return num1 + num2
// }
// console.log(addTwo(2,2))


// Implicit return
// const addTwo = (num1,num2) =>  num1+num2 
// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Soham"}) 

console.log(addTwo(3,5));
