// example 1:
const addTwo = (num1, num2) => { return num1 + num2 }
console.log(addTwo(33,36))

// implicit return : no need to write return as it is a single line expression

const addTwoAgain = (num1, num2) => num1 + num2;
console.log(addTwoAgain(33, 36));

/* Note: 1. we must use `return` keyword when we use curly braces {} after arrow => 
2. we do not write return keyword if we are not using {}
    */

// example 2:

const add2number = (num1, num2) =>  (num1 + num2)
console.log(add2number(33,36))

// the example below shows the use of paranthesis (). We write code as in example 2 if we want to return an object

const add = (num1, num2) => {username : "Kamlesh"}
console.log(add(45,54))

// do this
const add2num = (num1, num2) => ({
  sum: num1 + num2,
  username: "Kamlesh",
});
console.log(add2num(45, 54));