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

