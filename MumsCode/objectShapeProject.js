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



function groceries(array) {
    for (let count=0; count<array.length; count++) {
        console.log(count);
    } 
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
//groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
//groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'