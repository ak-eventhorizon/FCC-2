'use strict';

import {palindromeChecker} from './modules/palindromeChecker.js';
import {romanConverter} from './modules/romanConverter.js';
import {caesarsCipher} from './modules/caesarsCipher.js';
import {telephoneValidator} from './modules/telephoneValidator.js';
import {checkCashRegister} from './modules/checkCashRegister.js';

/*************** Palindrome Checker ***************/

let inputPalindromeCheck = document.getElementById('palindrome_input');
let btnPalindromeCheck = document.getElementById('palindrome_button');
let resultPalindromeCheck = document.getElementById('palindrome_result');

btnPalindromeCheck.onclick = function(){
    let result = palindromeChecker(inputPalindromeCheck.value);

    if (result){
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

/*************** Caesars Cipher ***************/

let inputCipher = document.getElementById('cipher_input');
let btnCipher = document.getElementById('cipher_button');
let resultCipher = document.getElementById('cipher_result');

btnCipher.onclick = function(){
    let decodedString = caesarsCipher(inputCipher.value);
    resultCipher.innerHTML = decodedString;
};

/*************** Telephone Number Validator ***************/

let inputTelephone = document.getElementById('telephone_input');
let resultTelephone = document.getElementById('telephone_result');

inputTelephone.oninput = function(){
    let result = telephoneValidator(inputTelephone.value);

    if (result){
        resultTelephone.innerHTML = 'NUMBER IS VALID';
    } else {
        resultTelephone.innerHTML = 'NUMBER NOT VALID';
    }
};

/*************** Check Cash Register ***************/

// ToDo