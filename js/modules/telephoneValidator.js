'use strict';

// IN - string - need to check for telephone number
// OUT - boolean

function telephoneValidator(str){

    let inputStr = str;
    let telephoneRegex = /^\d+/;

    let validationResult = telephoneRegex.test(inputStr);

    console.log(inputStr.match(telephoneRegex)); // временно для отладки
    
    return validationResult;
}

// первым символом может быть одна цифра (а может не быть)
// затем пробел, тире или скобка
// затем три цифры
// затем пробел или тире или закрывающая скобка
// затем три цифры
// затем тире или пробел или ничего
// затем четыре цифры

// 555-555-5555  
// (555)555-5555  
// (555) 555-5555  
// 555 555 5555  
// 5555555555  
// 1 555 555 5555  


export {telephoneValidator};

