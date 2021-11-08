### Secret Codes

This project was inspired by a task in Codecademy.
A secret code creator and decoder for my children, using JavaScript stored in a separate file rather than within this page.

## Secret Message Create

Type your message in here <input type="text" id="message" name="message"/>
<input type="button" onclick="createSecretMessage()" value="Click to create secret code" />
<div id="encoded"><BR/></div>

<BR/>

## Secret Message Reveal
Type the secret code in here <input type="text" id="reveal" name="reveal"/>
<input type="button" onclick="decodeSecretMessage()" value="Click to reveal secret message" />
<div id="decoded"><BR/></div>

<BR/>
<script type="text/javascript" src="./secretMessages.js"></script>

<script>
//const messageCode = require('./secretMessages.js');
//const reverseMessage = messageCode.reverse();

  function createSecretMessage() {
    encodeMessage = document.getElementById("message").value;
    console.log(encodeMessage);
    response = encodeSecrets(encodeMessage);
    document.getElementById("encoded").innerHTML = response;
};

  function decodeSecretMessage() {
    decodedMessage = document.getElementById("reveal").value;
    console.log(decodedMessage);
    result = decodeSecrets(decodedMessage);
    document.getElementById("decoded").innerHTML = result;
};

</script>