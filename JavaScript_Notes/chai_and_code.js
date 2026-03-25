// const accountId =1444553
// let accountEmail = "jimaurya6386@gmail.com"
// var accountP= "1234560"
// accountCity = "Mumbai"

//accountId=2    // not allowed

//console.log(accountId);

/*
Prefer not to use var
because of issue in block scop and functional scop
*/
//console.table([accountId,accountEmail,accountP,accountCity]);

//             Data Types

"use strict";
const { use } = require("react");

// treat all JS code as newer version

//alert(3+3)  // we are using nodejs, not browser

// coad readability should be good;

//  null =>standalone value
// undefined =>
//  symbol => unique

// object

//console.log(typeof undefined); //undefined
//console.log(typeof null); //object

// let score = "Rahul"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = "Rahul"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true; 0=> false
// "" => false
// "Rahul" => true

// ************************Operations********************************

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = "Rahul"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(false);
//console.log(+true);
//console.log(+"");
//console.log(true+);

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100

// ++gameCounter;
// console.log(gameCounter);

//***************Comparision******************

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" > 1);

// ===  >check the value conversion as well as Datatype conversion

//***************Datatype summary************

//   Primitive  ->7 types :String, Number, Boolean, null, undefined, symbol, BigInt

// Reference(Non primitive) -> Types :Array, Objects, Functions

const id = Symbol("123");
const anotherId = Symbol("123");

//console.log(id === anotherId);

//**********Memory(Stack and Heap)***********

// Stack->Primitive
// Heap->Non-primitive

let str1 = "Rahul";

let str2 = str1;
str2 = "Maurya";
// console.log(str1);
// console.log(str2);

let user1 = {
  email: "jimaurya6386@gmail.com",
  upi: "7268980198@ybl",
};

let user2 = user1;

user2.email = "rahul@gmail.com";
// console.log(user1.email);
// console.log(user2.email);

//++++++++++++++++++String in JavaScript+++++++++++++++++++

const name = "Rahul";
const repoCount = 50;

//console.log(name+ repoCount + "Value")

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Rahul");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));

//-------------------Number and Maths in JavaScript---------------------------

// const score = 400
// console.log(score);

// const balance = new Number(100)

// console.log(balance );

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(balance.toPrecision(3));
// console.log(balance.toExponential(2));
// console.log(balance.valueOf());
// console.log(balance.toString().length);

// const otherNumber = 1000000000
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toExponential(2));
// console.log(otherNumber.valueOf());
// console.log(otherNumber.toString().length);
// console.log(otherNumber.toString());
// console.log(otherNumber.toLocaleString("en-IN"));

//--------------Maths----------

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.round(4.3))
// console.log(Math.min(4,1,5,7,9));
// console.log(Math.max(4,1,5,7,9));
// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

//++++++++++++++++Date and Time-------------

let myDate = new Date();
// console.log(myDate.toString);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date("01-14-2023")
let myCreatedDate = new Date("01-14-2023");

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.setFullYear(2022));
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getTime());
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleTimeString());
// console.log(newDate.toUTCString());

const Date1 = newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Asia/Kolkata",
});
//console.log(Date1);

//++++++++++++++++Array+++++++++++++

const Arr = [0, 1, 2, 3, 4, 5];
//console.log(Arr)

//    Array methods

Arr.push(6);
//console.log(Arr);

Arr.pop();
//console.log(Arr);

Arr.unshift(7);
//console.log(Arr);

Arr.shift();
//console.log(Arr);

// console.log(Arr.includes(9));
// console.log(Arr.indexOf(3));
// console.log(Arr.join());

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);
//console.log(allHeros.length)
//console.log(marvel_heros[3][1])

const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//console.log(another_array.flat(Infinity));

//console.log(Array.isArray("Rahul"));
//console.log(Array.from("Rahul"));
//console.log(Array.from({name:"Rahul"}));//most important method for array

let score1 = 100;
let score2 = 200;
let score3 = 300;

