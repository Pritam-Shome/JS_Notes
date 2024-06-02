//array

 const myArr =[0,2,3,4,5,6,7,"pritam"]

// console.log(myArr[7]);

 const a2 = new Array(1,2,34,5,5,70)
// console.log(a2[5]);


//array methods


// myArr.push(6)//it will add the element in the last
// myArr.push(7)
// myArr.pop()// it will delete the last element 

// myArr.unshift(9)//it will add the element in the first
// myArr.shift()//it will delete the element in the first

// console.log(myArr.includes(9));//it will tell if the element is present or not
// console.log(myArr.indexOf(3));//if the element is not present it will print -1

// const newArr = myArr.join()//it will convert myArr in string and store in newArr

// console.log(myArr);
//console.log(typeof newArr);



//slice,splice

console.log("A ",myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)//last er tah include thake and er parent array er thikah oi subject ti remove hoya jai
console.log(myn2);
console.log("C ",myArr);