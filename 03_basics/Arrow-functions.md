## Arrow functions
Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise way to write functions in JavaScript. Thye have a shorter syntax compared to traditional fucntion expressions and do not bind their own `this`, `arguments`, `super`, or `new.target`.

Basic Syntax:

    const functionName = (parameters) => {
        // function body
    };
    
_If there is only one parameter, the parentheses can be omitted:_

    const functionName = parameter => {
    // function body
    };

_If the function body contains only a single expression, the curly braces and return keyword can be omitted:_


    const functionName = (parameters) => expression;

Examples:

**Traditional Function**

    function add(a, b) {
    return a + b;
    }

**Arrow Function:**

    const add = (a, b) => a + b;