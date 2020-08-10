'use strict';

import {checkCashRegister} from './modules/checkCashRegister.js';

/*************** Check Cash Register ***************/

let paymentField = document.querySelector('#payment_field');
paymentField.value = 0;

let priceField = document.querySelector('#price_field');

let actionButton = document.querySelector('#action_button');

let cashRegisterContent = new Map([
    [100,10],
    [20,10],
    [10,10],
    [5,10],
    [1,10],
    [0.25,10],
    [0.1,10],
    [0.05,10],
    [0.01,10]
]);
let cashRegisterSum = calculateMapSum(cashRegisterContent);

let paymentFromClient = new Map([
    [100,0],
    [20,0],
    [10,0],
    [5,0],
    [1,0],
    [0.25,0],
    [0.1,0],
    [0.05,0],
    [0.01,0]
]);
let paymentSum = calculateMapSum(paymentFromClient);

let changeToClient = new Map([
    [100,0],
    [20,0],
    [10,0],
    [5,0],
    [1,0],
    [0.25,0],
    [0.1,0],
    [0.05,0],
    [0.01,0]
]);
let changeSum = calculateMapSum(changeToClient);



let clientPocketBtns = document.querySelectorAll('#app > div.client_pocket > div.cash > div.cell');

// event listeners on Client Pocket buttons
for (let element of clientPocketBtns) {
    element.addEventListener('click', function () {
        // подсчет и вывод поля Payment
        let result = parseFloat(paymentField.value) + parseFloat(element.innerHTML);
        paymentField.value = result.toFixed(2);

        // заполнение Map'a paymentFromClient
        let currentQuantity = paymentFromClient.get(+element.innerHTML);
        paymentFromClient.set(+element.innerHTML, ++currentQuantity);
    });
}

// map summarizer
function calculateMapSum(map){
    let result = 0;

    function calculateMapElement(value, key, map){
        let multiple = key * map.get(key);
        result += multiple;
    }
    map.forEach(calculateMapElement);
    return result;
}






actionButton.addEventListener('click', () => {
    console.log('Payment:');
    console.log(paymentFromClient);
    console.log('PaymentSum:');
    console.log(paymentSum);
    console.log('Change:');
    console.log(changeToClient);
    console.log('ChangeSum:');
    console.log(changeSum);
    console.log('CashRegister:');
    console.log(cashRegisterContent);
    console.log('CashRegisterSum:');
    console.log(cashRegisterSum);
    console.log('Price Field Value:');
    console.log(parseFloat(priceField.value).toFixed(2));
});



checkCashRegister();