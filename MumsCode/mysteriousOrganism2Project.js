let repeater = 0;

if (process.argv.length === 3){
    repeater = process.argv[2]
}

//let string = 'This is a mutated sentence';
let myString = 'Evolution by natural selection. An adaptation is a characteristic of an organism that improves its chances of surviving and/or reproducing. Organisms are generally well adapted to the abiotic and biotic conditions of the environment in which they live. An organism’s adaptations are a result of the genes the organism inherits from its parents. The proportion of well-adapted organisms in a population can increase over the generations by the process of evolution by natural selection. There are three different types of adaptations: Behavioural - responses made by an organism that help it to survive/reproduce, Physiological - a body process that helps an organism to survive/reproduce, Structural - a feature of an organism’s body that helps it to survive/reproduce.' 
let myString2 = 'A really short sentence.'
let letters = 'abcdefghijklmnopqrstuvwxyz'
//let sentence = Array.from(string);
let alphabet = Array.from(letters);

//let sentence = ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'm', 'u', 't', 'a', 't', 'e', 'd', ' ', 's', 'e', 'n', 't', 'e', 'n', 'c', 'e'];
//let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//console.log(sentence.join());

function mutateSentence(sentenceString) {
    let sentence = Array.from(sentenceString);
    let mutatedSentence = sentence.slice();
    for (let count=0; count<repeater; count++){
        let sl = sentence.length;
        let al = alphabet.length;
        let randomNumber = Math.floor(Math.random()*sl);
        let newLetter = alphabet[Math.floor(Math.random()*al)];
        mutatedSentence.splice(randomNumber, 1, newLetter);
    }
    return mutatedSentence;
}

let changedSentence = mutateSentence(myString);
console.log(changedSentence.join())

//console.log(mutateSentence().join())