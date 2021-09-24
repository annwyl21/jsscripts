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

