// let a = 10
// const b = 20
// var c = 30
// console.log(a)  // 10 
// console.log(b)  // 20
// console.log(c)  // 30
/** upon commenting out above code and executing only the below code */
if(true){
   // let a = 10
    const b = 20
    var c = 30
}

//console.log(a)      // a is not defined
//console.log(b)     // b is not defined  
console.log(c)      // 30 ?? because var does not act as a block-scope    

// Example 2:

var z = 300;
if(true)
{
    let x = 10
    const y = 20
    var z = 30      // or x = 30 "without using var here" 
}
//console.log(x)
//console.log(y)
console.log(z)


// Example 3:

let p = 300
if(true){
    let p = 10;
}
console.log("Example 3: p= ",p) // 300 because we are accessing it oustide the block scope

// Example 4:

let q = 300
if (true) {
    let q = 10
    console.log("Inner q ",q)    // 10 inside block scope
}
console.log("Outer q", q)       // 300 outside block scope
