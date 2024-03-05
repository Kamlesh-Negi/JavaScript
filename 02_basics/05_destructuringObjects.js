const course = {
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Hitesh"
}

console.log("before destructuring:",course.courseInstructor)

// when we hve long variable names & it is difficult & annoying to write these everytime
// then we use 'destructuring' and we can give these long variables some short name
// we can use these short names now and it will results the same

const {courseInstructor: Instructor} = course       // destructruing
console.log("after destructuring:",Instructor)