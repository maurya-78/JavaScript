  /*getOwnPropertyDescriptor() -> this property used for the hidden information about of the object.
  **Gets the own property descriptor of the specified object. 
  An own property descriptor is one that is defined directly on the object 
  and is not inherited from the object's prototype.

  @param o — Object that contains the property.

   @param p — Name of the property. 

*/

/*  Q. Task, what can we change the value of PI if yes
      then why? if No then why?
      
      Answer.   No because 
              1. writable: false,
              2. enumerable: false,
              3. configurable: false
              in the hardcoad bihind the c++ designed
      */
const discripter = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(discripter)

const myObj = {
    name: 'ginger chai',
    price: 125,
    isAvailable: true,

    orderChai : function(){
         console.log("chai nhi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

// Object.defineProperty(myObj, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

for(let [key, value] of Object.entries(myObj)){
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
        continue;
    }
    
}