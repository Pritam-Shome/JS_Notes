// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }///output---> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 //const obj3 = Object.assign({}, obj1, obj2, obj4)///{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//const obj3 = {...obj1, ...obj2}////{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);




const user =[   ///array of object
    {
        id: 1,
        email: "pritamshome1@gmail.com"
    },
    {
        id: 1,
        email: "pritamshome1@gmail.com"
    },
    {
        id: 1,
        email: "pritamshome1@gmail.com"
    }
]

//console.log(user[1].email);



//aagain come to tinder user

 console.log(tinderUser);

 //console.log(Object.keys(tinderUser));
 //console.log(Object.values(tinderUser));
 //console.log(Object.entries(tinderUser));//[key,values] as a array

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));// it return boolean value//that the given is a key or not



 