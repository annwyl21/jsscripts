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



const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num
function squareNums(array){
  let newArray = array.map(toSquare);
  return newArray;
}
console.log(squareNums(numbers));



function makeCapitals(array) {
  let Capitals = array.map(word => word.toUpperCase())
  return Capitals;
}

function addExclaimation(array) {
  let Exclaim = array.map(word => word + '!')
  return Exclaim;
}

function shoutGreetings(greetings) {
  return addExclaimation(makeCapitals(greetings));
 }
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings))



const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

function  orderYears(ordered) {
  ordered.sort();
  return ordered;
}

function reverseArray(reversed) {
  reversed.reverse();
  return reversed;
}

function sortYears(years) {
  return reverseArray(orderYears(years));
}
console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]



function justCoolStuff(coolStuff, myStuff) {
  let arrayOfMatches = coolStuff.filter(item => myStuff.includes(item));
  return arrayOfMatches
}
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
console.log(justCoolStuff(myStuff, coolStuff))



function isTheDinnerVegan(ingredients) {
  for (count=0; count<ingredients.length; count++) {
    let ingredient = ingredients[count];
    console.log(ingredient);
    if (ingredient.source !== 'plant') {
      return false;
    } 
  }
  return true;
}

const dinner = [
  {name: 'hamburger', source: 'meat'}, 
  {name: 'cheese', source: 'dairy'}, 
  {name: 'ketchup', source:'plant'}, 
  {name: 'bun', source: 'plant'}, 
  {name: 'dessert twinkies', source:'unknown'}
  ];
console.log(isTheDinnerVegan(dinner));
// Should print false

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 console.log(isTheDinnerVegan(meal)); // Should return true




 function findMyKeys(myArray) {
  const lookForKeys = item => item === 'keys';
  return myArray.findIndex(lookForKeys);
}

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
// Should print 4