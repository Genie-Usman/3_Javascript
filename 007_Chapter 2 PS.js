// Q1. Use Logical Operators to find whether the age of a person lies between 10 and 20.

let age = prompt("What is Your Age?");
age = Number.parseInt(age);
if (age > 10 && age < 20) {
    alert(`Your age is between 10 and 20`);
}
else {
    alert("Your age is not between 10 and 20");
}

// Q2. Demonstrate the use of switch case statements in JavaScript.

let sign = prompt("What is Your Zodiac Sign");
switch (sign.toLowerCase()) {
    case "aries":
        alert("Your sign is Aries");
        break;
    case "taurus":
        alert("Your sign is Taurus");
        break;
    case "gemini":
        alert("Your sign is Gemini");
        break;
    case "cancer":
        alert("Your sign is Cancer");
        break;
    case "leo":
        alert("Your sign is Leo");
        break;
    case "virgo":
        alert("Your sign is Virgo");
        break;
    case "libra":
        alert("Your sign is Libra");
        break;
    case "scorpio":
        alert("Your sign is Scorpio");
        break;
    case "sagittarius":
        alert("Your sign is Sagittarius");
        break;
    case "capricorn":
        alert("Your sign is Capricorn");
        break;
    case "aquarius":
        alert("Your sign is Aquarius");
        break;
    case "pisces":
        alert("Your sign is Pisces");
        break;
    default:
        alert("Invalid Input");
}

// Q3. Create a JavaScript Program to find whether a number is divisible by 2 and 3.

let num1 = prompt("Enter Your Number");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0 && num1 % 3 == 0) {
    alert("Your Number is divisible by both 2 & 3")
}
else {
    alert("Your Number is NOT divisible by both 2 & 3")
}

// Q4. Create a JavaScript Program to find whether a number is divisible by either 2 or 3.

let num2 = prompt("Enter Your Number");
num2 = Number.parseInt(num2);
if (num2%2==0){   
    alert("Your Number is divisible by 2")
}
else if (num2%3==0){   
    alert("Your Number is divisible by 3")
}
else{
    alert("Your Number is NOT divisible by both 2 & 3")
}

// Q5. Print "You Can Drive" or "You Cannot Drive" based on age being greater than 18 using ternary operator. 

let age2 = prompt(`Enter Your Age`);
console.log(alert(age2>18? "You Can Drive": "You Cannot Drive"));