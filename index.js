function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
        return "paper";
    } else if (random >= 0.6666) {
        return "rock";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            userScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            userScore++;
            return win;
        } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "rock") {
            userScore++;
            return win;
        } else {
            computerScore++;
            return lose;
        }
    }
}


let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

var i = 0;
const play = () => {
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
    i++;
    if (i !== 5) {
        play();
    } else {
        alert("Game Over=> User("+userScore+") vs Computer("+computerScore+")");
    }
}

play();