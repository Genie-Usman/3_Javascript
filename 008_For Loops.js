// There are 3 types of for loops
// 1. For Loop
// 2. For in Loop
// 3. For of Loop

// --> For Loop

// A program to find factorial through for loop 

let f = 8;
let result = 1;
for(let i= 2; i<=f; i++){
    result *= i;
    console.log(result*i);
}
console.log(`The Factorial of ${f} is ${result}`);

// A program to find Prime Numbers through for loop 

for (let i = 2; i<=100; i++){
    let isPrime = true;
    for (let j = 2; j*j<=i; j++){
        if (i%j===0){
            isPrime = false;
            break;
        }
    }
        if (isPrime){
            console.log("The Prime Number are = "+ i);
        }
}

// --> For in Loop

let obj = {
    "Mani": 100,
    "Usman": 90,
    "Waleed": 80,
    "Rehaan": 70,
}
for (let a in obj){
    console.log("Marks of "+ a + " are " + obj[a]);
}

// --> For of Loop

for (let a of "Mani"){
    console.log(a);
}
for (let a of "Waleed"){
    console.log(a);
}