//console.log(Array.of(score1,score2,score3))

//++++++++++++++++Objects++++++++++++++++++++++

//singleton -> constracter ->Object.create (object creation)
//Object.create;

//object literals

const mySym = Symbol("key1");

const JsUser = {
  "full name": "Rahul Maurya",
  mySym: "mykey1", // it is string but if [mySym] -> that is a symbol
  name: "Rahul",
  age: 20,
  location: "Jaunpur",
  email: "rahul@gmail.com",
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) -> Accese  but not allowed
// console.log(JsUser.full name);  -> not accese and thrown error
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])
// console.log(typeof JsUser.mySym)

JsUser.email = "rahul@chatgpt.com";
//Object.freeze(JsUser)
JsUser.email = "rahul@gmail.com";
//console.log(JsUser);

JsUser.greetig = function () {
  //console.log("Hello js user");
};

JsUser.greeting1 = function () {
  //console.log(`Hello js user, ${this.name}`);
};

//console.log(JsUser.greeting1());  //->undefined

//console.log(JsUser.greetig());  // -> undefined
//console.log(JsUser.greetig);  //->[Function (anonymous)]

//  if i can reference the same object then we can use the (.this)-> method.

//------Object Singltan --------------

//const tinderUser = new Object();   //{}
const tinderUser = {}; //{}
tinderUser.id = "123abc";
tinderUser.name = "Rahul";
tinderUser.email = "rahul@gmail.com";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
  email: "rahul@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Rahul",
      lastname: "Maurya",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
//console.log(obj4);

const users = [
  {
    id: 1,
    email: "rahul@gmail.com",
  },
  {
    id: 2,
    email: "rahul@gmail.com",
  },
  {
    id: 3,
    email: "rahul@gmail.com",
  },
];

//console.log(users[1].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.getOwnPropertyNames(tinderUser));
// console.log(Object.getOwnPropertyDescriptors(tinderUser));

const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "Rahul",
};

//course.courseInstructor

const { courseInstructor: instructor } = course;
//console.log(instructor);

// {
//     name:"Rahul",
//     coursename:"js in hindi",
//     price:"Free",

// }

//---------Functions And Parameter in JS -----------------

//function sayMyName(){
// console.log("Rahul");
// console.log("Kumar");
// console.log("Maurya");

//}

//sayMyName()

//function addTwoNumbers(num1, num2){

//let result = num1+num2
//return result
// console.log("Rahul"); //-> Never executed "Rahul" in the output because after the return statement
//-> But if we write the coad (console.log("Rahul")) is above to the  return statement
//-> then it will we executed for the output
// return num1+num2

//}

//const result =addTwoNumbers(5,3)
//console.log("Result:", result)

function loginUserMessage(username) {
  //return `${username} logged in successfully`;
}

//logicUser = loginUserMessage("Rahul")
//console.log(logicUser);

//console.log(loginUserMessage("Rahul"));


function calculateCartPrice(...num1) {      //-> ... is called both rest and spread operator according to his situation 
                                               //-> when called rest and when called spreat
 // return num1
}

//console.log(calculateCartPrice(200, 400, 800, 1000, 1500, 2000));    //[200,400,600,....]-> Rest operator

const user_cart = {
  username: "Rahul",
  price: 1999,

}

function handleObject(anyobject){
 // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
  username:"Rahul",
  price:399,
})


const myNewArray = [100,200,300,400,500]

function returnSecondValue(getArray){
  //return getArray[4]
}

//console.log(returnSecondValue(myNewArray));

//console.log(returnSecondValue([400,500,600,700,800,900,1000]));




//------------ Global and Local Scope in JavaScript --------------


// let a=10;
// const b=20;
// var c=30;
var c = 600;
if(true){
  let a=40;
  const b=50;   // whose variable write in curly brases they are called the scope variable 
  var c=60;

}

//console.log(a);
//console.log(b);
//console.log(c);


