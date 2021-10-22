let age = process.argv[2];

function ageInDogYears(age=21) {
    let earlyYears = 2;
    earlyYears * 10.5;
    let laterYears= age-2;
    laterYears * 4;
    let calculatedAge = earlyYears+laterYears;
    return `You are ${age}, that's ${calculatedAge} in dog years.`;
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

//console.log(ageInDogYears(age));
//console.log(ageInHumanYears(age));