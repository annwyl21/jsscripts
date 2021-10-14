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

