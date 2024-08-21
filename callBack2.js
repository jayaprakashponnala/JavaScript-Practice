// Write a function transformString that takes a string and a callback function. The callback should convert the string to uppercase and print it.

function transformString (callback,string){
    callback(string);
}
function upperCase(string){
    let result1= string.toUpperCase();
    console.log(result1);
    let result2= string.toLowerCase();
    console.log(result2);
}
transformString(upperCase,"jayapraksh");


// Create a function showResult that takes a number and a callback function. The callback should subtract 5 from the number and print the result.

 function showResult(number,callback){
     callback(number);
 }
 function sub(number){
     let result = number-5;
     console.log(result);
 }
 showResult(10,sub);
 
 


