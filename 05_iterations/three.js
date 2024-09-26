// for of

// ["", "", ""]  ---> string on array
// [{}, {}, {}]  ---> object in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('IN', "India")  --> map is only unique value no double entry


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// myObject not gonna iterate in this syntax
const myObject = {
    game1: 'NFS',
    game2: 'Call Of Duty'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}