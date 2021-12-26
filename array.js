let arr = ["blue", "red", "green", "yellow", "pink", "white", "black", "orange"];

console.log('main array', arr);

arr.shift();
console.log('shit array', arr);

arr.pop();
console.log('pop array', arr);

arr.push("gray");
console.log('push array', arr);

let arr2 = arr.concat(["gold", "silver"]);
console.log('concat array', arr2);

arr.sort();
console.log('sort array', arr);

arr.reverse();
console.log('revers array', arr);

arr.splice(0, 1);
console.log('splice array', arr);

//------------ Spread and Destructure ------------
// Spread
const numbers = [1, 2, 3, 4];
console.log('number array', numbers);
const newNumbers = [...numbers, 5, 6, 7, 8]
console.log('new numbers array', newNumbers);

//Destructure
const arrNum = [1, 2, 3];
let num1, num2, num3;
[num1, num2] = arrNum
console.log(num1);
console.log(num2);

[num1, , num3] = arrNum
console.log(num1);
console.log(num3);