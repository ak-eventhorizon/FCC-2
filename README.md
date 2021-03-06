# freeCodeCamp - Algorithms and Data Structures Projects

## 1 - Palindrome Checker

### Test Case:

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

***Note:***

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

## 2 - Roman Numeral Converter

### Test Case:

Convert the given number into a roman numeral.

| Symbol | I | V |  X |  L |  C  |  D  |   M  |
|:------:|:-:|:-:|:--:|:--:|:---:|:---:|:----:|
|  Value | 1 | 5 | 10 | 50 | 100 | 500 | 1000 |

| 1 |  2 |  3  |  4 | 5 |  6 |  7  |   8  |  9 |
|:-:|:--:|:---:|:--:|:-:|:--:|:---:|:----:|:--:|
| I | II | III | IV | V | VI | VII | VIII | IX |

| 10| 20 |  30 | 40 | 50| 60 |  70 |  80  | 90 |
|:-:|:--:|:---:|:--:|:-:|:--:|:---:|:----:|:--:|
| X | XX | XXX | XL | L | LX | LXX | LXXX | XC |

|100| 200| 300 | 400|500| 600| 700 |  800 | 900|
|:-:|:--:|:---:|:--:|:-:|:--:|:---:|:----:|:--:|
| C | CC | CCC | CD | D | DC | DCC | DCCC | CM |


***Note:***

All roman numerals answers should be provided in upper-case.

## 3 - Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' <-> 'N', 'B' <-> 'O' and so on.

### Test Case:

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

***Note:***

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## 4 - Telephone Number Validator

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers:

555-555-5555  
(555)555-5555  
(555) 555-5555  
555 555 5555  
5555555555  
1 555 555 5555  

### Test Case:

Return true if the string is a valid US phone number, otherwise return false.

***Note:***

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. 

## 5 - Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (CID) as the third argument.

CID is a 2D array listing available currency.

|    Currency Unit    |       Amount       |
|:-------------------:|:------------------:|
|        Penny        |    $0.01 (PENNY)   |
|        Nickel       |   $0.05 (NICKEL)   |
|         Dime        |     $0.1 (DIME)    |
|       Quarter       |   $0.25 (QUARTER)  |
|        Dollar       |      $1 (ONE)      |
|     Five Dollars    |      $5 (FIVE)     |
|     Ten Dollars     |      $10 (TEN)     |
|    Twenty Dollars   |    $20 (TWENTY)    |
| One-hundred Dollars | $100 (ONE HUNDRED) |

### Test Case:

The checkCashRegister() function should always return an object with a status key and a change key.

Return 
```JavaScript
{
    status: "INSUFFICIENT_FUNDS",  
    change: []
}
```  
if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return  
```JavaScript
{
    status: "CLOSED", 
    change: [...]
}
```  
with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return  
```JavaScript
{
    status: "OPEN",  
    change: [...]
}
```  
with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
