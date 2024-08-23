// Write a function simplePromise() that returns a promise which resolves immediately with the value 42.

function simplePromise() {
    return Promise.resolve(42);
}
simplePromise().then((value) => {
    console.log(value); // 42
});


// Create a promise that rejects with the string "Error occurred!" and handle the rejection with .catch().
const  myPromise1 = Promise.reject("Error occurred!");
myPromise1.catch((string)=>{
    console.log(string);
})

// Write a function isPositive(number) that returns a promise that resolves if the number is positive and rejects if it's negative.
function isPositive(number){
    return new Promise((resolve,reject)=>{
        if(number>0){
            resolve("number is positive");
        }
        else {
            reject("number is negative");
        }
    });
}
isPositive(10)
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    
// Write a function getValue() that returns a resolved promise with the value "Hello" and logs the result using .then().

function getValue() {
    return new Promise((resolve)=>{
        resolve("Hello");
    })
};
getValue().then((message)=>{
    console.log(message)
})

 
// Create a promise that resolves with the value "Ready" and immediately logs it using .then().

const myPromise = new Promise((resolve)=>{
    resolve("Ready");
})
myPromise.then((message)=>{
    console.log(message);
})

// Write a function fetchData() that returns a rejected promise with the message "Data not found" and handles the rejection using .catch().

function fetchData(){
    return new Promise((resolve,reject)=>{
        reject("Data not found");
    })
};
fetchData().catch((error)=>{
    console.log(error);
})

