//Function to export that create the secret message play tool for the kids

/*function reverse(string) {
    messageArray = string.split("");
    messageReversed = messageArray.reverse();
    return messageReversed.join("");
}*/
//module.exports.reverse = reverse;

module.exports.reverse = function(message) {
    messageArray = message.split("");
    messageReversed = messageArray.reverse();
    return messageReversed.join("");
    }
