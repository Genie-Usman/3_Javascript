// Arrays are objects that can hold multiple values in strings, bools, ints, etc.
// Arrays are mutable and can be changed

let marks = [20,30,40, `Absent`, `null`];
console.log(`The value at index 0 is `, marks[0]);
console.log(`The value at index 1 is `, marks[1]);
console.log(`The value at index 2 is `, marks[2]);
console.log(`The value at index 3 is `, marks[3]);
console.log(`The value at index 4 is `, marks[4]);
// console.log(`The value at index 5 is`, marks[5]);  It will be undefined since it doesn't exist

// A Value can be added to an araay 
marks[5] = `Present`;
console.log(`The value at index 5 is`, marks[5]);

// To check the length of an Array

console.log(`The length of the Array is `, marks.length);

// A value can be changed in an Array

marks[0] = 100;
console.log(`The Changed Marks at index 0 is` , marks[0]);


// ---> Quiz : Printing the array using loop

for(let i = 0; i <= marks.length; i++ ){
    console.log(`The Array Printed through loop is below`,marks[i]);
    // console.log(marks[i]);
}
