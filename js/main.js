'use strict';

import {palindromeChecker} from './modules/palindromeChecker.js';
import {romanConverter} from './modules/romanConverter.js';

/*************** Palindrome Checker ***************/

let inputPalindromeCheck = document.getElementById('palindrome_input');
let btnPalindromeCheck = document.getElementById('palindrome_button');
let resultPalindromeCheck = document.getElementById('palindrome_result');

btnPalindromeCheck.onclick = function(){
    let checkResult = palindromeChecker(inputPalindromeCheck.value);

    if (checkResult){
        resultPalindromeCheck.innerHTML = 'PALINDROME!';
    } else {
        resultPalindromeCheck.innerHTML = 'not palindrome';
    }
};

/*************** Roman Converter ***************/

let inputRomanConverter = document.getElementById('roman_converter_input');
let resultRomanConverter = document.getElementById('roman_converter_result');

inputRomanConverter.oninput = function(){
    let convertedNumber = romanConverter(+inputRomanConverter.value);
    resultRomanConverter.innerHTML = convertedNumber;
};