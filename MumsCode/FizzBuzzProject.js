// Fizz Buzz Project

//Dividing numbers by 3
function isDivisble3(numToDivBy3) {
  div = numToDivBy3 % 3;
  if (div === 0) {return true
  } else {return false}
}

//Dividing numbers by 5
function isDivisble5(numToDivBy5) {
  div = numToDivBy5 % 5;
  if (div === 0) {return true
  } else {return false}
}

//generate 100 numbers
//let ciento = [1];
for (let cientoCounter = 1; cientoCounter <= 100; cientoCounter++) {
  //trying to divide by 3
  let threes = isDivisble3(cientoCounter);//run the function to divide by 3
  let fives = isDivisble5(cientoCounter);//run the funtion to divide by 5
if (threes === true && fives === true) { //check if both conditions are true
  console.log("Fizz Buzz");
} else if (threes === true) { //check for just 1 condition, divide by 3
  console.log("Fizz");
} else if (fives === true) { //check for final condition divide by 5
  console.log("Buzz");
} else {
  console.log(cientoCounter);//just print the rest of the numbers
}
}


