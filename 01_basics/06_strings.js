// Declaring a String

// 1st method to declare a string (primitive type)
const yourName = "kamlesh negi";

const score = 50;
// printing variable on console- 3 ways:

// first--  will not add space automatically
console.log("Hello my name is" + yourName + "and my score is " + score); 

// second-- will add space automatically
console.log("Hello my name is", yourName, "and my score is ", score); 

// third-- String interpolation
console.log(`Hello my name is ${yourName} and my score is ${score}`); 

// can use String methods
console.log(`Hello my name is ${yourName.toUpperCase()} and my score is ${score}`); 
console.log(`Length of my name is ${yourName.length} and type my score is ${typeof score}`);

// can do chaining also
console.log(`5th character of my name is ${yourName.charAt(5).toUpperCase()} and type my score is ${score.toString(5)}`); 


// 2nd method to declare a String

const playerName = new String("Kamlesh")
console.log(playerName.codePointAt(2))

// Primitive String
const name1 = "David";

// String Object (Not recommended for general use)
const name2 = new String("Roy");

console.log(name1 === "David"); // true
console.log(name2 === "Roy"); // false (different types)

console.log(typeof name1); // "string"
console.log(typeof name2); // "object"


const obj = {
    name: "Ram",
    age: 5
}
console.log(obj.__proto__)            // to get the prototype (see this in browser's console) , old way and not preferable
console.log(Object.getPrototypeOf(obj))            // to get the prototype (see this in browser's console) , modern style (preferable)



