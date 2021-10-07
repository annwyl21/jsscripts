//Keeps generating random cards until it gets to spade

const cards = ['diamond', 'spade', 'heart', 'club'];
console.log("This game will continue to generate randome cards until...\n a spade is generated\nHow long will it take you to find a spade in the pack?")
console.log(" ")
// Write your code below
let currentCard
while (currentCard != 'spade') {
    //chooses a random number to be the index number requested from the array
  currentCard = cards[Math.floor(Math.random() * 4)];
  //keeps printing card names until the code hits a spade
  console.log(currentCard);
}

