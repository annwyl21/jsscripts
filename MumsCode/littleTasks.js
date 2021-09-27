function reverseArray(words) {
    let newArray = [];
    //console.log(sentence);
    for (let count = words.length-1; count >= 0; count--) {
      //console.log(count);
      newArray.push(words[count]);
      }
    //console.log(newArray);
    return newArray;
  }
  
  //reverseArray(words);
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  const numbers = [1, 2, 3, 4, 5]
  console.log(reverseArray(sentence)); 
  //console.log(reverseArray(numbers));
  // Should print ['This', 'will', 'all', 'make', 'sense.'];


  function greetAliens(aliens) {
    for (let count = 0; count < aliens.length; count++) {
      //console.log(aliens);
      //console.log(count);
    console.log(`Oh powerful ${aliens[count]}, we humans offer our unconditional surrender!`);
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);


function convertToBaby(array) {
    let newArray = [];
    for (let count = 0; count < array.length; count++) {
        //console.log(count);
        newArray.push('baby ' + array[count]);
        //console.log(newArray);
    }
    return newArray;
  }
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  console.log(convertToBaby(animals)) 


  //the really frustrating forEach task
  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

//solution that works but did not pass
// function declineEverything(array) {
//   array.forEach(element => politelyDecline(element));
// }
// declineEverything(veggies);

//solution that works but did not pass
// function declineEverything(item){
//   politelyDecline(item);
// }
// veggies.forEach(declineEverything);

//solution that works but did not pass
// veggies.forEach(function(listItem){
//   politelyDecline()
// });

function declineEverything(array) {
  array.forEach(politelyDecline);
}
declineEverything(veggies);

function acceptEverything(array) {
  array.forEach(element => 
  console.log("Ok, I guess I will eat some " + element + "."))
};
acceptEverything(veggies);
