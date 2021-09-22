//Whale Speak Project - compare 2 arrays, push all the vowels into a new array and double e's and u's

let input = 'lorem ipsum';
const vowels = ['a', 'e', 'i', 'o', 'u', 'í', 'é'];
let resultArray = [];

console.log(input.length);

for (let inputCounter = 0; inputCounter < input.length; inputCounter++) {
  //console.log(inputCounter);
  for (let vowelCounter = 0; vowelCounter < vowels.length; vowelCounter++) {
    //console.log('x');
    //checking if the 2 arrays match
    if (input[inputCounter] === vowels[vowelCounter]) {
      //pushing elements out of the input array and into the resultArray
    resultArray.push(input[inputCounter]);
    if (input[inputCounter] === 'e' || 
      input[inputCounter] === 'é' || 
      input[inputCounter] === 'u'){
      resultArray.push(input[inputCounter]);
    }
    }
  }
}
let whaleSpeak = resultArray.join('')
console.log(whaleSpeak.toUpperCase());

for (const letter of vowels) { //for...of loops, creating a variable to hold each element
    if (letter === 'o') {
        continue; //skips over that element
    }
    console.log(letter);//for...of loops make it easier to print a list of elements in an array
}
