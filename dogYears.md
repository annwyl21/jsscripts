<script>
  function ageInDogYears(age=21) {
    let earlyYears = 2;
    earlyYears * 10.5;
    let laterYears= age-2;
    laterYears * 4;
    let calculatedAge = earlyYears+laterYears;
    console.log(`You are ${age}, that's ${calculatedAge} in dog years.`);
}

function ageInHumanYears(dogAge=1) {
    let childhood = 2;
    childhood *= 10.5;
    let adulthood = dogAge-2;
    adulthood *= 4;
    if(age<=2){
        let babyDog = age * 10.5;
        return `Your dog is ${dogAge}, that's ${babyDog} in human Years.`
    }else{
        let adjustedAge = childhood+adulthood;
        return `Your dog is ${dogAge}, that's ${adjustedAge} in human Years.`
    }
}
</script>

## Calculating my age in dog years

This project was a task in Codecademy. 
I have a lovely dog and 2 curious children who would love to know their ages in dog years 
and our dogs age in human years...

### so here goes

## What is my age in dog years?

I am <input type="number" id="age" name="age"/> years old. 
<input type="button" onclick="ageInDogYears()" value="WORK OUT MY AGE" />

**You are x years old.**

### How old is my dog in human years?

My dog is <input type="number" id="age" name="age"/> years old.
<button name="button" onclick="http://www.google.com">WORK OUT MY DOGS AGE</button>

**Your dog is x years old in human years.**


