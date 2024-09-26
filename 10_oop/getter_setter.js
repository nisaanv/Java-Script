class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}baba`
    }

    set password(value){
        this._password = value
    }
}

const baba = new User("b@;baba.ai", "abc")
console.log(baba.email);
console.log(baba.password);
