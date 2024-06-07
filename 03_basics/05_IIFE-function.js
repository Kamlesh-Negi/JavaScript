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