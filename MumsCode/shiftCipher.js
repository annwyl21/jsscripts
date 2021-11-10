//Shift Cipher Project
  
    //non-letters remain the same
    //alphabet must be wrapped b -4 =y


class ShiftCipher {
    constructor(num) {
        this.cipher = num;
    }
    encrypt(message){
        let messageArray = [];
        let encryptedMessage = "";
        let newLetter = "";
        let upperMessage = message.toUpperCase();
        for (let count=0; count<message.length; count++) {
            let letterValue = upperMessage.charCodeAt(count);
            let newLetterValue = letterValue;
            let adjustedValue = newLetterValue;
            
            if (letterValue >=65 && letterValue <=90) {
                let newLetterValue = letterValue + this.cipher;
        
                if (newLetterValue <65) {
                    adjustedValue = newLetterValue +26;
                } else if (newLetterValue >90) {
                    adjustedValue = newLetterValue -26;
                } else {
                    adjustedValue = newLetterValue;
                } 
            let newLetter = String.fromCharCode(adjustedValue);
            messageArray.push(newLetter);
            encryptedMessage = messageArray.join();
            }
        }
    return encryptedMessage;
    }
    /*
    decrypt(string){
      lower case
      shifted back
    }
    */
    }

//console.log(`The character code ${message.charCodeAt(0)} is equal to ${message.charAt(0)}`);


const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('A Zebra'));
//console.log(cipher.encrypt('I love to code!')); 
// returns 'K NQXG VQ EQFG!'
/*
cipher.decrypt('K <3 OA RWRRA'); 
// returns 'i <3 my puppy'
*/