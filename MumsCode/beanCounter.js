//"string"[N];

function countBs (string) {
    let beanCounter = 0;
    for (let count = 0; count<string.length-1; count++)
        if (string[count] === "B"){
            beanCounter = beanCounter +1;
        }
    return "B = " + beanCounter;
}

console.log(countBs("Best Buddies"));

function countChar (string, character) {
    let beanCounter = 0;
    for (let count = 0; count<string.length-1; count++)
        if (string[count] === character){
            beanCounter = beanCounter +1;
        }
    return `${character} = ${beanCounter}`;
}

console.log(countChar("Best Buddies", 'd'));