let num1 = 20;

if(true){
  let num1 = 50;
  const num3 = 60;
  //console.log("INNER:",num1)
}

//console.log("OUTER:",num1)

// if we run any commond in console and node (terminal) method 
// then both are different output for local and globle variables.


//   ---------- Nested Scope -----------


function one(){
  const username = "Rahul";
  function two(){
    const website = "Youtube"
    //console.log(username);
  }
     //console.log(website);
   two()
}

//one()

if(true){
  const username = "Rahul"
  if(username === "Rahul"){
    const website = " Youtube"
   // console.log(username + website);
  }
  // console.log(website);
}
//console.log(username);


// ++++++++++++++++ Important Concepts +++++++++++

function addone(num){      // function
 // return num+1;
}

//addone(5)

const addTwo = function(num){     // it is also a function
  //return num+2;

}

//addTwo(5)


// ---------- Arrow Function --------------

const user = {
    username:"Rahul",
    price:999,

    welcomeMessage: function(){
       // console.log(`${this.username}, welcome to website`);
       // console.log(this);
    
    }

}
 
//user.welcomeMessage()
user.username = "Rahul Maurya"
//user.welcomeMessage()

//console.log(this);

// function chai(){
//   let username = "Rahul"
//     console.log(this);

// }

// chai()


 const chai = () => {
    let username = "Rahul"
   // console.log(this);
 }

 //chai()

//  Arrow Function-> syntax= () => {}

// const addTwo_ =(num1, num2) => {
//        return num1+num2;
  
// }
// console.log(addTwo_(5,3))

//const addTwo_ =(num1, num2) =>   num1+num2;
 
//const addTwo_ =(num1, num2) =>   (num1+num2);

//const addTwo_ =(num1, num2) => {username: "Rahul" }       //-> did not get the output

const addTwo_ =(num1, num2) => ({username: "Rahul" })     //   it's provide a output

//console.log(addTwo_(5,3))

// if we use carly brases then we write the return(*) statement
// if we use parenthesis then we not write the return statement




//  Immediately Invoked Function Expressions (IIFE)

(function chai(){
  // named IIFE
  // console.log(`DB CONNECTED`);
})();

( () => {
  //console.log(`DB CONNECTED ${name}`);
})("Rahul") 


// ------------JavaScript Execution Context -----------------

//   1. {} -> Globaal Execution Context -> Memory Creation Phase/ Creation Phase
//   2.    -> Function Execution Context
                                        // -> Execution Phase

//     ->Globle Execution -> this




// -------> Control flow in javaScript <------------


const temperture = 41;

if(temperture < 50){
    //console.log("temperture is less than 50")
}else{
   //console.log("temperture is gratter than 50")
}

const score =200;

if(score>100){
  const power = "fly"
  //console.log(`User power: ${power}`)
}
//console.log(`User power: ${power}`)   // it is not executed because power is not define in outside -> 
                                      // it is define in inside the curly brasis 


// const balance =1000

// if(balance > 500) console.log("test") ;    //it is emplysit scope

const balance = 1000;

// if(balance < 500){
//   console.log("less than 500")
// }else if(balance < 750){
//   console.log("less than 750")
// }else if(balance < 900){
//   console.log("less than 900")
// }else{
//   console.log("less than 1200")
// }


const userLoggedIn = true;
const debitCard = true; 
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if( userLoggedIn && debitCard && 2==2){
// console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
 // console.log("User logged in from google or email");

}

// --------> Switch statement <---------

// const month = 3;

// switch(month){
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

// ----------> Truthy Values Falsy Values <---------

const userEmail = "r@rahul.com"

if(userEmail){
    //console.log("Got user email");
}else{
  //console.log("Did not get user email");

}

// falsy values    -> false ,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values    -> "0","false"," ",[],{}, function(){}

// if(userEmail.length === 0){
//   console.log("Array is empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0)
// {
//   console.log("Object is empty");

// }  


