// Delete isn't a Method but an operator

let num = [2,4,6,8,10];
delete num[0];    // ---> It doesn't Modifies the Array and the length of the Array will remain same.
console.log(num);   

// --> concat Method

let n = [10, 20, 30, 40, 50];
let n2 = [60, 70, 80, 90];
let n3 = [110, 120, 130, 140, 150];
let newArray = n.concat(n2, n3);  //--> It doesn't modifies the Arrays but creates a new Array.
console.log(newArray);

// --> Reverse Method

let n1 = [10, 20, 30, 40, 50];
n1.reverse()     // ---> It modifies the Original Array.
console.log(n1);

// --> Sort Method

let n4 = [100, 10, 20, 50, 30, 15, 35, 40,];
n4.sort(); //--> It sorts the numbers aphabatically and modifies the original array
console.log(n4);

// --> If You want to sort the array in ascending or decending order, then you need a COMPARE FUNCTION

let compare1=(a,b)=>{
    return a-b;     // --> For Ascending Order
}
n4 = [100, 10, 20, 50, 30, 15, 35, 40,];
n4.sort(compare1);
console.log(n4);

let compare2=(a,b)=>{
    return b-a;     // --> For Ascending Order
}
n4 = [100, 10, 20, 50, 30, 15, 35, 40,];
n4.sort(compare2);
console.log(n4);

// Splice Method

let n5 = [1,2,3,4,5,6,7,8,9]
n5.splice(2,3,100,200,300,400,500);   //--> It modifies the original array 
// --> First Value is the starting index value 
// --> Second Value is the number of indexes you wanna delete
// --> All other values are those you wanna add or replace
console.log(n5);

// Slice Method

let n6 = [1,2,3,4,5,6,7,8,9];
let slice1 = n6.slice(2);
console.log(slice1);

// --> You can also give an ending value

let n7 = [1,2,3,4,5,6,7,8,9];
let slice2 = n7.slice(2, 6);
console.log(slice2);