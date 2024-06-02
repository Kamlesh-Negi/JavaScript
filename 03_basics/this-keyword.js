//'use strict';
const user = {
  username: "Kamlesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to our website`);
    console.log(this);
  },
};
user.welcomeMessage();

user.username = "Sam";
user.welcomeMessage();

// example: using 'this' inside a function

function code() {
  console.log(this);
}
code();

// example

function codeTwo(){
    let username = "Himanshu"
    console.log(this.username)
}
codeTwo()