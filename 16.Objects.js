// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//symbol//[]---> for symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 //console.log(JsUser.email)
 //console.log(JsUser["email"])
 //console.log(JsUser["full name"])
 //console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//noone can change the value //and also nonone can add anything in the object
//console.log(JsUser.email);

JsUser.email = "hitesh@microsoft.com"// not change because of freeze
 //console.log(JsUser.email);




JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());