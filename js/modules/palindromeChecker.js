'use strict';

// INPUT - input tag id that value need to check for palindrome
// OUTPUT - boolean

function palindromeChecker(tagID){

    let input = document.getElementById(tagID).value;

    //check there is a input
    if (input) {
        let clearedInputString = input.replace(/[\W_]/g,''); // replace not-words and underscopes
        let forwardString = clearedInputString.toLowerCase();
        let backwardString = clearedInputString.split('').reverse().join('').toLowerCase();

        return forwardString === backwardString ? true : false;
    } else {
        return false;
    }
}



export {palindromeChecker};