import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

//------------------BASIC TEST CASES--------------
console.log('Converts Cents into dollars');
if (formatCurrency(3075) === '30.75') {
    console.log('Passed');
} else {
    console.log('Failed');
}


//------------------EDGE CASES (BIT MORE COMPLEX SITUATIONS)-------------
console.log('Works with 0');
if (formatCurrency(0) === '0.00') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('Rounds up to the neaeest cents');
if (formatCurrency(2000.5) === '20.01') {
    console.log("passes");
} else {
    console.log('fail');
}

console.log('Rounds up to the neaeest cents');
if (formatCurrency(2000.4) === '20.00') {
    console.log("passes");
} else {
    console.log('fail');
}