//A bizarre project to convert my age into dog years (not how old is my dog)

//my actual age
let myAge = 45;

//the first 2 years of a dogs life are worth more human years than the following years
let earlyYears = 2;
earlyYears *= 10.5;

//my age minus the accounted for 2 years
let laterYears= myAge-2;
laterYears *= 4;

//my age in dog years
let myAgeInDogYears = earlyYears+laterYears;

//my name in lower case
const myName = "ELLEN".toLowerCase();

//string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

//A cooler project - how old is my dog in human years

//introducing my dog
const dogName = "Genie";

//stating how old is my dog
let dogAge = 4;

//calculating human age of dogs first 2 years of life
let childhood = 2;
childhood *= 10.5;

//calculating human age of dogs years after childhood
let adulthood = dogAge-2;
adulthood *= 4;

//calculating the age of my dog in human years
let adjustedAge = childhood+adulthood;

//string interpolation
console.log(`My dog is called ${dogName}. ${dogName} is ${dogAge} in real life which is ${adjustedAge} in human years. WOW!`)
