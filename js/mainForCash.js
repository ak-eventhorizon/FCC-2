'use strict';

import {checkCashRegister} from './modules/checkCashRegister.js';

/*************** Check Cash Register ***************/

let payment = document.querySelector('#payment_field');
let price = document.querySelector('#price_field');

let cashRegister = [
    [100,0],
    [20,0],
    [10,0],
    [5,0],
    [1,0],
    [0.25,0],
    [0.1,0],
    [0.05,0],
    [0.01,0]
];

let paymentArr = [
    [100,0],
    [20,0],
    [10,0],
    [5,0],
    [1,0],
    [0.25,0],
    [0.1,0],
    [0.05,0],
    [0.01,0]
];

let changeArr =[
    [100,0],
    [20,0],
    [10,0],
    [5,0],
    [1,0],
    [0.25,0],
    [0.1,0],
    [0.05,0],
    [0.01,0]
];

payment.value = 0;

let clientPocketBtns = document.querySelectorAll('#app > div.client_pocket > div.cash > div.cell');

// event listeners on Client Pocket buttons
for (let element of clientPocketBtns) {
    element.addEventListener('click', function () {
        let result = parseFloat(payment.value) + parseFloat(element.innerHTML);
        payment.value = result.toFixed(2);
    });
}





checkCashRegister();