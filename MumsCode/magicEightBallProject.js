//Magic Eight Ball Project

//a place to enter the users name
userName = "YOU";

//Ternary Expression used instead of a longer if/ else statement
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

userQuestion = "Magic eight ball, please tell me...";
console.log(`${userName} ask ${userQuestion}`);

//generating a random WHOLE number between 0 and 7 for the answer
randomNumber = Math.floor(Math.random() * 8);
eightBall = "";

//control flow
switch (randomNumber) {
  case 0:
  eightBall = 'it is certain';
  break;
  case 1:
  eightBall = 'it is decidedly so';
  break;
  case 2:
  eightBall = 'reply hazy try again';
  break;
  case 3:
  eightBall = 'alright hopeful';
  break;
  case 4:
  eightBall = 'do not count on it';
  break;
  case 5:
  eightBall = 'my sources say no';
  break;
  case 6:
  eightBall = 'outlook not so good';
  break;
  case 7:
  eightBall = 'signs point to yes';
  default:
  eightBall = 'broken';
}

console.log(`Answer is ${eightBall}`)