'use strict';

// IN - string - need to check for palindrome
// OUT - boolean

function palindromeChecker(str){

    if(typeof(str) !== 'string'){
        let err = new Error('WRONG INPUT TYPE!');
        console.log(err);
    }

    // replace non-words (ENG and RUS) and non-digits
    let clearedInputString = str.replace(/[^A-Za-zА-Яа-я0-9]/g, ''); 
    let forwardString = clearedInputString.toLowerCase();
    let backwardString = clearedInputString.split('').reverse().join('').toLowerCase();

    return forwardString === backwardString ? true : false;
}



export {palindromeChecker};