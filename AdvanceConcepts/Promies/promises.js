const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls , cryptography , network
  setTimeout(function () {
    console.log("Async task is comeplete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});

const promiseThird = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "soham", email: "soham123@gmail.com" });
  }, 1000);
});

promiseThird.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "soham", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// Then chaining to another then and catch block for error handle
// finally block always runs
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json() 
//   console.log(data)
//   } catch (error) {
//     console.log("E:",error);
//   }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data)
})
.catch((err)=>console.log(err))


const promiseSix = new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log('10 Seconds have passed!')
  }, 10000);
  resolve();
})

promiseSix
.then(
  console.log('Promise Resolved')
)