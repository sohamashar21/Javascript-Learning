const marvel_heros = ['thor','ironman','spiderman']
const dc_heros = ['superman','flash','batman']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr);

const newHeros = [...marvel_heros, ...dc_heros];
// console.log(newHeros);



// const another_array = [1, 2, 3, [4, 5, 6 ] , 7 , [6,7, [4,5]]]
// const useable_another_arr = another_array.flat(Infinity);
// console.log(useable_another_arr);


console.log(Array.isArray("SOHAM ASHAR"));
console.log(Array.from("SOHAM ASHAR"));
console.log(Array.from({name: "SOHAM" })); //Intresting

let name = "soham"
let age = 19
let university = "JG"

console.log(Array.of(name,age,university))
