// Primitive types
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100               // JavaScript automatically knows that it is a number type

const scoreValue = false
const isLoggedIn = false            // boolean
const outSideTemp = null;           // no values is given to it. being null does not mean it is 0. It  means it is completely empty.
let userEmail;                      // undefined
 

const id = Symbol('123')
const anotherId = Symbol('123')         // both looks same but Symbol makes them unique

console.log(id===anotherId)             // false

const bigNumber = 32559843543213654n        // bigint type



// Non-Primitive types(Reference)
// Array, Objects, Functions


const heroes = ["Shaktiman", "nagraj", "Batman"];           // Array []

let myObj = {                                   // Object {}, we  can store it in some object
    naam : "Kamlesh",               // key -> name,  value -> "Kamlesh"            
    age : 30,
}

const myFunction = function(){              // function(), we can store a function in a variable
    // logic goes here
    console.log("Hello World!!")
}



// to find the data-type

console.log("type of score ->", typeof score);                    // number
console.log("type of scoreValue ->", typeof scoreValue);         // boolean
console.log("type of isLoggedIn ->", typeof isLoggedIn);        // boolean
console.log("type of outSideTemp ->", typeof outSideTemp);     // object
console.log("type of userEmail ->", typeof userEmail);          // undefined
console.log("type of id ->", typeof id);                        // symbol
console.log("type of bigNumber ->",typeof bigNumber)            // bigint
console.log("type of heroes ->",typeof heroes)                // object
console.log("type of myObj ->",typeof myObj)                  // object
console.log("type of myFunction ->",typeof myFunction)        // function (function object)