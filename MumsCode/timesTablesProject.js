//TimesTables Project
const process = require('process'); 
console.log(process.argv);

//display 1 of the tables in an array
//const questionArrayLong = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function squareNumbers(number2) {
  //Show square numbers
  let square = number2*number2;
  console.log('Here is the square number to help you, count up or down...');
  console.log(`${number2} x ${number2} = ${square}`);
  console.log('');//spare line to space it out
}

function twoTimes(num2) {
    console.log('These sums might help...');
    let lowTimesResult = 2* num2;
    console.log(`2 sets of ${num2} are ${lowTimesResult} (2 x ${num2} = ${lowTimesResult})`);
    console.log('and');
}

function doubling(num2) {
    let two = num2+num2;
    let doubledResult = two * num2;
    console.log(`${two} sets of ${num2} are ${doubledResult} (${two} x ${num2} = ${doubledResult})`);
    console.log('');//spare line to space it out
}

function generateQuestion() {
    randomNumberS = Math.floor(Math.random() * 10);
    randomNumberM = Math.floor(Math.random() * 12);
    randomNumberL = Math.floor(Math.random() * 20);//not used at the moment
    num1 = randomNumberS;
    num2 = randomNumberM;
    
    //the question - answer not used
    let answer = num1*num2;
    console.log(`${num1} x ${num2} = `);
    console.log('');//spare line to space it out

    squareNumbers(num2);
    twoTimes(num2);
    doubling(num2);

    //cycle through the array to prompt the answer
    // const resultsArray = questionArrayLong.map(x => x * num2);
    console.log(`Here is the Times Table for ${num2}`);
    //console.log(resultsArray);

    //generating the full times table prompt
    for (let count = 0; count < 20; count++) {
        console.log(count + ' x ' + num2 + ' = ' + (count * num2))
    }

}

generateQuestion()