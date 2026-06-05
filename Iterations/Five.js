const coding = ["JS","Java","Python","Cpp","Ruby"]

// coding.forEach(function(item){
//   console.log(item);
// })

// coding.forEach((item)=>{
//   console.log(item);
  
// })
// function printMe(items){
//    console.log(items);
   
// }

// coding.forEach((printMe))

// coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
// })

const myCoding = [
  {
     languageName: "Javascript",
     languageFileName:"js"
  },
  {
     languageName: "Java",
     languageFileName:"java"
  },
  {
     languageName: "python",
     languageFileName:"py"
  }
]

myCoding.forEach((items)=>{
 console.log(items.languageFileName);
 
})