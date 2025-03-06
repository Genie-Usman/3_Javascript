// --> For Loop
let num = [10, 20, 30, 40, 50];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// --> For.....in Loop         -----> Preferable over original "For loop".

let num2 = [60, 70, 80, 90, 100];
for (let i in num2) {
    console.log(num2[i]);
}

// --> For....each Loop

let num3 = [1, 2, 3, 4, 5];
num3.forEach((element) => {
    console.log(element * element);
});

// --> Array...From Loop  ---> It is used to turn a string or a collection of HTML into Array

let me = "Mani";
let arr = Array.from(me);     //---> You have to create a new variable since this loop creates a new array
console.log(arr);