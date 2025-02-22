// Q1. Write a program to print the marks of a student ina object using for loop.

let marks = {
    "Mani": 100,
    "Usman": 50,
    "Waleed": 30,
    "Rehaan": 20,
}
for (let i = 0; i < Object.keys(marks).length; i++)
    console.log("Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);

// Q2. Write the program in Q1 using for in loop

for (let keys in marks) {
    console.log("Marks of " + keys + " are " + marks[keys]);
}

// Q3. Write a program to print "Try Again" until the user enters the correct number

// let cn = 1;
// let i = null;
// while (i != cn) {
//     i = prompt("Enter The Number");
//     if (i != cn) {
//         alert("Try Again");
//     }
// }
// alert("You Have Entered The Correct Number");

// Q4. Write a function to find mean of 5 numbers

const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
console.log(mean(10,20,30,40,50));