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

* #### Lexical `this`
    Arrow functions do not have their own this. They inherit this from the enclosing context.


        function Person() {
        this.age = 0;

        setInterval(() => {
            this.age++; // `this` refers to the Person instance
        }, 1000);
        }
        const p = new Person();

* #### No arguments Object
    Arrow functions do not have their own arguments object. Use rest parameters instead.


        const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

* #### Not Suitable for Methods
    Arrow functions should not be used as methods because they do not have their own this.


        const obj = {
        value: 42,
        regularFunction: function() {
            console.log(this.value); // 42
        },
        arrowFunction: () => {
            console.log(this.value); // undefined
        }
        };

        obj.regularFunction();
        obj.arrowFunction();

* #### Cannot be Used as Constructors

    Arrow functions cannot be used as constructors and will throw an error when used with new.

        const Foo = () => {};
        const foo = new Foo(); // TypeError: Foo is not a constructor

* #### No prototype Property
    Arrow functions do not have a prototype property. 

        const foo = () => {};
        console.log(foo.prototype); // undefined