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