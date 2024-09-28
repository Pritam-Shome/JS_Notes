// stack --> is use in primitive
// heap --> is use in Non-primitive

let naam ="pritam"

let anothername = naam
anothername="tanay"

console.log(naam);
console.log(anothername);


let userOne={
    email: "pritamshome1@gmail.com",
    upi: "9612563635@ybl"
}

let userTwo = userOne;

userTwo.email="pritamshome2@gmail(changed).com"

console.log(userOne.email);
console.log(userTwo.email);
// if anything in object change then all other objct associated with it also change
// The interesting part here is that both
// userOne and userTwo point to the same object in memory.
// When you modify the email property of userTwo, it also affects userOne
// because they reference the same object. 
// So, both email addresses will be updated to the changed value.
