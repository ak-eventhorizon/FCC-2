'use strict';

// IN - number - value need to be converted
// OUT - string, roman number


// | Symbol | I | V |  X |  L |  C  |  D  |   M  |
// |:------:|:-:|:-:|:--:|:--:|:---:|:---:|:----:|
// |  Value | 1 | 5 | 10 | 50 | 100 | 500 | 1000 |

function romanConverter(num){

    if(typeof(num) !== 'number'){
        let err = new Error('WRONG INPUT TYPE!');
        console.log(err);
    }

    return num;

}



export {romanConverter};