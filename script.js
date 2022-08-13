let playerScore = 0;
let computerScore = 0;
let ties = 0;
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


//Allows the computer to randomly choose between rock, paper, and scissors.
function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        return 'rock';
    } else if (choice <=2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Increments the player score
function playerWin() {
    let playerTestScore = document.querySelector('#playerScore');
    let number = playerTestScore.innerHTML;
    number++;
    playerTestScore.innerHTML = number;
}

//Increments the computer score
function computerWin() {
    let computerTestScore = document.querySelector('#computerScore');
    let number = computerTestScore.innerHTML;
    number++;
    computerTestScore.innerHTML = number;
}

//Increments the tie score
function tieWin() {
    let tiesTestScore = document.querySelector('#tiesScore');
    let number = tiesTestScore.innerHTML;
    number++;
    tiesTestScore.innerHTML = number;
}

//Allows the player to choose between rock, paper, and scissors. They are prompted in the game() function.
function getPlayerChoice() {}

//Checks the winner and prints a message to the console with information about choices, winner, and score.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerWin();
         } else if (computerSelection === 'paper') {
             computerWin();
        } else {
            tieWin();
        }
        }
    
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerWin();
        } else if (computerSelection === 'rock') {
            playerWin();
        } else {
            tieWin();
        }
        }

        if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerWin();
        } else if (computerSelection === 'rock') {
            computerWin();
        } else {
            tieWin();
        }
        }
    }
//Combines everything into a proper game. The loop is run and ends when either the player or computer reaches 3 (best out of 5).
// function game() {
//     for (let i = 0; i < 20; i++) {
//         if (playerScore == 3) {
//             return console.log('Player wins!');
//         } else if (computerScore == 3) {
//             return console.log('Computer wins :(');
//         }
//         const computerSelection = getComputerChoice();
//         const playerSelection = document.querySelector('.button');
//         // prompt ('Please type in either rock, paper, or scissors.').toLowerCase();
//         console.log(playRound(playerSelection, computerSelection));
// }      
// }

//UI additions
const rockChoice = document.querySelector('#rockChoice');
rockChoice.addEventListener('click', () => {
    const rockResult = playRound('rock', computerSelection);
    const scoreOne = document.querySelector('#score');
    // const scoreDisplay = document.createElement('p');
    // scoreDisplay.textContent = rockResult.toString();
    // scoreOne.appendChild(scoreDisplay);
});

const paperChoice = document.querySelector('#paperChoice');
paperChoice.addEventListener('click', () => {
    const paperResult = playRound('paper', computerSelection);
    const scoreOne = document.querySelector('#score');
    // const scoreDisplay = document.createElement('p');
    // scoreDisplay.textContent = paperResult.toString();
    // scoreOne.appendChild(scoreDisplay);
});

const scissorsChoice = document.querySelector('#scissorsChoice');
scissorsChoice.addEventListener('click', () => {
    const scissorsResult = playRound('scissors', computerSelection);
    const scoreOne = document.querySelector('#score');
    // const scoreDisplay = document.createElement('p');
    // scoreDisplay.textContent = scissorsResult.toString();
    // scoreOne.appendChild(scoreDisplay);
    
    // playRound('scissors', computerSelection)
});

// //Runs the function in the console.
// game();