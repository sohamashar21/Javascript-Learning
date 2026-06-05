const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map((num)=> {return num + 10})
// console.log(newNumbers);


//Chaining -- using two methods in one
const newNums = myNumbers
                .map((num)=> num*10)// Whatever passed in this will pass to next chian/method
                .map((num)=> num+1)
                .filter((num)=> num>=40)


console.log(newNums);