//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
 //val1 = 0 ?? 10;
 //val1 = null ?? 10;
 //val1 = undefined ?? 10;
 //val1 = null ?? 10 ?? 20
//console.log(val1);

// -------> Terniary Operator <--------

//condition ? true : false;

// const iceTeaPrice = 100;

//      iceTeaPrice >= 80 ? console.log("less than 80") : console.log
//      ("greater than 80");


//  -----------> For loop with break and continue in JavaScript <-------------

// for (let index = 0; index < 10; index++){
//      const element = index;
//      if(element == 5){
//       //console.log("5 is best number");
//      }
//     // console.log(element);
// }

// for(let i=1; i<=10; i++){
//   console.log(`Outer loop: ${i}`)
//   for(let j=1; j<=10; j++){
//       //console.log(`Inner loop: ${j} and inner loop ${i}`)
//       console.log(i + "*" + j + "=" + i*j)
//   }
// }


let myNewArray1 = ["Rahul", "Maurya","Jaunpur","Kanpur"]

for(let index = 0; index < myNewArray1.length; index++){
  const element = myNewArray1[index];
 // console.log(myNewArray1.length);
 // console.log(element);

}

// ---------> break and continue <-----------

// for(let i=1; i<=10; i++){
//    if(i == 5){
//     console.log(`Detected 5`);
//     continue;
//     //break;
//    }
//   console.log(`Value of element is ${i}`);
// }



//  ---------------->While loop and DoWhile loop <------------------

let index = 0;
while( index <= 10){
  //console.log(`Value of index is ${index}`);
  index = index + 2;
  //index++;

}

let Array2 = ["Rahul","Maurya","Jaunpur","Kanpur"]

let arr=0;
while(arr < Array2.length){
  //console.log(Array2[arr]);
  arr++;

}

//  dowhile ->

let marks= 11;
do{
  // console.log(`Marks is ${marks}`);
   marks++;
}while(marks <= 10);


// -------> High Order Array Loops <---------


// for of

const arr4 = [1, 2, 3, 4, 5]

for (const num of arr4) {
 // console.log(num);
}

const greetigs = "Good Morning"

for (const greet of greetigs) {
 // console.log(`Each character is ${greet}`);
 
}


//       Maps(Maping)

const map1 = new Map();
map1.set("IN", "India");
map1.set("US", "America")
map1.set("UK","United Kingdom")
map1.set("IN", "India")

//console.log(map1);

 //console.log(map1.get("IN"));
// console.log(map1.get("UK"));
// console.log(map1.get("US"));

for (const iterator of map1){
 //  console.log(iterator);

}

for (const [key, value] of map1){
  //console.log(key, ":-" , value);

}


// for(const [key , value] of myObject){
//   console.log(key, ":-", value);  
// }

// const myObject = {
//   name: "Rahul",
//   age: 20 ,
// }


//    for in

const myObject = {
  js:"javascript",
  cpp:"C++",
  rb:"Ruby",
  swift:"Flutter",
}

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ["js","cpp","rb","swift","python"]

for (const key in programming) {
      //console.log(`${key} is the value of ${programming[key]}`)
}

//   Note -> we can't apply for in loop in the map -> can't provide output
        //-> and can't apply for of in any object  -> Error

//  For each loop

const coding = ["js","cpp","rb","swift","python"]

coding.forEach(function(val){
  //console.log(val);
})

coding.forEach( (val)=> {
 // console.log(val);
})

function printMe(item){
 // console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
 // console.log(item,index,arr);

})

const myCoding = [
  {
    languageName:"JavaScript",
    languageFileName:"js",
  },
  {
    languageName:"Python",
    languageFileName:"py",
  },
  {
    languageName:"Ruby",
    languageFileName:"rb",
  },
  {
    languageName:"Java",
    languageFileName:"java",
  },
  {
    languageName:"C++",
    languageFileName:"cpp",
  },
  {
    languageName:"C",
    languageFileName:"c",
  
  }
]


