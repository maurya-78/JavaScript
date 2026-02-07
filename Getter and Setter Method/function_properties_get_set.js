//     Function based santax/Older method

function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,"email",{
        get(){
            return this._email.toUpperCase()
        },
        set(value){
            this._email = value.toUpperCase()
        }
    })

     Object.defineProperty(this,"password",{
        get(){
            return this._password.toUpperCase()
        },
        set(value){
            this._password = value.toUpperCase()
        }
    })
}

const rahul = new User("rahul@gmail.com","123abc")

console.log(rahul.password);
console.log(rahul.email);