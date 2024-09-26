 //var c = 300
let a = 300
if (true) {     //{}--> scope if it come with "if or else"
    let a = 10     //inside scope it calles block scope and outside it calles global scope
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b); 
// console.log(c);


function one(){
    const username = "boo"

    function two(){    //function inside fucction  , the function that are inside can access outside function
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()

}

//one()

 if (true) {
     const username = "Baba"
     if (username === "Baba") {
         const website = " Failure"
          //console.log(username + website);
     }
      //console.log(website);
 }

 //console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


 console.log(addone(5))

 function addone(num){   //only declare, you can use log before
     return num + 1
 }

 addone(5)


 addTwo(5)
 const addTwo = function(num){    //declare and hold in variable  so you cant use  console.log() before deckareation
     return num + 2
 }