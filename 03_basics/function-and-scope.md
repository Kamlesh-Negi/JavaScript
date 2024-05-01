# Functions
A JavaScript function is a fundamental building block that allows you to encapsulates a set of statements to perform a specific task or calculate a value.

1.  Function definition :
    *  A JavaScript function is defined using the `function` keyword, followed by a name and parentheses. 
    * function name can contain letters, digits, underscores, and dollar signs (similar to variable names).
    * Parameters (input values) are listed inside the parentheses `()`, separated by commas.
    * The code to be executed by the function is enclosed within curly braces `{}`
    
    ```
         function functionName(parameters) {
            // code block
        }
    ```    
   

2. Function Invocation:
    * A function is executed when “something” invokes (calls) it.
    * Invocation can occur in various ways:
        * When an event happens (e.g., a user clicks a button).
        * Explicitly from JavaScript code.
        * Automatically (self-invoked).

    ```
    functionName(arguments);    
    ```
3. Function Return:
    * When a JavaScript function reaches a return statement, it stops executing.
    * If the function was invoked from a statement, JavaScript continues executing the code after the invoking statement.
    * Functions often compute a return value, which is sent back to the caller.

    ```
    function functionName() {
    return value;
    }
    ```
##### NOTE : Remember that accessing a function without parentheses (()) refers to the function object itself, while using parentheses invokes the function and returns its result