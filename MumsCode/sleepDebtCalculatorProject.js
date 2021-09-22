//Sleep Debt Calculator Project

//function to find out how many of hours were slept on a given (the argument) day, using a switch (if/else code) to collect the result.
function getSleepHours (day) {
    //TEST FOR THE FUNCTION ONLY REPLACED RETURN WITH RESULT let result = undefined;
  
    switch (day) {
      case 'monday': return 8; break;
      case 'tuesday': return 9; break;
      case 'wednesday': return 10; break;
      case 'thursday': return 11; break;
      case 'friday': return 7; break;
      case 'saturday': return 6; break;
      case 'sunday': return 5; break;
    }
    //TEST console.log(`You slept on ${day} for ${result} hours.`);
  }
  
  //TEST getSleepHours ('monday');
  
  //function to calculate sleep debt
  const getActualSleepHours = () => 
    getSleepHours ('monday') 
    + getSleepHours ('tuesday') 
    + getSleepHours ('wednesday') 
    + getSleepHours ('thursday') 
    + getSleepHours ('friday') 
    + getSleepHours ('saturday') 
    + getSleepHours ('sunday');
  
  /*TEST (that is not inside the concise arrow function despite it having no curly brackets) to figure out of it is adding up as desired 
  console.log(getActualSleepHours());
  */
  
  const getIdealSleepHours = () => {
    let idealHours = 2;
    return idealHours*7;
  }
  
  /*Test
  console.log(`You slept ${getActualSleepHours()} hours. Your ideal sleep hour requirements is ${getIdealSleepHours()}.`)
  */
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
  
    //calculates the number of missed hours of sleep
    debt = idealSleepHours-actualSleepHours;
    //calculate number of hours overslept by making the above value always positive
    overslept = Math.abs(debt);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${overslept} hours more sleep then you need.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You need more sleep. Your sleep debt is ${debt} hours.`);
    }
  }
  
  calculateSleepDebt();
  