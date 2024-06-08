// Syntax of IIFE function
(function(){
    console.log("Your Page has loaded!");
})();

// example : Using IIFE to keep Variables Private

(function(){
    let counter = 0;            // this variable is private and can't be accessed outside

    function increaseCounter(){
        counter++;
        console.log("Counter: ",counter)
    }
    increaseCounter();
    increaseCounter();
})();

// Real-world Example: Imagine you have two scripts on your webpage, and both use a variable called 'count'. If you don't use IIFE, they might interfere with each other:
/*
//Script-1
let count = 0;
count++;
console.log(count); // 1

// Script-2
 let count = 10;
 count++;
 console.log(count)

 // This causes confusion
 */

 // with IIFE
 // Script 1
(function() {
    let count = 0;
    count++;
    console.log("Script-1",count); // 1
})();

// Script 2
(function() {
    let count = 10;
    count++;
    console.log("Script-2",count); // 11
})();


// IIFE with Parameters

 (function (name) {
   console.log("Hello, " + name + "!");
 })("Kamlesh");

 // Creating Private Varibles:

 const counterModule = (function(){
    let counter = 0;

    return {
        increment : function() {
            counter++;
            console.log('Counter:', counter);
        },
    reset : function(){
        counter = 0;
        console.log('Counter reset to:', counter);
    }
    };
 })();
 counterModule.increment();
 counterModule.increment();
 counterModule.reset();
console.log(typeof counter);

// configuration Setup:

const appConfig = (function () {
  const config = {
    apiKey: "123456",
    apiUrl: "https://api.example.com",
  };

  return {
    getConfig: function () {
      return config;
    },
  };
})();

console.log(appConfig.getConfig());

// Library Creation

const myLibrary = (function() {
    function privateFunction() {
        console.log('This is private');
    }

    function publicFunction() {
        console.log('This is public');
    }

    return {
        publicFunction: publicFunction
    };
})();

myLibrary.publicFunction(); // Output: This is public
// myLibrary.privateFunction(); // Error: myLibrary.privateFunction is not a function

