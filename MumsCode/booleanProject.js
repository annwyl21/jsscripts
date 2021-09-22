// Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
const truthyOrFalsy = (anyValue) => {
    if (anyValue) {
      return true
    } else {
      return false
    }
  }
  
  
    console.log(truthyOrFalsy(0)) 
  // Should print false
  
  // We encourage you to add more function calls of your own to test your code!
  
  console.log(truthyOrFalsy(-8)) 
  console.log(truthyOrFalsy(100)) 
  console.log(truthyOrFalsy(0.65)) 
  console.log(truthyOrFalsy())
  console.log(truthyOrFalsy(undefined)) 
  console.log(truthyOrFalsy(NaN))  