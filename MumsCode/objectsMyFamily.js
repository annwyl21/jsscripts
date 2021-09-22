// Project creating an object the contains my family

//creating the object by naming it and using curly brackets
// let object = {}; an object literal that is empty
const myFamily = {
    //putting in key: value pairs seperated by commas
    pet: 'Genie',
    size: 4,
    challenges: 'we are a noisy family.',
    weAre () { //a function within an object, using 'weAre: function ()' will also work
        console.log('We are the Houghtons :)')
    }
};

myFamily.weAre(); //calling the function within the object

const nextDoorsFamily = {
    pet: 'Stanley',
    size: 4
}

let rescueHound = 'pet'; //a variable that is equal to a string representing a key in an object

console.log('My family pet is ' + myFamily.pet); //printing a value from a key within an object
console.log(myFamily[rescueHound]); //printing a value retrieved via a variable using the square brackets
console.log(nextDoorsFamily[rescueHound]); //using the same variable but to request info from a different object

//adding, changing and deleting keys and values
console.log(myFamily.size);
myFamily.size = 5; //changing the value of size in the myFamily object
console.log('My new family size is ' + myFamily.size);

console.log('Checking what keys and values are in myFamily ');
console.log(myFamily);
myFamily.home = 'Great Missenden'; //adding a key and a value
console.log('New keys and values after adding an extra set');
console.log(myFamily);

delete myFamily['challenges']; //deleting a key, the key has to be in a string otherwise it looks for a variable, see rescueHound for an example
console.log('Printing the new and improved family minus the challenges.')
console.log(myFamily);