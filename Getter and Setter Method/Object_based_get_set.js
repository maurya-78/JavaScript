const User = {
    _email: "r@rl.com",
    _password: "1234rl",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value.toUpperCase()
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value.toUpperCase()
    
    },  
}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea.password)