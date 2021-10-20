### Calculating my age in dog years

This project was a task in Codecademy. 
I have a lovely dog and 2 curious children who would love to know their ages in dog years 
and our dogs age in human years...

**so here goes...**

## What is my age in dog years?

I am <input type="number" id="age" name="age"/> years old. 
<input type="button" onclick="ageInDogYears()" value="Click to calculate" />
<div id="theResponse"><BR/></div>

<BR/>

This is how old you would have to be to gain the equivalent wisdom of a dog that had lived to your ripe old age. Dogs are infinitely wiser than people, imho.

## How old is my dog in human years?

My dog is <input type="number" id="dogAge" name="dogAge"/> years old.
<input type="button" onclick="ageInHumanYears()" value="Click to calculate" />
<div id="theAnswer"><BR/></div>

<BR/>

For every year that goes by, your dear old dog gains approximately 7 years of human wisdom.  For example by the time your dog is 2, she knows about roads, people, dogs and cars, it takes children 20 years to get that far... This is how old your dog would be if she had lived each of those human years gaining wisdom, instead of her condensed, swift 'smarter' life.

<script>
  function ageInDogYears() {
    age = document.getElementById("age").value;
    console.log(age);
    let response = "";
    let childAge = age * 10.5;
    let earlyYears = 2;
    let smallPerson = earlyYears * 10.5;
    let laterYears= age-2;
    let bigDog = laterYears * 4;
    let calculatedAge = smallPerson + bigDog;
    if (age <=2) {
        response = `You are ${age}, that's ${childAge} in dog years.`;
        }else {        
        response = `You are ${age}, that's ${calculatedAge} in dog years.`;
        };
    document.getElementById("theResponse").innerHTML = response;
};


  
function ageInHumanYears() {
    dogAge = document.getElementById("dogAge").value;
    let answer = "";
    const childhood = 21;
    let olderYears = dogAge-2;
    let adulthood = olderYears * 4;
    if(dogAge <=2){
        let babyDog = dogAge * 10.5;
        answer = `Your dog is ${dogAge}, that is ${babyDog} in human Years.`;
    }else{
        let adjustedAge = childhood + adulthood;
        answer = `Your dog is ${dogAge}, that is ${adjustedAge} in human Years.`;
    };             
    document.getElementById("theAnswer").innerHTML = answer;
};

                   
</script>
