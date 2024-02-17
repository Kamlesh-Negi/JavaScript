const playerName = "Sachin Ramesh Tendulkar";
console.log(playerName.charAt(7))           // find the character at index 7 => R
console.log(playerName.charCodeAt(7))         // returns the Unicode of the character at a specified index 7 => R => 82
console.log(playerName.indexOf("T"))           // find the index of T => 14

const newString = playerName.substring(3,10)     //returns the substring from index 3 to index 10-1(=9)
console.log(newString)      // "hin Ram"

//console.log(newString.substr(3,10))

const anotherString = playerName.slice(-10,9)       // slice
console.log(anotherString)

const playerTwo = "    Sunil Chetri   "
console.log(playerTwo.trim())               // removes trailing whitespaces

console.log(playerTwo.toLocaleLowerCase())          // similar to toLowerCase() but it will convert to Lower case according to host environment current locale
console.log(playerTwo.toLocaleUpperCase())          // similar to toUpperCase() but it will convert to Upper case according to host environment current locale

const msg = "Hello, World!"
console.log(msg.replace("World", "Universe")) // first param is old value to be replaced, second param is the new value

console.log(msg.includes("!"))      // true
console.log(msg.startsWith("Hello"))    // true
console.log(msg.endsWith("World"))          // false
console.log(msg.lastIndexOf("o"))          


console.log(playerName.split(" ",1))        // returns the an array of substring upto the given limit

const arr = ["David","lives","in","USA"]
console.log(arr.join(" "))                      // joins the elements of an array into a string