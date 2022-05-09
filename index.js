const userChoiceDisplay = document.createElement('h3');
const computerChoiceDisplay = document.createElement('h3');
const resultDisplay = document.createElement('h3');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let roundWinner = '';


const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

function disableButtons() {
    disableButtons.forEach(elem => {
        elem.disabled = true
    })
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}



function getResult()  {
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = "It's a Draw!"
    } if (
        (userChoice === 'rock' && computerChoice == 'scissors') ||
        (userChoice === 'scissors' && computerChoice == 'paper') ||
        (userChoice === 'paper' && computerChoice == 'rock') 
     ) {
        resultDisplay.innerHTML = "User wins this round"
        playerScore += 1;
    } if (
        (computerChoice === 'rock' && userChoice == 'scissors') ||
        (computerChoice === 'scissors' && userChoice == 'paper') ||
        (computerChoice === 'paper' && userChoice == 'rock') 
    ) {
        resultDisplay.innerHTML = "Computer takes this round"
        computerScore += 1;
    }
    checkWinner();
}



function checkWinner() {
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === playerScore) {
            return  "Match tied"
        } else if (computerScore > playerScore) {
            return "You lost!"
        } else {
            return "You won!"
        }
    }
}








/*

const winnerResults ={
    computer: ["You lost to the computer!", 'red'],
    player: ["You win the match!", 'green'],
    tie: ["The match is tied!", 'blue']
}


const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorpaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "You Win!"
            playerScore++
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "You Lose!"
            computerScore++
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "Tie!"
            break
    } 
} 






function updateWinner(winner) {
    resultDisplay.textContent = winnerResults[winner][0];
    
    userChoice.forEach(button => {
        button.removeEventListener('click', userChoice)
    });
}



function checkWinner() {
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === playerScore) {
            updateWinner('tie')
        } else {
            let win = `${(computerScore > playerScore) ? 'computer' : 'player'}`;
            updateWinner(win);
        }
    }
}





function playRound(getResult) {
    if (userChoice === computerChoice) {
        roundWinner = 'tie'
    } if (
        (userChoice === 'rock' && computerChoice == 'scissors') ||
        (userChoice === 'scissors' && computerChoice == 'paper') ||
        (userChoice === 'paper' && computerChoice == 'rock') ||
    ) {
        playerScore++
        roundWinner = 'user'
    } if (
        (computerChoice === 'rock' && userChoice == 'scissors') ||
        (computerChoice === 'scissors' && userChoice == 'paper') ||
        (computerChoice === 'paper' && userChoice == 'rock') ||
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    checkWinner();
}










function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

 */