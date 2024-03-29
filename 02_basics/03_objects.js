// Objects in javaScript can be declared as: 
//  1. Literals (not Singleton)         [Singleton: objects of single/unique kind]
//  2. Constructors (can be Singleton)

// creating object using literals

const jsUser = {
    name : "Kamlesh",
    age : 30,
    email : "example@abc.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// Accessing the object properties

console.log("1. jsUser name: ",jsUser.name)       // JS by default accept it as String


const jsUserTwo = {
  name: "Kamlesh",
  "full name" : "Kamles Negi",
  age: 30,
  email: "example@abc.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log("jsUserTwo full name", jsUserTwo."full name")       // will throw an error--> SyntaxError: Unexpected string
console.log("2. jsUserTwo full name: ",jsUserTwo["full name"])    // we should access like this because it will help us to access the keys of string-type

// to change the value of an object

console.log("before changing jsUser email:", jsUser.email)
jsUser.email = "xyz@abc.com"
console.log("after changing jsUser email:", jsUser.email)

// to lock the object

Object.freeze(jsUser)       // will not allow to modify the object
jsUser.email = "abc@google.com"
console.log("after freezing the object, jsUser email:", jsUser.email)           // will not be modified

// Symbol: Symbols are immutable(cannot be changed) and are unique

const mySym = Symbol("mykey1")
const JsUser = {
  name : "Kamlesh",
  "full name" : "Kamlesh Negi",
  age : 18,
  location : "Uttarakhand",
  email : "abc@google.com",
  mySym : "Key1"
}

console.log("Symbol: ",JsUser.mySym)
console.log("Type of mySym: ", typeof JsUser.mySym)   // string

// to make this key Symbol type we need to put it in []
const myNewSym = Symbol("mykey2");
const JsUserTwo = {
  name: "Kamlesh",
  "full name": "Kamlesh Negi",
  age: 18,
  location: "Uttarakhand",
  email: "abc@google.com",
  [myNewSym]: "Key1",
};
console.log(JsUserTwo[myNewSym])    // Key1
console.log(typeof myNewSym)        // symbol