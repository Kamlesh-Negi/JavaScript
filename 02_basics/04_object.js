//  const instaUser = new Object()          // Singleton object

//  const instaUser = {}                    // non-singleton object

const instaUser = {};
// adding values to the object
instaUser.id = "123abc";
instaUser.name = "Sammy";
instaUser.isLoggedIn = false;

console.log(instaUser);

console.log("keys:",Object.keys(instaUser))     // getting keys of an object

console.log("values:",Object.values(instaUser)) // getting values of an object

console.log("entries: ",Object.entries(instaUser))  // Returns an array of key/values of the enumerable properties of an object

// checking if the object has the property we are trying to get
console.log(instaUser.hasOwnProperty('isLoggedIn'))                 // true
console.log(instaUser.hasOwnProperty('isLoggedOut'))                // false

// Object wihtin object

const regularUser = {
  email: "some@gmail.com",
  full_name: {
    userFullName: {
      first_name: "Kamlesh",
      last_name: "Negi",
    },
  },
};

// accessing values:
console.log("First name:", regularUser.full_name.userFullName.first_name);

// combining / merging objects

const objOne = { 1: "a", 2: "b" };
const objTwo = { 3: "c", 4: "d" };

const objThree = { objOne, objTwo }; // first approach
console.log(objThree);

const objFour = Object.assign(objOne, objTwo); // second approach, objOne -> target, obj -> source
console.log(objFour);

const objFive = Object.assign({}, objOne, objTwo); // good approach , {} -> optional parameter(target), objOne and objTwo are source
console.log(objFive); // Object.assign is a static method which copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const objSix = {...objOne, ...objTwo}    // more efficient way is using spread method as we used in array
console.log(objSix)

// when value is coming from database
 const users = [
   {
     id: 1, // index 0
     email: "Abc@example.com",
   },
   {
     id: 2, // index 0
     email: "Xyz@example.com",
   },
 ];

//to access the value

console.log(users[1].email)     // where users is array of objects having indicies starting from 0