// Common JS Modules :

// const hello=()=>{
//     console.log("Hello Mani");
// }
// const ahello=(name)=>{
//     console.log("Hello " + name);
// }
// // To Export :

// module.export = {hello, ahello};

// To Import :

// const helloFunc = require("./CommonJS Vs ES6 Modules") // --> Write this syntax to import stuff.
// hello();
// ahello("Hafsa");
// ahello("Chand");
// ahello("Hamza");
// ahello("Ali");

// ES6 Modules :

// To Export :

export const hello=()=>{
    console.log("Hello World");
}
export const ahello=(name)=>{
    console.log("Hello " + name);
}
export default mani =()=>{
    console.log("Hi Mani");
}

// To Import :

// import mani, {hello , ahello} from "./CommonJS Vs ES6 Modules.js"  --> Write this syntax to import stuff.

hello();
ahello("Hafsa");
ahello("Chand");
ahello("Hamza");
ahello("Ali");
