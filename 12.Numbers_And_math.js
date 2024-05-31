// const score = 400
// console.log(score);


// const balance = new Number(100)
//  console.log(balance);
//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2));//--> 100.00(it increase the precision)



// const otherNumber=123.8966
// console.log(otherNumber.toPrecision(4));//123.8
// console.log(otherNumber.toPrecision(3));//123



// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//----> 10,00,000


///++++++++++++***+++++++++++++++

// console.log(Math.abs(-4)); //---> 4   //covert negative into positive
// console.log(Math.round(4.6));//---->5 //give a round of value
// console.log(Math.ceil(4.1));//--->5
// console.log(Math.floor(4.9));//--->4
// console.log(Math.min(4, 3, 6, 8));//3
//  console.log(Math.max(4, 3, 6, 8));//8


//--important--
//we want any value between 1 and 10
// console.log(Math.random());//it will any random value between 0 and 1
// console.log((Math.random()*10) + 1);//it will give value but it is in decimal
// console.log(Math.floor(Math.random()*10) + 1);//it give the int value between 1 and 10


///---important formula----
//to find any random number between max and min 
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)// it will random value between max and min
