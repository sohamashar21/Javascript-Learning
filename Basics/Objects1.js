// Singleton

//Object Literals

const mySym = Symbol("Key1");

const jsUser = {
  name: "Soham",
  "Surname":"Ashar",
  [mySym]:"my symbol",
  age: 19,
  location: "Gujarat",
  email: "sohamashar@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["Surname"]);
console.log(jsUser[mySym]);


jsUser.email = "soham@gemini.com"
// Object.freeze(jsUser);
jsUser.email = "soham@chatgpt.com"
console.log(jsUser);

jsUser.greetings = function(){
  console.log("Greetings Y'all 67");
}
jsUser.greetings2 = function(){
  console.log(`Greetings Y'all 67,${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());
