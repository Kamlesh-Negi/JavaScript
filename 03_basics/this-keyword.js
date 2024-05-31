const user = {
    username : "Kamlesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to our website`)
        console.log(this)
    }
}
user.welcomeMessage()

user.username = "Sam"
user.welcomeMessage()
