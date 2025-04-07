// Snake , Water, Gun Game
const prompt = require("prompt-sync")();

let userScore = 0;
let computerScore = 0;
let choices = ["Snake", "Water", "Gun"];
let userChoice = prompt("Snake, Water or Gun = ");

const getcomputerChoice =()=>{
    let randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex];
}
const getWinner=(userChoice, getcomputerChoice)=>{
    if(userChoice === getcomputerChoice){
        return "Draw";
    }
    else if(userChoice == "Snake" && getcomputerChoice == "Water" || userChoice == "Water" && getcomputerChoice == "Gun" || userChoice == "Gun" && getcomputerChoice == "Snake"){
        userScore++;
        return "User";
    }
    else{
        computerScore++
        return "Computer";
    }
}
let computerChoice = getcomputerChoice();
let winner = getWinner(userChoice, computerChoice);
console.log(`User chose ${userChoice}.\nComputer chose ${computerChoice}.\nWinner ${winner}`);