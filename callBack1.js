// Write a function execute that takes a number and a callback function. The callback should check if the number is even or odd and print a message.

function execute(callback, number){
    return callback(number);
    
}
function check(number){
    if (number%2==0){
        console.log(number+" is even");
    }
    else {
        console.log(number+ " is odd");        
    }
}

execute(check,21);
execute(check,20);