const prompt = require("prompt-sync")();
// Difference between Sync And Async

// Sync Programming:
// Synchronous actions are those actions that are initiated and completed one-by-one.
// Example :

let a = prompt("What is Your Name? ")
let b = prompt("What is Your Age? ")
let c = prompt("What is your favourite colour? ")
console.log(a + " is " + b + " Years Old and his favourite color is " + c);

// A-synchronous Programming :
// A-sync actions are those actions that we initiate now and are completed later. e.g setTimeOut.
// Example :

console.log("Start");
setTimeout(function(){
    console.log("Set Time Out Initiated");
}, 3000);
console.log("End");

// Callback Function :
// A callback function is a function that is passed into another function as an argument, which is then invoked inside the outer function to complete the action 
// Example :

function loadScript(src, callback){
    let script = document.createElement("script")
    script.src = src;
    script.onload = function(){    // --> Showing Callback on load
        console.log("Your Script is loaded with SRC :" + src);
        callback(null, src);
    } 
    script.onerror = function(){        // --> Error Handling
        console.log("Error Loading Script with SRC : " + src);
        callback(new Error("Error loading SRC"))
    }
    document.body.appendChild(script);
}
function hello(error, src){     // ---> Callback Function
    if(error){
        console.log("Src got error");
    }
    alert("Hello World = " + src);

}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello)
