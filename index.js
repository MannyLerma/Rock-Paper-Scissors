const userChoiceDisplay = document.createElement('h3');
const computerChoiceDisplay = document.createElement('h3');
const resultDisplay = document.createElement('h4');
//const matchDisplay = document.createElement('h3');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;
//let roundWinner = '';

let score = ""
let result = ""
const button = document.querySelectorAll('input');

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

function disableButton() {
    button.forEach (elem => {
        elem.disabled = true;
    })
    }



/*for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button) 
}
*/

//const button = document.querySelector('button');

for (let i = 0; i < choices.length; i++) {
    const button = document.querySelector('input')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button) 
}

function getResult()  {
    let result = ""
    let score = ""


    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = "It's a Draw!"
        score = ("<br>Play Score: " + playerScore + "<br>ComputerScore: " + computerScore)

    } if (
        (userChoice === 'rock' && computerChoice == 'scissors') ||
        (userChoice === 'scissors' && computerChoice == 'paper') ||
        (userChoice === 'paper' && computerChoice == 'rock') 
     ) {
        resultDisplay.innerHTML = "User wins this round"
        playerScore++;     
        score = ("<br>Play Score: " + playerScore + "<br>ComputerScore: " + computerScore)

        if (playerScore == 5) {
            result += "You won the match!"
            disableButton();
        }
    } if (
        (computerChoice === 'rock' && userChoice == 'scissors') ||
        (computerChoice === 'scissors' && userChoice == 'paper') ||
        (computerChoice === 'paper' && userChoice == 'rock') 
    ) {

        resultDisplay.innerHTML = "Computer takes this round"
        computerScore++;
        score = ("<br>Play Score: " + playerScore + "<br>ComputerScore: " + computerScore)

        if (computerScore == 5) {
            result += "You lost the match!"
            disableButton();
    }
    
  }


//document.getElementById('score').innerHTML = score

document.getElementById('playerScore').innerHTML = ("Player: " + playerScore)
document.getElementById('compScore').innerHTML = ("Computer: " + computerScore)
document.getElementById('result').innerHTML = result
return;


}


function refreshPage(){
    window.location.reload();
}

