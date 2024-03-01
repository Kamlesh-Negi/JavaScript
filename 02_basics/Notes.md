## Arrays
* Dynamic Typing: JavaScript arrays can hold elements of different data types within the same array.
    ```
    const newArr = [12,25,"Hello",true]
    ```
* Array indices starts from 0

* Dynamic Size: Arrays in JavaScript are dynamic, meaning you can change their size by adding or removing elements.

* High-Level Language: JavaScript is a high-level scripting language designed for web development.

* Array Methods: JavaScript provides built-in array methods such as push(), pop(), shift(), and unshift() for easy manipulation

## Operations on Arrays
**1. slice (start, end)**: 
* It will return an array from the values at the index `start` to `end-1`
* It will not manipulate the original array
```
const myArray = [0,1,2,3,4,5]
const arraySlice = myArray.slice(1,3)

O/P: [1,2]
     myArray = [0,1,2,3,4,5]
```
**2. splice (start, end)**: 
* It will return an array from the values at the index `start` to `end`
* It will manipulate the original array by removing the values of these indices
```
const myArray = [0,1,2,3,4,5]
const arraySlice = myArray.slice(1,3)
O/P: [1,2,3]
     myArray = [0,4,5]
```
**3. push ()**:
* The push() method is used to add one or more elements to the end of an array.
* It modifies the original array by adding the specified elements as individual elements, not as a new array.
* If you push an array as an element using push(), it becomes a single element in the target array.

**4. concat()**:
* The concat() method is used to concatenate arrays or values and create a new array. 
* It does not modify the original arrays; instead, it returns a new array that contains elements from the original arrays.
* If an array is passed as an argument to concat(), its elements are added individually to the new array.

**5. spread()**:
* It is a now preferable to use this spread(...) method than concat because we can only give one value in concat but in spread we can add many values just by putting three dots(...) and the value(i.e., array name)