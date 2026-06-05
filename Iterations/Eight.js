const myNums = [1,2,3]
//Reduce iterate through an array and condense it into singal value
// Mostly used in eCommerce Cart 

// const myTotal = myNums.reduce(function (acc ,curVal ){
//   console.log(`Acc: ${acc} and cur val: ${curVal}`);
  
//   return acc + curVal
// },0)

// console.log(myTotal);


const myTotal = myNums.reduce((acc,curVal)=>{
  console.log(`Acc: ${acc} and current Val: ${curVal}`);
  return acc + curVal;
},0) 

console.log(myTotal);

const shoppingCart =[
  {
    itemName: "jsCourse",
    price: 2999
  },
  {
    itemName: "mernCourse",
    price: 5999
  },
  {
    itemName: "pythonCourse",
    price: 7999
  },
]

const totalCart = shoppingCart.reduce((acc,curVal)=>{
  return acc + curVal.price;
},0)

console.log(totalCart);
