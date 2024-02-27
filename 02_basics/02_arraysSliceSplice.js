const myArr = [0,1,2,3,4,5]
console.log("A. myArr",myArr)

const myn1 = myArr.slice(1,3)
console.log("B. Slice (1,3)",myn1)
console.log("array after slice",myArr)

const myn2 = myArr.splice(1,3)
console.log("C. Splice (1,3)",myn2)
console.log("array after splice",myArr)