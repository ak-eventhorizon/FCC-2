'use strict';

// IN - <input> tag id that value need to check for palindrome
// OUT - boolean

function palindromeChecker(tagID){

    let input = document.getElementById(tagID).value;

    //check there is a input
    if (input) {
        // replace not-words (ENG and RUS) and not-digits
        let clearedInputString = input.replace(/[^A-Za-zА-Яа-я0-9]/g,''); 
        let forwardString = clearedInputString.toLowerCase();
        let backwardString = clearedInputString.split('').reverse().join('').toLowerCase();

        return forwardString === backwardString ? true : false;
    } else {
        return false;
    }
}



export {palindromeChecker};