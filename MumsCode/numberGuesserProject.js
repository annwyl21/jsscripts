//Number Guesser Project - Who is closer to the target number?
//uses code from elsewhere - this works but is just the copied result of answer

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random()*10);
};

function getAbsoluteDistance(guess, random) {
  return Math.abs(guess - random);
}

function compareGuesses(humanGuess, computerGuess, secret) {
    if (humanGuess < 0 || humanGuess > 9) {
      alert(); //just opens a window on the browser full of nonsense
    }
    let player = getAbsoluteDistance(humanGuess, secret);
    let aiGuess = getAbsoluteDistance(computerGuess, secret);
    //the return boolean can be as a result of a question like this, writing this removed the 'if' statement
      return player <= aiGuess;
}

function updateScore(winner) {
  if (winner === 'human') {humanScore = humanScore + 1};
  if (winner === 'computer') {computerScore = computerScore + 1};
};

function advanceRound() {
currentRoundNumber = currentRoundNumber + 1;
};

  
