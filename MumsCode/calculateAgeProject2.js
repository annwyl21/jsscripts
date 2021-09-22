// Calculate Age Project - calculated using age

function howOld(age, year) {
    const yearNow = 2021;
    const yearDifference = year - yearNow;
    const newAge = age + yearDifference;
  
      //this year, future, past, childhood
      if (year === yearNow) {
        return `You are ${age} years old. Is today your birthday?`
      } else if (age < newAge){
      return `You will be ${newAge} in the ${year}.`
      } else if (newAge < 0){
      calculatePreBorn = newAge-age;
      return `The year ${year} was ${Math.abs(newAge)} years before you were born`
      } else if (year < yearNow && year > (yearNow - age)) {
      return `You were ${newAge} in the year ${year}`
      } else {return `You were born in ${year}.`}
      }
  
  console.log(howOld(46, 1902)); //past
  console.log(howOld(46, 1975)); //birthyear
  console.log(howOld(46, 1986)); //childhood
  console.log(howOld(46, 2021)); //present
  console.log (howOld(46, 2050)); //future