// objects can be declare by two ways A) Literals and B) Constructure

// singleton--if you build constructure that is called singleton -- Objectcreate
// by literals--not singleton

// objects literals

const mySym = Symbol("Key1")


const  JsUser = {
    name : "baba",
    "full name" : "baba yaga",
    [mySym] : "Key1", //correct syntax
    age: 28,
    location : "Gaya",
    email : "baba@gooogle.com",
    isLoggedIn : false,
    lasLoginDays : ["Mon", "Sat"]

}

console.log(JsUser.email) // not very efficient
console.log(JsUser["email"])
console.log(JsUser["full name"]); // cant use console.log(JsUser "full name")
console.log(JsUser[mySym]); //correct syntax
console.log(typeof JsUser[mySym]); //string

JsUser.email = "bababababa@google.com"
//Object.freeze(JsUser) // to frezze the object
JsUser.email = "bababa@chatgpt.com"
console.log(JsUser);


JsUser.greetings = function() {
    console.log("Hello");
}

console.log(JsUser.greetings); //undiifined
console.log(JsUser.greetings());


JsUser.greetings2= function() {
    console.log(`Hello JS user, ${this.name}`); //object ke ander ke property ko lena hai to
}

console.log(JsUser.greetings2());


//note- value access by dot but in some cases use Square Bracket as ealier we use