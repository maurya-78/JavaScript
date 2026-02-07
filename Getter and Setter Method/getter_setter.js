class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const rahul = new User("rahul@gmail.com","123456")

console.log(rahul.password);
console.log(rahul.email);