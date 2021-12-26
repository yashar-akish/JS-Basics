const ar = [2, 4, 3, 12, 8];
const doubled = [];

const multArr = ar.forEach((num) => {
    doubled.push(num * 2);
})

console.log(doubled);

/****************** map(), filter(), reduce(), includes(), find() ********/

const array = [3, 2, 5, 7, 6, 3, 9, 4, 1, 8, 2]

const mapArr = array.map((num) => {
    return num * 2;
});

console.log('map:', mapArr);

const filterArr = array.filter((num) => {
    return num % 2 !== 0;
})

console.log('filter:', filterArr);

const reduceArr = array.reduce((accumulator, num) => {
    return accumulator + num
}, 100)
console.log('reduce by 100:', reduceArr);

const includesArr = array.includes(4);
console.log('includes 4:', includesArr);

const includesArrNew = array.includes(3, 6);
console.log('includes 3 from index 6:', includesArrNew);

const findArr = array.find((num) => {
    return num === 5
});
console.log('find 5:', findArr);

const findArrNew = array.find((num) => {
    return num > 5
});
console.log('find number > 5:', findArrNew);