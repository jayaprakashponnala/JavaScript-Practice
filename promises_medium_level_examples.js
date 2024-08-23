// Create a function delayedSum(a, b) that returns a promise. The promise should resolve with the sum of a and b after a delay of 3 seconds.

function delayedSum(a, b){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(a+b);
        },3000)
    })
};

delayedSum(10,20).then((message)=>{
    console.log(message);
})

// Write a function fetchUserData(userId) that returns a promise which simulates fetching user data from an API. If userId is 1, resolve with { name: "Alice" }; otherwise, reject with "User not found".

function fetchUserData(userId){
    return new Promise((resolve,reject)=>{
        if(userId==1){
            resolve({ name: "Alice" });
        }
        else{
            reject("User not found");
        }
    })
};
fetchUserData(1)
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
   