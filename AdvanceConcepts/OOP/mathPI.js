// getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// // console.log(Math.PI)
// // Math.PI =5
// // console.log(Math.PI)

const chai = {
  name: "masalaChai",
  price: "20",
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nahi bani");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, "price", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// chai.price = 10;
// console.log(chai.price) // Cannot be changed because we disabled writeable and enumerable's value of price to false

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}



