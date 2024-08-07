const balance = 1000;
if(balance < 500){
    console.log("balance is less than 500")
}else if(balance < 750)
{
    console.log("balance is less than 750")
}else if(balance < 900){
    console.log("balance is less than 900")
}else{
    console.log("less than 1200")
}

// example 2

const userLoggedIn = true;
const debitCard = false;

if(userLoggedIn && debitCard){
    console.log("Allow to buy items")
}else{
    console.log("unable to get debit card details")
}