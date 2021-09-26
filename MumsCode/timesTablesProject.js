//TimesTables Project
const process = require('process'); 
console.log(process.argv);

//display 1 of the tables in an array
const questionArrayShort = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const questionArrayMid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const questionArrayLong = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function generateQuestion (num1, num2) {
    randomNumberS = Math.floor(Math.random() * 10);
    randomNumberM = Math.floor(Math.random() * 12);
    randomNumberL = Math.floor(Math.random() * 20);
    num1 = questionArrayShort[randomNumberS];
    num2 = questionArrayMid[randomNumberM];
    
    let answer = num1*num2;
    console.log(`${num1} x ${num2} = `);
    console.log('');//spare line to space it out

    //Show square numbers
    let square = num2*num2;
    console.log('Here is the square number to help you, count up or down...');
    console.log(`${num2} x ${num2} = ${square}`);
    console.log('');//spare line to space it out
    console.log('These sums might help...');
    let lowTimesResult = 2* num2;
    console.log(`2 sets of ${num2} are ${lowTimesResult} (2 x ${num2} = ${lowTimesResult})`);
    console.log('and');
    let two = num2+num2;
    let doubledResult = two * num2;
    console.log(`${two} sets of ${num2} are ${doubledResult} (${two} x ${num2} = ${doubledResult})`);
    console.log('');//spare line to space it out

    //cycle through the array to prompt the answer
    const resultsArray = questionArrayLong.map(x => x * num2);
    console.log(`Here is the Times Table for ${num2}`);
    //console.log(resultsArray);

    for (let count = 0; count < questionArrayLong.length; count++) {
        console.log(questionArrayLong[count] + ' x ' + num2 + ' = ' + resultsArray[count])
    }

}

generateQuestion()