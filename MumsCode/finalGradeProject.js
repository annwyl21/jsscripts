//Determine Grade Project - switch is only for true/ false conditions

// Write your function here:
function finalGrade (spanish, dutch, welsh) {
    if ((spanish >100 || dutch > 100 || welsh > 100) || (spanish < 0 || dutch < 0 || welsh < 0)) {
      return 'You have entered an invalid grade'
    }
  
    let average = (spanish + dutch + welsh)/3;
  
    if (average >= 0 && average <= 59) {
      return 'F';
    } else if (average >= 60 && average <= 69) {
      return 'D';
    } else if (average >= 70 && average <= 79) {
      return 'C';
    } else if (average >= 80 && average <= 89) {
      return 'B';
    } else if (average >= 90 && average <= 100) {
      return 'A';}
  }
  
  // Uncomment the line below when you're ready to try out your function
  
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!
  console.log(finalGrade(105, 92, 95))
  console.log(finalGrade(20, 50, 45))
  console.log(finalGrade(0, 0, 0))