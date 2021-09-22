//Part 5 of the Family as an object - Factory Functions

//creating a factory to create families
/*
function familyFactory (house, name, members, pets, cars) {
    return {
        'house number': house,
        name: name,
        members: members,
        pets: pets,
        cars: cars //if the key and the argument name is the same you can just type the keys 'pets, cars' and the computer will figure it out
    }
}
*/

//if the key and the argument name is the same you can just type the keys 'pets, cars' and the computer will figure it out
//alternative function for familyFactory - destructring
function familyFactory (house, name, members, pets, cars) {
    return {
        house, name, members, pets, cars
    }
}

const farmhouse = familyFactory(6, 'Howes', 4, 1, 2);
const granary = familyFactory(5, 'Houghton', 4, 1, 2);
const farmshopA = familyFactory(1);

//printing a specific object
console.log(granary);
//printing a specific object with missing parameters
console.log(farmshopA);

//using a key and its value as a variable
//let familyName = farmhouse.name;
//console.log(`The ${familyName} family live in the Farmhouse.`)
//destructured assignment to use a key as a variable
const {name} = farmhouse;
console.log(name); //printing the newly created variable
console.log(`The ${name} family live in the farmhouse.`) //printing it in a string