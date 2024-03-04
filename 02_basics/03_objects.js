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
