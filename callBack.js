 function performCalculation(arr, callback){
    return callback (arr) ;
    
}
function sum(arr){
    let sum =0;
    for(let element of arr){
         sum = sum+element
    }
    console.log(sum);
}
function sub(arr){
    let sub=0;
    for(let element of arr){
       sub = sub-element
    }
    console.log(sub);
}
function max(arr){
    let max=0;
    max=Math.max(...arr)
    console.log(max);
}
const arr=[1,2,3,4,5]
performCalculation(arr, sub);
performCalculation(arr, sum);
performCalculation(arr, max);









