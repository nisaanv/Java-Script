// if
// const isUserloggedIn = true  
// const temperature = 41

//  if ( temperature === 41 ){  
//      console.log("less than 50");
//  } else {
//      console.log("temperature is greater than 50");
//  }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==   // sigle = is for assign ans == is for equal to each other and === is for check datatype and equal both

//  const score = 200

//  if (score > 100) {
//      let power = "fly"
//      console.log(`User power: ${power}`);
//  }

// console.log(`User power: ${power}`);

//short hand notation

 const balance = 1000

 //if (balance > 500) console.log("test"),console.log("test2");   //implicit scope which is in one line ,,,not use, this is not proper

//  if (balance < 500) {
//      console.log("less than 500");
//  } else if (balance < 750) {
//      console.log("less than 750");
    
//  } else if (balance < 900) {
//      console.log("less than 750");
    
//  } else {
//      console.log("less than 1200");

//  }

 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if (userLoggedIn && debitCard && 2==2) {
     console.log("Allow to buy course");
 }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}