

 //let myDate = new Date()
 // console.log(myDate.toString()); /*Fri May 31 2024 19:26:38 GMT+0530 *////current time diboh
//  console.log(myDate.toDateString());//Fri May 31 2024
//  console.log(myDate.toLocaleString());//31/5/2024, 7:26:38 pm
//  console.log(typeof myDate);//object




//let myCreatedDate = new Date(2023, 0, 23)// (year,month,day)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)// (year,month,day,hour,min)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")//mm-dd-yy
//console.log(myCreatedDate.toLocaleString());





let myTimeStamp = Date.now()

// console.log(myTimeStamp);//it give large int value as a time of the present time
 //console.log(myCreatedDate.getTime());//it give large int value as a time of the given time
 //console.log(Math.floor(Date.now()/1000));//it give large int value as a time of the present time in seconds




let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1);//+1 because .getmonth start from 0
//console.log(newDate.getDay());//it return week day number//+1 because .getday start from 0




//-- important---
newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate.toLocaleString('default', {
    calendar: "long"
    
}));