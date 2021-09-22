// Calculate Age Project - calculated using year

function howOld(age, year) {
    let yearNow = 2021;
  
      //this year
      if (year === yearNow) {
        return `You are ${age} years old. Is today your birthday?`
      } else if (year > yearNow){
      calculatedAge = (year - yearNow) + age
      return `You will be ${calculatedAge} in the ${year}.`
      } else if (year < (yearNow - age)){
      calculatePreBorn = (yearNow - age) - year
      return `The year ${year} was ${calculatePreBorn} years before you were born`
      } else if (year < yearNow && year > (yearNow - age)) {
      childhood = year - (yearNow - age) 
      return `You were ${childhood} in the year ${year}`
      } else {
        return `You were born in ${year}.`
      }
  }
  
  console.log(howOld(46, 1986)); //past
  console.log(howOld(46, 2021)); //present
  console.log(howOld(46, 1975)); //past 
  console.log (howOld(46, 2050)); //future
  