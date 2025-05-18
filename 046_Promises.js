// Promise :
// The SOlution to callback hell is promises. A Promise is "a promise of code execution". The code either executes or fails. In both cases, the user will be notified.

// Callbacks Provided By Promises :
// Callsbacks provided by promises are resolve() and reject().

// Properties of Promises :
// The Properties of Promises are "state" and "result".

console.log("Hello One!");

let promise = new Promise(function(resolve,reject){
    console.log("Promise is invoked.");
    resolve(56)
})

setTimeout(function(){
    console.log("Hello Two!");
}, 2000);
console.log("Hello Three!");
console.log(promise);