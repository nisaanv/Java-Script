const user = {
    username: "Baba",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`); //if we use "this" keyword that means current context
        // console.log(`${this.price} , price for website`);
         //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this);       // In browser if we  run console.log(this); we'll get "window" and in tools we'll get {}


//  function chai(){
//      let username = "Baba"  // in function if you run "this" then you'll get more values like local, global and etc and you can access those values easily.
//      console.log(this.username); // undefined, means you cant access inside the functions this.username
//     }

//  chai()  

// const chai = function () {
//     let username = "Baba"
//     console.log(this.username);
// }

const chai =  () => {            // arrow functios
    let username = "Baba"
    console.log(this);
}

 //chai()



// const addTwo = (num1, num2) => {     //curly braces used the you have write return keyword
//     return num1 + num2
// }

 //const addTwo = (num1, num2) =>  num1 + num2    //implicit return

 //const addTwo = (num1, num2) => ( num1 + num2 )   //if parantheses used then you dont have to use return keyword 
 
 const addTwo = (num1, num2) => ({username: "Baba"})   // to return object  
                                                      // to return as object you have to put curly braces in parantheses

 console.log(addTwo(3, 4))


//  const myArray = [2, 5, 3, 7, 8]

//  myArray.forEach()