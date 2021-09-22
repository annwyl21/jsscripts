//My Family as an object part 4 - getters and setters
// GETTERS can return the value of internal properties and SETTERS can safely reassign property values. 

const myFamily = {
    _adults: 2,
    get adults () {
        return this._adults
    },
    _children: 2,
    get children () {
        return this._children
    },
    _pets: 1,
    get pets () {
        return this._pets
    },
    set pets (newPet) {
        if(newPet === 'number'){
        this._pets = newPet;
        }
    }
}

console.log(myFamily.children);
myFamily.pets = 'Genie';
console.log('We have this many pets ' + myFamily.pets);
myFamily.pets = 5;
console.log('We have this many pets ' + myFamily.pets);


