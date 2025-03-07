// Map Method 
// It is used to create a new array using an existing Array
// It takes three parameters (value, index, array)

let arr = [10, 20, 30, 40, 50];
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + 10
})
console.log(a);

// Difference between Map Method and For...Each Loop
// For...Each Loop is used to perform operations on an Array
// Map Method is used to create a new Array from the existing one

// Filter Method
// It creates a new Array and filters the values you want.

let arr2 = [10, 20, 30, 40, 50];
let b = arr2.filter((value) => {
    return value < 40
})
console.log(b);

// Reduce Method 
// It creates a new Array and reduces all the values into a single value.

let arr3 = [10, 20, 30, 40, 50];
let c = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(c);