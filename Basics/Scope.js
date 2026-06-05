
//scope
//{} 

let a = 200

if(true){
  let a = 10
  const b = 20
  var c = 30
  //console.log("INNER: ", a);
  
}

// console.log(a);
// console.log(b);
//console.log(c);

function one(){
  const username = "Soham"
  
  function two(){
    const website = "Youtube"
    console.log(username);
  }
  //console.log(website);
  
  two()
}

//one()


if(true){
  const username = "Soham"
  
  if(username === "Soham"){
    const website = " Youtube "
   // console.log(username+website);
  }
  // console.log(website);
}

//console.log(username)




//+++++++++++++++ Intresting ++++++++++++++

console.log(addOne(5))
function addOne(num){
 return num + 1
}


addTwo(5)

const addTwo = function (num){
  return num + 2
}
