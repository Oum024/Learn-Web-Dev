class User1 {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // when using getter and setter we need to remember that we need to use both together 

    get email(){
        return this._email.toUpperCase()     
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}oum`    // we are getting -> abcoum
    }

    set password(value){                         // we are setting -> abc
        this._password = value
    }
}

const oum = new User1("o@patel.ai", "abc")
console.log(oum.email);




// property getter and setter

function User2(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {    // we use define property to use get and set function
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User2("chai@chai.com", "chai")

console.log(chai.email);



// object getter and setter

const User3 = {
    _email: 'u@oum.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User3)
console.log(tea.email);