myCoding.forEach( (item) =>{

   // console.log(item.languageName);
   // console.log(item.languageFileName);
})

const values = coding.forEach( (item) => {
  //console.log(item);
 // return item;
})
//console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

//const newNums = myNums.filter( (num) => {  
  // return num > 5
//})
//console.log(newNums);

//  if we apply the arrow function then we use the curly brases without using the return statement then output will be empty array [].
//  if we use the return statement then output will we provided.

const newNums = []

myNums.forEach( (num) => {
  if(num > 5){
    newNums.push(num);
  }
})
//console.log(newNums);


const books = [
  {
    title: "Book One", genre:"Fiction", publish: 1981,
    edition: 2004
  },
  {
    title: "Book Two", genre:"Non-Fiction", publish: 1992,
    edition: 2008
  },
  {
    title: "Book Three", genre:"History", publish: 1994,
    edition: 2012
  },
  {
    title: "Book Four", genre:"Non-Fiction", publish: 1996,
    edition: 2010
    },
  {
    title: "Book Five", genre:"Fiction", publish: 1998,
    edition: 2015
  },
  {
    title: "Book Six", genre:"History", publish: 2000,
    edition: 2016
  },
  {
    title: "Book Seven", genre:"Non-Fiction", publish: 2002,
    edition: 2012
  },
  {
    title: "Book Eight", genre:"History", publish: 2008,
    edition: 2013
  },
  {
    title: "Book Nine", genre:"Non-Fiction", publish: 2006,
    edition: 2010
  }
];

let userBooks = books.filter( (bk) => bk.genre === "History")

//console.log(userBooks);   // filter -> compair the value (true or false)

const userBooks1 = books.filter( (bk) =>  {return bk.publish >= 2000})
const userBooks2 = books.filter( (bk) =>  {return (bk.publish >= 1994 && bk.publish <=2006)})
//console.log(userBooks1);

//console.log(userBooks1);


const myNumbers = [4,8,12,16,20,24,28,32,36,40]

const newNumbers = myNumbers.map( (num) => {return num +10} )
//console.log(newNumbers);

const chaining = myNumbers
                 .map((num) => num*10)
                 .map((num) => num+1)
                 .map((num) => num/4)
      
//console.log(chaining);

//  chaning method => in this method if we apply the map(method) in chain form then it will be executed 1st(with values) -> 2nd(with values of 1st chain) -> 3rd(with values of 2nd)
// Example => [4,8,12, ....] -> 1.( 4 *10 -> 40+1 -> 41/4 => 10.25)
// Example => [4,8,12, ... ] -> 2.( 8 *10 -> 80+1 -> 81/4 => 20.25)
// Example => [4,8,12, ...] -> 3.( 12 *10 -> 120+1 -> 121/4 => 30.25)  and so on



///     Reduse method 

const myReduce = [1,2,3,4,5,6,7,8,9,10]

const newReduce = myReduce.reduce( (acc, curr) => {
  //console.log(`acc: ${acc} and curr: ${curr}`); 
    return acc + curr
} ,3)
//console.log(newReduce);

const myTotal = myReduce.reduce( (acc, curr) => {
  //console.log(`acc: ${acc} and curr: ${curr}`); 
    return acc + curr
} ,0)
//console.log(myTotal);

const shopingCards = [
  {
    itemName:"javascript",
    price:199,
  },
  {
    itemName:"java",
    price:299,
  },
  {
    itemName:"python",
    price:399,
  },
  {
    itemName:"ruby",
    price:499,
  },
  {
    itemName:"c++",
    price:599,
  }
]

 const priceToPay = shopingCards.reduce((items,acc) => acc+ items.price,0)

 //console.log(priceToPay);



// -----> DOM Introductions <-------------

/// Saprate file for the DOM to the folder Practice_JavaScript/DOM



// ------>  Events  <----------------

// Saprate file for the Events to the folder Practice_JavaScript/Events

