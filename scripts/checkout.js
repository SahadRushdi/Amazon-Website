import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

// Asyns makes a function return a promise
async function loadPage() {
    try {
        // throw 'error1';

        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2';  //Used to create errors Syncronously [Right away!]
            loadCart(() => {
                 // reject('error3'); //Used to create errors asyncronously [Not immediatly!]
                resolve('value3');
            });
        });

    } catch (error) {
        console.log('Unexpected error. Please try again later!');
    }

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

// ---------------Using Promises--------------- 
/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
    
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
    // Loading cart using call back [This can cause call back hell]
});
*/
