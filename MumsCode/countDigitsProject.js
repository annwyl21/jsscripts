function numberDigits (x) {
    if (x >= 0 && x <= 9) {
      return `One digit: ${x}`
    } else if (x >= 10 && x <= 99) {
      return `Two digits: ${x}`
    } else {return `The number is: ${x}`
    }
  }
  
  console.log(numberDigits(8))
  console.log(numberDigits(56))
  console.log(numberDigits(852))
  console.log(numberDigits(-8))