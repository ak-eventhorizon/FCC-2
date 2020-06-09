'use strict';

// IN - number - value need to be converted
// OUT - string, roman number

function romanConverter(num){

    if(typeof(num) !== 'number'){
        let err = new Error('WRONG INPUT TYPE!');
        console.log(err);
    }

    let result = '';

    if(num < 0){
        result = 'Need positive number!';
    } else if (num > 9999){
        result = '...OVER 9999!!!';
    } else {
        let thousands = Math.floor(num/1000);
        let hundreds = Math.floor((num - 1000*thousands)/100);
        let tens = Math.floor((num - 1000*thousands - 100*hundreds)/10);
        let units = num - 1000*thousands - 100*hundreds - 10*tens;

        for (let i = 0; i < thousands; i++) {
            result += 'M';
        }

        if (result !== '') {
            result += ' ';
        }
        
        switch (hundreds) {
            case 0: result+=''; break;
            case 1: result+='C '; break;
            case 2: result+='CC '; break;
            case 3: result+='CCC '; break;
            case 4: result+='CD '; break;
            case 5: result+='D '; break;
            case 6: result+='DC '; break;
            case 7: result+='DCC '; break;
            case 8: result+='DCCC '; break;
            case 9: result+='CM '; break;
        }

        switch (tens) {
            case 0: result+=''; break;
            case 1: result+='X '; break;
            case 2: result+='XX '; break;
            case 3: result+='XXX '; break;
            case 4: result+='XL '; break;
            case 5: result+='L '; break;
            case 6: result+='LX '; break;
            case 7: result+='LXX '; break;
            case 8: result+='LXXX '; break;
            case 9: result+='XC '; break;
        }

        switch (units) {
            case 0: result+=''; break;
            case 1: result+='I'; break;
            case 2: result+='II'; break;
            case 3: result+='III'; break;
            case 4: result+='IV'; break;
            case 5: result+='V'; break;
            case 6: result+='VI'; break;
            case 7: result+='VII'; break;
            case 8: result+='VIII'; break;
            case 9: result+='IX'; break;
        }
    }

    return result;
}



export {romanConverter};