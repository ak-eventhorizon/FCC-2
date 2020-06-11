'use strict';

// IN - encoded string
// OUT - decoded string

function caesarsCipher(str){

    let encodedString = str.toUpperCase();
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shift = 13;
    let decodedString = '';

    for (let i = 0; i < encodedString.length; i++) {

        let currentLetter = encodedString[i];
        let currentLetterPosition = alphabet.indexOf(currentLetter);
        let neededLetterPosition = currentLetterPosition + shift;

        if(currentLetterPosition === -1){
            decodedString += currentLetter;
        } else {
            if(neededLetterPosition < 0) {
                neededLetterPosition = alphabet.length + neededLetterPosition;
            } else if(neededLetterPosition > alphabet.length - 1) {
                neededLetterPosition = neededLetterPosition - alphabet.length;
            }
            decodedString += alphabet[neededLetterPosition];
        }
    }

    return decodedString;
}



export {caesarsCipher};

