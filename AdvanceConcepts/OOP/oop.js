const user = {
  username: "Soham",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database")
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function(){
    console.log(`Welcome: ${this.username}`)
  }
  return this;
}

// When you use new keyword it creates an empty object which is called instance 

const userOne = new User("Soham", 2, true);
const userTwo = new User("Chai", 22, false);
console.log(userOne.constructor);
console.log(userTwo);
// Step 1 : Instance create
// Step 2 : Constructor function called by using new
// Step 3 : this keyword got injected
// Step 4 : You get the output/injected in your function 



// Checks if the instance is of that current context
console.log(userOne instanceof User)