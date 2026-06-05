// Control / logic flow

const tempreture = 41

//if - else 
// if(tempreture<=50) {
//   console.log("Happy Sun-day");
// }else{
// console.log("Tempreture is greater than 50 dont go out");
// }

// comparison >,<,>=,<=,==,===,!=,!==


// const score = 200

// if(score>=100){
//   const power = "Fly"
//   console.log(`User power ${power}`)
// }
// console.log( `User power ${power}` )


// const balance = 1000

// if(balance<500){
//   console.log("less than")
// }else if(balance<750){
//   console.log("Less than 750");
// }else if(balance<900){
//   console.log("less than 900");
// }else{
//   console.log("less than 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

// Logical  and(&&)  or(||)
if(isUserLoggedIn && debitCard && isLoggedInFromGoogle && 2==3){
  console.log("Allowed to purchase")
}

if(isLoggedInFromEmail || isLoggedInFromGoogle){
  console.log("Welcome , user logged in!"); 
}