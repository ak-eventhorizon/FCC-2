'use strict';

import {checkCashRegister} from './modules/checkCashRegister.js';

/*************** Check Cash Register ***************/

const payment = {
    content: new Map([
        [100,0],
        [20,0],
        [10,0],
        [5,0],
        [1,0],
        [0.25,0],
        [0.1,0],
        [0.05,0],
        [0.01,0]
    ]),
    sum: function (){
        let result = 0;
    
        function calculateMapElement(value, key, map){
            let multiple = key * map.get(key);
            result += multiple;
        }
        this.content.forEach(calculateMapElement);
        return result.toFixed(2);
    }
};

const change = {
    content: new Map([
        [100,0],
        [20,0],
        [10,0],
        [5,0],
        [1,0],
        [0.25,0],
        [0.1,0],
        [0.05,0],
        [0.01,0]
    ]),
    sum: function (){
        let result = 0;
    
        function calculateMapElement(value, key, map){
            let multiple = key * map.get(key);
            result += multiple;
        }
        this.content.forEach(calculateMapElement);
        return result.toFixed(2);
    }
};

const register = {
    content: new Map([
        [100,10],
        [20,10],
        [10,30],
        [5,30],
        [1,50],
        [0.25,80],
        [0.1,80],
        [0.05,50],
        [0.01,50]
    ]),
    sum: function (){
        let result = 0;
    
        function calculateMapElement(value, key, map){
            let multiple = key * map.get(key);
            result += multiple;
        }
        this.content.forEach(calculateMapElement);
        return result.toFixed(2);
    }
};

const ui = {
    payment: document.querySelector('#payment_field'),
    price: document.querySelector('#price_field'),
    change: document.querySelector('#change_field'),
    status: document.querySelector('#status_field'),

    clientButtons: document.querySelectorAll('div.client_pocket > div.cash > div.cell'),
    mainButton: document.querySelector('#action_button'),

    resetPayment: function (){
        this.payment.value = '0.00';
    },
    resetPrice: function (){
        this.price.value = '0.00';
    },
    refreshRegisterCells: function(){
        // тут должен быть метод, заполняющий отображение ячеек cash register'а в 
        // соответствии с мапом register
    },
    refreshChangeCells: function(){
        // тут должен быть метод, заполняющий отображение ячеек change'а в 
        // соответствии с мапом change
    },
};

ui.resetPayment();
ui.resetPrice();



for (let element of ui.clientButtons) {
    element.addEventListener('click', function () {
        // подсчет и вывод поля Payment
        let result = parseFloat(ui.payment.value) + parseFloat(element.innerHTML);
        ui.payment.value = result.toFixed(2);

        // инкремент определенного Map'a из payment.content (плюс одна купюра)
        let currentQuantity = payment.content.get(+element.innerHTML);
        payment.content.set(+element.innerHTML, ++currentQuantity);
    });
}



ui.mainButton.addEventListener('click', () => {
    console.log('Payment:');
    console.log(payment.content);
    console.log('PaymentSum:');
    console.log(payment.sum());
    console.log('Change:');
    console.log(change.content);
    console.log('ChangeSum:');
    console.log(change.sum());
    console.log('CashRegister:');
    console.log(register.content);
    console.log('CashRegisterSum:');
    console.log(register.sum());
    console.log('Price Field Value:');
    console.log(parseFloat(ui.price.value).toFixed(2));
});



checkCashRegister();