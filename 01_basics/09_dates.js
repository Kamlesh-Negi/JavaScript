let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());

console.log(typeof myDate); // object

// to declare a specific date

let mycreatedDate = new Date(2024, 0, 21); // month starts form 0(January) to 11(December)
console.log(mycreatedDate);
console.log(mycreatedDate.toString());
console.log(mycreatedDate.toLocaleString());

let newDate = new Date(2024, 0, 21, 5, 3, 26); // (YYYY,MM,DD,Hr,Min,Sec)
console.log(newDate.toString());

let new_Date = new Date("2024-02-21"); // must be in this order only otherwise Invalid Date will be printed
console.log(new_Date.toLocaleString());

let myTimeStamp = Date.now();       // returns the current timestamp in milliseconds
console.log(myTimeStamp); 
console.log(mycreatedDate.getTime());

console.log(Date.now() / 1000); // will get date in seconds but in decimal

console.log(Math.floor(Date.now() / 1000)); // will get date in seconds without decimal

// To know specific things in a date like dau, months etc

let findDate = new Date();
console.log("Year-", findDate.getFullYear());
console.log("Month-", findDate.getMonth()); // to get the month form 0 to 11
console.log("Month-", findDate.getMonth() + 1); // to get the month from 1 to 12
console.log("Date-", findDate.getDate()); // to get the month from 1 to 12
console.log("Hours-", findDate.getHours());
console.log("Minutes-", findDate.getMinutes());

console.log(
  findDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
);

// Getting the current date
const currentDate = new Date();

// Adding 2 days to the current date
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 2);

// Subtracting 1 hour from the current time
const pastTime = new Date(currentDate);
pastTime.setHours(currentDate.getHours() - 1);

console.log("Current Date:", currentDate);
console.log("Future Date (2 days later):", futureDate.toLocaleString());
console.log("Past Time (1 hour earlier):", pastTime.toLocaleString());
