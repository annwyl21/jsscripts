// Calculate Age Project - just 3 options

function howOld(age, year) {
    const yearNow = 2021;
    const yearDifference = year - yearNow;
    const newAge = age + yearDifference;
  
      //future, past, childhood
      if (age <= newAge){
      return `You will be ${newAge} in the year ${year}`
      } else if (newAge <= 0){
      calculatePreBorn = newAge-age;
      return `The year ${year} was ${Math.abs(newAge)} years before you were born`
      } else {
      return `You were ${newAge} in the year ${year}`
      } 
      }
  
  console.log(howOld(46, 1902)); //past
  console.log(howOld(46, 1975)); //birthyear
  console.log(howOld(46, 1986)); //childhood
  console.log(howOld(46, 2022)); //present
  console.log (howOld(46, 2050)); //future
  
  