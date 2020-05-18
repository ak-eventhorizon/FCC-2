'use strict';

// IN - number - value need to be converted
// OUT - string

function romanConverter(num){

    if(typeof(num) !== 'number'){
        let err = new Error('WRONG INPUT TYPE!');
        console.log(err);
    }

}



export {romanConverter};