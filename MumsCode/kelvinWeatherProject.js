//Converting temperature project - Kelvin Weather (Codecademy)

//Todays forecast is 293 kelvin
const kelvin = 293;
console.log (`The temperature is ${kelvin} degrees fahrenheit`)

//Subtracting 273 from kelvin to create celsius
let celsius = kelvin-273;
console.log(`The temperature is ${celsius} degrees celsius`);

//calculating Fahrenheit using floor to ensure a whole number
let fahrenheit = Math.floor(celsius*(9/5)+32);

//using string interpolation 
//to add the variable into the string with the back ticks and $
console.log (`The temperature is ${fahrenheit} degrees fahrenheit`);

//calculating in Newton
let newton = Math.floor(celsius*(33/100));
console.log (`The temperature is ${newton} degrees newton`);
