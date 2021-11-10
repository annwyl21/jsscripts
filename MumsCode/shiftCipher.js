//Shift Cipher Project
  
    //non-letters remain the same
    //alphabet must be wrapped b -4 =y


class ShiftCipher {
    constructor(num) {
        this.cipher = num;
    }
    encrypt(message){
        let encryptedMessage = "";
        let upperMessage = message.toUpperCase();
        for (let count=0; count<message.length; count++) {
            let letterValue = upperMessage.charCodeAt(count);
            let newLetterValue = letterValue;   
            if (letterValue >=65 && letterValue <=90) {
                newLetterValue = letterValue + this.cipher;
               if (newLetterValue >90) {
                    newLetterValue = newLetterValue -26;
                }
            }
            let newLetter = String.fromCharCode(newLetterValue);
            encryptedMessage = encryptedMessage + newLetter;
        }
    return encryptedMessage;
    }
    
    decrypt(codedMessage){
        let decryptedMessage = "";
        let lowerMessage = codedMessage.toLowerCase();
        for (let count=0; count<codedMessage.length; count++) {
            let letterValue = lowerMessage.charCodeAt(count);
            let newLetterValue = letterValue; 
            if (letterValue >=97 && letterValue <=122) {
                newLetterValue = letterValue - this.cipher;
               if (newLetterValue <97) {
                    newLetterValue = newLetterValue +26;
                }
            }
            let newLetter = String.fromCharCode(newLetterValue);
            decryptedMessage = decryptedMessage + newLetter;
        }
    return decryptedMessage;
    }
    
    }

//console.log(`The character code ${message.charCodeAt(0)} is equal to ${message.charAt(0)}`);


const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); 
// returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); 
// returns 'i <3 my puppy'
