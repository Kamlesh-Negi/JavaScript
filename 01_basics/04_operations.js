let value = 3;
let negValue = - value;
console.log("negvalue = ", negValue)

console.log("2+8 = ",2+8);              // add
console.log("28-19= ", 28 - 19);        // subtract
console.log("25*8 = ",25*8);            //multiply
console.log("2**3 = ",2**3);            // power
console.log("4/13 = ",4/13);            //quotient  
console.log("2 % 8 = ",2%8);            // remainder

let str1 = "Hello"
let str2 = " World"                 // a space befor W
let str3 = str1 + str2              //  string concatenation
console.log("str3 = ",str3)         // Hello World

// some complex situtation(not prefered )

console.log("1"+2)                   // 12
console.log(1+"2")                   // 12
console.log("1"+2+2)                 // 122
console.log(1+2+"2")                 // 32 
console.log(3 + 4 * 5 % 3)           // 5       not prefered
console.log((3+4)*5%3)               // 2       prefered
console.log(true)                    // true
console.log(+true)                   // 1
//console.log(true+)                 // error
console.log(+"")                     // 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2           // can do but readeablitiy should be given more priority
console.log("num2= ",num2)          // 4

//Precedence Operator-- Prefix - Postfix
let gameCounter = 100
gameCounter++
console.log("gameCounter = ",gameCounter)       // 101

let gameCounter2 = 100
++gameCounter2
console.log("gameCounter2 = ",gameCounter2)       // 101
