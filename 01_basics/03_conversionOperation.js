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
let valueInNumber2 = Number(score2);
console.log("4. type of score2 after converting is ", typeof valueInNumber2)         //number    -- but it's not a number because it have letters
console.log("5. value of valueInNumber2 ",valueInNumber2);                          // NaN (not a number)


let score3 = null;                                                                  // in case of undefined
let valueInNumber3 = Number(score3);                                              //    ↓
console.log("6. type of score3 is", typeof score3);                 // object       undefined
console.log("7. type of valueInNumber3", typeof valueInNumber3)     // number       number
console.log("8. value of valueInNumber3", valueInNumber3)           // 0            NaN

