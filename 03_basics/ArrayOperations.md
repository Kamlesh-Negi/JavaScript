## *Spread Operator[...]*

 Used to expand elements of an iterable (e.g., array, string) or object.

examples-

     1. Arrays:

     const array1 = [1, 2, 3];
     const array2 = [...array1, 4, 5];
     console.log(array2);             // Output: [1, 2, 3, 4, 5]

     2. Objects:

     const obj1 = { key1: 'value1' };
     const obj2 = { ...obj1, key2: 'value2' };
     console.log(obj2);              // Output: { key1: 'value1', key2: 'value2' }

     3. Functions:

     function exampleFunction(...args) {
    console.log(args);
    }
    exampleFunction(1, 2, 3);        // Output: [1, 2, 3]

# Rest Operator[...]

Used to collect multiple elements into a single variable, especially in funtion parameters.

        1. Function Parameters
        function sum(...numbers) {
            return numbers.reduce((acc, num) => acc + num, 0);
            }           
        console.log(sum(1, 2, 3, 4));                // Output: 10

        2. Destructuring

        const [first, second, ...rest] = [1,2,3,4,5];
        console.log(first);                           // Output: 1
        console.log(rest);                           // Output: [3,4,5]
        console.log(second);                        // Output: 2

        3. Object Destructuring:

        const {prop1, prop2, ...restProps} = {prop1: 'value1', prop2: 'value2', prop3: 'value3', prop4: 'value4' }
        console.log(prop1);                       // Output: 'value1'
        console.log(prop2);                      // Output: 'value2'
        console.log(restProps);                 // Output: ['value3', 'value4']



* Key Difference:

    Spread is often used for creating new arrays/objects or expanding elements, while rest is commonly used in function parameters or destructuring to collect elements into a single variable.