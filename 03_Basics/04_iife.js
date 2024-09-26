// Immediately Invoked Function Expressions (IIFE)


// function minion() {
//     console.log('BANANANANANANA');
    
// }



//minion()   

//sometimes there is pollution due to global scope...,global will not pollute our function if we use iffe  as below:

(function minion() {
    // named IIFE
    console.log('BANANANANANANA');
    
})();    // ()()  first one is function definition and second one is for the execution calling 
      // use semicolon to end one function or it'll give error if we declare function after one function

(() => {
    console.log('BANANANANANANA');
    
})();


( (name) => {
    console.log(`BANANANANA${name}`);
} )('Minion')