// let name ="kamlesh"
// let age = 29
// let isLoggedIn = false

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isLoggedIn);

// alert(3+3)               // undefined here but in browsers console it will show an alert box returning 6

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Object); // function

/*  Data types:
        1.  Primitive data types: [used by STACK memory allocation]
                    *   String, Number, Boolean, null, undefined, Symbol, BigInt
                    *   call by value --> copied value is passed and changes in copied values
                                         does not reflect back to original value
        

        2.  Non-Primitive data types: [used by HEAP memory allocation]
                    *   Arrays, Objects, Functions
                    *   call by Reference --> in this we get the reference of the actual value
                                              so changes in reference vlaue is reflected back to the original value
see EXAMPLES below:

 */

// Call-by-Value

let myName = "Xyzdotcom";
let anotherName = myName; // call by value ---> so a copy of myName is stored in anotherName
console.log(anotherName); // Xyzdotcom

anotherName = "ChaiAurCode"; // changes done in anotherName will not be reflected back in myName
console.log(myName); // Xyzdotcom
console.log(anotherName); // ChaiAurCode

// Call-by-Reference

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne; // call-by-reference
userTwo.email = "Abc@google.com"; // accessing  object (email) of userOne by reference in userTwo using dot(.)
console.log(userTwo.email); // Abc@google.com
console.log(userOne.email); // Abc@google.com
