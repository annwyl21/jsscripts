//My Family as an object part 4 - getters and setters
// GETTERS can return the value of internal properties and SETTERS can safely reassign property values. 

const myFamily = {
    _adults: 2,
    get adults () {
        return this._adults
    },
    _children: 2,
    get children () {
        if (typeof this._children === 'number') {
        return this._children
        }
    },
    _pets: 1,
    get pets () {
        return this._pets
    },
    set pets (newPet) {
        if(typeof newPet === 'number'){
        this._pets = newPet;
        }
    }
}

//calling the getter method and printing the result
console.log(myFamily.children);

//using the setter to reject a new string because it isn't a number
myFamily.pets = 'Genie';
//calling the getter method to check the setting has remained unchanged
console.log('We have this many pets ' + myFamily.pets);

//using the setter method to reset the value of the key _pets
myFamily.pets = 5;
//using the getter method to check the new value
console.log('We have this many pets ' + myFamily.pets);


