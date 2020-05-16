'use strict';

import {palindromeChecker} from './modules/palindromeChecker.js';



let btnPalindromeCheck = document.getElementById('palindrome_button');
let resultPalindromeCheck = document.getElementById('palindrome_result');

btnPalindromeCheck.onclick = function(){
    let checkResult = palindromeChecker('palindrome_input');

    if (checkResult){
        resultPalindromeCheck.innerHTML = 'PALINDROME!';
    } else {
        resultPalindromeCheck.innerHTML = 'not palindrome';
    }
};