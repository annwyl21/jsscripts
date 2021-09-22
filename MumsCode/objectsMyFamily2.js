//Part 2 of the My Family Project

//nested objects
const myFamily = {
    who: [{Pete: 46}, {Ellen: 45}, {Genie: 4}], //objects within an array
    members: {
        pete: { //an object Pete, in the object members, within the object myFamily - that has key: values inside
            position: 'Dad',
        },
        ellen: {
            position: 'Mum',
            languages: ['spanish', 'dutch', 'welsh', 'gaelic', 'german'] //need to be identified as strings within an array
        },
        abigail: {

        },
        joseph: {

        },
        genie: {
            position: 'pet',
        },
    },
    size: 4,
    weAre () { //a function within an object
        console.log('We are the Houghtons :)')
    }
};

myFamily.weAre(); //calling the function within the object
console.log(myFamily.who); //printing the array
console.log(myFamily.members.ellen.languages[1]); //finding specific information in an array buried in a nested object

//adding keys and values for children objects
myFamily.members.abigail.position = 'youngest child';
myFamily.members.joseph.position = 'eldest child';
console.log(myFamily.members);


//Pass By Reference
console.log('Pass By Reference');
//functions which change object properties, change/ mutate the object permanently
function changeDog() {
    myFamily.members.genie.position = 'Head';
};
changeDog(); //calling the function and making the permanent change to the object
console.log(myFamily.members);

//looping through objects - for...in
console.log('Using a loop to make a list of my family members and the positions they hold')
for (let person in myFamily.members) {
    console.log(`${person}: ${myFamily.members[person].position}`);
  };