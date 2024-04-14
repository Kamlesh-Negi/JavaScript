/**  CASE: If we don't know the number of parameters to pass then we will use REST Operator(...)
for example: when a user keep adding the products on cart and the want the total price */


// only one product
function CalculateCartPrice(num1){  
    return num1
}
console.log(`Total price is ${CalculateCartPrice(200)}`)

// more than one product
function CalculateCartPrice(... num1){  
    return num1
}
console.log(`Total price is ${CalculateCartPrice(200,400,656)}`)            // all prices will be placed in an array, we can use loops to calculate the total price

// Passing Object as a Parameter

const user = {
    username : "Kamlesh",
    rollNo : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and roll No. is ${anyObject.rollNo}`)
}
//handleObject(user)              // calling the function


// can also pass the object like this:
handleObject ({
    username : "Sam",
    rollNo : 500
})


// Passing Arrays as a Parameter

// e.g. accept and retrun the second element of array
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))  // here we passed the variable

console.log(returnSecondValue([200,400,100,600]))       // here we directly passed the array