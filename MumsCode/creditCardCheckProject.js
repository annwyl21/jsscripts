//A CodeCadamy Project to check cedit cards using the Luhn Algorithm

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
const batchValid = [valid1, valid2, valid3, valid4, valid5];
const batchInvalid = [invalid1, invalid2, invalid3, invalid4, invalid5];


// Add your functions below:
function validateCred(array){
  let staysSameArray = [];//even numbers that do not change
  let mathsArray = [];//odd numbers from the array count that need to have the maths done
  let doubledArray = [];//the array of numbers after the maths has been completed

  //separating the odd and even numbers using the count in the for loop
  for (count=0; count<array.length; count++){
      let check = count % 2;
      let position = array.length-(count+1);
        if (check===0){
            staysSameArray.push(array[position]);
        }else {
            mathsArray.push(array[position]);
        }
    }
    //console.log(`Number that remain unchanged ` + staysSameArray);
    //console.log(`Numbers to do maths on ` + mathsArray);

    //the for loop that does the maths
    for (counter =0; counter<mathsArray.length; counter++){
        let numberToDouble = mathsArray[counter];
        let doubledNumber = numberToDouble*2;
        let numberUnderNine
        if(doubledNumber>9){
            numberUnderNine = doubledNumber-9
        }else{
            numberUnderNine = doubledNumber
        }
        doubledArray.push(numberUnderNine);
    }
    //console.log(`Maths Array doubled ` + doubledArray)

    //the final bit of maths(adding up the numbers)
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let unchangedResult = staysSameArray.reduce(reducer);
    let mathsResult = doubledArray.reduce(reducer);
    let luhnResult = unchangedResult + mathsResult;
    //console.log(`Luhn Result ` + luhnResult);

    //checking the luhn result to identify valid and invalid cards using a boolean
  if(luhnResult%10===0){
        return true
    }else {
        return false;
    }
}

function findInvalidCards(nestedArray){
    for (checkCount=0; checkCount<nestedArray.length; checkCount++){
        console.log(`Card Number ` + nestedArray[checkCount]);
        console.log(validateCred(nestedArray[checkCount]));
    }
}

//numberToTest = [4,5,3,9,6,8,9,8,8,7,7,0,5,7,9,8],
//console.log(`Original Card Number ` + invalid1);
//console.log(`Is this a valid card? ` + validateCred(numberToTest));
//console.log(invalid1);
findInvalidCards(batchValid);