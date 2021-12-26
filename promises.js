/**
 *          Promises
 * --------------------------
 */


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('I have succeeded');
//     }, 1000);
// });

// myPromise.then(value => console.log(value));



const myPromise = new Promise((resolve, reject) => {

    if (false) {
        setTimeout(() => {
            resolve('\tI have succeeded');
        }, 1000);
    } else {
        reject('\tI have failed');
    }

});

myPromise
    .then(value => value + '!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));