const marvel_heros = ["Thor", "IronMan", "Spiiderman"]
const dc_heros = ["SuperMan", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //to access flash we need to use because of in this syntax output will come array in array taking another array as a object 

const allHeros = marvel_heros.concat(dc_heros) //concat make an object to have all array added
console.log(allHeros);

//without taking another object,
//if we use concat we get an seperate array that we need to have or pass.

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator

console.log((all_new_heros));


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const real_another_array = another_array.flat(Infinity)
console.log((real_another_array));


console.log(Array.isArray("Nishant")) //false
console.log(Array.from("Nishant")) //return in object
console.log(Array.from({name:"Nishant"})) //emptyArray //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //to merge array
