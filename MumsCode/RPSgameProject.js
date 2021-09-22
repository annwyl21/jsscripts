//Rock, Paper, Scissors Game Project

//a function that takes a single parameter of rock, paper or scissors depending on the user choice
// all in lower case Rock and rock will work
// only rock, paper, scissors are accepted

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
} else {
  console.log('Choose rock, paper or scissors to start the game');
};
}

//computer's turn, choose a random number and determine a choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
//console.log(randomNumber);
    switch (randomNumber) {
      case 0 : return 'rock';
      break;
      case 1 : return 'paper';
      break;
      case 2 : return 'scissors';
    }
};

//tell the computer about the global variables
let userChoice = getUserChoice('bomb');
let computerChoice = getComputerChoice();

//determine the winner using local variables to ensure no confusion
const determineWinner = (person, AIguesser) => {
 
  if (person === AIguesser) {
    return 'TIE!';
  }
  if (person === 'rock') {
    if (AIguesser === 'paper') {
      return'Computer WON! - Paper wraps rock';
    } else {
      return'You WON! - Rock blunts scissors';
    }
  }
  if (person === 'paper') {
    if (AIguesser === 'scissors') {
      return'Computer WON! - Scissors cut paper';
    } else {
      return'You WON! - Paper wraps rock';
    }
  }
  if (person === 'scissors') {
    if (AIguesser === 'rock') {
      return'Computer WON! - Rock blunts scissors';
    } else {
      return'You WON! - Scissors cut paper';
    }
  }
  if (person === 'bomb') {
    return ('You are the ULTIMATE WINNER!')
  }
};

//play the game and call the functions using local variables to rule out confusion
function playgame(user, tech) { 
  console.log(`YOU chose ${user}.`);
  console.log(`Computer chooses ${tech}`);
  console.log(determineWinner(user, tech));
};
//tell the function which global variables to use as its local variables while running the function
playgame(userChoice, computerChoice);