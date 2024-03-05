//  const instaUser = new Object()          // Singleton object

//  const instaUser = {}                    // non-singleton object

const instaUser = {};
// adding values to the object
instaUser.id = "123abc";
instaUser.name = "Sammy";
instaUser.isLoggedIn = false;

console.log(instaUser);

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