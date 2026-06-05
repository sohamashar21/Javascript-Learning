function addition (){
   let a = 10;
   let b = 20;
   console.log(a+b);  
}

// addition()

 
// function subtraction(num1,num2){
//   console.log(num1 + num2);
// }
 
function subtraction(num1,num2){
//  let result = num1 + num2
//  return result;
  return num1 + num2; 
}

let result = subtraction(10,5)
// console.log("result:",result);


function loginUserMessage(username){
  if(!username){
   console.log("Enter a username");
   return
  }
  return `${username} just logged in` 
}

 console.log(loginUserMessage("Soham"))
 console.log(loginUserMessage("SOham123"))

//rest operator ... (Takes all things and put them in one bag)
function calculateCartPrice(val1,val2,...num1){
  return num1;
}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
  username : "Soham",
  price : 200000
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  
}

// handleObject(user)
handleObject({
  username:"Soham",
  price:9999
})

const myNewArr = [200,300,400]

function handleArray(anyArray){
  return anyArray[2]
 
}

// console.log(handleArray(myNewArr));
