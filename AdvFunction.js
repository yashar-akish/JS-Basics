// closure

const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();

newFunc();


//========================================
//========================================


const multiply = (a, b) => a * b;

// curring

const curriedMultiply = (a) => (b) => a * b;

console.log(multiply(2, 3));
console.log(curriedMultiply(3))
console.log(curriedMultiply(3)(4))

const multiplyBy5 = curriedMultiply(5);

console.log("1", multiplyBy5(1))
console.log("2", multiplyBy5(2))
console.log("3", multiplyBy5(3))
console.log("4", multiplyBy5(4))
console.log("5", multiplyBy5(5))
console.log("6", multiplyBy5(6))

// compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);
console.log("compose:", compose(sum, sum)(5))

/*
    compose = (f, g) => (a) => f(sum(5));
    compose = (f, g) => (a) => sum(6);
    compose = (f, g) => (a) => 7;
*/

const addTwo = (num1) => num1 + 2;
const byFour = (num2) => num2 * 4;

const comp2 = (f, g) => (a) => f(g(a));
console.log(comp2(addTwo, byFour)(6)); //2+(4*6)=26

// Memoization

console.log('======== without using memoization =======');

function addTo80(n) {
    console.log('long time')
    return n + 80;
}
console.log('1:', addTo80(5));
console.log('2:', addTo80(5));
console.log('3:', addTo80(5));

console.log('======== using memoization =======');

let cache = {};

function memoizedAddTo80(n) {

    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time!!!!');
        cache[n] = 5 + 80;
        return cache[n];
    }
}

console.log('1:', memoizedAddTo80(5));
console.log('2:', memoizedAddTo80(5));
console.log('3:', memoizedAddTo80(5));