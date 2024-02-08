let score = 33      

// const {score} = req.body               // sometimes we don't know the type of data because we are working at backend or the data is coming from some form
                                          // here we don't know the data-type of score as it is coming from frontend


 console.log(typeof score);         // number
 
 //another method
console.log("1. type of score is", typeof (score))        // number   

/** suppose you get a variable of string type but you only want to work with number type
 * then you have to convert it from string to number type.
 * 
 * majorly data-types started with capital letter
 */

let score1 = "33";
console.log("2. type of score1 is", typeof score1);                 // string

let valueInNumber = Number(score1)                          // converted to number
console.log("3. type of score1 is", typeof valueInNumber);          // number

let score2 = "33abc"
console.log("4. type of score2 beofre conversion is", typeof score2)
let valueInNumber2 = Number(score2);
console.log("5. type of score2 after converting is ", typeof valueInNumber2)         //number    -- but it's not a number because it have letters
console.log("6. value of valueInNumber2 ",valueInNumber2);                          // NaN (not a number)


let score3 = null;                                                                  // in case of undefined     //for string("score3")
let valueInNumber3 = Number(score3);                                                //        ↓                        ↓
console.log("7. type of score3 is", typeof score3);                 // object           undefined                   string
console.log("8. type of valueInNumber3", typeof valueInNumber3)     // number           number                      number
console.log("9. value of valueInNumber3", valueInNumber3)           // 0                NaN                         NaN    


/**After conversion the value other than 0 and "" will be true. For 0 and "" it will be false  */
let islogegdIn = "0"         // true after conversion
let islogegdOut = 0         // false after conversion
let booleanIsLoggedIn = Boolean(islogegdIn);            // converetd into Boolean
let booleanIsLoggedOut = Boolean(islogegdOut);            // converetd into Boolean
console.log(`10. after conversion: isoggedIn => ${booleanIsLoggedIn}, isLoggedOut => ${booleanIsLoggedOut}`);


let someNumber = 33
let stringNumber = String(someNumber)
console.log(`11. stringNumber =${stringNumber}, type of stringNumber=> ${typeof stringNumber}`)             //  33 , string