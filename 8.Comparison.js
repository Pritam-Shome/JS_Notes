// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


/*
console.log("2">1);//true
console.log("02">1);//true
-----these type of comparision is wrong
----we have to covert it into same datatype before comparison
we have to write clean code as a developer*/



/*
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

The reason is that an equality check == and comparison <,>,>=,<= works differntly

Comparisons convert null to a number (that is 0)
Thats why (3)null>=0 is true and (1)null>0 is false
*/




//===    ---> it check value as well as its datatype
console.log("2"==2);//true
console.log("2"===2);//false