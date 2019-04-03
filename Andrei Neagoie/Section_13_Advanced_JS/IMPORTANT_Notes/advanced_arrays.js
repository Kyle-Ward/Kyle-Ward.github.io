const array = [1, 2, 10, 16];

// if we want to double each index with forEach, we must first create an empty array then push each doubled returned item to the empty array. This is because forEach does not create a new array itself.
const double = [];
const newArray = array.forEach((num) => {
    double.push(num *2);
});
console.log('forEach', double); // returns [2, 4, 20, 32

// map, filter, and reduce - probably most important array methods

// map - always need to return something, does not change original array. forEach only iterates and does what function says, map iterates and expects a return value. forEach allows lots of side effects, map theoretically does not.
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

// filter - returns a new array of items in the old array that meet the criteria of the funtion called upon them.
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

// reduce - takes params of accumulator and the item in each index as it iterates. Accumlator is a param to use within the body of the function that accumulates each item in the original array as it goes through them. The param at the end of the function when using reduce is the starting point of the accumulator param.
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log('reduce', reduceArray);