// >, <, >=. <=, ==, !=

console.log(2>3)                // flase
console.log("2" > 1)            // true             JavaScript converts string into number


// make sure that data-types are same for comparing two variables

console.log(null > 0)           //false
//  console.log(null == 0)          //false
console.log(null <= 0)        // true
console.log(null < 0)        // false


// == equality check
// >, <, >=. <=   comparisons

// comparisons convert null to a number treating it as 0 that's why (null >= 0) is true and (null>0) is false

console.log(undefined == 0)     //  false
console.log(undefined > 0)      //  false
console.log(undefined < 0)      //  false


//strict check  ===   (it will check the value and its data-type)

console.log("2"==2)         // true  conversion takes place
console.log("2"===2)         // false no coversion because data types are different