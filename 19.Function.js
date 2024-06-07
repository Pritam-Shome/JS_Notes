function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
//console.log(addTwoNumbers(5,6));




function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 //console.log(calculateCartPrice(200, 400, 500, 2000))//[ 500, 2000 ]




 const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


handleObject(user);


