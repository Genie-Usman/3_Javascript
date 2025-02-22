function love(x,y){
    return x + y + 10;
}
let a = 10;
let b = 5;
console.log(love(a,b));

// --> There is another way to make function called Arrow Function which is preferable by some people

const multiply = (a,b)=>{
    return a*b;
}
console.log(multiply(5,5));