const user = {
    username: "Baba",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}



// console.log(user.username)
// // console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;       
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("baba", 12, true)
const userTwo = new User("javaScripts", 11, false)
console.log(userOne.constructor);
console.log(userTwo);


//if we use new keyword then empty object created  which is called instance and second due to new keyword constructor got called which packed all the argument give it you then third, all the arguments that you write will be inject into .this
//and last four step youll get all into your functions