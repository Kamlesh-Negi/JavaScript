// JavaScript arrays

const myArr = [12, 15, 2, 69];
console.log(myArr);

const newArr = [12, 25, "Hello", true];
console.log(newArr);

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

//push() Vs concat()

const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];
marvel_heroes.push(dc_heroes);

console.log(marvel_heroes); // ['Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ]]

//concat()
const allHeroes = marvel_heroes.concat(dc_heroes);
console.log("concat allHeroes", marvel_heroes);

// spread()

const marvel_characters = ["Thor", "Ironman", "Spiderman"];
const dc_characters = ["Superman", "Flash", "Batman"];

const all_new_Heroes = [...marvel_characters, ...dc_characters];
console.log(all_new_Heroes); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// flat()

const another_array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [6, 7, [4, 5], 8, 9],
  [10, 11],
  12,
  13,
  [14, 15],
];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// sometimes we get data in different format like list, string, array or object. In that case, if we only want array data:
//  1. check if the data is array or not
console.log(Array.isArray("Kamlesh"));      // false

//  2. To convert into array
console.log(Array.from("Kamlesh"))         // ['K', 'a', 'm', 'l', 'e', 's', 'h']

// of()
let score1 = 100;
let score2 = 300;
let score3 = 500;
console.log(Array.of(score1,score2,score3))     // returns a new array from a set of elements -> [100,300,500]
