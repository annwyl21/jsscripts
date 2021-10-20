let age = process.argv[2];
//console.log(userInput);

function ageInDogYears(age) {
    let earlyYears = 2;
    earlyYears *= 10.5;
    let laterYears= age-2;
    laterYears *= 4;
    let calculatedAge = earlyYears+laterYears;
    return `You are ${age}, that's ${calculatedAge} in dog years.`;
}

console.log(ageInDogYears);