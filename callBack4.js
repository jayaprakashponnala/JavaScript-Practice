// Write a function processStrings that takes an array of strings and a callback function. The callback should transform each string in the array (e.g., convert to uppercase or lowercase). The processStrings function should return a new array with the transformed strings.

function processStrings(arr, callback){
    callback(arr);
}
 const  arr=["JayaPrakash","Virat","Rohit","Selena","Tylor"];
 function methods(arr){
   let newArray1=[];
   let newArray2=[];
   for(let element of arr){
      newArray1=element.toUpperCase();
      console.log(newArray1);
   }
   console.log();
   for(let element of arr){
      newArray2=element.toLowerCase();
      console.log(newArray2);
   }
   
}
processStrings(arr,methods);