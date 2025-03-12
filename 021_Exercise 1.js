// Random Number Guess Game
const prompt = require("prompt-sync")();

function getRandomInt() {
    return Math.floor(Math.random() * 100);
}

let chances = 20;

function playGame() {
    let a = getRandomInt();
    while (chances > 0) {
        let b = prompt("Guess The Number Generated = ");
        if (b == a) {
            console.log("Congratulations!! You Guessed The Number in ", chances, " tries");
            console.log("Your score ", 100 - chances);
            break;
        } else if (b > a) {
            console.log("Too High! Try Again");
        } else if (b < a) {
            console.log("Too Low! Try Again");
        }
        chances--;
        console.log("Chances Left = ", chances);
    }
    if (chances == 0) {
        console.log("Sorry, you didn't guess the number. The number was ", a);
    }
}

playGame();