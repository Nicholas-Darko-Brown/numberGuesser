let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let userGuess = Math.abs(targetNumber - humanGuess);
    let pcGuess = Math.abs(targetNumber - computerGuess);
    return userGuess <= pcGuess;
};

const updateScore = winner => {
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer'){
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};