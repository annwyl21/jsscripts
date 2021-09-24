//Reverse Array Project

const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const reverseArray = [];

for (const letters of myArray) {
    console.log(letters);
 }

for (let myArrayCounter = myArray.length - 1; myArrayCounter >= 0; myArrayCounter--) {
    reverseArray.push(myArray[myArrayCounter]);
}

for (const numbers of reverseArray) {
   console.log(numbers);
}

//Iteration Methods
//.foreach, .map & .filter to cycle through arrays - example from Codeacademy
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length >7;
})
console.log(longFavoriteWords);

//example of .findIndex (dont forget arrays are zero indexed)
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(x => {
  return x === 'elephant';
})
console.log(foundAnimal);

const startsWithS = animals.findIndex(y => {
  return y[0] === 's'; 
})

console.log(startsWithS);

//.reduce
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
//.reduce takes 2 arguments a number (given  or [0] in the array and a 2nd argument [1] in the array to start cycling through the array with, the accumulator is then the result of the sum)
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);

return accumulator + currentValue;
}, 10)//an optional value of 10 can be used as the starting figure

console.log(newSum);

//using .filter and .some in a console.log 
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));
// expected output: true

// Use filter to create a new array
const interestingWords = words.filter(x => {
  return x.length > 5
});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { 
  return word.length > 5
} ));