// ------> Asynchronuous  <---------

//  * Javascript -> synchronous(one by one code executed)    *Default
//               -> single threaded                          *Default

//   *Execution Context -> execute one line of code at a time
//                      * each operation waits for the last on to complete before executing

//   there are two type of code blocking in the JavaScript
//       1*  Blocking Code -> block the flow of program -> Read file Sync
//       2*  NonBlocking Code -> does not block execution -> Read file Async
//
//      -> JavaScript Engine = Memory Heap + CALL Stack



//  --------> API request and V8 engine <-----------

// Saprate file for the API Request and Promises to the folder Practice_JavaScript/ APIrequest


// ----------> JavaScript classes and opps  <----------

// in the JavaScript there is no classes but it is paradimes(style of writing the code) 
/* -> it is object oriented programming language
   -> collection of properties and methods

  * parts of oop -> Object literal*

   -> Constructor function
   -> Prototypes
   -> Classes
   -> Instances (new, this)

   ** 4 pillars

   . Abstraction -> hide of the details (ex. fetch)
   .Encapsulation -> Rapped of the Data information
   .Inheritance   -> 
   .Polymorphism  -> Many types of function(in hindi jaise rup)

*/
  //   ----------> OPPsin js <-------
        // Object literal

// const Users ={
//   username:"Rahul",
//   loginCount:8,
//   singhId:true,

//   getUserDetails :function(){
   // console.log("Got user details from database");
   //console.log(`Userinfo: ${this.Username}`);
  // console.log(this);
  //}
//}

//console.log(User.username);
//console.log(User.getUserDetails())

//console.log(this);


//            constractor function  (new)

// function User(Username,loginCount,singhId){
//   this.Username = Username;
//   this.loginCount = loginCount;
//   this.singhId = singhId;

//   return this
// }
// const userOne = User("Rahul",12,true)
// const userTwo = User("JavaScript",11,false)

// console.log(userOne);
// console.log(userTwo);  //  this is the override to the userone

// function Info(username, loginCount, singhId){
//   this.username = username;
//   this.loginCount = loginCount;
//   this.singhId = singhId;

//   this.greeting = function(){
//     console.log(`Hello ${this.username}`);
  
//   }
//   return this
// }

// const userOne = new Info("Rahul",12,true)
// const userTwo = new Info("JavaScript",11,false)

// console.log(userOne.constructor);      /*this is the constractor and give the new instanse for the new keyword */
//console.log(userTwo);      


//  =======> Prototypes <========

/* Array -> object -> null
   String -> object -> null
   function -> it is also object -> null


this -> meaning (jis)
*/

// function multiplyBy5(num){
//   return 5*num;
// }

// multiplyBy5.power = 5;

//console.log(multiplyBy5.power);
//console.log(multiplyBy5.prototype);

// function createUser(username,score){
//    this.username =username
//    this.score = score
// }

// createUser.prototype.increment = function(){
//   this.score++;
// }

// createUser.prototype.printMe = function(){
//   console.log(`price is ${this.score}`)
// }

// const chai1 = new createUser("chai",25)
// const tea =  new createUser("tea",250)

// chai1.printMe()

/*

Here's what happens behind the scenes when the new keyword
is used:

A new object is created: The new keyword initiates the
creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked
to the prototype property of the constructor function.This
means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called: The constructor function is
called with the specified arguments and this is bound to 
the newly created object. If no explicit return value is
specified from the constructor. JavaScript assumes this,
the newly created object, to be the intended return value.

the new object is returned: After the constructor function 
has been called, if it is doesn't return a non-primitive value
(object, array, function, etc.), the newly created object
is returned.

 */

// ------> Prototype in JavaScript <----------

// let myName = "Rahul"
// let myCode ="js"
// console.log(myName.truelength);

// let myHeros = ["spiderman","thor"]

// let heroPower ={
//    spiderman:"sling",
//    thor:"hammer",

