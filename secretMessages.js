//Functions to export to create the secret messages play tool for the kids

function reverse(string) {
    messageArray = string.split("");
    messageReversed = messageArray.reverse();
    return messageReversed.join("");
}

console.log(reverse("hello"));

