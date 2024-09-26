function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)   //to call the object and to hold reference use .call and reference will use by .this..it call
   
    this.email = email
    this.password = password
}

const chai = new createUser("baba", "baba@google.com", "123")
console.log(chai);