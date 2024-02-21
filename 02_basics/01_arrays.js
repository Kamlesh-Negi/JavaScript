// JavaScript arrays

const myArr = [12,15,2,69]
console.log(myArr)

const newArr = [12,25,"Hello",true]
console.log(newArr)

// Creating an array
const fruits = ["apple", "orange", "banana", "grape"];

// Accessing elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "banana"

// Modifying elements
fruits[1] = "pear";
console.log(fruits); // Output: ["apple", "pear", "banana", "grape"]

// Array length
console.log(fruits.length); // Output: 4


// Adding elements to the end
fruits.push("kiwi");
console.log(fruits); // Output: ["apple", "pear", "banana", "grape", "kiwi"]

// Removing the last element
fruits.pop();
console.log(fruits); // Output: ["apple", "pear", "banana", "grape"]

// Adding elements to the beginning
fruits.unshift("mango");
console.log(fruits); // Output: ["mango", "apple", "pear", "banana", "grape"]

// Removing the first element
fruits.shift();
console.log(fruits); // Output: ["apple", "pear", "banana", "grape"]
