//Function to export that create the secret message play tool for the kids

function reverse(string) {
    messageArray = string.split("");
    messageReversed = messageArray.reverse();
    return messageReversed.join("");
}
//module.exports.reverse = reverse;

/*module.exports.reverse = function(message) {
    messageArray = message.split("");
    messageReversed = messageArray.reverse();
    return messageReversed.join("");
    }*/

function caesarCipher(string) {
    alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    codedMessageArray = string.split("");
    let newArray = [];
    let position;
    let newPosition;
    for (let counter = 0; counter < codedMessageArray.length; counter++){
        position = alphabetArray.indexOf(codedMessageArray[counter]);
        let adjustedPosition = position +6;
            if (adjustedPosition >=26) {
                newPosition = adjustedPosition - 26
            }else{
                newPosition = adjustedPosition
            };
        newArray.push(alphabetArray[newPosition]);
    }
    return newArray.join("");
}

function decodeCaesarCipher(string) {
    alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    codedMessageArray = string.split("");
    let newArray = [];
    let position;
    let newPosition;
    for (let counter = 0; counter < codedMessageArray.length; counter++){
        position = alphabetArray.indexOf(codedMessageArray[counter]);
        let adjustedPosition = position -6;
            if (adjustedPosition <0) {
                newPosition = adjustedPosition + 26
            }else{
                newPosition = adjustedPosition
            };
        newArray.push(alphabetArray[newPosition]);
    }
    return newArray.join("");
}

function encodeSecrets(string) {
    return reverse(caesarCipher(string));
}

function decodeSecrets(string) {
    return decodeCaesarCipher(reverse(string));
}
