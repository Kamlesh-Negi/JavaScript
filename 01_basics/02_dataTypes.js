 let nam ="kamlesh"   
 let age = 29
let isLoggedIn = false

const id = Symbol('id');
console.log("1. Symbol id = ",id.description)      // to access the description of a symbol, we us .(dot) opertator


console.log("2. type of nam =  ",typeof nam);               // string
console.log("3. type of age =  ",typeof age);              // number
console.log("4. type of isLoggedIn =  ",typeof isLoggedIn);      // boolean

// alert(3+3)               // "undefined" here but in browsers console, it will show an alert box returning 6

console.log("5. type of null =  ", typeof null);           // object
console.log("6. type of undefined =  ", typeof undefined);     // undefined
console.log("7. type of Object =  ",typeof Object);       // function


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
console.log("8. anotherName: ",anotherName); // Xyzdotcom

anotherName = "ChaiAurCode"; // changes done in anotherName will not be reflected back in myName
console.log("9. myName: ",myName); // Xyzdotcom
console.log("10. anotherName: ",anotherName); // ChaiAurCode

// Call-by-Reference

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne; // call-by-reference
userTwo.email = "Abc@google.com"; // accessing  object (email) of userOne by reference in userTwo using dot(.)
console.log("11. userTwo.email: ",userTwo.email); // Abc@google.com
console.log("12. userOne.email:",userOne.email); // Abc@google.com



let id1 = Symbol("id");

            let person = {
                name: "Jack",

                // adding symbol as a key
                [id]: 123 // not "id": 123
            };

            console.log(person); // {name: "Jack", Symbol(id): 123}
            console.log(person.name);   // Jack
            console.log(person[id]);    // 123
