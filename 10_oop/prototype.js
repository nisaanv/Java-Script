let myName = "baba     "
let morning = "blacktea     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){         //defining method
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.baba = function(){
    console.log(`baba is present in all objects`);
}

Array.prototype.heyBaba = function(){
    console.log(`BABA says hello`);
}

// // heroPower.baba()
// myHeros.baba()
// myHeros.heyBaba()
// // heroPower.heyBaba()     // not gonna work




// // inheritance

// outdated approach


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User




// // modern syntax


Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "BlackTea    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"BabaYaga".trueLength()
"iceTea".trueLength()