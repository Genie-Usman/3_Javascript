// Chapter 5 Practice Set 

const prompt = require("prompt-sync")();

// Q1. Create An Array of numbers and then take an input number from the user and add it to the Array. 

let arr = [1,2,3,4,5];
let a = prompt("Enter The Number = ")
a = parseInt(a);
arr.push(a);
console.log(arr);

// Q2. Keep adding numbers to an array in Q1 until the user adds 0.

let arr2 = [1,2,3,4,5];
let b;
do{
    b = prompt("Enter Your Number = ");
    b = parseInt(b);
    arr2.push(b)
    console.log(arr2);
}while (b!=0);

// Q3. Filter the numbers that are divisble by 10 from an array.

let arr3 = [5,10,15,20,30,45,55,60]
let c = arr3.filter((x)=>{
    return x%10 == 0
})
console.log(c);

// Q4. Create an array of squares of a given number

let arr4 = [1,2,3,4,5];
let d = arr4.map((x)=>{
    return x*x
})
console.log(d);

// Q5. Use reduce to calculate the factorial of a given number from an array of first n natural numbers. (n being the numbers whose factorial needs to be calculated).

let arr5 = [2,4,6,8,10];
let e = arr5.reduce((x1,x2)=>{
    return x1*x2
})
console.log(e);