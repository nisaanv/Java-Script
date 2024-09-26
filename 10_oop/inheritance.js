class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const baba = new Teacher("baba", "baba@teacher.com", "123")
baba.addCourse()

// chai.logMe()
const blackTea = new User("blackTea")

blackTea.logMe()

console.log(baba instanceof User);