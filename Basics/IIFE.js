// Immediately Invoked Function Expression (IIFE)
( chai = () =>{
   const username = "SOham"
  console.log(`The username is ${username}`);
  
})();

//Unnamed IFFE with parameters
(() => {
   const username = "Soham"
   console.log(`User name is ${username}`);
   
})();