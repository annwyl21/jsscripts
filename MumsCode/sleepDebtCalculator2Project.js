//Sleep Debt Calculator Project using user entered arguments

//irrelevant function from 1st code
function getSleepHours (day) {
    switch (day) {
      case 'monday': return 8; break;
      case 'tuesday': return 9; break;
      case 'wednesday': return 10; break;
      case 'thursday': return 11; break;
      case 'friday': return 7; break;
      case 'saturday': return 6; break;
      case 'sunday': return 5; break;
    }
  }
  
  //function to calculate sleep debt using arguments entered by user
  const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday) => 
    monday+tuesday+wednesday+thursday+friday+saturday+sunday;
  
  //function to calculate ideal amount of sleep using user entered argument
  const getIdealSleepHours = (hours) => {
    let idealHours = hours;
    return idealHours*7;
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours(8, 9, 10, 11, 7, 6, 5);
    idealSleepHours = getIdealSleepHours(8);
  
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