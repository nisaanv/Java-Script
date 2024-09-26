function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Z");
    console.log("O");
    console.log("O");
}

// sayMyName() //you have to use () to execute the functions

 function addTwoNumbers(number1, number2) {

     console.log(number1 + number2); //function ke jo parameter banante  hai jo v input lete hai ...wo hote hai parameters
 }
 // to call the function----->
 //addTwoNumbers(5, null) ///5null
 //addTwoNumbers(3,4) //7  and the calling functions are arguments
 //addTwoNumbers(3, "4")  //34 why?  because if there is one string, java will assume another as string too
 //addTwoNumbers(4, "m")

  function addTwoNumbers(number1, number2){

      //let result = number1 + number2
      //return result
      return number1 + number2 //this will save space return like this
      
  }

//...............//after result nothing will print ...//imp//
 const result = addTwoNumbers(3, 5)   // store in variable

// console.log("Result: ", result);  // result value will be undifined

 function loginUserMessage(username = "sam"){
     if(!username){  //username===undifined all fine
        console.log("PLease enter a username");
        return
    }
     return `${username} just logged in`
 }

// console.log(loginUserMessage("Baby")) // when you dont pass any value then it'll give undefined  
// console.log(loginUserMessage("Me"))


 function calculateCartPrice(val1, val2, ...num1){  //using rest(...) operator for multiple value
        return num1
    }

// console.log(calculateCartPrice(200, 400, 500, 2000))

 const user = {
    username: "Iphone",
    prices: 199999
 }

 function handleObject(anyobject){
        console.log(`Max is ${anyobject.username} and price is ${anyobject.price}`);
        }

// handleObject(user)
 handleObject({
    username: "sam",
    price: 399
})

 const myNewArray = [200, 400, 100, 600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));