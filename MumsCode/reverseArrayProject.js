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
