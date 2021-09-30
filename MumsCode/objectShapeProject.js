//Mini Shape Project.js

function Shape(name, sides, sideLength) {
    return {
        name: name,
        sides: sides, 
        sideLength: sideLength,
        
        }
    }

function calcPerimeter(shapeName) {
    let perimeter = shapeName.sideLength * shapeName.sides;
    return perimeter;
}

  // Write your code below here
let square = Shape('square', 4, 5); //create a variable to solve problems
console.log(square);
console.log(calcPerimeter(square));

let triangle = Shape('triangle', 3, 3);
console.log(triangle);
console.log(calcPerimeter(triangle));


//example of a working for loop
function groceries(array) {
    let newArrayStart = [];

    if (array.length >2) {
        let myJoinedList;
        for (let count=0; count<array.length-2; count++) {
            //console.log(count);
            let shoppingItem = array[count];
            newArrayStart.push(shoppingItem.item);
            //console.log(newArrayStart);
            myJoinedList = newArrayStart.join(', '); //.join sends back a joined string so a return or a variable to capute that output is required
        }
        let space = ', ';//the extra space at the end of the beginning array and the string at the end
        let ItemToBuy1 = array[array.length-2];
        let ItemToBuy2 = array[array.length-1];
        let string = `${ItemToBuy1.item} and ${ItemToBuy2.item}`;
        // let newArrayEnd = [];
        //     let ItemToBuy1 = array[array.length-2]; 
        //     newArrayEnd.push(ItemToBuy1.item);
        //     let ItemToBuy2 = array[array.length-1];
        //     newArrayEnd.push(ItemToBuy2.item);
        //     newArrayEnd.splice(newArrayEnd.length-1, 0, ' and '); 
            //console.log(newArrayEnd);

            //let ShoppingList = newArrayStart.concat(newArrayEnd);
            let ShoppingList = myJoinedList.concat(space, string);
            return ShoppingList;

    } else if (array.length ===2) {
        let Thing1 = array[0]; 
        let Thing2 = array[1];
        return `${Thing1.item} and ${Thing2.item}`;
    } else {
        let giftPosition = array[0];
        return giftPosition.item;
    };
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'
 
console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'

console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]));