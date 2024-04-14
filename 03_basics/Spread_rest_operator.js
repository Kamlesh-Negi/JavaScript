function addNumbers(a, b, c){
return a+b+c;
}
const result = addNumbers(3,8,9);
console.log("sum = ",result);

// what if we don't know the size of array or parameter

function addNumbers1(a,b,c){
    console.log(arguments)
    return a+b+c+arguments[4];   //in ES5 we have arguments which gives all the parameters passed in the funtion
                                //and we can perform operations using the index of these params.
 }
const sum1 = addNumbers1(3,8,9,7,6)
console.log("sum1 = ",sum1 )

//? using Rest operator--> it combines the param passed and makes an array of those extra parameters

function addNumbers2(a,b,c,...other){
    console.log(other)
    return a + b + c +other[2];
}
const sum2 = addNumbers2(3,8,9,5,7,6)
console.log("sum2 = ", sum2);

// ? using Spread operator[...] --> (should only be three dots) it will spread all the parameters

const names = ["Kamlesh","Abhishek","Himanshu","Ankit","Alok"]

function getNames(name0,name1,name2,name3){
    console.log(name0, name3, name1, name2)
  //  console.log(...names)
    
}
getNames(names[0],names[1],names[2])        // 1st method --- getting through index
getNames(...names)  // 2nd method (new in ES6)--- spread[...] 
getNames(names)     // 3rd method --- names is passed as an array and will be shown in array format on console

// Rest operator in Objects

const students = {
    name: "Aron",
    age: "28",
    hobbies: ["singing","badminton"]
}

const ages = students.age;
console.log("ages = ",ages);
// const {age,name} = students;                     // array destructuring
// console.log(`age = ${age}, name is ${name}`);

const {age,...other} = students         // using Rest
console.log(other);

//Spread operator

const newStudent ={
    ...students ,            // accessing the values of one object in another object
    age:  "24"                    // updating or overriding the age
}
console.log(newStudent)
