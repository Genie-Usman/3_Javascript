// Array Methods 

// --> Converting an Array to String

let num = [1,2,3,50,80];
let b = num.toString();
console.log(b, typeof b);

// --> Adding something in Array

let c = num.join("_");
console.log(c, typeof c);

// --> Removing something from the end of an Array

let d = num.pop();
console.log(num, d);

// --> Adding something at the end of an Array

let e = num.push(100);
console.log(num, e);

// --> Removing something from the start of an Array

let f = num.shift();
console.log(num, f);

// --> Adding something at the start of an Array

let g = num.unshift(200);
console.log(num, g);