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

userTwo.email="pritamshome2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

