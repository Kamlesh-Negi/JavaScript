// function declaration:

// 1st : without parameters
function myName(){
    return "My name is Kamlesh";
}
console.log(myName())               // funtion call

// 2nd : with parameters
function myname(name){
    return "Hello "+name+"!";
}

console.log(myname("Kamlesh"))

// add two numbers

function addTwoNumbers(num1, num2){
    console.log(`sum of ${num1} and ${num2} is ${num1+num2}`)
}
addTwoNumbers(45,56);

function addTwoNos(num1, num2){
    console.log("sum = ",num1+num2)                 // sum = 8
}
addTwoNos(3,5)      
const result = addTwoNos(3,5)
console.log("result",result)                // result undefined ?? because console only prints and does not returns anything

// to make it workwe will return in the function
function addTwoNos(num1, num2) {
  return "sum = "+(num1 + num2); // sum = 8
}

const newResult = addTwoNos(3, 5);
console.log("NewResult", newResult);

// passing arguments

function loginUserMessage(username){
    return `${username} just logged in!`
}
loginUserMessage("Kamlesh")     // will not show anything b/c it only returns the value, we have to console it to print
console.log(loginUserMessage("Kamlesh"))        
console.log(loginUserMessage("Kamlesh"))        // "undefined  just logged in!"--> if we don't pass any argument

function loginUserMsg(username){
    if(username===undefined){
        console.log("Please enter a username")
    }
    return `${username} just logged in!`;
}
console.log(loginUserMsg("Kamlesh Negi"));

// default pararmeter: if nothing is provided then the default parameter will be used
function loginUserMsgTwo(username ="Vikas"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in !`
}
console.log(loginUserMsgTwo())                  // will use the default parameter
console.log(loginUserMsgTwo("Animesh"))             // will override the default parameter


