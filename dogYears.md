### Calculating my age in dog years

This project was a task in Codecademy. 
I have a lovely dog and 2 curious children who would love to know their ages in dog years 
and our dogs age in human years...

**so here goes...**

## What is my age in dog years?

I am <input type="number" id="age" name="age"/> years old. 
<input type="button" onclick="ageInDogYears()" value="WORK OUT MY AGE" />
#<div id="theResponse"><BR/></div>

<BR/>

## How old is my dog in human years?

My dog is <input type="number" id="age" name="age"/> years old.
<input type="button" onclick="ageInHumanYears()" value="WORK OUT MY DOGS AGE" />
#<div id="theAnswer"><BR/></div>

<script>
  function ageInDogYears(age=21) {
    let response = "";
    let earlyYears = 2;
    let smallDog = earlyYears * 10.5;
    let laterYears= age-2;
    let bigDog = laterYears * 4;
    let calculatedAge = smallDog+bigDog;
    response = `You are ${age}, that's ${calculatedAge} in dog years.`;
    document.getElementById("theResponse").innerHTML = response;
};


  
function ageInHumanYears(dogAge=1) {
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
