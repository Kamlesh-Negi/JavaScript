const score = 400
console.log("type of score:",typeof score)

console.log(score.toString())
console.log("type of score after conversion ",typeof score)

console.log("precise value upto two decimal places", score.toFixed(2))

const num = 23.48956
console.log("toPrecision", num.toPrecision(4) )         // toPrecision(no. of significant digit) must in b/w 1 to 21 both inclusive

const hundreds = 1000000000
console.log("hundreds in default locale string",hundreds.toLocaleString())          // 1,000,000,000 (international standard)
console.log("hundreds in Indian locale string",hundreds.toLocaleString("en-IN"))    // 1,00,00,00,000 (Indian standard)

// * ================================================Math=====================================

console.log(Math)           // Object [Math] {}

console.log(Math.abs(-4))       // absolute value,  |-4| = 4
console.log(Math.round(4.6))    // round-off to 5
console.log(Math.ceil(4.2))     // return the smallest integer which is greater than or equal to its numberic argument(here 4.2)=> 5
console.log(Math.floor(4.2))     // return the largest integer which is less than or equal to its numberic argument(here 4.2)=> 4


console.log("minimum number:",Math.min(12,-45,26,0))
console.log("maximum number:",Math.max(12,-45,26,0))

console.log(Math.random())  // will show any random number between 0(inclusive) and 1(exclusive)

console.log(Math.random()*10)   // to get the random number(in decimals) between 0 and 10, (both exclusive)

console.log((Math.random()*10)+1)   // to get the random number(in decimals) between 0 and 10, (both exclusive)

// using floor method to get a lower value i.e a whole number
console.log("random method in floor",Math.floor(Math.random()*10)+1)


// to get a random value between the range of min and max and the value must not be less than the min value
const min = 10
const max = 20
console.log(Math.random()*(max - min + 1) + min)