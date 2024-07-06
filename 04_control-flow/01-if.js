// example 1
if(2 == '2')
{
    console.log('executed') //== loosely check the values so both the statements will be executed
}
console.log("double equals")

// example 2
if(2 === '2'){
    console.log('executed') //    will not be executed as triple equals strictly checking the values.[one is number and other is string]
}
console.log("triple equals")    // only this line will be executed

// example 3
const score = 200
if(score > 100){
    let power = "fly"
    console.log(`user power: ${power}`)
}
console.log(`user power: ${power}`) //power is not defined as we are trying to access the power variable which is defined inside the if block.