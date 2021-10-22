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

function celsiusConverter(number) {
    let celsius = number;
    let fahrenheit = celsius*(9/5)+32;
    let kelvin = celsius + 273.15;
    let newton = celsius*(33/100);
    return `${celsius} C, ${Math.round(fahrenheit)} F, ${Math.round(kelvin)} K, ${Math.round(newton)} N`
};

function fahrenheitConverter(digit) {
    let fahrenheit = digit;
    let celsius = (fahrenheit-32)*5/9;
    let kelvin = celsius + 273.15;
    let newton = celsius*(33/100);
    return `${Math.round(celsius)} C, ${fahrenheit} F, ${Math.round(kelvin)} K, ${Math.round(newton)} N` 
}


console.log(celsiusConverter(20));
console.log(fahrenheitConverter(20));