// Arithmetic Operators

let a = 5;
let b = 10;
console.log("a + b = ", a+b); //--> Addition Operator
console.log("a - b = ", a-b); //--> Subtraction Operator
console.log("a * b = ", a*b); //--> Multiplicaion Operator
console.log("a / b = ", a/b); //--> Division Operator
console.log("a % b = ", a%b); //--> Modulus Operator
console.log("a ** b = ", a**b); //--> Exponentional Operator
console.log("a++ = ", a++); //--> Post-increment Operator
console.log("++a = ", ++a); //--> Pre-increment Operator
console.log("a-- = ", a--); //--> Post-decrement Operator
console.log("--a = ", --a); //--> Pre-decrement Operator

// Comparison Operators

let c = 5;
let d = 10;
console.log("c==d is = ", c==d); //--> Equal to Operator
console.log("c!=d is = ", c!=d); //--> Not Equal to Operator
console.log("c<d is = ", c<d); //--> Less Than Operator
console.log("c>d is = ", c>d); //--> Greater Than Operator
console.log("c<=d is = ", c<=d); //--> Less Than And Equal to Operator
console.log("c>=d is = ", c>=d); //--> Greater Than And Equal to Operator

console.log("c===d is = ", c===d); //--> It equal the data type of variables 
console.log("c!==d is = ", c!==d); //--> It not equals the data type of variables

// An example to understand "===" and "!==" better 

let e = 5;
let f = "5";
console.log("e===f is =", e===f);
console.log("e!==f is =", e!==f);

// Logical Operators

let g = 5;
let h = 10;
console.log("The result of this AND Operator is = ", g<h && g!=h); //--> AND Operator
console.log("The result of this OR Operator is = ", g<h || g!=h); //--> OR Operator
console.log("The result of this NOT Operator is = ", !false); //--> NOT Operator
console.log("The result of this NOT Operator is = ", !true);