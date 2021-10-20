<script>
  function ageInDogYears(age=21) {
    let earlyYears = 2;
    let smallDog = earlyYears * 10.5;
    let laterYears= age-2;
    let bigDog = laterYears * 4;
    let calculatedAge = smallDog+bigDog;
    console.log(`You are ${age}, that's ${calculatedAge} in dog years.`);
}

function ageInHumanYears(dogAge=1) {
    const childhood = 21;
    let olderYears = dogAge-2;
    let adulthood = olderYears * 4;
    if(dogAge <=2){
        let babyDog = dogAge * 10.5;
        console.log(`Your dog is ${dogAge}, that is ${babyDog} in human Years.`);
    }else{
        let adjustedAge = childhood + adulthood;
        console.log(`Your dog is ${dogAge}, that is ${adjustedAge} in human Years.`);
    }
}
</script>

## Calculating my age in dog years

This project was a task in Codecademy. 
I have a lovely dog and 2 curious children who would love to know their ages in dog years 
and our dogs age in human years...

### so here goes - **Press F12**

## What is my age in dog years?

I am <input type="number" id="age" name="age"/> years old. 
<input type="button" onclick="ageInDogYears()" value="WORK OUT MY AGE" />

### How old is my dog in human years?

My dog is <input type="number" id="age" name="age"/> years old.
<input type="button" onclick="ageInHumanYears" value="WORK OUT MY DOGS AGE" />
