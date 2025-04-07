// Q1. Write a Program using prompt function to take input of age as a value from user and tell him using alert that he can drive or not.
// Q2. In Q1, use confirm to ask user if he want to see the prompt again?
// Q3. In the previous question, use console.error to log error if the age entered is negative.

let runAgain = true;
const canDrive =(age)=>{
    return age>=18?true:false;
}

while(runAgain){
    let age = prompt("Enter Your Age: ");
    age = Number.parseInt(age);
    if(age<0){
        console.error("Enter a valid age!!");
        break;
    }
    if(canDrive(18)){
        alert("Yes!! You can Drive.");
    }
    else{
        alert("You can't Drive.")
    }
    runAgain = confirm("Do You Wanna See The Prompt Again?");
}

// Q4. Create a program to redirect to Google.com if the user enters a number greater than 4.

let num = prompt("Enter a Number: ");
num = Number.parseInt(num);
if(num>4){
    location.href = "https:/google.com";
}
else{
    alert("Nice!!");
}

// Q5. Change The background of the page to yellow, red or any other color based on user input.

let color = prompt("Enter A Color To Change Background: ")
document.body.style.background = color;

