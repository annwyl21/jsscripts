//learning how to export functions as modules so they can be used with other programs (require)

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength) {
  return PI*(radiusLength*radiusLength);
}
 
module.exports.circleArea = circleArea;
 
module.exports.squareArea = function(sideLength) {
  return sideLength*sideLength;}

  /* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
const areaFunctions = require('./shape-area.js');

// Option 2: import circleArea and squareArea with object destructuring

//const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = areaFunctions.circleArea(radius);

const areaOfSquare = areaFunctions.squareArea(sideLength);

console.log(areaOfCircle, areaOfSquare);

