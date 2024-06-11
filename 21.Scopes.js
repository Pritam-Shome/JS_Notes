let a =10
const b =20
var c = 30


//{}----> scope

{
    let a =100
const b =200
var c = 300
}
///var will change (so var will not be used by programmer)

console.log(a);
console.log(b);
console.log(c);





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//error aiboh beacuse website is inside {}

     two()

}

 one()











 if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website);//error because website is initialized inside the --> if{}
}

// console.log(username);//error because username is initialized inside the --> if{}