//    getSpiderPower: function(){
//     console.log(`Spidy power is ${this.spiderman}`)
//    }
// }

// Object.prototype.Rahul = function(){
//      console.log(`Rahul is present in all objects`);
// }

// Array.prototype.heyRahul = function(){
//   console.log(`Rahul says Hello`);
// }
//heroPower.Rahul()
// myHeros.Rahul()
// myHeros.heyRahul()
//heroPower.heyRahul()    // fail


//  -------> Inheritance <---------

// const User = {
//   name = "chai2",
//   email = 'chai2@google.com',
// }
// const Teacher ={
//   makeVideo:true
// }

// const TeachingSupport ={
//   isAvailable: false
// }

// const TASupport ={
//     makeAssignment:'JS assignment',
//     fullTime: true
//    __proto__: TeachingSupport

// }

// Teacher.__proto__ = User

//    mordern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

// let anotherUsername = "chaiaurcode     "

// String.prototype.trueLength = function(){
//   console.log(`${this}`);
//   console.log(`The length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength();
// "Rahul".trueLength()
// "iceTea".trueLength()


//  -------> Call and this in JavaScript <-----------

//function SetUsername(username){
  // complex DB calls
//   this.username = username;
//   console.log("call");
// }

// function createUser(username,email,pass){
//   SetUsername.call(this,username);
//   this.email = email;
//   this.pass = pass;
  
// }
// const chai_ = new createUser("chai","chai@123.com","123")
// console.log(chai_);


// ---------> class constructor and static <--------
      //ES6 ke bad ki chije

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }

// }
// const Script = new User("Java","java@gmail.com","123")
// console.log(Script);
// console.log(Script.encryptPassword());
// console.log(Script.changeUsername());

                 // behind the scene

// function User(username,email,password){
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function(){
//   return `${this.password}abc`;
// }

// User.prototype.changeUsername = function(){
//   return `${this.username.toUpperCase()}`;
// }

// const Script = new User("tea","tea@gmail.com","123")
// console.log(Script);
// console.log(Script.encryptPassword());
// console.log(Script.changeUsername());


         // Inheritance

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//     logMe(){
//       console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Admin extends User {
//   constructor(username, email, password, role) {
//     super(username, email, password);
//     this.role = role;
//   }

//   addCourse() {
//     console.log(`A new course was added by ${this.username}`);
//   }
// }

// const Course = new Admin("chai","chai@gmail.com","123","admin")
// Course.addCourse()
// Course.logMe()

// const masalachai = new User('masalachai')
// masalachai.logMe()

// console.log(Course === masalachai);
// console.log(Admin === masalachai);
// console.log(Course instanceof User);
// console.log(Admin instanceof User);
// console.log(masalachai);


       // **static property

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   logMe(){
//     console.log(`Username is ${this.username}`)
//   }

//   static createId(){
//     return `123`
//   }
// }

//const rahul = new User("Rahul","rahul@gmail.com","123")
//console.log(rahul.createId())   // not give any output it give error because we use the STATIC class


// class Admin extends User {
//   constructor(username,email) {
//     super(username);
//     this.email = email;
//   }

//   addCourse() {
//     console.log(`A new course was added by ${this.username}`);
//   }
// }

// const iphone = new Admin("iphone","iphone@gmail.com")
// iphone.logMe()
// iphone.addCourse()
// iphone.createId() // not give any output it give error because we use the STATIC class



// -------> Bind in JavaScript <-----------

// Saprate file for the Bind() Method  to the folder Practice_JavaScript_By_HC/ Bind.html


// -------> Getter and Setter in JavaScript <-----------

// Saprate file for the Getter and Setter Method  to the folder Practice_JavaScript_By_HC/



// -------> Lexical Scoping and Closure in JavaScript <-----------

// Saprate file for the Lexical Scoping and Closure   to the folder Practice_JavaScript_By_HC/


//  ---------> Ends in JavaScript <-------------