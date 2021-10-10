//2nd project to show how dinosaurs changed into chickens over time

let sentence = ['T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'a', ' ', 'm', 'u', 't', 'a', 't', 'e', 'd', ' ', 's', 'e', 'n', 't', 'e', 'n', 'c', 'e'];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(sentence.join());

function chooseAlphabet() {
    ranNumAlpha = Math.floor(Math.random()*26);
    return alphabet[ranNumAlpha];
}

function chooseSentenceElement() {
    ranNumSent = Math.floor(Math.random()*26)
    return sentence[ranNumSent];
}

function mutateSentence() {
    let mutatedSentence = sentence.slice();
    let selectedLetter = chooseSentenceElement();
    let newLetter = chooseAlphabet();
    mutationLoop();
    mutatedSentence.join();
    return mutatedSentence;
}

function mutationLoop(){
    for (count=0; count<50; count++){
        mutatedSentence.splice(ranNumSent, 1, newLetter);
        return mutatedSentence;
}

console.log(mutateSentence())