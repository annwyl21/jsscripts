//Part 3 of the My Family Project (advanced objects)
//don't use arrow functions inside objects because it screws up 'this'

const myFamily = {
    who: [{Pete: 46}, {Ellen: 45}, {Genie: 4}], //objects within an array
    members: {
        pete: { //an object Pete, in the object members, within the object myFamily - that has key: values inside
            position: 'Dad',
        },
        ellen: {
            position: 'Mum',
        },
        abigail: {

        },
        joseph: {

        },
        genie: {
            position: 'pet',
            type: 'fussy',
        },
    },
    size: 4,
    weAre () { //a function within an object
        console.log('We are the Houghtons :)')
    },
    fussPot () {
                console.log('My name is Genie and I am ' + this.members.genie.type) //using this to reference the object you are in
    }
};

myFamily.weAre(); //calling the function within the object
myFamily.fussPot();
myFamily.members.joseph.fussyFood = true; //adding keys and values
myFamily.members.genie.fussyFood = true;

//using a for loop to use a condition to check values and print a string where those values are true or not
for (let person in myFamily.members) {
if (myFamily.members[person].fussyFood) {
    console.log('The fussy member of my family is ' + person)
} else {
    console.log(`${person} is not as fussy as other family members.`)
}
}
