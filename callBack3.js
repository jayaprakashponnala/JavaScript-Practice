// Create a function filterArray that takes an array of numbers and a callback function. The callback function should determine if a number should be included in the filtered array. The filterArray function should return a new array with only the numbers that pass the callback’s test.

 function filterArray(arr, callback){
     callback(arr);
 }
 const arr = [10,2,5,30,40,50];
 function condition(arr){
     for(let element of arr){
        let filterdArray = []
         if(element>5){
             filterdArray.push(element);
             console.log(filterdArray);
         }
        
     }
}
filterArray(arr,condition);

 
