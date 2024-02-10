const playerName = "Sachin Ramesh Tendulkar";
console.log(playerName.charAt(7))           // find the character at index 7 => T
console.log(playerName.indexOf("T"))           // find the index of T => 7

const newString = playerName.substring(3,10)     //returns the substring from index 3 to index 10-1(=9)
console.log(newString)      // "hin Ram"

const anotherString = playerName.slice(-10,9)
console.log(anotherString)
