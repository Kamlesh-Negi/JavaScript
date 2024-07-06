 JavaScript operators are used to perform operations on variables and values. They can be categorized into several types based on their functionality. Here are the main types of operators in JavaScript:

 ### 1. Arithmetic Operators

 These operators perform basic mathematical operations.

   * Addition (+): Adds two operands.

            let a = 5;
            let b = 3;
            console.log(a + b); // 8

   * Subtraction (-): Subtracts the second operand from the first.

          console.log(a - b); // 2

   * Multiplication (*): Multiplies two operands.

          console.log(a * b); // 15

   * Division (/): Divides the first operand by the second.

          console.log(a / b); // 1.6666666666666667

   * Modulus (%): Returns the remainder of the division.

          console.log(a % b); // 2

   * Exponentiation (**): Raises the first operand to the power of the second.

          console.log(a ** b); // 125

   * Increment (++): Increases an integer value by one.

          a++;
          console.log(a); // 6

   * Decrement (--): Decreases an integer value by one.

          b--;
          console.log(b); // 2

### 2. Assignment Operators
These operators assign values to variables.  

*  Assignment (=): Assigns the right operand's value to the left operand.

       
       let x = 10;

* Addition Assignment (+=): Adds the right operand to the left operand and assigns the result to the left operand.

       x += 5; // x = x + 5
       console.log(x); // 15

* Subtraction Assignment (-=): Subtracts the right operand from the left operand and assigns the result to the left operand.

       x -= 3; // x = x - 3
       console.log(x); // 12

* Multiplication Assignment (*=): Multiplies the left operand by the right operand and assigns the result to the left operand.

       x *= 2; // x = x * 2
       console.log(x); // 24
* Division Assignment (/=): Divides the left operand by the right operand and assigns the result to the left operand.

       x /= 4; // x = x / 4
       console.log(x); // 6
* Modulus Assignment (%=): Takes the modulus using the two operands and assigns the result to the left operand.

       x %= 5; // x = x % 5
       console.log(x); // 1

### 3. Comparison Operators
These operators compare two values and return a boolean result.

* Equal (==): Checks if the values of two operands are equal.

       console.log(5 == '5'); // true

* Strict Equal (===): Checks if the values and types of two operands are equal.

       console.log(5 === '5'); // false

* Not Equal (!=): Checks if the values of two operands are not equal.

       console.log(5 != '5'); // false

* Strict Not Equal (!==): Checks if the values and types of two operands are not equal.

       console.log(5 !== '5'); // true

* Greater Than (>): Checks if the left operand is greater than the right operand.

       console.log(5 > 3); // true

* Less Than (<): Checks if the left operand is less than the right operand.

       console.log(5 < 3); // false

* Greater Than or Equal (>=): Checks if the left operand is greater than or equal to the right operand.

       console.log(5 >= 5); // true

* Less Than or Equal (<=): Checks if the left operand is less than or equal to the right operand.

       console.log(5 <= 3); // false       

### 4. Logical Operators
These operators are used to perform logical operations.

* Logical AND (&&): Returns true if both operands are true.

       console.log(true && false); // false

* Logical OR (||): Returns true if at least one of the operands is true.

       console.log(true || false); // true

* Logical NOT (!): Returns true if the operand is false.

       console.log(!true); // false


### 5. Bitwise Operators
Bitwise operators perform bitwise operations on operands.

* AND (&): Performs a bitwise AND.

       console.log(5 & 1); // 1 (0101 & 0001 = 0001)

* OR (|): Performs a bitwise OR.

      console.log(5 | 1); // 5 (0101 | 0001 = 0101)

* NOT (~): Performs a bitwise NOT.

      console.log(~5); // -6 (~0101 = 1010 + 1 = 1011, two's complement)

* XOR (^): Performs a bitwise XOR.

      console.log(5 ^ 1); // 4 (0101 ^ 0001 = 0100)

* Left Shift (<<): Shifts bits to the left.

      console.log(5 << 1); // 10 (0101 << 1 = 1010)

* Right Shift (>>): Shifts bits to the right.

      console.log(5 >> 1); // 2 (0101 >> 1 = 0010)

* Zero-Fill Right Shift (>>>): Shifts bits to the right with zero fill.

      console.log(5 >>> 1); // 2 (0101 >>> 1 = 0010)

### 6. String Operators
String operators are used to manipulate strings.

* Concatenation (+): Concatenates two strings.

       let str1 = "Hello ";
       let str2 = "World!";
       console.log(str1 + str2); // "Hello World!"

* Concatenation Assignment (+=): Adds the right operand to the left operand and assigns the result to the left operand.

       str1 += str2; // str1 = str1 + str2
       console.log(str1); // "Hello World!"

 ### 7. Other Operators

* Conditional (Ternary) Operator (? :): Assigns a value based on a condition.

       let age = 18;
       let canVote = (age >= 18) ? "Yes" : "No";
       console.log(canVote); // "Yes"

* Comma Operator (,): Evaluates multiple expressions and returns the value of the last expression.

       let x = (1, 2, 3);
       console.log(x); // 3

* Typeof Operator (typeof): Returns the type of a variable.

       console.log(typeof "Hello"); // "string"

* Instanceof Operator (instanceof): Checks if an object is an instance of a specific class or constructor.

       let arr = [];
       console.log(arr instanceof Array); // true      


**Spread and Rest Operators :**
The spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected. The rest operator collects multiple elements and condenses them into a single element.

* Spread (...): Expands an array or object.


       let arr1 = [1, 2, 3];
       let arr2 = [...arr1, 4, 5];
       console.log(arr2); // [1, 2, 3, 4, 5]

       let obj1 = {a: 1, b: 2};
       let obj2 = {...obj1, c: 3};
       console.log(obj2); // {a: 1, b: 2, c: 3}

* Rest (...): Collects all remaining elements into an array.

       function sum(...args) {
       return args.reduce((acc, val) => acc + val, 0);
       }
       console.log(sum(1, 2, 3)); // 6

**Destructuring Assignment :**
Destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables.

* Array Destructuring

       let arr = [1, 2, 3];
       let [a, b, c] = arr;
       console.log(a, b, c); // 1 2 3

* Object Destructuring

       let obj = {name: 'John', age: 30};
       let {name, age} = obj;
       console.log(name, age); // "John" 30

**Optional Chaining Operator :**
The optional chaining operator (?.) allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is valid.

* Optional Chaining (?.)

       let user = {address: {street: '123 Main St'}};
       console.log(user?.address?.street); // "123 Main St"
       console.log(user?.address?.city);   // undefined

**Nullish Coalescing Operator :** 
The nullish coalescing operator (??) provides a way to handle default values. It returns the right-hand operand when the left-hand operand is null or undefined.

* Nullish Coalescing (??)

       let user;
       console.log(user ?? 'Guest'); // "Guest"

       user = 'John';
       console.log(user ?? 'Guest'); // "John"

**Grouping Operator:** The grouping operator (()) controls the precedence of evaluation in expressions.
       
* Grouping (())

              let a = 1, b = 2, c = 3;
              console.log(a + b * c);  // 7
              console.log((a + b) * c); // 9       