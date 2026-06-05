// const bgmiUser = new Object()

const bgmiUser = {};
bgmiUser.id = "2449114994";
bgmiUser.name = "DeadPlayer";
bgmiUser.isLoggedIn = true;

// console.log(bgmiUser);

const regularName = {
  email: "sohamashar21@gmail.com",
  fullname: {
    name: "soham",
    userFullname: {
      name: "Soham ashar himanshubhai",
    },
  },
};
// console.log(regularName.fullname.userFullname);

const obj1 = {
  name: "Soham",
};
const obj2 = {
  age: 19,
};

// console.log(Object.assign({},obj1,obj2));

// let obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [{}, {}, {}, {}];

user[1].email;
// console.log(bgmiUser);

// console.log(Object.keys(bgmiUser));
// console.log(Object.values(bgmiUser));
// console.log(Object.hasOwn(bgmiUser, "id"));
// console.log(Object.entries("DeadPlayer"));


const course = {
  courseName: "Bca(hons)",
  price: "350000",
  courseInstructor: "Jg uni",
};

const {courseName:cname,price:p,courseInstructor:cinstruc} = course;

 console.log(`Course is ${cname} Price of the course is ${p} and instructor is ${cinstruc}`);

// {
//   "name":"soham",
//   "coursename":"bca(hons)",
//   "price":"350000"
// }
