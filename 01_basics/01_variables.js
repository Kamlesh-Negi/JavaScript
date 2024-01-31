// console.log("Hello this is my first Java Script Program")
// console.log(`we will learn about variables and data types`)

const accountId = 144553;
let accountEmail = "abc@google.com";
var accountPassword = "12345"; //now a days we prefer to use const or let instead var to overcome the problem of scope(block scope and functional scope)
accountCity = "Jaipur"; // though it is allowed to declare a variable like this but don't do this

console.log(`account Id: ${accountId}
account Email: ${accountEmail}
account Password: ${accountPassword}
accountCity: ${accountCity}`);


// changing the values

accountId = 2; // can not change the value and will show error because it is constant
accountEmail = "xyz@yahoo.com";     // can be changed because it is "let"
accountPassword = "678910";         // can be changed because it is "var"
accountCity = "Pune";               // cand be changed as no keyword is used

// console.log(`account Id: ${accountId}
// account Email: ${accountEmail}
// account Password: ${accountPassword}
// accountCity: ${accountCity}`);

console.table([accountId, accountEmail, accountPassword, accountCity]); //another method to print but in tabular form

let accountStates; // will show "undefined" because no value is assigned to it.

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountStates,
]);
