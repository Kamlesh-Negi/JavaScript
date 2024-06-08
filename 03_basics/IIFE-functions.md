## IIFE functions
* IIFE stands for Immediately Invoked FUnction Expression.
* It is a JavaScript function that runs as soon as it is defined.
* IIFEs are useful for a variety of reasons, including creating private scopes to avoid polluting the golobal scope and initializing code that needs to run once.
* *Think of it like writing a recipe and then immediately cooking it as soon as you're done writing.*

### Why use an IIFE ?
**1. Avoid Global Variables:**  
    * In JavaScript, if you create variables in the global scope, they can cause problems because they might conflict with other variables.
    * An IIFE helps keep your variables and functions private and prevents them from messing with other code as they cannot be accessed from outside.

 **2. Run Code Immediately:**
    * Sometimes you need to run some code right away. An IIFE lets you do that.   

##### Basic Structure:

        (function() {
            console.log("This is an IIFE")
        })();    

**1. Function Definition:**  
* `(function() { ... })` : This part defines a function. It's wrapped in parantheses to tell JavaScript that this is a function expression, not a function declaration.

**2. Immediate Invocation:** 
 * `()` : This part immediately calls the function right after it's defined.

#### Example with Explanation

Let's say you want to log a message to the console as soon as the page loads:

    (function() {
        console.log('Page has loaded!');
    }) ();

*when the browser reads this code, it defines the function and runs it immediatelyl, so you see "Page has loaded!" in the console right away.*    

##### Example 2: IIFE with Parameters

You can pass parameters to an IIFE to make it more flexible.

    (function(name) {
        console.log('Hello, ' + name +'!');
    })('Kamlesh');

    // Output - `Hello, Kamlesh!`

### Real World Examples :
#### 1. DOM Manipulation on Page Load:

        (function() {
            const element = document.getElementById('myElement');
            element.style.color = 'red';
        })();

#### 2. Configuration Setup:

        const appConfig = (function() {
            const config = {
                apiKey: '123456',
                apiUrl: 'https://api.example.com'
            };

            return {
                getConfig: function() {
                    return config;
                }
            };
        })();

        console.log(appConfig.getConfig());

#### 3. Library Creation:
When creating libraries or frameworks, IIFEs help encapsulate the code and expose only the necessary parts.

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

### Best Practice :
To ensure there are no issues regardless of the context in which the IIFE is used, it's best to always prepend the IIFE with a semicolon:

     ;(function() {
        console.log('IIFE executed safely!');
    })();    